# Build a Basic Cli tools using NodeJS

想要创建一个cli工具，有一些绕不开的经典工具:

- Cammander: 用来接受和处理命令行的调用输入，见[[./cli-basic.md]]
- Inquire：用来处理交互的询问
- Chalk：用来彩色打印各种样式的命令行输出

## bin选项

想要把整个文件对外打包成为一个看上去像整体的东西输出，需要在package.json中设置bin选项：

```json
  "bin": {
    "kkb": "./bin/kkb.js"
  },
```
这就是文件的入口，需要引用的库直接使用commonJS形式导入即可。

但是如果要用es形式的模块，可能就需要使用rollup或者webpack等工具，将模块翻译为cjs形式的文件，才可以被bin中导入执行。

## 一个经典文件结构

- bin
- config
- lib
- scripts
- src
pacakge.json

其中pacakge.json定义了文件的依赖和打包的脚本，如果脚本过于复杂，则需要在scripts中统一写，bin中则是工具的调用入口。

src中的逻辑可以用任何语言完成，最终需要用编译和打包工具打包成为lib中的cjs模式文件

以上是针对脚本形式的node包，如果在packages.json中定义了type="module"。则文件支持es包（如果需要ts，或者处理es标准不兼容的情况，则依然需要babel, webpack或者rollup之类的工具）


