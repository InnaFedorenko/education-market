const { Profile, Verse, Order } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');
const auth = require('../utils/auth');
const axios = require('axios');

require('dotenv').config();

const isLoggedIn = (context) => {
  if(context && context.hasOwnProperty('user') && context.user.hasOwnProperty('_id')){
    return true;
  }
  return false;
}

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    profileByEmail: async (parent, { email }) => {
      return Profile.findOne({ email });
    },
    verses: async () => {
      return Verse.find().populate('orders');
    },
    verse : async (parent, { verseId }) => {
      return Verse.findOne({ _id: verseId }).populate('orders');
    },
    orders: async () => {
      return Order.find();
    },
    order: async (parent, { orderId }) => {
      return Order.findOne({ _id: orderId });
    },

    me: async(parent, {}, context) => {
      if(!isLoggedIn(context)){
        throw new Error("Not logged in");
      }
      //const id = context.user._id;
      // // used the below line to test my query
      const id = "64e6a061a8bb28589e6b6265";
      let user = await Profile.findById(id);
      // if you need to modify output or want to only see plain data, use toObject function
      user = user.toObject();

      console.log(user);
      return user;
    },
    
  },

  Mutation: {
    signUp: async (parent,{ name, email, password}, context) => {
      const profile = await Profile.create({ name, email, password });
      const token = auth.signToken(profile);
      return { token, profile };
    },
    login: async (parent, {email, password}, context) => {
      // if email is not sent, this is an invalid request
      if(email){
        const profile = await Profile.findOne({ email });
        
        if (!profile) {
          throw new Error('Error: No user found with this email address');
        }

        const correctPw = await profile.isCorrectPassword(password);

        if (!correctPw) {
          throw new Error('Error: Incorrect credentials');
        }

        const token = auth.signToken(profile);

        return { token, profile };
      }
      throw new Error('Error: No user found with this email address');
    },
  },
};

module.exports = resolvers;
