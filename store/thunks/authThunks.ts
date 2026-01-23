import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AuthUser } from '../slices/authSlice';

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
