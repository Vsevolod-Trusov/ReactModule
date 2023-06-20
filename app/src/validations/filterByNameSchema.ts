import { object, string } from 'yup';
import { VALIDATION_ERRORS } from './constants';

export const filterByNameSchema = object().shape({
  title: string()
    .required(VALIDATION_ERRORS.TITLE_REQUIRED)
    .min(3, VALIDATION_ERRORS.TITLE_VALIDATION),
});
