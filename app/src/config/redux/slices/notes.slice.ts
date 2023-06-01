import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    postNotes: [],
    shared: []
  },
  reducers: {
    setNotes: (state, { payload }) => ({...state, notes: payload}),
    setPostNotes: (state, { payload }) => ({...state, postNotes: payload}),
    setShared: (state, { payload }) => ({...state, shared: payload}),
  },
});

export const { setNotes: setReduxNotes, setShared, setPostNotes } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes.notes;
export const selectShared = (state: RootState) => state.notes.shared;
export const selectPostNotes = (state: RootState) => state.notes.postNotes;
export default notesSlice.reducer;
