// NIO STREAM BLOCK
const fs = require('fs')
// copy the images/1.png to images/2.png
// WHY NOT read & write? 

const rs = fs.createReadStream('./images/1.png');
const ws = fs.createWriteStream('./images/2.png');
rs.pipe(ws);

// node 05_stream.js 
// then you can find 2.png