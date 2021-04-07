

## 前言

JS动画的主要内容如下：

1、三大家族和一个事件对象：

- 三大家族：offset/scroll/client。也叫三大系列。

- 事件对象/event（事件被触动时，鼠标和键盘的状态）（通过属性控制）。

2、动画(闪现/匀速/缓动)

3、冒泡/兼容/封装

## offset 家族的组成

我们知道，JS动画的三大家族包括：offset/scroll/client。今天来讲一下offset，以及与其相关的匀速动画。

> offset的中文是：偏移，补偿，位移。

js中有一套方便的**获取元素尺寸**的办法就是offset家族。offset家族包括：

- offsetWidth

- offsetHight

- offsetLeft

- offsetTop

- offsetParent

下面分别介绍。

### 1、offsetWidth 和 offsetHight

`offsetWidth` 和 `offsetHight`：获取元素的**宽高 + padding + border**，不包括margin。如下：

- offsetWidth = width + padding + border

- offsetHeight = Height + padding + border

这两个属性，他们绑定在了所有的节点元素上。获取元素之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。

举例如下：

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
            border: 10px solid #000;
            margin: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>

<div class="box"></div>
<script>
    var div1 = document.getElementsByTagName("div")[0];

    console.log(div1.offsetHeight);          //打印结果：140（100+20+20）
    console.log(typeof div1.offsetHeight);   //打印结果：number

</script>
</body>
</html>
```

### 2、offsetParent

`offsetParent`：获取当前元素的**定位父元素**。

- 如果当前元素的父元素，**有CSS定位**（position为absolute、relative、fixed），那么 `offsetParent` 获取的是**最近的**那个父元素。

- 如果当前元素的父元素，**没有CSS定位**（position为absolute、relative、fixed），那么`offsetParent` 获取的是**body**。


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div class="box1" style="position: absolute;">
    <div class="box2" style="position: fixed;">
        <div class="box3"></div>
    </div>
</div>
<script>

    var box3 = document.getElementsByClassName("box3")[0];

    console.log(box3.offsetParent);
</script>
</body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20180202_1725.png)

### 3、offsetLeft 和 offsetTop

`offsetLeft`：当前元素相对于其**定位父元素**的水平偏移量。

`offsetTop`：当前元素相对于其**定位父元素**的垂直偏移量。

备注：从父亲的 padding 开始算起，父亲的 border 不算在内。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box1 {
            width: 300px;
            height: 300px;
            padding: 100px;
            margin: 100px;
            position: relative;
            border: 100px solid #000;
            background-color: pink;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: red;
            /*position: absolute;*/
            /*left: 10px;*/
            /*top: 10px;*/
        }
    </style>
</head>
<body>
<div class="box1">
    <div class="box2" style="left: 10px"></div>
</div>

<script>

    var box2 = document.getElementsByClassName("box2")[0];

    //offsetTop和offsetLeft
    console.log(box2.offsetLeft);  //100
    console.log(box2.style.left);  //10px


</script>

</body>
</html>
```

在父盒子有定位的情况下，offsetLeft == style.left(去掉px之后)。注意，后者只识别行内样式。但区别不仅仅于此，下面会讲。

### offsetLeft 和 style.left 区别

（1）最大区别在于：

offsetLeft 可以返回无定位父元素的偏移量。如果父元素中都没有定位，则body为准。

style.left 只能获取行内样式，如果父元素中都没有设置定位，则返回""（意思是，返回空字符串）;

（2）offsetTop 返回的是数字，而 style.top 返回的是字符串，而且还带有单位：px。

比如：

```javascript

div.offsetLeft = 100;
div.style.left = "100px";

```

（3）offsetLeft 和 offsetTop **只读**，而 style.left 和 style.top 可读写（只读是获取值，可写是修改值）


总结：我们一般的做法是：**用offsetLeft 和 offsetTop 获取值，用style.left 和 style.top 赋值**（比较方便）。理由如下：

- style.left：只能获取行内式，获取的值可能为空，容易出现NaN。

- offsetLeft：获取值特别方便，而且是现成的number，方便计算。它是只读的，不能赋值。


## 动画的种类

- 闪现（基本不用）

- 匀速（本文重点）

- 缓动（后续重点）

简单举例如下：（每间隔500ms，向右移动盒子100px）

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
<button>动画</button>
<div class="box" style="left: 0px"></div>

<script>
    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];

    //1、闪动
    //    btn.onclick = function () {
    //        div.style.left = "500px";
    //    }

    //2、匀速运动
    btn.onclick = function () {
        //定时器，每隔一定的时间向右走一些
        setInterval(function () {
            console.log(parseInt(div.style.left));
            //动画原理： 盒子未来的位置 = 盒子现在的位置 + 步长；
            //方法1：用offsetLeft获取值，用style.left赋值。
            div.style.left = div.offsetLeft + 100 + 'px';

            // 方法2：必须一开始就在DOM节点上添加 style="left: 0px;"属性，才能用方法2。否则， div.style.left 的值为 NaN
            // div.style.left = parseInt(div.style.left)+100+"px";  //方法2：
        }, 500);
    };
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180202_1840.gif)

## 匀速动画的封装：每间隔30ms，移动盒子10px【重要】

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box1 {
            margin: 0;
            padding: 5px;
            height: 300px;
            background-color: #ddd;
            position: relative;
        }

        button {
            margin: 5px;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            left: 195px;
            top: 40px;
        }

        .box3 {
            width: 100px;
            height: 100px;
            background-color: yellow;
            position: absolute;
            left: 0;
            top: 150px;
        }
    </style>
</head>
<body>
<div class="box1">
    <button>运动到 left = 200px</button>
    <button>运动到 left = 400px</button>
    <div class="box2"></div>
    <div class="box3"></div>
</div>

<script>
    var btnArr = document.getElementsByTagName("button");
    var box2 = document.getElementsByClassName("box2")[0];
    var box3 = document.getElementsByClassName("box3")[0];

    //绑定事件
    btnArr[0].onclick = function () {
        //如果有一天我们要传递另外一个盒子，那么我们的方法就不好用了
        //所以我们要增加第二个参数，被移动的盒子本身。
        animate(box2, 200);
        animate(box3, 200);
    }

    btnArr[1].onclick = function () {
        animate(box2, 400);
        animate(box3, 400);
    }

    //【重要】方法的封装：每间隔30ms，将盒子向右移动10px
    function animate(ele, target) {
        //要用定时器，先清除定时器
        //一个盒子只能有一个定时器，这样的话，不会和其他盒子出现定时器冲突
        //我们可以把定时器本身，当成为盒子的一个属性
        clearInterval(ele.timer);
        //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
        //目标值如果大于当前值取正，目标值如果小于当前值取负
        var speed = target > ele.offsetLeft ? 10 : -10;  //speed指的是步长
        ele.timer = setInterval(function () {
            //在执行之前就获取当前值和目标值之差
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            //移动的过程中，如果目标值和当前值之差如果小于步长，那么就不能在前进了
            //因为步长有正有负，所有转换成绝对值来比较
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 30)
    }
</script>
</body>
</html>
```

实现的效果：

![](http://img.smyhvae.com/20180202_1910.gif)

上方代码中的方法封装，可以作为一个模板步骤，要记住。其实，这个封装的方法，写成下面这样，会更严谨，更容易理解：（将if语句进行了改进）

```javascript
    //【重要】方法的封装：每间隔30ms，将盒子向右移动10px
    function animate(ele, target) {
        //要用定时器，先清除定时器
        //一个盒子只能有一个定时器，这样的话，不会和其他盒子出现定时器冲突
        //我们可以把定时器本身，当成为盒子的一个属性
        clearInterval(ele.timer);
        //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
        //目标值如果大于当前值取正，目标值如果小于当前值取负
        var speed = target > ele.offsetLeft ? 10 : -10;  //speed指的是步长
        ele.timer = setInterval(function () {
            //在执行之前就获取当前值和目标值之差
            var val = target - ele.offsetLeft;

            //移动的过程中，如果目标值和当前值之差如果小于步长，那么就不能在前进了
            //因为步长有正有负，所有转换成绝对值来比较
            if (Math.abs(val) < Math.abs(speed)) {  //如果val小于步长，则直接到达目的地；否则，每次移动一个步长
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            } else {
                ele.style.left = ele.offsetLeft + speed + "px";
            }
        }, 30)
    }
```

## 代码举例：轮播图的实现

完整版代码如下：（注释已经比较详细）

```html
<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>无标题文档</title>
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
            list-style: none;
            border: 0;
        }

        .all {
            width: 500px;
            height: 200px;
            padding: 7px;
            border: 1px solid #ccc;
            margin: 100px auto;
            position: relative;
        }

        .screen {
            width: 500px;
            height: 200px;
            overflow: hidden;
            position: relative;
        }

        .screen li {
            width: 500px;
            height: 200px;
            overflow: hidden;
            float: left;
        }

        .screen ul {
            position: absolute;
            left: 0;
            top: 0px;
            width: 3000px;
        }

        .all ol {
            position: absolute;
            right: 10px;
            bottom: 10px;
            line-height: 20px;
            text-align: center;
        }

        .all ol li {
            float: left;
            width: 20px;
            height: 20px;
            background: #fff;
            border: 1px solid #ccc;
            margin-left: 10px;
            cursor: pointer;
        }

        .all ol li.current {
            background: yellow;
        }

        #arr {
            display: none;
        }

        #arr span {
            width: 40px;
            height: 40px;
            position: absolute;
            left: 5px;
            top: 50%;
            margin-top: -20px;
            background: #000;
            cursor: pointer;
            line-height: 40px;
            text-align: center;
            font-weight: bold;
            font-family: '黑体';
            font-size: 30px;
            color: #fff;
            opacity: 0.3;
            border: 1px solid #fff;
        }

        #arr #right {
            right: 5px;
            left: auto;
        }
    </style>

    <script>
        window.onload = function () {

            //需求：无缝滚动。
            //思路：赋值第一张图片放到ul的最后，然后当图片切换到第五张的时候
            //     直接切换第六章，再次从第一张切换到第二张的时候先瞬间切换到
            //     第一张图片，然后滑动到第二张
            //步骤：
            //1.获取事件源及相关元素。（老三步）
            //2.复制第一张图片所在的li,添加到ul的最后面。
            //3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
            //4.鼠标放到ol的li上切换图片
            //5.添加定时器
            //6.左右切换图片（鼠标放上去隐藏，移开显示）


            //1.获取事件源及相关元素。（老三步）
            var all = document.getElementById("all");
            var screen = all.firstElementChild || all.firstChild;
            var imgWidth = screen.offsetWidth;
            var ul = screen.firstElementChild || screen.firstChild;
            var ol = screen.children[1];
            var div = screen.lastElementChild || screen.lastChild;
            var spanArr = div.children;

            //2.复制第一张图片所在的li,添加到ul的最后面。
            var ulNewLi = ul.children[0].cloneNode(true);
            ul.appendChild(ulNewLi);
            //3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
            for (var i = 0; i < ul.children.length - 1; i++) {
                var olNewLi = document.createElement("li");
                olNewLi.innerHTML = i + 1;
                ol.appendChild(olNewLi)
            }
            var olLiArr = ol.children;
            olLiArr[0].className = "current";

            //4.鼠标放到ol的li上切换图片
            for (var i = 0; i < olLiArr.length; i++) {
                //自定义属性，把索引值绑定到元素的index属性上
                olLiArr[i].index = i;
                olLiArr[i].onmouseover = function () {
                    //排他思想
                    for (var j = 0; j < olLiArr.length; j++) {
                        olLiArr[j].className = "";
                    }
                    this.className = "current";
                    //鼠标放到小的方块上的时候索引值和key以及square同步
//                    key = this.index;
//                    square = this.index;
                    key = square = this.index;
                    //移动盒子
                    animate(ul, -this.index * imgWidth);
                }
            }

            //5.添加定时器
            var timer = setInterval(autoPlay, 1000);

            //固定向右切换图片
            //两个定时器（一个记录图片，一个记录小方块）
            var key = 0;
            var square = 0;

            function autoPlay() {
                //通过控制key的自增来模拟图片的索引值，然后移动ul
                key++;
                if (key > olLiArr.length) {
                    //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
                    ul.style.left = 0;
                    key = 1;
                }
                animate(ul, -key * imgWidth);
                //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
                //排他思想做小方块
                square++;
                if (square > olLiArr.length - 1) {//索引值不能大于等于5，如果等于5，立刻变为0；
                    square = 0;
                }
                for (var i = 0; i < olLiArr.length; i++) {
                    olLiArr[i].className = "";
                }
                olLiArr[square].className = "current";
            }

            //鼠标放上去清除定时器，移开后在开启定时器
            all.onmouseover = function () {
                div.style.display = "block";
                clearInterval(timer);
            }
            all.onmouseout = function () {
                div.style.display = "none";
                timer = setInterval(autoPlay, 1000);
            }

            //6.左右切换图片（鼠标放上去显示，移开隐藏）
            spanArr[0].onclick = function () {
                //通过控制key的自增来模拟图片的索引值，然后移动ul
                key--;
                if (key < 0) {
                    //先移动到最后一张，然后key的值取之前一张的索引值，然后在向前移动
                    ul.style.left = -imgWidth * (olLiArr.length) + "px";
                    key = olLiArr.length - 1;
                }
                animate(ul, -key * imgWidth);
                //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
                //排他思想做小方块
                square--;
                if (square < 0) {//索引值不能大于等于5，如果等于5，立刻变为0；
                    square = olLiArr.length - 1;
                }
                for (var i = 0; i < olLiArr.length; i++) {
                    olLiArr[i].className = "";
                }
                olLiArr[square].className = "current";
            }
            spanArr[1].onclick = function () {
                //右侧的和定时器一模一样
                autoPlay();
            }


            function animate(ele, target) {
                clearInterval(ele.timer);
                var speed = target > ele.offsetLeft ? 10 : -10;
                ele.timer = setInterval(function () {
                    var val = target - ele.offsetLeft;
                    ele.style.left = ele.offsetLeft + speed + "px";

                    if (Math.abs(val) < Math.abs(speed)) {
                        ele.style.left = target + "px";
                        clearInterval(ele.timer);
                    }
                }, 10)
            }
        }
    </script>
</head>

<body>
<div class="all" id='all'>
    <div class="screen" id="screen">
        <ul id="ul">
            <li><img src="images/1.jpg" width="500" height="200"/></li>
            <li><img src="images/2.jpg" width="500" height="200"/></li>
            <li><img src="images/3.jpg" width="500" height="200"/></li>
            <li><img src="images/4.jpg" width="500" height="200"/></li>
            <li><img src="images/5.jpg" width="500" height="200"/></li>
        </ul>
        <ol>

        </ol>
        <div id="arr">
            <span id="left"><</span>
            <span id="right">></span>
        </div>
    </div>
</div>
</body>
</html>


```

实现效果：

![](http://img.smyhvae.com/20180202_2020.gif)

温馨提示：动图太大，可以把<http://img.smyhvae.com/20180202_2020.gif>单独在浏览器中打开。

工程文件：

- [2018-02-02-JS动画实现轮播图.rar](http://download.csdn.net/download/smyhvae/10237662)


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

