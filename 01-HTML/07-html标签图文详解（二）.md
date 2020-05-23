

## 本文主要内容

 - 列表标签：`<ul>`、`<ol>`、`<dl>`
 - 表格标签：`<table>`
 - 框架标签及内嵌框架`<iframe>`
 - 表单标签：`<form>`
 - 多媒体标签
 - 滚动字幕标签：`<marquee>`


## 列表标签

列表标签分为三种。

### 1、无序列表`<ul>`，无序列表中的每一项是`<li>`

英文单词解释如下：

- ul：unordered list，“无序列表”的意思。
- li：list item，“列表项”的意思。

例如：

```html
<ul>
	<li>默认1</li>
	<li>默认2</li>
	<li>默认3</li>
</ul>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_01.png)

注意：

- li不能单独存在，必须包裹在ul里面；反过来说，ul的“儿子”不能是别的东西，只能有li。
- 我们这里再次强调，ul的作用，并不是给文字增加小圆点的，而是增加无序列表的“语义”的。


**属性：**

 - `type="属性值"`。属性值可以选： `disc`(实心原点，默认)，`square`(实心方点)，`circle`(空心圆)。
效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_02_1.png)

不光是`<ul>`标签有`type`属性，`<ul>`里面的`<li>`标签也有`type`属性（虽然说这种写法很少见）。效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_03.png)

注意：项目符号可以是图片，需要通过CSS设置`<li>`标记的背景图片来实现(CSS中讲)。

当然了，列表之间是可以**嵌套**的。我们来举个例子。代码：

```html
  <ul>
	<li><b>北京市</b>
		<ul>
			<li>海淀区</li>
			<li>朝阳区</li>
			<li>东城区</li>

		</ul>
	</li>

	<li><b>广州市</b>
		<ul>
			<li>天河区</li>
			<li>越秀区</li>
		</ul>
	</li>
  </ul>
```
效果：

![](http://img.smyhvae.com/2015-10-01-cnblogs_html_40.png)


**css 属性**：

```css
list-style-position: inside   /* 给 ul 设置这个属性后，将小圆点包含在 li 元素的内部 */
```

#### ul标签实际应用场景：

场景1、导航条：

![](http://img.smyhvae.com/20170704_1717.png)

场景2、li 里面放置的内容可能很多：

![](http://img.smyhvae.com/20170704_1719.png)

声明：ul的儿子，只能是li。但是li是一个容器级标签，**li里面什么都能放，甚至可以再放一个ul**。

### 2、有序列表`<ol>`，里面的每一项是`<li>`

英文单词：Ordered List。

例如：

```html
<ol >
	<li>呵呵哒1</li>
	<li>呵呵哒2</li>
	<li>呵呵哒3</li>
</ol>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_04.png)

**属性：**
 - `type="属性值"`。属性值可以是：1(阿拉伯数字，默认)、a、A、i、I。结合`start`属性表示`从几开始`。

举例：

```html
<ol type="1">
	<li>呵呵</li>
	<li>呵呵</li>
	<li>呵呵</li>
</ol>

<ol type="a">
	<li>嘿嘿</li>
	<li>嘿嘿</li>
	<li>呵呵</li>
</ol>

<ol type="i" start="4">
	<li>哈哈</li>
	<li>哈哈</li>
	<li>哈哈</li>
</ol>

<ol type="I" start="10">
	<li>么么</li>
	<li>么么</li>
	<li>么么</li>
</ol>
```

效果如下：
![](http://img.smyhvae.com/2015-10-02-cnblogs_html_07.png)

和无序列表一样，有序列表也是可以嵌套的哦，这里就不举类似的例子了。


ol和ul就是语义不一样，怎么使用都是一样的。
ol里面只能有li，li必须被ol包裹。li是容器级。

ol这个东西用的不多，如果想表达顺序，大家一般也用ul。举例如下：

```html
<ul>
	<li>1. 小苹果</li>
	<li>2. 月亮之上</li>
	<li>3. 最炫民族风</li>
</ul>
```

### 3、定义列表`<dl>`

> 定义列表的作用非常大。

`<dl>`英文单词：definition list，没有属性。dl的子元素只能是dt和dd。

 - `<dt>`：definition title 列表的标题，这个标签是必须的
 - `<dd>`：definition description 列表的列表项，如果不需要它，可以不加

备注：dt、dd只能在dl里面；dl里面只能有dt、dd。

举例：

```html
<dl>
	<dt>第一条</dt>
	<dd>你若是觉得你有实力和我玩，良辰不介意奉陪到底</dd>
	<dd>我会让你明白，我从不说空话</dd>
	<dd>我是本地的，我有一百种方式让你呆不下去；而你，无可奈何</dd>

	<dt>第二条</dt>
	<dd>良辰最喜欢对那些自认能力出众的人出手</dd>
	<dd>你可以继续我行我素，不过，你的日子不会很舒心</dd>
	<dd>你只要记住，我叫叶良辰</dd>
	<dd>不介意陪你玩玩</dd>
	<dd>良辰必有重谢</dd>

</dl>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_09.png)


上图可以看出，定义列表表达的语义是两层：

- （1）是一个列表，列出了几个dd项目
- （2）每一个词儿都有自己的描述项。

备注：dd是描述dt的。


定义列表用法非常灵活，可以一个dt配很多dd：

```html
	<dl>
		<dt>北京</dt>
		<dd>国家首都，政治文化中心</dd>
		<dd>污染很严重，PM2.0天天报表</dd>
		<dt>上海</dt>
		<dd>魔都，有外滩、东方明珠塔、黄浦江</dd>
		<dt>广州</dt>
		<dd>中国南大门，有珠江、小蛮腰</dd>
	</dl>
```

还可以拆开，让每一个dl里面只有一个dt和dd，这样子感觉清晰一些：

```html
	<dl>
		<dt>北京</dt>
		<dd>国家首都，政治文化中心</dd>
		<dd>污染很严重，PM2.0天天报表</dd>
	</dl>

	<dl>
		<dt>上海</dt>
		<dd>魔都，有外滩、东方明珠塔、黄浦江</dd>
	</dl>

	<dl>
		<dt>广州</dt>
		<dd>中国南大门，有珠江、小蛮腰</dd>
	</dl>
```

真实案例：（京东最下方）

![](http://img.smyhvae.com/20170704_1727.png)


上图中的结构如下：

```html
<dl>
	<dt>购物指南</dt>
	<dd>
		<a href="#">购物流程</a>
		<a href="#">会员介绍</a>
		<a href="#">生活旅行/团购</a>
		<a href="#">常见问题</a>
		<a href="#">大家电</a>
		<a href="#">联系客服</a>
	</dd>
</dl>
<dl>
	<dt>配送方式</dt>
	<dd>
		<a href="#">上门自提</a>
		<a href="#">211限时达</a>
		<a href="#">配送服务查询</a>
		<a href="#">配送费收取标准</a>
		<a href="#">海外配送</a>
	</dd>
</dl>

```

京东商品分类如下：

![](http://img.smyhvae.com/20170704_1729.png)

dt、dd都是容器级标签，想放什么都可以。所以，现在就应该更加清晰的知道：用什么标签，不是根据样子来决定，而是语义（语义本质上是结构）。

## 表格标签

表格标签用`<table>`表示。
一个表格`<table>`是由每行`<tr>`组成的，每行是由每个单元格`<td>`组成的。
所以我们要记住，一个表格是由行组成的（行是由列组成的），而不是由行和列组成的。
在以前，要想固定标签的位置，唯一的方法就是表格。现在可以通过CSS定位的功能来实现。但是现在在做页面的时候，表格作用还是有一些的。

例如，一行的单元格：
```html
<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```
上面的表格中没有加文字，所以在生成的网页中什么都看不到。
例如，3行4列的单元格：
```html
<table>
	<tr>
		<td>生命壹号</td>
		<td>23</td>
		<td>男</td>
		<td>黄冈</td>
	</tr>

	<tr>
		<td>许嵩</td>
		<td>29</td>
		<td>男</td>
		<td>安徽</td>
	</tr>

	<tr>
		<td>邓紫棋</td>
		<td>23</td>
		<td>女</td>
		<td>香港</td>
	</tr>

</table>
```
效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_10.png)

上图中的表格好像没看到边框呀，不急，接下来看看`<table>`标签的属性。

**`<table>`的属性：**
 - `border`：边框。像素为单位。
 - `style="border-collapse:collapse;"`：单元格的线和表格的边框线合并（表格的两边框合并为一条）
 - `width`：宽度。像素为单位。
 - `height`：高度。像素为单位。
 - `bordercolor`：表格的边框颜色。
 - `align`：**表格**的水平对齐方式。属性值可以填：left right center。
注意：这里不是设置表格里内容的对齐方式，如果想设置内容的对齐方式，要对单元格标签`<td>`进行设置）
 - `cellpadding`：单元格内容到边的距离，像素为单位。默认情况下，文字是紧挨着左边那条线的，即默认情况下的值为0。
注意不是单元格内容到四条边的距离哈，而是到一条边的距离，默认是与左边那条线的距离。如果设置属性`dir="rtl"`，那就指的是内容到右边那条线的距离。
 - `cellspacing`：单元格和单元格之间的距离（外边距），像素为单位。默认情况下的值为0
 - `bgcolor="#99cc66"`：表格的背景颜色。
 - `background="路径src/..."`：背景图片。
背景图片的优先级大于背景颜色。
 - `bordercolorlight`：表格的上、左边框，以及单元格的右、下边框的颜色
 - `bordercolordark`：表格的右、下边框，以及单元格的上、左的边框的颜色
这两个属性的目的是为了设置3D的效果。
 - `dir`：公有属性，单元格内容的排列方式(direction)。 可以 取值：`ltr`：从左到右（left to right，默认），`rtl`：从右到左（right to left）
既然说`dir`是共有属性，如果把这个属性放在任意标签中，那表明这个标签的位置可能会从右开始排列。

单元格带边框的效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_11.png)

备注：表格中很细表格边线的制作，CSS的写法：

```css
style="border-collapse:collapse;"
```


### `<tr>`：行

一个表格就是一行一行组成的。

**属性：**

 - `dir`：公有属性，设置这一行单元格内容的排列方式。可以取值：
 	- `ltr`：从左到右（left to right，默认）
	- `rtl`：从右到左（right to left）
 - `bgcolor`：设置这一行的单元格的背景色。
注：没有background属性，即：无法设置这一行的背景图片，如果非要设置，可以用css实现。
 - `height`：一行的高度
 - `align="center"`：一行的内容水平居中显示，取值：left、center、right
 - `valign="center"`：一行的内容垂直居中，取值：top、middle、bottom

### `<td>`：单元格

**属性：**

 - `align`：内容的横向对齐方式。属性值可以填：left right center。如果想让每个单元格的内容都居中，这个属性太麻烦了，以后用css来解决。
 - `valign`：内容的纵向对齐方式。属性值可以填：top middle bottom
 - `width`：绝对值或者相对值(%)
 - `height`：单元格的高度
 - `bgcolor`：设置这个单元格的背景色。
 - `background`：设置这个单元格的背景图片。

### 单元格的合并

单元格的属性：

- `colspan`：横向合并。例如`colspan="2"`表示当前单元格在水平方向上要占据两个单元格的位置。
- `rowspan`：纵向合并。例如`rowspan="2"`表示当前单元格在垂直方向上要占据两个单元格的位置。

效果举例：（横向合并）

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_13.png)

效果举例：（纵向合并）

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_15.png)

### `<th>`：加粗的单元格。相当于`<td>` + `<b>`

- 属性同`<td>`标签。

<br>
### `<caption>`：表格的标题。使用时和`tr`标签并列
 - 属性：`align`，表示标题相对于表格的位置。属性取值可以是：left、center、right、top、bottom
效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_16.png)

### 表格的`<thead>`标签、`<tbody>`标签、`<tfoot>`标签

这三个标签有与没有的区别：

- 1、如果写了，那么这三个部分的**代码顺序可以任意**，浏览器显示的时候还是按照thead、tbody、tfoot的顺序依次来显示内容。如果不写thead、tbody、tfoot，那么浏览器解析并显示表格内容的时候是从按照代码的从上到下的顺序来显示。
- 2、当表格非常大内容非常多的时候，如果用thead、tbody、tfoot标签的话，那么**数据可以边获取边显示**。如果不写，则必须等表格的内容全部从服务器获取完成才能显示出来。

举例：

```html
 <body>

	<table border="1">

		<tbody>
		<tr>
			<td>生命壹号</td>
			<td>23</td>
			<td>男</td>
			<td>黄冈</td>
		</tr>
		</tbody>

		<tfoot>
		<tr>
			<td>许嵩</td>
			<td>29</td>
			<td>男</td>
			<td>安徽</td>
		</tr>
		</tfoot>

		<thead>
		<tr>
			<td>邓紫棋</td>
			<td>23</td>
			<td>女</td>
			<td>香港</td>
		</tr>
		</thead>

	</table>

 </body>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_17.png)

## 框架标签

如果我们希望在一个网页中显示多个页面，那框架标签就派上用场了。
> - 注意，框架标签不能放在`<body>`标签里面，因为`<body>`标签代表的只是一个页面，而框架标签代表的是多个页面。于是：`<frameset>`和`<body>`只能二选一。
> - 框架的集合用`<frameset>`表示，然后在`<frameset>`集合里放入一个一个的框架`<frame>`

**补充**：`frameset`和`frame`已经从 Web标准中删除，建议使用 iframe 代替。

### `<frameset>`：框架的集合

一个框架的集合可以包含多个框架或框架的集合。**属性：**

- `rows`：水平分割，将框架分为上下部分。写法有两种：

1、绝对值写法：`rows="200,*"`  其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占200个像素，下面的框架占剩下的部分。

2、相对值写法：`rows="30%,*"`  其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占30%，下面的框架占70%。

注：如果你想将框架分成很多行，在属性值里用逗号隔开就行了。

- `cols`：垂直分割，将框架分为左右部分。写法有两种：

1、绝对值写法：`cols="200,*"`  其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占200个像素，右边的框架占剩下的部分。

2、相对值写法：`cols="30%,*"`  其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占30%，右边的框架占70%。

注：如果你想将框架分成很多列，在属性值里用逗号隔开就行了。

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_26.png)

上图中，如果删掉页面right.html，显示效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_27.png)

### `<frame>`：框架

一个框架显示一个页面。

**属性：**

- `scrolling="no"`：是否需要滚动条。默认值是true。
- `noresize`：不可以改变框架大小。默认情况下，单个框架的边界是可以拖动的，这样的话，框架大小就不固定了。如果用了这个属性值，框架大小将固定。

举例：

```html
<frame src="top.html" noresize></frame>
```

- `bordercolor="#00FF00"`：给框架的边框定义颜色。这个属性在框架集合`<frameset>`中同样适用。
颜色这个属性在IE浏览器中生效，但是在google浏览器中无效，不知道为啥。

- `frameborder="0"`或`frameborder="1"`：隐藏或显示边框（框架线）。

- `name`：给框架起一个名字。

利用`name`这个属性，我们可以在框架里进行超链。

举例：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_28.png)

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_gif3.gif)


## 内嵌框架

内嵌框架用`<iframe>`表示。`<iframe>`是`<body>`的子标记。

内嵌框架inner frame：嵌入在一个页面上的框架(仅仅IE、新版google浏览器支持，可能有其他浏览器也支持，暂时我不清楚)。

**属性：**

 - `src="subframe/the_second.html"`：内嵌的那个页面
 - `width=800`：宽度
 - `height=“150`：高度
 - `scrolling="no"`：是否需要滚动条。默认值是true。
 - `name="mainFrame"`：窗口名称。公有属性。


效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_29.png)

内嵌框架举例：（在内嵌页面中切换显示不同的压面）

```html
 <body>

 	<a href="文字页面.html" target="myframe">默认显示文字页面</a><br>
 	<a href="图片页面.html" target="myframe">点击进入图片页面</a><br>
 	<a href="表格页面.html" target="myframe">点击进入表格页面</a><br>

 	<iframe src="文字页面.html" width="400" height="400" name="myframe"></iframe>
 	<br>
 	嘿嘿

 </body>

```

效果演示：
![](http://img.smyhvae.com/2015-10-02-cnblogs_html_GIF.gif)


## 表单标签

表单标签用`<form>`表示，用于与服务器的交互。表单就是收集用户信息的，就是让用户填写的、选择的。

**属性：**
 - `name`：表单的名称，用于JS来操作或控制表单时使用；
 - `id`：表单的名称，用于JS来操作或控制表单时使用；
 - `action`：指定表单数据的处理程序，一般是PHP，如：action=“login.php”
 - `method`：表单数据的提交方式，一般取值：get(默认)和post

注意：表单和表格嵌套时，是在<form>标记中套<table>标记。

form标签里面的action属性和method属性，在《Ajax》课程上给大家讲解。稍微说一下：action属性就是表示，表单将提交到哪里。 method属性表示用什么HTTP方法提交，有get、post两种。

**get提交和post提交的区别：**

GET方式：
将表单数据，以"name=value"形式追加到action指定的处理程序的后面，两者间用"?"隔开，每一个表单的"name=value"间用"&"号隔开。
特点：只适合提交少量信息，并且不太安全(不要提交敏感数据)、提交的数据类型只限于ASCII字符。

POST方式：
将表单数据直接发送(隐藏)到action指定的处理程序。POST发送的数据不可见。Action指定的处理程序可以获取到表单数据。
特点：可以提交海量信息，相对来说安全一些，提交的数据格式是多样的(Word、Excel、rar、img)。

**Enctype：**
表单数据的编码方式(加密方式)，取值可以是：application/x-www-form-urlencoded、multipart/form-data。Enctype只能在POST方式下使用。

- Application/x-www-form-urlencoded：**默认**加密方式，除了上传文件之外的数据都可以
- Multipart/form-data：**上传附件时，必须使用这种编码方式**。


### `<input>`：输入标签（文本框）

用于接收用户输入。

```html
<input type="text" />
```

**属性：**

- **`type="属性值"`**：文本类型。属性值可以是：
	- `text`（默认）
	- `password`：密码类型
	- `radio`：单选按钮，名字相同的按钮作为一组进行单选（单选按钮，天生是不能互斥的，如果想互斥，必须要有相同的name属性。name就是“名字”。
）。非常像以前的收音机，按下去一个按钮，其他的就抬起来了。所以叫做radio。
	- `checkbox`：多选按钮，**name 属性值相同的按钮**作为一组进行选择。
	- `checked`：将单选按钮或多选按钮默认处于选中状态。当`<input>`标签设置为`type="radio"`或者`type=checkbox`时，可以用这个属性。属性值也是checked，可以省略。
	- `hidden`：隐藏框，在表单中包含不希望用户看见的信息
	- `button`：普通按钮，结合js代码进行使用。
	- `submit`：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写value自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到form标签的action属性中指定的那个页面中去。
	- `reset`：重置按钮，清空当前表单的内容，并设置为最初的默认值
	- `image`：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。
	- `file`：文件选择框。
提示：如果要限制上传文件的类型，需要配合JS来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查。

 - **`value="内容"`**：文本框里的默认内容（已经被填好了的）

 - `size="50"`：表示文本框内可以显示**五十个字符**。一个英文或一个中文都算一个字符。
注意**size属性值的单位不是像素哦**。

 - `readonly`：文本框只读，不能编辑。因为它的属性值也是readonly，所以属性值可以不写。
用了这个属性之后，在google浏览器中，光标点不进去；在IE浏览器中，光标可以点进去，但是文字不能编辑。

 - `disabled`：文本框只读，不能编辑，光标点不进去。属性值可以不写。

> 备注：HTML5中，input的类型又增加了很多（比如date、color，我们会在 html5 中讲到）。

**举例**：

```html
	<form>
		姓名：<input value="呵呵" >逗比<br>
		昵称：<input value="哈哈" readonly=""><br>
		名字：<input type="text" value="name" disabled=""><br>
		密码：<input type="password" value="pwd" size="50"><br>
		性别：<input type="radio" name="gender" id="radio1" value="male" checked="">男
			  <input type="radio" name="gender" id="radio2" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
	</form>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_33.png)

注意，多个个单选框的input标签中，name 的属性值可以相同，但是 **id 的属性值必须是唯一的**。我们知道，html的标签中，id的属性值是唯一的。

**四种按钮的举例**：

```html
	<form>
		<input type="button" value="普通按钮"><br>
		<input type="submit"  value="提交按钮"><br>
		<input type="reset" value="重置按钮"><br>
		<input type="image" value="图片按钮1"><br>
		<input type="image" src="1.jpg" width="800" value="图片按钮2"><br>
		<input type="file" value="文件选择框">
	</form>
```

**前端开发工程师，重点关心页面的美、样式、板式、交互。至于数据的提供和比较重的业务逻辑，都是后台工程师做的事情。**

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_35.png)

### `<select>`：下拉列表标签

`<select>`标签里面的每一项用`<option>`表示。select就是“选择”，option“选项”。

select标签和ul、ol、dl一样，都是组标签。

**`<select>`标签的属性：**

- `multiple`：可以对下拉列表中的选项进行多选。属性值为 multiple，也可以没有属性值。也就是说，既可以写成 `multiple=""`，也可以写成`multiple="multiple"`。
- `size="3"`：如果属性值大于1，则列表为滚动视图。默认属性值为1，即下拉视图。

**`<option>`标签的属性：**

 - `selected`：预选中。没有属性值。

举例：

```html
	<form>
		<select>
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option selected="">研究生</option>
		</select>
		<br><br><br>

		<select size="3">
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option>研究生</option>
		</select>
		<br><br><br>

		<select multiple="">
			<option>小学</option>
			<option>初中</option>
			<option selected="">高中</option>
			<option selected="">大学</option>
			<option>研究生</option>
		</select>
		<br><br><br>

	</form>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_32.png)

### `<textarea>`标签：多行文本输入框

text 就是“文本”，area 就是“区域”。

**属性：**

 - `rows="4"`：指定文本区域的行数。
 - `cols="20"`：指定文本区域的列数。
 - `readonly`：只读。

举例：

```html
	<form>
		<textarea name="txtInfo" rows="4" cols="20">1、不爱摄影不懂设计的程序猿不是一个好的产品经理。</textarea>
	</form>
```


效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_34.png)

上图的红框部分表示，我在文本区域进行了换行，所以显示的效果也出现了空白。



### 表单的语义化

比如，我们在注册一个网站的信息的时候，有一部分是必填信息，有一部分是选填信息，这个时候可以利用表单的语义化。
举例：

```html
	<form>

		<fieldset>
		<legend>账号信息</legend>
		姓名：<input value="呵呵" >逗比<br>
		密码：<input type="password" value="pwd" size="50"><br>
		</fieldset>

		<fieldset>
		<legend>其他信息</legend>
		性别：<input type="radio" name="gender" value="male" checked="">男
			  <input type="radio" name="gender" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
		</fieldset>

	</form>
```

效果：


![](http://img.smyhvae.com/20151002_36.png)

### `<label>`标签

我们先来看下面一段代码：

```html
<input type="radio" name="sex" /> 男
<input type="radio" name="sex" /> 女

```

对于上面这样的单选框，我们只有点击那个单选框（小圆圈）才可以选中，点击“男”、“女”这两个文字时是无法选中的；于是，label标签派上了用场。

本质上来讲，“男”、“女”这两个文字和input标签时没有关系的，而label就是解决这个问题的。我们可以通过label把input和汉字包裹起来作为整体。

解决方法如下：

```html
<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>
```

上方代码中，让label标签的**for 属性值**，和 input 标签的 **id 属性值相同**，那么这个label和input就有绑定关系了。


当然了，复选框也有label：（任何表单元素都有label）

```html
<input type="checkbox" id="kk" />
<label for="kk">10天内免登陆</label>
```

## 多媒体标签

**声明：**
多媒体包含：音频、视频、Flash。网页上的多媒体基本都是Flash格式的。
.wmv、.dat、.mob、.rmvb等视频格式，在网页上不能直接播放，需要安装第三方的插件，才可以播放。不同的浏览器，播客上述视频格式，所使用插件参数又不一样。
上述格式视频一般文件较大，不利于网络下载播放。
一般情况下，是将其它的视频格式，转成Flash来在网页上播放。转换软件：格式工厂等。
Flash格式的视频兼容性非常好，Flash格式的文件很小。

### `<bgsound>`标签：播放背景音乐
**属性：**
 - `src="音乐文件的路径"`
 - `loop="-1"`：属性值代表播放次数，-1代表循环播放。

举例：
```html
 <body>
	<bgsound src="王菲 - 清风徐来.mp3"></bgsound>
 </body>

```
运行效果：
打开网页后，在IE 8中播放正常，播放时网页上显示一片空白。在google浏览器中无法播放。
<br>
### `<embed>`标签：播放多媒体文件（音频、视频等）
主要应用Netscape浏览器，它不是W3C规范。

 > 备注：视频格式可以支持 mp4、wav等，但不是所有视频格式都支持。

**属性：**
 - `src="多媒体文件的路径"`
 - `loop="-1"`：属性值代表播放次数，-1代表循环播放。
 - `autostart="false"`：打开网页时，禁止自动播放。默认值是true。
 - `volume="100"`：设置默认的音量大小，测试发现这个值好像不起作用哦。
 - width：指Flash文件的宽度
 - height：指Flash文件的高度
 - quality：指Flash的播放质量，质量有高有低 hight  low
 - pluginspage：如果指定的Flash插件不存在，则从pluginspage指定的地方进行下载。
 - type：指定Flash的文件格式类型
 - wmode：指Flash的背景是否可以透明，取值：transparent是透明的

`<embed>`标签播放音频举例：
```html
 <body>
	<embed src="王菲 - 清风徐来.mp3"></embed>
 </body>

```
IE 8中的运行效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_37.png)

google浏览器中的运行效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_38.png)

注：在HTML5中新增了`<video>`标签播放视频。
<br>

### `<object>`标签：播放多媒体文件（音频、视频等）

主要应用IE浏览器，它是W3C规范。

**属性：**
 - `classid`：指定Flash插件的ID号，一般存在于注册表中。
 - `codebase`：如果Flash插件不存在，则从codebase指定的地址下载。
 - `<param>`标签的主要作用：设置具体的详细参数。

**总结：在网页中插入Flash时，为了同时兼容多种浏览器，需要将`<object>`标签和`<embed>`标签标记一起使用，但使用的顺序是：`<object>`中嵌套`<embed>`标记。**
举例：

```html
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="778" height="202">
  <param name="movie" value="images/banner.swf">
  <param name="quality" value="high">
  <param name="wmode" value="transparent">
  <embed src="images/banner.swf" width="778" height="202" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent"></embed>
</object>
```

## `<marquee>`：滚动字幕标签

如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动。
**属性：**
 - `direction="right"`：移动的目标方向。属性值可以是：`left`（从右向左移动，默认值）、`right`（从左向右移动）、`up`（从下向上移动）、`down`（从上向下移动）。

 - `behavior="slide"`：行为方式。属性值可以是：`slide`（只移动一次）、`scroll`（循环移动，默认值）、`alternate`（循环移动）、。
`alternate`和`scroll`属性值都是循环移动，区别在于：假设在`direction="right"`的情况下，`behavior="scroll"`表示从左到右、从左到右、从左到右···`behavior="alternate"`表示从左到右、从右到左、从左到右···

 - `scrollamount="30"`：移动的速度
 - `loop="3"`: 循环多少圈。负值表示无限循环
 - `scrolldelay="1000"`：移动一次休息多长时间。单位是毫秒。

举例：
```html
	<marquee behavior="alternate" direction="down"  width="300" height="200" bgcolor="#8c5dc1">我来了</marquee>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_04.gif)

## html废弃标签介绍

HTML现在只负责语义，而不负责样式。但是HTML一开始，连样式也包办了。这些样式的标签，都已经被废弃。

2004年之前的东西：

```html
<font size="9" color="red">哈哈</font>
```

下面这些标签都是css钩子，而不是原意：

```html
	<b>加粗</b>
	<u>下划线</u>
	<i>倾斜</i>
    <del>删除线</del>
	<em>强调</em>
	<strong>强调</strong>

```

这些标签，是有着浓厚的样式的作用，干涉了css的作用，所以HTML抛弃了他们。

类似的还有水平线标签：

```html
<hr />
```

换行标签：

```
<br />
```

但是，网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用`<br />`。不到万不得已，不要用br标签。

标准的div+css页面，只会用到种类很少的标签：

```
div  p  h1  span   a   img   ul   ol    dl    input
```

知道每个标签的特殊用法、属性。比如a标签，img的属性。

## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号（千古壹号id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/cnblogs/%E7%94%9F%E5%91%BD%E5%9B%A2%E9%98%9F%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg)
