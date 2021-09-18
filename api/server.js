import express from 'express';
import mongoose from 'mongoose';
import Cards from './Cards';

// App Config
const app = express();
const port = process.env.PORT || 5000;
const connection_url =
  'mongodb+srv://admin:ddfMAtKdO9qLAE7V@cluster0.fiiye.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middleware

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello express'));

app.post('/tinder/card', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {});
});

// listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
