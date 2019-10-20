import {CourseInterface, UserInterface} from './shared.interface';

export class CourseModel implements CourseInterface {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

export class UserModel implements UserInterface {
  id: string;
  firstName: string;
  lastName: string;
}
