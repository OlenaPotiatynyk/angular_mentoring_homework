import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseModel } from '../shared/models/course.model';

import { Observable } from 'rxjs';

const BO_URL = 'http://localhost:3004';
const PAGE_SIZE = 3;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  public getPage(start = 0, count = PAGE_SIZE): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(BO_URL + '/courses?sort=date&start=' + start + '&count=' + count);
  }

  public searchHandler(textFragment: string, count: number): Observable<CourseModel[]> {
    if (textFragment.length > 2) {
      return this.getCoursesBySearch(textFragment);
    } else if  (!textFragment.length) {
      return this.getPage(0, count);
    }
  }

  public createCourse(data: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(BO_URL + '/courses', data);
  }

  public getItemById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(BO_URL + '/courses/' + id);
  }

  public updateItem(id: number, data: CourseModel): Observable<CourseModel> {
    return this.http.patch<CourseModel>(BO_URL + '/courses/' + id, data);
  }

  public removeItem(id: number): Observable<{}> {
    return this.http.delete<{}>(BO_URL + '/courses/' + id);
  }

  private getCoursesBySearch(textFragment: string): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(BO_URL + '/courses?textFragment=' + textFragment);
  }
}
