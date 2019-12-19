export interface UserInterface {
  id: number;
  login: string;
  name: {
    first: string;
    last: string;
  };
  fakeToken: string;
  password: string;
}
