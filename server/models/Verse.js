const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
const dateFormat = require('../utils/dateFormat');

const verseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAtVal: {
        type: Date,
        required: true,
        trim: true,
        value: Date.now,
        // Use a getter method to format the timestamp on query
        get: (timestamp) => dateFormat(timestamp)
    },
    price: {
        type: Number,
    },
    // false - teach, true - learn
    verseType: {
        type: Boolean,
        required: true,
        trim: true,
        default: false,
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order',
    }],
    authorProfile:{
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    }
},
    {
        toJSON: {
            virtual: true,
        },
    });

//Virtual to get the order count
verseSchema.virtual('orderCount').get(function () {
    return this.orders.length;
});

const Verse = model('Verse', verseSchema);

module.exports = Verse;
