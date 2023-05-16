import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { default as globalStyles } from './styles/index';
import { default as router } from './config/routes/index';

const Global = globalStyles();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Global />
    <RouterProvider router={router} />
  </>,
);

