import { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Button } from '@mui/material';

import { Title, TextArea } from 'components';
import { ISignIn } from 'pages/SignIn/types';
import { noteCreationValidationSchema } from 'validations';
import { StyledFormControl } from 'components/FormControlLayout/styled';
import { EMPTY_LINE } from 'pages/NoteList/constants';
import { StyledTextField } from 'components/FilterNotes/styled';

import {
  DESCRIPTION_FIELD,
  DESCRIPTION_PLACEHOLDER,
  NOTE_INITIAL_VALUES,
  TITLE_FIELD,
  TITLE_PLACEHOLDER,
  BUTTON_TEXT,
  DATA_FORM_ID,
} from './constants';
import { StyledFormWrapper, StyledNoteForm } from './styled';

const NotesForm: FC<ISignIn> = ({ handleSubmit }) => (
  <StyledFormWrapper data-testid={DATA_FORM_ID}>
    <Formik
      initialValues={NOTE_INITIAL_VALUES}
      validationSchema={noteCreationValidationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues) => {
        handleSubmit(values);
      }}
    >
      {({ handleSubmit, handleChange, touched, values, errors }) => (
        <StyledNoteForm onSubmit={handleSubmit}>
          <Title variant={'h1'}>Create</Title>
          <StyledFormControl
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
            data-testid={'form'}
          >
            <StyledTextField
              id={TITLE_FIELD}
              name={TITLE_FIELD}
              placeholder={TITLE_PLACEHOLDER}
              type={'text'}
              variant='outlined'
              margin={'normal'}
              value={values.title}
              helperText={touched.title && `${errors?.title || EMPTY_LINE}`}
              error={touched.title && !!errors?.title}
              fullWidth
              onChange={handleChange}
            />
            <TextArea
              name={DESCRIPTION_FIELD}
              value={values.description}
              placeholder={DESCRIPTION_PLACEHOLDER}
              helperText={
                touched.description && `${errors?.description || EMPTY_LINE}`
              }
              error={touched.description && !!errors?.description}
              onChange={handleChange}
            />
            <Button type='submit' variant={'contained'}>
              {BUTTON_TEXT}
            </Button>
          </StyledFormControl>
        </StyledNoteForm>
      )}
    </Formik>
  </StyledFormWrapper>
);

export default NotesForm;
