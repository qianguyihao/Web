

## ES6模块化的基本语法

### ES6模块化的说明


**依赖模块需要编译打包处理。**原因如下：

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


## ES6模块化的使用（举例）

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

```java
//暴露模块：采用分别暴露的方式

export function foo1() {
    console.log('我是 module1 中的 foo1');
}

export function foo2() {
    console.log('我是 module2 中的 foo2');
}

export let arr = [1, 2, 3, 4, 5];



```



（4）main.js：

ES6的 import 语法中，在引入时，要求用**对象解构赋值**的形式。而不是用 `import myModule from ...`这种形式。【重要】


### 4、编译转换

如果我们不进行转换，而是直接在 index.html 中加载 js/src/main.js，是会报错的：


接下来，我们就进行转换。

（1）利用  babel 将 ES6 转换为 ES5：


```
 babel src -d build      //build目录会自动生成
```

上方命令的意思是，将`src`目录下的所有ES6文件转化为ES5文件，并放在`build`目录下（`build`目录会被自动创建）。


转化成ES5之后，我们发现，如果直接在 index.html 中加载`build`目录下的ES5文件，也是会报错的，因为浏览器不认识`main.js`里的`require`关键字：


于是，我们还要进行一次转换。

（2）利用`Browserify`编译打包 `build`目录下的 ES5 文件：

```bash
browserify build/main.js -o dist/main.js     //dist目录需要手动创建
```

dist/main.js就是我们需要引入到 index.html 里的文件。

以后，我们每次修改完ES6的代码，就要执行上面的两个命令，重新生成新的js文件。






