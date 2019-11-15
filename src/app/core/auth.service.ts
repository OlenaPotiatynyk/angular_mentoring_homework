import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    if (this.isAuthenticated()) {
      return;
    }

    const userData = {
      email: 'test@mail.com',
      password: '',
      token: Math.random()
    };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('log in successfully');
  }

  logout() {
    if (!this.isAuthenticated()) {
      return;
    }

    localStorage.removeItem('user');
    console.log('log out successfully');
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
