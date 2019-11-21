import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseInterface } from '../../shared/shared.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() item: CourseInterface;
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  edit(): void {
    this.editItem.emit();
  }

  delete(): void {
    this.deleteItem.emit();
  }

}
