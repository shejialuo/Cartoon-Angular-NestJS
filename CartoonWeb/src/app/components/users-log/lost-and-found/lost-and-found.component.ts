import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {LostAndFoundService} from '../../../services/lost-and-found.service';
@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.css']
})
export class LostAndFoundComponent implements OnInit {
  content = '请输入您的电子邮箱地址。您会收到一封包含创建新密码所需要的验证码';
  // 确定Angular Material卡片的内容

  flag = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service: LostAndFoundService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', [Validators.required, Validators.email]]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      userprepassword: ['', [Validators.required, Validators.minLength(6)]], // 定义第二个字段
      userpostpassword: ['', [Validators.required, this.passwordValidators]], // 定义第三个字段
    });
  }
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

  email(poster: string): void {
    this.service.email(poster).subscribe();
  }
  check(password: string): void {
    this.service.checkPassword(password).subscribe(
      (flag) => this.flag = flag );
  }

  change(password: string): void {
    this.service.changePassword(password).subscribe();
  }
}
