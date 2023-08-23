const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema({  
    invoiceNumber: {
        type: String,
        required: true,
        trim: true,
    },
    authorName: {
        type: String,
        required: true,
        trim: true,
    },
    authorEmail: {
        type: String,
        required: true,
        trim: true,
    },
    clientName: {
        type: String,
        required: true,
        trim: true,
    },
    clientEmail: {
        type: String,
        required: true,
        trim: true,
    },
    verseTitle: {
        type: String,
        required: true,
        trim: true,
    },
    versePrice: {
        type: Number,
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


});


const Order = model('Order', orderSchema);

module.exports = Order;
