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

  constructor(private filter: FilterPipe, private coursesService: CoursesService, private router: Router) {
  }

  public ngOnInit(): void {
    this.coursesService.getPage(this.startItem)
      .subscribe(resp => this.courses = resp);
  }

  public search(): void {
    if (this.value.length > 2) {
      this.coursesService.getCoursesBySearch(this.value)
        .subscribe(resp => {
          this.courses = resp;
          this.lastPage = true;
        });
    } else if (this.value.length === 0) {
      this.recallCoursesList();
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
      this.coursesService.removeItem(id).subscribe(() => this.recallCoursesList(ITEMS_ON_PAGE - 1));
    }
  }

  public onEditItem(id: number): void {
    this.router.navigate(['courses/', id]);
  }

  private recallCoursesList(addItems = ITEMS_ON_PAGE): void {
    this.coursesService.getPage(0, this.startItem + addItems)
      .subscribe(resp => this.courses = resp);
  }
}
