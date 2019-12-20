import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private state: boolean;

  getState(): boolean {
    return this.state;
  }

  setState(state: boolean): void {
    this.state = state;
  }
}
