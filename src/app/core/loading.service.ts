import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  private state: boolean;

  getState(): boolean {
    return this.state;
  }

  setState(state: boolean): void {
    this.state = state;
  }
}
