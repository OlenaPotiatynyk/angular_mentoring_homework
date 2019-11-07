import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { TimePipe } from '../shared/time.pipe';
import { AddTheBorderDirective } from './add-the-border.directive';

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent, TimePipe, AddTheBorderDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesPageComponent,
    CourseItemComponent
  ]
})
export class CoursesModule { }
