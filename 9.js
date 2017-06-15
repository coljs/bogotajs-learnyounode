const { get } = require('http')
const urls = process.argv.slice(2);
const responses = [];
let count = 0;

urls.forEach((url, index) => {
    get(url, (res) => {
        let response = '';

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            response += chunk;
        })
        res.on('end', () => {
            responses[index] = response;
            count++;
            if(count === urls.length) {
                responses.forEach((r) => console.log(r));
            }
        });
    }).on('error', console.log);
});
