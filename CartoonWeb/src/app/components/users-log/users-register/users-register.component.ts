import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl, AsyncValidatorFn, FormArray} from '@angular/forms';
import { RegisterService } from '../../../services/register.service';
import {User} from '../user';
import { observable, Subject, of , Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, map, first, flatMap} from 'rxjs/operators';
@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})

export class UsersRegisterComponent implements OnInit {
  flag = false;
  user: User;
  // 用来设置卡片的内容
  content = '欢迎您来到Cartoon的世界。';
  // 用来设置步进器1的内容
  step1 = '请填写您的相关信息';
  // 用来设置步进器2的内容
  step2 = '进行邮箱验证';
  // 定义两个FormGroup类
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private registerservice: RegisterService,
              private formBuilder: FormBuilder,
              ) { }
  ngOnInit() {
    // 初始化
    this.firstFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)], this.usernameValidators.bind(this) ] , // 定义第一个字段
      userprepassword: ['', [Validators.required, Validators.minLength(6)]], // 定义第二个字段
      userpostpassword: ['', [Validators.required, this.passwordValidators]], // 定义第三个字段
    });
    this.secondFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // 定义第一个字段
      checkpassword: ['', [Validators.required]], // 定义第二个字段
    });
  }
  // 此函数实现自定义验证密码是否一致

  passwordValidators(control: AbstractControl) {
    const confirmpassword = control.value;
    // 读取confirmpassword的值。
    if ( control.parent === undefined) { return null; }
    // 由于初始化control.parent并不存在，设置一个判断避免出错。
    const password = control.parent.value.userprepassword;
    // 读取userprepassword输入框的值
    if ( confirmpassword !== password) {
      return {isSame: true};
    }
    return null;
  }

  // 通过异步的方式实现验证是否重名

  usernameValidators(control: AbstractControl) {
    return control.valueChanges.pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          switchMap(() => {
            return this.registerservice.checkName(control.value);
          }),
          map(result => result ? { isSame: true } : null),
          first()
        );
  }
  // 当符合要求时，将新注册的用户加入到数据库

   add(username: string, userpassword: string, useremail: string): void {
     const newUser: User = {username, userpassword, useremail} as User;
     this.registerservice.addUsers(newUser).subscribe();
   }

   // 发送邮件的功能
  email(poster: string): void {
    this.registerservice.email(poster).subscribe();
  }

  // 发送验证码功能

  check(password: string): void {
    this.registerservice.checkPassword(password).subscribe(
      (flag) => this.flag = flag );
  }
}


