const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  about: String,
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
  requests: [
    {
      type: String,
      trim: true,
    },
  ],
  avatarLink: String,
  verses: [{
    type: Schema.Types.ObjectId,
    ref: 'Verse',
  }
  ],
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }
  ],
},
  {
    toJSON: {
      virtual: true,
    },
  });

//Virtual to get the order count
profileSchema.virtual('orderCount').get(function () {
  return this.orders.length;
});

//virtual to get the verses   count
profileSchema.virtual('verseCount').get(function () {
  return this.verses.length;
});
profileSchema.virtual('teachVerseCount').get(function () {
  // Use the filter method to count verses with verseType equal to false
  return this.verses.filter(verse => verse.verseType === false).length;
});

profileSchema.virtual('learnVerseCount').get(function () {
  // Use the filter method to count verses with verseType equal to true
  return this.verses.filter(verse => verse.verseType === true).length;
});

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});



// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
