import { date, object } from 'yup';

import { ERROR } from 'common/errors';

export const filterSchema = object().shape({
  dateCreation: date().required(ERROR.DATE_CREATION_REQUIRED)
})
