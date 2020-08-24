> 本文最初于 2015-10-03 发表于[博客园](http://www.cnblogs.com/smyhvae/p/4853995.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在 GitHub 上关注我，一起入门和进阶前端。

## 本文主要内容

-   CSS 概述
-   CSS 和 HTML 结合的三种方式：`行内样式表`、`内嵌样式表`、`外部样式表`
-   CSS 四种基本选择器：`标签选择器`、`类选择器`、`ID选择器`、`通用选择器`
-   CSS 几种扩展选择器：`后代选择器`、`交集选择器`、`并集选择器`
-   CSS 样式优先级

## 前言

## CSS 概述

CSS：Cascading Style Sheet，层叠样式表。CSS 的作用就是给 HTML 页面标签添加各种样式，**定义网页的显示效果**。简单一句话：CSS 将网页**内容和显示样式进行分离**，提高了显示功能。

css 的最新版本是 css3，**我们目前学习的是 css2.1**。 因为 css3 和 css2.1 不矛盾，必须先学 2.1 然后学 3。

接下来我们要讲一下为什么要使用 CSS。

**HTML 的缺陷：**

1. 不能够适应多种设备
2. 要求浏览器必须智能化足够庞大
3. 数据和显示没有分开
4. 功能不够强大

**CSS 优点：**

1. 使数据和显示分开
2. 降低网络流量
3. 使整个网站视觉效果一致
4. 使开发效率提高了（耦合性降低，一个人负责写 html，一个人负责写 css）

比如说，有一个样式需要在一百个页面上显示，如果是 html 来实现，那要写一百遍，现在有了 css，只要写一遍。现在，html 只提供数据和一些控件，完全交给 css 提供各种各样的样式。

### CSS 的重点知识点

盒子模型、浮动、定位

### CSS 整体感知

我们先来看一段简单的 css 代码：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style>
            p {
                color: red;
                font-size: 30px;
                text-decoration: underline;
                font-weight: bold;
                text-align: center;
                font-style: italic;
            }
            h1 {
                color: blue;
                font-size: 50px;
                font-weight: bold;
                background-color: pink;
            }
        </style>
    </head>
    <body>
        <h1>我是大标题</h1>
        <p>
            我是内容
        </p>
    </body>
</html>
```

解释如下：

![](http://img.smyhvae.com/20170710_1605.png)

我们写 css 的地方是 style 标签，就是“样式”的意思，写在 head 里面。后面的课程中我们将知道，css 也可以写在单独的文件里面，现在我们先写在 style 标签里面。

如果在 sublime 中输入`<st`或者`<style`然后按 tab 键，可以自动生成的格式如下：（建议）

```html
<style type="text/css"></style>
```

type 表示“类型”，text 就是“纯文本”，css 也是纯文本。

但是，如果在 sublime 中输入`st`或者`style`然后按 tab 键，可以自动生成的格式如下：（不建议）

```html
<style></style>
```

css 对换行不敏感，对空格也不敏感。但是一定要有标准的语法。冒号，分号都不能省略。

## CSS 语法

**语法格式：**（其实就是键值对）

```html
选择器{ 属性名: 属性值; 属性名: 属性值; }
```

或者可以写成：

```css
选择器 {
    k: v;
    k: v;
    k: v;
    k: v;
}
选择器 {
    k: v;
    k: v;
    k: v;
    k: v;
}
```

**解释：**

-   选择器代表页面上的某类元素，选择器后一定是大括号。
-   属性名后必须用冒号隔开，属性值后用分号（最后一个属性可以不用分号，但最好还是加上分号）。
-   冒号和属性值之间可以留一个空格（编程习惯的经验）。
-   如果一个属性有多个值的话，那么多个值用**空格**隔开。

**举例：**

```css
p {
    color: red;
}
```

**完整版代码举例：**

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>

<body>
    <p>洗白白</p>
    <p>你懂得</p>
    <p>我不会就这样轻易的狗带</p>
</body>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-01.png)

### css 代码的注释

**格式：**

```html
<style type="text/css">
    /*
		具体的注释
	*/

    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```

注意：CSS 只有`/* */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效哦。

接下来，我们要开始真正地讲 css 的知识咯。

css 怎么学？CSS 有两个知识部分：
1） 选择器，怎么选；
2） 属性，样式是什么

## CSS 的一些简单常见的属性

> 我们先来接触 CSS 的一些简单常见的属性，因为接下来需要用到。后期会专门用一篇文章来写 CSS 的属性。

以下属性值中，括号中的内容表示 sublime 中的快捷键。

**字体颜色：**（c）

```html
color:red;
```

color 属性的值，可以是英语单词，比如 red、blue、yellow 等等；也可以是 rgb、十六进制(后期详细讲)。

**字号大小：**（fos）

```html
font-size:40px;
```

font 就是“字体”，size 就是“尺寸”。px 是“像素”。单位必须加，不加不行。

**背景颜色：**（bgc）

```html
background-color: blue;
```

background 就是“背景”。

**加粗：**（fwb）

```html
font-weight: bold;
```

font 是“字体” weight 是“重量”的意思，bold 粗。

**不加粗：**（fwn）

```html
font-weight: normal;
```

normal 就是正常的意思。

**斜体：**（fsi）

```html
font-style: italic;
```

italic 就是“斜体”。

**不斜体：**（fsn）

```html
font-style: normal;
```

**下划线：**（tdu）

```html
text-decoration: underline;
```

decoration 就是“装饰”的意思。

**没有下划线：**（tdn）

```html
text-decoration:none;
```

## CSS 和 HTML 结合的方式（样式表）

CSS 和 HTML 结合的方式，其实就是问你 css 的代码放在哪里比较合适。CSS 代码理论上的位置是任意的，**但通常写在`<style>`标签里**。只要是`<style>`标签里的代码，那就是 css 代码，浏览器就是这样来进行解析的。

CSS 和 HTML 的结合方式有 3 种：

-   **行内样式**：在某个特定的标签里采用 style**属性**。范围只针对此标签。
-   **内嵌样式表**：在页面的 head 里采用`<style>`**标签**。范围针对此页面。
-   **引入外部样式表 css 文件**的方式。这种引入方式又分为两种： - 1、采用`<link>`标签。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>` - 2、采用 import，必须写在`<style>`标签中，并且必须是第一句。例如：`@import url(a.css) ;`

> 两种引入样式方式的区别：外部样式表中不能写<link>标签，但是可以写 import 语句。

下面来详细的讲一讲这三种方式。

### 1、CSS 和 HTML 结合方式一：行内样式

采用 style 属性。范围只针对此标签适用。

该方式比较灵活，但是对于多个相同标签的同一样式定义比较麻烦，适合局部修改。

举例：

```html
<p style="color:white;background-color:red">我不会就这样轻易的狗带</p>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-02.png)

### 2、CSS 和 HTML 结合方式二：内嵌样式表

在 head 标签中加入`<style>`标签，对多个标签进行统一修改，范围针对此页面。

该方式可以对单个页面的样式进行统一设置，但对于局部不够灵活。

举例：

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>

<body>
    <p>洗白白</p>
    <p style="color:blue">你懂得</p>
</body>
```

![](http://img.smyhvae.com/2015-10-03-css-03.png)

### 3、CSS 和 HTML 结合方式三：引入外部样式表 css 文件

**引入样式表文件**的方式又分为两种：

-   （1）**采用`<link>`标签**。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>`

-   （2）**采用 import**，必须写在`<style>`标签中，并且必须是第一句。例如：`@import url(a.css) ;`

> 两种引入样式方式的区别：外部样式表中不能写<link>标签，但是可以写 import 语句。

**具体操作如下：**

我们先在 html 页面的同级目录下新建一个`a.css`文件，那说明这里面的代码全是 css 代码，此时就没有必要再写`<style>`标签这几个字了。
`a.css`的代码如下：

```css
p {
    border: 1px solid red;
    font-size: 40px;
}
```

上方的 css 代码中，注意像素要带上 px 这个单位，不然不生效。
然后我们在 html 文件中通过`<link>`标签引入这个 css 文件就行了。效果如下：

![](http://img.smyhvae.com/2015-10-03-css-04.png)

这里再讲一个补充的知识：**`<link>`标签的 rel 属性：**。其属性值有以下两种：

-   `stylesheet`：定义的样式表
-   `alternate stylesheet`：候选的样式表

看字面意思可能比较难理解，我们来举个例子，一下子就明白了。
举例：

现在我们来定义 3 个样式表：

a.css：定义一个实线的黑色边框

```css
div {
    width: 200px;
    height: 200px;
    border: 3px solid black;
}
```

ba.css：蓝色的虚线边框

```css
div {
    width: 200px;
    height: 200px;
    border: 3px dotted blue;
}
```

c.css：来个背景图片

```css
div {
    width: 200px;
    height: 200px;
    border: 3px solid red;
    background-image: url('1.jpg');
}
```

然后我们在 html 文件中引用三个样式表：

```html
  <link rel = "stylesheet" type = "text/css" href = "a.css"></link>
  <link rel = "alternate stylesheet" type = "text/css" href = "b.css" title="第二种样式"></link>
  <link rel = "alternate stylesheet" type = "text/css" href = "c.css" title="第三种样式"></link>
```

上面引入的三个样式表中，后面两个样式表作为备选。注意备选的样式表中，title 属性不要忘记写，不然显示不出来效果的。现在来看一下效果：（在 IE 中打开网页）

![](http://img.smyhvae.com/2015-10-03-css-05.gif)

## CSS 的四种基本选择器

CSS 选择器：就是指定 CSS 要作用的标签，那个标签的名称就是选择器。意为：选择哪个容器。

CSS 的选择器分为两大类：基本选择题和扩展选择器。

**基本选择器：**

-   标签选择器：针对**一类**标签
-   ID 选择器：针对某**一个**特定的标签使用
-   类选择器：针对**你想要的所有**标签使用
-   通用选择器（通配符）：针对所有的标签都适用（不建议使用）

下面来分别讲一讲。

### 1、标签选择器：选择器的名字代表 html 页面上的标签

标签选择器，选择的是页面上所有这种类型的标签，所以经常描述“**共性**”，无法描述某一个元素的“个性”。

举例：

```html
p{ font-size:14px; }
```

上方选择器的意思是说：所有的`<p>`标签里的内容都将显示 14 号字体。

效果：

![](http://img.smyhvae.com/2015-10-03-css-06.png)

再比如说，我想让“生命壹号学完了安卓，继续学前端哟”这句话中的“前端”两个变为红色字体，那么我可以用`<span>`标签把“前端”这两个字围起来，然后给`<span>`标签加一个标签选择器。

代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style type="text/css">
            span {
                color: red;
            }
        </style>
    </head>
    <body>
        <p>生命壹号学完了安卓，继续学<span>前端</span>哟</p>
    </body>
</html>
```

【总结】需要注意的是：

（1）所有的标签，都可以是选择器。比如 ul、li、label、dt、dl、input。

（2）无论这个标签藏的多深，一定能够被选择上。

（3）选择的所有，而不是一个。

### 2、ID 选择器：规定用`#`来定义

针对某一个特定的标签来使用，只能使用一次。css 中的 ID 选择器以”#”来定义。

举例：

```html
#mytitle{ border:3px dashed green; }
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-08.png)

id 选择器的选择符是“#”。

任何的 HTML 标签都可以有 id 属性。表示这个标签的名字。这个标签的名字，可以任取，但是：

-   （1）只能有字母、数字、下划线。
-   （2）必须以字母开头。
-   （3）不能和标签同名。比如 id 不能叫做 body、img、a。

另外，特别强调的是：**HTML 页面，不能出现相同的 id，哪怕他们不是一个类型**。比如页面上有一个 id 为 pp 的 p，一个 id 为 pp 的 div，是非法的！

**一个标签可以被多个 css 选择器选择：**

比如，我们可以同时让标签选择器和 id 选择器作用于同一个标签。如下：

![](http://img.smyhvae.com/20170710_1737.png)

然后我们通过网页的审查元素看一下效果：

![](http://img.smyhvae.com/20170711_1540.png)

现在，假设选择器冲突了，比如 id 选择器说这个文字是红色的，标签选择器说这个文字是绿色的。那么听谁的？
实际上，css 有着非常严格的计算公式，能够处理冲突.

一个标签可以被多个 css 选择器选择，共同作用，这就是“**层叠式**”的第一层含义（第一层含义和第二层含义，放到 css 基础的第三篇文章里讲）。

### 3、类选择器：规定用圆点`.`来定义

、针对**你想要的所有**标签使用。优点：灵活。

css 中用`.`来表示类。举例如下：

```html
.one{ width:800px; }
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-07.png)

和 id 非常相似，任何的标签都可以携带 id 属性和 class 属性。class 属性的特点：

-   特性 1：类选择器可以被多种标签使用。

-   特性 2：同一个标签可以使用多个类选择器。用**空格**隔开。举例如下：（正确）

```html
<h3 class="teshu  zhongyao">我是一个h3啊</h3>
```

初学者常见的错误，就是写成了两个 class。举例如下：（错误）

```html
<h3 class="teshu" class="zhongyao">我是一个h3啊</h3>
```

**类选择器使用的举例：**

类选择器的使用，能够决定一个人的 css 水平。

比如，我们现在要做下面这样一个页面：

![](http://img.smyhvae.com/20170711_1639.png)

正确的思路，就是用所谓“公共类”的思路，就是我们类就是提供“公共服务”，比如有绿、大、线，一旦携带这个类名，就有相应的样式变化。对应 css 里的代码如下：

```html
<style type="text/css">
    .lv {
        color: green;
    }
    .da {
        font-size: 30px;
    }
    .underline {
        text-decoration: underline;
    }
</style>
```

然后让每个标签去选取自己想要用的类选择器：

```html
<p class="lv da">段落1</p>
<p class="lv xian">段落2</p>
<p class="da xian">段落3</p>
```

也就是说：

（1）不要去试图用一个类名，把某个标签的所有样式写完。这个标签要多携带几个类，共同完成这个标签的样式。

（2）每一个类要尽可能小，有“公共”的概念，能够让更多的标签使用。

问题：到底用 id 还是用 class？

答案：尽可能的用 class，除非极特殊的情况可以用 id。

原因：id 是 js 用的。也就是说，js 要通过 id 属性得到标签，所以 css 层面尽量不用 id，要不然 js 就很别扭。另一层面，我们会认为一个有 id 的元素，有动态效果。

举例如下：

![](http://img.smyhvae.com/20170711_1706.png)

上图所示，css 和 js 都在用同一个 id，会出现不好沟通的情况。

我们记住这句话：**类上样式，id 上行为**。意思是说，`class`属性交给 css 使用，`id`属性交给 js 使用。

**上面这三种选择器的区别：**

-   标签选择器针对的是页面上的一类标签。
-   ID 选择器是只针对特定的标签(一个)，ID 是此标签在此页面上的唯一标识。
-   类选择器可以被多种标签使用。

### 4、通配符`*`：匹配任何标签

通用选择器，将匹配任何标签。不建议使用，IE 有些版本不支持，大网站增加客户端负担。

效率不高，如果页面上的标签越多，效率越低，所以页面上不能出现这个选择器。

举例：

```css
* {
    margin-left: 0px;
    margin-top: 0px;
}
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-09.png)

## CSS 的几种高级选择器

**高级选择器：**

-   后代选择器：用空格隔开
-   交集选择器：选择器之间紧密相连
-   并集选择器（分组选择器）：用逗号隔开
-   伪类选择器

下面详细讲一下这几种高级（扩展）选择器。

### 1、后代选择器: 定义的时候用空格隔开

对于`E F`这种格式，表示**所有属于 E 元素后代的 F 元素**，有这个样式。空格就表示后代。

后代选择器，就是一种平衡：共性、特性的平衡。当要把**某一个部分的所有的什么**，进行样式改变，就要想到后代选择器。

后代选择器，描述的是祖先结构。

看定义可能有点难理解，我们来看例子吧。

举例 1：

```html
<style type="text/css">
    .div1 p {
        color: red;
    }
</style>
```

空格就表示后代。`.div1 p` 表示`.div1`的后代所有的`p`。

这里强调一下：这两个标签不一定是连续紧挨着的，只要保持一个后代的关联即可。也就是说，选择的是后代，不一定是儿子。

举例：

```html
<style type="text/css">
    h3 b i {
        color: red;
    }
</style>
```

上方代码的意思是说：定义了`<h3>`标签中的`<b>`标签中的`<i>`标签的样式。
同理：h3 和 b 和 i 标签不一定是连续紧挨着的，只要保持一个后代的关联即可。

效果：

![](http://img.smyhvae.com/2015-10-03-css-11.png)

或者还有下面这种写法：

![](http://img.smyhvae.com/2015-10-03-css-12.png)

上面的这种写法，`<h3>`标签和`<i>`标签并不是紧挨着的，但他们保持着一种后代关系。

还有下面这种写法：（含类选择器、id 选择器都是可以的）

![](http://img.smyhvae.com/2015-10-03-css-13.png)

我们在开头说了：**后代选择器，描述的是一种祖先结构**。我们举个例子来说明这句话：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style type="text/css">
            div div p {
                color: red;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="div2">
                <div class="div3">
                    <div class="div4">
                        <p>我是什么颜色？</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
```

上面 css 中的`div div p`，也能使文字的颜色变红。通过浏览器的审查元素，我们可以看到 p 元素的祖先列表：

![](http://img.smyhvae.com/20170711_1836.png)

讲到这里，我们再提一个 sublme 的快捷键。

在 sublime 中输入`p#haha`，按 tab 键后，会生成`<p id="haha"></p>`。

在 sublime 中输入`p.haha`，按 tab 键后，会生成`<p class="haha"></p>`。

### 2、交集选择器：定义的时候紧密相连

定义交集选择器的时候，两个选择器之间紧密相连。一般是以标签名开头，比如`div.haha`，再比如`p.special`。

如果后一个选择器是类选择器，则写为`div.special`；如果后一个选择器 id 选择器，则写为`div#special`。

来看下面这张图就明白了：

![](http://img.smyhvae.com/20170711_1851.png)

```css
h3.special {
    color: red;
}
```

选择的元素要求同时满足两个条件：必须是 h3 标签，然后必须是 special 标签。

举例：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>交集选择器测试</title>
        <style type="text/css">
            h3.special {
                color: red;
            }
        </style>
    </head>
    <body>
        <h3 class="special zhongyao">标题1</h3>
        <h3 class="special">我也是标题</h3>
        <p>我是段落</p>
    </body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20170711_1852.png)

注意，交集选择器没有空格。所以，没有空格的`div.red`（交集选择器）和有空格的`div .red`（后代选择器）不是一个意思。

交集选择器可以连续交：（一般不要这么写）

```css
h3.special.zhongyao {
    color: red;
}
```

上面这种写法，是 IE7 开始兼容的，IE6 不兼容。

### 3、并集选择器：定义的时候用逗号隔开

三种基本选择器都可以放进来。

举例：

```css
p,
h1,
#mytitle,
.one {
    color: red;
}
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-10.png)

## 一些 CSS3 选择器

> 所有的 CSS3 选择器，我们放在 CSS3 的内容里介绍。本文暂时先接触一部分。

### 浏览器的兼容性问题

> 我们可以用`IETester`这个软件测一下 CSS 在各个版本 IE 浏览器上的显示效果。

IE： 微软的浏览器，随着操作系统安装的。所以每个 windows 都有 IE 浏览器。各版本如下：

-   windows xp 操作系统安装的 IE6
-   windows vista 操作系统安装的 IE7
-   windows 7 操作系统安装的 IE8
-   windows 8 操作系统安装的 IE9
-   windows10 操作系统安装的 edge

浏览器兼容问题，要出，就基本上就是出在 IE6、7 身上，这两个浏览器是非常低级的浏览器。

为了测试浏览器 CSS 3 的兼容性，我们可以在网上搜"css3 机器猫"关键字，然后在不同的浏览器中打开如下链接：

-   <http://www1.pconline.com.cn/pcedu/specialtopic/css3-doraemon/>

测试结果如下：

![](http://img.smyhvae.com/20170711_1939.png)

我们可以在[百度统计](http://tongji.baidu.com/data/)里查看浏览器的市场占有率：

-   IE9 5.94%
-   IE8 21.19%
-   IE7 4.79%
-   IE6 4.11%

我们可以在<http://html5test.com/results/desktop.html>中查看

![](http://img.smyhvae.com/20170711_1948.png)

我们要知道典型的 IE6 兼容问题（面试要问），但是做项目我们兼容到 IE8 即可。不解决 IE8 以下的兼容问题，目的在于：培养更高的兴趣和眼光，别天天的跟 IE6 较劲。

我们可以用「IETester」软件看看 css 在各个浏览器中的显示效果。

### 1.子代选择器，用符号`>`表示

> IE7 开始兼容，IE6 不兼容。

```css
div > p {
    color: red;
}
```

div 的儿子 p。和 div 的后代 p 的截然不同。

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

> IE8 开始兼容；IE6、7 都不兼容

设置无序列表`<ul>`中的第一个`<li>`为红色：

```html
<style type="text/css">
    ul li:first-child {
        color: red;
    }
</style>
```

设置无序列表`<ul>`中的最后一个`<li>`为红色：

```css
ul li:last-child {
    color: blue;
}
```

序选择器还有更复杂的用法，以后再讲。

由于浏览器的更新需要过程，所以现在如果公司还要求兼容 IE6、7，那么就要自己写类名：

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
ul li.first{ color:red; } ul li.last{ color:blue; }
```

### 3.下一个兄弟选择器

> IE7 开始兼容，IE6 不兼容。

`+`表示选择下一个兄弟

```html
<style type="text/css">
    h3 + p {
        color: red;
    }
</style>
```

上方的选择器意思是：选择的是 h3 元素后面紧挨着的第一个兄弟。

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

## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
