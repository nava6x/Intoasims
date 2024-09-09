const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);
const PORT = "3000"

app.get('/', (req, res) => {
    res.send('<h1>I LOVE YOU BABIES</h1>');
});

server.listen(PORT, () => {
    console.log("Connected")
});
