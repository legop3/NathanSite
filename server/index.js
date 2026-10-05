const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("www"));

io.on("connection", socket => {
  console.log(`${socket.id} connected`);
});

server.listen(3746, () => {
  console.log("NATHANSITE IS RUNNING!!!! ON THE HARDCODED PORT!! 3746");
});