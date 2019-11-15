import { Component, OnInit } from '@angular/core';
import {LogService} from '../../services/log.service';
import {UsersPageService} from '../../services/users-page.service';
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  user: any;
  content = '您尚未登录，请返回首页登录';
  constructor(private service1: LogService,
              private service2: UsersPageService) { }

  ngOnInit() {
    this.user = this.service1.user;
  }
  update(str: string[]) {
    str = [
      this.user.username, this.user.userusename,
      this.user.usersex, this.user.userqq,
      this.user.userwebo, this.user.userbirthday,
      this.user. userintroduction, this.user.userinterest,
    ];
    this.service2.update(str).subscribe();
  }
}
