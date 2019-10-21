import {CourseInterface} from './shared.interface';

export class CourseModel implements CourseInterface {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}
