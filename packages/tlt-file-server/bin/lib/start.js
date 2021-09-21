'use strict'

const options = require('./options');
const fs = require('fs');
const path = require('path');
const { loadConfig } = require('./cli-utils');
const { red, bold } = require('colorette');

module.exports = function (program, server) {
  const start = program
    .command('start')
    .description('run the solid server')
  
  options
    .filter((option) => !option.hide)
  
}