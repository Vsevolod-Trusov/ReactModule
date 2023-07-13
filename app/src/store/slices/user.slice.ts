import { createSlice } from '@reduxjs/toolkit';

import { LOCAL_STARAGE_NAMES } from 'config/globalConstants';
import { INITIAL_USER_STATE } from 'pages/NoteList/constants';

import { RootState } from '../store';

export const userSlice = createSlice({
  name: LOCAL_STARAGE_NAMES.USER,
  initialState:
    JSON.parse(localStorage.getItem(LOCAL_STARAGE_NAMES.USER)) ||
    INITIAL_USER_STATE,
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setUser } = userSlice.actions;
export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectEmail = (state: RootState) => state.user.email;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
