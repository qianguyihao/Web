

## AMD的基本语法

### AMD的概念

**AMD**（Asynchronous Module Definition）：异步模块定义。AMD专门用于浏览器端，模块的加载是异步的。

[**AMD规范**](https://github.com/amdjs/amdjs-api)：是 **[RequireJS](http://requirejs.org/)** 在推广过程中对模块化定义的规范化产出。

RequireJS：一个基于AMD规范实现的模块化开发解决方案。


### 暴露模块的方式

**定义没有依赖的模块**：（参数只有一个 function）

```javascript
define(function () {

    return 模块

})
```


**定义有依赖的模块**：（参数有两个：模块名、function）

```javascript
//定义有依赖的模块：第一个参数为数组
define(['module1', 'module2'], function (m1, m2) {

    return 模块

})
```

代码解释：

- 第一个参数必须是数组，里面存放的是，需要依赖的其他的模块。

- 第二个参数是function，里面带了形参 m1 和 m2，分别代表了 module1 和 module2。这个形参的作用是，前面依赖的模块一旦声明了，就可以一一对应地注入到 function中去，从而在 function 内部使用依赖的模块。这种方式称之为**显式声明依赖注入**。

### 引入模块的方式

在主模块中引入其他的模块：


```javascript
//在主模块中引入其他的模块
require(['module1', 'module2'], function (m1, m2) {

    使用m1 / m2

})
```

### RequireJS：是AMD的实现

- <http://www.requirejs.org/>

- <http://www.ruanyifeng.com/blog/2012/11/require_js.html>

## RequireJS的使用举例（自定义模块）

### 1、创建项目结构

在工程文件中新建如下目录：


  ```
js
    | libs

    | modules
      	| alerter.js
      	| dataService.js
    | main.js

index.html
  ```

所有的代码写完之后，项目结构如下：

![](http://img.smyhvae.com/20180411_1331.png)


### 2、下载require.js，并导入

- 官网: <http://requirejs.org/docs/download.html>

- GitHub：<https://github.com/requirejs/requirejs>

在官网下载`require.js`文件：

![](http://img.smyhvae.com/20180411_1127.png)

然后将`require.js`文件拷贝到项目的`js/libs/`目录中。

这样的话，就导入成功了。

### 3、自定义模块

（1）dataService.js：

```javascript
//定义没有依赖的模块
define(function () {
    let name = '我是 dataService.js中的内容';
    function getName() {
        return name;
    }

    //暴露模块
    return { getName };
});
```


这模块没有依赖。

（2）alerter.js：

```javascript
//定义有依赖的模块
define(['myDataService'], function (dataService) {
    let msg = '我是 aleter.js中的内容';
    function showMsg() {
        console.log(dataService.getName());  //调用了 myDataService 模块中的内容
        console.log(msg);
    }

    //暴露模块
    return { showMsg };

});
```

这个模块，依赖了`myDataService`这个模块，模块名是我自己起的。稍后，我们会在main.js中做映射，将`myDataService`这个名字和`dataService.js`文件关联起来。

（3）main.js：

> 这个是主模块。

```javascript
requirejs.config({
    //baseUrl: 'js/',     //基本路径
    paths: {    //配置路径
        myDataService: './modules/dataService',
        myAlerter: './modules/alerter'
    }
});

requirejs(['myAlerter'], function (alerter) {
    alerter.showMsg();
})();
```

这个模块，依赖了`myAlerter`这个模块，模块名是我自己起的。并且，我们在文件的上方做了映射，将`myAlerter`这个名字和`alerter.js`文件关联了起来。


我们来讲一下最上方的几行代码（即`requirejs.config`里的内容）的意思：

- 我们可以看到，文件（3）依赖了文件（2），文件（2）依赖了文件（1）。

- `paths`里做的就是映射：将键`myDataService`和文件`dataService.js`进行关联，将键`myAlerter`和文件`alerter.js`进行关联。

另外，再讲一下注释里的`baseUrl`的用法：如果没有这个注释，那么`paths`里的路径，是从**当前这个文件**（main.js）的角度出发的；如果加了一行`baseUrl`，表明它是 paths 里所有路径的最开头的部分，`baseUrl`的路径是从**项目的根目录**的角度出发的。

（4）index.html：

这个是入口文件。


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
    <!-- 先通过 src 引入 require.js 文件，然后通过 data-main 引入主模块（main.js） -->
    <script data-main="js/main.js" src="js/libs/require.js"></script>
</body>
</html>
```

注意，上面的代码中，我们直接通过`src`属性引入`requre.js `文件，一旦这个文件发挥作用了，会去找`data-main`属性里的指向，它正好指向的是主模块。

有了上面这种引入的方式，我们就不用再老土地引入多个`<script>`标签了。


运行 index.html，打印结果如下：

![](http://img.smyhvae.com/20180411_1740.png)

项目源码：[2018-04-11-RequireJSDemo](https://download.csdn.net/download/smyhvae/10341963)




