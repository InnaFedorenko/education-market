import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      email
      name
    }
  }
}
`;

export const ADD_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
