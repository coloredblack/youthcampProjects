# Commander-JS
```js
const pragram = require('commander')

program.version('1.0.0')
program.option('-h --help')
program.parse(process.argv) //entry

if (program.help) {
  // show helper
}

program.command('init <name>')
  .description('some desp')
  .action(require('../init'))
```