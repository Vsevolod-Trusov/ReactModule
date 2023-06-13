import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from 'store/slices/user.slice';
import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';

import { TResponseError } from '../types';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from '../constants';
import { apiClient } from '../base';
import { TUser } from './types';
import { IUser } from '../../pages/SignUp/types';

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
