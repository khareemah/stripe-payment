require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const notFoundMiddlerware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const stripeController = require('./controllers/stripeController');

app.use(express.json());
app.use(express.static('./public'));
app.post('/stripe', stripeController);
app.use(notFoundMiddlerware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
