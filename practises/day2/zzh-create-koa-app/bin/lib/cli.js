const { program } = require('commander');
const loadInit = require('../lib/init');

module.exports = function createCli() {
  program.version(getVersion())
  loadInit(program);
}

function getVersion() {
  return require('../../package-lock.json').version 
}
