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
    return this.http.get<CourseModel[]>(BO_URL + '/courses?sort=date&start=' + page + '&count=' + PAGE_SIZE);
  }

  public createCourse(data): Observable<CourseModel> {
    return this.http.post<CourseModel>(BO_URL + '/courses', data);
  }

  public getItemById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(BO_URL + '/courses/' + id);
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

    // return this.http.patch<CourseModel>(BO_URL + '/courses?id=' + id);
  }

  public removeItem(id: number): Observable<{}> {
    return this.http.delete<{}>(BO_URL + '/courses/' + id);
  }
}
