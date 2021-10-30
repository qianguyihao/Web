---
title: 01-JavaScript简介
---

<ArticleTopAd></ArticleTopAd>

## JavaScript历史和发展

Web前端有三层：

- HTML：从语义的角度，描述页面**结构**

- CSS：从审美的角度，描述**样式**（美化页面）

- JavaScript（简称JS）：从交互的角度，描述**行为**（实现业务逻辑和页面控制）

### JavaScript 的历史

1、JavaScript诞生于**1995年**，是由**网景**公司（Netscape）的员工 Brendan Eich（兰登 • 艾奇，1961年～）发明，最初命名为LiveScript。1995年12月与SUN公司合作，因市场宣传需要，为了蹭Java的热度，改名为 JavaScript。

补充：

> 1994年网景公司发布历史上第一个比较成熟的浏览器(Navigator 0.9), 但是只能浏览不能**交互**。1995年为了解决表单有效性验证就要与服务器进行多次地往返交互问题，网景公司录用 Brendan Eich（兰登 • 艾奇），他只用了10天就开发出 LiveScript 语言的第一版。

> 由于 Sun 公司当时的 Java 语言特别火，所以为了傍大牌，就借势改名为JavaScript。如同“北大”和“北大青鸟”的关系，“北大青鸟”就是傍“北大”的大牌。

> 同时期还有其他的网页语言，比如VBScript、JScript等等，但是后来都被JavaScript打败了，所以现在的浏览器中，只运行一种脚本语言就是JavaScript。

2、JavaScript是Sun注册并授权给Netscape使用的商标。后来 Sun 公司 被Oracle收购，JavaScript版权归Oracle所有。

3、1996年，微软为了抢占市场，推出了`JScript`在IE3.0中使用。

4、1996年11月网景公司将JS提交给ECMA(国际标准化组织)成为国际标准，用于对抗微软。

补充：

> JavaScript是世界上用的最多的**脚本语言**。

> Java和JavaScript的关系，就好比：雷锋和雷峰塔的关系、老婆和老婆饼的关系、北大和北大青鸟的关系。

推荐阅读链接：

- [网道 |  JavaScript 语言的历史](https://wangdoc.com/javascript/basic/history.html)



###JavaScript 的发展：蒸蒸日上

2003年之前，JavaScript被认为“牛皮鲜”，用来制作页面上的广告，弹窗、漂浮的广告。什么东西让人烦，什么东西就是JavaScript开发的。所以很多浏览器就推出了屏蔽广告功能。

2004年，JavaScript命运开始改变。那一年，**谷歌公司开始带头使用Ajax技术**，Ajax 技术就是JavaScript的一个应用。并且，那时候人们逐渐开始提升用户体验了。Ajax有一些应用场景。比如，当我们在搜索引擎框搜文字时，输入框下方的智能提示，可以通过Ajax实现。比如，当我们注册网易邮箱时，能够及时发现用户名是否被占用，而不用跳到另外一个页面。从2005年开始，几乎整个B/S开发界都在热情地追捧Ajax。

2007年乔布斯发布了第一款iPhone，这一年开始，更多的用户使用移动设备上网。这一年，互联网开始标准化，按照W3C规则三层分离，JavaScript越来越被重视。**JavaScript在移动页面中，也是不可或缺的**。

2010年，人们更加了解**HTML5技术**，**HTML5推出了一个东西叫做Canvas**（画布），工程师可以在Canvas上进行游戏制作，利用的就是JavaScript。

2011年，**Node.js诞生**，使JavaScript能够开发服务器端的程序。

如今，**WebApp**已经非常流行，也就是用**网页技术开发手机应用**。手机系统有iOS、安卓。公司如果要开发一个“美团”App，就需要招聘四队人马：iOS工程师10人、安卓工程师12人，前端工程师8人、后端工程师16人，共50人左右，开发成本巨大；而且如果要做需求迭代，就要改3个版本。现在，假设公司都用web技术，用html+css+javascript这一套技术就可以开发多种终端的页面。也易于迭代（网页如果改变，则所有的终端都会生效）。

有个故事是这么说的：

>2040年，某年轻产品经理说：有没有那么一个东西，不需要下载客户端，不需要限制品牌系统，无论是鸿蒙、安卓苹果，Linux和Windows等等都能实现，无差别预览信息。用户也能在这里交流，如果我们开发出来这个，我们这个产品的前景一定十分宽广。
>
>这时候一位40岁的老同志说：你说的这个是不是叫网页？
>
>这是半个世纪前的。

虽然目前WebApp（Web应用）在功能和性能上的体验远不如Native App（原生应用），但是“**在原生App中内嵌一些H5页面**”已经是一种趋势。

JavaScript的发展，正在大放异彩，正如周爱民的《JavaScript语言精髓与编程实战》中所描述的那样：

> 是ECMA赋予了JavaScript新的能力和活力。
>
> 在2015年6月，ES6发布了。这个ECMAScript版本几乎集成了当时其他语言梦寐以求的所有明星特性，并优雅地、不留后患地解决了几乎所有的JavaScript遗留问题—当然，其中那些最大的、最本质的和核心的问题其实都已经在ES5推出时通过“严格模式（strict mode）”解决了。
>
> ES6提出了四大组件：Promise、类、模块、生成器/迭代器。这事实上是在并行语言、面向对象语言、结构化语言和函数式语言四个方向上的奠基工作。相对于这种重要性来说，其他类似于解构、展开、代理等看起来很炫很实用的特性，反倒是浮在表面的繁华了。
>
> 主流引擎厂商开始通过ES6释放出它们的能量，于是JavaScript在许多新的环境中被应用起来，大量的新技术得以推动，例如，WebAssembly、Ohm、Deeplearn.js、TensorFlow.js、GPU.js、GraphQL、NativeScript等。有了Babel这类项目的强大助力，新规范得以“让少数人先用起来”，而标准的发布也一路披荆斩棘，以至于实现了“一年一更”。



## JavaScript 介绍

### JavaScript 入门易学性

- JavaScript对初学者比较友好。可以使用任何文本编辑工具编写，只需要浏览器就可以执行程序。

- JavaScript是有界面效果的（相比之下，C语言只有白底黑字）。

- JavaScript的入门较简单（进阶不易）。比如，JS是**弱变量类型**的语言，变量只需要用 var/let/const 来声明。而Java中变量的声明，要根据变量的类型来定义。

Java中需要这样定义变量：

```java
int a;
float a;
double a;
String a;
boolean a;
```

而 JS 中，只需要用一种方式来定义：

```JavaScript
// ES5 写法
var a;

// ES6 写法
const a;
let a;
```

### JavaScript 既是前端语言，又是后端语言

当 JavaScript 运行在用户的终端网页，而不是运行在服务器上的时候，我们称它之为“**前端语言**”。前端语言是服务于页面的显示和交互，不能直接操作数据库。

**后端语言**是运行在服务器上的，比如Java、C++、PHP等等，这些语言都能够操作数据库（对数据库进行“增删改查”），并在后台执行各种任务。

另外，Node.js是用 JavaScript 开发的，我们也可以用 Node.js 技术进行服务器端编程。

### JavaScript 的组成

JavaScript 基础分为三个部分：

- **ECMAScript**：JavaScript 的**语法标准**。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：Document Object Model（文档对象模型），JS操作**页面上的元素**（标签）的API。比如让盒子移动、变色、改变大小、轮播图等等。

- **BOM**：Browser Object Model（浏览器对象模型），JS操作**浏览器部分功能**的API。通过BOM可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。

通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS提供的API。

## JavaScript 的特点

### 特点1：解释型语言

JavaScript简称JS，是前端开发的一门脚本语言（解释型语言）。

**解释型语言**的意思是：程序执行之前，不需要事先被翻译为机器码；而是在运行时，边翻译边执行（翻译一行，执行一行）。关于解释型语言的详细介绍，上一篇文章有介绍。

为什么JS是解释型语言呢？这和浏览器的工作原理有关。浏览器中有一个专门的“JS解析器”可以让JS边解析边执行。

由于少了事先编译这一步骤，所以解释型语言开发起来尤为方便，但是解释型语言运行较慢也是它的劣势。不过解释型语言中使用了JIT技术，使得运行速度得以改善。

### 特点2：单线程

### 特点3：ECMAScript标准

ECMAScript是一种由 ECMA 国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）制定和发布的脚本语言规范。

JavaScript是由公司开发而成的，问题是不便于其他的公司拓展和使用。所以欧洲的这个ECMA的组织，牵头制定JavaScript的标准，取名为ECMAScript。

简单来说，**ECMAScript不是一门语言，而是一个标准**。ECMAScript 规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。

ECMAScript在2015年6月，发布了ECMAScript 6版本（ES6），语言的能力更强，包含了很多新特性），但也要考虑它的浏览器兼容性问题。

ECMA赋予了JavaScript新的能力和活力。

## hello world：开始写第一行JavaScript代码

> JS 代码的书写位置在哪里呢？这个问题，也可以理解成：引入 js 代码，有哪几种方式。

### 方式1：行内式

**代码举例**：

```javascript
<input type="button" value="点我点我" onclick="alert('千古壹号')" />
```

完整的可执行代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="点我点我" onclick="alert('千古壹号的方式1')" />
    </body>
</html>

```

**分析**：

- 可以将单行或少量 JS 代码写在HTML标签的事件属性中（以 on 开头的属性），比如放在上面的 `onclick`点击事件中。

- 这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS代码时，容易出错；引号多层嵌套时，也容易出错。

- 关于代码中的「引号」，在HTML标签中，我们推荐使用双引号, JS 中我们推荐使用单引号。

### 方式2、内嵌式

我们可以在html 页面的 `<body>` 标签里放入`<script type=”text/javascript”></script>`标签对儿，并在`<script>`里书写JavaScript 代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript">
		// 在这里写 js 代码
		alert('千古壹号的方式2');
		console.log('qianguyihao 方式2');
	</script>
</body>
</html>
```

**分析**：

- text表示纯文本，因为JavaScript也是一个纯文本的语言。

- 可以将多行JS代码写到 `<script>` 标签中。

- 内嵌式 JS 是学习时常用的方式。

### 方式3：引入外部的 JS 文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 引入外部的 js 文件 -->
	<script src="tool.js"></script>
</body>
</html>
```

上面这段代码，依然是放到body标签里，可以和内嵌的js代码并列。

另外，引用外部 JS文件的 script 标签中间不可以再写代码。

**总结**：

我们在实战开发中，基本都是采用方式3，因为这种方式，可以确保 html 文件和 js 文件是分开的，有利于代码的结构化和复用。很少会有人把一大堆 js 代码塞到 html 文件里。

## JS一些简单的语法规则

学习程序，是有规律可循的，程序会有有相同的部分，这些部分就是一种规定，不能更改，我们成为：语法。

（1）JavaScript对换行、缩进、空格不敏感。每一条语句以分号结尾。

也就是说：

代码一：

```html
<script type="text/javascript">
	alert("今天蓝天白云");
	alert("我很高兴");
</script>
```

等价于代码二：

```html
<script type="text/javascript">
	alert("今天蓝天白云");alert("我很高兴");
</script>
```

备注：每一条语句末尾要加上分号，虽然分号不是必须加的，如果不写分号，浏览器会自动添加，但是会消耗一些系统资源。

（2）所有的符号，都是英语的。比如**括号**、引号、分号。

如果你用的是搜狗拼音，**建议不要用shift切换中英文**（可以在搜狗软件里进行设置），不然很容易输入中文的分号；建议用ctrl+space切换中英文输入法。

（3）严格区分大小写。

## 注释

我们不要把 HTML、CSS、JavaScript三者的注释格式搞混淆了。

### HTML 的注释

```html
<!-- 我是注释  -->
```

### CSS的注释

```html
<style type="text/css">

	/*
		我是注释
	*/

	p{
		font-weight: bold;
		font-style: italic;
		color: red;
	}

</style>
```

注意：CSS只有`/*  */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效哦。

### JavaScript 的注释

单行注释：

```
// 我是注释
```

多行注释：

```
/*
	多行注释1
	多行注释2
*/
```

补充：VS Code中，单行注释的快捷键是「Ctrl + /」，多行注释的默认快捷键是「Alt + Shift + A」。

当然，如果你觉得多行注释的默认快捷键不方便，我们还可以修改默认快捷键。操作如下：

VS Code --> 首选项 --> 键盘快捷方式 --> 查找“注释”这两个字 --> 将原来的快捷键修改为「Ctrl + Shift + /」。

## Javascript 输入输出语句

### 弹出警告框：alert语句

我们要学习的第一个语句，就是alert语句。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            alert('千古壹号');
        </script>
    </body>
</html>

```

**alert**（英文翻译为“警报”）的用途：**弹出“警告框”**。

`alert("")`警告框的效果如下：

![](http://img.smyhvae.com/20180116_1735.gif)

这个警告框，在IE浏览器中长这样：

![](http://img.smyhvae.com/20180116_1906.png)

上面的代码中，如果写了两个alert()语句的话，网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

### 控制台输出：console.log("")

`console.log("")`表示在控制台中输出。console表示“控制台”，log表示“输出”。

在Chrome浏览器中，按F12即可打开控制台，选择「console」栏，即可看到打印的内容。

`console.log("")`效果如下：

![](http://img.smyhvae.com/20180116_2008.gif)

控制台是工程师、程序员调试程序的地方。程序员经常使用这条语句输出一些东西，来测试程序是否正确。

普通人是不会在意控制台的，但是有些网站另藏玄机。有个很有意思的地方是，百度首页的控制台，悄悄地放了一段招聘信息的彩蛋：

![](http://img.smyhvae.com/20180116_2010.png)

做前端开发时需要经常使用控制台做调试，我们甚至可以直接在控制台输入 JS 语句，然后打印执行结果。

**总结**：alert() 主要用来显示消息给用户，console.log() 用来给程序员做调试用。

### 弹出输入框：prompt()语句

`prompt()`就是专门用来弹出能够让用户输入的对话框。用得少，测试的时候偶尔会用。

JS代码如下：

```javascript
var a = prompt("请随便输入点什么东西吧");
console.log(a);
```

上方代码中，用户输入的内容，将被传递到变量 a 里面，并在控制台打印出来。

效果如下：

![](http://img.smyhvae.com/20180116_2230.gif)

**prompt()语句中，用户不管输入什么内容，都是字符串。**

**alert()和prompt()的区别：**

- alert() 可以直接使用。

- prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
