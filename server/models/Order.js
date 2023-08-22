const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const orderSchema = new Schema({  
    invoicenumber: {
        type: String,
        required: true,
        trim: true,
    },
    // authorid: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    authorname: {
        type: String,
        required: true,
        trim: true,
    },
    authoremail: {
        type: String,
        required: true,
        trim: true,
    },
    // clientid: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    clientname: {
        type: String,
        required: true,
        trim: true,
    },
    clientemail: {
        type: String,
        required: true,
        trim: true,
    },
    // verseid: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    versetitle: {
        type: String,
        required: true,
        trim: true,
    },
    verseprice: {
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
        get: (createdAtVal) => dateFormat(createdAtVal)
    },


});


const Order = model('Order', orderSchema);

module.exports = Order;
