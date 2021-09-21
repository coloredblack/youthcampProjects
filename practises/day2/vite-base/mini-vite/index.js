const Koa = require("koa");
const fs = require('fs');
const app = new Koa();

app.use((ctx) => {
  const url = ctx.request.url;
  console.log(url);
  
  if (url === "/") {
    ctx.body = fs.readFileSync("./index.html", "utf-8");
  } else if (usr.endsWith(".js")) {
    //find the correct path and load
    const p = path.resolve(__dirname, url.slice(1))
    console.log(p);
    ctx.type = "type/javascript";
  
    const source = fs.readFileSync(p, "utf-8");
    ctx.body = rewriteImport(source);
  } else if (url.startsWith("/@modules", "")) {
    const moduleName = url.replace('@/modules', "");
    const prefix = path.resolve(__dirname, "node_modules", moduleName);
  }
})

app.listen(8080, (ctx) => {
  console.log("open server 8080")
});