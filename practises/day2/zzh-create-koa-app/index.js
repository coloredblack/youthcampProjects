import fs from 'fs';
import { createIndexTemplate, createPackageJSONTempate } from './createTemplate.js';

// cli 
const inputConfig = {
  middleWare: {
    router: true
  }
}

fs.mkdirSync(getRootPath());

// package.json
fs.writeFileSync(getRootPath()+"package.json", createPackageJSONTempate());

// index.js
fs.writeFileSync(getRootPath() + 'index.js', createIndexTemplate(inputConfig));

// install deps 

function getRootPath() {
  return './haha/'
}