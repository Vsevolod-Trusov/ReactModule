import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEYS } from 'pages/constants';
import { ROUTE } from 'config/constants/routes';
import { IUser } from 'pages/SignUp/types';

import { TResponseError } from '../types';
import { FETCH_URLS } from '../constants';
import { apiClient } from '../base';
import { TUser } from './types';
import { useSnackbar } from 'notistack';
import { RESPONSES } from './constants';
import { stringIsEquals } from '../../utils/formatText';
import useSignIn from "./SignIn";

export const useSignUp = (): UseMutationResult<TUser, TResponseError> => {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: async () => {
      const url = `${FETCH_URLS.USERS}`;
      return await apiClient.get(url).then((response) => response.data);
    },
  });

  const isSuchUserWithEmailExists = (newUser: IUser) => {
    return users.find((user: TUser) => user.email === newUser.email);
  };

  const handleSuccess = (data) => {
    enqueueSnackbar(RESPONSES.SUCCESS, {
      variant: 'success',
      autoHideDuration: 1000,
    });

    navigate(ROUTE.SIGNIN);
  };

  const handleError = (error) => {
    enqueueSnackbar(error.message, {
      variant: 'error',
      autoHideDuration: 1000,
    });
  };

  return useMutation({
    mutationKey: [QUERY_KEYS.USERS],

    mutationFn: async (newUser: IUser) => {
      const url = `${FETCH_URLS.USERS}`;

      if (!stringIsEquals(newUser.password, newUser.confirmPassword)) {
        throw new Error(RESPONSES.CONFIRM_PASSWORDS);
      }

      if (!isSuchUserWithEmailExists(newUser))
        return await apiClient.post(url, newUser);
      else {
        throw new Error(RESPONSES.SUCH_EMAIL_USED);
      }
    },

    onSuccess: handleSuccess,
    onError: handleError,
    retry: false,
  });
};

export default useSignUp
