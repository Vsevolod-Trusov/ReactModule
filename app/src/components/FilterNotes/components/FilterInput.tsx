import React, { FC } from 'react';
import { FieldAttributes } from 'formik/dist/Field';
import { Box } from '@mui/material';

import { StyledErrorMessage, StyledField } from 'components/FormInput/styled';

const FilterInput: FC<FieldAttributes<any>> = ({ name, ...props }) => (
  <Box>
    <StyledField name={name} {...props} />
    <StyledErrorMessage name={name} component={'div'} />
  </Box>
);

export default FilterInput;
