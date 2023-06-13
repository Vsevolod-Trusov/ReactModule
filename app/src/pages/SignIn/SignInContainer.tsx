import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { useSignIn } from 'api/auth';

import SignIn from './SignIn';

const SignInContainer: FC = () => {
  const mutation = useSignIn();

  const handleSignIn = async (credentials: FormikValues) => {
    mutation.mutate({
      email: credentials.email,
      password: credentials.password,
    });
  };

  return <SignIn handleSubmit={handleSignIn} />;
};

export default SignInContainer;
