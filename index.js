var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './static',
  port: 10000,
});

server.start(function () {
  console.log('Server listening to port', server.port);
});

