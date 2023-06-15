import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { QUERY_KEYS } from 'pages/constants';
import { selectFirstName } from 'store/slices/user.slice';

import { INoteResponse, TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useGetNotes = (): UseQueryResult<
  INoteResponse,
  TResponseError
> => {
  const firstname = useSelector(selectFirstName);

  return useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: async () => {
      const url = `${FETCH_URLS.NOTES}?author=${firstname}`;

      return await apiClient.get(url).then((response) => response.data);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
