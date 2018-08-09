## 字面量：数字和字符串

“字面量”即**常量**，是固定值，不可改变。看见什么，它就是什么。

简单的字面量有2种：数字、字符串。

（1）数值的字面量非常简单，写上去就行了，不需要任何的符号。例如：

```javascript
1	alert(886);  //886是数字，所以不需要加引号。
```

（2）字符串的字面量也很简单，但一定要加上引号。可以是单词、句子等。

温馨提示：100是数字，"100"是字符串。

### 总结

字面量都可以直接使用，但是我们一般不会直接使用字面量。

如果直接使用字面量的话，非常麻烦。比如说，多个地方要用到同一个字面量，还不如事先定义一个变量，用来保存字面量。

变量更加方便我们使用，所以在开发中都是通过变量去保存一个字面量，而不会直接使用字面量。

## 变量


### 变量的概念

**变量**：变量可以用来保存字面量，而且变量的值可以任意改变。


### 变量的定义和赋值

在js中使用`var`关键字来声明一个变量。

变量举例如下：

```javascript
	var a = 100;
```

如下图所示：

![](http://img.smyhvae.com/20180116_2020.png)

var是英语“variant”变量的缩写。后面要加一个空格，空格后面的东西就是“变量名”：

- 定义变量：var就是一个**关键字**，用来定义变量。所谓关键字，就是有特殊功能的小词语。关键字后面一定要有空格隔开。

- 变量的赋值：等号表示**赋值**，将等号右边的值，赋给左边的变量。

- 变量名：我们可以给变量任意的取名字。

PS：**在JavaScript中，永远都是用var来定义变量**（在ES6 之前），这和C、Java等语言不同。

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

我们来整理一下变量的命名规则：

1.驼峰命名规则：getElementById/matherAndFather/aaaOrBbbAndCcc

2.变量命名必须以字母或是下标符号”_”或者”$”为开头。

3.变量名长度不能超过255个字符。

4.变量名中不允许使用空格，首个字不能为数字。

5.不用使用脚本语言中保留的**关键字**及**保留字**作为变量名。

6.变量名区分大小写。(javascript是区分大小写的语言)

7.汉语可以作为变量名。但是不建议使用，因为 low


## 标识符

**标识符**：在JS中所有的可以由我们自主命名的都可以称之为标识符。

例如：变量名、函数名、属性名都是属于标识符。

**关键字**：

![](http://img.smyhvae.com/20180714_1421.png)

**保留字**：

![](http://img.smyhvae.com/20180714_1422.png)


**其他不建议使用的标识符**：

![](http://img.smyhvae.com/20180714_1423.png)


## 变量的数据类型

变量里面能够存储数字、字符串等。变量会自动的根据存储内容的类型不同，来决定自己的类型。

数据类型指的就是字面量的类型，**在JS中一共有六种数据类型**：


- **基本数据类型（值类型）**：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义。

- **引用数据类型（引用类型）**：Object 对象。

PS：内置对象function、Array、Date、RegExp、Error等都是属于Object。

基本数据类型：参数赋值的时候，传数值。

引用数据类型：参数赋值的时候，传地址（修改的同一片内存空间）。

接下来，我们详细讲一下基本数据类型。

## String 字符串

来看个示例。现有如下代码：

```javascript
	var a = "abcde";
	var b = "生命壹号";
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

注意事项：

（1）在JS中，字符串需要使用引号引起来。使用双引号或单引号都可以，但是不要混着用。比如下面这样写是不可以的：

```
	var str = `hello";
```

（2）引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。但是单引号里可以嵌套双引号。

（3）**转义字符**：在字符串中我们可以使用`\`作为转义字符，当表示一些特殊符号时可以使用`\`进行转义。


- `\"` 表示 `"`

- `\'` 表示 `'`

- `\n` 表示换行

- `\t` 表示制表符

- `\\` 表示`\`

举例：

```javascript
    var str1 = "我说:\"今天\t天气真不错！\"";
    var str2 = "\\\\\\";

    console.log(str1);
    console.log(str2);
```


上方代码的打印结果：

```
	我说:"今天	天气真不错！"
	\\\
```

## 数值型：Number

在JS中所有的数值都是Number类型，包括整数和浮点数（小数）。

```javascript
	var a = 100;	//定义了一个变量a，并且赋值100
	console.log(typeof a);	//输出a变量的类型
```

上方代码的输出结果为：

```
number
```

**补充知识：**

`typeof()`表示“**获取变量的类型**”，返回的是小写，语法为：

```
typeof 变量
```

在JavaScript中，只要是数，就是 number 数值型的。无论整浮、浮点数（即小数）、无论大小、无论正负，都是 number 类型的。

**数值范围：**

由于内存的限制，ECMAScript 并不能保存世界上所有的数值。

- 最大值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308

- 最小值：`Number.MIN_VALUE`，这个值为： 5e-324

如果使用Number表示的变量超过了最大值，则会返回Infinity。

- 无穷大（正无穷）：Infinity

- 无穷小（负无穷）：-Infinity

注意，使用`typeof`检查Infinity也会返回number。

**NaN和isNaN()函数：**

（1）NaN：是一个特殊的数字，表示Not a Number，非数值。比如：

```javascript
    console.log("abc" / 18);  //结果是NaN

    console.log("abc" * "abcd"); //按理说，字符串相乘是没有结果的，但如果你非要让JS去算，它就一定会给你一个结果。结果是结果是NaN
```

注意：`typeof NaN`的返回结果是number。

Undefined和任何数值计算的结果为NaN。NaN 与任何值都不相等，包括 NaN 本身。

（2）isNaN() :任何不能被转换为数值的值都会导致这个函数返回 true。

```javascript
	isNaN(NaN);// true
	isNaN("blue"); // true
	isNaN(123); // false

```

**浮点数的运算**：

在JS中，整数的运算可以很精确，但是**小数的运算，可能会得到一个不精确的结果**。所以，千万不要使用JS进行对精确度要求比较高的运算。

如下：

```javascript
    var a = 0.1 + 0.2;
    console.log(a);  //打印结果：0.30000000000000004
```

上方代码中，打印结果并不是0.3，而是0.30000000000000004。你看，**就连小数的加法运算，都是不精确的**。

我们知道，所有的运算都要转换成二进制去计算，然而，二进制是无法精确表示1/10的。因此存在小数的计算不精确的问题。

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

于是我们明白了，在变量中加入字符串进行连接，可以被同化为字符串。【重要】


### 隐式转换

我们知道，`"2"+1`得到的结果其实是字符串，但是`"2"-1`得到的结果却是数值1，这是因为计算机自动帮我们进行了“**隐式转换**”。

也就是说，`-`、`*`、`/`、`%``这几个符号会自动进行隐式转换。例如：

```javascript
	var a = "4" + 3 - 6;
	console.log(a);
```

输出结果：

```javascript
	37
```

虽然程序可以对`-`、`*`、`/`、`%``这几个符号自动进行“隐式转换”；但作为程序员，我们最好自己完成转换，方便程序的可读性。


## 布尔值：Boolean

true 和 fase。

## null和undefined

### `null`：空值

**null**：专门用来表示一个为空的**对象**。（注意，专门用来表示**空对象**）


- Null类型的值只有一个，就是null。比如：`var a = null`。


- 使用 typeof 检查一个null值时，会返回object。

### `undefined`：未定义

**undefined**：**声明**一个变量，但是没有**赋值**，此时它的值就是undefined。例如：`var a;`

- Undefined类型的值只有一个，就是undefind

- 使用 type of 检查一个undefined时，会返回undefined。

null和undefined有最大的相似性。看看null == undefined的结果(true)也就更加能说明这点。

但是null === undefined的结果(false)。不过相似归相似，还是有区别的，就是和数字运算时，10 + null结果为：10；10 + undefined结果为：NaN。

- 任何数据类型和undefined运算都是NaN;

- 任何值和null运算，null可看做0运算。

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

## 强制类型转换

强制类型转换：将一个数据类型强制转换为其他的数据类型。

类型转换主要指，将其他的数据类型，转换为：String、Number、Boolean。

### prompt()：用户的输入

我们在上面的内容里讲过，`prompt()`就是专门用来弹出能够让用户输入的对话框。重要的是：用户不管输入什么，都是字符串。

### 任何简单类型转换成String

**方法一**：变量+"" 或者 变量+"abc"

**方法二**：调用toString()方法。如下：

```
变量.toSting()
```

【重要】该方法**不会影响到原变量**，它会将转换的结果返回。当然我们还可以直接写成`a = a.toString()`，这样的话，就是直接修改原变量。

注意：null和undefined这两个值没有toString()方法，所以它们不能用方法二。如果调用，会报错。

**方法三**：调用String()函数。如下：

```
String(变量)
```

使用String()函数做强制类型转换时：

- 对于Number和Boolean而言，实际上就是调用toString()方法。

- 但是对于null和undefined，就不会调用toString()方法。它会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。

### Number()函数：其他的数据类型 --> Number

情况一：字符串 --> 数字

- 1.如果字符串中是纯数字，则直接将其转换为数字。

- 2.如果字符串中有非数字的内容，则转换为NaN。（此处可以看到Number()函数的局限性）

- 3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为0。

情况二：布尔 --> 数字

- true 转成 1

- false 转成 0

情况三：null --> 数字

- 结果为：0

情况四：undefined --> 数字

- 结果为：NaN

### 【重要】`parseInt()`：字符串 --> 整数

> `parseInt()`是专门用来对付字符串的。

**parseInt()的作用是将字符串转为数字**。parse表示“转换”，Int表示“整数”（注意`Int`的拼写）。例如：

```
	parseInt("5");
```

得到的结果是数字5。

**parseInt()还具有以下特性**：

（1）**只保留字符串最开头的数字**，后面的中文自动消失。例如：

```
    console.log(parseInt("2017在公众号上写了6篇文章"));  //打印结果：2017

    console.log(parseInt("2017.01在公众号上写了6篇文章"));  //打印结果仍是：2017   （说明只会取整数）

    console.log(parseInt("aaa2017.01在公众号上写了6篇文章"));  //打印结果：NaN
```

（2）自动带有截断小数的功能：**取整，不四舍五入**。

例1：

```javascript
	var a = parseInt(5.8) + parseInt(4.7);
	console.log(a);
```

控制台输出：

```
	9
```

例2：

```javascript
	var a = parseInt(5.8 + 4.7);
	console.log(a);
```

控制台输出：

```javascript
	10
```

（3）如果对**非String**使用parseInt()或parseFloat()，它会**先将其转换为String**然后再操作。

比如：

```javascript
    var a = true;
    console.log(parseInt(a));  //打印结果：NaN （因为是先将a转为字符串"true"，然后然后再操作）

    var b = undefined;
    console.log(parseInt(b));  //打印结果：NaN  （因为是先将b转为字符串"undefined"，然后然后再操作）

    var c = 168.23;
    console.log(parseInt(c));  //打印结果：168  （因为是先将c转为字符串"168.23"，然后然后再操作）

```

（4）带两个参数时，表示进制转换。

### `parseFloat()`：字符串 --> 浮点数（小数）

> `parseFloat()`是专门用来对付字符串的。

道理同上。

### 转换为Boolean

将其他的数据类型转换为Boolean，可以使用Boolean()函数。

1、情况一：数字 --> 布尔

- 除了0和NaN，其余的都是true

2、情况二：字符串 ---> 布尔

- 除了空串，其余的都是true。

3、情况三：null和undefined都会转换为false

4、情况四：对象也会转换为true

## 其他进制的数字

- 16进制的数字，以`0x`开头

- 8进制的数字，以`0`开头

- 2进制的数字，`0b`开头（不是所有的浏览器都支持：chrome和火狐支持，IE不支持）

比如`070`这个字符串，如果我调用parseInt()转成数字时，有些浏览器会当成8进制解析，有些会当成10进制解析。

所以，比较建议的做法是：可以在parseInt()中传递第二个参数，来指定数字的进制。例如：

```javascript
	a = "070";

	a = parseInt(a,10); //转换成十进制
```

## 我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

