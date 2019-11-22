import { Injectable } from '@angular/core';
import { CourseModel } from '../shared/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: Date.now() - 864000000,
      duration: 88,
      topRated: false,
      description: 'Learn about where you can find course descriptions, what information they include, how they ' +
        'work, and details about various components of a course description. Course descriptions report information ' +
        'about a university or college\'s classes. They\'re published both in course catalogs that outline degree ' +
        'requirements and in course schedules that contain descriptions for all courses offered during a particular ' +
        'semester.'
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      creationDate: Date.now() + 864000000,
      duration: 88,
      topRated: true,
      description: 'Learn about where you can find course descriptions, what information they include, how they ' +
        'work, and details about various components of a course description. Course descriptions report information ' +
        'about a university or college\'s classes. They\'re published both in course catalogs that outline degree ' +
        'requirements and in course schedules that contain descriptions for all courses offered during a particular ' +
        'semester.'
    },
    {
      id: 3,
      title: 'Video Course 3. Name tag',
      creationDate: Date.now() - 1728000000,
      duration: 88,
      topRated: false,
      description: 'Learn about where you can find course descriptions, what information they include, how they ' +
        'work, and details about various components of a course description. Course descriptions report information ' +
        'about a university or college\'s classes. They\'re published both in course catalogs that outline degree ' +
        'requirements and in course schedules that contain descriptions for all courses offered during a particular ' +
        'semester.'
    }
  ];

  constructor() { }

  getList(): CourseModel[] {
    return this.courses;
  }

  createCourse(data): void {
    const newItem = {
      id: this.courses.length + 1,
      title: data.title,
      creationDate: Date.now(),
      date: data.date,
      duration: data.duration,
      topRated: false,
      description: data.description,
      authors: data.authors
    };
    this.courses.push(newItem);
  }

  updateItem(id: number): void {

  }

  removeItem(id: number): void {
    this.courses = this.courses.filter(item => item.id !== id);
  }

  private getItemById(id: number): CourseModel {
    return this.courses.find(item => item.id === id);
  }
}
