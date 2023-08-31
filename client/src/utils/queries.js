import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 {
    me {
      _id
      name
      email
      avatarLink
      about
      skills
      requests
      verseCount
      learnVerseCount
      teachVerseCount
      orderCount
    }
  }
`;

export const QUERY_PROFILES = gql`
query Profiles {
  profiles {
    _id
    email
    name
    orderCount
    verseCount
    teachVerseCount
    learnVerseCount
  }
}
`;

export const QUERY_PROFILE = gql`
query Profile($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    name
    email
    avatarLink
    about
    skills
    requests
    verseCount
    learnVerseCount
    teachVerseCount
    orderCount
  }
}
`;
export const QUERY_VERSES = gql`
query Verses {
  verses {
    _id
    authorProfile {
     name
     email
     avatarLink
    }
    title
    verseType
    createdAtVal
    description
    orderCount
    price
  }
}
`;
export const QUERY_VERSE = gql`
query Verse($verseId: ID!) {
  verse(verseId: $verseId) {
    _id
    title
    createdAtVal
    verseType
    price
    authorProfile {
      avatarLink
      email
      name
    }
    description
    orderCount
    orders {
      _id
      orderNumber
    }
  }
}
`;
export const QUERY_ORDERS = gql`
query Orders {
  orders {
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
export const QUERY_ORDER = gql`
query Order($orderId: ID!) {
  order(orderId: $orderId) {
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
export const QUERY_ORDERS_BY_CLIENT = gql`
query OrderbyClientName($clientName: String!) {
  orderbyClientName(clientName: $clientName) {
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
export const QUERY_ORDERS_BY_VERSE = gql`
query OrderbyVerseTitle($verseTitle: String!) {
  orderbyVerseTitle(verseTitle: $verseTitle) {
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