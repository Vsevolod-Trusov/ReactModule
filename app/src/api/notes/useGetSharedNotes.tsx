import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { TNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { setShared } from 'store/slices/notes.slice';

import { TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useGetSharedNotes = (): UseQueryResult<
  TNote[],
  TResponseError
> => {
  const dispatch = useDispatch();

  const handleSuccess = (data) => {
    dispatch(setShared(data));
  };

  return useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: async () => {
      const url = `${FETCH_URLS.NOTES}?isShared=true`;

      return await apiClient.get(url).then((response) => response.data);
    },
    onSuccess: handleSuccess,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
