import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersPageService {
  str: any;
  constructor(private httpClient: HttpClient) { }
  private url = 'http://localhost:3000/users-pages';
  changePassword(str1: string, str2: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/password2`, [str1, str2]);
  }
  checkPassword(str1: string, str2: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/password1`, [str1, str2]);
  }
  emailSender(poster: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/emailer`, poster);
  }
  changeEmail(str1: string, str2: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/email`, [str1, str2]);
  }
  check(password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/check`, password);
  }
  update(str: string[]): Observable<any> {
    return this.httpClient.post<any>(this.url, str);
  }
}
