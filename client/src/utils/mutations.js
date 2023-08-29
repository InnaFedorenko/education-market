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

export const UPDATE_PROFILE = gql`
mutation UpdateProfileById($profileId: ID!, $name: String, $about: String, $skills: [String], $requests: [String], $avatarLink: String) {
  updateProfileById(profileId: $profileId, name: $name, about: $about, skills: $skills, requests: $requests, avatarLink: $avatarLink) {
    _id
    about
    avatarLink
    name
    skills
    requests
  }
}
`;

export const ADD_ORDER = gql`
mutation AddOrder($verseTitle: String!, $clientName: String!, $clientEmail: String!, $versePrice: Float) {
  addOrder(verseTitle: $verseTitle, clientName: $clientName, clientEmail: $clientEmail, versePrice: $versePrice) {
    _id
    orderNumber
    clientName
    clientEmail
    verseTitle
    versePrice
    createdAtVal
  }
}
`;
export const DELETE_ORDER = gql`
mutation DeleteOrder($orderId: ID!) {
  deleteOrder(orderId: $orderId) {
    _id
    orderNumber
    clientName
    clientEmail
    verseTitle
    versePrice
    createdAtVal
  }
}
`;
