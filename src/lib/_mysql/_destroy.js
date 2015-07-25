'use strict';

module.exports = function (callback) {
  var self = this;
  if (self.pool) {
    self.pool.end(callback);
  } else {
    return callback(new Error('route cache does not exist'));
  }
};
