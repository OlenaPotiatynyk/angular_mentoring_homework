import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';
import { CourseModel } from '../../shared/course.model';
import mockData from '../../shared/mockData';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  private courses: CourseModel[] = mockData;
  private users: UserModel[];

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    console.log('%c Don\'t touch me!', 'color: crimson;');
  }

  onDeleteItem(id): void {
    console.log('%c You just deleted item with id: ' + id, 'color: green;');
  }

}
