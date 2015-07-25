'use strict';

var express = require('express');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var compression = require('compression');
var cors = require('cors');

module.exports = function (routers, callback) {
  var self = this;

  if (self.server) {
    return callback(null, self);
  } else {
    self.server = express();

    self.server.set('port', process.env.EXPRESS_PORT);

    // configure self.server here
    if (process.env.NODE_ENV === 'development') {
      self.server.use(morgan('dev'));
    } else {
      self.server.use(morgan('combined'));
    }
    self.server.use(helmet());
    self.server.use(bodyParser.json());
    self.server.use(bodyParser.urlencoded({
      extended: true
    }));
    self.server.use(compression());

    self.server.use(cors({
      origin: process.env.EXPRESS_CORS_ORIGIN
    }));

    // attach routers here

    self.server.use(routers);

    self.server.use(function (err, req, res, next) {
      console.error(err.stack || err.toString());
      var status = err.status || 500;
      res.status(status).json({
        name: err.name,
        message: err.message
      });
    });

    return callback(null, self);
  }
};
