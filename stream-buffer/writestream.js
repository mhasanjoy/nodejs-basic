const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
        readStream.pipe(res);
    } else {
        res.write('Not found!');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');
