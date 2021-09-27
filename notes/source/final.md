
# 模仿vue-cli ui选项做一个简易版的react实现
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
## vue-cli源码阅读和逻辑抽离

ui入口:
```js

program
  .command('ui')
  .description('start and open the vue-cli ui')
  .option('-H, --host <host>', 'Host used for the UI server (default: localhost)')
  .option('-p, --port <port>', 'Port used for the UI server (by default search for available port)')
  .option('-D, --dev', 'Run in dev mode')
  .option('--quiet', `Don't output starting messages`)
  .option('--headless', `Don't open browser on start and output port`)
  .action((options) => {
    checkNodeVersion('>=8.6', 'vue ui')
    require('../lib/ui')(options)
  })

```
调用../lib/ui中的函数, options为参数

```js
(...args) => {
return ui(...args).catch(err => {
  error(err)
  if (!process.env.VUE_CLI_TEST) {
    process.exit(1)
  }
})
}
```

引用ui函数：
```js
async function ui (options = {}, context = process.cwd()) // : void
{
  //...
}
```
- 用options.host 配置host，默认localhost
- 用options.port 配置port, 
- 一堆ENV操作
- options配置
```js


  const opts = {
    host,
    port,
    graphqlPath: '/graphql',
    subscriptionsPath: '/graphql',
    enableMocks: false,
    enableEngine: false,
    cors: {
      origin: host
    },
    timeout: 1000000,
    quiet: true,
    paths: {
      typeDefs: require.resolve('@vue/cli-ui/apollo-server/type-defs.js'),
      resolvers: require.resolve('@vue/cli-ui/apollo-server/resolvers.js'),
      context: require.resolve('@vue/cli-ui/apollo-server/context.js'),
      pubsub: require.resolve('@vue/cli-ui/apollo-server/pubsub.js'),
      server: require.resolve('@vue/cli-ui/apollo-server/server.js'),
      directives: require.resolve('@vue/cli-ui/apollo-server/directives.js')
    }
  }

```

引入const { portfinder, server } = require('@vue/cli-ui/server')
然后使用server创建httpServer对象

核心是这两句：
```js
setNotificationCallback(() => openBrowser(url))
openBrowser(url)
```

设定通知回调，然后openBrowser()

const { setNotificationCallback } = require('@vue/cli-ui/apollo-server/util/notification')
const { log, error, openBrowser } = require('@vue/cli-shared-utils')

openBrowser是后端实现的方法，应该是打开一个网页地址
setNotificationCallback是前端实现的方法，用appolo-server是后端所有消息的入口。

```js
exports.setNotificationCallback = cb => {
  notifCallback = cb
    ? (_err, action) => (action === 'activate') && cb()
    : null
}

```
创建一个回调，并在action === active时候执行，相当于把openBrowser方法加了一个开关存入了notifCallback中，最后输出一个notifier构建器：

```js

exports.notify = ({ title, message, icon }) => {
  notifier.notify({
    ...snoreToastOptions,
    title,
    message,
    icon: builtinIcons[icon] || icon
  }, notifCallback)
}

```
notifer来自const notifier = require('node-notifier')

调查一个这个库，作用就是把消息送进这个callback函数中，也就是openBrowser中，这时候再看openBrowser

openBrowser函数核心逻辑就是这个：
```js
  case Actions.NONE:
    // Special case: BROWSER="none" will prevent opening completely.
    return false
  case Actions.SCRIPT:
    return executeNodeScript(value, url)
  case Actions.BROWSER:
    return startBrowserProcess(value, url)
```
错误消息，脚本消息和开启BROWSER消息

executeNodeScript就是开一个子进程完成脚本