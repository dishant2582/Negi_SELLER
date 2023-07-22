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

    imgUrl:{
        type:String,
        require: true
    },

    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('Cart',OrdersSchema);