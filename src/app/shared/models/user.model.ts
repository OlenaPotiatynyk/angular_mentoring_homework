import { UserInterface } from '../interfaces/user.interface';

export class UserModel implements UserInterface {
  id: number;
  login: string;
  name: {
    first: string;
    last: string;
  };
  fakeToken: string;
  password: string;
}
