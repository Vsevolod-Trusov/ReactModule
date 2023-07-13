import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_ID_VALUE, LOCAL_STARAGE_NAMES } from 'config/globalConstants';
import { EMPTY_LINE } from 'pages/NoteList/constants';

import { RootState } from '../store';

export const userSlice = createSlice({
  name: LOCAL_STARAGE_NAMES.USER,
  initialState: {
    id: localStorage.getItem(LOCAL_STARAGE_NAMES.ID) || DEFAULT_ID_VALUE,
    firstName:
      localStorage.getItem(LOCAL_STARAGE_NAMES.FIRSTNAME) || EMPTY_LINE,
    lastName: localStorage.getItem(LOCAL_STARAGE_NAMES.LASTNAME) || EMPTY_LINE,
    birthday: localStorage.getItem(LOCAL_STARAGE_NAMES.BIRTHDAY) || EMPTY_LINE,
    email: localStorage.getItem(LOCAL_STARAGE_NAMES.EMAIL) || EMPTY_LINE,
    password: localStorage.getItem(LOCAL_STARAGE_NAMES.PASSWORD) || EMPTY_LINE,
  },
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setUser } = userSlice.actions;
export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectEmail = (state: RootState) => state.user.email;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
