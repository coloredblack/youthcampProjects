const { promisify } = require('util');
// import * as ora from 'ora'
const ora = require('ora');

module.exports.clone = async function (repo, desc) {
  const download = promisify(require('download-git-repo'));
  const process = ora(`downloading ${repo}...`);
  process.start
  await download(repo, desc)
  process.succeed()
}