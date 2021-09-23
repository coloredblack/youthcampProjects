const http = require('http');
const tltfs = require('../../index.js');

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
})