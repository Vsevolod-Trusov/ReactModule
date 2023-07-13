import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { setUser } from 'store/slices/user.slice';
import { LOCAL_STARAGE_NAMES, QUERY_KEYS } from 'config/globalConstants';
import { ROUTE } from 'config/constants/routes';

import { TResponseError } from '../types';
import { FETCH_URLS } from '../constants';
import { apiClient } from '../base';
import { TUser, ISignUpResponse, TUserParameters } from './types';
import { errorSnackbar, RESPONSES, successSnackbar } from './constants';

const useSignIn = (): UseMutationResult<TUserParameters, TResponseError> => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSuccess = ({ users, email, password }: ISignUpResponse) => {
    const foundUserByEmail: TUser = users.find(
      (user: TUser) => user.email === email,
    );

    if (!foundUserByEmail) {
      return enqueueSnackbar(RESPONSES.WRONG_EMAIL, errorSnackbar);
    }

    const foundUserByPasswordAndEmail = users.find(
      (user: TUser) => user.password === password && user.email === email,
    );

    if (!foundUserByPasswordAndEmail) {
      return enqueueSnackbar(RESPONSES.WRONG_PASSWORD, errorSnackbar);
    }

    enqueueSnackbar(RESPONSES.SUCCESS, successSnackbar);

    dispatch(setUser(foundUserByPasswordAndEmail));
    window.localStorage.setItem(
      LOCAL_STARAGE_NAMES.USER,
      JSON.stringify(foundUserByPasswordAndEmail),
    );
    navigate(ROUTE.PROFILE);
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.USERS],

    mutationFn: async ({ email, password }: TUser) => {
      const url = `${FETCH_URLS.USERS}`;
      const response = await apiClient.get(url);

      return { users: response.data, email: email, password: password };
    },

    onSuccess: handleSuccess,
    retry: false,
  });
};

export default useSignIn;
