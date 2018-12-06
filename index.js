const app = require('./app');
const config = require('./config/env');
const db = require('./db/sequelize');
const debug = require('debug')('node-postgres-promises:server');
const http = require('http');
//force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
	console.log('Resync with { force: false }');
});

/**
 * Get port from environment and store in Express.
 */
const port = parseInt(process.env.PORT, 10) || config.app.port;

// app.listen(port, () => {
   // console.log(`The server is running at localhost: ${port}`);
// });
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}