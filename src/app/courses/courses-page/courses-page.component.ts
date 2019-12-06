import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../shared/models/user.model';
import { CourseModel } from '../../shared/models/course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: CourseModel[] = [];
  public value = '';
  public page = 0;
  public lastPage = false;

  private users: UserModel[];

  constructor(private filter: FilterPipe, private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getPage(this.page)
      .subscribe(resp => this.courses = resp);
  }

  search(): void {
    // this.courses = this.filter.transform(this.coursesService.getList().subscribe(), this.value);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  loadMoreHandler(): void {
    this.page += 3;
    this.coursesService.getPage(this.page)
      .subscribe(resp => {
        resp.length > 0
          ? this.courses = this.courses.concat(resp)
          : this.lastPage = true;
      });
  }

  onDeleteItem(id: number): void {
    const isConfirmed = confirm('Do you really want to delete this course?');
    if (isConfirmed) {
      this.coursesService.removeItem(id);
      // this.courses = this.coursesService.getList();
    }
  }

  onEditItem(id: number): void {
    this.router.navigate(['courses/', id]);
  }
}
