// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string;
}

interface AuthState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  user: User | null;
}

const initialState: AuthState = {
  status: 'idle',
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    // Extra reducers
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
