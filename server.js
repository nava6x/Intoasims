const express = require('express');
const { createServer } = require('node:http');
const path = require('node:path');
const { Server } = require("socket.io");
const data  = require('.tpags');
const { Socket } = require('node:dgram');
const app = express();
const server = createServer(app);
const io = new Server(server)
const Mainnum = data[1]
const cid = data[0]
const PORT = 3000

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api/users', (req, res) =>{
  const users = mainnum=[Mainnum,cid];
  res.json(users)
});
io.on('connection', (socket) => {
  socket.on(cid, (msg) => {
    io.emit(cid, msg);
  })
});
server.listen(PORT, () => {
  console.log("Running");
});
