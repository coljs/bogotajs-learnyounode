const { readdir } = require('fs');
const { extname } = require('path');

const dir = process.argv[2];
const ext = `.${process.argv[3]}`;

const filterFiles = (error, files) => {
    const filtered = files.filter(file => extname(file) === ext);
    filtered.forEach(f => console.log(f));
};

readdir(dir, filterFiles);
