const morgan = require('morgan');
const app = express();
const port = 3000;

import express from 'express';
import { engine } from 'express-handlebars';

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', '.resources/views');

// route
app.get('/', (req, res) => {
  res.send('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
