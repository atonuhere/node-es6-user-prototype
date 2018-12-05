const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./routes/index');
const jwtVerify = require('../middleware/JWTVerify');
const errorHandler = require('../helper/error-handler');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

//Mount all routes on / path
app.use('/', routes);

//global error handler
app.use(errorHandler);

module.exports = app;
