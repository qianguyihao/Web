

> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8413602.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## 绑定事件的两种方式/DOM事件的级别

我们在上一篇文章 [DOM操作详解](http://www.cnblogs.com/smyhvae/p/8366012.html) 中已经讲过事件的概念。这里讲一下注册事件的两种方式，我们以onclick事件为例。

### DOM0的写法：onclick



```javascript
    element.onclick = function () {

    }
```


举例：


```html
<body>
<button>点我</button>
<script>
    var btn = document.getElementsByTagName("button")[0];

    //这种事件绑定的方法容易被层叠。
    btn.onclick = function () {
        console.log("事件1");
    }

    btn.onclick = function () {
        console.log("事件2");
    }

</script>
</body>

```

点击按钮后，上方代码的打印结果：

```html
事件2
```

我们可以看到，这种绑定事件的方式，会层叠掉之前的事件。

### DOM2的写法：addEventListener



```javascript
    element.addEventListener('click', function () {

    }, false);
```


参数解释：

- 参数1：事件名(注意，没有on)

- 参数2：事件名(执行函数)

- 参数3：**true表示捕获阶段触发，false表示冒泡阶段触发（默认）**。如果不写，则默认为false。【重要】

举例：

```html
<body>
<button>按钮</button>
<script>
    var btn = document.getElementsByTagName("button")[0];

    //addEventListener: 事件监听器。 原事件被执行的时候，后面绑定的事件照样被执行
    //第二种事件绑定的方法不会出现层叠。（更适合团队开发）
    btn.addEventListener("click", fn1);
    btn.addEventListener("click", fn2);

    function fn1() {
        console.log("事件1");
    }

    function fn2() {
        console.log("事件2");
    }

</script>
</body>
```

点击按钮后，上方代码的打印结果：


```html
    事件1
    事件2
```

我们可以看到，这种绑定事件的方式，不会层叠掉之前的事件。

## 事件对象

在触发DOM上的某个事件时，会产生一个事件对象event，这个对象中包含着所有与事件有关的信息。比如鼠标操作时候，会添加鼠标位置的相关信息到事件对象中。

所有浏览器都支持event对象，但支持的方式不同。如下。

（1）普通浏览器支持 event。比如：

![](http://img.smyhvae.com/20180203_1735.png)

（2）ie 678 支持 window.event。

于是，我们可以采取一种兼容性的写法。如下：

```javascript
    event = event || window.event; ////兼容性写法
```

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    //点击页面的任何部分
    document.onclick = function (event) {
        event = event || window.event; ////兼容性写法

        console.log(event);
        console.log(event.timeStamp);
        console.log(event.bubbles);
        console.log(event.button);
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.screenX);
        console.log(event.screenY);
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX);
        console.log(event.clientY);
    }
</script>
</body>
</html>
```


### event 属性

event 有很多属性，比如：

![](http://img.smyhvae.com/20180203_1739.png)

由于pageX 和 pageY的兼容性不好，我们可以这样做：

- 鼠标在页面的位置 = 被卷去的部分+可视区域部分。

## Event举例

### 举例1：鼠标跟随

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            height: 5000px;
        }

        img {
            position: absolute;
            padding: 10px 0;
            border: 1px solid #ccc;
            cursor: pointer;
            background-color: yellowgreen;
        }
    </style>
</head>
<body>
<img src="" width="100" height="100"/>

<script>
    //需求：点击页面的任何地方，图片跟随鼠标移动到点击位置。
    //思路：获取鼠标在页面中的位置，然图片缓慢运动到鼠标点击的位置。
    //  兼容ie67做pageY和pageX；
    //  原理：     鼠标在页面的位置 = 被卷去的部分+可视区域部分。
    //步骤：
    //1.老三步。
    //2.获取鼠标在页面中的位置。
    //3.利用缓动原理，慢慢的运动到指定位置。（包括左右和上下）

    //1.老三步。
    var img = document.getElementsByTagName("img")[0];
    var timer = null;
    var targetx = 0;
    var targety = 0;
    var leaderx = 0;
    var leadery = 0;
    //给整个文档绑定点击事件获取鼠标的位置。
    document.onclick = function (event) {
        //新五步
        //兼容获取事件对象
        event = event || window.event;
        //鼠标在页面的位置 = 被卷去的部分+可视区域部分。
        var pagey = event.pageY || scroll().top + event.clientY;
        var pagex = event.pageX || scroll().left + event.clientX;

        targety = pagey - 30;
        targetx = pagex - 50;

        //要用定时器，先清定时器
        clearInterval(timer);
        timer = setInterval(function () {
            //为盒子的位置获取值
            leaderx = img.offsetLeft;
            //获取步长
            var stepx = (targetx - leaderx) / 10;
            //二次处理步长
            stepx = stepx > 0 ? Math.ceil(stepx) : Math.floor(stepx);
            leaderx = leaderx + stepx;
            //赋值
            img.style.left = leaderx + "px";


            //为盒子的位置获取值
            leadery = img.offsetTop;
            //获取步长
            var stepy = (targety - leadery) / 10;
            //二次处理步长
            stepy = stepy > 0 ? Math.ceil(stepy) : Math.floor(stepy);
            leadery = leadery + stepy;
            //赋值
            img.style.top = leadery + "px";

            //清定时器
            if (Math.abs(targety - img.offsetTop) <= Math.abs(stepy) && Math.abs(targetx - img.offsetLeft) <= Math.abs(stepx)) {
                img.style.top = targety + "px";
                img.style.left = targetx + "px";
                clearInterval(timer);
            }
        }, 30);
    }

</script>

</body>
</html>
```

实现效果：

![](http://img.smyhvae.com/20180203_1810.gif)

## event应用举例：获取鼠标距离所在盒子的距离

关键点：

```
    鼠标距离所在盒子的距离 = 鼠标在整个页面的位置 - 所在盒子在整个页面的位置
```

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            padding-top: 100px;
            background-color: pink;
            margin: 100px;
            text-align: center;
            font: 18px/30px "simsun";
            cursor: pointer;
        }
    </style>
</head>
<body>
<div class="box">

</div>

<script src="animate.js"></script>
<script>
    //需求：鼠标进入盒子之后只要移动，哪怕1像素，随时显示鼠标在盒子中的坐标。
    //技术点：新事件，onmousemove：在事件源上，哪怕鼠标移动1像素也会触动这个事件。
    //一定程度上，模拟了定时器
    //步骤：
    //1.老三步和新五步
    //2.获取鼠标在整个页面的位置
    //3.获取盒子在整个页面的位置
    //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。

    //1.老三步和新五步
    var div = document.getElementsByTagName("div")[0];

    div.onmousemove = function (event) {

        event = event || window.event;
        //2.获取鼠标在整个页面的位置
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        //3.获取盒子在整个页面的位置
        // var xx =
        // var yy =
        //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。
        var targetx = pagex - div.offsetLeft;
        var targety = pagey - div.offsetTop;
        this.innerHTML = "鼠标在盒子中的X坐标为：" + targetx + "px;<br>鼠标在盒子中的Y坐标为：" + targety + "px;"
    }

</script>
</body>
</html>
```

实现效果：

![](http://img.smyhvae.com/20180203_1828.gif)

**举例：商品放大镜**

代码实现：

（1）index.html:

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 350px;
            height: 350px;
            margin: 100px;
            border: 1px solid #ccc;
            position: relative;
        }

        .big {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 0;
            left: 360px;
            border: 1px solid #ccc;
            overflow: hidden;
            display: none;
        }

        /*mask的中文是：遮罩*/
        .mask {
            width: 175px;
            height: 175px;
            background: rgba(255, 255, 0, 0.4);
            position: absolute;
            top: 0;
            left: 0;
            cursor: move;
            display: none;
        }

        .small {
            position: relative;
        }

        img {
            vertical-align: top;
        }
    </style>

    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求：鼠标放到小盒子上，让大盒子里面的图片和我们同步等比例移动。
            //技术点：onmouseenter==onmouseover 第一个不冒泡
            //技术点：onmouseleave==onmouseout  第一个不冒泡
            //步骤：
            //1.鼠标放上去显示盒子，移开隐藏盒子。
            //2.老三步和新五步（黄盒子跟随移动）
            //3.右侧的大图片，等比例移动。

            //0.获取相关元素
            var box = document.getElementsByClassName("box")[0];
            var small = box.firstElementChild || box.firstChild;
            var big = box.children[1];
            var mask = small.children[1];
            var bigImg = big.children[0];

            //1.鼠标放上去显示盒子，移开隐藏盒子。(为小盒子绑定事件)
            small.onmouseenter = function () {
                //封装好方法调用：显示元素
                show(mask);
                show(big);
            }
            small.onmouseleave = function () {
                //封装好方法调用：隐藏元素
                hide(mask);
                hide(big);
            }

            //2.老三步和新五步（黄盒子跟随移动）
            //绑定的事件是onmousemove，而事件源是small(只要在小盒子上移动1像素，黄盒子也要跟随)
            small.onmousemove = function (event) {
                //新五步
                event = event || window.event;

                //想要移动黄盒子，必须要知道鼠标在small小图中的位置。
                var pagex = event.pageX || scroll().left + event.clientX;
                var pagey = event.pageY || scroll().top + event.clientY;

                //x：mask的left值，y：mask的top值。
                var x = pagex - box.offsetLeft - mask.offsetWidth / 2; //除以2，可以保证鼠标mask的中间
                var y = pagey - box.offsetTop - mask.offsetHeight / 2;

                //限制换盒子的范围
                //left取值为大于0，小盒子的宽-mask的宽。
                if (x < 0) {
                    x = 0;
                }
                if (x > small.offsetWidth - mask.offsetWidth) {
                    x = small.offsetWidth - mask.offsetWidth;
                }
                //top同理。
                if (y < 0) {
                    y = 0;
                }
                if (y > small.offsetHeight - mask.offsetHeight) {
                    y = small.offsetHeight - mask.offsetHeight;
                }

                //移动黄盒子
                console.log(small.offsetHeight);
                mask.style.left = x + "px";
                mask.style.top = y + "px";

                //3.右侧的大图片，等比例移动。
                //如何移动大图片？等比例移动。
                //    大图片/大盒子 = 小图片/mask盒子
                //    大图片走的距离/mask走的距离 = （大图片-大盒子）/（小图片-黄盒子）
//                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

                //大图片走的距离/mask盒子都的距离 = 大图片/小图片
                var bili = bigImg.offsetWidth / small.offsetWidth;

                var xx = bili * x;  //知道比例，就可以移动大图片了
                var yy = bili * y;

                bigImg.style.marginTop = -yy + "px";
                bigImg.style.marginLeft = -xx + "px";
            }
        }
    </script>
</head>
<body>
<div class="box">
    <div class="small">
        <img src="images/001.jpg" alt=""/>
        <div class="mask"></div>
    </div>
    <div class="big">
        <img src="images/0001.jpg" alt=""/>
    </div>
</div>
</body>
</html>
```

（2）tools.js:

```javascript
/**
 * Created by smyhvae on 2018/02/03.
 */

//显示和隐藏
function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}

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

效果演示：

![](http://img.smyhvae.com/20180203_1920.gif)

## 小窗口拖拽案例

暂略。

## DOM事件流

事件传播的三个阶段是：事件捕获、事件冒泡和目标。

- 事件捕获阶段：事件从最上一级标签开始往下查找，直到捕获到事件目标 target。（从祖先元素往子元素查找，DOM树结构）。在这个过程中，事件相应的监听函数是不会被触发的。

- 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

- 事件冒泡阶段：事件从事件目标 target 开始，往上冒泡直到页面的最上一级标签。（从子元素到祖先元素冒泡）

如下图所示：

![](http://img.smyhvae.com/20180204_1218.jpg)

PS：这个概念类似于 Android 里的 **touch 事件传递**。


### 事件捕获

addEventListener可以捕获事件：

```javascript
    box1.addEventListener("click", function () {
        alert("捕获 box3");
    }, true);
```

上面的方法中，参数为true，代表事件在捕获阶段执行。

代码演示：

```javascript
    //参数为true，代表捕获；参数为false或者不写参数，代表冒泡
    box3.addEventListener("click", function () {
        alert("捕获 child");
    }, true);

    box2.addEventListener("click", function () {
        alert("捕获 father");
    }, true);

    box1.addEventListener("click", function () {
        alert("捕获 grandfather");
    }, true);

    document.addEventListener("click", function () {
        alert("捕获 body");
    }, true);
```

效果演示：

![](http://img.smyhvae.com/20180204_1101.gif)


**说明**：捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。

PS1：第一个接收到事件的对象是 **window**（有人会说body，有人会说html，这都是错误的）。

PS2：JS中涉及到DOM对象时，有两个对象最常用：window、doucument。它们俩也是最先获取到事件的。


事件捕获阶段的完整写法是：

```javascript
    window.addEventListener("click", function () {
        alert("捕获 window");
    }, true);

    document.addEventListener("click", function () {
        alert("捕获 document");
    }, true);

    document.documentElement.addEventListener("click", function () {
        alert("捕获 html");
    }, true);

    document.body.addEventListener("click", function () {
        alert("捕获 body");
    }, true);

    fatherBox.addEventListener("click", function () {
        alert("捕获 father");
    }, true);

    childBox.addEventListener("click", function () {
        alert("捕获 child");
    }, true);

```


**补充一个知识点：**

在 js中：

- 如果想获取 `html`节点，方法是`document.documentElement`。

- 如果想获取 `body` 节点，方法是：`document.body`。

二者不要混淆了。





### 事件冒泡

**事件冒泡**: 当一个元素上的事件被触发的时候（比如说鼠标点击了一个按钮），同样的事件将会在那个元素的所有**祖先元素**中被触发。这一过程被称为事件冒泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。


通俗来讲，冒泡指的是：**子元素的事件被触发时，父盒子的同样的事件也会被触发**。取消冒泡就是取消这种机制。

代码演示：

```javascript
    //事件冒泡
    box3.onclick = function () {
        alert("child");
    }

    box2.onclick = function () {
        alert("father");
    }

    box1.onclick = function () {
        alert("grandfather");
    }

    document.onclick = function () {
        alert("body");
    }

```

![](http://img.smyhvae.com/20180204_1028.gif)

上图显示，当我点击儿子 box3的时候，它的父亲box2、box1、body都依次被触发了。即使我改变代码的顺序，也不会影响效果的顺序。

当然，上面的代码中，我们用 addEventListener 这种 DOM2的写法也是可以的，但是第三个参数要写 false，或者不写。

**冒泡顺序**：

一般的浏览器: （除IE6.0之外的浏览器）

- div -> body -> html -> document -> window

IE6.0：

- div -> body -> html -> document

### 不是所有的事件都能冒泡

以下事件不冒泡：blur、focus、load、unload、onmouseenter、onmouseleave。意思是，事件不会往父元素那里传递。

我们检查一个元素是否会冒泡，可以通过事件的以下参数：

```javascript
    event.bubbles
```

如果返回值为true，说明该事件会冒泡；反之则相反。

举例：

```javascript
    box1.onclick = function (event) {
        alert("冒泡 child");

        event = event || window.event;
        console.log(event.bubbles); //打印结果：true
    }
```

### 阻止冒泡的方法

w3c的方法：（火狐、谷歌、IE11）

```javascript
    event.stopPropagation();
```

IE10以下则是：

```javascript
event.cancelBubble = true
```

兼容代码如下：

```javascript
   box3.onclick = function (event) {

        alert("child");

        //阻止冒泡
        event = event || window.event;

        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
```

上方代码中，我们对box3进行了阻止冒泡，产生的效果是：事件不会继续传递到 father、grandfather、body了。

## 事件委托

事件委托，通俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素。

比如说有一个列表 ul，列表之中有大量的列表项 li：

```html
<ul id="parent-list">
    <li id="li-1">Item 1</li>
    <li id="li-2">Item 2</li>
    <li id="li-3">Item 3</li>
    <li id="li-4">Item 4</li>
    <li id="li-5">Item 5</li>
    <li id="li-6">Item 6</li>
</ul>
```


当我们的鼠标移到Li上的时候，需要获取此Li的相关信息并飘出悬浮窗以显示详细信息，或者当某个Li被点击的时候需要触发相应的处理事件。我们通常的写法，是为每个Li都绑定类似onMouseOver或者onClick之类的事件监听：


```javascript
    //每个 li 中做的事情
    function addListeners4Li(liNode){
        liNode.onclick = function clickHandler(){...};
        liNode.onmouseover = function mouseOverHandler(){...}
    }

    window.onload = function(){
        var ulNode = document.getElementById("parent-list");
        var liNodes = ulNode.getElementByTagName("Li");
        for(var i=0, l = liNodes.length; i < l; i++){
            addListeners4Li(liNodes[i]);
        }
    }
```

但是，上面的做法会消耗内存和性能。


因此，比较好的方法就是把这个点击事件绑定到他的父层，也就是 `ul` 上，然后在执行事件的时候再去匹配判断目标元素。如下：



```javascript
    // 获取父节点，并为它注册click事件。 false 表示事件在冒泡阶段触发（默认）
    document.getElementById("parent-list").addEventListener("click", function (e) {
        // event.target 代表的是子元素。toUpperCase()方法 指的是转换为大写字母并返回
        if (e.target && e.target.nodeName.toUpperCase() == "LI") {
            // 真正的处理过程在这里
            console.log("List item ", e.target.id, " was clicked!");
        }
    }, false);

```


上方代码，为父节点注册click事件，当子节点被点击的时候，click事件会从子节点开始**向上冒泡**。**父节点捕获到事件**之后，开始执行方法体里的内容：通过判断 e.target 拿到了被点击的子节点li。从而可以获取到相应的信息，并作处理。

换而言之，事件是在父节点上注册的，参数为false，说明事件是在冒泡阶段触发（往上传递），那就只有父节点能拿到事件，子节点是不可能拿到事件的。

所以事件委托可以减少大量的内存消耗，提高效率。

事件委托的参考链接：

- [荐 | JavaScript事件代理和委托（Delegation）](https://www.cnblogs.com/owenChen/archive/2013/02/18/2915521.html)

- [JavaScript 事件委托详解](https://zhuanlan.zhihu.com/p/26536815)



## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
