const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ...

server.listen(3000, () => {
  console.log('WebSocket server is listening on port 3000');
});
