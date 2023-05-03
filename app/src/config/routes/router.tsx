import {
  createBrowserRouter,
  App,
  ErrorPage,
  NodesPage
} from './index'

export const router = createBrowserRouter([
  {
    path: '/ReactModule/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/ReactModule/nodes/',
        element: <NodesPage />,
        errorElement: <ErrorPage />,
      }
    ]
  }])
