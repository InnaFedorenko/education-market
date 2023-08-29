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
    verses: [Verse]!
  }
  type Verse {
    _id: ID
    title: String!
    description: String!
    createdAtVal: String!     
    price: Float
    verseType: Boolean!
    orders: [Order]         
    orderCount: Int
    authorProfile: Profile!
  }
  type Order {
    _id: ID
    orderNumber: String!
   # authorName: String!
   # authorEmail: String!
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
    profileByEmail(email: String!): Profile
    verses: [Verse]!
    verse(verseId: ID!): Verse
    orders: [Order]!
    order(orderId: ID!): Order
    # Add a verse based on the type of verse (teach or learn)
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    ordersByClient(clientId: ID!): [Order]!
    ordersByVerse(verseId: ID!): [Order]!
  }

  type Mutation {
    signUp(name: String!, email: String!, password: String!): Auth 
    login(email: String!, password: String!): Auth
    updateProfile(name: String, email: String, about: String, skills: [String], requests: [String], avatarLink: String): Profile
    addOrder(verseId: ID!, clientName: String!, clientEmail: String!): Order
    deleteOrder(orderId: ID!): Order
    addVerse(title: String!, description: String!, price: Float!, verseType: Boolean!): Verse
    updateVerse(verseId: ID!, title: String, description: String, price: Float, verseType: Boolean): Verse
  }
`;
module.exports = typeDefs;
