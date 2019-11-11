import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';
import { CourseModel } from '../../shared/course.model';
import mockData from '../../shared/mockData';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: CourseModel[] = mockData;
  public value = '';

  private users: UserModel[];
  private savedData: any[];

  constructor(private filter: FilterPipe) { }

  ngOnInit(): void {
    this.savedData = this.courses;
  }

  getData(): any {
    return this.savedData;
  }

  search(): void {
    console.log('%c' + this.courses, 'color: crimson;');
    this.courses = this.filter.transform(this.getData(), this.value);
  }

  loadMoreHandler(): void {
    console.log('%cYou just clicked LOAD MORE button. Well done!', 'color: chocolate;');
  }

  onDeleteItem(id): void {
    console.log('%cYou just deleted item with id: ' + id, 'color: green;');
    this.courses = this.courses.filter((item) => {
      return item.id !== id;
    });
  }
}
