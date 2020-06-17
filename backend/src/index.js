const express = require('express');


require('dotenv').config;


const app = express();



const port = process.env.PORT;
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
    origin: process.env.CORS_CONFIGURAION,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(port);

