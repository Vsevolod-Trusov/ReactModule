import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from 'store/slices/user.slice';
import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';
import { useSnackbar } from 'notistack';

import { TResponseError } from '../types';
import { FETCH_URLS } from '../constants';
import { apiClient } from '../base';
import { TUser } from './types';

export const useSignIn = (): UseMutationResult<TUser, TResponseError> => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSuccess = (data) => {
    if (data.length === 0) {
      enqueueSnackbar('Wrong login or password');
      return;
    }

    dispatch(setUser(data[0]));
    window.localStorage.setItem('id', data[0]?.id);
    window.localStorage.setItem('email', data[0]?.email);
    window.localStorage.setItem('firstname', data[0]?.firstName);
    window.localStorage.setItem('lastname', data[0]?.lastName);
    window.localStorage.setItem('birthday', data[0]?.birthday);
    window.localStorage.setItem('password', data[0]?.password);
    navigate(ROUTE.NOTES);
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.USERS],

    mutationFn: async ({ email, password }: TUser) => {
      const url = `${FETCH_URLS.USERS}?email=${email}&&password=${password}`;
      return await apiClient.get(url).then((response) => response.data);
    },

    onSuccess: handleSuccess,
    retry: false,
  });
};
