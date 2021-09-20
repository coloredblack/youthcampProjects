const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');

const log = content => { console.log(chalk.green(content))}

const { clone } = require('./download');

const myspawn = async (...args) => {
  const { spawn } = require('child_process');
  return new Promise((resolve, reject) => {
    const proc = spawn(...args)
    // merge the out stream
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('error', (err) => {
      reject(err);
    })
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  clear();
  const data = await figlet('KKB WELCOME');
  log(data);

  log('setup')
  // await clone('github:imagemin/imagemin')

  // spawn('npm', ['install']) // not sync so we can use promise to wrap it and redirect the log
  // 把子进程的输出流合并到主进程
  log('install deps')
  await myspawn('npm', ['install'], { cwd: `./${name}` })

}