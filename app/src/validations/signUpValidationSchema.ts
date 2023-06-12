import { date, object, string } from 'yup';

import { Constants } from './constants';

export const signUpValidationSchema = object().shape({
  firstName: string()
    .required(Constants.FIRST_NAME_REQUIRED)
    .min(3, Constants.FIRST_NAME_VALIDATION),
  lastName: string()
    .required(Constants.LAST_NAME_REQUIRED)
    .min(3, Constants.LAST_NAME_VALIDATION),
  birthday: date()
    .required(Constants.BIRTHDAY_REQUIRED)
    .max(new Date(Date.now()), Constants.BIRTHDAY_VALIDATION),
  email: string()
    .required(Constants.EMAIL_REQUIRED)
    .email(Constants.EMAIL_VALIDATION),
  password: string()
    .required(Constants.PASSWORD_REQUIRED)
    .min(8, Constants.PASSWORD_VALIDATION),
  confirmPassword: string().required(Constants.CONFIRM_PASSWORD),
});
