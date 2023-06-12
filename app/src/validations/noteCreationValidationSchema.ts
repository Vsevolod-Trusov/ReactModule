import { date, object, string } from 'yup';

import { Constants } from './constants';

export const noteCreationValidationSchema = object().shape({
  title: string()
    .required(Constants.TITLE_REQUIRED)
    .min(3, Constants.TITLE_VALIDATION),
  dateCreation: date()
    .required(Constants.DATE_CREATION_REQUIRED)
    .max(new Date(Date.now()), Constants.DATE_CREATION_VALIDATION),
  description: string()
    .required(Constants.DESCRIPTION_REQUIRED)
    .min(3, Constants.DESCRIPTION_INVALID),
});
