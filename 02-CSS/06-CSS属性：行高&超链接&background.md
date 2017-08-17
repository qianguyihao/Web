

## 行高和字号

### 行高

CSS中，所有的行，都有行高。盒模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。


如下图所示：

20170808_2216.png

上图中，我们设置行高为30px，30px * 5 = 150px，通过查看审查元素，这个p标签的高度果然为150px。而且我们发现，我们并没有给这个p标签设置高度，显然是内容将其撑高的。

文字，是在自己的行里面居中的。比如，现在文字字号14px，行高是24px。那么：

20170808_2220.png

为了严格保证字在行里面居中，我们的工程师有一个约定： **行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除。


### 单行文本垂直居中

小技巧：如果一段文本只有一行，如果此时设置**行高 = 盒子高**，就可以保证单行文本垂直居中。这个很好理解。

上面这个小技巧，只适用于单行文本垂直居中，不适用于多行。如果想让多行文本垂直居中，还需要设置盒子的padding。如下：

20170808_2240.png


### font字体属性

**1、字号、行高、字体三大属性：**

（1）字号：

```
	font-size:14px;
```

（2）行高：

```
	line-height:24px;
```
	
（3）字体：（font-family就是“字体”，family是“家庭”的意思）

```
	font-family:"宋体";
```

上面这三个属性，我们可以使用一行代码来实现：（字号 font-size、行高 line-height、字体 font-family）

```
	font: 14px/24px “宋体”;
```



**2、字体属性的说明：**

（1）网页中不是所有字体都能用，因为这个字体要看用户的电脑里面装没装，比如你设置：

```
	font-family: "华文彩云";
```

上方代码中，如果用户电脑里面没有这个字体，那么就会变成宋体。

页面中，中文我们只使用： 微软雅黑、宋体、黑体。 如果页面中，需要其他的字体，那么需要切图。
英语：Arial 、 Times New Roman


（2）为了防止用户电脑里，没有微软雅黑这个字体。就要用英语的逗号，隔开备选字体。如下：

```
	font-family: "微软雅黑","宋体";
```

上方代码表示：如果用户电脑里没有安装微软雅黑字体，那么就是宋体。

备选字体可以有无数个，用逗号隔开。


（3）我们要将英语字体放在最前面，这样所有的中文，就不能匹配英语字体，就自动的变为后面的中文字体：

```
	font-family: "Times New Roman","微软雅黑","宋体";
```

上方代码的意思是，英文会采用Times New Roman字体，而中文会采用微软雅黑字体（因为美国人设计的Times New Roman字体并不针对中文，所以中文会采用后面的微软雅黑）。比如说，对于`smyhvae哈哈哈`这段文字，`smyhvae`会采用Times New Roman字体，而`哈哈哈`会采用微软雅黑字体。

可是，如果我们把中文字体写在前面：(错误写法)

```
	font-family: "微软雅黑","Times New Roman","宋体";
```

上方代码会导致，中文和英文都会采用微软雅黑字体。


（4）所有的中文字体，都有英语别名。

微软雅黑的英语别名：

```
	font-family: "Microsoft YaHei";
```

宋体的英语别名：

```	
	font-family: "SimSun";
```

于是，当我们把字号、行高、字体这三个属性合二为一时，也可以写成：

```
	font:12px/30px  "Times New Roman","Microsoft YaHei","SimSun";
```


（5）行高可以用百分比，表示字号的百分之多少。

一般来说，百分比都是大于100%的，因为行高一定要大于字号。

比如说， `font:12px/200% “宋体”`等价于`font:12px/24px “宋体”;`。`200%`可以理解成word里面的2倍行高。

反过来， `font:16px/48px “宋体”;`等价于`font:16px/300% “宋体”`。




## 超级链接的美化


> 超级链接就是a标签。

### 伪类

**伪类**：同一个标签，根据用户的某种状态不同，有不同的样式。这就叫做“伪类”。

类是工程师加的，比如div属于box类，很明确，就是属于box类。但是a属于什么类？不明确。因为需要看用户有没有点击、有没有触碰。所以，就叫做“伪类”。
伪类用冒号来表示。

a标签有4种伪类，要求背诵。如下：

```
		a:link{
			color:red;
		}
		a:visited{
			color:orange;
		}
		a:hover{
			color:green;
		}
		a:active{
			color:black;
		}
```

上方代码解释如下：

- `:link`  	表示“链接”，用户没有点击过这个链接的样式。 
- `:visited` 表示“访问过的”， 用户访问过了这个链接之后的样式。
- `:hover`	表示“悬停”，用户鼠标悬停的时候链接的样式。 
- `:active`	表示“激活”， 用户用鼠标点击这个链接，但是不松手，此刻的样式。

上面的代码，看一下动图的效果：



记住，这四种状态，在css中，必须按照固定的顺序写：

> a:**l**ink 、a:visited 、a:hover 、a:active	

如果不按照顺序，那么将失效。“爱恨准则”：love hate。必须先爱，后恨。



### 超链接的美化

超链接a标签在使用的时候，比较难。因为不仅仅要控制a这个盒子，也要控制它的伪类。

我们一定要将a标签写在前面，将`:link、:visited、:hover、:active`这些伪类写在后面。

举个例子。如果效果：

20170810_2235.gif

为了实现上面这个效果，完整版代码如下：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		.nav{
			width: 960px;
			height: 50px;
			border: 1px solid red;
			margin: 100px auto;
		}
		.nav ul{
			/*去掉小圆点*/
			list-style: none;
		}
		.nav ul li{
			float: left;
			width: 120px;
			height: 50px;
			/*让内容水平居中*/
			text-align: center;
			/*让行高等于nav的高度，就可以保证内容垂直居中*/
			line-height: 50px;
		}
		.nav ul li a{
			display: block;
			width: 120px;
			height: 50px;
		}
		/*两个伪类的属性，可以用逗号隔开*/
		.nav ul li a:link , .nav ul li a:visited{
			text-decoration: none;
			background-color: purple;
			color:white;
		}
		.nav ul li a:hover{
			background-color: orange;
		}
	</style>
</head>
<body>
	<div class="nav">
		<ul>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
		</ul>
	</div>
</body>
</html>
```

上方代码中，我们发现，当我们在定义`a:link`和 `a:visited`这两个伪类的时候，如果它们的属性相同，我们其实可以写在一起，用逗号隔开就好，摘抄如下：

```css
		.nav ul li a{
			display: block;
			width: 120px;
			height: 50px;
		}
		/*两个伪类的属性，可以用逗号隔开*/
		.nav ul li a:link , .nav ul li a:visited{
			text-decoration: none;
			background-color: purple;
			color:white;
		}
		.nav ul li a:hover{
			background-color: orange;
		}
```

如上方代码所示，最标准的写法，就是把link、visited、hover这三个伪类都要写。但是前端开发工程师在大量的实践中，发现不写link、visited也挺兼容。写法是：

> a:link、a:visited都是可以省略的，简写在a标签里面。也就是说，a标签涵盖了link、visited的状态（前提是都具有了相同的属性）。写法如下：


```css
		.nav ul li a{
			display: block;
			width: 120px;
			height: 50px;
			text-decoration: none;
			background-color: purple;
			color:white;
		}
		.nav ul li a:hover{
			background-color: orange;
		}

```

当然了，在写`a:link`、`a:visited`这两个伪类的时候，要么同时写，要么同时不写。如果只写`a`属性和`a:link`属性，不规范。


## background系列属性

### background-color背景颜色属性

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



### background-image属性




### background-repeat属性



### background-position属性




**CSS精灵：**



### 



























