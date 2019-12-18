import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoginInterface } from '../shared/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private router: Router, private http: HttpClient) { }

  public login(data: LoginInterface): void {
    this.getToken(data)
      .subscribe(
        resp => {
          localStorage.setItem('token', JSON.stringify(resp.token));
          console.log('log in successfully');
          this.router.navigate(['courses']);
        },
        error => alert(`${error.error}. Please use LOGIN: flastname, PASSWORD: flastname`)
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
    console.log('log out successfully');
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  private getToken(data: LoginInterface): Observable<{token: string}> {
    return this.http.post<{token: string}>('http://localhost:3004/auth/login', data);
  }

}
