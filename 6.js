const filterFiles = require('./6-module');

const dir = process.argv[2];
const ext = process.argv[3];

filterFiles(dir, ext, (err, filtered) => {

    if (err) {
        return console.log(err);
    }

    filtered.forEach(f => console.log(f));
});
