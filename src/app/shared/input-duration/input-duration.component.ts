import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss']
})
export class InputDurationComponent implements OnInit {
  @Input() duration;

  constructor() { }

  ngOnInit() {
  }

}
