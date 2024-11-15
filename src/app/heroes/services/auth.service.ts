import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../auth/interfaces/user.interface';
import { asyncScheduler, catchError, Observable, scheduled } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private URLBase = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  onLogin(user: Partial<User>): Observable<HttpResponse<unknown> | boolean> {
    return this._http.post<HttpResponse<unknown>>(`${this.URLBase}/api/users/login`, user, { observe:'response' })
    .pipe(catchError(_=> scheduled([false], asyncScheduler)))
    ;
  }

  onRegister(user: Partial<User>): Observable<unknown | boolean> {
    return this._http.post(`${this.URLBase}/api/users/register`, user)
    .pipe(catchError( _ => scheduled([false], asyncScheduler)));
  }
}
