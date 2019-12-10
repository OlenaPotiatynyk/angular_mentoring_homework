import { CourseInterface } from '../interfaces/course.interface';
import { AuthorModel } from './author.model';

export class CourseModel implements CourseInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  isTopRated: boolean;
  description: string;
  authors: AuthorModel[];
}
