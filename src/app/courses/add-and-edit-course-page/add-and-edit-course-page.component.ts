import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-and-edit-course-page',
  templateUrl: './add-and-edit-course-page.component.html',
  styleUrls: ['./add-and-edit-course-page.component.scss']
})
export class AddAndEditCoursePageComponent implements OnInit {
  courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    date: ['', [Validators.required]],
    length: [null, [Validators.required]],
    authors: ['', [Validators.required]]
  });

  routeParams: {
    id?: number;
  } = {};

  constructor(private coursesService: CoursesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.routeParams.id = +routeParams.id;
    });

    if (this.routeParams.id) {
      this.fillFieldsToEdit();
    }
  }

  get controls() {
    return this.courseForm.controls;
  }

  public onSubmit(): void {
    const data = {
      name: this.courseForm.value.name,
      description: this.courseForm.value.description,
      date: this.courseForm.value.date,
      length: +this.courseForm.value.length,
      authors: this.courseForm.value.authors.split(',').map((fullName, index) => {
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
          this.courseForm.patchValue({
            name: resp.name,
            description: resp.description,
            date: resp.date,
            length: resp.length,
            authors: resp.authors && resp.authors.length > 0
              ? resp.authors.map(author => author.name + ' ' + author.lastName).join(', ')
              : ''
          });
        }
      });
  }

  private returnToCoursesPage(): void {
    this.router.navigate(['courses']);
  }
}
