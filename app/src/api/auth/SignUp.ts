import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEYS } from 'config/globalConstants';
import { ROUTE } from 'config/constants/routes';
import { IUser } from 'pages/SignUp/types';
import { stringIsEquals } from 'utils';

import { TResponseError } from '../types';
import { FETCH_URLS } from '../constants';
import { apiClient } from '../base';
import { TUser } from './types';
import { useSnackbar } from 'notistack';
import { AUTO_HIDE_DURATION, RESPONSES } from './constants';

export const useSignUp = (): UseMutationResult<TUser, TResponseError> => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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

  const handleSuccess = () => {
    enqueueSnackbar(RESPONSES.SUCCESS, {
      variant: 'success',
      autoHideDuration: AUTO_HIDE_DURATION,
    });

    navigate(ROUTE.SIGN_IN);
  };

  const handleError = (error) => {
    enqueueSnackbar(error.message, {
      variant: 'error',
      autoHideDuration: AUTO_HIDE_DURATION,
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

export default useSignUp;
