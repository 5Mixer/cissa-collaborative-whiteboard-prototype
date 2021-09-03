const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'))

let messages = [];

// Add socket io connection handler here.


server.listen(8000, () => {
	console.log('listening on *:8000');
});