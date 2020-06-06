

## 本文主要内容

字体标签： `<font>`、 `<b>`、 `<u>` 、`<sup>` 、`<sub>`

超链接 `<a>`

## 字体标签

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

### 下划线、中划线、斜体

- `<u>`：下划线标记

- `<s>`或`<del>`：中划线标记（删除线）

- `<i>`或`<em>`：斜体标记

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_15.png)

上面的这几个标签，常用于做一些小装饰、小图标。比如：

![](http://img.smyhvae.com/20180118_2340.png)

这张图中，我们通过查看京东网站的代码发现，箭头处的小图标都是用的标签`<i>`。



### 粗体标签`<b>`或`<strong>`（已废弃）

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_14.png)





### 字体标签`<font>`（已废弃）

属性：

- `color="红色"`或`color="#ff00cc"`或`color="new rgb(0,0,255)"`：设置字体颜色。
	设置方式：单词 \  #ff00cc \   rgb(0,0,255)

- `size`：设置字体大小。 取值范围只能是：1至7。取值时，如果取值大于7那就按照7来算，如果取值小于1那就按照1来算。如果想要更大的字体，那就只能通过css样式来解决。

- `face="微软雅黑"`：设置字体类型。

举例：

```html
<font face="微软雅黑" color="#FF0000" size="10">vae</font>
```

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_10.png)






### 上标`<sup>`   下标`<sub>`

上小标这两个标签容易混淆，怎么记呢？这样记：`b`的意思是`bottom：底部`
举例：
```html
O<sup>2</sup>    5<sub>3</sub>
```
效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_16.png)

## 三、超链接

超链接有三种形式，下面分别讲讲。

### 1、外部链接：链接到外部文件

举例：
```html
<a href="02页面.html">点击进入另外一个文件</a>
```

a是英语`anchor`“锚”的意思，就好像这个页面往另一个页面扔出了一个锚。是一个文本级的标签。

href（hypertext reference）：超文本地址。读作“喝瑞夫”，不要读作“喝夫”。

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_17.png)

当然，我们也可以直接点进链接，访问一个网址。代码举例如下：

```html
<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

### 2、锚链接

**锚链接**：给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**。比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就可以利用锚链接。

首先我们要创建一个**锚点**，也就是说，使用`name`属性或者`id`属性给那个特定的位置起个名字。效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_18.png)

上图中解释：

第11行代码表示，顶部这个锚的名字叫做name1。
然后在底部设置超链接，点击时将回到顶部（此时，网页中的url的末尾也出现了`#name1`）。注意**上图中红框部分的`#`号不要忘记了**，表示跳到名为name1的特定位置，这是规定。如果少了`#`号，点击之后，就会跳到name1这个文件或者name1这个文件夹中去。

如果我们将上图中的第28行代码写成：

```html
<a href="a.html#name1">回到顶部</a>
```

那就表示，点击之后，跳转到`a.html`页面的`name1锚点`中去。

说明：name属性是HTML4.0以前使用的，id属性是HTML4.0后才开始使用。为了向前兼容，因此，name和id这两个属性都要写上，并且值是一样的。

### 3、邮件链接

代码举例：

```html
<a href="mailto:xxx@163.com">点击进入我的邮箱</a>
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

blank就是“空白”的意思，就表示新建一个空白窗口。为啥有一个_ ，就是规定，无需解释。
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



## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200101.png)
