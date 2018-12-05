const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./routes/index');
const jwtVerify = require('../middleware/JWTVerify');
const errorHandler = require('../helper/error-handler');
var swaggerJSDoc = require('swagger-jsdoc');

const app = express();

//swagger definition
var swaggerDefinition = {
  info: {
    title: 'node-es6-user-prototype swagger',
    version: '0.0.1',
    description: 'Demonstrating Swagger in Node',
  },
  host: 'localhost:3001',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

//Mount all routes on / path
app.use('/', routes);

//serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

//global error handler
app.use(errorHandler);

module.exports = app;
