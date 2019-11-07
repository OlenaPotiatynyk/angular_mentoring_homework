import {CourseInterface} from './shared.interface';

export class CourseModel implements CourseInterface {
  id: string;
  title: string;
  creationDate: number;
  duration: number;
  description: string;
}
