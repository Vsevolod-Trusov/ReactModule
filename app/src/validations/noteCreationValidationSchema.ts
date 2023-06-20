import { date, object, string } from 'yup';

import { VALIDATION_ERRORS } from './constants';

export const noteCreationValidationSchema = object().shape({
  title: string()
    .required(VALIDATION_ERRORS.TITLE_REQUIRED)
    .min(3, VALIDATION_ERRORS.TITLE_VALIDATION),
  dateCreation: date()
    .required(VALIDATION_ERRORS.DATE_CREATION_REQUIRED)
    .max(new Date(Date.now()), VALIDATION_ERRORS.DATE_CREATION_VALIDATION),
  description: string()
    .required(VALIDATION_ERRORS.DESCRIPTION_REQUIRED)
    .min(3, VALIDATION_ERRORS.DESCRIPTION_INVALID),
});
