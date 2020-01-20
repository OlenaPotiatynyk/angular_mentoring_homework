import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { LoadingService } from './core/loading.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mentoring-homework';
  isAuthenticated: boolean;

  constructor(
      private authService: AuthService,
      private loadingService: LoadingService,
      private userStore: Store<{ auth }>
  ) {
  }

  ngOnInit(): void {
    this.userStore.select('auth').subscribe(data => this.isAuthenticated = data.isAuthenticated);
  }

  isLoadingData(): boolean {
    return this.loadingService.getState();
  }
}
