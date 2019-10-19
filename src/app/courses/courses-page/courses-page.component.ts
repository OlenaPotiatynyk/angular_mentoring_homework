import { Component, OnInit } from '@angular/core';

export interface Course {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  private courses: Course[] = [
    {
      id: '1',
      title: 'course 1',
      creationDate: 'some date',
      duration: 60,
      description: 'dedscription'
    }
  ];

  private users: User[];

  constructor() { }

  ngOnInit() {
  }

}
