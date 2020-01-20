import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { UserModel } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { logout } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private userStore: Store<{ auth }>) {
  }

  ngOnInit(): void {
    this.userStore.select('auth').subscribe(data => {
      this.isAuthenticated = data.isAuthenticated
    });

    if (this.isAuthenticated) {
      this.authService.getUserInfo().subscribe((resp: UserModel) => this.glueTheName(resp.name));
    }

    this.authService.authorizedUser.subscribe((resp: UserModel) => this.glueTheName(resp.name));
  }

  logOut(): void {
    this.userStore.dispatch(logout());
  }

  private glueTheName(name: {first: string; last: string}): void {
    this.userName = name.first + ' ' + name.last;
  }
}
