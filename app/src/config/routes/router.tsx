import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { default as App } from '../../pages/App/index'
import { default as NotesListContainer } from '../../pages/Notes/index'
import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<App />}>
      <Route path={ROUTE.NOTES} element={<NotesListContainer />} />
    </Route>
  ),
  { basename: '/ReactModule'}
)

export default router
