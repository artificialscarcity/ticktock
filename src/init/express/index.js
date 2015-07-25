'use strict';

var express = require('lib/express');

module.exports = function (cb, results) {
  var routers = require('routers');
  return express.create(routers, cb);
};
