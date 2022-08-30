import { AppState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action: PayloadAction<boolean>) {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth.authState;
