import React, { FC } from 'react';
import { Formik, FormikValues } from 'formik';
import { Box, Button } from '@mui/material';
import { Refresh, FilterAlt } from '@mui/icons-material';

import { ISignUp } from 'pages/SignUp/types';
import {
  DATE_CREATION_FIELD,
  TITLE_FIELD,
  TITLE_PLACEHOLDER,
} from 'pages/NotesForm/constants';
import { filterSchema, filterByNameSchema } from 'validations';

import {
  FILTER_VALUES,
  FILTER_BY_NAME_VALUES,
  START_TIMEOUT,
} from './constants';

import { FilterForm, FilterInput } from './components';
import { StyledFormControlLayout } from './styled';

const FilterNotes: FC<ISignUp> = ({
  submit: filter,
  handleRefresh,
  filterByName,
}) => (
  <Box>
    <Formik
      initialValues={filterByName ? FILTER_BY_NAME_VALUES : FILTER_VALUES}
      validationSchema={filterByName ? filterByNameSchema : filterSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values: FormikValues, { resetForm }) => {
        filter(values);
        filterByName && resetForm();
      }}
    >
      {({ handleSubmit, handleChange, resetForm }) => (
        <FilterForm onSubmit={handleSubmit}>
          <StyledFormControlLayout
            margin={'normal'}
            variant={'filled'}
            size={'medium'}
          >
            {filterByName ? (
              <>
                <FilterInput
                  name={TITLE_FIELD}
                  placeholder={TITLE_PLACEHOLDER}
                  margin={'normal'}
                />
                <Button type='submit' variant={'contained'}>
                  <FilterAlt />
                </Button>
              </>
            ) : (
              <>
                <FilterInput
                  name={DATE_CREATION_FIELD}
                  type={'date'}
                  margin={'normal'}
                  onChange={(e) => {
                    handleChange(e);
                    setTimeout(() => {
                      handleSubmit();
                    }, START_TIMEOUT);
                  }}
                />
                <Button
                  type='button'
                  variant={'contained'}
                  onClick={() => {
                    resetForm();
                    handleRefresh();
                  }}
                >
                  <Refresh />
                </Button>
              </>
            )}
          </StyledFormControlLayout>
        </FilterForm>
      )}
    </Formik>
  </Box>
);

export default FilterNotes;
