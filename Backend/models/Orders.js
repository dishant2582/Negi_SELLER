const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrdersSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    
    name:{
        type: String,
        required: true
    },

    discription:{
        type: String,
        required: true
    },

    brand:{
        type: String,
        required: true
    },

    imgUrl:{
        type:String,
        require: true
    },

    quantity:{
        type: Number,
        default: 1
    },

    pincode:{
        type: Number,
        default: 244715
    },

    address:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('Orders',OrdersSchema);
  