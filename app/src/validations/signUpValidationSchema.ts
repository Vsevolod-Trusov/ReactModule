import { date, object, string } from 'yup';

import { VALIDATION_ERRORS } from './constants';

export const signUpValidationSchema = object().shape({
  firstName: string()
    .required(VALIDATION_ERRORS.FIRST_NAME_REQUIRED)
    .min(3, VALIDATION_ERRORS.FIRST_NAME_VALIDATION),
  lastName: string()
    .required(VALIDATION_ERRORS.LAST_NAME_REQUIRED)
    .min(3, VALIDATION_ERRORS.LAST_NAME_VALIDATION),
  birthday: date()
    .required(VALIDATION_ERRORS.BIRTHDAY_REQUIRED)
    .max(new Date(Date.now()), VALIDATION_ERRORS.BIRTHDAY_VALIDATION),
  email: string()
    .required(VALIDATION_ERRORS.EMAIL_REQUIRED)
    .email(VALIDATION_ERRORS.EMAIL_VALIDATION),
  password: string()
    .required(VALIDATION_ERRORS.PASSWORD_REQUIRED)
    .min(8, VALIDATION_ERRORS.PASSWORD_VALIDATION),
  confirmPassword: string().required(VALIDATION_ERRORS.CONFIRM_PASSWORD),
});
