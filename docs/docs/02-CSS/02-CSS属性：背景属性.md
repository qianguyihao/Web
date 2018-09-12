

> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8277895.html)，并在[GitHub](https://github.com/smyhvae/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## background系列属性

### 常见背景属性

CSS样式中，常见的背景属性有以下几种：（经常用到，要记住）

- `background-color:#ff99ff;`  设置元素的背景颜色。

- `background-image:url(images/2.gif);` 将图像设置为背景。

-  `background-repeat: no-repeat;`  设置背景图片是否重复及如何重复，默认平铺满。（重要）
	- `no-repeat`不要平铺；
	- `repeat-x`横向平铺；
	- `repeat-y`纵向平铺。

- `background-position:center top;` 设置背景图片在当前容器中的位置。

- `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。
属性值可以是：`scroll`（背景图片不动）、`fixed`（背景图片跟着滚动条一起移动）。注意属性值的含义不要搞反了，它的含义是根据滚动条来定义的。

- 另外还有一个简写属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

上面这几个属性经常用到，需要记住。现在我们逐个进行讲解。


### background-color：背景颜色的表示方法

css2.1中，背景颜色的表示方法有三种：单词、rgb表示法、十六进制表示法。

比如红色可以有下面的三种表示方法：

```
	background-color: red;
	background-color: rgb(255,0,0);
	background-color: #ff0000;
```

下面分别介绍。

**1、用英语单词来表示：**

能够用英语单词来表述的颜色，都是简单颜色。比如红色：

```
background-color: red;
```

**2、rgb表示法：**

rgb表示三原色“红”red、“绿”green、“蓝”blue。

光学显示器中，每个像素都是由三原色的发光原件组成的，靠明亮度不同调成不同的颜色的。r、g、b的值，每个值的取值范围0~255，一共256个值。

比如红色：

```
background-color: rgb(255,0,0);
```

黑色：

```
background-color: rgb(0,0,0);
```

颜色可以叠加，比如黄色就是红色和绿色的叠加：

```
background-color: rgb(255,255,0);
```

**3、十六进制表示法：**

比如红色：

```
background-color: #ff0000;
```

PS:所有用#开头的值，都是16进制的。

这里，我们就要学会16进制与10进制之间的转换。下面举几个例子。

问：16进制中28等于10进制多少？
答：2*16+8 = 40。

16进制中的af等于10进制多少？
答：10 * 16 + 15 = 175

所以，#ff0000就等于rgb(255,0,0)。

`background-color: #123456;`等价于`background-color: rgb(18,52,86);`


**十六进制可以简化为3位，所有#aabbcc的形式，能够简化为#abc**。举例如下：

比如：

```
	background-color:#ff0000;
```

等价于：

```
	background-color:#f00;
```

比如：

```
	background-color:#112233;
```

等价于：

```
	background-color:#123;
```

但是，比如下面这个是无法简化的：

```
	background-color:#222333;
```

再比如，下面这个也是无法简化的：

```
	background-color:#123123;
```

几种常见的颜色简写可以记住。如下：

```
	#000   黑
	#fff   白
	#f00   红
	#222   深灰
	#333   灰
	#ccc   浅灰
```


### `background-repeat`属性（重要）

`background-repeat:no-repeat;`设置背景图片是否重复及如何重复，默认平铺满。属性值可以是：

- `no-repeat`（不要平铺）
- `repeat-x`（横向平铺）
- `repeat-y`（纵向平铺）

这个属性在开发的时候也是经常用到的。我们通过设置不同的属性值来看一下效果吧：

（1）不加这个属性时：（即默认时）（背景图片会被平铺满）

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-19.png)

PS：padding的区域也是有背景图的。

（2）属性值为`no-repeat`（不要平铺）时：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-20.png)

（3）属性值为`repeat-x`（横向平铺）时：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-21.png)

其实这种属性的作用还是很广的。举个例子，设计师设计一张宽度只有1px、颜色纵向渐变的图片，然后我们通过这个属性将其进行水平方向的平铺，就可以看到整个页面都是渐变的了。

在搜索引擎上搜“**平铺背景**”，就可以发现，**周期性的图片**可以采用此种方法进行平铺。

（4）属性值为`repeat-y`（纵向平铺）时：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-22.png)


### `background-position`属性

`background-position`属性指的是**背景定位**属性。公式如下：

在描述属性值的时候，有两种方式：用像素描述、用单词描述。下面分别介绍。

**1、用像素值描述属性值：**

格式如下：

```
	background-position:向右偏移量 向下偏移量;
```

属性值可以是正数，也可以是负数。比如：`100px 200px`、`-50px -120px`。

举例如下：

![](http://img.smyhvae.com/20170812_1643.png)


![](http://img.smyhvae.com/20170812_1645.png)

**2、用单词描述属性值：**

格式如下：

```
	background-position: 描述左右的词 描述上下的词;
```

- 描述左右的词：left、center、right
- 描述上下的词：top 、center、bottom

比如说，`right center`表示将图片放到右边的中间；`center center`表示将图片放到正中间。

比如说，`bottom`表示图片的底边和父亲**底边贴齐**（好好理解）。

位置属性有很多使用场景的。我们来举两个例子。

场景1：（大背景图）

打开“暗黑3 台湾”的官网<https://tw.battle.net/d3/zh/>，可以看到官网的效果是比较炫的：

![](http://img.smyhvae.com/20170812_1945.jpg)

检查网页后，找到网站背景图片的url：<https://tw.battle.net/d3/static/images/layout/bg-repeat.jpg>。背景图如下：

![](http://img.smyhvae.com/20170812_1950.jpg)

实际上，我们是通过把这张图片作为网站的背景图来达到显示效果的。只需要给body标签加如下属性即可：

```
        body{
            background-image: url(/Users/smyhvae/Dropbox/img/20170812_1950.jpg);
            background-repeat: no-repeat;
            background-position: center top;
        }
```

上方代码中，如果没加`background-position`这个属性，背景图会默认处于浏览器的左上角（显得很丑）；加了此属性之后，图片在水平方向就位于浏览器的中间了。

场景2：（通栏banner）

很多网站的首页都会有banner图（网站最上方的全屏大图叫做「**通栏banner**」），这种图要求横向的宽度特别大。比如说，设计师给你一张1920*465的超大banner图，如果我们把这个banner图作为img标签直接插入网页中，会有问题的：首先，图片不在网页的中间；其次，肯定会出现横向滚动条。如下图所示：

![](http://img.smyhvae.com/20170813_1102.gif)

正确的做法是，将banner图作为div的背景图，这样的话，背景图超出div的部分，会自动移溢出。需要给div设置的属性如下：

```css
        div{
            height: 465px;
            background-image: url(http://img.smyhvae.com/20170813_1053.jpg);
            background-position: center top;
            background-repeat: no-repeat;
        }
```

上方代码中，我们给div设置height（高度为banner图的高度），不需要设置宽度（因为宽度会自动霸占整行）。效果如下：

![](http://img.smyhvae.com/20170813_1119.gif)

上图可以看出，将banner图作为div的背景后，banner图会永远处于网页的正中间（水平方向来看）。

### background-attachment属性

- `background-attachment:scroll;` 设置背景图片是否固定。属性值可以是：
	- `fixed`（背景就会被固定住，不会被滚动条滚走）。
	- `scroll`（与fixed属性相反，默认属性）

`background-attachment:fixed;`的效果如下：

![](http://img.smyhvae.com/20170813_1158.gif)

### background 综合属性

background属性和border一样，是一个综合属性，可以将多个属性写在一起。(在[盒子模型](http://www.cnblogs.com/smyhvae/p/7256371.html)这篇文章中专门讲到boder)

举例1:

```
	background:red url(1.jpg) no-repeat 100px 100px fixed;
```

等价于：

```
	background-color:red;
	background-image:url(1.jpg);
	background-repeat:no-repeat;
	background-position:100px 100px;
	background-attachment:fixed;
```

以后，我们可以用小属性层叠掉大属性。

上面的属性中，可以任意省略其中的一部分。

比如说，对于下面这样的属性：

```
	background: blue url(images/wuyifan.jpg) no-repeat 100px 100px;
```

效果如下：

![](http://img.smyhvae.com/20170813_1515.png)


PS：以后的CSS3内容中，我们会接触到更多的background属性： background-origin、background-clip、background-size（在CSS2.1背景图片是不能调整尺寸，IE9开始兼容）、多背景。



## 我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
