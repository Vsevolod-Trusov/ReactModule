import { object, string } from 'yup';

import { VALIDATION_ERRORS } from './constants';

export const signInValidationSchema = object().shape({
  email: string()
    .required(VALIDATION_ERRORS.EMAIL_REQUIRED)
    .email(VALIDATION_ERRORS.EMAIL_VALIDATION),
  password: string()
    .required(VALIDATION_ERRORS.PASSWORD_REQUIRED)
    .min(8, VALIDATION_ERRORS.PASSWORD_VALIDATION),
});
