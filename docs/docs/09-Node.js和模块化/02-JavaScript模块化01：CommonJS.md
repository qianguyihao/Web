

## 前言

网站越来越复杂，js代码、js文件也越来越多，会遇到**一些问题**：


- 文件依赖

- 全局污染、命名冲突

程序模块化包括：

- 日期模块

- 数学计算模块

- 日志模块

- 登陆认证模块

- 报表展示模块等。

所有这些模块共同组成了程序软件系统。

一次编写，多次使用，才是提高效率的核心。

## 模块化的理解


### 什么是模块化


**概念**：将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并组合在一起。

模块的内部数据、实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信。

最早的时候，我们会把所有的代码都写在一个js文件里，那么，耦合性会很高（关联性强），不利于维护；而且会造成全局污染，很容易命名冲突。


### 模块化的好处

- 避免命名冲突，减少命名空间污染

- 降低耦合性；更好地分离、按需加载

- **高复用性**：代码方便重用，别人开发的模块直接拿过来就可以使用，不需要重复开发类似的功能。

- **高可维护性**：软件的声明周期中最长的阶段其实并不是开发阶段，而是维护阶段，需求变更比较频繁。使用模块化的开发，方式更容易维护。

- 部署方便




## 模块化规范

### 模块化规范的引入

假设我们引入模块化，首先可能会想到的思路是：在一个文件中引入多个js文件。如下：

```html
<body>
    <script src="zepto.js"></script>
    <script src="fastClick.js"></script>
    <script src="util/login.js"></script>
    <script src="util/base.js"></script>
    <script src="util/city.js"></script>
</body>
```

但是这样做会带来很多问题：

- 请求过多：引入十个js文件，就有十次http请求。

- 依赖模糊：不同的js文件可能会相互依赖，如果改其中的一个文件，另外一个文件可能会报错。

以上两点，最终导致：**难以维护**。

于是，这就引入了模块化规范。


###  模块化的概念解读

模块化起源于 Node.js。Node.js 中把很多 js 打包成 package，需要的时候直接通过 require 的方式进行调用（CommonJS），这就是模块化的方式。

那如何把这种模块化思维应用到前端来呢？这就产生了两种伟大的 js：RequireJS 和 SeaJS。



### 模块化规范

服务器端规范：

- [**CommonJS规范**](http://www.commonjs.org/)：是 Node.js 使用的模块化规范。

CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构。


浏览器端规范：

- [**AMD规范**](https://github.com/amdjs/amdjs-api)：是 **[RequireJS](http://requirejs.org/)** 在推广过程中对模块化定义的规范化产出。

```
- 异步加载模块；

- 依赖前置、提前执行：require([`foo`,`bar`],function(foo,bar){});   //也就是说把所有的包都 require 成功，再继续执行代码。

- define 定义模块：define([`require`,`foo`],function(){return});
```

- **[CMD规范]()**：是 **[SeaJS](http://seajs.org/)** 在推广过程中对模块化定义的规范化产出。淘宝团队开发。

```

  同步加载模块；

  依赖就近，延迟执行：require(./a) 直接引入。或者Require.async 异步引入。   //依赖就近：执行到这一部分的时候，再去加载对应的文件。

  define 定义模块， export 导出：define(function(require, export, module){});
```


PS：面试时，经常会问AMD 和 CMD 的区别。


另外，还有ES6规范。

这篇文章，我们来讲一下`CommonJS`。


## CommonJS 的基本语法


### CommonJS 的介绍


[CommonJS](http://www.commonjs.org/)：是 Node.js 使用的模块化规范。

也就是说，Node.js 就是基于 CommonJS 这种模块化规范来编写的。

在 CommonJS 中，每个文件都可以当作一个模块：

- 在服务器端：模块的加载是运行时同步加载的。

- 在浏览器端: 模块需要提前编译打包处理。首先，既然同步的，很容易引起阻塞；其次，浏览器不认识`require`语法，因此，需要提前编译打包。


### 暴露模块的方式

**方式一**：

```javascript
  module.exports = value
```

这个 value 可以是任意的数据类型。

**方式二**：

```javascript
  exports.xxx = value
```


**问题**: 暴露的模块到底是谁？

**答案**：暴露的本质是`exports`对象。【重要】

比如，方式二可以理解成是，**给 exports 对象添加属性**。

PS：暴露的关键词是`exports`，不是`export`。




### 引入模块的方式

```
require(xxx)
```

解释：

- 下载的第三方模块：xxx直接为模块名（包名）。

- 自定义模块：xxx为模块文件路径


## CommonJS 在服务器端的实现举例


### 1、初始化项目

在工程文件中新建如下目录和文件：

```
modules
    | module1.js
    | module2.js
    | module3.js

app.js
```

然后在根目录下新建如下命令：

```
  npm init
```


然后根据提示，依次输入如下内容：

- **包名**：可以自己起包名，也可以用默认的包名。注意，包名里不能有中文，不能有大写。

- **版本**：可以用默认的版本 1.0.0，也可以自己修改包名。

其他的参数，一路回车即可。效果如下：

![](http://img.smyhvae.com/20180410_1425.png)

于是，根目录下会自动生成`package.json`这个文件。点进去看一下：

```json
{
  "name": "commonjs_node",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "smyhvae",
  "license": "ISC"
}

```


### 2、导入第三方包

`uniq`这个第三方包的作用是保证唯一性（我们拿它来举例）。我们在当前工程目录下，输入如下命令进行安装：

```
  npm install uniq
```

安装成功后，根目录下会自动生成相应的文件：

![](http://img.smyhvae.com/20180410_1450.png)


需要说明的是，我的node版本是 v8.10.0（v8以上），对应的 npm 版本是 v5.6.0，版本比较高，因此，当我输入完`npm install uniq`之后，`package.json`中就会自动添加`uniq`包的依赖：

![](http://img.smyhvae.com/20180410_1855.png)


如果有些童鞋的npm版本较低，就需要手动去添加依赖；另一种方式是，可以使用`npm install uniq --save`命令，这个多出来的`--save`就可以自动添加依赖。


我们去[官网](https://www.npmjs.com/package/uniq)看一下`uniq`的用法：

```javascript
  let uniq = require('uniq');

  let arr = [1, 1, 2, 2, 3, 5];
  uniq(arr);
  console.log(arr);  //输出结果：[ 1, 2, 3, 5 ]

```

可以看出，这个包可以起到数组去重的作用。

### 3、自定义模块

（1）module1.js：

```javascript
//暴露方式一：module.exports = value

//暴露一个对象出去
module.exports = {
    name: '我是 module1',
    foo(){
        console.log(this.name);
    }
}

//我们不能再继续写 module.exports = xxx。因为重新赋值，会把之前的赋值覆盖掉。

```

（2）module2.js：

```javascript
//暴露方式一：module.exports = value

//暴露一个函数出去
module.exports = function(){
    console.log('我是 module2');
}
```

注意，此时暴露出去的 exports 对象 等价于整个函数。

（3）module3.js：

```javascript
//暴露方式二：exports.xxx = value

//可以往 export 对象中不断地添加属性，进行暴露

exports.foo1 = function(){
    console.log('module3 中的 foo1 方法');
}

exports.foo2 = function(){
    console.log('module3 中的 foo2 方法');
}

exports.arr = [1,1,2,2,3,5,11];

```

（4）app.js：（将其他模块汇集到主模块）

```javascript
//将其他模块汇集到主模块

let uniq = require('uniq'); //引入时，第三方模块要放在自定义模块的上面

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');

//调用module1对象的方法
module1.foo();

//调用module2的函数
module2();  //注意，在定义时，module2对象等价于整个函数function。所以，module2()的意思是，直接调用了函数。

//调用module3中的属性
module3.foo1();
module3.foo2();

uniq(module3.arr); //将module3中的数组进行去重操作
console.log(module3.arr); //打印数组去重后的结果
```

这样的话，我们的代码就写完了。

我们在命令行中输入`node app.js`，就可以把代码跑起来了。打印结果如下：

```bash
我是 module1
我是 module2
module3 中的 foo1 方法
module3 中的 foo2 方法
[ 1, 11, 2, 3, 5 ]

```


## CommonJS 基于浏览器端的实现举例


### 1、初始化项目

在工程文件中新建如下目录和文件：

```
js
    dist //打包生成文件的目录
    src //源码所在的目录
      | module1.js
      | module2.js
      | module3.js
      | app.js //应用主源文件
index.html    //因为CommonJS是基于浏览器端，js文件要跑在浏览器的页面上，所以要有这个html页面
```

然后在根目录下新建如下命令：

```
  npm init
```


然后根据提示，依次输入如下内容：

- **包名**：可以自己起包名，也可以用默认的包名。注意，包名里不能有中文，不能有大写。

- **版本**：可以用默认的版本 1.0.0，也可以自己修改包名。

其他的参数，一路回车即可。

于是，根目录下会自动生成`package.json`这个文件。点进去看一下：

```json
{
  "name": "commonjs_browser",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


```


### 2、下载第三方包：Browserify

这里需要用到[Browserify](http://browserify.org/)这个工具进行编译打包。Browserify 称为 CommonJS 的浏览器端的打包工具。

输入如下命令进行安装：（两个命令都要输入）


```javascript
    npm install browserify -g          //全局
    npm install browserify --save-dev  //局部。
```

上面的代码中，`-dev`表示开发依赖。这里解释一下相关概念：

- 开发依赖：当前这个包，只在开发环境下使用。

- 运行依赖：当前这个包，是在生产环境下使用。


### 3、自定义模块 & 代码运行

（1）module1.js：

```javascript
//暴露方式一：module.exports = value

//暴露一个对象出去
module.exports = {
    name: '我是 module1',
    foo(){
        console.log(this.name);
    }
}

//我们不能再继续写 module.exports = xxx。因为重新赋值，会把之前的赋值覆盖掉。

```

（2）module2.js：

```javascript
//暴露方式一：module.exports = value

//暴露一个函数出去
module.exports = function(){
    console.log('我是 module2');
}
```

注意，此时暴露出去的 exports 对象 等价于整个函数。

（3）module3.js：

```javascript
//暴露方式二：exports.xxx = value

//可以往export对象中不断地添加属性，进行暴露

exports.foo1 = function(){
    console.log('module3 中的 foo1 方法');
}

exports.foo2 = function(){
    console.log('module3 中的 foo2 方法');
}
```

（4）app.js：（将其他模块汇集到主模块）

```javascript
let module1 = require('./module1');  // ./ 指的是当前路径
let module2 = require('./module2');
let module3 = require('./module3');

module1.foo();
module2();
module3.foo1();
module3.foo2();
```

引入的路径解释：

- `./`是相对路径，指的是当前路径（app.js的当前路径是src）


到此，我们的主要代码就写完了。

但是，如果我们直接在index.html中，像下面这样写，是不行的：（因为浏览器不认识 require 关键字）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./js/src/app.js"></script>
</body>
</html>

```

为了能够让index.html引入app.js，我们需要输入如下命令：

打包处理js:

```
    browserify js/src/app.js -o js/dist/bundle.js
```

然后在index.html中引入打包后的文件：

```html
    <script type="text/javascript" src="js/dist/bundle.js"></script>
```




## others


### SeaJS 的介绍

SeaJS：一个基于CMD规范实现的模块化开发解决方案。

作者：Alibaba 玉伯。

官网：<http://seajs.org/>

GitHub：<https://github.com/seajs/seajs>

现在官网变成了：<https://seajs.github.io/seajs/docs/>

特性：

- 简单友好的模块定义规范。

- 自然直观的代码组织方式。

![](http://img.smyhvae.com/20180303_2107.png)

### RequireJS（AMD）、SeaJS（CDM）、CommonJS、ES6 的对比

1、RequireJS 和 AMD：

![](http://img.smyhvae.com/20180303_1653.png)

异步模块定义，特点是依赖前置。

2、SeaJS 和 CMD：


同步模块定义。

```javascript
  // 所有模块都通过 define 来定义
  define(funtion(require, exports, module) {

        //通过 require 引入依赖

        var $ require(`jquery`);

        var Spinning = require(`./spinning`);
  })
```

3、CommonJS：

![](http://img.smyhvae.com/20180303_1701.png)

以上三个都是 ES5里面的规范。

4、ES6：

ES6的特性：export/import

![](http://img.smyhvae.com/20180303_1704.png)
















