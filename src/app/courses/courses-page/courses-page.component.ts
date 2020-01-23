import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseModel } from '../../shared/models/course.model';
import { CoursesService } from '../courses.service';

import { Subject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getCoursesData, deleteCourse } from '../../store/actions/courses-list.actions';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
    public startItem: number;
    public showLoadMore: boolean = true;
  public courses: CourseModel[] = [];
    public value: string = '';

    private lastPage: boolean;
  private searchTerms = new Subject<string>();

    constructor(private coursesService: CoursesService,
                private router: Router,
                private courseListStore: Store<{ courseList }>) {
  }

  public ngOnInit(): void {
      this.courseListStore.select('courseList').subscribe(data => {
          this.courses = data.courseList;
          this.startItem = data.startItem;
          this.lastPage = data.lastPage
      });

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
      this.courseListStore.dispatch(getCoursesData({startItem: this.startItem}));
  }

  public onDeleteItem(id: number): void {
    const isConfirmed = confirm('Do you really want to delete this course?');
    if (isConfirmed) {
        this.courseListStore.dispatch(deleteCourse({id}));
    }
  }

  public onEditItem(id: number): void {
    this.router.navigate(['courses/', id]);
  }
}
