'use strict';

module.exports = function (routers, callback) {
  if (self.server) {
    self.server.close()
    return callback(null);
  } else {
    return callback(new Error('no existing express server'));
  }
};
