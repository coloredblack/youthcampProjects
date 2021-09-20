const fs = require('fs');
const handler = require('handlebars');
const chalk = require('chalk');

module.exports = async () => {
  const list = fs.readdirSync('./src/views')
    .filter(v => v !== 'Home.vue')
    .map(v => ({
      name: v.replace('.vue', '').toLocaleLowerCase(),
      file: v,
    }));
  
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString()
      const result = handlebars.compile()
    }
  }
}
