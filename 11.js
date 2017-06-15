const { createServer } = require('http');
const { createReadStream } = require('fs');

const file = process.argv[3];
const port = process.argv[2];

createServer((request, response) => {

    createReadStream(file).pipe(response);

}).listen(port);