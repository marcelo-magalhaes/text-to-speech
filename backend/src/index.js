const express = require('express');
const app = express();
require('dotenv/config');


const port = process.env.PORT;
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.json());
app.use(routes);
app.listen(port);

