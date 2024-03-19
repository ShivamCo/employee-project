// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  isAuthenticated: !!Cookies.get('token'), // Check if token exists in cookies
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuthState = (state) => state.auth.isAuthenticated;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
