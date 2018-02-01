
> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8366012.html)，并在[GitHub](https://github.com/smyhvae/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## 前言

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型，操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型，操作**浏览器部分功能**的API。比如让浏览器自动滚动。

## 事件

> JS是以**事件驱动为核心**的一门语言。

### 事件的三要素

**事件的三要素：事件源、事件、事件驱动程序**。

比如，我用手去按开关，灯亮了。这件事情里，事件源是：手。事件是：按开关。事件驱动程序是：灯的开和关。

再比如，网页上弹出一个广告，我点击右上角的`X`，广告就关闭了。这件事情里，事件源是：`X`。事件是：onclick。事件驱动程序是：广告关闭了。

于是我们可以总结出：谁引发的后续事件，谁就是事件源。

**总结如下：**

- 事件源：引发后续事件的html标签。

- 事件：js已经定义好了（见下图）。

- 事件驱动程序：对样式和html的操作。也就是DOM。

**代码书写步骤如下：**（重要）

- （1）获取事件源：document.getElementById(“box”);   // 类似于Android里面的findViewById

- （2）绑定事件： 事件源box.事件onclick = function(){ 事件驱动程序 };

- （3）书写事件驱动程序：关于DOM的操作。

最简单的代码举例：（点击box1，然后弹框）

```html
<body>
<div id="box1"></div>

<script type="text/javascript">
    // 1、获取事件源
    var div = document.getElementById("box1");
    // 2、绑定事件
    div.onclick = function () {
        // 3、书写事件驱动程序
        alert("我是弹出的内容");
    }
</script>

</body>
```

常见的事件如下：

![](http://img.smyhvae.com/20180126_1553.png)

下面针对这事件的三要素，进行分别介绍。

### 1、获取事件源的方式（DOM节点的获取）

获取事件源的常见方式如下：

```javascript
    var div1 = document.getElementById("box1");      //方式一：通过id获取单个标签

	var arr1 = document.getElementsByTagName("div1");     //方式二：通过 标签名 获得 标签数组，所以有s

	var arr2 = document.getElementsByClassName("hehe");  //方式三：通过 类名 获得 标签数组，所以有s
```

### 2、绑定事件的方式

方式一：直接绑定匿名函数

```html
<div id="box1" ></div>

<script type="text/javascript">
    var div1 = document.getElementById("box1");
    //绑定事件的第一种方式
    div1.onclick = function () {
        alert("我是弹出的内容");
    }
</script>
```

方式二：先单独定义函数，再绑定

```html
 <div id="box1" ></div>

<script type="text/javascript">
    var div1 = document.getElementById("box1");
    //绑定事件的第二种方式
    div1.onclick = fn;   //注意，这里是fn，不是fn()。fn()指的是返回值。
    //单独定义函数
    function fn() {
        alert("我是弹出的内容");
    }
</script>
```

注意上方代码的注释。**绑定的时候，是写fn，不是写fn()**。fn代表的是整个函数，而fn()代表的是返回值。

方式三：行内绑定

```html
<!--行内绑定-->
<div id="box1" onclick="fn()"></div>

<script type="text/javascript">

    function fn() {
        alert("我是弹出的内容");
    }

</script>
```

注意第一行代码，绑定时，是写的`"fn()"`，不是写的`"fn"`。因为绑定的这段代码不是写在js代码里的，而是被识别成了**字符串**。

### 3、事件驱动程序

我们在上面是拿alert举例，不仅如此，我们还可以操作标签的属性和样式。举例如下：

点击鼠标时，原本粉色的div变大了，背景变红：

```html
    <style>
        #box1 {
            width: 100px;
            height: 100px;
            background-color: pink;
            cursor: pointer;
        }
    </style>
</head>

<body>

<div id="box1" ></div>

<script type="text/javascript">
    var div1 = document.getElementById("box1");
    //点击鼠标时，原本粉色的div变大了，背景变红了
    div1.onclick = function () {
        div1.style.width = "200px";   //属性值要写引号
        div1.style.height = "200px";
        div1.style.backgroundColor = "red";   //属性名是backgroundColor，不是background-Color
    }
</script>
```

上方代码的注意事项：

- 在js里写属性值时，要用引号
- 在js里写属性名时，是`backgroundColor`，不是CSS里面的`background-Color`。

实现效果如下：

![](http://img.smyhvae.com/20180126_1720.gif)

### onload事件

> onload事件比较特殊，这里单独讲一下。

**当页面加载（文本和图片）完毕的时候，触发onload事件。**

举例：

```html
<script type="text/javascript">
    window.onload = function () {
        console.log("smyhvae");  //等页面加载完毕时，打印字符串
    }
</script>
```

有一点我们要知道：**js的加载是和html同步加载的**。因此，如果使用元素在定义元素之前，容易报错。这个时候，onload事件就能派上用场了，我们可以把使用元素的代码放在onload里，就能保证这段代码是最后执行。

建议是：整个页面上所有元素加载完毕在执行js内容。所以，window.onload可以预防使用标签在定义标签之前。

### 事件举例：京东顶部广告栏

![](http://img.smyhvae.com/20180122_1020.png)

比如上面这张图，当鼠标点击右上角的`X`时，关掉整个广告栏，这就要用到事件。

代码实现如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .top-banner {
            background-color: pink;
            height: 80px;
        }
        .w {
            width: 1210px;
            margin: 10px auto;
            position: relative;
        }
        img {
            display: block;
            width: 1210px;
            height: 80px;
            background-color: blue;
        }
        a {
            position: absolute;
            top: 5px;
            right: 5px;
            color: #fff;
            background-color: #000;
            text-decoration: none;
            width: 20px;
            height: 20px;
            font: 700 14px/20px "simsum";
            text-align: center;
        }
        .hide {
            display: none!important;
        }
    </style>
</head>
<body>
    <div class="top-banner" id="topBanner">
        <div class="w">
            <img src="" alt=""/>
            <a href="#" id="closeBanner">×</a>
        </div>
    </div>


<script>
    //需求：点击案例，隐藏盒子。
    //思路：点击a链接，让top-banner这个盒子隐藏起来（加隐藏类名）。

    //1.获取事件源和相关元素
    var closeBanner = document.getElementById("closeBanner");
    var topBanner = document.getElementById("topBanner");
    //2.绑定事件
    closeBanner.onclick = function () {
        //3.书写事件驱动程序
        //类控制
//        topBanner.className += " hide"; //保留原类名，添加新类名
        topBanner.className = "hide";//替换旧类名（方式一）
//        topBanner.style.display = "none"; //方式二：与上一行代码的效果相同
    }

</script>
</body>
</html>

```

注意最后一行代码，这种方式会替换旧类名，意思是，不管之前的类名叫什么，都会被修改。

### 事件举例：

要求实现效果：当鼠标悬停在img上时，更换为另外一张图片；鼠标离开时，还原为本来的图片。

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script>
        //window.onload页面加载完毕以后再执行此代码
        window.onload = function () {
            //需求：鼠标放到img上，更换为另一张图片，也就是修改路径（src的值）。
            //步骤：
            //1.获取事件源
            //2.绑定事件
            //3.书写事件驱动程序

            //1.获取事件源
            var img = document.getElementById("box");
            //2.绑定事件(悬停事件：鼠标进入到事件源中，立即触发事件)
            img.onmouseover = function () {
                //3.书写事件驱动程序(修改src)
                img.src = "image/jd2.png";
//                this.src = "image/jd2.png";
            }

            //2.绑定事件(悬停事件：鼠标进入到事件源中，立即触发事件)
            img.onmouseout = function () {
                //3.书写事件驱动程序(修改src)
                img.src = "image/jd1.png";
            }
        }
    </script>
</head>
<body>

<img id="box" src="image/jd1.png" style="cursor: pointer;border: 1px solid #ccc;"/>

</html>
```


## DOM的介绍

### 什么是DOM

DOM：Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

DOM就是由节点组成的。

### 解析过程

HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树，getElementById是获取内中DOM上的元素节点。然后操作的时候修改的是该元素的**属性**。

### DOM树（一切都是节点）

DOM的数据结构如下：

![](http://img.smyhvae.com/20180126_2105.png)

上图可知，**在HTML当中，一切都是节点**：（非常重要）

- **元素节点**：HMTL标签。

- **文本节点**：标签中的文字（比如标签之间的空格、换行）

- **属性节点**：：标签的属性。

整个html文档就是一个文档节点。所有的节点都是Object。

### DOM可以做什么

- 找对象（元素节点）

- 设置元素的属性值

- 设置元素的样式

- 动态创建和删除元素

- 事件的触发响应：事件源、事件、事件的驱动程序


## DOM节点的获取

DOM节点的获取方式其实就是**获取事件源的方式**，在上一段已经讲到。这里再重复一下。

操作元素节点，必须首先找到该节点。有三种方式可以获取DOM节点：

```javascript
    var div1 = document.getElementById("box1");      //方式一：通过id获取单个标签

	var arr1 = document.getElementsByTagName("div1");     //方式二：通过 标签名 获得 标签数组，所以有s

	var arr2 = document.getElementsByClassName("hehe");  //方式三：通过 类名 获得 标签数组，所以有s
```

既然方式二、方式三获取的是标签数组，那么习惯性是**先遍历之后再使用**。

特殊情况：数组中的值只有1个。即便如此，这一个值也是包在数组里的。这个值的获取方式如下：

```javascript
	document.getElementsByTagName("div1")[0];    //取数组中的第一个元素

	document.getElementsByClassName("hehe")[0];  //取数组中的第一个元素
```

## DOM访问关系的获取

DOM的节点并不是孤立的，因此可以通过DOM节点之间的相对关系对它们进行访问。如下：

![](http://img.smyhvae.com/20180126_2140.png)

节点的访问关系，是以**属性**的方式存在的。

JS中的**父子兄**访问关系：

![](http://img.smyhvae.com/20180126_2145.png)

这里我们要重点知道**parentNode**和**children**这两个属性的用法。下面分别介绍。

### 获取父节点

调用者就是节点。一个节点只有一个父节点，调用方式就是

```javascript
	节点.parentNode
```


### 获取兄弟节点

**1、下一个节点 | 下一个元素节点**：

> Sibling的中文是**兄弟**。

（1）nextSibling：

- 火狐、谷歌、IE9+版本：都指的是下一个节点（包括标签、空文档和换行节点）。

- IE678版本：指下一个元素节点（标签）。

（2）nextElementSibling：

- 火狐、谷歌、IE9+版本：都指的是下一个元素节点（标签）。

**总结**：为了获取下一个**元素节点**，我们可以这样做：在IE678中用nextSibling，在火狐谷歌IE9+以后用nextElementSibling，于是，综合这两个属性，可以这样写：

```javascript
	下一个兄弟节点 = 节点.nextElementSibling || 节点.nextSibling
```

**2、前一个节点 | 前一个元素节点**：

> previous的中文是：前一个。

（1）previousSibling：

- 火狐、谷歌、IE9+版本：都指的是前一个节点（包括标签、空文档和换行节点）。

- IE678版本：指前一个元素节点（标签）。

（2）previousElementSibling：

- 火狐、谷歌、IE9+版本：都指的是前一个元素节点（标签）。

**总结**：为了获取前一个**元素节点**，我们可以这样做：在IE678中用previousSibling，在火狐谷歌IE9+以后用previousElementSibling，于是，综合这两个属性，可以这样写：

```javascript
	前一个兄弟节点 = 节点.previousElementSibling || 节点.previousSibling
```


**3、补充：**获得任意一个兄弟节点：

```javascript
	节点自己.parentNode.children[index];  //随意得到兄弟节点
```

### 获取单个的子节点

**1、第一个子节点 | 第一个子元素节点**：

（1）firstChild：

- 火狐、谷歌、IE9+版本：都指的是第一个子节点（包括标签、空文档和换行节点）。

- IE678版本：指第一个子元素节点（标签）。

（2）firstElementChild：

- 火狐、谷歌、IE9+版本：都指的是第一个子元素节点（标签）。

**总结**：为了获取第一个**子元素节点**，我们可以这样做：在IE678中用firstChild，在火狐谷歌IE9+以后用firstElementChild，于是，综合这两个属性，可以这样写：

```javascript
	第一个子元素节点 = 节点.firstElementChild || 节点.firstChild
```

**2、最后一个子节点 | 最后一个子元素节点**：

（1）lastChild：

- 火狐、谷歌、IE9+版本：都指的是最后一个子节点（包括标签、空文档和换行节点）。

- IE678版本：指最后一个子元素节点（标签）。

（2）lastElementChild：

- 火狐、谷歌、IE9+版本：都指的是最后一个子元素节点（标签）。

**总结**：为了获取最后一个**子元素节点**，我们可以这样做：在IE678中用lastChild，在火狐谷歌IE9+以后用lastElementChild，于是，综合这两个属性，可以这样写：

```javascript
	最后一个子元素节点 = 节点.lastElementChild || 节点.lastChild
```

### 获取所有的子节点

（1）**childNodes**：标准属性。返回的是指定元素的**子节点**的集合（包括元素节点、所有属性、文本节点）。是W3C的亲儿子。

- 火狐 谷歌等高本版会把换行也看做是子节点。

用法：

```javascript
	子节点数组 = 父节点.childNodes;   //获取所有节点。
```

（2）**children**：非标准属性。返回的是指定元素的**子元素节点**的集合。【重要】

- 它只返回HTML节点，甚至不返回文本节点。
- 在IE6/7/8中包含注释节点（在IE678中，注释节点不要写在里面）。

虽然不是标准的DOM属性，但它和innerHTML方法一样，得到了几乎所有浏览器的支持。

用法：（**用的最多**）

```javascript
	子节点数组 = 父节点.children;   //获取所有节点。用的最多。
```


## DOM节点的操作（重要）

上一段的内容：节点的**访问关系**都是**属性**。

本段的内容：节点的**操作**都是**函数**（方法）。

### 创建节点

格式如下：

```javascript
	新的标签(元素节点) = document.createElement("标签名");
```

比如，如果我们想创建一个li标签，或者是创建一个不存在的adbc标签，可以这样做：

```html
<script type="text/javascript">
    var a1 = document.createElement("li");   //创建一个li标签
    var a2 = document.createElement("adbc");   //创建一个不存在的标签

    console.log(a1);
    console.log(a2);

    console.log(typeof a1);
    console.log(typeof a2);
</script>
```

打印结果：

![](http://img.smyhvae.com/20180127_1135.png)

### 插入节点

插入节点有两种方式，它们的含义是不同的。

方式1：

```javascript
	父节点.appendChild(新的子节点);
```

解释：父节点的最后插入一个新的子节点。

方式2：

```javascript
	父节点.insertBefore(新的子节点,作为参考的子节点)
```

解释：

- 在参考节点前插入一个新的节点。
- 如果参考节点为null，那么他将在父节点里面的最后插入一个子节点。

![](http://img.smyhvae.com/20180127_1257.png)

我们可以看到，li标签确实被插入到了box1标签的里面，和box2并列了。

方式2的举例：

![](http://img.smyhvae.com/20180127_1302.png)

我们可以看到，b1标签被插入到了box1标签的里面，和a1标签并列，在a1标签的前面。




**特别强调：**

关于方式1的appendChild方法，这里要强调一下。比如，现在有下面这样一个div结构：

```html
<div class="box11">
    <div class="box12">生命壹号</div>
</div>

<div class="box21">
    <div class="box22">永不止步</div>

</div>
```


上方结构中，子盒子box12是在父亲box11里的，子盒子box22是在父亲box21里面的。现在，如果我调用方法`box11.appendChild(box22)`，**最后产生的结果是：box22会跑到box11中**（也就是说，box22不在box21里面了）。这是一个很神奇的事情：

20180129_2125.png



### 删除节点

格式如下：

```javascript
	父节点.removeChild(子节点);
```

解释：**用父节点删除子节点**。必须要指定是删除哪个子节点。

如果我想删除自己这个节点，可以这么做：

```javascript
	node1.parentNode.removeChild(node1);
```

### 复制节点（克隆节点）

格式如下：

```javascript
	要复制的节点.cloneNode();       //括号里不带参数和带参数false，效果是一样的。

	要复制的节点.cloneNode(true);
```

括号里带不带参数，效果是不同的。解释如下：

- 不带参数/带参数false：只复制节点本身，不复制子节点。

- 带参数true：既复制节点本身，也复制其所有的子节点。

## 设置节点的属性

我们可以获取节点的属性值、设置节点的属性值、删除节点的属性。

我们就统一拿下面这个标签来举例：

```html
	<img src="images/1.jpg" class="image-box" title="美女图片" alt="地铁一瞥" id="a1">
```

下面分别介绍。

### 1、获取节点的属性值

方式1：

```javascript
	元素节点.属性;
	元素节点[属性];
```

举例：（获取节点的属性值）

```html
<body>
<img src="images/1.jpg" class="image-box" title="美女图片" alt="地铁一瞥" id="a1">

<script type="text/javascript">
    var myNode = document.getElementsByTagName("img")[0];

    console.log(myNode.src);
    console.log(myNode.className);    //注意，是className，不是class
    console.log(myNode.title);

    console.log("------------");

    console.log(myNode["src"]);
    console.log(myNode["className"]); //注意，是className，不是class
    console.log(myNode["title"]);
</script>
</body>
```

上方代码中的img标签，有各种属性，我们可以逐一获取，打印结果如下：

![](http://img.smyhvae.com/20180127_1340.png)

方式2：

```javascript
	元素节点.getAttribute("属性名称");
```

举例：

```javascript
    console.log(myNode.getAttribute("src"));
    console.log(myNode.getAttribute("class"));   //注意是class，不是className
    console.log(myNode.getAttribute("title"));
```

打印结果：

![](http://img.smyhvae.com/20180127_1345.png)

方式1和方式2的区别在于：前者是直接操作标签，后者是把标签作为DOM节点。推荐方式2。

### 2、设置节点的属性值

方式1举例：（设置节点的属性值）

```javascript
    myNode.src = "images/2.jpg"   //修改src的属性值
    myNode.className = "image2-box";  //修改class的name
```

方式2：

```javascript
	元素节点.setAttribute(属性名, 新的属性值);
```

方式2举例：（设置节点的属性值）

```javascript
    myNode.setAttribute("src","images/3.jpg");
    myNode.setAttribute("class","image3-box");
    myNode.setAttribute("id","你好");
```


### 3、删除节点的属性

格式：

```javascript
	元素节点.removeAttribute(属性名);
```

举例：（删除节点的属性）

```javascript
    myNode.removeAttribute("class");
    myNode.removeAttribute("id");
```



**总结：**

获取节点的属性值和设置节点的属性值，都有两种方式，但这两种方式是有区别的。

- 方式一的`元素节点.属性`和`元素节点[属性]`:绑定的属性值不会出现在标签上。

- 方式二的`get/set/removeAttribut`: 绑定的属性值会出现在标签上。

这其实很好理解，方式一操作的是属性而已，方式二操作的是标签本身。

另外，需要注意的是：**这两种方式不能交换使用**，get值和set值必须使用用一种方法。

举例：

```html
<body>
<div id="box" title="主体" class="asdfasdfadsfd">我爱你中国</div>
<script>

    var div = document.getElementById("box");

    //采用方式一进行set
    div.aaaa = "1111";
    console.log(div.aaaa);    //打印结果：1111。可以打印出来，但是不会出现在标签上

    //采用方式二进行set
    div.setAttribute("bbbb","2222");    //bbbb作为新增的属性，会出现在标签上

    console.log(div.getAttribute("aaaa"));   //打印结果：null。因为方式一的set，无法采用方式二进行get。
    console.log(div.bbbb);                   //打印结果：undefined。因为方式二的set，无法采用方式一进行get。

</script>
</body>
```



## DOM对象的属性

DOM对象的属性和HTML的标签属性几乎是一致的。例如：src、title、className、href等。

### innerHTML和innerText的区别

- value：标签的value属性。

- **innerHTML**：双闭合标签里面的内容（识别标签）。

- **innerText**：双闭合标签里面的内容（不识别标签）。（老版本的火狐用textContent）


**获取内容举例：**

如果我们想获取innerHTML和innerText里的内容，看看会如何：

![](http://img.smyhvae.com/20180127_1652.png)

上图显示，因为innerText识别不出标签，所以把标签也给获取到了。


**修改内容举例：**

![](http://img.smyhvae.com/20180127_1657.png)

上图显示，因为innerText识别不出标签，所以把标签也给添加进去了。

### nodeType属性

这里讲一下nodeType属性。

- **nodeType == 1  表示的是元素节点**（标签） 。记住：元素就是标签。

- nodeType == 2  表示是属性节点。

- nodeType == 3  是文本节点。

### nodeType、nodeName、nodeValue

我们那下面这个标签来举例：

```html
<div id="box" value="111">
    生命壹号
</div>
```

上面这个标签就包含了三种节点：

- 元素节点（标签）

- 属性节点

- 文本节点

获取这三个节点的方式如下：

```javascript
    var element = document.getElementById("box1");  //获取元素节点（标签）
    var attribute = element.getAttributeNode("id"); //获取box1的属性节点
    var txt = element.firstChild;                   //获取box1的文本节点

    var value = element.getAttribute("id");         //获取id的属性值

    console.log(element);
    console.log("--------------");
    console.log(attribute);
    console.log("--------------");
    console.log(txt);
    console.log("--------------");
    console.log(value);
```

打印结果如下：

![](http://img.smyhvae.com/20180128_1935.png)

既然这三个都是节点，如果我想获取它们的nodeType、nodeName、nodeValue，代码如下：

```javascript
    var element = document.getElementById("box1");  //获取元素节点（标签）
    var attribute = element.getAttributeNode("id"); //获取box1的属性节点
    var txt = element.firstChild;                   //获取box1的文本节点

    //获取nodeType
    console.log(element.nodeType);       //1
    console.log(attribute.nodeType);     //2
    console.log(txt.nodeType);           //3

    console.log("--------------");

    //获取nodeName
    console.log(element.nodeName);       //DIV
    console.log(attribute.nodeName);     //id
    console.log(txt.nodeName);           //#text

    console.log("--------------");

    //获取nodeValue
    console.log(element.nodeValue);     //null
    console.log(attribute.nodeValue);   //box1
    console.log(txt.nodeValue);         //生命壹号
```

打印结果如下：

![](http://img.smyhvae.com/20180128_1939.png)


## 我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
