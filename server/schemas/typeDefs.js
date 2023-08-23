const gql = require('graphql-tag');


const typeDefs = gql`
  type Profile {
    _id: ID
    name: String!
    email: String!
    about: String
    skills: [String]        
    requests: [String]     
    avatarLink: String
  }
  type Verse {
    _id: ID
    title: String!
    description: String!
    author: String!
    createdAtVal: String!     
    price: Float
    verseType: Boolean!
    orders: [Order]         
    orderCount: Int
  }
  type Order {
    _id: ID
    invoiceNumber: String!
    authorName: String!
    authorEmail: String!
    clientName: String!
    clientEmail: String!
    verseTitle: String!
    versePrice: Float!  # number in the model
    createdAtVal: String!    
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    verses: [Verse]!
    verse(verseId: ID!): Verse
    orders: [Order]!
    order(orderId: ID!): Order
    # Add a verse based on the type of verse (teach or learn)
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;
module.exports = typeDefs;
