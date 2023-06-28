import { date, object, string } from 'yup';

import { LENGTH_SIZES, VALIDATION_ERRORS } from './constants';

const signUpValidationSchema = object().shape({
  firstName: string()
    .required(VALIDATION_ERRORS.FIRST_NAME_REQUIRED)
    .min(LENGTH_SIZES.THREE, VALIDATION_ERRORS.FIRST_NAME_VALIDATION),
  lastName: string()
    .required(VALIDATION_ERRORS.LAST_NAME_REQUIRED)
    .min(LENGTH_SIZES.THREE, VALIDATION_ERRORS.LAST_NAME_VALIDATION),
  birthday: date()
    .required(VALIDATION_ERRORS.BIRTHDAY_REQUIRED)
    .max(new Date(Date.now()), VALIDATION_ERRORS.BIRTHDAY_VALIDATION),
  email: string()
    .required(VALIDATION_ERRORS.EMAIL_REQUIRED)
    .email(VALIDATION_ERRORS.EMAIL_VALIDATION),
  password: string()
    .required(VALIDATION_ERRORS.PASSWORD_REQUIRED)
    .min(LENGTH_SIZES.EIGHT, VALIDATION_ERRORS.PASSWORD_VALIDATION),
  confirmPassword: string().required(VALIDATION_ERRORS.CONFIRM_PASSWORD),
});

export default signUpValidationSchema;
