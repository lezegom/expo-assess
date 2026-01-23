import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login } from '../thunks/authThunks';

export type AuthUser = {
  id: string;
  userId: string;
  name: string;
  username: string;
  surname: string;
  email: string;
  image: string | null;
};

export type AuthState = {
  token: string | null;
  user: AuthUser | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: AuthState = {
  token: null,
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
    setCredentials(
      state,
      action: PayloadAction<{ token: string; user: AuthUser }>
    ) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.status = 'succeeded';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ token: string; user: AuthUser }>) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.status = 'succeeded';
          state.error = null;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Login failed';
        state.token = null;
        state.user = null;
      });
  },
});

export { login };
export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
