'use strict';

var MySQL = require('lib/mysql');

module.exports = function (cb, results) {
  return MySQL.create();
};
