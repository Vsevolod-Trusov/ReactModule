import React, { FC } from 'react';
import { FormikValues } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signIn } from 'api/auth';
import { ROUTE } from 'config/constants/routes';
import { selectFirstName } from 'store/slices/user.slice';

import SignIn from './SignIn';

const SignInContainer: FC = () => {
  const firstname = useSelector(selectFirstName);

  if (window.localStorage.getItem('email') && firstname) {
    return <Navigate to={ROUTE.PROFILE} />;
  }

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
