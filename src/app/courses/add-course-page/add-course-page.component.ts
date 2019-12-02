import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {
  title = '';
  description = '';
  date = '';
  duration = '';
  authors = '';

  constructor(private coursesService: CoursesService, private router: Router) { }

  onSubmit(): void {
    const data = {
      title: this.title,
      description: this.description,
      date: this.date,
      duration: this.duration,
      authors: this.authors
    };

    this.coursesService.createCourse(data);
    this.router.navigate(['courses']);
  }
}
