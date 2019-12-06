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
  length = '';
  authors = '';

  routeParams: {
    id?: number;
  } = {};

  constructor(private coursesService: CoursesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.routeParams.id = Number.parseInt(routeParams.id);
    });

    if (this.routeParams.id) {
      this.fillFieldsToEdit();
    }
  }

  onSubmit(): void {
    const data = {
      name: this.name,
      description: this.description,
      date: this.date,
      length: this.length,
      authors: this.authors
    };

    this.routeParams.id
      ? this.coursesService.updateItem(this.routeParams.id, data)
      : this.coursesService.createCourse(data);
    this.router.navigate(['courses']);
  }

  private fillFieldsToEdit(): void {
    let editItem;
    this.coursesService.getItemById(this.routeParams.id)
      .subscribe(resp => {
        editItem = resp[0];
        if (editItem) {
          this.name = editItem.name;
          this.description = editItem.description;
          this.date = editItem.date;
          this.length = editItem.length;
          this.authors = editItem.authors && editItem.authors.length > 0
            ? editItem.authors.map(author => author.name + ' ' + author.lastName).join(', ')
            : '';
        }
      });
  }
}
