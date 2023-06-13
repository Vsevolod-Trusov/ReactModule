import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { TNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { setReduxNotes, setShared } from 'store/slices/notes.slice';
import { DATE_CREATION } from 'components/FilterNotes/constants';

import { TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useFilterNotes = (
  isShared,
): UseMutationResult<TNote[], TResponseError> => {
  const dispatch = useDispatch();

  const handleSuccess = (data) => {
    dispatch(isShared ? setShared(data) : setReduxNotes(data));
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.FILTER_NOTES],

    mutationFn: async (dateCreation: string) => {
      const url = `${FETCH_URLS.NOTES}?${DATE_CREATION}=${new Date(
        dateCreation,
      ).toISOString()}${isShared ? '&&isShared=true' : ''}`;
      return await apiClient.get(url).then((response) => response.data);
    },

    onSuccess: handleSuccess,
    retry: false,
  });
};
