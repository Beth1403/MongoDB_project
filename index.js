import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoDB = process.env.MONGODB;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Welcome to our API using MongoDB and Express');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
