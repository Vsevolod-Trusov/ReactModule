import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { default as globalStyles } from './styles/index';
import { default as router } from './config/routes/index';
import { ThemeProvider } from '@mui/material';
import { theme } from './config/theme/theme.';

const Global = globalStyles();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Global />
   <ThemeProvider theme={theme}>
     <RouterProvider router={router} />
   </ThemeProvider>
  </>,
);

