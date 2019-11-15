import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {LogService} from '../../services/log.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users-log',
  templateUrl: './users-log.component.html',
  styleUrls: ['./users-log.component.css']
})
export class UsersLogComponent implements OnInit {
  user: User = {
    username: '',
    userpassword: '',
    useremail: '',
  }; /*定义用户的基本数据结构*/
  userLog: any;
  flag = false;
  flag1: any;
  TypeAttribute = 'password';
  OnclickVisible() {
    this.TypeAttribute = 'text';
  }
  OnclickInvisible() {
    this.TypeAttribute = 'password';
  }
  constructor(private service: LogService) { }

  login(str1: string, str2: string): void {
    this.service.usersLogin(str1, str2).subscribe(
      (result) => {if (result) { this.service.user = result;
                                 this.flag1 = this.service.user;  }
                   // tslint:disable-next-line: one-line
                   else {this.flag = true; } }
    );
  }
  ngOnInit() {
    this.flag1 = this.service.user;
  }

  logOut() {
    this.service.user = undefined;
    this.flag1 = this.service.user;
  }
}
