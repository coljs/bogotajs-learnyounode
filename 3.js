const { readFileSync } = require('fs');

const file = process.argv[2];

console.log(readFileSync(file, 'utf-8')).split('\n').length-1);
