import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges {
  @Input() item: any;
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('%c OnInit ' + this.item.title, 'color: red;');
  }

  ngOnChanges(): void {
    console.log('%c OnChange ' + this.item.title, 'color: purple;');
  }

  editItem(): void {
    console.log('%c You want to edit item with id "' +
      this.item.id + '", but right now it\'s not possible, wait a bit ...', 'color: orange');
  }

}