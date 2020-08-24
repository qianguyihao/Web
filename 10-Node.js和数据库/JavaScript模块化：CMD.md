


## CMD的基本语法

### CMD的概念

**CMD**（Common Module Definition）：同步模块定义。CMD专门用于浏览器端，模块的加载是同步的。模块在使用时才会加载执行。

[**CMD规范**]()：是 **[SeaJS](http://seajs.org/)** 在推广过程中对模块化定义的规范化产出。


### SeaJS

SeaJS：一个基于CMD规范实现的模块化开发解决方案。

官网链接：

- <http://seajs.org/>

- <https://github.com/seajs/seajs>

推荐学习链接：

- <http://www.zhangxinxu.com/sp/seajs/>

- <http://es6.ruanyifeng.com/#docs/module>


### 暴露模块的方式

> 不管是定义没有依赖的模块，还是定义有依赖的模块，参数只有一个，那就是 function。

**定义没有依赖的模块**：

```javascript
define(function (require, exports, module) {

    exports.xxx = value

    //暴露模块
    module.exports = value

})
```

参数只有一个，那就是 function。function 里有三个参数：


**定义有依赖的模块**：

```javascript
//定义有依赖的模块
define(function (require, exports, module) {

    //引入依赖的模块(同步的方式)
    var module2 = require('./module2')

    //引入依赖的模块(异步的方式)
    require.async('./module3', function (m3) {

    })

    //暴露模块
    exports.xxx = value
})

```

上面的代码可以看到，在引入依赖的模块时，有两种引入的方式：同步和异步。


### 引入模块的方式

```javascript
define(function (require) {

    var m1 = require('./module1')
    var m4 = require('./module4')

    m1.show()
    m4.show()
})
```




## SeaJS的使用举例（自定义模块）



### 1、创建项目结构


在工程文件中新建如下目录：


```
js
    | libs
      	| sea.js
    | modules
      	| module1.js
      	| module2.js
      	| module3.js
      	| module4.js
      	| main.js     //主模块
index.html
```


### 2、下载SeaJS，并导入

- 官网: <https://seajs.github.io/seajs/docs/#downloads>

- GitHub：<https://github.com/seajs/seajs>

在官网下载`sea.js`文件，然后将其拷贝到项目的`js/libs/`目录中。这样的话，就导入成功了。


### 3、自定义模块


（1）module1.js：



```javascript
//定义没有依赖的模块
define(function (require, exports, module) {
    let name = '我是 module1 中的内容';
    function foo1() {
        return name;
    }

    //暴露模块
    module.exports = { foo1 };  //暴露出去的是 foo1这个函数对象
});
```


（2）module2.js：

```javascript
//定义没有依赖的模块
define(function (require, exports, module) {
    let name = '我是 module2 中的内容';
    function foo2() {
        console.log(name);
    }

    //暴露模块
    module.exports = foo2;  //可以理解成：exports就是 foo2 这个函数
});
```

（3）module3.js:

```javascript
//定义没有依赖的模块
define(function (require,exports,module) {
    let data = '我是 module3 中的内容';
    function foo3() {
        console.log(data);
    }

    //暴露模块
    exports.module3 = { foo3 };  //可以理解成：给 export 对象暴露了 module3 这个属性，这个属性里有foo3 这个函数。
});
```

（4）module4.js：

这个模块依赖了 module2 和 module3。

```javascript
//定义有依赖的模块
define(function (require, exports, module) {
    let name = '我是 module4 中的内容';

    //同步的方式引入 module2
    let myModule2 = require('./module2');
    myModule2();

    //异步的方式引入 module3
    require.async('./module3', function (myModule3) {
        myModule3.module3.foo3();
    });

    function foo4() {
        console.log(name);
    }

    exports.foo4 = foo4;
})
```

（5）main.js：

- `module1.js`没有依赖其他的模块，它是独立的

- `module4.js`依赖了`module2`和`module3`。

因此，让`main.js`依赖`module1.js`和`module4`就够了。

main.js：

```javascript
//主模块（主模块不需要导出）
define(function (require) {

    //导入 module1
    let module1 = require('./module1');
    console.log(module1.foo1());  //执行foo1函数后，将返回值打印

    //导入 module4
    let module4 = require('./module4');
    module4.foo4();

});

```


（6）index.html：


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
    <!-- 引入 sea.js库 -->
    <script src="js/libs/sea.js"></script>
    <script>
        // 引入主模块
        seajs.use('./js/modules/main.js');
    </script>
</body>

</html>

```

打印结果：

![](http://img.smyhvae.com/20180412_1955.png)






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
  define(function(require, exports, module) {

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


