const { Profile, Verse, Order } = require('../models');

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// connect the random verses to the profiles
const addVersesToProfiles = async (profiles, verses) => {
    const results = [];
    for (const profile of profiles) {
      const verse1 = getRandomArrItem(verses);
      const verse2 = getRandomArrItem(verses);
      profile.verses.push(verse1._id);
      verse1.authorProfile = profile._id;
      verse2.authorProfile = profile._id;
      profile.verses.push(verse2._id);
      await profile.save();
      await verse1.save();
      await verse2.save();
      results.push(profile);
    }
    return results;
  };
  

  const createRandomOrders = async (profiles, verses, numberOfOrders) => {
    const orders = [];
  
    for (let i = 0; i < numberOfOrders; i++) {
      const clientProfile = getRandomArrItem(profiles);
      const randomVerse = getRandomArrItem(verses);
  
      const orderData = {
        orderNumber: `ORDER${i + 1}`,
        clientName: clientProfile.name,
        clientEmail: clientProfile.email,
        verseTitle: randomVerse.title,
        versePrice: randomVerse.price,
        createdAtVal: new Date(), // You can customize this date as needed
      };
  
      const order = await Order.create(orderData);
  
      // Update related profile and verse
      clientProfile.orders.push(order._id);
      randomVerse.orders.push(order._id);
  
      await clientProfile.save();
      await randomVerse.save();
  
      orders.push(order);
    }
  
    return orders;
  };

   module.exports = { addVersesToProfiles,  createRandomOrders };