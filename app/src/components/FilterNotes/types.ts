import { ISignUpForm } from '../../pages/SignUp/types';

export interface IFilterProps {
  isShared: boolean;
  filterByName?: boolean;
}

export interface IFilterNotes {
  submit: (values: IFilterValues) => void;
  handleRefresh?: () => void;
  filterByName?: boolean;
}

export interface IFilterValues {
  title?: string;
  dateCreation?: Date | string;
}
