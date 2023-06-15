import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Button } from '@mui/material';

import { FormInput, Form, Title, FormControlLayout } from 'components/index';
import {
  EMAIL_FIELD,
  EMAIL_PLACEHOLDER,
  PASSWORD_FIELD,
  PASSWORD_PLACEHOLDER,
} from 'pages/constants';
import { signInValidationSchema } from 'validations/signInValidationSchema';

import { INITIAL_SIGNIN, SUBMIT_BUTTON, TITLE } from './constants';
import { StyledWrapper } from './styled';
import { ISignIn } from './types';

const SignIn: FC<ISignIn> = ({ handleSubmit: handleSignIn }) => (
  <StyledWrapper>
    <Formik
      initialValues={INITIAL_SIGNIN}
      validationSchema={signInValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => handleSignIn(values)}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Title variant={'h1'}>{TITLE}</Title>
          <FormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            <FormInput
              name={EMAIL_FIELD}
              placeholder={EMAIL_PLACEHOLDER}
              margin={'normal'}
            />
            <FormInput
              name={PASSWORD_FIELD}
              placeholder={PASSWORD_PLACEHOLDER}
              type={'password'}
              margin={'normal'}
            />
            <Button type='submit' variant={'contained'}>
              {SUBMIT_BUTTON}
            </Button>
          </FormControlLayout>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

export default SignIn;
