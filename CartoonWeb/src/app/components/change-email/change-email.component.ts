import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {UsersPageService} from '../../services/users-page.service';
import {LogService} from '../../services/log.service';
@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {
  user: any;
  flag = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service1: UsersPageService,
              private service2: LogService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', [Validators.required, Validators.email]]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.user = this.service2.user;
  }
  email(str: string) {
    this.service1.emailSender(str).subscribe();
  }
  check(password: string): void {
    this.service1.check(password).subscribe(
      (flag) => this.flag = flag );
  }

  changeEmail(str1: string, str2: string) {
    this.service1.changeEmail(str1, str2).subscribe();
  }

}
