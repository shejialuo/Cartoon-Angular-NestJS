import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../components/users-log/user';
@Injectable({
   providedIn: 'root'
})
export class RegisterService {

  // 构造函数注入HttpClient服务

  constructor(private httpClient: HttpClient) { }

  // 定义好userLogUrl的地址

  private userLogUrl = 'http://localhost:3000/users-registers';

  // 实现登录的服务

  email(poster: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userLogUrl}/email`, poster);
  }
  addUsers(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userLogUrl, user);
  }

  checkName(name: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userLogUrl}/solo`, name);
  }

  checkPassword(password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userLogUrl}/check`, password);
  }

}
