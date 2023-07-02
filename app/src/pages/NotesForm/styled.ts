import styled from 'styled-components';

import { StyledForm } from 'components/Form/styled';
import { StyledWrapper } from 'pages/SignIn/styled';
import { COLORS } from 'config/colors';

const StyledNoteForm = styled(StyledForm)({});

const StyledFormWrapper = styled(StyledWrapper)({
  justifyContent: 'center',
  alignItems: 'center',
  '&>div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '98%',
    minHeight: '89vh',
    backgroundColor: COLORS.NOTE_BACKGROUND,
    borderRadius: '0.5rem',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '&>form': {
      minWidth: '40vw',
      maxWidth: '40vw',
      minHeight: '50vh',
      maxHeight: '60vh',
      background: 'transparent',
      boxShadow: 'none',
      borderRadius: '2rem',
      border: `2px dashed ${COLORS.BORDER_COLOR}`,
      '&>div': {
        margin: '0 auto',
        width: '50%',
      },
    },
  },
});

export { StyledFormWrapper, StyledNoteForm };
