# Day 5

mini-vue, JSX, SFC, MVVM

感觉好像之前在第二天老师的库中看到过一个mini-vue的库，赶紧弄下来研究研究。

## Vue 3

对TS的支持：
- 函数式的支持（签名非常具体）
- 基于class，装饰器

实例化， 有利于tree shaking
复用性：组件庞大且零散，经常横跳，易于封装

API简化，指令
- inserted

指令的写法之前和组件一致性不好，在vue3中进行了一致性的优化。

简化问题：v-model和.sync修饰符几乎没有区别，所以vue3中年就剩下v-model了

扩展性：
createRenderer()实现平台特有的节点操作
querySelector
createElement
（驱动Canvas，原生，小程序）




