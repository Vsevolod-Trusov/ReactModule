import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import {
  EditNoteForm,
  NoteList,
  Error,
  SignIn,
  SignUp,
  SharedNotes,
  About,
  NotesForm,
} from 'pages/index';
import { ROUTE } from 'config/constants/routes';

import App from '../../App';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<App />}>
      <Route path={ROUTE.NOTES} element={<NoteList />} />
      <Route path={ROUTE.NOTES_FORM} element={<NotesForm />} />
      <Route path={ROUTE.SHARED} element={<SharedNotes />} />
      <Route path={ROUTE.ABOUT} element={<About />} />
      <Route path={ROUTE.NOTE} element={<EditNoteForm />} />
      <Route path={ROUTE.SIGNIN} element={<SignIn />} />
      <Route path={ROUTE.SIGNUP} element={<SignUp />} />
      <Route path={ROUTE.NOT_FOUND} element={<Error />} />
      <Route path={ROUTE.ANY} element={<Navigate to={ROUTE.NOT_FOUND} />} />
    </Route>,
  ),
  { basename: '/ReactModule' },
);

export default router;
