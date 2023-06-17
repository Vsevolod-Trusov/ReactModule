export type TUser = {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  birthday?: string;
  password?: string;
};

export interface ISignUpResponse {
  users: TUser[];
  email: string;
  password: string;
}
