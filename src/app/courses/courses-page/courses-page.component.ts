import { Component, OnInit } from '@angular/core';
import { CourseModel, UserModel } from '../../shared/shared.models';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  private courses: CourseModel[] = [
    {
      id: '1',
      title: 'course 1',
      creationDate: 'some date',
      duration: 60,
      description: 'dedscription'
    }
  ];

  private users: UserModel[];

  constructor() { }

  ngOnInit() {
  }

}
