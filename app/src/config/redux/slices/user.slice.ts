import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: -1,
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
  },
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload}),
  },
});

export const { setUser } = userSlice.actions;
export const selectFirstName = (state: any) => state.notes.firstName;
export const selectLastName = (state: any) => state.notes.lastName;
export const selectBirthday = (state: any) => state.notes.birthday;
export const selectEmail = (state: any) => state.notes.email;
export const selectPassword = (state: any) => state.notes.password;
export default userSlice.reducer;
