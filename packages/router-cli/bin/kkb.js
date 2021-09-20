#!/usr/bin/env node
const { program } = require('commander');
const init = require('../lib/init');

// import { program } from 'commander';
// import init from '../lib/init';

program.version(require('../package').version);
program.command('init <name>')
  .description('init project')
  .action(init)

program.parse(process.argv);