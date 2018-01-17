

> 本文最初发表于[博客园]()，并在[GitHub](https://github.com/smyhvae/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。

## JavaScript简介

Web前端有三层：

- HTML：从语义的角度，描述页面**结构**

- CSS：从审美的角度，描述**样式**（美化页面）

- JavaScript：从交互的角度，描述**行为**（提升用户体验）

### JavaScript历史背景介绍

布兰登 • 艾奇（Brendan Eich，1961年～），1995年在网景公司，发明的JavaScript。

一开始JavaScript叫做LiveScript，但是由于当时Java这个语言特别火，所以为了傍大牌，就改名为JavaScript。如同“北大”和“北大青鸟”的关系。“北大青鸟”就是傍“北大”大牌。

同时期还有其他的网页语言，比如VBScript、JScript等等，但是后来都被JavaScript打败了，所以现在的浏览器中，只运行一种脚本语言就是JavaScript。

### JavaScript和ECMAScript的关系

ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）制定的标准。

JavaScript是由公司开发而成的，问题是不便于其他的公司拓展和使用。所以欧洲的这个ECMA的组织，牵头制定JavaScript的标准，取名为ECMAScript。

简单来说，**ECMAScript不是一门语言，而是一个标准**。符合这个标准的比较常见的有：JavaScript、Action Script（Flash中用的语言）。就是说，你JavaScript学完了，Flash中的程序也就轻而易举了。

ECMAScript在2015年6月，发布了ECMAScript 6版本，语言的能力更强（也包含了很多新特性）。但是，浏览器的厂商不能那么快去追上这个标准。

### JavaScript的发展：蒸蒸日上

2003年之前，JavaScript被认为“牛皮鲜”，用来制作页面上的广告，弹窗、漂浮的广告。什么东西让人烦，什么东西就是JavaScript开发的。所以浏览器就推出了屏蔽广告功能。

2004年，JavaScript命运开始改变，那一年，**谷歌公司开始带头使用Ajax技术**，Ajax技术就是JavaScript的一个应用。并且，那时候人们逐渐开始提升用户体验了。Ajax有一些应用场景。比如，当我们在百度搜索框搜文字时，输入框下方的智能提示，可以通过Ajax实现。比如，当我们注册网易邮箱时，能够及时发现用户名是否被占用，而不用调到另外一个页面。

2007年乔布斯发布了第一款iPhone，这一年开始，用户就多了上网的途径，就是用移动设备上网。
**JavaScript在移动页面中，也是不可或缺的**。并且这一年，互联网开始标准化，按照W3C规则三层分离，JavaScript越来越被重视。

2010年，人们更加了解**HTML5技术**，**HTML5推出了一个东西叫做Canvas**（画布），工程师可以在Canvas上进行游戏制作，利用的就是JavaScript。

2011年，**Node.js诞生**，使JavaScript能够开发服务器程序了。

如今，**WebApp**已经非常流行，就是用**网页技术开发手机应用**。手机系统有iOS、安卓。比如公司要开发一个“携程网”App，就需要招聘三队人马，比如iOS工程师10人，安卓工程师10人，前端工程师10人。共30人，开发成本大；而且如果要改版，要改3个版本。现在，假设公司都用web技术，用html+css+javascript技术就可以开发App。也易于迭代（网页一改变，所有的终端都变了）。

虽然目前WebApp在功能和性能上的体验远不如Native App，但是“WebApp慢慢取代Native App”很有可能是未来的趋势。

### JavaScript入门易学性

- JavaScript对初学者比较友好。

- JavaScript是有界面效果的（比如C语言只有白底黑字）。

- JavaScript是**弱变量类型**的语言，变量只需要用var来声明。而Java中变量的声明，要根据变量的类型来定义。

比如Java中需要定义如下变量：

```java
	int a;
	float a;
	double a;
	String a;
	boolean a;
```

而JavaScript中，只用定义一个变量：

```JavaScript
	var a;
```

- JavaScript不用关心其他的一些事情（比如内存的释放、指针等），更关心自己的业务。

### JavaScript是前台语言

JavaScript是前台语言，而不是后台语言。

JavaScript运行在用户的终端网页上，而不是服务器上，所以我们称为“**前台语言**”。JavaScript就是一个简单的制作页面效果的语言，就是服务于页面的交互效果、美化、绚丽、不能操作数据库。

**后台语言**是运行在服务器上的，比如PHP、ASP、JSP等等，这些语言都能够操作数据库，都能够对数据库进行“增删改查”操作。Node.js除外。

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：操作**浏览器部分功能**的API。比如让浏览器自动滚动。

PS：JS机械重复性的劳动几乎为0，基本都是创造性的劳动。而不像HTML、CSS中margin、padding都是机械重复劳动。

### JavaScript的特点

（1）简单易用：可以使用任何文本编辑工具编写，只需要浏览器就可以执行程序。

（2）解释执行（**解释语言**）：事先不编译、逐行执行、无需进行严格的变量声明。

（3）基于对象：内置大量现成对象，编写少量程序可以完成目标

## 开始写第一行JavaScript代码

### 写JavaScript代码的位置

页面中，我们可以在`<body>`标签里放入`<script type=”text/javascript”></script>`标签对儿，并在`<script>`里书写JavaScript程序：

```
		<script type="text/javascript">

		</script>
```

text表示纯文本，因为JavaScript也是一个纯文本的语言。

PS：在Sublime Text里，输入`<sc`后，按tab键，可以自动补齐。

### alert语句

我们要学习的第一个语句，就是alert语句。

```
		<script type="text/javascript">
			alert("生命壹号");
		</script>
```

**alert**（英文翻译为“警报”）的用途：**弹出“警告框”**。

`alert("")`警告框的效果如下：

![](http://img.smyhvae.com/20180116_1735.gif)

这个警告框，在IE浏览器中长这样：

![](http://img.smyhvae.com/20180116_1906.png)

上面的代码中，如果写了两个alert()语句的话，网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

### 语法规则

学习程序，是有规律可循的，就是程序是有相同的部分，这些部分就是一种规定，不能更改，我们成为：语法。

（1）JavaScript对换行、缩进、空格不敏感。

也就是说：

代码一：

```
		<script type="text/javascript">
			alert("今天蓝天白云");
			alert("我很高兴");
		</script>
```

等价于代码二：

```
		<script type="text/javascript">
			alert("今天蓝天白云");alert("我很高兴");
		</script>
```

备注：每一条语句末尾要加上分号，虽然分号不是必须加的，但是为了程序今后要压缩，如果不加分号，压缩之后将不能运行。

（2）所有的符号，都是英语的。比如**括号**、引号、分号。

如果你用的是搜狗拼音，**建议不要用shift切换中英文**（可以在搜狗软件里进行设置），不然很容易输入中文的分号；建议用ctrl+space切换中英文输入法。

### 注释

我们不要把html、CSS、JavaScript三者的注释格式搞混淆了。

（1）**html的注释：**

```html
<!-- 我是注释  -->
```

（2）**CSS的注释：**

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

（3）**JavaScript的注释：**

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

备注：sublime中，单行注释的快捷键是`ctrl+/`，多行注释的快捷键是`ctrl+shift+/`。

## Javascript 网页中输出信息的写法

### 弹出警告框：alert("")

我们在上一段讲到了alert语句，这里不再赘述。

### 控制台输出：console.log("")

`console.log("")`表示在控制台中输出。console表示“控制台”，log表示“输出”。

控制台在Chrome浏览器的F12中。控制台是工程师、程序员调试程序的地方。程序员经常使用这条语句输出一些东西，来测试程序是否正确。

`console.log("")`效果如下：

![](http://img.smyhvae.com/20180116_2008.gif)

普通人是不会在意控制台的，但是有些网站另藏玄机。有个很有意思的地方是，百度首页的控制台，悄悄地放了一段招聘信息：

![](http://img.smyhvae.com/20180116_2010.png)

毕竟做前端的人是经常使用控制台的。

接下来，我们开始学习JavaScript语法。

### 用户输入：prompt()语句

`prompt()`就是专门用来弹出能够让用户输入的对话框。

JS代码如下：

```javascript
			var a = prompt("请随便输入点什么东西吧");
			console.log(a);
```

上方代码中，用户输入的内容，将被传递到变量 a 里面。

效果如下：

![](http://img.smyhvae.com/20180116_2230.gif)

**prompt()语句中，用户不管输入什么内容，都是字符串。**

**alert和prompt的区别：**

```javascript
	alert("从前有座山");                //直接使用，不需要变量
	var a = prompt("请输入一个数字");   // 必须用一个变量，来接收用户输入的值
```

## 直接量：数字和字符串

“直接量”即**常量**，也称为“字面量”。看见什么，它就是什么。

简单的直接量有2种：数字、字符串。

（1）数值的直接量的表达非常简单，写上去就行了，不需要任何的符号。例如：

```javascript
1	alert(886);  //886是数字，所以不需要加引号。
```

（2）字符串也很简单，但一定要加上引号。可以是单词、句子等。

温馨提示：100是数字，"100"是字符串。


## 变量

### 变量的定义和赋值

变量举例如下：

```javascript
	var a = 100;
```

如下图所示：

![](http://img.smyhvae.com/20180116_2020.png)

var是英语“variant”变量的缩写。后面要加一个空格，空格后面的东西就是“变量名”，

- 定义变量：var就是一个**关键字**，用来定义变量。所谓关键字，就是有特殊功能的小词语。关键字后面一定要有空格隔开。

- 变量的赋值：等号表示**赋值**，将等号右边的值，赋给左边的变量。

- 变量名：我们可以给变量任意的取名字。

PS：**在JavaScript中，永远都是用var来定义变量**，这和C、Java等语言不同。

变量要先定义，才能使用。比如，我们不设置变量，直接输出：

```html
	<script type="text/javascript">
		console.log(a);
	</script>
```

控制台将会报错：

![](http://img.smyhvae.com/20180116_2040.png)

正确写法：

```javascript
	var a;   // 定义
	a = 100;  //赋值
	console.log(a);  //输出100
```

有经验的程序员，会把定义和赋值写在一起：

```javascript
	var a = 100;    //定义，并且赋值100
	console.log(a);  //输出100
```

### 变量的命名规范

变量名有命名规范：只能由英语字母、数字、下划线、美元符号$构成，且不能以数字开头，并且不能是JavaScript保留字。

下列的单词，叫做保留字，就是说不允许当做变量名，不用记：

```
abstract、boolean、byte、char、class、const、debugger、double、enum、export、extends、final、float、goto
implements、import、int、interface、long、native、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile
```

大写字母是可以使用的，并且大小写敏感。也就是说A和a是两个变量。

```javascript
	var A = 250;    //变量1
	var a = 888;    //变量2
```


## 变量的类型

变量里面能够存储数字、字符串等。变量会自动的根据存储内容的类型不同，来决定自己的类型。

### 数值型：number

如果一个变量中，存放了数字，那么这个变量就是数值型的。

```javascript
	var a = 100;			//定义了一个变量a，并且赋值100
	console.log(typeof a);	//输出a变量的类型
```

上方代码的输出结果为：

```
number
```

**typeof()**表示“**获取变量的类型**”，语法为：

```
typeof 变量
```

**在JavaScript中，只要是数，就是数值型(number)的**。无论整浮、浮点数（即小数）、无论大小、无论正负，都是number类型的。

### 字符串型：string

现有如下代码：

```javascript
	var a = "abcde";
	var b = "传智播客";
	var c = "123123";
	var d = "哈哈哈哈哈";
	var e = "";     //空字符串

	console.log(typeof a);
	console.log(typeof b);
	console.log(typeof c);
	console.log(typeof d);
	console.log(typeof e);
```

控制台输出如下：

```
	sting
	sting
	sting
	sting
	sting
```

### 连字符和加号的区别

键盘上的`+`可能是连字符，也可能是数字的加号。如下：

```
	console.log("我" + "爱" + "你");	//连字符，把三个独立的汉字，连接在一起了
	console.log("我+爱+你");			//原样输出
	console.log(1+2+3);				//输出6
```

输出：

```
我爱你
我+爱+你
6
```

**总结**：如果加号两边**都是**数值，此时是加。否则，就是连字符（用来连接字符串）。

举例1：

```javascript
	var a = "1";
	var b = 2;
	console.log(a + b);
```

控制台输出：

```
	12
```

举例2：

```
	var a = 1;
	var b = 2;
	console.log("a" + b);	//"a"就不是变量了！所以就是"a"+2 输出a2

```

控制台输出：

```
	a2
```

于是我们明白了，在变量中加入字符串进行连接，可以被同化为字符串。


## 变量值的传递（赋值）

语句：

```
	a = b;
```

把b的值赋给a，b不变。

将等号右边的值，赋给左边的变量；等号右边的变量，值不变。

来做几个题目。

举例1：

```
						 	//a		b       c
	var a = 1;              //1
	var b = 2;              //1     2
	var c = 3;              //1     2       3
	a = b + c;              //5     2       3
	b = c - a;              //5     -2      3
	c = a * b;              //5     -2      -10
	console.log(a);
	console.log(b);
	console.log(c);
```

输出：

```
	5
	-2
	-10
```

举例2：

```
									//a    b     c
			var a = 1;
			var b = 2;
			var c = 3;              //1     2     3
			a = a + b;              //3     2     3
			b = b + a;              //3     5     3
			c = c + b;              //3     5     8
			console.log(a);  //3
			console.log(b);  //5
			console.log(c);  //8
```

输出：

```
	3
	5
	8
```

举例3：

```
							    //a       b
			var a = "1";
			var b = 2;          //"1"     2
			a = a + b;          //"12"    2
			b = b + a;          //"12"    "212"
			console.log(a);     //输出12
			console.log(b);     //输出212
```

输出：

```
	12
	212
```

举例4：

```
							  //a         b
			var a = "1";
			var b = 2;
			a = b + a;       //"21"       2
			b = b + a;       //"21"       "221"
			console.log(a);  //21
			console.log(b)   //221


```


效果：

```
	21
	221

```

举例5：（这个例子比较特殊，字符串减去数字）

```
		var a = "3";
		var b = 2;
		console.log(a-b);
```


效果：（注意，字符串 - 数值 = 数值）

```
	1
```


## 变量格式转换

### 用户的输入

我们在上面的内容里讲过，`prompt()`就是专门用来弹出能够让用户输入的对话框。重要的是：用户不管输入什么，都是字符串。

### `parseInt()`：字符串转数字

**parseInt()可以将字符串转数字**。parse表示“转换”，Int表示“整数”（注意`Int`的拼写）。例如：

字符串转数字的方法：

```
	parseInt(“5”);
```

得到的结果是数字5。

**parseInt()还具有以下特性**：

（1）带有自动净化的功能；**只保留字符串最开头的数字**，后面的中文自动消失。例如：

```
	console.log(parseInt("2017年在公众号上写了6篇文章");
```

控制台输出：

```
	2017
```

（2）自动带有截断小数的功能：**取整，不四舍五入**。

例1：


```
	var a = parseInt(5.8) + parseInt(4.7);
	console.log(a);
```

控制台输出：

```
	9
```

例2：

```
	var a = parseInt(5.8 + 4.7);
	console.log(a);
```

控制台输出：

```
	10
```

## 我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

