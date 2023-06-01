import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: localStorage.getItem('id') || -1,
    firstName: localStorage.getItem('firstname') || '',
    lastName: localStorage.getItem('lastname') || '',
    birthday: localStorage.getItem('birthday') || '',
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
  },
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload}),
  },
});

export const { setUser } = userSlice.actions;
export const selectFirstName = (state: any) => state.user.firstName;
export const selectLastName = (state: any) => state.user.lastName;
export const selectBirthday = (state: any) => state.user.birthday;
export const selectEmail = (state: any) => state.user.email;
export const selectPassword = (state: any) => state.user.password;
export default userSlice.reducer;
