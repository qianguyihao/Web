

> 本文首发于[博客园](http://www.cnblogs.com/smyhvae/p/8310295.html)，并在[GitHub](https://github.com/smyhvae/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。

## 代码块

用`{}`包围起来的代码，就是代码块。


JS中的代码块，只具有**分组**的作用，没有其他的用途。

代码块中的内容，在外部是完全可见的。







## if语句

### 最基本的if语句

if语句的结构体：（格式）

```javascript
	if (条件表达式) {
		// 条件为真时，做的事情

	} else {
		// 条件为假时，做的事情

	}
```

if语句也成为“选择语句”、“条件判断语句”。

### 多分支的if语句

格式：

```javascript
	if (条件表达式1) {
		// 条件1为真时，做的事情

	} else if (条件表达式2) {
		// 条件1不满足，条件2满足时，做的事情

	} else if (条件表达式3) {
		// 条件1、2不满足，条件3满足时，做的事情

	} else {
		// 条件1、2、3都不满足时，做的事情
	}
```

以上所有的语句体中，只执行其中一个。

做个题目：

```
	根据BMI（身体质量指数）显示一个人的体型。
	BMI指数，就是体重、身高的一个计算公式。公式是：
	BMI =体重÷身高的平方

	比如，老师的体重是81.6公斤，身高是1.71米。
	那么老师的BMI就是  81.6 ÷ 1.712     等于 27.906022365856163

	过轻：低于18.5
	正常：18.5-24.99999999
	过重：25-27.9999999
	肥胖：28-32
	非常肥胖, 高于32

	用JavaScript开发一个程序，让用户先输入自己的体重，然后输入自己的身高（弹出两次prompt框）。
	计算它的BMI，根据上表，弹出用户的身体情况。比如“过轻” 、 “正常” 、“过重” 、 “肥胖” 、“非常肥胖”。
```

答案：

写法1：

```javascript
		//第一步，输入身高和体重
		var height = parseFloat(prompt("请输入身高，单位是米"));
		var weight = parseFloat(prompt("请输入体重，单位是公斤"));
		//第二步，计算BMI指数
		var BMI = weight / Math.pow(height, 2);
		//第三步，if语句来判断。注意跳楼现象
		if (BMI < 18.5) {
			alert("偏瘦");
		} else if (BMI < 25) {
			alert("正常");
		} else if (BMI < 28) {
			alert("过重");
		} else if (BMI <= 32) {
			alert("肥胖");
		} else {
			alert("非常肥胖");
		}
```

写法2：

```javascript
		//第一步，输入身高和体重
		var height = parseFloat(prompt("请输入身高，单位是米"));
		var weight = parseFloat(prompt("请输入体重，单位是公斤"));
		//第二步，计算BMI指数
		var BMI = weight / Math.pow(height, 2);
		//第三步，if语句来判断。注意跳楼现象
		if (BMI > 32) {
			alert("非常肥胖");
		} else if (BMI >= 28) {
			alert("肥胖");
		} else if (BMI >= 25) {
			alert("过重");
		} else if (BMI >= 18.5) {
			alert("正常")
		} else {
			alert("偏瘦");
		}
```

### if语句的嵌套

我们通过下面这个例子来引出if语句的嵌套。

```
	一个加油站为了鼓励车主多加油，所以加的多有优惠。
	92号汽油，每升6元；如果大于等于20升，那么每升5.9；
	97号汽油，每升7元；如果大于等于30升，那么每升6.95
	编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。
```

![](http://img.smyhvae.com/20180117_2232.png)


代码实现如下：

```javascript
		//第一步，输入
		var bianhao = parseInt(prompt("您想加什么油？填写92或者97"));
		var sheng = parseFloat(prompt("您想加多少升？"));

		//第二步，判断
		if (bianhao == 92) {
			//编号是92的时候做的事情
			if (sheng >= 20) {
				var price = sheng * 5.9;
			} else {
				var price = sheng * 6;
			}
		} else if (bianhao == 97) {
			//编号是97的时候做的事情
			if (sheng >= 30) {
				var price = sheng * 6.95;
			} else {
				var price = sheng * 7;
			}
		} else {
			alert("对不起，没有这个编号的汽油！");
		}

		alert("价格是" + price);
```

### if语句的几个小知识点

（1）else部分可以省略。例如：

```javascript
		var a = 10;
		if(a > 20){
			alert("这个数字大于20");
		}

```

没有else部分，则代表没有“否则”。如果条件表达式不满足了，那么就什么都不做。

（1）如果要做的事情只有一句话，那么大括号就可以省略。例如：

```javascript
		var a = 2;
		if(a > 5) alert("这个数字大于5");
		alert("哈哈");

```

弹出的内容是“哈哈”。

## for循环

### for循环的结构

for循环举例：

```javascript
	for (var i = 1; i <= 100; i++) {
		console.log(i);
	}
```

上方代码的解释：

![](http://img.smyhvae.com/20180117_2248.png)


### for循环遍历


```javascript
	for (var i = 1; i < 13; i = i + 4) {
		console.log(i);
	}

```

上方代码的遍历步骤：

```
程序一运行，将执行var i = 1;这条语句， 所以i的值是1。
然后程序会验证一下i < 13是否满足，1<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是5。

程序会会验证一下i < 13是否满足，5<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是9。

程序会会验证一下i < 13是否满足，9<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是13。

程序会会验证一下i < 13是否满足，13<13是假，所以不执行循环体了，将退出循环。

最终输出输出结果为：1、5、9
```

接下来做几个题目。

题目1：

```javascript
	for (var i = 1; i < 10; i = i + 3) {
		i = i + 1;
		console.log(i);
	}
```

输出结果：2、6、10

题目2：

```javascript
	for (var i = 1; i <= 10; i++) {

	}
	console.log(i);
```

输出结果：11

题目3：

```javascript
	for(var i = 1; i < 7; i = i + 3){

	}
	console.log(i);
```

输出结果：7

题目4：

```javascript
	for (var i = 1; i > 0; i++) {
		console.log(i);
	}
```

死循环。

## switch语句

当所有的比较结果都为false时，则只执行default里的语句。


## break和continue


### break

- break可以用来退出switch语句或**整个**循环语句（循环语句包括for、while。不包括if。if里不能用break，否则会报错）。

- break会立即终止离它最近的那个循环语句。


### continue

- continue可以用来跳过**当次**循环。

- 同样，continue默认只会离他最近的循环起作用。




## 算法题练习

暂略。

## 函数

函数：就是将一些语句进行**封装**，然后通过**调用**的形式，执行这些语句。

**函数的作用：**

- 将大量重复的语句写在函数里，以后需要这些语句的时候，可以直接调用函数，避免重复劳动。

- 简化编程，让编程模块化。

先来看个例子：

```javascript
	console.log("你好");
	sayHello();		//调用函数
	//定义函数：
	function sayHello(){
		console.log("欢迎");
		console.log("welcome");
	}
```

### 第一步：函数的定义

函数定义的语法：

```javascript
	function sum(a, b){
		return a+b;
	}
```

解释如下：

- function：是一个关键字。中文是“函数”、“功能”。

- 函数名字：命名规定和变量的命名规定一样。只能是字母、数字、下划线、美元符号，不能以数字开头。

- 参数：后面有一对小括号，里面是放参数用的。

- 大括号里面，是这个函数的语句。

PS：方法写完之后，我们在方法的前面输入`/**`，然后回车，会发现，注释的格式会自动补齐。


### 第二步：函数的调用

函数调用的语法：

```javascript
	函数名字();
```

### 函数的参数：形参和实参

函数的参数包括形参和实参。来看下面的图就懂了：


![](http://img.smyhvae.com/20180118_1130.png)

注意：实际参数和形式参数的个数，要相同。

举例：

```javascript
		sum(3,4);
		sum("3",4);
		sum("Hello","World");

		//函数：求和
		function sum(a, b) {
			console.log(a + b);
		}
```

控制台输出结果：

```
	7
	34
	helloworld
```

### 函数的返回值

举例：

```javascript
		console.log(sum(3, 4));

		//函数：求和
		function sum(a, b) {
			return a + b;
		}
```

return的作用是结束方法。

## 我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)




