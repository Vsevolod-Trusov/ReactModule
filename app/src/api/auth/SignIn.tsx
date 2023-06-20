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
import { TUser, ISignUpResponse } from './types';
import { RESPONSES } from './constants';

const useSignIn = (): UseMutationResult<TUser, TResponseError> => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSuccess = ({ users, email, password }: ISignUpResponse) => {
    const foundUserByEmail: TUser = users.find(
      (user: TUser) => user.email === email,
    );

    if (!foundUserByEmail) {
      enqueueSnackbar(RESPONSES.WRONG_EMAIL, {
        variant: 'error',
        autoHideDuration: 1000,
      });
      return;
    }

    const foundUserByPasswordAndEmail = users.find(
      (user: TUser) => user.password === password && user.email === email,
    );

    if (!foundUserByPasswordAndEmail) {
      enqueueSnackbar(RESPONSES.WRONG_PASSWORD, {
        variant: 'error',
        autoHideDuration: 1000,
      });
      return;
    }

    enqueueSnackbar(RESPONSES.SUCCESS, {
      variant: 'success',
      autoHideDuration: 1000,
    });

    dispatch(setUser(foundUserByPasswordAndEmail));
    window.localStorage.setItem('id', foundUserByPasswordAndEmail?.id);
    window.localStorage.setItem('email', foundUserByPasswordAndEmail?.email);
    window.localStorage.setItem(
      'firstname',
      foundUserByPasswordAndEmail?.firstName,
    );
    window.localStorage.setItem(
      'lastname',
      foundUserByPasswordAndEmail?.lastName,
    );
    window.localStorage.setItem(
      'birthday',
      foundUserByPasswordAndEmail?.birthday,
    );
    window.localStorage.setItem(
      'password',
      foundUserByPasswordAndEmail?.password,
    );
    navigate(ROUTE.PROFILE);
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.USERS],

    mutationFn: async ({ email, password }: TUser) => {
      const url = `${FETCH_URLS.USERS}`;

      const users = await apiClient.get(url).then((response) => response.data);

      return { users: users, email: email, password: password };
    },

    onSuccess: handleSuccess,
    retry: false,
  });
};

export default useSignIn;
