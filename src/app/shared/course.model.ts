import {CourseInterface} from './shared.interface';

export class CourseModel implements CourseInterface {
  id: number;
  title: string;
  creationDate: number;
  duration: number;
  topRated: boolean;
  description: string;
}
