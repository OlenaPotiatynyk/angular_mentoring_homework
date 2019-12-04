import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
  @Input() creationDate: string;

  constructor() { }

  ngOnInit() {
    this.formatDate();
  }

  private formatDate(): void {
    this.creationDate = new Date(Number.parseInt(this.creationDate)).toISOString().split('T')[0];
  }

}
