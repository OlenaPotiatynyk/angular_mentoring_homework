import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';
import { CourseModel } from '../../shared/course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: CourseModel[] = [];
  public value = '';
  public addCourseMode = false;

  private users: UserModel[];

  constructor(private filter: FilterPipe, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }

  search(): void {
    this.courses = this.filter.transform(this.coursesService.getList(), this.value);
  }

  addCourse(): void {
    this.addCourseMode = true;
    // this.coursesService.createCourse();
  }

  loadMoreHandler(): void {
    console.log('%cYou just clicked LOAD MORE button. Well done!', 'color: chocolate;');
  }

  onDeleteItem(id: number): void {
    const isConfirmed = confirm('Do you really want to delete this course?');
    if (isConfirmed) {
      this.coursesService.removeItem(id);
      this.courses = this.coursesService.getList();
    }
  }

  onEditItem(id: number): void {
    console.log(id);
  }
}
