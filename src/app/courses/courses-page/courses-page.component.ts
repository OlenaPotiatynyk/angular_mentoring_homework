import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseModel } from '../../shared/models/course.model';
import { CoursesService } from '../courses.service';

import { Subject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

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
  public showLoadMore = true;

  private lastPage = false;
  private searchTerms = new Subject<string>();

  constructor(private coursesService: CoursesService, private router: Router) {
  }

  public ngOnInit(): void {
    this.coursesService.getPage(this.startItem)
      .subscribe(resp => this.courses = resp);

    this.searchTerms.pipe(
      debounceTime(500),
      filter(term => !term.length || term.length > 2),
      switchMap((term: string) => this.coursesService.searchHandler(term, this.startItem + 3))
    )
      .subscribe(resp => {
        this.courses = resp;
        this.showLoadMore = !this.lastPage && !this.value.length;
      });
  }

  public search(term): void {
      this.searchTerms.next(term);
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
    this.coursesService.getPage(0, this.startItem + ITEMS_ON_PAGE - 1)
      .subscribe(resp => this.courses = resp);
  }
}
