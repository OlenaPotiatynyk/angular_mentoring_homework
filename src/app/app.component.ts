import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { LoadingService } from './core/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mentoring-homework';

  constructor(private authService: AuthService, private loadingService: LoadingService) {}

  userIsAuthorised(): boolean {
    return this.authService.isAuthenticated();
  }

  isLoadingData(): boolean {
    return this.loadingService.getState();
  }
}
