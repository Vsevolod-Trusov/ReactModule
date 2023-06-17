import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { TNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { setReduxNotes, setShared } from 'store/slices/notes.slice';
import { DATE_CREATION, TITLE } from 'components/FilterNotes/constants';

import { IFilterData, TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useFilterNotes = (
  isShared,
  filterByName,
): UseMutationResult<TNote[], TResponseError> => {
  const dispatch = useDispatch();

  const handleSuccess = (data) => {
    dispatch(isShared ? setShared(data) : setReduxNotes(data));
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.FILTER_NOTES],
    mutationFn: async ({ dateCreation, title }: IFilterData) => {
      const queryParameter = filterByName
        ? `${TITLE}=${title}`
        : `${DATE_CREATION}=${new Date(dateCreation).toISOString()}`;

      const url = `${FETCH_URLS.NOTES}?${queryParameter}`;

      return await apiClient
        .get(url)
        .then((response) =>
          isShared
            ? response.data.filter((note: TNote) => note.isShared)
            : response.data,
        );
    },

    onSuccess: handleSuccess,
    retry: false,
  });
};
