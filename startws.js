#!/usr/bin/env node
var debug = require('debug')('papafight');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

//websocket server
global.socket = require('socket.io').listen(require('http').createServer(app));

//login websocket logic

