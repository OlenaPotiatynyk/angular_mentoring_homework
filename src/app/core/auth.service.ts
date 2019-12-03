import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private router: Router) { }

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

  getUserInfo(): string {
    const user = localStorage.getItem('user');
    if (user) {
      return user.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)[0];
    } else {
      return '';
    }
  }
}
