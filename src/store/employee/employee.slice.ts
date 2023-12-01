import {createSlice} from '@reduxjs/toolkit';
import {AuthStateEmployee} from '../../interface';

const initialState: AuthStateEmployee = {
  employee: null,
  status: 'checking',
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: state => {
      state.status = 'checking';
      state.employee = null;
      state.errorMessage = undefined;
    },
    onLogin: (state, {payload}) => {
      state.status = 'authenticated';
      state.employee = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, {payload}) => {
      state.status = 'not-authenticated';
      state.employee = null;
      state.errorMessage = payload;
    },
    clearErrorMessageAuth: state => {
      state.errorMessage = undefined;
    },
  },
});

export const {onChecking, onLogin, onLogout, clearErrorMessageAuth} =
  authSlice.actions;
