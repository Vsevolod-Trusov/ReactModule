import { object, string } from 'yup';

import { Constants } from './constants';

export const signInValidationSchema = object().shape({
  email: string()
    .required(Constants.EMAIL_REQUIRED)
    .email(Constants.EMAIL_VALIDATION),
  password: string()
    .required(Constants.PASSWORD_REQUIRED)
    .min(8, Constants.PASSWORD_VALIDATION),
});
