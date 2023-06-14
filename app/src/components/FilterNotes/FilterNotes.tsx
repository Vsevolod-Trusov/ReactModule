import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import { FormControlLayout } from 'components/index';
import { ISignUp } from 'pages/SignUp/types';
import { DATE_CREATION_FIELD } from 'pages/NotesForm/constants';
import { filterSchema } from 'validations/filterSchema';

import { FILTER_VALUES } from './constants';

import { FilterForm, FilterInput } from './components';
import { StyledFormControlLayout } from './styled';

const FilterNotes: FC<ISignUp> = ({ submit: filter, handleRefresh }) => (
  <Box>
    <Formik
      initialValues={FILTER_VALUES}
      validationSchema={filterSchema}
      onSubmit={(values: FormikValues) => filter(values)}
    >
      {({ handleSubmit, handleChange, resetForm }) => (
        <FilterForm onSubmit={handleSubmit}>
          <StyledFormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            <FilterInput
              name={DATE_CREATION_FIELD}
              type={'date'}
              margin={'normal'}
              onChange={(e) => {
                handleChange(e);
                setTimeout(() => {
                  handleSubmit();
                }, 10);
              }}
            />
            <Button
              type='button'
              variant={'contained'}
              onClick={() => {
                handleRefresh();
              }}
            >
              <RefreshIcon />
            </Button>
          </StyledFormControlLayout>
        </FilterForm>
      )}
    </Formik>
  </Box>
);

export default FilterNotes;
