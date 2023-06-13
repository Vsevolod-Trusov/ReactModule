import React, { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FormikValues } from 'formik';
import { useNavigate } from 'react-router-dom';

import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'api/constants';
import { Constants } from 'validations/constants';
import { stringIsEquals } from 'utils/formatText';
import { ROUTE } from 'config/constants/routes';

import SignUp from './SignUp';
import { IUser } from './types';

const SignUpContainer: FC = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (newUser: IUser) =>
      await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.USERS}`, {
        method: FETCH_METHODS.POST,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      }),
  });

  const submit = (values: FormikValues): void => {
    if (stringIsEquals(values.password, values.confirmPassword)) {
      mutation.mutate({
        firstName: values.firstName,
        lastName: values.lastName,
        birthday: new Date(values.birthday),
        email: values.email,
        password: values.password,
      });
    } else {
      alert(Constants.PASSWORD_NOT_EQUAL);
    }
  };

  if (mutation.isSuccess) {
    navigate(ROUTE.SIGNIN);
  }

  if (mutation.isError) {
    alert('error');
  }

  return <SignUp submit={submit} />;
};

export default SignUpContainer;
