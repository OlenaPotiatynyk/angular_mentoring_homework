import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.scss']
})
export class InputTagComponent implements OnInit {
  @Input() authors;

  constructor() { }

  ngOnInit() {
  }

}
