import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-and-edit-course-page',
  templateUrl: './add-and-edit-course-page.component.html',
  styleUrls: ['./add-and-edit-course-page.component.scss']
})
export class AddAndEditCoursePageComponent implements OnInit {
  title = '';
  description = '';
  date = '';
  duration = '';
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
      title: this.title,
      description: this.description,
      date: this.date,
      duration: this.duration,
      authors: this.authors
    };

    this.routeParams.id ? this.coursesService.updateItem(this.routeParams.id, data) : this.coursesService.createCourse(data);
    this.router.navigate(['courses']);
  }

  private fillFieldsToEdit(): void {
    const editItem = this.coursesService.getItemById(this.routeParams.id);

    if (editItem) {
      this.title = editItem.title;
      this.description = editItem.description;
      this.date = editItem.creationDate.toString();
      this.duration = editItem.duration.toString();
    }
  }
}
