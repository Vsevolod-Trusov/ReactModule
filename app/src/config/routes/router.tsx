import { createBrowserRouter } from 'react-router-dom';

import App from '../../App';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import NodesPage from '../../pages/NodesPage/NodesPage';
import Navbar from '../../components/composites/Navbar/Navbar';

export const router = createBrowserRouter([
  {
    path: '/ReactModule/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/ReactModule/nodes',
        element: <NodesPage />,
        errorElement: <ErrorPage />,
      }
    ]
  }])
