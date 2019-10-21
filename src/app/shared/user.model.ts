import {UserInterface} from './shared.interface';

export class UserModel implements UserInterface {
  id: string;
  firstName: string;
  lastName: string;
}
