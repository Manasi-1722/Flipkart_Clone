import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import DefaultData from './default.js';
import Routes from './routes/route.js';
import Connection from './database/db.js';

// import Razorpay from 'razorpay';
// import { paymentRouter } from './payment/index.js';




dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.httivqb.mongodb.net/`;

Connection(URL);   // database connection created

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server running successfully on PORT ${PORT}`));   // connected to server



// var instance = new Razorpay({
//     key_id: process.env.RAZORPAY_ID_KEY,
//     key_secret: process.env.RAZORPAY_SECRET_KEY,
// });




DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
// app.use('/payment', paymentRouter);















