
## CommonJS 规范

CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口对象。加载某个模块，其实是加载该模块的 module.exports 对象。


```javascript
var x = 5;
var addX = function (value) {
	return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```


## Node.js 的API文档

Node.js 的API文档： <https://nodejs.org/docs/latest-v8.x/api/index.html>

查阅文档时的常见规律：

- 红色：表示已废弃。

- 绿色：表示100%安全使用。

- 黄颜色：表示当前版本可用，其他版本不确定。


## Node.js 中模块的分类


Node.js 应用由模块组成，采用 CommonJS 模块规范。Node.js中的模块分为三种：

- 内置模块

- 第三方模块

- 自定义模块

下面简单介绍一下。

### 1、内置模块

```js
const process = require('process');
const path = require('path');

console.log(process.version);
console.log(path.resolve('../'));
```

require方法用于加载模块。

### 2、require 加载第三方包的机制

```js
const express = require('express');
```

require 加载第三方包的机制：

（1）第三方包安装好后，这个包一般会存放在当前项目的 node_modules 文件夹中。我们找到这个包的 package.json 文件，并且找到里面的main属性对应的入口模块，这个入口模块就是这个包的入口文件。

（2）如果第三方包中没有找到package.json文件，或者package.json文件中没有main属性，则默认加载第三方包中的index.js文件。

（3）如果在 node_modules 文件夹中没有找到这个包，或者以上所有情况都没有找到，则会向上一级父级目录下查找node_modules文件夹，查找规则如上一致。

（4）如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx。

**3、自定义模块（module）**：

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

举例：

```
var example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

今天这篇文章，重点讲一下内置模块中的 **fs 文件处理模块**。

## 文件读取

fs 的英文全称是 File System。fs 模块提供了很多api方法，我们首先应该学习的方法是**文件读取**。

Node中文件读取的方式主要有以下几种。


### 异步读取文件 fs.readFile()



语法格式：

```js
fs.readFile(file[, options], callback(error, data))
```

代码举例：

```javascript
fs.readFile('c:\\demo\1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 同步读取文件 fs.readFileSync()

语法格式：

```js
fs.readFileSync(file[, options])
```

代码举例：

```javascript
try {
  const data = fs.readFileSync('c:\\demo\1.txt', 'utf8');
  console.log(data);
} catch(e) {
  // 文件不存在，或者权限错误
  throw e;
}
```


### Node.js 中的异步操作

fs模块对文件的几乎所有操作都有同步和异步两种形式。例如：readFile() 和 readFileSync()。


区别：

- 同步调用会阻塞代码的执行，异步则不会。

- 异步调用会将 读取任务 下达到任务队列，直到任务执行完成才会回调。

- 异常处理方面，同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数。【重要】

```javascript
const fs = require('fs');
const path = require('path');

console.time('async');
fs.readFile(path.join('C:\\Users\\qianguyihao\\Downloads', 'H.mp4'), (error, data) => {
    if (error) throw error;
    // console.log(data);
});
console.timeEnd('async');


console.time('sync');
try {
    var data = fs.readFileSync(path.join('C:\\Users\\qianguyihao\\Downloads', 'H.mp4'));
    // console.log(data);
} catch (error) {
    throw error;
}
console.timeEnd('sync');
```






