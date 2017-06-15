const { createServer } = require('net');
const port = process.argv[2];
const moment = require('moment');

createServer((socket) => {

    const date = new Date();
    socket.end(`${moment().format('YYYY-MM-DD hh:mm')}\n`)

}).listen(port);