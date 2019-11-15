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
  }

  ngOnChanges(): void {
  }

  editItem(): void {
    console.log('%cYou want to edit item with id "' +
      this.item.id + '", but right now it\'s not possible, wait a bit ...', 'color: orange');
  }

}
