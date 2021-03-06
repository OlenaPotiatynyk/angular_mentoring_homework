import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';

import { TimePipe } from '../shared/pipes/time.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';

import { AddTheBorderDirective } from './add-the-border.directive';
import { AddAndEditCoursePageComponent } from './add-and-edit-course-page/add-and-edit-course-page.component';
import { InputDateComponent } from '../shared/input-date/input-date.component';
import { InputDurationComponent } from '../shared/input-duration/input-duration.component';
import { InputTagComponent } from '../shared/input-tag/input-tag.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    TimePipe,
    OrderByPipe,
    FilterPipe,
    AddTheBorderDirective,
    AddAndEditCoursePageComponent,
    InputDateComponent,
    InputDurationComponent,
    InputTagComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
  exports: [
    CoursesPageComponent,
    CourseItemComponent
  ],
  providers: [FilterPipe]
})
export class CoursesModule { }
