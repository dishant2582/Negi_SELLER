const mongoose = require('mongoose');
require('dotenv').config()

// const mongoURI = "mongodb://127.0.0.1:27017/Negi_Sellers";
const mongoURI = process.env.MONGO_URI

// mongodb+srv://Negi_Seller_user:<password>@cluster0.o7mkdll.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://Negi_Seller_user:Negi_Seller_user@cluster0.o7mkdll.mongodb.net/

const connectToMongo = async () => {
    console.log(mongoURI);
        mongoose.connect(mongoURI, await console.log("Connected to Mongo Successful"));
    }

module.exports = connectToMongo;
