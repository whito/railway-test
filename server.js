#!/usr/bin/env node

var app = module.exports = require('railway').createServer();
var io = require('socket.io').listen(app);

if (!module.parent) {
    var port = process.env.PORT || 3000
    app.listen(port);
    console.log("Railway server listening on port %d within %s environment", port, app.settings.env);
}

