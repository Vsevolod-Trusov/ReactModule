import React from 'react';
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
    SelectedNote,
    Profile,
} from 'pages/index';
import {ROUTE} from 'config/constants/routes';

import App from '../../App';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTE.MAIN} element={<App/>}>
            <Route path={ROUTE.MAIN} element={<SignIn/>}/>
            <Route path={ROUTE.PROFILE} element={<Profile/>}></Route>
            <Route path={ROUTE.NOTES} element={<NoteList/>}>
                <Route path={ROUTE.NOTES} element={<SelectedNote/>}/>
                <Route path={ROUTE.SELECTED_NOTE} element={<SelectedNote/>}/>
                <Route
                    path={ROUTE.MY_NOTE}
                    element={<EditNoteForm isShared={false}/>}
                />
                <Route path={ROUTE.NOTES_FORM} element={<NotesForm/>}/>
            </Route>
            <Route path={ROUTE.SHARED} element={<SharedNotes/>}>
                <Route path={ROUTE.SHARED} element={<SelectedNote isShared={true}/>}/>
                <Route
                    path={ROUTE.SELECTED_SHARE}
                    element={<SelectedNote isShared={true}/>}
                />
                <Route
                    path={ROUTE.SHARED_NOTE}
                    element={<EditNoteForm isShared={true}/>}
                />
                <Route path={ROUTE.SHARED_FORM} element={<NotesForm/>}/>
            </Route>
            <Route path={ROUTE.ABOUT} element={<About/>}/>
            <Route path={ROUTE.SIGNIN} element={<SignIn/>}/>
            <Route path={ROUTE.SIGNUP} element={<SignUp/>}/>
            <Route path={ROUTE.NOT_FOUND} element={<Error/>}/>
            <Route path={ROUTE.ANY} element={<Navigate to={ROUTE.NOT_FOUND}/>}/>
        </Route>,
    ),
    {basename: '/ReactModule'},
);

export default router;
