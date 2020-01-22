import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';

import { LoginInterface } from '../shared/interfaces/login.interface';
import { UserModel } from '../shared/models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  private baseUrl = environment.baseUrl;
  private AUTH_URL = this.baseUrl + '/auth';

  constructor(private router: Router, private http: HttpClient) {
  }

  login(data: LoginInterface & TypedAction<"[Auth] Login">): Observable<{ token: string }> {
    const userData = {
      login: data.login,
      password: data.login
    };
    return this.http.post<{ token: string }>(this.AUTH_URL + '/login', userData);
  }

  getUserInfo(): Observable<UserModel> {
    const token = localStorage.getItem('token');
    return this.http.post<UserModel>(this.AUTH_URL + '/userinfo', {token});
  }
}
