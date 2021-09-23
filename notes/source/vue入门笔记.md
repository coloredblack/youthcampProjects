# Vue入门笔记
2021年9月22日

这两天一旦遇到使用Vue的项目就很容易跟不上，痛定思痛打算在晚上入个门。

安装，使用@vue/cli进行初始化

```js
npm i -g @vue/cli
vue create my-project
yarn serve
```

允许采用模板语法来声明式地将数据渲染进DOM系统（坦白说这就是我当初不选择学习Vue的原因，感觉模板语法非常不符合我的审美。许多人觉得难以理解的React hooks我反而感觉用的很舒服……可能是我对任何一个过程都有放在整体理解的需求，对输入输出很敏感，所以对这种内部结构与外部抽象混合在一起的模板语法非常反感）

在src/main.js中：
```js
createApp(App).mount('#app')
```
意味着在id="app"的模块下渲染整个App

## .vue文件

.vue文件中主要有三个部分：

```vue
<template>
  ..组件部分
</template>
<script>
import ....
export default {
  name: 'App'
  components: {
    Helloworld
  }
  props: {
    msg: String
  }
}
</script>
<style>
...some styles
</style>
```

确实实现了结构，逻辑和样式的分离，export描述了template的名字，用到的组件，方法和数据。

在模板中可以使用{{}}调用props中的信息

可以传递方法吗？

吐了，v-on传递方法意味着完全无法进行函数参数和模式的检查

看了一圈，一个吹vue的说可以采用事件传递。

看到v-if和v-for的时候感觉自己还是接受无力，这不依然是把逻辑和结构混合在一起，还不能进行封装……

