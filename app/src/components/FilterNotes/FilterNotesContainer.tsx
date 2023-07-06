import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'config/globalConstants';
import { setFilter } from 'store/slices/notes.slice';

import FilterNotes from './FilterNotes';
import { IFilterProps, IFilterValues } from './types';
import { FILTER_TYPES, INITIAL_FILTER } from './constants';

const FilterNotesContainer: FC<IFilterProps> = ({ filterByName }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const filter = (values: IFilterValues) => {
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
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.NOTES],
    });
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
