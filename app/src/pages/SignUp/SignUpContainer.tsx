import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { FormikValues } from 'formik';

import { stringIsEquals } from 'utils/formatText';
import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';

import SignUp from './SignUp';
import { IUser } from './types';

const SignUpContainer = () => {


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
      alert('Passwords aren\'t equal');
    }

  };

  if (mutation.isSuccess) {
    alert("seccess");
  }

  if (mutation.isError) {
    alert('error');
  }


  return (
  <SignUp submit={submit} />
);
}

export default SignUpContainer;
