import { FormikHelpers, FormikValues } from 'formik';

export interface ISignUp {
  submit: (values: FormikValues) => void;
  handleRefresh?: () => void;
  filterByName?: boolean;
}

export interface IUser {
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpForm {
  firstName: string;
  lastName: string;
  birthday: Date | string;
  email: string;
  password: string;
  confirmPassword: string;
}
