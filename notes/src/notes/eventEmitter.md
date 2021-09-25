# Event Emitter 

事件发布，订阅机制是一种经典的策略模式，下面是一个典型的例子

```
yarn init -y
yarn add events
```

然后在index.js中写下：

```js
const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();

event.on('some_event', num => {
  console.log('some_event trigger: ' + num);
});

let num = 0;
setInterval(() => {
  event.emit('some_event', num++);
}, 1000);

```

运行后会发现console中每隔一秒发出一个更新的数字，这就是因为setInterval中的event.emit触发了之前在event.on中注册的'some_event'事件。从而每一次都可以发布。

## 真实例子：vscode中的event.ts

