import styled from 'styled-components';
import { Box } from '@mui/material';

import { COLORS } from 'config/colors';

const Wrapper = styled(Box)({
  height: '100vh',
});

const AboutWrapper = styled(Box)({
  alignSelf: 'center',
  margin: '0 auto',
  padding: '1rem',
  width: '90%',
  minHeight: '100%',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

const AboutContainer = styled(Box)({
  display: 'grid',
  width: '100%',
  height: '89vh',
  gridTemplateColumns: '0.3fr 0.6fr 1fr 0.3fr',
  h5: {
    textAlign: 'center',
    borderBottom: `2px dashed ${COLORS.BORDER_COLOR}`,
  },
  '&>div': {
    width: '100%',
    '&>div': {
      ul: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '&>li': {
          display: 'flex',
        },
        '&>li:nth-child(2n)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'end',
            span: {
              borderBottom: `1px solid ${COLORS.BORDER_COLOR}`,
            },
          },
        },
        '&>li:nth-child(2n+1)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'start',
            span: {
              borderBottom: `1px solid ${COLORS.BORDER_COLOR}`,
            },
          },
        },
      },
    },
  },
});

const StyledBox = styled(Box)({
  backgroundColor: COLORS.BORDER_COLOR,
});

export { AboutWrapper, Wrapper, AboutContainer, StyledBox };
