const fs = require('fs');
const path = require('path');
// const validUrl = require('valid-url');
// const { URL } = require('url');
// const { isEmail } = require('validator');

module.exports = [
  {
    name: "root",
    help: "Root folder to serve",
    question: "Path to the folder you want to serve. Default is: ",
    default: "./data",
    prompt: true,
    filter: (value) => path.resolve(value),
  },
  {
    name: "port",
    help: "SSL port to use",
    question: "SSL port to run on. Default is",
    default: "2333",
    prompt: true
  },
  {
    name: "config-path",
    help: "Path to the config directory. Default is:",
    defualt: "./config",
    prompt: true
  },
  {
    name: "config-file",
    help: 'Path to the config file',
    default: './config.json',
    prompt: true
  },
  {
    name: 'db-path',
    help: 'Path to the metadata database',
    default: './.db',
    prompt: true
  }
]