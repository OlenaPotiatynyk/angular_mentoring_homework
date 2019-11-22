import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
  @Output() cancel = new EventEmitter();

  title = '';
  description = '';
  date = '';
  duration = '';
  authors = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const data = {
      title: this.title,
      description: this.description,
      date: this.date,
      duration: this.duration,
      authors: this.authors
    };

    this.coursesService.createCourse(data);
    this.onCancel();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
