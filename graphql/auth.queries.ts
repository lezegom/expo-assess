import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
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

export const GET_FARMER_DETAILS = gql`
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
