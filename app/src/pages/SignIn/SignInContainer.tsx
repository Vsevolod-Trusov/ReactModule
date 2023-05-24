import { useQuery } from '@tanstack/react-query';
import React, { FC } from 'react';
import { FormikValues } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import { ROUTE } from 'config/routes/routes';
import { setUser } from 'config/redux/slices/user.slice';
import { IUser } from 'pages/SignUp/types';

import SignIn from './SignIn';

const SignInContainer: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, data } = useQuery({
    queryKey: ['users'],

    queryFn: async () => (await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.USERS}`, {
      method: FETCH_METHODS.GET,
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache',
    })),

  });

  const handleSignIn = async (credentials: FormikValues) => {

    if (isError) {
      alert('error in fetch');

      return;
    }

    const users = await data?.json();
    if (users) {
      const user = users.find((item: IUser) => item.email === credentials.email && item.password === credentials.password);

      if (!user)
        alert('Wrong email or password');
      else {
        dispatch(setUser(user))
        window.localStorage.setItem('email', user?.email);
        navigate(ROUTE.NOTES);
      }
    }
  };


  return (
    <SignIn handleSignIn={handleSignIn} />
  );
};

export default SignInContainer;
