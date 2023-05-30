import React, { FC } from 'react';
import { Field, Formik, FormikValues } from 'formik';
import { Button, TextField } from '@mui/material';

import Title from 'components/Title/Title';
import FormControlLayout from 'components/FormControlLayout';
import FormInput from 'components/FormInput';
import { default as TextArea } from 'components/TextArea/index';
import Form from 'components/Form';
import { ISignIn } from 'pages/SignIn/types';
import { StyledWrapper } from 'pages/SignIn/styled';

import { DATE_CREATION_FIELD, DESCRIPTION_FIELD, NOTE_INITIAL_VALUES, TITLE_FIELD } from './constants';
import { noteCreationValidationSchema } from './validation';

const NotesForm: FC<ISignIn> = ({ handleSubmit }) => {

  return (
    <StyledWrapper>
      <Formik
        initialValues={NOTE_INITIAL_VALUES}
        validationSchema={noteCreationValidationSchema}
        onSubmit={(values: FormikValues) => handleSubmit(values)}
      >
        {
          ({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <Title variant={'h1'}>Create</Title>

              <FormControlLayout margin={'normal'}
                                 variant={'filled'}
                                 size={'medium'}>

                <FormInput
                  name={TITLE_FIELD}
                  placeholder='Enter title'
                  margin={'normal'}
                />

                <FormInput
                  name={DATE_CREATION_FIELD}
                  type={'date'}
                  margin={'normal'}
                />

                <FormInput
                  name={DESCRIPTION_FIELD}
                  value={values.description}
                  onChange={handleChange}
                  placeholder={'Enter description'}
                  margin={'normal'}
                  as={TextArea}
                >
                </FormInput>

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

export default NotesForm;
