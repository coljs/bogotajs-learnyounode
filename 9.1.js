const { get } = require('http');
const urls = process.argv.slice(2);

const requests = urls.map((url) => {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            let response = '';

            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                response += chunk;
            })
            res.on('end', () => {
                resolve(response)
            });
            res.on('error', reject)
        }).on('error', reject);
    });
});

Promise.all(requests)
    .then((responses) => {
        responses.forEach((r) => console.log(r));
    })
    .catch(console.error)
