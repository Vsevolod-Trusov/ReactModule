import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { router } from './config/routes/router';
import { globalStyles } from './styles/global-styles';

const Global = globalStyles();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
      <Global/>
      <RouterProvider router={router} />
    </>
);

