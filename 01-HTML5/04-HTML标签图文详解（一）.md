
## 一、排版标签

### 注释标签

```html
<!-- 注释  -->
```

### 段落标签`<p>`

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

属性：
 - `align="属性值"`：对齐方式。属性值包括left center right。
举例：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html166440-1dcd2ad6e6353559.png)

<br>

段落，是英语paragraph“段落”缩写。

HTML标签是分等级的，HTML将所有的标签分为两种：

- **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）

- **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。


从学习p的第一天开始，就要死死记住：**p标签是一个文本级标签，p里面只能放文字、图片、表单元素**。其他的一律不能放。

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

PS：Chrome浏览器是世界上HTML5支持最好的浏览器。提供了非常好的开发工具，非常适合我们开发人员使用。审查元素功能的快捷键是F12。

### 块级标签 `<div>`和`<span>`

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


### 换行标签`<br>`（已废弃）

当你打算结束一行，而又不想开始一个新段落时，`<br> `标签就派上用场了。无论你将它置于何处，`<br> `标签都会产生一个强制的换行。
```html
This <br> is a para<br>graph with line breaks
```
效果如下：

![](http://img.smyhvae.com/2015-10-01-cnblogs_html03.png)

上图显示，**`<p>`标签和`<br>`标签的区别在于**：`<p>`标签会在段落的前后自动插入一个空行，而`<br>`标签没有空行；而且`<br>`标签没有属性。

注意`<br>` 没有结束标签，把`<br>`标签写为 `<br/>` 是经得起未来考验的做法，XHTML 和 XML 都接受在打开的标签内部来关闭标签的做法。

<br>

### 水平线标签`<hr>`（已废弃）

水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。
效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_04.png)

属性：
 - `align="属性值"`：设定线条置放位置。属性值可选择：left right center。
 - `size="2" `：设定线条粗细。以像素为单位，内定为2。
 - `width="500"`或`width="70%"`：设定线条长度。可以是绝对值（单位是像素）或相对值。如果设置为相对值的话，内定为100%。
 - `color="#0000FF"`：设置线条颜色。
 - `noshade`：不要阴影，即设定线条为平面显示。若没有这个属性则表明线条具阴影或立体，这是内定值。
属性效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_05.png)

<br>

### 内容居中标签 `<center>`

此时center代表是一个标签，而不是一个属性值了。只要是在这个标签里面的内容，都会居于浏览器的中间。
效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_06.png)

到了H5里面，center标签不建议使用。

<br>

### 预定义（预格式化）标签：`<pre>`

含义：将保留其中的所有的空白字符(空格、换行符)，原封不动的输出结果（告诉浏览器不要忽略空格和空行）
说明：真正排网页过程中，`<pre>`标签几乎用不着。但在PHP中用于打印一个数组时使用。

效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_07.png)

上图中，好像红框部分的字体变小了，而且还出现了缩进，好吧， 这个其实是浏览器搞的鬼。
为什么要有`<pre>`这个标签呢？答案是：
>  所有的浏览器默认情况下都会忽略空格和空行。

好吧，其实这个标签也用的比较少。

## 二、字体标签

### 标题

标题使用`<h1>`至`<h6>`标签进行定义。`<h1>`定义最大的标题，`<h6>`定义最小的标题。具有align属性，属性值可以是：left、center、right。
效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_09.png)

### 字体标签`<font>`（已废弃）

属性：
 - `color="红色"`或`color="#ff00cc"`或`color="new rgb(0,0,255)"`：设置字体颜色。
	设置方式：单词 \  #ff00cc \   rgb(0,0,255)
 - `size`：设置字体大小。 取值范围只能是：1至7。取值时，如果取值大于7那就按照7来算，如果取值小于1那就按照1来算。如果想要更大的字体，那就只能通过css样式来解决。
设置：用’+2’代表值是5 或直接给值
 - `face="微软雅黑"`：设置字体类型。注意在写字体时，“微软雅黑”这个字不能写错。
举例：
```html
<font face="微软雅黑" color="#FF0000" size="10">vae</font>
```
效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_10.png)

### 特殊字符（转义字符）

- `&nbsp;`：空格	（non-breaking spacing，不断打空格）
- `&lt;`：小于号（less than）
-  `&gt;`：大于号（greater than）
- `&amp;`：符号`&`
- `&quot;`：双引号
- `&apos;`：单引号
- `&copy;`：版权`©`
- `&trade;`：商标`™`
-  `&#32464;`：文字`绐`。其实，`#32464`是汉字`绐`的unicode编码。

要求背诵的特殊字符有：`&nbsp;`、`&lt;`、`&gt;`、`&copy;`。


比如说，你想把`<p>`作为一个文本在页面上显示，直接写`<p>`是肯定不行的，因为这代表的是一个段落标签，所以这里需要用到**转义字符**。应该这么写：
```html
这是一个HTML语言的&lt;p&gt;标签
```
正确的效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_11.png)

错误的效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_12.png)

其实我们只要记住前三个符号就行了，其他的在需要的时候查一下就行了。而且，EditPlus软件中是可以直接点击这些符号进行选择的：

![Paste_Image.png](
http://img.smyhvae.com/2015-10-01-cnblogs_html_13.png)

来一张表格，方便需要的时候查询：

| 特殊字符 | 描述 |字符的代码 |
|:-------------|:-------------|:-----|
||空格符|`&nbsp;`|
|<|小于号|`&lt;`|
|> |大于号|`&gt;`|
|&|和号|`&amp;`|
|￥|人民币|`&yen;`|
|©|版权|`&copy;`|
|®|注册商标|`&reg;`|
|°|摄氏度|`&deg;`|
|±|正负号|`&plusmn;`|
|×|乘号|`&times;`|
|÷|除号|`&divide;`|
|²|平方2（上标2）|`&sup2;`|
|³|立方3（上标3）|`&sup3;`|

### 一些小标签/小标记

- `<u>`：下划线标记

- `<s>`或`<del>`：中划线标记（删除线）

- `<i>`或`<em>`：斜体标记

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_15.png)

上面的这几个标签，常用于做一些小装饰、小图标。比如：

20180118_2340.png

这张图中，我们通过查看京东网站的代码发现，箭头处的小图标都是用的标签`<i>`。

div的主要目的是用来布局，而小装饰却可以用来

### 粗体标签`<b>`或`<strong>`（已废弃）

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_14.png)

<br>

### 上标`<sup>`   下标`<sub>`

上小标这两个标签容易混淆，怎么记呢？这样记：`b`的意思是`bottom：底部`
举例：
```html
O<sup>2</sup>    5<sub>3</sub>
```
效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_16.png)

## 三、超链接

超链接有三种形式：

**1、外部链接**：链接到外部文件。举例：
```html
<a href="02页面.html">点击进入另外一个文件</a>
```

a是英语`anchor`“锚”的意思，就好像这个页面往另一个页面扔出了一个锚。是一个文本级的标签。

href是英语`hypertext reference`超文本地址的缩写。读作“喝瑞夫”，不要读作“喝夫”。

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_17.png)

当然，我们也可以直接点进链接，访问一个网址。举例如下；

```
	<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

**2、锚链接**：
指给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**。比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就是利用到了锚链接。
首先我们要创建一个**锚点**，也就是说，使用`name`属性或者`id`属性给那个特定的位置起个名字。效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_18.png)

上图中解释：

11行代码表示，顶部这个锚的名字叫做name1。
然后在底部设置超链接，点击时将回到顶部（此时，网页中的url的末尾也出现了`#name1`）。注意**上图中红框部分的`#`号不要忘记了**，表示跳到名为name1的特定位置，这是规定。如果少了`#`号，点击之后，就会跳到name1这个文件或者name1这个文件夹中去。

如果我们将上图中的第28行代码写成：
```html
<a href="a.html#name1">回到顶部</a>
```
那就表示，点击之后，跳转到`a.html`页面的`name1锚点`中去。

说明：name属性是HTML4.0以前使用的，id属性是HTML4.0后才开始使用。为了向前兼容，因此，name和id这两个属性都要写上，并且值是一样的。

**3、邮件链接**：
代码举例：
```html
<a href="mailto:smyhvae@163.com">点击进入我的邮箱</a>
```
效果：点击之后，会弹出outlook，作用不大。

### 超链接的属性

- `href`：目标URL
- `title`：悬停文本。
- `name`：主要用于设置一个锚点的名称。
- `target`：告诉浏览器用什么方式来打开目标页面。`target`属性有以下几个值：
	- `_self`：在同一个网页中显示（默认值）
	- `_blank`：**在新的窗口中打开**。
	- `_parent`：在父窗口中显示
	- `_top`：在顶级窗口中显示



`title`属性举例：

```html
<a href="09_img.html" title="很好看哦">结婚照</a>
```

效果如下：

![](http://img.smyhvae.com/20170630_1415.png)

`target`属性举例：

```html
<a href="1.html" title="悬停文本" target="_blank">链接的内容</a>
```

blank就是“空白”的意思，就表示新建一个空白窗口。为啥有一个_ ，就是规定，没啥好解释的。
也就是说，如果不写`target=”_blank”`那么就是在相同的标签页打开，如果写了`target=”_blank”`，就是在新的空白标签页中打开。

#### 备注1：分清楚img和a标签的各自的属性

区别如下：

```html
<img src="1.jpg" />
<a href="1.html"></a>
```
#### 备注2：a是一个文本级的标签

比如一个段落中的所有文字都能够被点击，那么应该是p包裹a：

```html
<p>
	<a href="">段落段落段落段落段落段落</a>
</p>
```

而不是a包裹p：

```html
<a href="">
	<p>
		段落段落段落段落段落段落
	</p>
</a>
```

a的语义要小于p，a就是可以当做文本来处理，所以p里面相当于放的就是纯文字。

## 四、图片标签

img: 代表的就是一张图片。是单边标记。

img是自封闭标签，也称为单标签。

#### 能插入的图片类型：

- 能够插入的图片类型是：jpg(jpeg)、gif、png、bmp等。

- 不能往网页中插入的图片格式是：psd、ai

> HTML页面不是直接插入图片，而是插入图片的引用地址，所以要先把图片上传到服务器上。

### `src`属性：图片的相对路径和绝对路径

这里涉及到图片的一个属性：

 - `src`属性：指图片的路径。

在写**图片的路径**时，有两种写法：相对路径、绝对路径

#### 1、**写法一：相对路径**

相对当前页面所在的路径。两个标记 `.` 和 `..` 分表代表当前目录和上一层路径。

举例1：

```html
<!-- 当前目录中的图片 -->
<img src="2.jpg">
<img src=".\2.jpg">
<!-- 上一级目录中的图片 -->
<img src="..\2.jpg">
```

img 是image“图片”的简写，src 是英语source“资源”的缩写。

相对路径不会出现这种情况：

```html
aaa/../bbb/1.jpg
```

`../`要么不写，要么就写在开头。

举例2：

```html
<img src="images/1.jpg">
```
上方代码的意思是说，当前html页面有一个并列的文件夹`images`，在文件夹`images`中存放了一张图片`1.jpg`
效果：

![Paste_Image.png](http://img.smyhvae.com/20151001_19.jpg)

相对路径的面试题。现有如下文件层级图：

![](http://img.smyhvae.com/20170630_1133.png)

问题：如果想在index.html中插入1.png，那么对应的img语句是？

分析：

现在document是最大的文件夹，里面有两个文件夹work和photo。work中又有一个文件夹叫做myweb。myweb文件夹里面有index.html。  所以index.html在myweb文件夹里面，上一级就是work文件夹，上两级就是document文件夹。通过document文件夹当做一个中转站，进入photo文件夹，看到了1.png。

答案：

```html
<img src="../../photo/1.png" />
```

#### 2、写法二：**绝对路径**

绝对路径包括以下两种：

（1）以盘符开始的绝对路径。举例：

```html
<img src="C:\Users\qianguyihao\Desktop\html\images\1.jpg">
```

（2）网络路径。举例：

```html
<img src="http://img.smyhvae.com/20200122_200901.png">

```


大家打开上面的img中的链接，可能有惊喜哦。

### 相对路径和绝对路径的总结

相对路径的好处：站点不管拷贝到哪里，文件和图片的相对路径关系都是不变的。
相对路径使用有一个前提，就是网页文件和你的图片，必须在一个服务器上。

问题：我的网页在C盘，图片却在D盘，能不能插入呢？

答案： 用相对路径不能，用绝对路径也不能。

注意：可以使用file://来插入，但是这种方法，没有任何意义！因为服务器上没有所谓c盘、d盘。

下面的方法是行的，但是没有任何工程上的意义，这是因为服务器没有盘符，linux系统没有盘符：

```html
<img src="file://C:\Users\Danny\Pictures\明星\1.jpg" alt="" />
```

总结一下：

- 我们现在无论是在a标签、img标签，如果要用路径。只有两种路径能用，就是相对路径和绝对路径。

- 相对路径，就是../   image/ 这种路径。从自己出发，找到别人；

- 绝对路径，就是http://开头的路径。

- 绝对不允许使用file://开头的东西，这个是完全错误的！

### img标签的其他属性

 - `width`：宽度
 - `height`：高度
 - `Align`（已废弃）：指图片的水平对齐方式，属性值可以是：top、middle、bottom、left、center、right。该属性已废弃，替换为 `vertical-align`这个CSS属性。
 - `title`：**提示性文本**。公有属性。也就是鼠标悬停时出现的文本。
 - `border`（已废弃）：给图片加边框，单位是像素，边框的颜色默认黑色。该属性已废弃，替换为 `border`这个CSS属性。
 - `Hspace`（已废弃）：指图片左右的边距。
 - `Vspace`（已废弃）：指图片上下的边距。

 - `alt`：当图片不可用（无法显示）的时候，代替图片显示的内容。alt是英语 alternate “替代”的意思，代表替换资源。（有的浏览器不支持）

举例：
```html
<img src="images/1.jpg" width="300" height="`188" title="这是美女">
```
效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_20.png)

`Alt`属性效果演示：（当图片 src 不可用的时候，显示文字。这样做，至少能让用户知道，这个图片大概是什么内容）

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_21.png)

 - 图片的`align`属性：**图片和周围文字的相对位置**。属性取值可以是：bottom（默认）、center、top、left、right。
我们来分别看一下这`align`属性的这几个属性值的区别。

1、`align=""`，图片和文字低端对齐。即默认情况下的显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_19.png)

2、`align="center"`：图片和文字水平方向上居中对齐。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_21.png)

3、`align="top"`：图片与文字顶端对齐。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_22.png)

4、`align="left"`：图片在文字的左边。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_23.png)

5、`align="right"`：图片在文字的右边。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_24.png)

**注意事项：**
（1）如果要想保证图片等比例缩放，请只设置width和height中其中一个。
（2）如果想实现图文混排的效果，请使用align属性，取值为left或right。

最后，送上妹子的近照一张。楼主已经仁至义尽了：http://img.smyhvae.com/2015-10-01-cnblogs_html_20150219214912_11994.jpg

怎么？还没看够？且看下文：[HTML标签----图文详解（二）](http://www.cnblogs.com/smyhvae/p/4852863.html)

