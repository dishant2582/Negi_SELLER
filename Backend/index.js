const connectToMongo = require('./database');
connectToMongo();

const cors = require('cors')
const express = require('express')

require('dotenv').config()

const app = express()

app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
