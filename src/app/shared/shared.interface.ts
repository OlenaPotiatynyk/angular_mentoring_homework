export interface CourseInterface {
  id: number;
  title: string;
  creationDate: number;
  duration: number;
  topRated: boolean;
  description: string;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
}
