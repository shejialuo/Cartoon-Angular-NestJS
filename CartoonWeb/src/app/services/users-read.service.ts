import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Info} from '../components/users-read/users-read';
@Injectable({
  providedIn: 'root'
})
export class UsersReadService {

  constructor(private httpclient: HttpClient) { }
  private userLogUrl = 'http://localhost:3000/users-reads';
  findAll(): Observable<Info[]> {
    return this.httpclient.get<Info[]>(this.userLogUrl);
  }
}
