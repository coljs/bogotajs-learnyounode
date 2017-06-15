const { get } = require('http');
const url = process.argv[2];

get(url, (res) => {
    let response = '';

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        response += chunk;
    })
    res.on('end', () => {
        console.log(response.length);
        console.log(response);
    });
}).on('error', console.log);
