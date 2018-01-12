



### 4、伪类选择器（待定）

对于`<a>`标签，其对应几种不同的状态：
- `link`：超链接点击之前
- `visited`：超链接点击之后
- `focus`：是某个标签获得焦点的时候（比如某个输入框获得焦点）
- `hover`：鼠标放到某个标签上的时候
- `active`：点击某个标签没有松鼠标时

CSS允许对于元素的不同状态，定义不同的样式信息。伪类选择器又分为两种：
 - 静态伪类：**只能用于超链接**
 - 动态伪类：针对所有标签都适用

下面来分别讲一下这两种伪类选择器。

**（1）静态伪类：**

用于以下两个状态：
 - `link`：超链接点击之前
 - `visited`：超链接点击之后

 > **注意：上面这两个状态只能使用于超链接**。

举例：

```html
  <style type="text/css">
  /*
	伪类选择器：静态伪类
  */

   /*
	让超链接点击之前是红色
   */
	a:link{
		color:red;
	}

	/*
	让超链接点击之后是绿色
    */
	a:visited{
		color:green;
	}

  </style>
```

效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-01.gif)

上图中，超链接点击之前是红色，点击之后是绿色。


问：既然`a{}`定义了超链的属性，和`a:link{}`都定义了超链点击之前的属性，那这两个有啥区别呢？
答：

**`a{}`和`a:link{}`的区别：**

 - `a{}`定义的样式针对所有的超链接(包括锚点)
 - `a:link{}`定义的样式针对所有写了href属性的超链接(不包括锚点)

**（2）动态伪类: **

用于以下几种状态：
 - `focus`：是某个标签获得焦点的时候（比如某个输入框获得焦点）
 - `hover`：鼠标放到某个标签上的时候
 - `active`：点击某个标签没有松鼠标时

 > 注意：上面这三种状态针适用于所有的标签。

举例：

```html
  <style type="text/css">
  /*
	伪类选择器：动态伪类
  */

   /*
	让文本框获取焦点时：
	边框：#FF6F3D这种橙色
	文字：绿色
	背景色：#6a6a6a这种灰色
   */
	input:focus{
		border:3px solid #FF6F3D;
		color:white;
		background-color:#6a6a6a;
	}

	/*
	鼠标放在标签上时显示蓝色
    */
	label:hover{
		color:blue;
	}

	/*
	点击标签鼠标没有松开时显示红色
    */
	label:active{
		color:red;
	}

  </style>
```

效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-02.gif)


利用这个`hover`属性，我们同样对表格做一个样式的设置：
表格举例：

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

	/*整个表格的样式*/
  	table{
		width: 300px;
		height: 200px;
		border: 1px solid blue;
		/*border-collapse属性：对表格的线进行折叠*/
		border-collapse: collapse;
  	}

	/*鼠标悬停时，让当前行显示#868686这种灰色*/
  	table tr:hover{
  		background: #868686;
  	}

	/*每个单元格的样式*/
  	table td{
  		border:1px solid red;
  	}

  </style>
 </head>
 <body>

  <table>
  <tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  </table>

 </body>
</html>
```

效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-03-css-04.gif)









## 一些 CSS3 选择器

> 所有的css3选择器，我们放在HTML5和CSS3课上介绍。暂时先接触一部分。

PS：我们可以用`IETester`这个软件测一下CSS在各个版本IE浏览器上的显示效果。



### 浏览器的兼容性问题

IE： 微软的浏览器，随着操作系统安装的。所以每个windows都有IE浏览器。各版本如下：

- windows xp 	操作系统安装的IE6
- windows vista 操作系统安装的IE7
- windows 7 	操作系统安装的IE8
- windows 8 	操作系统安装的IE9
- windows10 	操作系统安装的edge

浏览器兼容问题，要出，就基本上就是出在IE6、7身上，这两个浏览器是非常低级的浏览器。

为了测试浏览器CSS 3的兼容性，我们可以在网上搜"css3 机器猫"关键字，然后在不同的浏览器中打开如下链接：

- <http://www1.pconline.com.cn/pcedu/specialtopic/css3-doraemon/>

测试结果如下：



![](http://img.smyhvae.com/20170711_1939.png)



我们可以在[百度统计](http://tongji.baidu.com/data/)里查看浏览器的市场占有率：

- IE9	5.94%
- IE8 21.19%
- IE7 4.79%
- IE6 4.11%

我们可以在<http://html5test.com/results/desktop.html>中查看

![](http://img.smyhvae.com/20170711_1948.png)

我们要知道典型的IE6兼容问题（面试要问），但是做项目我们兼容到IE8即可。不解决IE8以下的兼容问题，目的在于：培养更高的兴趣和眼光，别天天的跟IE6较劲。

我们可以用「IETester」软件看看css在各个浏览器中的显示效果。


### 1.儿子选择器，用符号`>`表示

> IE7开始兼容，IE6不兼容。

```css
div>p{
	color:red;
}
```

div的儿子p。和div的后代p的截然不同。

能够选择：

```html
	<div>
		<p>我是div的儿子</p>
	</div>
```

不能选择：

```html
	<div>
		<ul>
			<li>
				<p>我是div的重孙子</p>
			</li>
		</ul>
	</div>
```


### 2.序选择器

> IE8开始兼容；IE6、7都不兼容

设置无序列表`<ul>`中的第一个`<li>`为红色：

```html
	<style type="text/css">
		ul li:first-child{
			color:red;
		}
	</style>
```

设置无序列表`<ul>`中的最后一个`<li>`为红色：

```css
		ul li:last-child{
			color:blue;
		}
```

序选择器还有更复杂的用法，以后再讲。

由于浏览器的更新需要过程，所以现在如果公司还要求兼容IE6、7，那么就要自己写类名：

```html
	<ul>
		<li class="first">项目</li>
		<li>项目</li>
		<li>项目</li>
		<li>项目</li>
		<li>项目</li>
		<li>项目</li>
		<li>项目</li>
		<li>项目</li>
		<li>项目</li>
		<li class="last">项目</li>
	</ul>
```

用类选择器来选择第一个或者最后一个：

```html
		ul li.first{
			color:red;
		}

		ul li.last{
			color:blue;
		}
```


### 3.下一个兄弟选择器

> IE7开始兼容，IE6不兼容。

`+`表示选择下一个兄弟

```html
	<style type="text/css">
		h3+p{
			color:red;
		}
	</style>
```

上方的选择器意思是：选择的是h3元素后面紧挨着的第一个兄弟。

```html
    <h3>我是一个标题</h3>
	<p>我是一个段落</p>
	<p>我是一个段落</p>
	<p>我是一个段落</p>
	<h3>我是一个标题</h3>
	<p>我是一个段落</p>
	<p>我是一个段落</p>
	<p>我是一个段落</p>
	<h3>我是一个标题</h3>
	<p>我是一个段落</p>
	<p>我是一个段落</p>
	<p>我是一个段落</p>
	<h3>我是一个标题</h3>
```


效果如下：

![](http://img.smyhvae.com/20170711_1950.png)


这种选择器作用不大。


### css精灵

