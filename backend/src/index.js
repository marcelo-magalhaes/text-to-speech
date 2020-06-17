const express = require('express');
const app = express();
const port = 3333;
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(port);

