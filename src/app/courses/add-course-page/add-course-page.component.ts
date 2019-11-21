import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
  title = '';
  description = '';
  date = '';
  duration = '';
  authors = '';

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.log('Title: ' + this.title + ' Description: '
      + this.description + ' Date: ' + this.date + ' Duration: ' + this.duration + ' Author: ' + this.authors);
  }
}
