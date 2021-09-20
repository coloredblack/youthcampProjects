const fs = require('fs');

// Async: fs.readFile()

// Sync: fs.readFineSync() binary by default returns a buffer
const data = fs.readFileSync('./config.js');
console.log('data', data);