/**
 * Server file
 * Handles communication between the connected clients
 * v0.0.1
 **/

import http from 'http';
import chalk from 'chalk';
import socketio from 'socket.io';
import config from './config';

const { log } = console;
const app = http.createServer();
const io = socketio(app, { origins: '*:*' });
const { PORT } = config || {}

io.on('connection', (socket) => {
    const { request: {
        connection,
        headers
    } } = socket;

    socket.on('event:draw', (data) => {
        socket.broadcast.emit('broadcast:draw', {
            datetime: new Date().toString(),
            value: data
        })
    });

    // TODO 
});

app.listen(PORT, function () {
    log(chalk.green.bgWhiteBright(`Server listening on ${PORT}`));
});
