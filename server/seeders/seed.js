const db = require('../config/connection');
const { Profile, Verse, Order } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const verseSeeds = require('./verseSeeds.json');
const cleanDB = require('./cleanDB');
const { addVersesToProfiles, createRandomOrders } = require('./data.js');



db.once('open', async () => {
  try {
   await cleanDB('Profile', 'profiles');
   await cleanDB('Verse', 'verses');
   await cleanDB('Order', 'orders');

   const profiles = await Profile.create(profileSeeds);
   const verses = await Verse.create(verseSeeds);

     // add verses to profiles and update the verses author fields
    await addVersesToProfiles(profiles, verses);

    // create random orders
    const orders = await createRandomOrders(profiles, verses, 10);



    console.log(profiles);
    console.log(verses);
    //console.log(orders);
    console.info('Seeding complete! 🌱');

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
