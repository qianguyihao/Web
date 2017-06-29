

国庆节快乐，还在加班的童鞋，良辰必有重谢！

## 本文主要内容
<br>
 - 头标签
 - 排版标签：`<p>` &nbsp; &nbsp;&nbsp;`<br>` &nbsp;&nbsp;&nbsp; `<hr>` &nbsp;&nbsp;&nbsp; `<center>` &nbsp;&nbsp;&nbsp; `<pre>` &nbsp;&nbsp;&nbsp; `<div>` &nbsp;&nbsp;&nbsp; `<span>`
 - 字体标记：`<h1>`&nbsp;&nbsp;&nbsp; `<font>`&nbsp;&nbsp;&nbsp; `<b>`&nbsp;&nbsp;&nbsp; `<u>` &nbsp;&nbsp;&nbsp;`<sup>` &nbsp;&nbsp;&nbsp;`<sub>`
 - 超链接
 - 图片标签	



#### 前言

#### web标准

web标准介绍：

- w3c：万维网联盟组织，用来制定web标准的机构（组织）
- web标准：制作网页要遵循的规范。
- web标准规范的分类：结构标准、表现标准、行为标准。
- 结构：html。表现：css。行为：JavaScript。


web标准总结：

- 结构标准：相当于人的身体。html就是用来制作网页的。   
- 表现标准： 相当于人的衣服。css就是对网页进行美化的。
- 行为标准： 相当于人的动作。JS就是让网页动起来，具有生命力的。



#### 浏览器介绍

浏览器是网页运行的平台，常用的浏览器有IE、火狐（Firefox）、谷歌（Chrome）、猎豹浏览器、Safari和Opera等。如下图所示：

20170628_1350.png

浏览器内核：

|浏览器 | 内核|
|:-------------:|:-------------:|
|IE|trident |
|chrome / 欧鹏   |blink  |
|火狐|gecko|
|Safari|webkit|

PS：「浏览器内核」也就是浏览器所采用的「渲染引擎」，渲染引擎决定了浏览器如何显示网页的内 ，容以及页面的格式信息。**渲染引擎是兼容性问题出现的根本原因。**



#### Sublime Text 的使用

详情请移步至：[Sublime Text使用技巧](https://github.com/smyhvae/tools/blob/master/02-Sublime%20Text%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.md)








## 一、HTML的介绍
### 1、HTML的概述：
**html**全称为HyperText Mackeup Language，译为<font color=#0000ff>**超文本标记语言**</font>，不是一种编程语言，是一种描述性的标记语言，用于描述超文本中内容的显示方式。比如字体什么颜色，大小等。
 - 超文本：音频，视频，图片称为超文本。
 - 标记 ：<英文单词或者字母>称为标记，一个HTML页面都是由各种标记组成。

**作用**：HTML是负责描述文档语义的语言。

**注意**：HTML语言不是一个编程语言(有编译过程)，而是一个标记语言(<font color=#0000ff>**没有编译过程**</font>)，HTML页面直接由浏览器解析执行。 



#### HTML是负责描述文档语义的语言

html中，除了语义，其他什么都没有。

html是一个纯本文文件（就是用txt文件改名而成），用一些标签来描述文字的语义，这些标签在浏览器里面是看不到的，所以称为“超文本”，所以就是“超文本标记语言”了。
所以，接下来，我们肯定要学习一堆html中的标签对儿，这些标签对儿能够给文本不同的语义。


比如，面试的时候问你，h1标签有什么作用？

- 正确答案：给文本增加主标题的语义。
- 错误答案：给文字加粗、加黑、变大。


    
### 2、HTML的历史：
![html中标签发展趋势.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html166440-5b780bdc6b80a5fb.png)
 
我们专门来对XHTML做一个介绍。

**XHTML介绍：**
XHTML：Extensible Hypertext Markup Language，可扩展超文本标注语言。
XHTML的主要目的是为了<font color="blue">**取代HTML**</font>，也可以理解为HTML的升级版。
HTML的标记书写很不规范，会造成其它的设备(ipad、手机、电视等)无法正常显示。
XHTML与HTML4.0的标记基本上一样。
XHTML是<font color="blue">**严格的、纯净的**</font>HTML。

**编写XHTML的规范：**
（1）所有标记元素都要正确的嵌套，不能交叉嵌套。正确写法举例：`<h1><font></font></h1>`
（2）所有的标记都必须小写。
（3）所有的标记都必须关闭。
双边标记：`<span></span>`
单边标记：`<br>` 转成 `<br />`   `<hr>` 转成 `<hr />`还有`<img src=“URL” />`
（4）所有的属性值必须加引号。`<font  color="red"></font>`
（5）所有的属性必须有值。`<hr noshade="noshade">`、`<input  type="radio" checked="checked" />`
（6）XHTML文档开头必须要有DTD文档类型定义


#### html 
 



  
### 3、HTML的网络术语：
- 网页 ：由各种标记组成的一个页面就叫网页
- 主页(首页) : 一个网站的起始页面或者导航页面
- 标记：  `<p>`称为开始标记 ，`</p>`称为结束标记，也叫标签。每个标签都规定好了特殊的含义。
- 元素：`<p>内容</p>`称为元素.
- 属性：给每一个标签所做的辅助信息。
- xhtml： 符合XML语法标准的HTML。
- dhtml：dynamic，动态的。`javascript + css + html`合起来的页面就是一个dhtml。
- http：超文本传协议。用来规定客户端浏览器和服务端交互时数据的一个格式。SMTP 邮件传输协议，ftp:文件传输协议。


### 4、HTML的编辑工具：
- NotePad：记事本。
- EditPlus：语法高亮显示。技巧： 根据颜色判断单词是否出错 （不是100%）。不好的地方：没有代码提示。
- UltraEdit：根据颜色判断单词是否出错，可以显示2进制数据。
- Sublime：新一代的代码编辑器。
- dw(dreamweaver，专业工具) ：建立WEB站点和应用程序的专业工具。它将布局功能、开发工具、代码编辑组合在一起。有代码提示。

PS：后缀名不能决定文件格式，只能决定打开文件打开的方式。


### 5、计算机编码介绍：
计算机只能处理二进制的数据，其它数据，比如：0-9、a-z、A-Z，这些字符，我们定义一套规则来表示。假如：A用110表示，B用111表示等。

**ASCII码：**
美国发布的，用1个字节(8位二进制)来表示一个字符，共可以表示2^8=256个字符。
	美国的国家语言是英语，只要能表示0-9、a-z、A-Z、特殊符号。

**ANSI编码：**
**每个国家为了显示本国的语言，都对ASCII码进行了扩展**。用2个字节(16位二进制)来表示一个汉字，共可以表示2^16＝65536个汉字。例如：
中国的ANSI编码是GB2312编码(简体)，对6763汉字进行编码，含600多特殊字符。另外还有GBK(简体)。
日本的ANSI编码是JIS编码。
台湾的ANSI编码是BIG5编码（繁体）。

**GBK：**
对GB2312进行了扩展，用来显示罕见的、古汉语的汉字。现在已经收录了2.1万左右。并提供了1890个汉字码位。K的含义就是“扩展”。

**Unicode编码(统一编码)：**
用4个字节(32位二进制)来表示一个字符，想法不错，但效率太低。例如，字母A用ASCII表示的话一个字节就够，可用Unicode编码的话，得用4个字节表示，造成了空间的极大浪费。A的Unicode编码是0000 0000 0000 0000 0000 0000 0100 0000

**UTF-8(Unicode Transform Format)编码：**
根据字符的不同，选择其编码的长度。比如：一个字符A用1个字节表示，一个汉字用2个字节表示。

毫无疑问，开发中，都用**UTF-8**编码吧，准没错。


### 6、HTML颜色介绍：
**颜色表示：**
 - 纯单词表示：red、green、blue、orange、gray等
 - 10进制表示：rgb(255,0,0)
 - 16进制表示：#FF0000、#0000FF、#00FF00等

**RGB色彩模式：**
 - 自然界中所有的颜色都可以用红、绿、蓝(RGB)这三种颜色波长的不同强度组合而得，这就是人们常说的三原色原理。
 - RGB三原色也叫加色模式，这是因为当我们把不同光的波长加到一起的时候，可以得到不同的混合色。例：红+绿=黄色，红+蓝＝紫色，绿+蓝=青
 - 在数字视频中，对RGB三基色各进行8位编码就构成了大约1678万种颜色，这就是我们常说的真彩色。所有显示设备都采用的是RGB色彩模式。
 - RGB各有256级(0-255)亮度，256级的RGB色彩总共能组合出约1678万种色彩，即256×256×256=16777216 




## 二、HTML的规范
 - HTML是一个弱势语言
 - HTML不区分大小写
 - HTML页面的后缀名是html或者htm(有一些系统不支持后缀名长度超过3个字符，比如dos系统)
 - HTML的结构：
声明部分：主要作用是用来告诉浏览器这个页面使用的是那个标准。<!doctype html>是HTML5标准。
head部分： 不会显示在页面上，作用是告诉服务器一些页面的额外信息。
body部分：我们所写的代码必须放在此标签內。

目前，IE浏览器是完全不支持H5的，支持最好的是Opera浏览器，可以支持95%以上；其次是google，可以支持一部分H5。

## 三、HTML的各种标签
> 备注：
> - 所有的浏览器默认情况下都会忽略空格和空行
> - 每个标签都有私有属性。也都有公有属性。
> - html中表示长度的单位都是像素。HTML只有一种单位就是像素。

HTML标签通常是成对出现的（<font color="blue">**双边标记**</font>），比如 `<div>` 和 `</div>`，也有单独呈现的标签（<font color="blue">**单边标记**</font>），如：`<br />`、`<hr />`和`<img src=“images/1.jpg” />`等。

属性与标记之间、各属性之间需要以空格隔开。属性值以双引号括起来。




## 1、头标签
头标签都放在<head></head>头部分之间。包括：`<title>`、`<base>`、`<meta>`、`<link>`

 - `<title>`：指定整个网页的标题，在浏览器最上方显示。
 - `<base>`：为页面上的所有链接规标题栏显示的内容定默认地址或默认目标。 
 - `<meta>`：提供有关页面的基本信息
 - `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
 - `<link>`：定义文档与外部资源的关系。



我们打开EditPlus软件，新建一个html文件，自动生成的代码如下：(在Sublime Text中安装`Emmet`插件，新建html文件，输入`html:5`后，按 `Tab`键，也可自动生成下面的代码)

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
 </head>
 <body>
  
 </body>
</html>
```
上面的`<meta>`标签都不用记，但是另外还有一个`<meta>`标签是需要记住的：

```html
<meta http-equiv="refresh" content="3;http://www.baidu.com">
```
上面这个标签的意思是说，3秒之后，自动跳转到百度页面。

### `<body>`标签的属性
其属性有：
 - `bgcolor`：设置整个网页的背景颜色。
 - `background`：设置整个网页的背景图片。
 - `text`：设置网页中的文本颜色。
 - `leftmargin`：网页的左边距。IE浏览器默认是8个像素。
 - `topmargin`：网页的上边距。
 - `rightmargin`：网页的右边距。
 - `bottommargin`：网页的下边距。

`<body>`标签另外还有一些属性，这里用个例子来解释：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_39.png)

上方代码中，当我们对`点我点我`这几个字使用超链时，`link`属性表示默认显示的颜色、`alink`属性表示鼠标点击但是还没有松开时的颜色、`vlink`属性表示点击完成之后显示的颜色。效果如下：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_05.gif)





## 2、排版标签

### 注释标签
```html
<!-- 注释  -->
```
<br>
### 段落标签`<p>`
```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```
属性：
 - `align="属性值"`：对齐方式。属性值包括left center right。
举例：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html166440-1dcd2ad6e6353559.png)

<br>
### 换行标签`<br>`
当你打算结束一行，而又不想开始一个新段落时，`<br> `标签就派上用场了。无论你将它置于何处，`<br> `标签都会产生一个强制的换行。
```html
This <br> is a para<br>graph with line breaks
```
效果如下：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html03.png)

上图可以看到，`<p>`标签和`<br>`标签的区别在于：`<p>`标签会在段落的前后自动插入一个空行，而`<br>`标签没有空行；而且`<br>`标签没有属性。
注意`<br>` 没有结束标签，把`<br>`标签写为 `<br/>` 是经得起未来考验的做法，XHTML 和 XML 都接受在打开的标签内部来关闭标签的做法。

<br>
### 水平线标签`<hr>`
水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。
效果如下：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_04.png)

属性：
 - `align="属性值"`：设定线条置放位置。属性值可选择：left right center。
 - `size="2" `：设定线条粗细。以像素为单位，内定为2。
 - `width="500"`或`width="70%"`：设定线条长度。可以是绝对值（单位是像素）或相对值。如果设置为相对值的话，内定为100%。
 - `color="#0000FF"`：设置线条颜色。
 - `noshade`：不要阴影，即设定线条为平面显示。若没有这个属性则表明线条具阴影或立体，这是内定值。
属性效果演示：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_05.png)

<br>
### 内容居中标签`<center>`
此时center代表是一个标签，而不是一个属性值了。只要是在这个标签里面的内容，都会居于浏览器的中间。
效果演示：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_06.png)

到了H5里面，center标签不建议使用。

<br>
### 预定义（预格式化）标签：`<pre>`
含义：将保留其中的所有的空白字符(空格、换行符)，原封不动的输出结果（告诉浏览器不要忽略空格和空行）
说明：真正排网页过程中，`<pre>`标签几乎用不着。但在PHP中用于打印一个数组时使用。

效果演示：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_07.png)

上图中，好像红框部分的字体变小了，而且还出现了缩进，好吧， 这个其实是浏览器搞的鬼。
为什么要有`<pre>`这个标签呢？答案是：
>  所有的浏览器默认情况下都会忽略空格和空行。

好吧，其实这个标签也用的比较少。

<br>
### 块级标签 `<div>`
把标签中的额内容作为一个块儿来对待(division)。必须单独占据一行。

属性：
 - `align="属性值"`：设置块儿的位置。属性值可选择：left right center。

<br>
### 块级标签 `<span>`
`<span>`和`<div>`唯一的区别在于：`<span>`是不换行的，而`<div>`是换行的。如果单独在网页中插入这两个元素，不会对页面产生任何的影响。这两个元素是专门为定义CSS样式而生的或者说，DIV+CSS来实现各种样式。。

效果举例：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_08.png)

## 3、字体标签
### 标题
标题使用`<h1>`至`<h6>`标签进行定义。`<h1>`定义最大的标题，`<h6>`定义最小的标题。具有align属性，属性值可以是：left、center、right。
效果演示：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_09.png)

### 字体标签`<font>`

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

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_10.png)

### 特殊字符
 - `&nbsp;`：空格
 - `&lt;`：小于号
 -  `&gt;`：大于号 
 - `&amp;`：符号`&`
 - `&quot;`：双引号
 - `&apos;`：单引号
 - `&copy;`：版权`©`
 - `&trade;`：商标`™`
 -  `&#32464;`：文字`绐`。其实，`#32464`是汉字`绐`的unicode编码。

比如说，你想把`<p>`作为一个文本在页面上显示，直接写`<p>`是肯定不行的，因为这代表的是一个段落标签，所以这里需要用到转义字符。应该这么写：
```html
这是一个HTML语言的&lt;p&gt;标签
```
正确的效果如下：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_11.png)

错误的效果如下：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_12.png)

其实我们只要记住前三个符号就行了，其他的在需要的时候查一下就行了。而且，EditPlus软件中是可以直接点击这些符号进行选择的：

![Paste_Image.png](
http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_13.png)

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


<br>
### 粗体标签`<b>`或`<strong>`
效果：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_14.png)

### 下划线标记 `<u>`   中划线标记`<s>`

<br>
### 斜体标记  `<i>`或`<em>`
效果：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_15.png)

<br>
### 上标`<sup>`   下标`<sub>`
上小标这两个标签容易混淆，怎么记呢？这样记：`b`的意思是`bottom：底部`
举例：
```html
O<sup>2</sup>    5<sub>3</sub>
```
效果：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_16.png)

## 4、超链接
超链接有三种形式：
**1、外部链接**：链接到外部文件。举例：
```html
<a href="02页面.html">点击进入另外一个文件</a>
```
效果：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_17.png)

**2、锚链接**：
指给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**。比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就是利用到了锚链接。
首先我们要创建一个锚，也就是说，使用`name`属性给那个特定的位置起个名字。效果如下：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_18.png)

上图中解释：
11行代码表示，顶部这个锚的名字叫做name1。
然后在底部设置超链接，点击时将回到顶部。注意**上图中红框部分的`#`号不要忘记了**，表示跳到名为name1的特定位置，这是规定。如果少了`#`号，点击之后，就会跳到name1这个文件或者name1这个文件夹中去。
如果我们将上图中的第28行代码写成：
```html
<a href="a.hhml#name1">回到顶部</a>
```
那就表示，点击之后，跳转到`a.html`页面的`name1锚点`中去。

说明：name属性是HTML4.0以前使用的，id属性是HTML4.0后才开始使用。为了向前兼容，因此，name和id这两个属性都要写上，并且值是一样的。

**3、邮件链接**：
代码举例：
```html
<a href="mailto:smyhvae@163.com">点击进入我的邮箱</a>
```
效果：点击之后，会弹出outlook，作用不大。

**超链接的属性：**
 - `href`：目标URL
 - `name`：主要用于设置一个锚点的名称。
 - `target`：告诉浏览器用什么方式来打开目标页面。`target`属性有以下几个值：
> `_self`：在同一个网页中显示（默认值）
> `_blank`：打开新的网页（新的标签页）显示
> `_parent`：在父窗口中显示
> `_top`：在顶级窗口中显示

举例：
```html
<a href="页面2.html" target="_blank">在新的页面中打开新的网页</a>
```

> 备注：`_parent`和`_top`值只能用在框架中。

## 5、图片标签
img: 代表的就是一张图片。是单边标记。
**属性：**
 - `src`属性：指图片的路径。
在写**图片的路径**时，有两种写法：
写法一：**相对路径**。相对当前页面所在的路径。两个标记.和.. ,分表代表当前目录和父路径。
举例1：
```html
<!-- 当前目录中的图片 -->
<img src="2.jpg">
<img src=".\2.jpg"> 
<!-- 上一级目录中的图片 -->
<img src="..\2.jpg">
```
举例2：
```html
<img src="images/1.jpg">
```
上方代码的意思是说，当前页面有一个并列的文件夹`images`，在文件夹`images`中存放了一张图片`1.jpg`
效果：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_19.png)

写法二：**绝对路径**。包括以下两种：
（1）以盘符开始的绝对路径。举例：
```html
<img src="C:\Users\smyhvae\Desktop\html\images\1.jpg">
```
（2）网络路径。举例：
```html
<img src="http://p1.yokacdn.com/pic/beauty/ytqx/2012/U278P1T117D698193F2577DT20120831155008_maxw808.jpg">
```
各位自己打开上面的网络连接看看是啥。

 - `width`：宽度
 - `height`：高度
 - `Align`：指图片的水平对齐方式，属性值可以是：left、center、right
 - `title`：**提示性文本**。公有属性。也就是鼠标悬停时出现的文本。
 - `border`：给图片加边框（描边），单位是像素，边框的颜色是黑色
 - `Hspace`：指图片左右的边距
 - `Vspace`：指图片上下的边距

 - `Alt`：当图片显示不出来的时候代替图片显示的内容
举例：
```html
<img src="images/1.jpg" width="300" height="`188" title="这是美女">
```
效果：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_20.png)

`Alt`属性效果演示：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_21.png)

 - 图片的`align`属性：**图片和周围文字的相对位置**。属性取值可以是：bottom（默认）、center、top、left、right。
我们来分别看一下这`align`属性的这几个属性值的区别。
1、`align=""`，图片和文字低端对齐。即默认情况下的显示效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_19.png)

2、`align="center"`：图片和文字水平方向上居中对齐。显示效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_21.png)

3、`align="top"`：图片与文字顶端对齐。显示效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_22.png)

4、`align="left"`：图片在文字的左边。显示效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_23.png)

5、`align="right"`：图片在文字的右边。显示效果：

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-02-cnblogs_html_24.png)

**注意事项：**
（1）如果要想保证图片等比例缩放，请只设置width和height中其中一个。
（2）如果想实现图文混排的效果，请使用align属性，取值为left或right。

<br>
### 热点问题
指的是对图片的**局部区域**加超链接。
我们知道，如果给图片加一个超链接，那个点击这个图片的任意区域，都会跳转到新的位置。举例：
```html
<a href="网页2.html"><img src="2.jpg"></a>
```
上方代码表明：给图片加一个超链接，那个点击这个图片的任意区域，都会跳转到新的位置。
现在，我只想对图片的局部区域加超链接，该怎么做呢？这里的难点在于坐标的确定，此时需要用到Dreamweaver。

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_22.png)

上图中，切换到“设计”标签，然后：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_23.png)

上图中，点击菜单栏`插入-图像`，导入图片：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_24.png)
，在图片上点击右键，选择`属性`，弹出属性面板：

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_25.png)

上图中，我们可以利用红框部分的`地图`绘制需要添加超链接的区域。箭头处表示的是要链接到的文件。蓝框部分表示打开新页面的方式，蓝狂部分的`new`是没有下划线的，它和`_blank`的含义是一样的。

![Paste_Image.png](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_26.png)
局部区域的热点设置完毕后，上图显示，红框部分就是多出的代码，也正是我们需要的代码。多出的代码如下：
```html
<img src="file:///C|/Users/smyhvae/Desktop/html/1.jpg" alt="" width="488" height="730" usemap="#Map"/>
<map name="Map">
  <area shape="circle" coords="227,374,63" href="file:///C|/Users/smyhvae/Desktop/html/网页2.html" target="_blank">
</map>
```
上方代码中，第一行的`usemap="#Map"`表示我要引用名为`Map`的地图。
然后第02至第04行就给出了地图的定义。
效果演示：

![3.gif](http://7sby7r.com1.z0.glb.clouddn.com/3.gif)

最后，送上妹子的近照一张。楼主已经仁至义尽了。

![](http://7sby7r.com1.z0.glb.clouddn.com/2015-10-01-cnblogs_html_20150219214912_11994.jpg)

怎么？还没看够？且看下文：[HTML标签----图文详解（二）](http://www.cnblogs.com/smyhvae/p/4852863.html)

##我的公众号

下图是我的微信公众号（生命团队id：`vitateam`），欢迎有心人关注。<font color=#0000ff>**博客园分享技术，公众号分享心智**</font>。

我会很感激第一批关注我的人。**此时，年轻的我和你，一无所有；而后，富裕的你和我，满载而归。**

![](http://7sby7r.com1.z0.glb.clouddn.com/cnblogs/%E7%94%9F%E5%91%BD%E5%9B%A2%E9%98%9F%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg)






