import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { FormikValues } from 'formik';
import { useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'pages/constants';

import FilterNotes from './FilterNotes';
import { IFilterProps } from './types';
import { useFilterNotes } from 'api/notes';

const FilterNotesContainer: FC<IFilterProps> = ({ isShared, filterByName }) => {
  const mutation = useFilterNotes(isShared, filterByName);
  const queryClient = useQueryClient();

  const filter = (values: FormikValues) => {
    if (filterByName) {
      mutation.mutate({ title: values.title });
    } else {
      mutation.mutate({ dateCreation: values.dateCreation });
    }
  };

  const handleRefresh = () => {
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
