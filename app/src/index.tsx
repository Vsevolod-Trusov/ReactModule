import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  RouterProvider,
  globalStyles,
  router,
} from './pages/Index';

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

