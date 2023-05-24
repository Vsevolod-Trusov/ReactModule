import { configureStore } from '@reduxjs/toolkit';
import { default as userReducer } from './slices/user.slice';

export default configureStore({
  reducer: {
    notes: userReducer,
  },
});
