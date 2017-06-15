const { createServer } = require('http');
const { parse: parseUrl } = require('url');
const { parse: parseQuery } = require('querystring');
const port = process.argv[2];

createServer((request, response) => {

    const parsedUrl = parseUrl(request.url);
    const parsedQuery = parseQuery(parsedUrl.query);

    const date = new Date(parsedQuery.iso);

    let body;

    if (parsedUrl.pathname === '/api/parsetime') {
        body = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    }

    if (parsedUrl.pathname === '/api/unixtime') {
        body = {
            unixtime: date.getTime()
        }
    }

    if (body) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(body));
    }

    response.writeHead(404);
    response.end();

}).listen(port);