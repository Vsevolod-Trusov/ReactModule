import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    shared: []
  },
  reducers: {
    setNotes: (state, { payload }) => ({...state, ...payload}),
    setShared: (state, { payload }) => ({...state, ...payload}),
  },
});

export const { setNotes: setReduxNotes, setShared } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes.notes;
export const selectShared = (state: RootState) => state.notes.shared;
export default notesSlice.reducer;
