const { createServer } = require('http');

const port = process.argv[2];

createServer((request, response) => {

    if (request.method === 'POST') {
        let body = '';

        request.setEncoding('utf8');
        request.on('data', (chunk) => {
            body += chunk;
        })
        request.on('end', () => {
            response.end(body.toUpperCase());
        });
    }

}).listen(port);