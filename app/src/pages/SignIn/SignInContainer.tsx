import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { signIn } from 'api/auth';

import SignIn from './SignIn';

const SignInContainer: FC = () => {
  const signInMutation = signIn();
  const handleSignIn = async (credentials: FormikValues) => {
    signInMutation.mutate({
      email: credentials.email,
      password: credentials.password,
    });
  };

  return <SignIn handleSubmit={handleSignIn} />;
};

export default SignInContainer;
