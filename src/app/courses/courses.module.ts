import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { TimePipe } from '../shared/pipes/time.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';

import { AddTheBorderDirective } from './add-the-border.directive';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { InputDateComponent } from '../shared/input-date/input-date.component';
import { InputDurationComponent } from '../shared/input-duration/input-duration.component';
import { InputTagComponent } from '../shared/input-tag/input-tag.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    TimePipe,
    OrderByPipe,
    FilterPipe,
    AddTheBorderDirective,
    AddCoursePageComponent,
    InputDateComponent,
    InputDurationComponent,
    InputTagComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CoursesPageComponent,
    CourseItemComponent
  ],
  providers: [FilterPipe]
})
export class CoursesModule { }
