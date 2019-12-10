import { AuthorInterface } from '../interfaces/author.interface';

export class AuthorModel implements AuthorInterface {
  id: number;
  name: string;
  lastName: string;
}
