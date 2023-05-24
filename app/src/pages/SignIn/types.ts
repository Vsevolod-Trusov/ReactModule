import { FormikValues } from 'formik';

export interface ICredentials {
  email: string,
  password: string
}

export interface ISignIn {
  handleSignIn: (values: FormikValues) => Promise<void>
}
