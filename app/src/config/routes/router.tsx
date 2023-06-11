import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { default as App } from 'pages/App/index';
import { default as NotesListContainer } from 'pages/Notes/index';
import { default as ErrorPageContainer } from 'pages/Error/index';
import { default as EditNoteContainer } from 'pages/Notes/components/SelectedNote/components/EditNoteForm/index';
import { default as SignInContainer } from 'pages/SignIn/index';
import { default as SignUpContainer } from 'pages/SignUp/index';
import { default as SharedNotesContainer } from 'pages/SharedNotes/index';
import { default as AboutContainer } from 'pages/About/index';
import { default as NotesFormContainer } from 'pages/NotesForm/index';

import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<App />}>
      <Route path={ROUTE.NOTES} element={<NotesListContainer />} />
      <Route path={ROUTE.NOTES_FORM} element={<NotesFormContainer />} />
      <Route path={ROUTE.SHARED} element={<SharedNotesContainer />} />
      <Route path={ROUTE.ABOUT} element={<AboutContainer />} />
      <Route path={ROUTE.NOTE} element={<EditNoteContainer />} />
      <Route path={ROUTE.SIGNIN} element={<SignInContainer />} />
      <Route path={ROUTE.SIGNUP} element={<SignUpContainer />} />
      <Route path={ROUTE.NOT_FOUND} element={<ErrorPageContainer />} />
      <Route path={ROUTE.ANY} element={<Navigate to={ROUTE.NOT_FOUND} />} />
    </Route>,
  ),
  { basename: '/ReactModule' },
);

export default router


