export interface CourseInterface {
  id: string;
  title: string;
  creationDate: number;
  duration: number;
  topRated: boolean;
  description: string;
}

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
}
