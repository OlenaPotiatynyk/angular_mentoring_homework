import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseModel } from '../../shared/models/course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { CoursesService } from '../courses.service';

const ITEMS_ON_PAGE = 3;

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: CourseModel[] = [];
  public value = '';
  public startItem = 0;
  public lastPage = false;
  public storedCourses = null;

  constructor(private filter: FilterPipe, private coursesService: CoursesService, private router: Router) {
  }

  public ngOnInit(): void {
    this.coursesService.getPage(this.startItem)
      .subscribe(resp => this.courses = resp);
  }

  public search(): void {
    if (this.value.length > 0) {
      this.coursesService.getCoursesBySearch(this.value)
        .subscribe(resp => {
          this.storedCourses = this.courses;
          this.courses = resp;
          this.lastPage = true;
        });
    } else if (this.value.length === 0 && this.storedCourses) {
      this.courses = this.storedCourses;
      this.storedCourses = null;
      this.lastPage = false;
    }
  }

  public addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  public loadMoreHandler(): void {
    this.startItem += ITEMS_ON_PAGE;
    this.coursesService.getPage(this.startItem)
      .subscribe(resp => {
        resp.length > 0
          ? this.courses = this.courses.concat(resp)
          : this.lastPage = true;
      });
  }

  public onDeleteItem(id: number): void {
    const isConfirmed = confirm('Do you really want to delete this course?');
    if (isConfirmed) {
      this.coursesService.removeItem(id).subscribe(() => this.recallCoursesList());
    }
  }

  public onEditItem(id: number): void {
    this.router.navigate(['courses/', id]);
  }

  private recallCoursesList(): void {
    this.coursesService.getPage(0, this.startItem + 2)
      .subscribe(resp => this.courses = resp);
  }
}
