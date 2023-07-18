import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { QUERY_KEYS } from 'config/globalConstants';
import { ROUTE } from 'config/constants/routes';
import { IUser } from 'pages/SignUp/types';
import { stringIsEquals } from 'utils';
import { TResponseError } from 'api/types';
import { FETCH_URLS } from 'api/constants';
import { apiClient } from 'api/base';

import { TUser } from './types';
import { errorSnackbar, RESPONSES, successSnackbar } from './constants';

export const useSignUp = (): UseMutationResult<TUser, TResponseError> => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: async () => {
      const url = FETCH_URLS.USERS;
      const response = await apiClient.get(url);

      return response.data;
    },
  });

  const isSuchUserWithEmailExists = (newUser: IUser) =>
    users.find((user: TUser) => user.email === newUser.email);

  const handleSuccess = () => {
    enqueueSnackbar(RESPONSES.SUCCESS, successSnackbar);

    navigate(ROUTE.SIGN_IN);
  };

  const handleError = (error) => {
    enqueueSnackbar(error.message, errorSnackbar);
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
