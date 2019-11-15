import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogService {
  user: any;
  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:3000/users-login';

  usersLogin(str1: string, str2: string): Observable<any> {
    return this.httpClient.post<any>(this.url, [str1, str2]);
  }
}
