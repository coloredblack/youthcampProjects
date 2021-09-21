import ejs from "ejs";
import fs from 'fs';

export function createIndexTemplate(config) {
  const template = fs.readFileSync("./templates/index.ejs", "utf-8");
  const code = ejs.render(template, {
    router: config.middleWare.router
  });
  console.log(code);
  return code;
}

export function createPackageJSONTempate(config) {
  const template = fs.readFileSync("./templates/package.template.ejs", "utf-8");
  const code = ejs.render(
    template, {}
  );
  console.log(code);
  return code;
}