import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TNote, TUpdateNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';
import { setSelectedNote } from 'store/slices/notes.slice';
import { INITIAL_STATE } from 'pages/NoteList/constants';

import { TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS } from '../constants';

export const useEditNote = (
  id,
  isShared,
): UseMutationResult<TNote[], TResponseError> => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
    localStorage.removeItem('selected');
    dispatch(setSelectedNote(INITIAL_STATE));

    if (isShared) {
      navigate(ROUTE.SHARED);
    } else {
      navigate(ROUTE.NOTES);
    }
  };

  return useMutation({
    mutationFn: async (updatedNode: TUpdateNote) => {
      const url = `${FETCH_URLS.NOTES}${id}`;
      return await apiClient.put(url, updatedNode);
    },

    onSuccess: handleSuccess,
  });
};
