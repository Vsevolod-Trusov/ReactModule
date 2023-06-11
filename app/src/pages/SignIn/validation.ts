import { object, string } from 'yup';
import { ERROR } from 'common/errors';

export const signInValidationSchema = object().shape({
  email: string().required(ERROR.EMAIL_REQUIRED).email(ERROR.EMAIL_VALIDATION),
  password: string()
    .required(ERROR.PASSWORD_REQUIRED)
    .min(8, ERROR.PASSWORD_VALIDATION),
});
