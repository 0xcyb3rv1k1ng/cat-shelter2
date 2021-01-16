const homeHandler = require('./home');
const staticFiles = require('./static-files');
const catHandler = require('./cats')
const formidable = require('formidable'); // import non built in Node library

module.exports = [homeHandler, staticFiles, catHandler];