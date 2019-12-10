import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnChanges {
  @Input() creationDate: string;

  constructor() { }

  ngOnChanges() {
    this.formatDate();
  }

  private formatDate(): void {
    this.creationDate = this.creationDate.split('T')[0];
  }

}
