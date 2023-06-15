import styled from 'styled-components';

import { StyledForm } from 'components/Form/styled';
import { StyledFormControl } from 'components/FormControlLayout/styled';
import { StyledWrapper } from 'pages/SignIn/styled';

import { COLORS } from '../colors';

const StyledNoteForm = styled(StyledForm)({
  width: '98%',
  height: '89vh',
  backgroundColor: COLORS.NOTE_BACKGROUND,
});

const StyledNoteFormControl = styled(StyledFormControl)({});

const StyledFormWrapper = styled(StyledWrapper)({
  justifyContent: 'center',
  '& > form': {
    '& > div': {
      margin: '0 auto',
      width: '50%',
    },
  },
});

export { StyledFormWrapper, StyledNoteForm, StyledNoteFormControl };
