import { UseMutationResult } from '@tanstack/react-query';
import { FormikValues } from 'formik';

export interface ISignUp {
  submit: (values: FormikValues) => void
}

export interface IUser {
  firstName: string,
  lastName: string,
  birthday: Date,
  email: string,
  password: string
}
