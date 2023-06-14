import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { FormikValues } from 'formik';
import { useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'pages/constants';

import FilterNotes from './FilterNotes';
import { IFilterProps } from './types';
import { useFilterNotes } from 'api/notes';

const FilterNotesContainer: FC<IFilterProps> = ({ isShared }) => {
  const mutation = useFilterNotes(isShared);
  const queryClient = useQueryClient();

  const filter = (values: FormikValues) => {
    mutation.mutate(values.dateCreation);
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
  };

  return (
    <Box>
      <FilterNotes submit={filter} handleRefresh={handleRefresh} />
    </Box>
  );
};

export default FilterNotesContainer;
