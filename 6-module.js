const { extname } = require('path');
const fs = require('fs');


module.exports = (dir, ext, callback) => {
    fs.readdir(dir, (err, files) => {

        if (err) return callback(err);

        const filtered = files.filter(file => extname(file) === `.${ext}`);

        callback(null, filtered);
    })
};
