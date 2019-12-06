import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
    return this.authService.getUsers().subscribe(users => console.log(users));
  }

  onSubmit(): void {
    console.log('login form: ' + this.loginForm.value.email + ' ' + this.loginForm.value.password);
    this.authService.login(this.loginForm.value);
  }

  getUserInfo() {
    return this.authService.getUsers();
  }

}
