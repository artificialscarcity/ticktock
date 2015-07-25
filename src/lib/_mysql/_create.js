'use strict';

var MySQL = require('mysql');

module.exports = function (callback) {
  // Build connection pool to limit connection overhead
  var self = this;
  self.pool = MySQL.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST_ENDPOINT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  });

  callback(null, self);
};
