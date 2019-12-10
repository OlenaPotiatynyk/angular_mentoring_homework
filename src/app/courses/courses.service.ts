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

  constructor(private http: HttpClient) {
  }

  public getPage(start = 0, count = PAGE_SIZE): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(BO_URL + '/courses?sort=date&start=' + start + '&count=' + count);
  }

  public getCoursesBySearch(textFragment): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(BO_URL + '/courses?textFragment=' + textFragment);
  }

  public createCourse(data): Observable<CourseModel> {
    return this.http.post<CourseModel>(BO_URL + '/courses', data);
  }

  public getItemById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(BO_URL + '/courses/' + id);
  }

  public updateItem(id: number, data): Observable<CourseModel> {
    return this.http.patch<CourseModel>(BO_URL + '/courses/' + id, data);
  }

  public removeItem(id: number): Observable<{}> {
    return this.http.delete<{}>(BO_URL + '/courses/' + id);
  }
}
