import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
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

export const login = createAsyncThunk(
  'auth/login',
  async (
    credentials: { email: string; password: string },
  ): Promise<{ token: string; user: AuthUser }> => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!credentials.email || !credentials.password) {
      throw new Error('Email and password are required');
    }

    const fakeUser: AuthUser = {
      id: 'user_123',
      email: credentials.email,
      name: 'John Doe',
    };

    const fakeToken = 'token_abc123';

    return { token: fakeToken, user: fakeUser };
  }
);

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
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
