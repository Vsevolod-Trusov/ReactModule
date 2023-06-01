import React, { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FormikValues } from 'formik';

import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import { ERROR } from 'common/errors';
import { stringIsEquals } from 'utils/formatText';

import SignUp from './SignUp';
import { IUser } from './types';

const SignUpContainer: FC = () => {


  const mutation = useMutation({
    mutationFn: async (newUser: IUser) => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.USERS}`, {
      method: FETCH_METHODS.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })),
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
      alert(ERROR.PASSWORD_NOT_EQUAL);
    }
  };

  if (mutation.isSuccess) {
    alert("success");
  }

  if (mutation.isError) {
    alert('error');
  }

  return (
  <SignUp submit={submit} />
);
}

export default SignUpContainer;
