const { get } = require('http');
const url = process.argv[2];

get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', console.log)
}).on('error', console.log);
