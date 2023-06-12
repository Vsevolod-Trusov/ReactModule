import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { FormikValues } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { setReduxNotes, setShared } from 'store/slices/notes.slice';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'api/constants';
import { QUERY_KEYS } from 'pages/constants';
import { TNote } from 'pages/NoteList/types';

import FilterNotes from './FilterNotes';
import { DATE_CREATION } from './constants';
import { IFilterProps } from './types';

const FilterNotesContainer: FC<IFilterProps> = ({ isShared }) => {
  const dispatch = useDispatch();
  const url = new URL(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`);

  const mutation = useMutation({
    mutationKey: [QUERY_KEYS.FILTER_NOTES],

    mutationFn: async () =>
      await fetch(url, {
        method: FETCH_METHODS.GET,
        headers: { Accept: 'application/json' },
        cache: 'no-cache',
      }),
    onSuccess: async (data) => {
      const notes = await data.json();
      dispatch(
        isShared
          ? setShared(notes.filter((note: TNote) => note?.isShared))
          : setReduxNotes(notes),
      );
    },
  });

  const filter = (values: FormikValues) => {
    url.searchParams.append(
      DATE_CREATION,
      new Date(values.dateCreation).toISOString(),
    );
    mutation.mutate();
  };

  return (
    <Box>
      <FilterNotes submit={filter} />
    </Box>
  );
};

export default FilterNotesContainer;
