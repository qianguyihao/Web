

> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8414627.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。



## jQuery 的介绍

### 引入 jQuery 的原因

在用 js 写代码时，会遇到一些问题：

- window.onload 事件有事件覆盖的问题，因此只能写一个事件。

- 代码容错性差。

- 浏览器兼容性问题。

- 书写很繁琐，代码量多。

- 代码很乱，各个页面到处都是。

- 动画效果很难实现。

如下图所示：

![](http://img.smyhvae.com/20180204_1710.png)

jQuery的出现，可以解决以上问题。

### 什么是 jQuery

jQuery 是 js 的一个库，封装了我们开发过程中常用的一些功能，方便我们调用，提高开发效率。

js库是把我们常用的功能放到一个单独的文件中，我们用的时候，直接引用到页面里即可。

以下是jQuery的相关信息：

- 官网：<http://jquery.com/>

- 官网API文档：<http://api.jquery.com/>

- 中文汉化API文档：<http://www.css88.com/jqapi-1.9/>

### 学习jQuery，主要是学什么

初期，主要学习如何使用jQuery操作DOM，其实就是学习jQuery封装好的那些API。

这些API的共同特点是：几乎全都是方法。所以，在使用jQuery的API时，都是方法调用，也就是说要加小括号()，小括号里面是相应的参数，参数不同，功能不同。

### jQuery初体验

现在用原生 js 来写下面这一段代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            height: 100px;
            background-color: pink;
            margin: 10px;
            display: none;
        }
    </style>

    <script>
        //原生js
        window.onload = function () {
            var btn = document.getElementsByTagName("button")[0];
            var divArr = document.getElementsByTagName("div");

            btn.onclick = function () {
                for (var i = 0; i < divArr.length; i++) {
                    divArr[i].style.display = "block";
                    divArr[i].innerHTML = "生命壹号";
                }
            }
        }
    </script>
</head>
<body>

<button>显示五个div盒子和设置内容</button>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>

</body>
</html>
```

如果用 jQuery 来写，保持其他的代码不变，`<script>`部分的代码修改为：（需要提前引入 ）

```html
    <script src="jquery-1.11.1.js"></script>
    <script>

        //jquery版
        $(document).ready(function () {
            //获取元素
            var jQbtn = $("button");//根据标签名获取元素
            var jQdiv = $("div");//根据标签名获取元素
            //绑定事件
            jQbtn.click(function () {
                jQdiv.show(1000);//显示盒子。
                jQdiv.html("tomorrow！");//设置内容
                //上面的两行可以写成链式编程：jQdiv.show(3000).html(1111);

            });//事件是通过方法绑定的。

        });
    </script>
```

### jQuery 的两大特点

（1）**链式编程**：比如`.show()`和`.html()`可以连写成`.show().html()`。


链式编程原理：return this。

通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。


（2）**隐式迭代**：隐式 对应的是 显式。隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。

如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。






## jQuery 的使用

### 使用 jQuery 的基本步骤

（1）引包

（2）入口函数

（3）功能实现代码（事件处理）

如下图所示：

![](http://img.smyhvae.com/20180204_1940.png)

主要，导包的代码一定要放在js代码的最上面。

### jQuery 的版本

jQuery 有两个大版本：

- 1.x版本：最新版为 v1.11.3。

- 2.x版本：最新版为 v2.1.4（不再支持IE6、7、8）。

- 3.x版本。


PS：开发版本一般用1.10以上。

我们以 v1.11.1版本为例，下载下来后发现，里面有两个文件：

![](http://img.smyhvae.com/20180204_1950.png)

它们的区别是：

- 第一个是未压缩版，第二个是压缩版。

- 平时开发过程中，可以使用任意一个版本；但是，项目上线的时候，推荐使用压缩版。


## jQuery 的入口函数和 `$` 符号


### 入口函数（重要）

原生 js 的入口函数指的是：`window.onload = function() {};` 如下：

```javascript
        //原生 js 的入口函数。页面上所有内容加载完毕，才执行。
        //不仅要等文本加载完毕，而且要等图片也要加载完毕，才执行函数。
       window.onload = function () {
           alert(1);
       }
```


而 jQuery的入口函数，有以下几种写法：

写法一：


```javascript
       //1.文档加载完毕，图片不加载的时候，就可以执行这个函数。
       $(document).ready(function () {
           alert(1);
       })
```

写法二：（写法一的简洁版）

```javascript
       //2.文档加载完毕，图片不加载的时候，就可以执行这个函数。
       $(function () {
           alert(1);
       });
```

写法三：

```javascript
       //3.文档加载完毕，图片也加载完毕的时候，在执行这个函数。
       $(window).ready(function () {
           alert(1);
       })
```

**jQuery入口函数与js入口函数的区别**：

区别一：书写个数不同：

- Js 的入口函数只能出现一次，出现多次会存在事件覆盖的问题。

- jQuery 的入口函数，可以出现任意多次，并不存在事件覆盖问题。


区别二：执行时机不同：

- Js的入口函数是在**所有的文件资源加载**完成后，才执行。这些**文件资源**包括：页面文档、外部的js文件、外部的css文件、图片等。

- jQuery的入口函数，是在文档加载完成后，就执行。文档加载完成指的是：DOM树加载完成后，就可以操作DOM了，不用等到所有的**外部资源**都加载完成。

文档加载的顺序：从上往下，边解析边执行。

### jQuery的`$`符号

jQuery 使用 `$` 符号原因：书写简洁、相对于其他字符与众不同、容易被记住。

jQuery占用了我们两个变量：`$` 和 jQuery。当我们在代码中打印它们俩的时候：


```html
    <script src="jquery-1.11.1.js"></script>
    <script>

        console.log($);
        console.log(jQuery);
        console.log($===jQuery);


    </script>
```

打印结果如下：

![](http://img.smyhvae.com/20180204_2014.png)

从打印结果可以看出，$ 代表的就是 jQuery。

那怎么理解jQuery里面的 `$` 符号呢？

**`$` 实际上表示的是一个函数名** 如下：


```html
	$(); // 调用上面我们自定义的函数$

	$(document）.ready(function(){}); // 调用入口函数

	$(function(){}); // 调用入口函数

	$(“#btnShow”) // 获取id属性为btnShow的元素

	$(“div”) // 获取所有的div标签元素

```

如上方所示，jQuery 里面的 `$` 函数，根据传入参数的不同，进行不同的调用，实现不同的功能。返回的是jQuery对象。

jQuery这个js库，除了` $` 之外，还提供了另外一个函数：jQuery。jQuery函数跟 `$` 函数的关系：`jQuery === $`。

##  js中的DOM对象 和 jQuery对象 比较（重点，难点）

### 二者的区别

通过 jQuery 获取的元素是一个**数组**，数组中包含着原生JS中的DOM对象。举例：

针对下面这样一个div结构：

```html
<div></div>
<div class="box"></div>
<div id="box"></div>
<div class="box"></div>
<div></div>
```

通过原生 js 获取这些元素节点的方式是：

```javascript
    var myBox = document.getElementById("box");           //通过 id 获取单个元素
    var boxArr = document.getElementsByClassName("box");  //通过 class 获取的是数组
    var divArr = document.getElementsByTagName("div");    //通过标签获取的是数组
```

通过 jQuery 获取这些元素节点的方式是：（获取的都是数组）

```javascript
    //获取的是数组，里面包含着原生 JS 中的DOM对象。
    var jqBox1 = $("#box");
    var jqBox2 = $(".box");
    var jqBox3 = $("div");
```

我们打印出来看看：

![](http://img.smyhvae.com/20180204_2045.png)

上图显示，由于JQuery 自带了 css()方法，我们还可以直接在代码中给 div 设置 css 属性。

**总结**：jQuery 就是把 DOM 对象重新包装了一下，让其具有了 jQuery 方法。

### 二者的相互转换

**1、 DOM 对象 转为 jQuery对象**：

```javascript
	$(js对象);
```

举例：（拿上一段的代码举例）

```javascript
	//转换。
	jqBox1 = $(myBox);
	jqBox2 = $(boxArr);
	jqBox3 = $(divArr);
```

DOM 对象转换成了 jquery 对象之后，上面的功能可以直接调用。

**2、jQuery对象 转为 DOM 对象**：

```javascript
	jquery对象[index];      //方式1（推荐）

	jquery对象.get(index);  //方式2
```

jQuery对象转换成了 DOM 对象之后，可以直接调用 DOM 提供的一些功能。如：

```javascript
    //jquery对象转换成 DOM 对象之后
    jqBox3[0].style.backgroundColor = "black";
    jqBox3.get(4).style.backgroundColor = "pink";
```

**总结**：如果想要用哪种方式设置属性或方法，必须转换成该类型。

### 举例：隔行变色

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        jQuery(function () {
            var jqLi = $("li");
            for (var i = 0; i < jqLi.length; i++) {
                if (i % 2 === 0) {
                    //jquery对象，转换成了js对象
                    jqLi[i].style.backgroundColor = "pink";
                } else {
                    jqLi[i].style.backgroundColor = "yellow";
                }
            }
        });
    </script>
</head>
<body>
<ul>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
</ul>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180204_2111.png)

## jQuery 选择器

我们以前在CSS中学习的选择器有：

![](http://img.smyhvae.com/20180204_2122.png)

今天来学习一下jQuery 选择器。

jQuery选择器是jQuery强大的体现，它提供了一组方法，让我们更加方便的获取到页面中的元素。

### 1、jQuery 的基本选择器

![](http://img.smyhvae.com/20180204_2125.png)

解释如下：

![](http://img.smyhvae.com/20180204_2126.png)

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        jQuery(document).ready(function () {

            //三种方式获取jquery对象
            var jqBox1 = $("#box");
            var jqBox2 = $(".box");
            var jqBox3 = $("div");

            //操作标签选择器
            jqBox3.css("width", 100);
            jqBox3.css("height", 100);
            jqBox3.css("margin", 10);
            jqBox3.css("background", "pink");

            //操作类选择器(隐式迭代，不用一个一个设置)
            jqBox2.css("background", "red");

            //操作id选择器
            jqBox1.css("background", "yellow");

        });
    </script>
</head>
<body>

<div></div>
<div class="box"></div>
<div id="box"></div>
<div class="box"></div>
<div></div>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180204_2133.png)

### 2、层级选择器

![](http://img.smyhvae.com/20180204_2138.png)

解释如下：

![](http://img.smyhvae.com/20180204_2139.png)

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //获取ul中的li设置为粉色
            //后代：儿孙重孙曾孙玄孙....
            var jqLi = $("ul li");
            jqLi.css("margin", 5);
            jqLi.css("background", "pink");

            //子代：亲儿子
            var jqOtherLi = $("ul>li");
            jqOtherLi.css("background", "red");
        });
    </script>
</head>
<body>
<ul>
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <ol>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
    </ol>
</ul>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180204_2145.png)

### 3、基本过滤选择器

![](http://img.smyhvae.com/20180204_2150.png)

解释：

![](http://img.smyhvae.com/20180204_2151.png)

举例：

```html
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(document).ready(function () {

            // :odd
            $("li:odd").css("background", "red");

            // :even
            $("li:even").css("background", "green");

            // :eq(index)
            $("ul li:eq(3)").css("font-size", "30px");  //设置第四个li的字体

            // :lt(index)
            $("li:lt(6)").css("font-size", "30px");

            // :gt(index)
            $(".ulList1 li:gt(7)").css("font-size", "40px");

            // :first
            $(".ulList li:first").css("font-size", "40px");

            // :last
            $("li:last").css("font-size", "40px");
        });
    </script>
```

### 4、属性选择器

![](http://img.smyhvae.com/20180204_2155.png)

### 5、筛选选择器

![](http://img.smyhvae.com/20180204_2200.png)

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            var jqul = $("ul");

            //find(selector); 从jquery对象的后代中查找
            //必须制定参数，如果不指定获取不到元素。length === 0
            jqul.find("li").css("background", "pink");
            console.log(jqul.find());

            //chidlren(selector); 从jquery对象的子代中查找
            //不写参数代表获取所有子元素。
            jqul.children("li").css("background", "green");

            //eq(索引值); 从jquery对象的子代中查找该索引值的元素
            //要写该数组中的第几个。
            jqul.children().eq(0).css("background", "red");

            //next(); 该元素的下一个兄弟元素
            jqul.children().eq(0).next().css("background", "yellow");

            //siblings(selector); 该元素的所有兄弟元素
            jqul.children().eq(0).next().siblings().css("border", "1px solid blue");

            //parent(); 该元素的父元素（和定位没有关系）
            console.log(jqul.children().eq(0).parent());
        });
    </script>
</head>
<body>

<ul>
    <li>生命壹号，永不止步</li>
    <li class="box">生命壹号，永不止步</li>
    <span>生命壹号，永不止步</span>
    <li class="box">生命壹号，永不止步</li>
    <i>生命壹号，永不止步</i>
    <li>生命壹号，永不止步</li>
    <a id="box" href="#">生命壹号，永不止步</a>
    <ol>
        <li>我是ol中的li</li>
        <li>我是ol中的li</li>
        <li>我是ol中的li</li>
        <li>我是ol中的li</li>
    </ol>
</ul>

</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180204_2203.png)


## 举例

### 举例1：鼠标悬停时，弹出下拉菜单【重要】

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-color: pink;
        }

        .wrap li {
            background-color: yellowgreen;
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        $(document).ready(function () {
            //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
            var jqli = $(".wrap>ul>li");

            //绑定事件
            jqli.mouseenter(function () {
                //这个位置用到了this.
                // console.log(this);  //打印结果是js中的dom对象。注意：jquery对象绑定的事件中，this指js中的dom对象。【重要】

                //让this中的ul显示出来。
//                原生 js 的做法是：this.children[1].style.display = "block";
                //把js的dom对象包装为jquery对象，然后用jquery方法操作
                $(this).children("ul").show();
            });

            //绑定事件：鼠标移开时，隐藏下拉菜单
            jqli.mouseleave(function () {
                $(this).children("ul").hide();
            });
        });
    </script>

</head>
<body>
<div class="wrap">
    <ul>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
```


上方代码中，我们可以看到，用 jQuery来操作，是非常方便的。

实现效果如下：


![](http://img.smyhvae.com/20180205_1030.gif)


**this的用法：**

上方代码中，核心的一行代码是：

```javascript
	$(this).children("ul").show();

	$(this).children("ul").hide();
```

如果我把这行代码中的this直接写成 DOM对象：

```javascript
	jqli.children("ul").show();

	jqli.children("ul").hide();
```

产生的结果是：（不是我们期望的结果）


![](http://img.smyhvae.com/20180205_1050.gif)


两张图的对比，可以看出this的作用：谁正在调用函数，this就指的是谁。

### 举例2：鼠标悬停时变色

完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {

            //需求；隔行变色；鼠标悬停时，还要变色。
            var jqli1 = $("li:odd");
            var jqli2 = $("li:even");
            jqli1.css("background", "#cccccc");
            jqli2.css("background", "white");

            //鼠标悬停时变色
            var color = "";
            $("li").mouseenter(function () {
                color = $(this).css("background");  //先把之前的颜色保存下来，鼠标离开时还原
                $(this).css("background", "green");
            });
            //鼠标离开时，恢复为原来的颜色
            $("li").mouseleave(function () {
                $(this).css("background", color);
            });
        });
    </script>
</head>
<body>

<ul>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
</ul>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180205_1100.gif)

### 举例3：突出显示

要求：鼠标悬停时，突出显示这个li，让其他的li都半透明。

用 jQuery的选择起来实现，会发现非常方便。

完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        body {
            background: #000;
        }

        .wrap {
            margin: 100px auto 0;
            width: 630px;
            height: 394px;
            padding: 10px 0 0 10px;
            background: #000;
            overflow: hidden;
            border: 1px solid #fff;
        }

        .wrap li {
            float: left;
            margin: 0 10px 10px 0;

        }

        .wrap img {
            display: block;
            border: 0;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(window).ready(function () {
            //需求：鼠标放入li中，其他的li半透明，当前盒子的opacity值为1
            $(".wrap").find("li").mouseenter(function () {
                //链式编程
                $(this).css("opacity", 1).siblings("li").css("opacity", 0.4);
            });

            //离开wrap的时候所有的li的全部opacity值为1；
            $(".wrap").mouseleave(function () {
                $(this).children().children("li").css("opacity", 1);
//                $(".wrap li").css("opacity",1);
            });
        });
    </script>
</head>
<body>
<div class="wrap">
    <ul>
        <li><a href="#"><img src="images/01.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/02.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/03.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/04.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/05.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/06.jpg" alt=""/></a></li>
    </ul>
</div>
</body>
</html>
```


实现的效果：

![](http://img.smyhvae.com/20180205_1118_2.gif)

注意这里的css布局里，每一个图片都用一个li来存放。设置li的父亲的宽度之后，然后将li设置为浮动，即可自适应地排列成两排。

工程文件：

- [2018-02-05-突出显示.rar]()


### 举例4：手风琴效果

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {padding: 0;margin: 0;}
        ul { list-style-type: none;}

        .parentWrap {
            width: 200px;
            text-align:center;

        }

        .menuGroup {
            border:1px solid #999;
            background-color:#e0ecff;
        }

        .groupTitle {
            display:block;
            height:20px;
            line-height:20px;
            font-size: 16px;
            border-bottom:1px solid #ccc;
            cursor:pointer;
        }

        .menuGroup > div {
            height: 200px;
            background-color:#fff;
            display:none;
        }

    </style>
    <script src="jquery-1.11.1.min.js"></script>
    <script>
        $(function () {
            //需求：鼠标点击span，让他下面的div显示出来。让其他的div隐藏。
            $(".parentWrap span").click(function () {
//                $(this).next().show();
//                //让其他的隐藏
//                //点击的span的父亲li，的所有的兄弟元素li，的孩子元素div全部隐藏。
//                $(this).parent("li").siblings("li").children("div").hide();
                //连式编程
                $(this).next().show().parent("li").siblings("li").find("div").hide();
            });
        })
    </script>
</head>
<body>
<ul class="parentWrap">
    <li class="menuGroup">
        <span class="groupTitle">标题1</span>
        <div>我是弹出来的div1</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题2</span>
        <div>我是弹出来的div2</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题3</span>
        <div>我是弹出来的div3</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题4</span>
        <div>我是弹出来的div4</div>
    </li>
</ul>
</body>
</html>
```


效果：

![](http://img.smyhvae.com/20180205_1120.gif)

注意这里的 选择器的用法：parent、next

### 举例5：淘宝精品服饰广告

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            font-size: 12px;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        .wrapper {
            width: 298px;
            height: 248px;
            margin: 100px auto 0;
            border: 1px solid pink;
            overflow: hidden;
        }

        #left, #center, #right {
            float: left;
        }

        #left li, #right li {
            background: url(images/lili.jpg) repeat-x;
        }

        #left li a, #right li a {
            display: block;
            width: 48px;
            height: 27px;
            border-bottom: 1px solid pink;
            line-height: 27px;
            text-align: center;
            color: black;
        }

        #left li a:hover, #right li a:hover {
            background-image: url(images/abg.gif);
        }

        #center {
            border-left: 1px solid pink;
            border-right: 1px solid pink;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            //需求：鼠标放入两侧的li中，让中间的ul中对应索引值的li显示出来，其他的隐藏。（右侧的li要+9）
            //左侧先绑。获取绑mouseenter
            $("#left li").mouseenter(function () {
                //显示对应索引值的中间的li
                //alert($(this).index());  获取索引值
                $("#center li").eq($(this).index()).show().siblings("li").hide();
            });

            //右侧
            $("#right li").mouseenter(function () {
                //显示对应索引值的中间的li
                //alert($(this).index());  获取索引值
                $("#center li:eq(" + ($(this).index() + 9) + ")").show().siblings("li").hide();
            });
        });
    </script>
</head>
<body>
<div class="wrapper">

    <ul id="left">
        <li><a href="#">女靴</a></li>
        <li><a href="#">雪地靴</a></li>
        <li><a href="#">冬裙</a></li>
        <li><a href="#">呢大衣</a></li>
        <li><a href="#">毛衣</a></li>
        <li><a href="#">棉服</a></li>
        <li><a href="#">女裤</a></li>
        <li><a href="#">羽绒服</a></li>
        <li><a href="#">牛仔裤</a></li>
    </ul>
    <ul id="center">
        <li><a href="#"><img src="images/女靴.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/雪地靴.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/冬裙.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/呢大衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/毛衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/棉服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/女裤.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/羽绒服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/牛仔裤.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/女包.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男包.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/登山鞋.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/皮带.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/围巾.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/皮衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男毛衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男棉服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男靴.jpg" width="200" height="250"/></a></li>
    </ul>
    <ul id="right">
        <li><a href="#">女包</a></li>
        <li><a href="#">男包</a></li>
        <li><a href="#">登山鞋</a></li>
        <li><a href="#">皮带</a></li>
        <li><a href="#">围巾</a></li>
        <li><a href="#">皮衣</a></li>
        <li><a href="#">男毛衣</a></li>
        <li><a href="#">男棉服</a></li>
        <li><a href="#">男靴</a></li>
    </ul>
</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180205_1135.gif)

工程文件：

- [2018-02-05-淘宝精品服饰广告.rar]()






## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
