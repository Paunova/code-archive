function readFile(location) {
    return new Promise(function (res, rej) {
        fs.readFile(location, (err, data) => {
            if (err) throw rej(err);
            res(data);
        });
    });
}

function removeLocalFile(location) {
    return new Promise(function (res, rej) {
        fs.unlink(location, (err) => {
            if (err) throw rej(err);
            res();
        });
    });
}