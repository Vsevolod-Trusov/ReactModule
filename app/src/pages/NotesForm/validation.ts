import { date, object, string } from 'yup';

import { ERROR } from 'common/errors';

export const noteCreationValidationSchema = object().shape({
    title: string().required(ERROR.TITLE_REQUIRED).min(3, ERROR.TITLE_VALIDATION ),
    dateCreation: date().required(ERROR.DATE_CREATION_REQUIRED).max(new Date(Date.now()), ERROR.DATE_CREATION_VALIDATION),
    description: string().required(ERROR.DESCRIPTION_REQUIRED).min(3, ERROR.DESCRIPTION_INVALID),
})
