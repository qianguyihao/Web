## 主要内容
 - CSS的单位
 - 字体属性
 - 文本属性
 - 背景属性
 - 列表属性
 - 盒子模型
 - 定位属性：position、float、overflow、z-index等
 - 导航栏的制作
 - 鼠标的属性cursor
 - 滤镜的介绍
	
## CSS的单位
html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。
<font color="#0000FF">**CSS中的单位是必须要写的**，因为它没有默认单位。</font>
 - **绝对单位：**1 `in`=2.54`cm`=25.4`mm`=72`pt`=6`pc`。
各种单位的含义：
`in`：英寸Inches (1 英寸 = 2.54 厘米)
`cm`：厘米Centimeters
`mm`：毫米Millimeters
`pt`：点Points，或者叫英镑 (1点 = 1/72英寸)
`pc`：皮卡Picas (1 皮卡 = 12 点)

 - **相对单位：**
`px`：像素 
`em`：印刷单位相当于12个点
`%`：百分比，相对周围的文字的大小

为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。

百分比`%`这个相对单位要怎么用呢？这里也举个例子：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-17.png)


## 字体属性

css样式中，常见的字体属性有以下几种：
```html
p{
	font-size:50px; 		/*字体大小*/
	font-style:italic ;		/*斜体*/
	font-weight:bold;	/*粗体：属性值写成bolder也可以*/
	font-family:幼圆,黑体; 	/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
	font-variant:small-caps;  /*小写变大写*/
}
```
另外还有一个`font`属性，它是一个简写属性。指的是：可以将上面的多个属性写在一个声明里面，个人不太喜欢这种写法。

## 文本属性

CSS样式中，常见的文本属性有以下几种：
 - `letter-spacing:0.5cm ;`  单个字母之间的间距
 - `word-spacing:1cm;`   单词之间的间距
 - `text-decoration:overline;` 字体修饰：underline下划线、line-through中划线、overline上划线
 - `text-transform:lowercase;`  单词字体大小写。uppercase大写、lowercase小写
 - `color:red;` 字体颜色 
 - `text-align="属性值;"` 在当前容器中的对齐的方式。属性值可以是：left、right、center（<font color="#0000FF">**在当前容器的中间**</font>）、justify 
 - `text-transform:lowercase;` 单词的字体大小写。属性值可以是：`uppercase`（单词大写）、`lowercase`（单词小写）、`capitalize`（每个单词的首字母大写）

这里来一张表格的图片吧，一览无遗：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-18.png)

## 背景属性

CSS样式中，常见的背景属性有以下几种：（经常用到，要记住）








现在，我们把上面的比较重要的属性挑选出来，如下：

- `background-color:#ff99ff;`  设置元素的背景颜色。

- `background-image:url(images/2.gif);` 将图像设置为背景。

- `background-position:center top;` 设置背景图片在当前容器中的位置。

- `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。
属性值可以是：`scroll`（背景图片不动）、`fixed`（背景图片跟着滚动条一起移动）。注意属性值的含义不要搞反了，它的含义是根据滚动条来定义的。

- 另外还有一个简写属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

上面这几个属性经常用到，需要记住。现在我们逐个进行讲解。


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

其实这种属性的作用还是很广的。举个例子，设计师设计一张宽度只有1px、颜色纵向渐变的图片，然后我们通过这个属性将其进行水平方向的平铺，就可以看到整个页面都是渐变的了。在搜索引擎上搜“平铺背景”，就可以发现，周期性的图片可以采用此种方法进行平铺。

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

20170812_1643.png

20170812_1645.png


**2、用单词描述属性值：**

格式如下：

```
	background-position: 描述左右的词 描述上下的词;
```

- 描述左右的词：left、center、right
- 描述上下的词：top 、center、bottom

比如说，`right center`表示将图片放到右边的中间；`center center`表示将图片放到正中间。

位置属性有很多使用场景的。我们来举两个例子。

场景1：（大背景图）

打开“暗黑3 台湾”的官网<https://tw.battle.net/d3/zh/>，可以看到官网的效果是比较炫的：

20170812_1945.png

检查网页后，找到网站背景图片的url：<https://tw.battle.net/d3/static/images/layout/bg-repeat.jpg>。背景图如下：

20170812_1950.jpg

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

20170813_1102.gif

正确的做法是，将banner图作为div的背景图，这样的话，背景图超出div的部分，会自动移溢出。需要给div设置的属性如下：

```css
        div{
            height: 465px;
            background-image: url(http://img.smyhvae.com/20170813_1053.jpg);
            background-position: center top;
            background-repeat: no-repeat;
        }
```

上方代码中，我们给div设置height（高度为banner图的高度），不需要设置宽度（因为宽度会霸占整行）。效果如下：

20170813_1119.gif

上图可以看出，将banner图作为div的背景后，banner图会永远处于网页的正中间（水平方向）。



### background-attachment属性

- `background-attachment:scroll;` 设置背景图片是否固定。属性值可以是：
	- `fixed`（背景就会被固定住，不会被滚动条滚走）。
	- `scroll`（与fixed属性相反，默认属性）


`background-attachment:fixed;`的效果如下：

20170813_1158.gif



### background综合属性

background属性和border一样，是一个综合属性，可以将多个属性写在一起。

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

20170813_1515.png


PS：以后的CSS3内容中，将学习更多background属性： background-origin、background-clip、background-size（在CSS2.1背景图片是不能调整尺寸，IE9开始兼容）、多背景。




## 列表属性


```html
ul li{
	list-style-image:url(images/2.gif) ;  /*列表项前设置为图片*/
	margin-left:80px;  /*公有属性*/
}
```

另外还有一个简写属性叫做`list-style`，它的作用是：将上面的多个属性写在一个声明中。

我们来看一下`list-style-image`属性的效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-23.png)

给列表前面的图片加个边距吧，不然显示不完整：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-24.png)

这里来一张表格的图片吧，一览无遗：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-26.png)

## 盒子模型（重要）

之前我们是把标签看做是一个对象。从现在开始，我们要把标签理解成一个盒子。

标准盒子模型：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-27.jpg)

IE盒子模型：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-30.jpg)

上图显示：





 - 在 CSS 盒子模型 (Box Model) 规定了元素处理元素的几种方式：  <font color="#0000FF">**内容、内边距、边框、外边距**</font>。
 - 在 CSS的<font color="#0000FF">**标准盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域**</font>的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。<font color="#0000FF">**IE盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域+border+padding**</font>的宽度和高度。
 注：Android中也有margin和padding的概念，意思是差不多的，如果你会一点Android，应该比较好理解吧。区别在于，Android中没有bording这个东西，而且在Android中，margin并不是控件的一部分，我觉得这样做更合理一些，呵呵。
<br>

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-29.jpg)

例如，上图所示：假设框的每个边上有10个像素的外边距和5个像素的内边距。如果希望这个元素框达到100个像素，就需要将内容的宽度设置为70像素。



`<body>`标签有必要强调一下。很多人以为`<body>`标签占据的是整个页面的全部区域，其实是错误的，正确的理解是这样的：整个网页最大的盒子是`<document>`，即浏览器。而`<body>`是`<document>`的儿子。浏览器给`<body>`默认的margin大小是8个像素，此时`<body>`占据了整个页面的一大部分区域，而不是全部区域。来看一段代码。

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		div{
			width: 100px;
			height: 100px;
			border: 1px solid red;
			padding: 20px;
			margin: 30px;
		}

	</style>

 </head>
 
 <body>

	<div>有生之年</div>
	<div>狭路相逢</div>

 </body>

</html>

```
上面的代码中，我们对div标签设置了边距等信息。打开google浏览器，按住F12，显示效果如下：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-27.png)

补充一下，如果我在css样式中这样写：
```html
padding:20 30 40 50;
```
上方代码的设置边距的顺序是：上、右、下、左（顺时针方向）。margin的道理是一样的。


## 定位属性(position,float,overflow,z-index)

在讲之前，有个概念叫顺序流，需要强调一下。

<font color="#0000FF">**顺序流**</font>：所有的标签的初始排列顺序就称为顺序流。

有两种情况会脱离本身的顺序流：
 - 1、控件的位置设置为绝对定位。
 - 2、设置控件的float属性。

### 1、pisition属性：

定位属性position的属性值可以是absolute、relative。

position定位分为绝对定位和相对定位：
 - `position:absolute;`  <font color="#0000FF">**绝对定位**</font>：定义横纵坐标，原点在父容器的左上角。<font color="#0000FF">**脱离了本身的顺序流**</font>。横坐标用left表示，纵坐标用top表示。


绝对定位的举例：

```html
	<style type="text/css">
		div{
				position: absolute;/*绝对定位*/
					left: 10px;/*横坐标*/
					top: 20px;/*纵坐标*/
		}
	</style>
```

- `position:relative;`  <font color="#0000FF">**相对定位**</font>：相对于自己原来的位置。

相对定位的举例：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		body{
			margin: 0px;
		}

		#div1{
			width: 200px;
			height: 200px;
			border: 1px solid red;
		}

		#div2{
			position: relative;/*相对定位：相对于自己原来的位置*/
				left: 50px;/*横坐标：正值表示向右偏移，负值表示向左偏移*/
				top: 50px;/*纵坐标：正值表示向下偏移，负值表示向上偏移*/

			width: 200px;
			height: 200px;
			border: 1px solid red;	
		}
	</style>
 </head>

 <body>

	<div id="div1">有生之年</div>
	<div id="div2">狭路相逢</div>

 </body>

</html>
```

效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-28.png)


### 2、float属性：浮动

`float`属性会让元素脱离原来的顺序流，它的属性值可以是：
 - `none`：默认值，对象不漂浮
 - `left`：文本流向对象的右边
 - `right`：文本流向对象的左边

举例：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-29.png)

我们知道，在默认情况下，两个div标签是上下进行排列的。现在由于float属性让上图中的两个`<div>`标签出现了浮动，于是这里两个标签在另外一个层面上水平排列了。而`<p>`标签还在自己的层面上遵从顺序流进行排列。

### 3、clear属性：禁止浮动

`clear`属性的属性值可以是：
 - `none`：默认值，允许两边都可以有浮动对象
 - `left`：不允许左边有浮动对象
 - `right`：不允许右边有浮动对象
 - `both`：不允许有浮动对象

### 4、overflow属性：超出范围的内容要怎么处理

`overflow`属性的属性值可以是：
 - `auto`：浏览器自己解决。在必需时裁切对象多余的内容或显示滚动条。一般采用这个属性值。
 - `visible`：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。
 - `hidden`：不显示超过对象尺寸的内容。
对象将以包含对象的 window 或 frame 的尺寸进行裁切，并且 clip 属性设置将失效。 
 - `scroll`：总是显示滚动条。

针对上面的不同的属性值，我们来看一下效果：
举例：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		div{
			width: 100px;
			height: 100px;
			background-color: #00cc66;
			margin-right: 100px;
			float: left;
		}

		#div1{
			overflow:auto;/*超出的部分让浏览器自行解决*/
		}
		#div2{
			overflow:visible;/*超出的部分会显示出来*/
		}

		#div3{
			overflow:hidden;/*超出的部分将剪切掉*/
		}

	</style>

 </head>

 <body>

	<div id="div1">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
	<div id="div2">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
	<div id="div3">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
 </body>

</html>
```

效果：
![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-31.png)




### 5、z-index属性：属性值大的位于上层，属性值小的位于下层

这句话可能比较难理解。我们来看例子吧。

这是默认情况下的例子：（div2在上层，div1在下层）

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-32.png)

现在加一个`z-index`属性，要求效果如下：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-33.png)


## 鼠标的属性cursor

鼠标的属性`cursor`有以下几个属性值：
 - `auto`：默认值。浏览器根据当前情况自动确定鼠标光标类型。 
 - `pointer`：IE6.0，竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。 
 - `hand`：和`pointer`的作用一样：竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。

比如说，我想让鼠标放在那个标签上时，光标显示手状，代码如下：
```html
p:hover{
	cursor: pointer;
}
```

另外还有以下的属性：（不用记，需要的时候查一下就行了）
all-scroll      :　 IE6.0  有上下左右四个箭头，中间有一个圆点的光标。用于标示页面可以向上下左右任何方向滚动。 
col-resize      :　 IE6.0  有左右两个箭头，中间由竖线分隔开的光标。用于标示项目或标题栏可以被水平改变尺寸。 
crosshair       :　  简单的十字线光标。 
default         :　  客户端平台的默认光标。通常是一个箭头。 
hand            :　  竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。 
move            :　  十字箭头光标。用于标示对象可被移动。 
help            :　  带有问号标记的箭头。用于标示有帮助信息存在。 
no-drop         :　 IE6.0  带有一个被斜线贯穿的圆圈的手形光标。用于标示被拖起的对象不允许在光标的当前位置被放下。 
not-allowed     :　 IE6.0  禁止标记(一个被斜线贯穿的圆圈)光标。用于标示请求的操作不允许被执行。 
progress        :　 IE6.0  带有沙漏标记的箭头光标。用于标示一个进程正在后台运行。 
row-resize      :　 IE6.0  有上下两个箭头，中间由横线分隔开的光标。用于标示项目或标题栏可以被垂直改变尺寸。 
text            :　  用于标示可编辑的水平文本的光标。通常是大写字母 I 的形状。 
vertical-text   :　 IE6.0  用于标示可编辑的垂直文本的光标。通常是大写字母 I 旋转90度的形状。 
wait            :　  用于标示程序忙用户需要等待的光标。通常是沙漏或手表的形状。 
*-resize        :　  用于标示对象可被改变尺寸方向的箭头光标。
                     w-resize | s-resize | n-resize | e-resize | ne-resize | sw-resize | se-resize | nw-resize 
url ( url )     :　 IE6.0  用户自定义光标。使用绝对或相对 url 地址指定光标文件(后缀为 .cur 或者 .ani )。 

## 滤镜

这里只举一个滤镜的例子吧。比如说让图片变成灰度图的效果，可以这样设置滤镜：

```html
	<img src="3.jpg" style="filter:gray()">
```

举例代码：

```html
 <body>
	<table>
		<tr>
			<td>原始图片</td>
			<td>图片加入黑白效果</td>
		</tr>
	<tr>
		<td><img src="3.jpg"></td>
		<td><img src="3.jpg" style="filter:gray()"></td> /*滤镜：设置图片为灰白效果*/
	</tr>
	</table>
 </body>
```

效果如下：（IE有效果，google浏览器无效果）

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-36.png)

**延伸：**
滤镜本身是平面设计中的知识。如果你懂一点PS的话···打开PS看看吧：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-38.png)

爆料一下，表示博主有两年多的平面设计经验，我做设计的时间其实比写代码的时间要长，嘿嘿···




## 导航栏的制作（本段内容忽略）

现在，我们利用float浮动属性来把无序列表做成一个简单的导航栏吧，效果如下：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-34.png)

代码：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  
	<style type="text/css">
		ul{
			list-style: none;/*去掉列表前面的圆点*/
			width: 420px;
			height: 60px;
			background-color: black;/*设置整个导航栏的背景为灰色*/
		}

		li{
			float: left;/*平铺*/
			margin-right: 30px;
			margin-top: 16px;
		}

		a{
			text-decoration: none;/*去掉超链的下划线*/
			font-size: 20px;
			color: #BBBBBB;/*设置超链的字体为黑色*/
			font-family:微软雅黑;
		}

	</style>

 </head>
 <body>
	<ul>
		<li><a href="">博客园</a></li>
		<li><a href="">新随笔</a></li>
		<li><a href="">联系</a></li>
		<li><a href="">订阅</a></li>
		<li><a href="">管理</a></li>

	</ul>
 </body>
</html>
```

实现效果如下：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-35.png)

国庆这四天，连续写了四天的博客，白天和黑夜，从未停歇，只交替没交换，为的就是这每日一发。以后会不断更新的。

##我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://7sby7r.com1.z0.glb.clouddn.com/cnblogs/%E7%94%9F%E5%91%BD%E5%9B%A2%E9%98%9F%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg)