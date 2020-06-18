

## Node.js 的官方API文档


- Node.js 的API文档（英文）： <https://nodejs.org/docs/latest-v8.x/api/index.html>

- Node.js 的API文档（中文）：<http://nodejs.cn/api/>

关于 Node.js 的内置模块和常见API，可以看官方文档。


查阅文档时，稳定指数如下：

- 红色：废弃。

- 橙色：实验。表示当前版本可用，其他版本不确定。也许不向下兼容，建议不要在生产环境中使用该特性。

- 绿色：稳定。与 npm 生态系统的兼容性是最高的优先级。


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

常见的内置模块包括：

- FS：文件系统模块

- path：路径模块

- OS：操作系统相关

- net：网络相关

- http

- ...

你可能会有疑问：Node.js 这么牛吗？还能直接和操作系统做交互？

带着这个疑问，我们不妨简单看看 Node.js 的源码，以 os 模块举例：

- 打开os模块的源码：<https://github.com/nodejs/node/blob/master/lib/os.js>，翻到最底部，找到 `cpus`这个方法

- 进而找到 `getCPUs()`

- internalBinding('os')：通过 internalBinding 可以调用系统底层的方法。internalBinding 主要是 JS 虚拟机在做的事情。

- `internalBinding('os')` 的实现，在 <https://github.com/nodejs/node/blob/master/src/node_os.cc> 里，里面都是 C++ 的代码。比如有一个`getCPUs`方法。

现在你知道了，JS本身是没有能力获取底层系统资源的，这一切都是 JS虚拟机在和底层做交互，然后通过 JS 的表现形式，暴露给应用层。

另外，还有很多库，是直接使用C/++编写的，通过编译之后，再提供给 JS 应用层调用，或者直接提供给 Node.js层使用。

**所有的编程语言底层都会回归C/C++**，甚至是汇编语言。


### 2、require 加载第三方包的机制

```js
const express = require('express');
```

require 加载第三方包的机制：

（1）第三方包安装好后，这个包一般会存放在当前项目的 node_modules 文件夹中。我们找到这个包的 package.json 文件，并且找到里面的main属性对应的入口模块，这个入口模块就是这个包的入口文件。

（2）如果第三方包中没有找到package.json文件，或者package.json文件中没有main属性，则默认加载第三方包中的index.js文件。

（3）如果在 node_modules 文件夹中没有找到这个包，或者以上所有情况都没有找到，则会向上一级父级目录下查找node_modules文件夹，查找规则如上一致。

（4）如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx。

### 3、自定义模块（module）：

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

举例：

```
var example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

## 读取文件

今天这篇文章，重点讲一下 Node 内置模块中的 **fs（文件处理模块）**。

在使用文件模块之前，记得先导入：

```js
// 导入文件模块
const fs = require('fs');
```

fs 的英文全称是 File System。fs 模块提供了很多 api 方法，我们首先应该学习的方法是**文件读取**。

Node中文件读取的方式主要有以下几种。


### 异步读取文件 fs.readFile()



语法格式：

```js
fs.readFile(file[, options], callback(error, data))
```

代码举例：

```javascript
const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        // 失败
        console.log(err)
    } else {
        // 成功
        console.log('异步读取数据：' + data2)
    }
});
```


如果需要嵌套读取多个文件，可以用 promise 或者 async ... await 进行封装。代码举例如下。

### promise 封装 fs.readFile()

```js
const fs = require('fs');

function fsRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { flag: 'r', encoding: "utf-8" }, (err, data) => {
            if (err) {
                //失败执行的内容
                reject(err)
            } else {
                //成功执行的内容
                resolve(data)
            }
        })
    })
}

var promise1 = fsRead('hello1.txt')
promise1.then(res1 => {
    console.log(res1);
    return fsRead('hello2.txt');
}).then(res2 => {
    console.log(res2);
    return fsRead('hello3.txt');
}).then(res3 => {
    console.log(res);
})

```

### async ... await 封装 fs.readFile()

这个写法更为简洁，推荐。

```js
var fs = require('fs');

function fsRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { flag: 'r', encoding: "utf-8" }, (err, data) => {
            if (err) {
                //失败执行的内容
                reject(err)
            } else {
                //成功执行的内容
                resolve(data)
            }
        })
    })
}

async function ReadList() {
    var res1 = await fsRead('hello1.txt');
    var res2 = await fsRead('hello2.txt');
    var res3 = await fsRead('hello3.txt');
}

// 执行方法
ReadList();

```


### 同步读取文件 fs.readFileSync()

语法格式：

```js
fs.readFileSync(file[, options])
```

代码举例：

```javascript
const fs = require('fs');

try {
  const data = fs.readFileSync('hello.txt', 'utf8');
  console.log(data);
} catch(e) {
  // 文件不存在，或者权限错误
  throw e;
}
```

### Node.js 中的同步和异步的区别

fs模块对文件的几乎所有操作都有同步和异步两种形式。例如：readFile() 和 readFileSync()。

区别：

- 同步调用会阻塞代码的执行，异步则不会。

- 异步调用会将 读取任务 下达到任务队列，直到任务执行完成才会回调。

- 异常处理方面：同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数。【重要】

## 写入文件

语法格式：

```js
fs.write(fd, string[, position[, encoding]], callback)

```

async ... await 封装：

```js
let fs = require('fs')

function writeFs(path, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, { flag: "a", encoding: "utf-8" }, function (err) {
            if (err) {
                //console.log("写入内容出错")
                reject(err)
            } else {
                resolve(err)
                //console.log("写入内容成功")
            }
        })
    })
}


async function writeList() {
    await writeFs('1.html', "<h1>qianguyihao</h1>");
    await writeFs('2.html', "<h1>hello world</h1>");
    await writeFs('3.html', "<h1>永不止步</h1>");
}

writeList()
```

## 删除文件

语法格式：

```js
fs.unlink(path, callback)
```

参数说明：

- path：文件路径。
- callback：回调函数。


代码举例：

```js
fs.unlink('path/file.txt', (err) => {
    if (err) throw err;
    console.log('文件删除成功');
});

```

备注：`fs.unlink()` 不能用于删除目录。 如果要删除目录，可以使用 `fs.rmdir()`。


## Buffer

通过 Buffer 开辟的内存空间，都是连续的内存空间，所以效率比较高。

代码举例1：

```js

// 将字符串转成 buffer 对象
const str = 'qianguyihao';
let buffer = Buffer.from(str);

console.log(buffer); // 输出16进制编码
console.log(buffer.toString()); // 输出字符串：qianguyihao
```

代码举例2：

```js
// 从内存中开辟一个新的缓冲区
let buffer = Buffer.alloc(20);
buffer[0] = 'a';

console.log(buffer);

```


## 读取目录


语法格式：

```js
fs.mkdir(path[, options], callback)
```

参数说明：

- path：文件路径。

- options参数可以是：
    - recursive：是否以递归的方式创建目录，默认为 false。
    - mode：设置目录权限，默认为 0777。


代码举例：

```js
var fs = require("fs");
​
console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});

```


其他的还有：（暂略）

- 删除目录

- 输入输出





