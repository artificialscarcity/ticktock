'use strict';

var dotenv = require('dotenv');
dotenv.load();

var init = require('./src/init');

var util = require('util');

var packageJSON = require('./package.json');

var _ = require('underscore');

var appJSON = _.pick(packageJSON, 'name', 'version');

console.info(_.extend({
  state: 'booting'
}, appJSON));

init(function (err, results) {
  if (err) {
    throw err;
  }
  results.express.server.listen(results.express.server.get('port'), function (err) {
    if (err) {
      throw err;
    }
    console.info(_.extend({
      state: 'running'
    }, appJSON));
    setInterval(function () {
      console.dir(_.extend(process.memoryUsage(), appJSON));
    }, 5000);
  });
});
