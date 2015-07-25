'use strict';

var _create = require('./_create');
var _destroy = require('./_destroy');

function Express (config) {
  var self = this;
  self.config = config;
}

Express.prototype.create = _create;

Express.prototype.destroy = _destroy;

module.exports = Express;
