import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { LoginInterface } from '../shared/interfaces/login.interface';
import { UserModel } from '../shared/models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  authorizedUser = new Subject<UserModel>();

  private baseUrl = environment.baseUrl;
  private AUTH_URL = this.baseUrl + '/auth';

  constructor(private router: Router, private http: HttpClient) {
  }

  public login(data: LoginInterface): void {
    this.getToken(data)
      .subscribe(
        resp => {
          localStorage.setItem('token', resp.token);
          console.log('log in successfully');
          this.getUserInfo().subscribe(user => this.authorizedUser.next(user));
          this.router.navigate(['courses']);
        },
        error => alert(`${error.error}. Please use LOGIN: flastname, PASSWORD: flastname OR
         LOGIN: Morales, PASSWORD: id`)
      );
  }

  public getUserInfo(): Observable<UserModel> {
    const token = localStorage.getItem('token');
    return this.http.post<UserModel>(this.AUTH_URL + '/userinfo', {token});
  }

  public logout(): void {
    localStorage.removeItem('token');
    console.log('log out successfully');
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  private getToken(data: LoginInterface): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.AUTH_URL + '/login', data);
  }

}
