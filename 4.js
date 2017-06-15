const { readFile } = require('fs');
const file = process.argv[2];

readFile(file, 'utf8', (error, content) => {
    console.log(content.split('\n').length-1)
});
