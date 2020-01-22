import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { logout, getUserData } from '../../store/actions/auth.actions';

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
        this.userStore.dispatch(getUserData());
    }

      this.userStore.select('auth').subscribe(data => {
          if (data.user) {
              this.glueTheName(data.user.name)
          }
      });
  }

  logOut(): void {
    this.userStore.dispatch(logout());
  }

  private glueTheName(name: {first: string; last: string}): void {
    this.userName = name.first + ' ' + name.last;
  }
}
