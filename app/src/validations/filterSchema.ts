import { date, object } from 'yup';

import { Constants } from './constants';

export const filterSchema = object().shape({
  dateCreation: date().required(Constants.DATE_CREATION_REQUIRED),
});
