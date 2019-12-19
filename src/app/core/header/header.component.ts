import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.isUserAuthorised()) {
      this.authService.getUserInfo().subscribe((resp: UserModel) => this.glueTheName(resp.name));
    }

    this.authService.authorizedUser.subscribe((resp: UserModel) => this.glueTheName(resp.name));
  }

  isUserAuthorised(): boolean {
    return this.authService.isAuthenticated();
  }

  logOut(): void {
    this.authService.logout();
  }

  private glueTheName(name: {first: string; last: string}): void {
    this.userName = name.first + ' ' + name.last;
  }

}
