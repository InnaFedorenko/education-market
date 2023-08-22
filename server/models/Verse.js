const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');

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
    author: {
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
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    price: {
        type: Number,
    },
    // false - teach, true - learn
    versetype: {
        type: Boolean,
        required: true,
        trim: true,
        default: false,
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order',
    }],
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
