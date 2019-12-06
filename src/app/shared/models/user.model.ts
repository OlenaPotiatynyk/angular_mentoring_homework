import { UserInterface } from '../interfaces/user.interface';

export class UserModel implements UserInterface {
  id: number;
  firstName: string;
  lastName: string;
}
