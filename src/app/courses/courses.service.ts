import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseModel } from '../shared/models/course.model';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const PAGE_SIZE = 3;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseUrl = environment.baseUrl;
  private COURSES_URL = this.baseUrl + '/courses/';

  constructor(private http: HttpClient) {
  }

  public getPage(start: number): Observable<CourseModel[]> {
    const url = this.COURSES_URL + '?sort=date&start=' + start + '&count=' + PAGE_SIZE;
    return this.http.get<CourseModel[]>(url);
  }

  public searchHandler(textFragment: string, count: number): Observable<CourseModel[]> {
    if (textFragment.length > 2) {
      return this.getCoursesBySearch(textFragment);
    } else if  (!textFragment.length) {
      return;
    }
  }

  public createCourse(data: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(this.COURSES_URL, data);
  }

  public getItemById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(this.COURSES_URL + id);
  }

  public updateItem(id: number, data: CourseModel): Observable<CourseModel> {
    return this.http.patch<CourseModel>(this.COURSES_URL + id, data);
  }

  public removeItem(id: number): Observable<{}> {
    return this.http.delete<{}>(this.COURSES_URL + id);
  }

  private getCoursesBySearch(textFragment: string): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.COURSES_URL + '?textFragment=' + textFragment);
  }
}
