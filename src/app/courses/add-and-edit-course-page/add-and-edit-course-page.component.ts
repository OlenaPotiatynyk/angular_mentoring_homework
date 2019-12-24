import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-and-edit-course-page',
  templateUrl: './add-and-edit-course-page.component.html',
  styleUrls: ['./add-and-edit-course-page.component.scss']
})
export class AddAndEditCoursePageComponent implements OnInit {
  name = '';
  description = '';
  date = '';
  length = null;
  authors = '';

  routeParams: {
    id?: number;
  } = {};

  constructor(private coursesService: CoursesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.routeParams.id = +routeParams.id;
    });

    if (this.routeParams.id) {
      this.fillFieldsToEdit();
    }
  }

  public onSubmit(): void {
    const data = {
      name: this.name,
      description: this.description,
      date: this.date,
      length: this.length,
      authors: this.authors.split(',').map((fullName, index) => {
        const author = fullName.trim().split(' ');
        return {
          id: index + 1,
          name: author[0],
          lastName: author[1]
        };
      }),
      isTopRated: false
    };

    this.routeParams.id
      ? this.coursesService.updateItem(this.routeParams.id, data)
        .subscribe(() => this.returnToCoursesPage())
      : this.coursesService.createCourse(data)
        .subscribe(() => this.returnToCoursesPage());
  }

  private fillFieldsToEdit(): void {
    this.coursesService.getItemById(this.routeParams.id)
      .subscribe(resp => {
        if (resp.length > 0) {
          this.name = resp.name;
          this.description = resp.description;
          this.date = resp.date;
          this.length = resp.length;
          this.authors = resp.authors && resp.authors.length > 0
            ? resp.authors.map(author => author.name + ' ' + author.lastName).join(', ')
            : '';
        }
      });
  }

  private returnToCoursesPage(): void {
    this.router.navigate(['courses']);
  }
}
