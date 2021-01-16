const http = require('http'); // http is built into Node.js, but must be imported to access
const port = 3000;
const handlers = require('./handlers');
const formidable = require('formidable'); // import non built in Node library

http.createServer((req, res) => {
  for (let handler of handlers) {
    if(!handler(req, res)) {
      break;
    }
  }
}).listen(port);