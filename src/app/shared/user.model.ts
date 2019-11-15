import {UserInterface} from './shared.interface';

export class UserModel implements UserInterface {
  id: number;
  firstName: string;
  lastName: string;
}
