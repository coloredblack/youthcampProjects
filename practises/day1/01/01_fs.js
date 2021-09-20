const fs = require('fs');


// Sync: fs.readFineSync() binary by default returns a buffer
/*
const data = fs.readFileSync('./config.js');
console.log('data', data);
*/
// data <Buffer 6d 6f 64 75 6c 65 2e 65 78 70 6f 72 74 73 20 3d 20 7b 0a 20 20 61 62 63 3a 20 31 0a 7d>

// Async: fs.readFile()

/*
fs.readFile('./config.js', (err, data) => {
  if (err) {
    throw(err)
  } else {
    console.log(data.toString());
  }
})
*/


// module.exports = {
//  abc: 1
//}
