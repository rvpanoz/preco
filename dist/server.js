"use strict";

var _http = _interopRequireDefault(require("http"));

var _chalk = _interopRequireDefault(require("chalk"));

var _socket = _interopRequireDefault(require("socket.io"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Server file
 * Handles communication between the connected clients
 * v0.0.1
 **/
var _console = console,
    log = _console.log;

var app = _http["default"].createServer();

var io = (0, _socket["default"])(app, {
  origins: '*:*'
});

var _ref = _config["default"] || {},
    PORT = _ref.PORT;

io.on('connection', function (client) {
  var _client$request = client.request,
      connection = _client$request.connection,
      headers = _client$request.headers; // TODO 
});
app.listen(PORT, function () {
  log(_chalk["default"].green.bgWhiteBright("Server listening on ".concat(PORT)));
});