


> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8512617.html)，并在[GitHub](https://github.com/smyhvae/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。



## 题目：谈一谈你对CSS盒模型的认识

专业的面试，一定会问 CSS 盒模型。对于这个题目，我们要回答一下几个方面：

（1）基本概念：content、padding、margin。

（2）标准盒模型、IE盒模型的区别。不要漏说了IE盒模型，通过这个问题，可以筛选一部分人。

（3）CSS如何设置这两种模型（即：如何设置某个盒子为其中一个模型）？如果回答了上面的第二条，还会继续追问这一条。

（4）JS如何设置、获取盒模型对应的宽和高？这一步，已经有很多人答不上来了。

（5）实例题：根据盒模型解释**边距重叠**。

前四个方面是逐渐递增，第五个方面，却鲜有人知。

（6）BFC（边距重叠解决方案）或IFC。

如果能回答第五条，就会引出第六条。BFC是面试频率较高的。

**总结**：以上几点，从上到下，知识点逐渐递增，知识面从理论、CSS、JS，又回到CSS理论。

接下来，我们把上面的六条，依次讲解。


## 标准盒模型和IE盒子模型


标准盒子模型：

![](http://img.smyhvae.com/2015-10-03-css-27.jpg)

IE盒子模型：

![](http://img.smyhvae.com/2015-10-03-css-30.jpg)

上图显示：


在 CSS 盒子模型 (Box Model) 规定了元素处理元素的几种方式：


- width和height：**内容**的宽度、高度（不是盒子的宽度、高度）。
- padding：内边距。
- border：边框。
- margin：外边距。

CSS盒模型和IE盒模型的区别：

 - 在 <font color="#0000FF">**标准盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域**</font>的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

 - <font color="#0000FF">**IE盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域+border+padding**</font>的宽度和高度。



## CSS如何设置这两种模型


代码如下：


```javascript
    /* 设置当前盒子为 标准盒模型（默认） */
    box-sizing: content-box;

    /* 设置当前盒子为 IE盒模型 */
    box-sizing: border-box;
```


备注：盒子默认为标准盒模型。


## JS如何设置、获取盒模型对应的宽和高


### 方式一：通过DOM节点的 style 样式获取


```javascript
	element.style.width/height;
```

缺点：通过这种方式，只能获取**行内样式**，不能获取`内嵌`的样式和`外链`的样式。

这种方式有局限性，但应该了解。



### 方式二（通用型）


```javascript
    window.getComputedStyle(element).width/height;
```


方式二能兼容 Chrome、火狐。是通用型方式。


### 方式三（IE独有的）


```javascript
	element.currentStyle.width/height;
```

和方式二相同，但这种方式只有IE独有。获取到的即时运行完之后的宽高（三种css样式都可以获取）。


### 方式四


```javascript
	element.getBoundingClientRect().width/height;
```

此 api 的作用是：获取一个元素的绝对位置。绝对位置是视窗 viewport 左上角的绝对位置。

此 api 可以拿到四个属性：left、top、width、height。

**总结：**

上面的四种方式，要求能说出来区别，以及哪个的通用型更强。


## margin塌陷/margin重叠


**标准文档流中，竖直方向的margin不叠加，只取较大的值作为margin**(水平方向的margin是可以叠加的，即水平方向没有塌陷现象)。

PS：如果不在标准流，比如盒子都浮动了，那么两个盒子之间是没有margin重叠的现象的。


我们来看几个例子。


### 兄弟元素之间

如下图所示：

![](http://img.smyhvae.com/20170805_0904_2.png)


### 子元素和父元素之间


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>

        * {
            margin: 0;
            padding: 0;
        }

        .father {
            background: green;

        }

        /* 给儿子设置margin-top为10像素 */
        .son {
            height: 100px;
            margin-top: 10px;
            background: red;
        }

    </style>
</head>
<body>
<div class="father">
    <div class="son"></div>
</div>
</body>
</html>

```

上面的代码中，儿子的height是 100px，magin-top 是10px。注意，此时父亲的 height 是100，而不是110。因为儿子和父亲在竖直方向上，共一个margin。

儿子这个盒子：

![](http://img.smyhvae.com/20180305_2216.png)

父亲这个盒子：

![](http://img.smyhvae.com/20180305_2217.png)


上方代码中，如果我们给父亲设置一个属性：`overflow: hidden`，就可以避免这个问题，此时父亲的高度是110px，这个用到的就是BFC（下一段讲解）。


### 善于使用父亲的padding，而不是儿子的margin

> 其实，这一小段讲的内容与上一小段相同，都是讲父子之间的margin重叠。

我们来看一个奇怪的现象。现在有下面这样一个结构：（div中放一个p）

```
	<div>
		<p></p>
	</div>
```

上面的结构中，我们尝试通过给儿子`p`一个`margin-top:50px;`的属性，让其与父亲保持50px的上边距。结果却看到了下面的奇怪的现象：

![](http://img.smyhvae.com/20170806_1537.png)


此时我们给父亲div加一个border属性，就正常了：

![](http://img.smyhvae.com/20170806_1544.png)


如果父亲没有border，那么儿子的margin实际上踹的是“流”，踹的是这“行”。所以，父亲整体也掉下来了。

**margin这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。**

所以，如果要表达父子之间的距离，我们一定要善于使用父亲的padding，而不是儿子的margin。


## BFC（边距重叠解决方案）

### BFC的概念

BFC（Block Formatting Context）：块级格式化上下文。你可以把它理解成一个独立的区域。

另外还有个概念叫IFC。不过，BFC问得更多。

### BFC 的原理/BFC的布局规则【非常重要】

BFC 的原理，其实也就是 BFC 的渲染规则（能说出以下四点就够了）。包括：

- （1）BFC **内部的**子元素，在垂直方向，**边距会发生重叠**。

- （2）BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。（稍后看`举例1`）

- （3）**BFC区域不与旁边的`float box`区域重叠**。（可以用来清除浮动带来的影响）。（稍后看`举例2`）

- （4）计算BFC的高度时，浮动的子元素也参与计算。（稍后看`举例3`）

### 如何生成BFC

有以下几种方法：

- 方法1：overflow: 不为visible，可以让属性是 hidden、auto。【最常用】

- 方法2：浮动中：float的属性值不为none。意思是，只要设置了浮动，当前元素就创建了BFC。

- 方法3：定位中：只要posiiton的值不是 static或者是relative即可，可以是`absolute`或`fixed`，也就生成了一个BFC。

- 方法4：display为inline-block, table-cell, table-caption, flex, inline-flex

参考链接：

- [BFC原理详解](https://segmentfault.com/a/1190000006740129)


- [BFC详解](https://www.jianshu.com/p/bf927bc1bed4)


- [前端精选文摘：BFC 神奇背后的原理](https://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)


下面来看几个例子，看看如何生成BFC。



### BFC 的应用


**举例1：**解决 margin 重叠

当父元素和子元素发生 margin 重叠时，解决办法：**给子元素或父元素创建BFC**。

比如说，针对下面这样一个 div 结构：


```html
<div class="father">
    <p class="son">
    </p>
</div>
```

上面的div结构中，如果父元素和子元素发生margin重叠，我们可以给子元素创建一个 BFC，就解决了：


```html
<div class="father">
    <p class="son" style="overflow: hidden">
    </p>
</div>
```

因为**第二条：BFC区域是一个独立的区域，不会影响外面的元素**。


**举例2**：BFC区域不与float区域重叠：

针对下面这样一个div结构；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>

        .father-layout {
            background: pink;
        }

        .father-layout .left {
            float: left;
            width: 100px;
            height: 100px;
            background: green;
        }

        .father-layout .right {
            height: 150px;  /*右侧标准流里的元素，比左侧浮动的元素要高*/
            background: red;
        }

    </style>
</head>
<body>

<section class="father-layout">
    <div class="left">
        左侧，生命壹号
    </div>
    <div class="right">
        右侧，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，
    </div>
</section>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180306_0825.png)

上图中，由于右侧标准流里的元素，比左侧浮动的元素要高，导致右侧有一部分会跑到左边的下面去。

**如果要解决这个问题，可以将右侧的元素创建BFC**，因为**第三条：BFC区域不与`float box`区域重叠**。解决办法如下：（将right区域添加overflow属性）

```html
    <div class="right" style="overflow: hidden">
        右侧，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，smyhvae，
    </div>
```


![](http://img.smyhvae.com/20180306_0827.png)

上图表明，解决之后，`father-layout`的背景色显现出来了，说明问题解决了。



**举例3：**清除浮动

现在有下面这样的结构：


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>

        .father {
            background: pink;
        }

        .son {
            float: left;
            background: green;
        }

    </style>
</head>
<body>

<section class="father">
    <div class="son">
        生命壹号
    </div>

</section>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180306_0840.png)

上面的代码中，儿子浮动了，但由于父亲没有设置高度，导致看不到父亲的背景色（此时父亲的高度为0）。正所谓**有高度的盒子，才能关住浮动**。

如果想要清除浮动带来的影响，方法一是给父亲设置高度，然后采用隔墙法。方法二是 BFC：给父亲增加 `overflow=hidden`属性即可， 增加之后，效果如下：

![](http://img.smyhvae.com/20180306_0845.png)

为什么父元素成为BFC之后，就有了高度呢？这就回到了**第四条：计算BFC的高度时，浮动元素也参与计算**。意思是，**在计算BFC的高度时，子元素的float box也会参与计算**。



## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)



