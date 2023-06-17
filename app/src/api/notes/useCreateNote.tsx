import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { TNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';

import { FETCH_URLS } from '../constants';
import { apiClient } from '../base';
import { TResponseError } from '../types';

export const useCreateNote = (): UseMutationResult<TNote, TResponseError> => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
    navigate(ROUTE.NOTES);
  };

  return useMutation({
    mutationFn: async (note: TNote) =>
      await apiClient.post(FETCH_URLS.NOTES, note),
    onSuccess: handleSuccess,
  });
};
