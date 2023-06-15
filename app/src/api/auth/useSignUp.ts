import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';
import { IUser } from 'pages/SignUp/types';

import { TResponseError } from '../types';
import { FETCH_URLS } from '../constants';
import { apiClient } from '../base';
import { TUser } from './types';

export const useSignUp = (): UseMutationResult<TUser, TResponseError> => {
  const navigate = useNavigate();
  const handleSuccess = (data) => {
    navigate(ROUTE.SIGNIN);
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.USERS],

    mutationFn: async (newUser: IUser) => {
      const url = `${FETCH_URLS.USERS}`;
      return await apiClient.post(url, newUser);
    },

    onSuccess: handleSuccess,
    retry: false,
  });
};
