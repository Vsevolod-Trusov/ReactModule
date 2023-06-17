import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { FormikValues } from 'formik';
import { useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'pages/constants';

import FilterNotes from './FilterNotes';
import { IFilterProps } from './types';
import { setFilter } from 'store/slices/notes.slice';
import { useDispatch } from 'react-redux';
import { FILTER_TYPES, INITIAL_FILTER } from './constants';

const FilterNotesContainer: FC<IFilterProps> = ({ isShared, filterByName }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const filter = (values: FormikValues) => {
    if (filterByName) {
      dispatch(setFilter({ type: FILTER_TYPES.TITLE, value: values.title }));
    } else {
      dispatch(
        setFilter({
          type: FILTER_TYPES.DATE,
          value: new Date(values.dateCreation).toISOString(),
        }),
      );
    }
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
  };

  const handleRefresh = () => {
    dispatch(setFilter(INITIAL_FILTER));
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
  };

  return (
    <Box>
      <FilterNotes
        submit={filter}
        handleRefresh={handleRefresh}
        filterByName={filterByName}
      />
    </Box>
  );
};

export default FilterNotesContainer;
