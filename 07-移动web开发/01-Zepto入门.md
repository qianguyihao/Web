


## Zepto 的介绍

### 什么是 Zepto

zepto是轻量级的JavaScript库，专门为移动端定制的框架。

与jquery有着类似的API，俗称：会jquery就会用zepto



### zepto的特点

- 针对移动端

- 轻量级，压缩版本只有8kb左右

- 响应，执行快

- 语法、API大部分同jquery一样，学习难度低，上手快。

- 目前API完善的框架中体积最小的一个


### 相关网址

- 官网：<http://zeptojs.com/>

- GitHub：<https://github.com/madrobby/zepto>


## Zepto 与 jQuery 的前世今生

### 相同点

- 都是优秀的js函数库

- 语法、API大部分都一样（zepto是按照jquery的思路来设计的）

- Zepto 相当于 jQuery 的子集

- 同jQuery一样，都是以`$`符号为核心函数。



### 不同点




## Zepto 的初体验

（1）Zepto 库的下载：

我们去官网下载 Zepto的开发版本`zepto.js`：

20180414_2210.png

官网里，还有这样一张图：

20180414_2215.png

上图的意思是：

- 最前面打钩的那五个api，已经包含在`zepto.js `文件里了；

- 后面没有打钩的那些api，如果需要用它们，必须单独下载响应的文件。

比如说，移动端的 touch 事件是很常见的，我们可以将`touch.js`这个文件下载，稍后用。



（2）代码演示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #btn {
            width: 200px;
            height: 200px;
            background: pink;
            margin: 10px auto;
        }
    </style>
</head>

<body>

    <div id="btn">我是 div</div>
    <script src="libs/zepto1.2.0.js"></script>
    <script src="libs/touch.js"></script>
    <script>
        $(function () {
            $('#btn').on('touchstart', function () {
                alert('hello world');
            });
        });

    </script>
</body>

</html>
```

上方代码实现的效果是，当手在div上滑动时，就会弹出 alert窗。可以看出，这里面代码的写法和 jQuery 是一致的。

注意，我们要将浏览器切换到手机模式，才能看到`touchstart`事件的效果；否则，在浏览器上点来点去，是没有反应的。

## Zepto 和 jQuery 相同的  api

> 意思是，jQuery 和 Zepto 有哪些共同点。


###  jQuery 的主要特性

下面来讲一下 jQuery 的主要特性（jQuery 的核心函数`$`、jQuery 对象），它们对 Zepto 来说，同样适用。

**1、jQuery 的核心函数`$`**:

作为函数使用（参数）：

-  function

-  html字符串

-  DOM code

-  选择器字符串

作为对象调用(方法)：

- $.ajax() $.get() $.post()

- $.isArray()      $.each()      $.isFunction()      $.trim()

**2、jQuery 对象**：

概念：jquery核心函数$()调用返回的对象就是jquery对象的数组（可能有只有一个）。

使用举例：

- addClass()

- removeClass()

- show()

- find()




