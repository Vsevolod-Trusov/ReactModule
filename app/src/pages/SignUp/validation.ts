import { date, object, string } from 'yup';

import { ERROR } from 'common/errors';

export const signUpValidationSchema = object().shape({
  firstName: string()
    .required(ERROR.FIRST_NAME_REQUIRED)
    .min(3, ERROR.FIRST_NAME_VALIDATION),
  lastName: string()
    .required(ERROR.LAST_NAME_REQUIRED)
    .min(3, ERROR.LAST_NAME_VALIDATION),
  birthday: date()
    .required(ERROR.BIRTHDAY_REQUIRED)
    .max(new Date(Date.now()), ERROR.BIRTHDAY_VALIDATION),
  email: string().required(ERROR.EMAIL_REQUIRED).email(ERROR.EMAIL_VALIDATION),
  password: string()
    .required(ERROR.PASSWORD_REQUIRED)
    .min(8, ERROR.PASSWORD_VALIDATION),
  confirmPassword: string().required(ERROR.CONFIRM_PASSWORD),
});
