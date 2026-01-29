import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_FARMER_DETAILS, LOGIN_MUTATION } from '../../graphql/auth.queries';
import { apolloClient } from '../../lib/apollo-client';
import type { AuthUser } from '../slices/authSlice';

type LoginResponse = {
  login: {
    success: boolean;
    token: string;
    message: string;
    farmerId: string | null;
    state: number;
    active: boolean | null;
    verified: boolean;
  };
};

type FarmerDetailsResponse = {
  getFarmerDetails: AuthUser;
};

export const login = createAsyncThunk(
  'auth/login',
  async (
    credentials: { username: string; password: string; registrationId?: string },
  ): Promise<{ token: string; user: AuthUser }> => {
    const registrationId = credentials.registrationId || 'default-registration-id';

    // Step 1: Login to get auth token
    const loginResponse = await apolloClient.query<LoginResponse>({
      query: LOGIN_MUTATION,
      variables: {
        username: credentials.username,
        password: credentials.password,
        registrationId,
      },
      fetchPolicy: 'network-only',
    });

    console.log('Login response:', loginResponse.data);

    const loginResult = loginResponse.data?.login;

    if (!loginResult) {
      throw new Error('Invalid response from server');
    }

    if (!loginResult.success) {
      throw new Error(loginResult.message || 'Login failed');
    }

    if (!loginResult.token) {
      throw new Error('No token received from server');
    }

    const token = loginResult.token;

    // Step 2: Fetch farmer details using the token
    try {
      const farmerDetailsResponse = await apolloClient.query<FarmerDetailsResponse>({
        query: GET_FARMER_DETAILS,
        context: {
          headers: {
            authorization: token,
          },
        },
        fetchPolicy: 'cache-first',
      });

      console.log('Farmer details response:', farmerDetailsResponse.data);

      if (farmerDetailsResponse.data?.getFarmerDetails) {
        const fetchedUser = farmerDetailsResponse.data.getFarmerDetails;
        console.log('Login successful with user:', fetchedUser);
        return { token, user: fetchedUser };
      }
    } catch (error) {
      // If farmer details fail, continue with basic user info
      console.log('Failed to fetch farmer details:', error);
    }

    // Fallback: return token with basic user info from login
    const user: AuthUser = {
      id: loginResult.farmerId?.toString() || 'unknown',
      userId: credentials.username,
      name: credentials.username,
      username: credentials.username,
      surname: '',
      email: '',
      image: null,
    };

    console.log('Login successful with fallback user:', user);
    return { token, user };
  }
);
