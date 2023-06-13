import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { FormikValues } from 'formik';
import { useDispatch } from 'react-redux';

import FilterNotes from './FilterNotes';
import { IFilterProps } from './types';
import { useFilterNotes } from 'api/notes';

const FilterNotesContainer: FC<IFilterProps> = ({ isShared }) => {
  const dispatch = useDispatch();
  const mutation = useFilterNotes(isShared);

  const filter = (values: FormikValues) => {
    mutation.mutate(values.dateCreation);
  };

  return (
    <Box>
      <FilterNotes submit={filter} />
    </Box>
  );
};

export default FilterNotesContainer;
