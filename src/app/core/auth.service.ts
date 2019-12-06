import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private router: Router, private http: HttpClient) { }

  login(data): void {
    if (this.isAuthenticated()) {
      return;
    }

    const userData = {
      email: data.email,
      password: data.password,
      token: Math.random()
    };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('log in successfully');
    this.router.navigate(['courses']);
  }

  logout(): void {
    if (!this.isAuthenticated()) {
      return;
    }

    localStorage.removeItem('user');
    console.log('log out successfully');
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserInfo(login = 'flastname', password = 'flastname') {
    // const user = localStorage.getItem('user');
    // if (user) {
    //   return user.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)[0];
    // } else {
    //   return '';
    // }

    return this.http.get('http://localhost:3004/users?login=' + login);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3004/users');
  }
}
