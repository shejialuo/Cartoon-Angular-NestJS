import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LostAndFoundService {

  constructor(private httpClient: HttpClient) { }


  private userLogUrl = 'http://localhost:3000/users-lost-and-found';

  email(poster: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userLogUrl}/email`, poster);
  }

  checkPassword(checknumber: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userLogUrl}/check`, checknumber);
  }

  changePassword(password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userLogUrl}/change`, password);
  }
}
