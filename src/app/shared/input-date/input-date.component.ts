import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
  @Input() date;

  constructor() { }

  ngOnInit() {
  }

}
