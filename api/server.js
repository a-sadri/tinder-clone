import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './Cards.js';

// App Config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = 'mongodb://localhost:27017/tinderdb';

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url);

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello express'));

app.post('/tinder/cards', (req, res) => {
  const card = req.body;
  Cards.create(card, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
