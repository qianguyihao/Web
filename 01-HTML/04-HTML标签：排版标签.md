

## 本文主要内容

排版标签：

- `<h1>`

- `<p>`

-  `<div>`

-  `<span>`

- `<br>`

-  `<hr>`

- `<center>`

- `<pre>`


字体标签： `<font>`、 `<b>`、 `<u>` 、`<sup>` 、`<sub>`


超链接 `<a>`


图片标签 `<img>`

下面来详细介绍一下排版标签。


## 标题标签

标题使用`<h1>`至`<h6>`标签进行定义。`<h1>`定义最大的标题，`<h6>`定义最小的标题。具有align属性，属性值可以是：left、center、right。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>H1：千古壹号，永不止步</h1>
	<h2>H3：千古壹号，永不止步</h2>
	<h3>H3：千古壹号，永不止步</h3>
	<h4>H4：千古壹号，永不止步</h4>
	<h5>H5：千古壹号，永不止步</h5>
	<h6>H6：千古壹号，永不止步</h6>
</body>
</html>

```

效果演示：

![](http://img.smyhvae.com/20200401_1827.png)

## HTML 注释

HTML 注释的格式如下：

```html
<!-- 我是 html 注释  -->
```

## 段落标签`<p>`

段落，是英语“paragraph“缩写。

**作用**：可以把 HTML 文档分割为若干段落。在网页中如果要把文字有条理地显示出来，离不开段落标签。就如同我们平常写文章一样，整个网页也可以分为若干个段落。

代码举例：

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

属性：

- `align="属性值"`：对齐方式。属性值包括left center right。

属性举例：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html166440-1dcd2ad6e6353559.png)


HTML标签是分等级的，HTML将所有的标签分为两种：

- **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）

- **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。

从学习p的第一天开始，就要牢牢记住：**p标签是一个文本级标签，p里面只能放文字、图片、表单元素**。其他的一律不能放。

错误写法：（尝试把 h 放到 p 里）

```html
	<p>
		我是一个小段落
		<h1>我是一级标题</h1>
	</p>
```

网页效果如下：

![](http://img.smyhvae.com/20170630_1102.png)

上图显示，浏览器不允许你这么做，我们使用Chrome的F12审查元素发现，浏览器自己把p封闭掉了，不让你去包裹h1。

PS：Chrome浏览器是HTML5支持度最好的浏览器。提供了非常好的开发工具，非常适合我们开发人员使用。审查元素功能的快捷键是F12。





## 水平线标签`<hr />`

> horizontal 单词的发音：[ˌhɒrɪˈzɒntl]。

水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。在网页中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<p>自古情深留不住</p>
	<hr />
	<p>总是套路得人心</p>
</body>
</html>
```

运行效果：

![](http://img.smyhvae.com/20200401_1930.png)


属性介绍：
 - `align="属性值"`：设定线条置放位置。属性值可选择：left right center。
 - `size="2" `：设定线条粗细。以像素为单位，内定为2。
 - `width="500"`或`width="70%"`：设定线条长度。可以是绝对值（单位是像素）或相对值。如果设置为相对值的话，内定为100%。
 - `color="#0000FF"`：设置线条颜色。
 - `noshade`：不要阴影，即设定线条为平面显示。若没有这个属性则表明线条具阴影或立体。

属性效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_05.png)

<br>



## `<div>`和`<span>`标签

> div和span是非常重要的标签，div的语义是division“分割”； span的语义就是span“范围、跨度”。

>CSS课程中你将知道，这两个东西，都是最最重要的“盒子”。

div：把标签中的内容作为一个块儿来对待(division)。必须单独占据一行。

div标签的属性：
 - `align="属性值"`：设置块儿的位置。属性值可选择：left、right、 center。

<br>

**`<span>`和`<div>`唯一的区别在于**：`<span>`是不换行的，而`<div>`是换行的。

如果单独在网页中插入这两个元素，不会对页面产生任何的影响。这两个元素是专门为定义CSS样式而生的。或者说，DIV+CSS来实现各种样式。

效果举例：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_08.png)

div在浏览器中，默认是不会增加任何的效果的，但是语义变了，div中的所有元素是一个小区域。
div标签是一个**容器级**标签，里面什么都能放，甚至可以放div自己。

span也是表达“小区域、小跨度”的标签，但是是一个**文本级**的标签。
就是说，span里面只能放置文字、图片、表单元素。 span里面不能放p、h、ul、dl、ol、div。

span里面是放置小元素的，div里面放置大东西的。举例如下：

span举例：

```html
			<p>
				简介简介简介简介简介简介简介简介
				<span>
					<a href="">详细信息</a>
					<a href="">购买</a>
				</span>
			</p>

```

div举例：

```html
	<div class="header">
		<div class="logo"></div>
		<div class="nav"></div>
	</div>
	<div class="content">
		<div class="guanggao"></div>
		<div class="dongxi"></div>
	</div>
	<div class="footer"></div>

```

所以，我们亲切的称呼这种模式叫做“**div+css**”。**div标签负责布局，负责结构，负责分块。css负责样式**。


## 换行标签`<br>`（已废弃）

当你打算结束一行，而又不想开始一个新段落时，`<br> `标签就派上用场了。无论你将它置于何处，`<br> `标签都会产生一个强制的换行。
```html
This <br> is a para<br>graph with line breaks
```
效果如下：

![](http://img.smyhvae.com/2015-10-01-cnblogs_html03.png)

上图显示，**`<p>`标签和`<br>`标签的区别在于**：`<p>`标签会在段落的前后自动插入一个空行，而`<br>`标签没有空行；而且`<br>`标签没有属性。

注意`<br>` 没有结束标签，把`<br>`标签写为 `<br/>` 是经得起未来考验的做法，XHTML 和 XML 都接受在打开的标签内部来关闭标签的做法。

<br>

## 内容居中标签 `<center>`

此时center代表是一个标签，而不是一个属性值了。只要是在这个标签里面的内容，都会居于浏览器的中间。
效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_06.png)

到了H5里面，center标签不建议使用。

<br>

## 预定义（预格式化）标签：`<pre>`

含义：将保留其中的所有的空白字符(空格、换行符)，原封不动的输出结果（告诉浏览器不要忽略空格和空行）
说明：真正排网页过程中，`<pre>`标签几乎用不着。但在PHP中用于打印一个数组时使用。

效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_07.png)

上图中，好像红框部分的字体变小了，而且还出现了缩进，好吧， 这个其实是浏览器搞的鬼。
为什么要有`<pre>`这个标签呢？答案是：
>  所有的浏览器默认情况下都会忽略空格和空行。

好吧，其实这个标签也用的比较少。

