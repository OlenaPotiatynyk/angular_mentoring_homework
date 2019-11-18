import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    console.log(this.loginForm);
    this.authService.login();
  }

}
