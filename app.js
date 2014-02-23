var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  config = require('./config/config');

var database_uri = process.env.MONGOLAB_URI || config.db;

mongoose.connect(database_uri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

var app = express();

require('./config/express')(app, config);
require('./config/routes')(app);

app.listen(process.env.PORT || config.port);
