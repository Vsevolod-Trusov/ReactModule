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
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

const AboutContainer = styled(Box)({
  display: 'grid',
  width: '100%',
  height: '90vh',
  gridTemplateColumns: '0.1fr 0.4fr 0.4fr 0.1fr',
  gap: '5rem',
  h5: {
    textAlign: 'center',
    borderBottom: `2px dashed ${COLORS.BORDER_COLOR}`,
  },
  '&>div:nth-child(2)': {
    paddingRight: '0.5rem',
  },
  '&>div:nth-child(3)': {
    paddingLeft: '0.5rem',
  },
  '&>div': {
    width: '100%',
    height: '102%',
    '&>div': {
      ul: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '2rem',
        '&>li': {
          display: 'flex',
        },
        '&>li:nth-child(3n+1)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'start',
            span: {
              padding: '6px',
              backgroundColor: COLORS.BORDER_COLOR,
              color: COLORS.NOTE_BACKGROUND,
              borderRadius: '5rem',
            },
          },
        },
        '&>li:nth-child(3n+2)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'center',
            span: {
              padding: '6px',
              backgroundColor: COLORS.BORDER_COLOR,
              color: COLORS.NOTE_BACKGROUND,
              borderRadius: '1rem',
            },
          },
        },
        '&>li:nth-child(3n+3)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'end',
            span: {
              padding: '6px',
              backgroundColor: COLORS.BORDER_COLOR,
              color: COLORS.NOTE_BACKGROUND,
              borderRadius: '1rem',
            },
          },
        },
      },
    },
  },
});

const StyledBox = styled(Box)({
  height: '93%',
  background: `linear-gradient(180deg, ${COLORS.MAIN_COLOR_LIGHT}, ${COLORS.MAIN_COLOR_DARK} 100%)`,
});

export { AboutWrapper, Wrapper, AboutContainer, StyledBox };
