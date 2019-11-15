import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {UsersPageService} from '../../services/users-page.service';
import {LogService} from '../../services/log.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user: any;
  flag = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service1: UsersPageService,
              private service2: LogService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', [Validators.required]]
    });
    this.secondFormGroup = this.formBuilder.group({
      userprepassword: ['', [Validators.required, Validators.minLength(6)]], // 定义第二个字段
      userpostpassword: ['', [Validators.required, this.passwordValidators]], // 定义第三个字段
    });
    this.user = this.service2.user;
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
  changePassword(str1: string, str2: string) {
    this.service1.changePassword(str1, str2).subscribe();
  }
  checkPassword(str1: string, str2: string): void {
    console.log(str1); console.log(str2);
    this.service1.checkPassword(str1, str2).subscribe(
      (result) => {this.flag = result; console.log(result); }
    );
  }
}
