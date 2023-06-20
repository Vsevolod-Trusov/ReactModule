import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { signUp } from 'api/auth';

import SignUp from './SignUp';

const SignUpContainer: FC = () => {
  const mutation = signUp();

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
