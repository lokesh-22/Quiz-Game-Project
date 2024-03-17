// server/index.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:mongoDB@cluster0.oqmum5l.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const __dirname = process.cwd();

app.use(express.static(__dirname + '/public'));

app.get('/', (_, res) => {
    res.render('index.html');
});

app.get('/trivia', (_, res) => {
  res.sendFile(__dirname + '/public/trivia.html');
});

app.get('/pokemon', (_, res) => {
  res.sendFile(__dirname + '/public/pokemon.html');
});


// Define mongoose schema and models, handle routes, etc.

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});