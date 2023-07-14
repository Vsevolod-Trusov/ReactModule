import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { FormikHelpers } from 'formik';

import { QUERY_KEYS } from 'config/globalConstants';
import { setFilter } from 'store/slices/notes.slice';

import FilterNotes from './FilterNotes';
import { IFilterProps, IFilterValues } from './types';
import { FILTER_TYPES, INITIAL_FILTER } from './constants';

const FilterNotesContainer: FC<IFilterProps> = ({ filterByName }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const filterHandler = (
    values: IFilterValues,
    { resetForm }: FormikHelpers<IFilterValues>,
  ) => {
    dispatch(
      setFilter({
        ...(filterByName
          ? { type: FILTER_TYPES.TITLE, value: values.title }
          : {
              type: FILTER_TYPES.DATE,
              value: new Date(values.dateCreation).toISOString(),
            }),
      }),
    );

    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.NOTES],
    });
    resetForm();
  };

  const handleRefresh = () => {
    dispatch(setFilter(INITIAL_FILTER));
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
  };

  return (
    <FilterNotes
      submit={filterHandler}
      handleRefresh={handleRefresh}
      filterByName={filterByName}
    />
  );
};

export default FilterNotesContainer;
