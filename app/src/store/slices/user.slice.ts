import { createSlice } from '@reduxjs/toolkit';

import { EMPTY_LINE } from 'pages/NoteList/constants';
import { RootState } from '../store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: localStorage.getItem('id') || -1,
    firstName: localStorage.getItem('firstname') || EMPTY_LINE,
    lastName: localStorage.getItem('lastname') || EMPTY_LINE,
    birthday: localStorage.getItem('birthday') || EMPTY_LINE,
    email: localStorage.getItem('email') || EMPTY_LINE,
    password: localStorage.getItem('password') || EMPTY_LINE,
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
