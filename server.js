const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8023;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user Connected',socket.handshake.query);

    socket.on('disconnect', () => {
        console.log('User Disconnected with ip:',socket.handshake.address);
    });

});






server.listen(port, () => {
    console.log('Listening on port 8023');
})
