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
  private fakeValue: number;
  private value = '';

  constructor() { }

  ngOnInit(): void {
    this.fakeValue = Math.random();
    console.log(this.fakeValue);
  }

  search(): void {
    console.log('%c' + this.value, 'color: crimson;');
  }

  loadMoreHandler(): void {
    console.log('%cYou just clicked LOAD MORE button. Well done!', 'color: chocolate;');
  }

  onDeleteItem(id): void {
    console.log('%cYou just deleted item with id: ' + id, 'color: green;');
  }

}
