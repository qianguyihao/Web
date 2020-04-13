
## 模块化开发的引入

### JS开发的弊端

JS 在使用时存在两大问题，而 Node.js 可以很好地避免这两个问题：

- 文件依赖。比如 a 文件依赖 b 文件，b 文件依赖 c 文件。而 Node.js 中的文件依赖，不需要人工维护和人为分析。

- 命名冲突。js 的各个文件是相互开放的，容易导致命名冲突。而 Node.js 是属于半封闭的状态，可以指定哪些内容是开放的，哪些内容是封闭的。

Node.js 在解决这两个问题时，用到的就是模块化开发。

### 软件开发中的模块化开发

一个功能就是一个模块，多个模块可以组成完整的应用，抽离一个模块不会影响其他功能的运行。

效果如下：

![](http://img.smyhvae.com/20200409_1934.png)

### Node.js 中的模块化开发

Node.js 规定，一个 JS 文件就是一个模块，模块内部定义的变量和函数默认情况下在外部无法访问。

模块内部可以使用 `exports` 对象进行成员导出， 使用 `require` 方法导入其他模块。效果如下：

![](http://img.smyhvae.com/20200409_1932.png)

## ES6模块化的基本语法

### ES6模块化的说明

**依赖模块需要编译打包处理**。原因如下：

- （1）有些浏览器不支持 ES6 的语法，写完 ES6 的代码后，需要通过`Babel`将 ES6 转化为 ES5。

- （2）生成了ES5之后，里面仍然有`require`语法，而浏览器并不认识`require`这个关键字。此时，可以用 `Browserify`编译打包 js，进行再次转换。

推荐学习链接：

- <http://es6.ruanyifeng.com/#docs/module>


### 基本语法：


**导出模块**：

```
	export
```


**引入模块**：

```
	import xxx from '路径'
```


## ES6模块化的使用举例（自定义模块）

### 1、初始化项目

（1）在工程文件中新建如下目录：


```
js
    | src
    	| module1.js
    	| module2.js
    	| module3.js
    	| main.js


index.html
```

（2）在工程的根目录下，新建文件`package.json`，内容如下：

```json
{
    "name": "es6-babel-browserify",
    "version": "1.0.0"
}
```

### 2、环境配置：安装babel 和 browserify等

（1）安装babel 和 browserify：

```bash
	npm install babel-cli -g

	npm install babel-preset-es2015 --save-dev

	npm install browserify -g
```


安装 babel 的详细解释，可以参考本人的另外一篇文章：[ES6的介绍和环境配置](https://github.com/smyhvae/Web/blob/master/10-ES6/03-ES6%E7%9A%84%E4%BB%8B%E7%BB%8D%E5%92%8C%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.md)

（2）新建.babelrc：

在根目录下新建文件`.babelrc`，输入如下内容：

```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```

### 3、编写代码


（1）module1.js：

```javascript
//暴露模块：采用分别暴露的方式

export function foo1() {
    console.log('我是 module1 中的 foo1');
}

export function foo2() {
    console.log('我是 module2 中的 foo2');
}

export let arr = [1, 2, 3, 4, 5];
```



（2）module2.js：

```javascript
//暴露模块：采用统一暴露的方式

function fn1() {
    console.log('我是 module2 中的 fn1');
}

function fn2() {
    console.log('我是 module2 中的 fn2');
}

//统一暴露
export { fn1, fn2 };
```


（3）module3.js：



```javascript
//暴露模块：采用默认暴露的方式。
//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据

//语法格式：export default value;
export default () => {
    console.log('我是 module3 中 default 方式暴露的函数');
};
```


这里，我们采取了一种新的暴露方式（默认暴露），在暴露时，加上了`default`这个关键字。代码里暴露了一个箭头函数，稍后，我们注意在main.js里是怎么引入module3.js的。

注意，我们只能写一次 default，也就是说，只能进行一次默认暴露。

（4）module4.js：（default方式暴露多个属性）

```javascript
//暴露模块：采用默认暴露的方式。
//默认暴露的方式可以暴露任意数据类型，暴露的是什么数据，接收到的就是什么数据

//语法格式：export default value;
export default {
    name: '我是 module4 中 default 方式暴露的属性 name',
    foo() {
        console.log('我是 module4 中 default 方式暴露的函数 foo');
    }
}
```

这里，我们依旧采取了默认暴露的方式，只能写一次 default。代码里暴露了一个对象（对象里存放了一个属性、一个方法）。稍后，我们注意在main.js里是怎么引入module4.js的。

如果我想暴露多个属性、多个对象怎呢？很简单，把你想要暴露的所有内容，都放在default里，包成一个对象。你看module4.js就是如此， 同时暴露了多个属性&方法。

（5）main.js：

这个是主模块。现在，我们来看一下，它如何引入上面的四个模块。


```javascript

//主模块。引入其他的模块

import { foo1, foo2 } from './module1'; //采用解构赋值的形式进行导入。注意，括号里的对象名，要和 module1 中的对象名一致。
import { fn1, fn2 } from './module2';   //采用解构赋值的形式进行导入。注意，括号里的对象名，要和 module2 中的对象名一致。
import myModule3 from './module3';   //module3 模块是采用 default 方式进行暴露的，myModule3 这个名字是我随便起的
import myModule4 from './module4';   //module4 模块是采用 default 方式进行暴露的，myModule4 这个名字是我随便起的

//调用module1、module2中的内容
foo1();
foo2();
fn1();
fn2();

//调用module3中的内容
myModule3();

//调用module4中的内容
console.log(myModule4.name);  //module4中的属性
myModule4.foo();              //module4中的方法
```

我们可以看出：（具体请看注释，非常重要）

- module1和module2是采用**常规暴露**的形式，在引入它们时，模块名要一致。而且，要求用**对象解构赋值**的形式，而不是用 `import myModule from ...`这种形式（否则会报错 undefined）。

- module2和module3是采用**默认暴露**的形式，在引入它们时，模块名随便起。

（6）index.html：

在这里引入main.js即可。

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
    <script src="dist/main.js"></script>
</body>

</html>

```


### 4、编译转换

如果我们不进行转换，而是直接在 index.html 中加载 js/src/main.js，是会报错的：


接下来，我们就进行转换。

（1）利用  babel 将 ES6 转换为 ES5：

```
babel src -d build      //build目录会自动生成
```

上方命令的意思是，将`src`目录下的所有ES6文件转化为ES5文件，并放在`build`目录下（`build`目录会被自动创建）。

转化成ES5之后，我们发现，如果直接在 index.html 中加载`build`目录下的ES5文件，也是会报错的，因为浏览器不认识`main.js`里的`require`关键字：

![](http://img.smyhvae.com/20180414_1410.png)


于是，我们还要进行一次转换。

（2）利用`Browserify`编译打包 `build`目录下的 ES5 文件：

```bash
browserify build/main.js -o dist/main.js     //dist目录需要手动创建
```

dist/main.js就是我们需要引入到 index.html 里的文件。

以后，我们每次修改完ES6的代码，就要执行上面的两个命令，重新生成新的js文件。


运行效果：

![](http://img.smyhvae.com/20180414_1615.png)


工程文件：

- [2018-04-13-ES6Demo.rar](https://download.csdn.net/download/smyhvae/10348940)


## ES6模块化的使用举例（引入第三方模块）

下载 jQuery 包：

```
npm install jquery@1      //下载jQuery 1.X 的版本里最新的
```

在main.js 中引入上面的 jQuery：

```
import $ from 'jQuery';
```


然后我们就可以通过`$`这个符号去写jQuery的代码了。







