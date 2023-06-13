import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { TNote, TUpdateNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';

import { TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useEditNote = (id): UseMutationResult<TNote[], TResponseError> => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
    navigate(ROUTE.NOTES);
  };

  return useMutation({
    mutationFn: async (updatedNode: TUpdateNote) => {
      const url = `${FETCH_URLS.NOTES}${id}`;
      return await apiClient.put(url, updatedNode);
    },

    onSuccess: handleSuccess,
  });
};
