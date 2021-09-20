(async () => {
  const fs = require('fs');
  const { promisify } = require('util')
  const readFile = promisify(fs.readFile)
  const data = await readFile('./config.js');
  console.log(data.toString());
})()

/*
module.exports = {
  abc: 1
}
*/