

## 前言

网站越来越复杂，js代码、js文件也越来越多，会遇到**一些问题**：

- 命名冲突

- 文件依赖

- 各种问题

程序模块化包括：

- 日期模块

- 数学计算模块

- 日志模块

- 登陆认证模块

- 报表展示模块等。

所有这些模块共同组成了程序软件系统。

一次编写，多次使用，才是提高效率的核心。


**程序模块化开发的优点：**

- 开发效率高：代码方便重用，别人开发的模块直接拿过来就可以使用，不需要重复开发类似的功能。

- 方便后期维护：软件的声明周期中最长的阶段其实并不是开发阶段，而是维护阶段，需求变更比较频繁。使用模块化的开发，方式更容易维护。

## 模块化规范

###  模块化的概念解读

模块化起源于 Node.js。Node.js 中把很多 js 打包成 package，需要的时候直接通过 require 的方式进行调用（CommonJS），这就是模块化的方式。

那如何把这种模块化思维应用到前端来呢？这就产生了两种伟大的 js：RequireJS 和 SeaJS。



### 模块化规范

服务器端规范：

- [**CommonJS**](http://www.commonjs.org/)：是 Node.js 使用的模块化规范。

浏览器端规范：

- [**AMD规范**](https://github.com/amdjs/amdjs-api)：是 **[RequireJS](http://requirejs.org/)** 在推广过程中对模块化定义的规范化产出。

```
- 异步加载模块；

- 依赖前置、提前执行：require([`foo`,`bar`],function(foo,bar){});   //也就是说把所有的包都 require 成功，再继续执行代码。

- define 定义模块：define([`require`,`foo`],function(){return});
```

- **[CMD规范](https://github.com/amdjs/amdjs-api)**：是 **[SeaJS](http://seajs.org/)** 在推广过程中对模块化定义的规范化产出。淘宝团队开发。

```

	同步加载模块；

	依赖就近，延迟执行：require(./a) 直接引入。或者Require.async 异步引入。   //依赖就近：执行到这一部分的时候，再去加载对应的文件。

	define 定义模块， export 导出：define(function(require, export, module){});
```


面试时，经常会问：AMD 和CMD 的区别。



## SeaJS 的应用

### SeaJS 的介绍

SeaJS：一个基于CMD规范实现的模块化开发解决方案。

作者：Alibaba 玉伯。

官网：<http://seajs.org/>

GitHub：<https://github.com/seajs/seajs>

现在官网变成了：<https://seajs.github.io/seajs/docs/>

特性：

- 简单友好的模块定义规范。

- 自然直观的代码组织方式。


20180303_2107.png








## RequireJS（AMD）、SeaJS（CDM）、CommonJS、ES6 的对比

### RequireJS 和 AMD


AMD 是 RequireJS 在推广过程中对模块化定义的规范化产出。


20180303_1653.png


异步模块定义，特点是依赖前置。


### SeaJS 和 CMD

CMD 是 SeaJS 在推广过程中对模块化定义的规范化产出


同步模块定义。

```javascript
	// 所有模块都通过 define 来定义
	define(funtion(require, exports, module) {

        //通过 require 引入依赖

        var $ require(`jquery`);

        var Spinning = require(`./spinning`);
	})
```

SeaJS 是淘宝开发团队做的，知名度不如 RequireJS。

### CommonJS

CommonJS 的规范：module.exports

服务器端的 Node.js 推荐使用 CommonJS 规范，来定义模块化开发。前端浏览器不支持 CommonJS 规范。

20180303_1701.png


以上三个都是 ES5里面的规范。

### ES6

ES6的特性：export/import

20180303_1704.png
















