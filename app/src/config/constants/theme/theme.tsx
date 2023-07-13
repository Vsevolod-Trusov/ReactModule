import { createTheme } from '@mui/material';

import { COLORS } from 'config/colors';

declare module '@mui/material/TextField' {
  interface TextFieldPropsVariantOverrides {
    my: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontFamily: 'Montserrat',
            fontSize: '1.55rem',
            lineHeight: '1.75rem',
            textAlign: 'center',
          },
        },
      ],
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            fontFamily: 'Montserrat',
            fontSize: '1.55rem',
            lineHeight: '1.75rem',
            fieldset: {
              borderColor: `${COLORS.BORDER_COLOR} !important`,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontSize: '1.55rem',
          lineHeight: '1.75rem',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: COLORS.BORDER_COLOR,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: COLORS.BORDER_COLOR,
            '&:hover': {
              backgroundColor: COLORS.BORDER_COLOR_HOVER,
              transition: '.2s',
            },
          },
        },
      ],
    },
  },
});

export default theme;
