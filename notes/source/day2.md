# day2

前端工程化，vite, webpack, rollup, minivue

esbuild是在开发环境中包引入用的库

npx koa-setup koa-test
- 创建文件名
- 创建package.json（观察发现就是直接npm init -y的结果）
- npm i koa
- 创建index.js

ejs 模板化的封装库，
execa 更友好的子进程封装
inquire 问答库

- import ejs之后使用ejs.render进行代码渲染，第二个参数传入变量，可以传入config
- 用inquirer从用户交互中获取参数，并传入封装好的getConfig方法中
- 用子进程指定cwd和输出流，进行安装
- prettier的API调用方式来让模板代码格式化之后更美观 prettier.format(string, config): string

// 命令行封装

作业：把之前的程序封装为命令行

问题：路径有错

const __dirname = fileURLToPath(import.meta.url); （注意这里是正在执行的脚本文件路径，然后用path库进行转换即可）

## webpack

- 资源
- 原型图
- 加载方法
- 支持
- 多入口，模板出口
- 懒加载

作业
支持CSS解析
支持parse5的解析
yarn de
清理dist
自动生成html
user.js可以懒加载

## rollup 

rollup默认不解析nodejs库，需要插件@rollup/plugin-node来进行解析
但如果库本身就是用CommonJS写的呢？@rollup/plugin-common

若如果是一个比较大的库，可以用peerDependence来提醒依赖库，避免打包结果太大。然后使用external排除（webpack中好像也有）

webpack支持得更综合，更适合写网页
rollup对于纯JS支持更好，更适合写应用

### 练习
1. 引入vue但vue不可以打包进去
2. 支持解析json
3. 生成esm和cjs两种
4. esm代码压缩

## Vite
利用ESM，虽然现在浏览器支持了，但是node_modules不支持，相对路径不支持，样式文件之类也不支持。

Native-ESM-Based-Server拦截了浏览器的请求，然后返回给浏览器它能理解的代码。

- 天然拆分代码
- 抛弃了漫长的打包，对于开发调试过程友好

## 测试

前端自动化测试，用脚本自动化帮助测试
.spec.js 单元测试

test("info", ()=>{
  expect().toBe()
})

jest.mock(".js", () => {
  return jest.fn
})

组件测试
cypress测一个组件，会屏蔽调具体的实现，

e2e 模拟测试最外层
用户手动测试-e2e(happy path)-组件测试-单元测试

git提交时候主动调用.git/hoots中的脚本

husky可以帮助我们进行配置
prepack: husky install 

npx husky add .husky/pre-commit "npm run test"

git action在云端而git hooks在本地

eslint
