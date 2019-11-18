import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  isUserAuthorised(): boolean {
    return this.authService.isAuthenticated();
  }

  logOut(): void {
    this.authService.logout();
  }

}
