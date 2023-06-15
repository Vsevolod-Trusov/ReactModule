import { date, object, string } from 'yup';
import { Constants } from './constants';

export const filterByNameSchema = object().shape({
  title: string()
    .required(Constants.TITLE_REQUIRED)
    .min(3, Constants.TITLE_VALIDATION),
});
