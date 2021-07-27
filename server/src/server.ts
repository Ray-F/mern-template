#!/usr/bin/env node

import app from './application/App';
import debug from 'debug';
import http from 'http';

import Config from './util/Config';
import { logger } from './util/Logger';
import chalk from 'chalk';

// Get the port
const port = normalizePort(Config.PORT);
logger.logInfo('Hosted on port: ' + chalk.yellow(port));
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalizes a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  return isNaN(port) ? val : port >= 0 ? port : false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
