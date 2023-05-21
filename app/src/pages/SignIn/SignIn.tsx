import React, { FC } from 'react';
import { Formik } from 'formik';
import { Button } from '@mui/material';

import { default as FormInput } from 'components/FormInput/index';
import { default as Form } from 'components/Form/index';
import { default as Title } from 'components/Title';
import { default as FormControlLayout } from 'components/FormControlLayout/index';
import { EMAIL_FIELD, PASSWORD_FIELD } from 'pages/constants';

import { INITIAL_SIGNIN } from './constants';
import { signInValidationSchema } from './validation';
import { StyledWrapper } from './styled';

const SignIn: FC = () => {

  return (
    <StyledWrapper>
      <Formik
        initialValues={INITIAL_SIGNIN}
        onSubmit={() => {
          alert('send');
        }}
        validationSchema={signInValidationSchema}
      >
        {
          ({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <Title variant={'h1'}>Sign In</Title>

              <FormControlLayout margin={'normal'}
                                 variant={'filled'}
                                 size={'medium'}>

                <FormInput
                  name={EMAIL_FIELD}
                  placeholder='Enter email'
                  margin={'normal'}
                />

                <FormInput
                  name={PASSWORD_FIELD}
                  placeholder='Enter password'
                  type={'password'}
                  margin={'normal'}
                />

                <Button type='submit'
                        variant={'contained'}
                >
                  Submit
                </Button>
              </FormControlLayout>

            </Form>
          )
        }
      </Formik>
    </StyledWrapper>
  );
};

export default SignIn;
