import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { Constants } from 'validations/constants';
import { stringIsEquals } from 'utils/formatText';
import { useSignUp } from 'api/auth';

import SignUp from './SignUp';
import { validateActive } from '@reduxjs/toolkit/dist/listenerMiddleware/task';

const SignUpContainer: FC = () => {
  const mutation = useSignUp();

  const submit = (values: FormikValues): void => {
    mutation.mutate({
      firstName: values.firstName,
      lastName: values.lastName,
      birthday: new Date(values.birthday),
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  };

  return <SignUp submit={submit} />;
};

export default SignUpContainer;
