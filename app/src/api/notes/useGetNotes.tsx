import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { TNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { setReduxNotes } from 'store/slices/notes.slice';
import { selectFirstName } from 'store/slices/user.slice';

import { TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useGetNotes = (): UseQueryResult<TNote[], TResponseError> => {
  const firstname = useSelector(selectFirstName);
  const dispatch = useDispatch();

  const handleSuccess = (data) => {
    dispatch(setReduxNotes(data));
  };

  return useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: async () => {
      const url = `${FETCH_URLS.NOTES}?author=${firstname}`;

      return await apiClient.get(url).then((response) => response.data);
    },
    onSuccess: handleSuccess,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
