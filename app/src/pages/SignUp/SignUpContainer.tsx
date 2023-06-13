import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { Constants } from 'validations/constants';
import { stringIsEquals } from 'utils/formatText';
import { useSignUp } from 'api/auth';

import SignUp from './SignUp';

const SignUpContainer: FC = () => {
  const mutation = useSignUp();

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

  return <SignUp submit={submit} />;
};

export default SignUpContainer;
