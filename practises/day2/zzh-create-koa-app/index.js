import fs from 'fs';
import { createIndexTemplate, createPackageJSONTempate } from './createTemplate.js';
import execa from 'execa';

// const answetr = await question()

// cli 
const inputConfig = {
  packageName: answer.packageName,
  prot: answer.port,
  middleWare: {
    router: answer.middleWare.indexOf("koaRouter") !== -1,
    static: answer.middleWare.indexOf("koaStatic") !== -1
  }
}

fs.mkdirSync(getRootPath());

// package.json
fs.writeFileSync(getRootPath()+"package.json", createPackageJSONTempate());

// index.js
fs.writeFileSync(getRootPath() + 'index.js', createIndexTemplate(inputConfig));

// install deps 
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2,2,2],
})

function getRootPath() {
  return './haha/'
}