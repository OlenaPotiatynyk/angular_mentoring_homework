import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { TimePipe } from '../shared/pipes/time.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';

import { AddTheBorderDirective } from './add-the-border.directive';

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent, TimePipe, OrderByPipe, FilterPipe, AddTheBorderDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesPageComponent,
    CourseItemComponent
  ],
  providers: [FilterPipe]
})
export class CoursesModule { }
