import { Injectable } from '@angular/core';
import { CourseModel } from '../shared/models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BO_URL = 'http://localhost:3004';
const PAGE_SIZE = 3;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: CourseModel[];

  constructor(private http: HttpClient) { }

  public getPage(page = 0): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(BO_URL + '/courses?start=' + page + '&count=' + PAGE_SIZE);
  }

  createCourse(data): void {
    // const newItem = {
    //   id: this.courses.length + 1,
    //   title: data.title,
    //   creationDate: data.creationDate,
    //   duration: data.duration,
    //   topRated: false,
    //   description: data.description,
    //   authors: data.authors
    // };
    // this.courses.push(newItem);
  }

  getItemById(id: number): Observable<CourseModel> {
    // return this.courses.find(item => item.id === id);
    return this.http.get<CourseModel>(BO_URL + '/courses?id=' +  id);
  }

  updateItem(id, data): void {
    // this.removeItem(id);
    //
    // const updatedItem = {
    //   id,
    //   title: data.title,
    //   creationDate: data.creationDate,
    //   duration: data.duration,
    //   topRated: false,
    //   description: data.description,
    //   authors: data.authors
    // };
    // this.courses.push(updatedItem);
  }

  removeItem(id: number): void {
    this.courses = this.courses.filter(item => item.id !== id);
  }
}
