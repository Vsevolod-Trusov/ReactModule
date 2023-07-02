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
  gridTemplateColumns: '0.2fr 0.6fr 0.6fr 0.2fr',
  gap: '1rem',
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
    '&>div': {
      ul: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '2rem',
        '&>li': {
          display: 'flex',
        },
        '&>li:nth-child(2n)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'end',
            span: {
              padding: '6px',
              backgroundColor: COLORS.BORDER_COLOR,
              color: COLORS.NOTE_BACKGROUND,
              borderRadius: '5rem',
            },
          },
        },
        '&>li:nth-child(2n+1)': {
          '&>div': {
            display: 'flex',
            justifyContent: 'start',
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
  background: `linear-gradient(180deg, ${COLORS.MAIN_COLOR_LIGHT}, ${COLORS.MAIN_COLOR_DARK} 100%)`,
});

export { AboutWrapper, Wrapper, AboutContainer, StyledBox };
