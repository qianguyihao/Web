

## 缓动动画

### 三个函数

缓慢动画里，我们要用到三个函数，这里先列出来：

- Math.ceil()         向上取整

- Math.floor()        向下取整

- Math.round();   四舍五入


### 缓动动画的原理

缓动动画的原理就是：在移动的过程中，步长越来越小。

设置步长为**：目标位置和盒子当前位置的十分之一**。用公式表达，即：

```
	盒子位置 = 盒子本身位置 + (目标位置 - 盒子本身位置)/ 10；
```

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            position: absolute;
        }
    </style>
</head>
<body>
<button>运动到left = 400px</button>
<div></div>

<script>

    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];

    btn.onclick = function () {
        setInterval(function () {
            //动画原理：盒子未来的位置 = 盒子当前的位置+步长
            div.style.left = div.offsetLeft + (400 - div.offsetLeft) / 10 + "px";
        }, 30);
    }

</script>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180202_2046.gif)


### 缓慢动画的封装（解决四舍五入的问题）

我们发现一个问题，上图中的盒子最终并没有到达400px的位置，而是只到了396.04px就停住了：

![](http://img.smyhvae.com/20180202_2140.png)

原因是：JS在取整的运算时，进行了四舍五入。

我们把打印396.04px这个left值打印出来看看：

![](http://img.smyhvae.com/20180202_2150.png)

我么发现，通过`div.style.left`获取的值是精确的，通过`div.offsetLeft`获取的left值会进行四舍五入。

此时，我们就要用到取整的函数了。

通过对缓动动画进行封装，完整版的代码实现如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            position: absolute;
            left: 0;
        }
    </style>
</head>
<body>
<button>运动到200</button>
<button>运动到400</button>
<div></div>

<script>

    var btn = document.getElementsByTagName("button");
    var div = document.getElementsByTagName("div")[0];

    btn[0].onclick = function () {
        animate(div, 200);
    }

    btn[1].onclick = function () {
        animate(div, 400);
    }

    //缓动动画封装
    function animate(ele, target) {
        //要用定时器，先清定时器
        //一个萝卜一个坑儿，一个元素对应一个定时器
        clearInterval(ele.timer);
        //定义定时器
        ele.timer = setInterval(function () {
            //获取步长
            //步长应该是越来越小的，缓动的算法。
            var step = (target - ele.offsetLeft) / 10;
            //对步长进行二次加工(大于0向上取整,小于0向下取整)
            //达到的效果是：最后10像素的时候都是1像素1像素的向目标位置移动，就能够到达指定位置。
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //动画原理： 目标位置 = 当前位置 + 步长
            ele.style.left = ele.offsetLeft + step + "px";
            console.log(step);
            //检测缓动动画有没有停止
            console.log("smyhvae");
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                //处理小数赋值
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 30);
    }

</script>
</body>
</html>
```


实现效果：

![](http://img.smyhvae.com/20180202_2239.gif)


## scroll 家族的组成

当我们用鼠标滚轮，滚动网页的时候，会触发window.onscroll()方法。效果如下：（注意看控制台的打印结果）


![](http://img.smyhvae.com/20180202_2258.gif)

### 1、ScrollWidth 和 scrollHeight

获取盒子的宽高。调用者为节点元素。不包括 border和margin。如下：

- scrollWidth = width + padding;

- scrollHeight = height + padding;

scrollHeight有一个特点：如果文字超出了盒子，高度为内容的高（包括超出的内容）；不超出，则是盒子本身高度。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            padding: 10px;
            margin: 3px;
            border: 8px solid red;
        }
    </style>
</head>
<body>

<div class="box">
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
</div>
<script>

    var div = document.getElementsByTagName("div")[0];

    //scrollHeight有一个特点：如果文字超出了盒子，高度为内容的高（包括超出的内容）；不超出，则是盒子本身高度。
    //IE8以下（不包括IE8），为盒子本身内容的多少。
    console.log(div.scrollWidth);
    console.log(div.scrollHeight);

</script>
</body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20180203_1235.png)

### 2、scrollTop 和 scrollLeft

网页被卷去的头部和左边的部分。

比如说，一个网页往上滚动的时候，上面的部分自然被浏览器遮挡了，遮挡的高度就是scrollTop。

scrollTop 这个属性的写法要注意兼容性，如下。

（1）如果文档没有 DTD 声明，写法为：

```javascript
    document.body.scrollTop
```

在没有 DTD 声明的情况下，如果不是这种写法，chrome浏览器认不出来。

（2）如果文档有 DTD 声明，写法为：

```javascript
   document.documentElement.scrollTop
```

在有 DTD 声明的情况下，如果不是这种写法，IE678认不出来。

综合上面这两个，就诞生了一种兼容性的写法：

```javascript
    document.body.scrollTop || document.documentElement.scrollTop //方式一

    document.body.scrollTop + document.documentElement.scrollTop  //方式二
```

另外还有一种兼容性的写法：`window.pageYOffset` 和 `window.pageXOffset`。这种写法无视DTD的声明。这种写法支持的浏览器版本是：火狐/谷歌/ie9+。

综合上面的几种写法，为了兼容，不管有没有DTD，**最终版的兼容性写法：**

```javascript
    window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
```

### 判断是否已经 DTD声明

方法如下：

```javascript
    document.compatMode === "CSS1Compat"   // 已声明
    document.compatMode === "BackCompat"   // 未声明
```

### 将 scrollTop 和 scrollLeft封装为 json


将 scrollTop 和 scrollLeft封装为一个方法，名叫scroll()，返回值为 json。json里的键为 top 和 left。以后就直接调用json.top 和json.left就好。

代码实现：

```html
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            height: 5000px;
            width: 5000px;
        }
    </style>
</head>
<body>

<script>

    //需求：封装一个兼容的scroll().返回值是json，用scroll().top获取scrollTop，用scroll().left获取scrollLeft

    window.onscroll = function () {
//        var json = scroll();
//        json.top;
        console.log(scroll().top);
        console.log(scroll().left);
    }

    //函数封装（简单封装，实际工作使用）
    function scroll() {
        return { //此函数的返回值是json
            "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        }
    }
</script>
</body>
</html>
```

上方代码中，函数定义的那部分就是要封装的代码。另外还有一种较为复杂的封装方式：

```javascript
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
```

## 获取 html 文档的方法

获取title、body、head、html标签的方法如下：

- `document.title` 文档标题；

- `document.head`  文档的头标签

- `document.body`  文档的body标签；

- `document.documentElement`  （这个很重要）。

`document.documentElement`表示文档的html标签。也就是说，基本结构当中的 `html 标签`而是通过`document.documentElement`访问的，并不是通过 document.html 去访问的。


## scrollTop 举例：固定导航栏


完整版代码实现：

（1）index.html：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0
        }

        img {
            vertical-align: top;
        }

        .main {
            margin: 0 auto;
            width: 1000px;
            margin-top: 10px;

        }

        #Q-nav1 {
            overflow: hidden;
        }

        .fixed {
            position: fixed;
            top: 0;
            left: 0;
        }
    </style>

    <!--引入工具js-->
    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求1：当我们滚动界面的时候，被卷曲的头部如果超过第二个盒子距离顶部的位置，那么直接给第二个盒子加类名.fixed
            //需求2：当我们滚动界面的时候，被卷曲的头部如果小于第二个盒子距离顶部的位置，那么直接给第二个盒子取消类名.fixed

            //1.老三步。
            var topDiv = document.getElementById("top");
            var height = topDiv.offsetHeight;
            var middle = document.getElementById("Q-nav1");
            var main = document.getElementById("main");

            window.onscroll = function () {
                //2.判断 ，被卷曲的头部的大小
                if (scroll().top > height) {
                    //3.满足条件添加类，否则删除类
                    middle.className += " fixed";
                    //第二个盒子也要占位置，为了避免重叠，我们给第三个盒子一个上padding的空间，把这个空间留给第二个盒子
                    main.style.paddingTop = middle.offsetHeight + "px";
                } else {
                    middle.className = "";
                    //清零
                    main.style.paddingTop = 0;
                }
            }

        }
    </script>
</head>
<body>
<div class="top" id="top">
    <img src="images/top.png" alt=""/>
</div>
<div id="Q-nav1">
    <img src="images/nav.png" alt=""/>
</div>
<div class="main" id="main">
    <img src="images/main.png" alt=""/>
</div>
</body>
</html>

```

上方代码中，有一个技巧：

```javascript
main.style.paddingTop = middle.offsetHeight + "px";
```

仔细看注释就好。

（2）tools.js：

```javascript
/**
 * Created by smyhvae on 2018/02/03.
 */
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
```


实现效果：

![](http://img.smyhvae.com/20180203_1619.gif)


工程文件：

- 2018-02-03-scrollTop固定导航栏.rar


##  window.scrollTo()方法举例：返回到顶部小火箭

（1）index.html：



```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        img {
            position: fixed;
            bottom: 100px;
            right: 50px;
            cursor: pointer;
            display: none;
            border: 1px solid #000;
        }

        div {
            width: 1210px;
            margin: 100px auto;
            text-align: center;
            font: 500 26px/35px "simsun";
            color: red;
        }
    </style>
    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求：被卷去的头部超过100显示小火箭，然后点击小火箭屏幕缓慢移动到最顶端。
            //难点：我们以前是移动盒子，现在是移动屏幕，我们没有学过如何移动屏幕。
            //      技术点：window.scrollTo(x,y);浏览器显示区域跳转到指定的坐标
            //步骤：
            //1.老三步
            var img = document.getElementsByTagName("img")[0];
            window.onscroll = function () {
                //被卷去的距离大于200显示小火箭，否则隐藏
                //2.显示隐藏小火箭
                if (scroll().top > 1000) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
                //每次移动滚动条的时候都给leader赋值，模拟leader获取距离顶部的距离
                leader = scroll().top;
            }
            //3.缓动跳转到页面最顶端（利用我们的缓动动画）
            var timer = null;
            var target = 0; //目标位置
            var leader = 0; //显示区域自身的位置
            img.onclick = function () {
                //技术点：window.scrollTo(0,0);
                //要用定时器，先清定时器
                clearInterval(timer);
                timer = setInterval(function () {
                    //获取步长
                    var step = (target - leader) / 10;
                    //二次处理步长
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step; //往上移动的过程中，step是负数。当前位置减去步长，就等于下一步的位置。
                    //显示区域移动
                    window.scrollTo(0, leader);
                    //清除定时器
                    if (leader === 0) {
                        clearInterval(timer);
                    }
                }, 25);
            }
        }
    </script>
</head>
<body>
<img src="images/Top.jpg"/>
<div>
    我是最顶端.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>

</div>
</body>
</html>
```


（2）tools.js:

```javascript
/**
 * Created by smyhvae on 2015/12/8.
 */

//函数：获取scrollTop和scrollLeft的值
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

```


实现效果：


![](http://img.smyhvae.com/20180203_1710.gif)

小火箭的图片资源：


![](http://img.smyhvae.com/20180203-Top.jpg)



##  window.scrollTo()方法举例：楼层跳跃（暂略）


## 缓动框架封装

### 1、缓动框架封装：同时设置多个属性

这里我们通过`window.getComputedStyle`的方式获取属性值。

**完整代码如下：**

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            position: absolute;
            top: 40px;
            left: 10px;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>

<button>运动到json中设置的位置</button>
<div></div>

<script>

    var btnArr = document.getElementsByTagName("button");
    var div = document.getElementsByTagName("div")[0];

    btnArr[0].onclick = function () {
        var json = {"left": 100, "top": 200, "width": 300, "height": 300};
        animate(div, json);
    }

    //参数变为3个
    function animate(ele, json) {
        //先清定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            //遍历属性和值，分别单独处理json
            //attr == key(键)    target == json[key](值)
            for (var key in json) {
                //四部
                var current = parseInt(getStyle(ele, key)) || 0;
                //1.获取步长
                var step = (json[key] - current) / 10;
                //2.二次加工步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                //3.赋值
                ele.style[key] = current + "px";
                console.log(1);
                //4.清除定时器
//                    if(Math.abs(json[key]-current)<=Math.abs(step)){
//                        ele.style[key] = json[key] + "px";
//                        clearInterval(ele.timer);
//                    }
            }
        }, 25);
    }

    //兼容方法获取元素样式
    function getStyle(ele, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        }
        return ele.currentStyle[attr];
    }
</script>
</body>
</html>
```


实现效果：


![](http://img.smyhvae.com/20180204_1440.gif)


### 2、上方的代码改进：清除定时器

上方的代码中，我们还需做一下清除定时器的判断：只有所有的参数都到达指定位置了，我们就清除定时器。

完整版代码如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            position: absolute;
            top: 40px;
            left: 10px;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>

<button>运动到json中设置的位置</button>
<div></div>

<script>

    var btnArr = document.getElementsByTagName("button");
    var div = document.getElementsByTagName("div")[0];

    btnArr[0].onclick = function () {
        var json = {"left": 100, "top": 200, "width": 300, "height": 300};
        animate(div, json);
    }

    //参数变为3个
    function animate(ele, json) {
        //先清定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            //开闭原则
            var bool = true;

            //遍历属性和值，分别单独处理json
            //attr == key(键)    target == json[key](值)
            for (var key in json) {
                //四部
                var current = parseInt(getStyle(ele, key)) || 0;
                //1.获取步长
                var step = (json[key] - current) / 10;
                //2.二次加工步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                //3.赋值
                ele.style[key] = current + "px";
                //4.清除定时器
                //判断: 目标值和当前值的差大于步长，就不能跳出循环
                //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                if (json[key] !== current) {
                    bool = false;
                }
            }

            console.log(1);
            //只有所有的属性都到了指定位置，bool值才为true；
            if (bool) {
                clearInterval(ele.timer);
            }
        }, 25);
    }

    //兼容方法获取元素样式
    function getStyle(ele, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        }
        return ele.currentStyle[attr];
    }

</script>
</body>
</html>
```


运行效果同上。


**### 3、进一步深入：如果有要同时执行讴多个动画时，就要用到回调函数（重要）**：

上面的代码中，我们要做的动画是：

```javascript
    btnArr[0].onclick = function () {
        var json = {"left": 100, "top": 200, "width": 300, "height": 300};
        animate(div, json);
    }
```

上面的代码是执行这一个动画，可如果要同时执行两个动画呢？一般人自然想到的是下面的写法：（错误的写法）


```javascript
    btnArr[0].onclick = function () {
        var json1 = {"left": 100, "top": 200, "width": 300, "height": 300};
        var json2 = {"left": 200, "top": 10, "width": 150, "height": 150};
        animate(div, json1);
        animate(div, json2);
    }
```

但是这样写的话，第二个动画 json2 会把第一个动画 json1 **层叠掉**。也就是说，第一个动画直接就不执行了。效果如下：


![](http://img.smyhvae.com/20180204_1526.gif)

这显然不是我们想看到的。

如果我们想先执行第一个动画fn1()，再执行第二个动画fn2()的话，就要用到**回调函数**。意思是，将第二个动画fn2()作为回调函数即可。

完整版代码如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            position: absolute;
            top: 40px;
            left: 10px;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>

<button>运动到 json 设置的位置</button>
<div></div>

<script>

    var btnArr = document.getElementsByTagName("button");
    var div = document.getElementsByTagName("div")[0];

    btnArr[0].onclick = function () {
        var json1 = {"left": 100, "top": 200, "width": 300, "height": 300};
        var json2 = {"left": 300, "top": 10, "width": 100, "height": 100};

        animate(div, json1, function () { //第三个参数是回调，可以保证json1的动画执行结束后，再执行json2的动画
            animate(div, json2);
        })
    }

    //带有回调的动画封装
    function animate(ele, json, fn) {
        //先清定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            //开闭原则
            var bool = true;


            //遍历属性和值，分别单独处理json
            //attr == key(键)    target == json[key](值)
            for (var key in json) {
                //四部
                var current = parseInt(getStyle(ele, key)) || 0;
                //1.获取步长
                var step = (json[key] - current) / 10;
                //2.二次加工步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                //3.赋值
                ele.style[key] = current + "px";
                //4.清除定时器
                //判断: 目标值和当前值的差大于步长，就不能跳出循环
                //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                if (json[key] !== current) {
                    bool = false;
                }
            }

            console.log(1);
            //只有所有的属性都到了指定位置，bool值才不会变成false；
            if (bool) {
                clearInterval(ele.timer); //定时器结束，代表第一个函数fn1()执行完毕了，接下来可以执行回调函数fn2()了。
                //只有传递了回调函数，才能执行
                if (fn) {  //【重要】第一个函数执行完毕了，定时器也清除了。现在，如果有人送了fn()这个回调函数过来，那就执行fn()
                    fn();  // 函数名+()：执行该函数
                }
            }
        }, 25);
    }

    //兼容方法获取元素样式
    function getStyle(ele, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        }
        return ele.currentStyle[attr];
    }

</script>
</body>
</html>
```

效果如下：


![](http://img.smyhvae.com/20180204_1600.gif)


上方代码中，如果我们要先后完成两个动画，执行的代码是：


```javascript
        animate(div, json1, function () { //第三个参数是回调，可以保证json1的动画执行结束后，再执行json2的动画
            animate(div, json2);
        })
```


如果想要先后执行两个动画，那就以此类推：

```javascript
        animate(div, json1, function () { //第三个参数是回调，可以保证json1的动画执行结束后，再执行json2的动画
            animate(div, json2,function () {
                animate(div,json3);
            });
        })
```




**举例：仿360的右下角开机效果**

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 322px;
            position: fixed;
            bottom: 0;
            right: 0;
        }

        span {
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 20px;
            cursor: pointer;
        }
    </style>
    <script>
        window.onload = function () {
            //需求：下面的盒子高先变为0，然后上面的大盒子的宽再变为0.
            var guanbi = document.getElementById("guanbi");
            var box = guanbi.parentNode;
            var b = document.getElementById("b");

            guanbi.onclick = function () {
                //下面的盒子高度变为0，然后大盒子的宽在变为0.
                animate(b, {"height": 0}, function () {
                    animate(box, {"width": 0});
                });
            }
        }


        //封装好的动画函数
        function animate(ele, json, fn) {
            //先清定时器
            clearInterval(ele.timer);
            ele.timer = setInterval(function () {
                //开闭原则
                var bool = true;


                //遍历属性和值，分别单独处理json
                //attr == key(键)    target == json[key](值)
                for (var key in json) {
                    //四部
                    var current = parseInt(getStyle(ele, key)) || 0;
                    //1.获取步长
                    var step = (json[key] - current) / 10;
                    //2.二次加工步长
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = current + step;
                    //3.赋值
                    ele.style[key] = current + "px";
                    //4.清除定时器
                    //判断: 目标值和当前值的差大于步长，就不能跳出循环
                    //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                    if (json[key] !== current) {
                        bool = false;
                    }
                }

                console.log(1);
                //只有所有的属性都到了指定位置，bool值才不会变成false；
                if (bool) {
                    clearInterval(ele.timer);
                    //所有程序执行完毕了，现在可以执行回调函数了
                    //只有传递了回调函数，才能执行
                    if (fn) {
                        fn();
                    }
                }
            }, 1);
        }

        /**
         * 获取元素样式兼容写法
         * @param ele
         * @param attr
         * @returns {*}
         */
        function getStyle(ele, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(ele, null)[attr];
            }
            return ele.currentStyle[attr];
        }

    </script>
</head>
<body>
<div class="box">
    <span id="guanbi"></span>
    <div class="hd" id="t">
        <img src="images/1.jpg" alt=""/>
    </div>
    <div class="bd" id="b">
        <img src="images/2.jpg" alt=""/>
    </div>
</div>
</body>
</html>
```


效果如下：

![](http://img.smyhvae.com/20180204_1620.gif)

工程文件：

- 2018-02-04-仿360开机效果.rar



### 4、对 opacity和 z-index 属性进行单独改进

我们以上的代码中，如果要进行动画参数的设置，是直接把参数放到json里面去的。例如：

```javascript
        var json1 = {"left": 100, "top": 200, "width": 300, "height": 300};
        var json2 = {"left": 300, "top": 10, "width": 100, "height": 100};
```

可是，下面这两个属性，却不能这样放到json里，会出现兼容性的问题：


```
    opacity: 0.5;  //透明度
    z-index: 1;
```


如何改进呢？暂略。
