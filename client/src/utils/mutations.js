import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      email
      name
    }
  }
}
`;

export const ADD_USER = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        email
        name
      }
    }
  }
`;
