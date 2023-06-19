import {createSlice} from '@reduxjs/toolkit';

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
        setUser: (state, {payload}) => ({...state, ...payload}),
    },
});

export const {setUser} = userSlice.actions;
export const selectFirstName = (state: any) => state.user.firstName;
export const selectEmail = (state: any) => state.user.email;

export const selectUser = (state: any) => state.user;
export default userSlice.reducer;
