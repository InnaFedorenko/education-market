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
      return Profile.find().populate('verses').populate('orders');
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('verses').populate('orders');
    },
    verses: async () => {
      return Verse.find().populate('orders').populate('authorProfile');
    },
    verse : async (parent, { verseId }) => {
      return Verse.findOne({ _id: verseId }).populate('orders').populate('authorProfile');
    },
    orders: async () => {
      return Order.find();
    },
    order: async (parent, { orderId }) => {
      return Order.findOne({ _id: orderId });
    },
    orderbyClientName: async (parent, { clientName }) => {
      return Order.find({ clientName });
    },
    orderbyVerseTitle: async (parent, { verseTitle }) => {
      return Order.find({ verseTitle });
    },
    me: async(parent, {}, context) => {
      console.log(context);

      if(!isLoggedIn(context)){
        throw new Error("Not logged in");
      }
      const id = context.user._id;
      // // used the below line to test my query
      //const id = "64e6a061a8bb28589e6b6265";
      let user = await Profile.findById({ _id: id }).populate('verses').populate('orders');
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

    // updateProfile: async (parent, { name, about, skills, requests, avatarLink }, context) => {
    //   if(isLoggedIn(context)){
    //     const id = context.user._id;
    //     const profile = await Profile.findOneAndUpdate(
    //       { _id: id },
    //       { name, email, about, skills, requests, avatarLink },
    //       { new: true }
    //     );
    //     return profile;
    //   }
    //   throw new Error('Error: Not logged in');
    // },
    updateProfileById: async (parent, { profileId, name, about, skills, requests, avatarLink }, context) => {
      try {
        // Find the profile by profileId
        //console.log({profileId, name, about, skills, requests, avatarLink});
      //const tempProfile = await Profile.findById({ _id: profileId }).populate('verses').populate('orders');
       //console.log (tempProfile);
      let options = {};
      if (skills && skills.length > 0) {

        options['$push'] = { skills: { $each: skills } };

      }

      if (requests && requests.length > 0) {
        options['$push'] = options.hasOwnProperty('$push') ? options['$push'] : {};
        options['$push'].requests = {$each: requests}
        //{ requests: { $each: requests } };
      }

        const profile = await Profile.findOneAndUpdate(
          { _id: profileId},
          {$set: { name, about, avatarLink } , ...options},
          { new: true } // Return the updated document
        );
        if (!profile) {
          throw new Error('Profile not found');
        }
        return profile;
      } catch (error) {
        console.log(error);
        throw new Error(`Error updating profile: ${error.message}`);
      }
    },
    addOrder: async (parent, { verseTitle, VersePrice, clientName, clientEmail }, context) => {
        const id = context.user._id;
        const order = await Order.create({ verseTitle, VersePrice, clientName, clientEmail });
        const profile = await Profile.findOneAndUpdate(
          { _id: id },
          { $push: { orders: order._id } },
          { new: true }
          );
          const verse = await Verse.findOneAndUpdate(
            { title: verseTitle },
            { $push: { orders: order._id } },
            { new: true }
          );
        return order;
    },
    deleteOrder: async (parent, { orderId }, context) => {
      // if (isLoggedIn(context)) {
        // Find the order by ID and delete it
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
          throw new Error('Error: Order not found');
        }
        // Remove the order reference from the associated verse, client, and author profiles
        await Verse.findByIdAndUpdate(
          { _id: deletedOrder.verse },
          { $pull: { orders: deletedOrder._id } }
        );
        await Profile.findByIdAndUpdate(
          { _id: deletedOrder.client },
          { $pull: { orders: deletedOrder._id } }
        );
        await Profile.findByIdAndUpdate(
          { _id: deletedOrder.author },
          { $pull: { orders: deletedOrder._id } }
        );
    
        return deletedOrder;
      // }
      // throw new Error('Error: Not logged in');
    },   



    // addVerse: async (parent, { title, description, price, verseType }, context) => {
    //   if(isLoggedIn(context)){
    //     const id = context.user._id;
    //     const verse = await Verse.create({ title, description, price, verseType, authorProfile: id });
    //     const profile = await Profile.findOneAndUpdate(
    //       { _id: id },
    //       { $push: { verses: verse._id } },
    //       { new: true }
    //     );
    //     return verse;
    //   }
    //   throw new Error('Error: Not logged in');
    // },
    // updateVerse: async (parent, { verseId, title, description, price, verseType }, context) => {
    //   if(isLoggedIn(context)){
    //     const verse = await Verse.findOneAndUpdate(
    //       { _id: verseId },
    //       { title, description, price, verseType },
    //       { new: true }
    //     );
    //     return verse;
    //   }
    //   throw new Error('Error: Not logged in');
    // }
  },
};

module.exports = resolvers;
