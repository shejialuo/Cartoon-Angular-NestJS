import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Info} from '../components/users-remark/users-remark';
@Injectable({
  providedIn: 'root'
})
export class UsersRemarkService {

  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:3000/users-remarks';

  findAll(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

  addOne(user: Info): Observable<Info> {
    return this.httpClient.post<any>(this.url, user);
  }

}
