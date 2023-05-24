import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import {default as store } from 'config/redux/store'
import { default as router } from 'config/routes/index';
import { theme } from 'config/theme/theme';
import { default as globalStyles } from 'styles/index';

const Global = globalStyles();

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Global />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </>,
);

