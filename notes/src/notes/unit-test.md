# 单元测试

组长使用的vite React Starter模板并没有考虑测试的功能。对于Vue的支持还可以，对于React和JSX的解析就比较令人头疼。

（不过后来我才在vite-awesome上面看到了https://github.com/aelbore/vite-plugin-test 以及很多模板，不过那都是我搭建完测试框架之后的事情了。

因为是在vite框架中，不好引用react-script里面的封装脚本。那就只能从底层的testing-library开始。

为了解决jsx的问题，需要设置babel, 对babel和jest的配置依然是一个非常困难的过程。需要慢慢在报错中找到解决的办法。

@babel/preset-react：主要用来配置jsx和React names，不过需要引入React包
@babel/preset-env: 主要用来配置es6 module和commonjs脚本，尤其是在两个混用的项目中，一不小心就会弄出不兼容错误。这算是javascript的历史包袱。

https://pranshushah.tech/getting-started-with-react-using-vitejs