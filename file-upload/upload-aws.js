const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: ''
});

const fileData = 'file content'; // Buffer []
const base64data = Buffer.from(fileData, 'binary');

const s3 = new AWS.S3({region: ''});

const params = {
    Bucket: 'path/to/bucket',
    Key: 'file name',
    Body: base64data
};

s3.putObject(params, function (err, res) {
    if (err) {
        return Promise.reject({message: 'File upload failed!'});
    }
    return Promise.resolve({message: 'File successfully uploaded!', data: res});
});