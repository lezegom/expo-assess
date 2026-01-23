import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AuthUser } from '../slices/authSlice';

export const login = createAsyncThunk(
  'auth/login',
  async (
    credentials: { username: string; password: string; registrationId?: string },
  ): Promise<{ token: string; user: AuthUser }> => {
    const graphqlUrl = 'https://graph.khuladev.co.za/graphql';
    const registrationId = credentials.registrationId || 'default-registration-id';

    // Step 1: Login to get auth token
    const loginQuery = `
      query Login($username: String!, $password: String!, $registrationId: String!) {
        login(username: $username, password: $password, registrationId: $registrationId) {
          success
          token
          message
          farmerId
          state
          active
          verified
        }
      }
    `;

    const loginResponse = await fetch(graphqlUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: loginQuery,
        variables: {
          username: credentials.username,
          password: credentials.password,
          registrationId,
        },
      }),
    });

    if (!loginResponse.ok) {
      throw new Error(`Login failed: ${loginResponse.statusText}`);
    }

    const loginData = await loginResponse.json();

    console.log('Login response:', loginData);

    if (loginData.errors) {
      throw new Error(loginData.errors[0]?.message || 'Login failed');
    }

    const loginResult = loginData.data?.login;

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
    const farmerDetailsQuery = `
      query GetFarmerDetails {
        getFarmerDetails {
          id
          userId
          name
          username
          surname
          email
          image
        }
      }
    `;

    try {
      const farmerDetailsResponse = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token,
        },
        body: JSON.stringify({
          query: farmerDetailsQuery,
        }),
      });

      if (farmerDetailsResponse.ok) {
        const farmerDetailsData = await farmerDetailsResponse.json();

        console.log('Farmer details response:', farmerDetailsData);

        if (!farmerDetailsData.errors && farmerDetailsData.data?.getFarmerDetails) {
          const fetchedUser = farmerDetailsData.data.getFarmerDetails;
          console.log('Login successful with user:', fetchedUser);
          return { token, user: fetchedUser };
        }
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
