import {CourseInterface} from './shared.interface';

export class CourseModel implements CourseInterface {
  id: string;
  title: string;
  creationDate: number;
  duration: number;
  topRated: boolean;
  description: string;
}
