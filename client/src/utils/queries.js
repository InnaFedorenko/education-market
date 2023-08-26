import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query me($username: String!) {
    me {
      _id
      name
      email
      about
      skills
      requests
      avatarLink
    }
  }
`;

export const QUERY_VERSES = gql`
query Verses {
  verses {
    _id
    title
    description
    author
    createdAtVal
    price
    verseType
  }
}
`;
