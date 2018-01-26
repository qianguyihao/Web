



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

**1、第一步：函数的定义**

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


**2、第二步：函数的调用**

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

注意：

1. 如果函数没有显示的使用 return语句 ，那么函数有默认的返回值：undefined

2. 如果函数使用 return语句，那么跟再return后面的值，就成了函数的返回值

3. 如果函数使用 return语句，但是return后面没有任何值，那么函数的返回值	也是：undefined

4. 函数使用return语句后，这个函数会在执行完 return 语句之后停止并立即退	出，也就是说return后面的所有其他代码都不会再执行。

### 1.6	函数名、函数体和函数加载问题（重要，请记住）

我们要记住：**函数名 == 整个函数**。举例：

```javascript
        console.log(fn) == console.log(function fn(){alert(1)});

        //定义fn方法
        function fn(){
            alert(1)
        };
```

我们知道，当我们在调用一个函数时，通常使用`函数()`这种格式；但此时，我们是直接使用`函数`这种格式，它的作用相当于整个函数。

**函数的加载问题**：JS加载的时候，只加载函数名，不加载函数体。所以如果想使用内部的成员变量，需要调用函数。


### 回调函数

我们知道，当函数自己调用自己时，称之为递归。本段来讲一下回调。

回调：**函数作为参数**，进行传递和使用，称之为**回调**。

举个最简单的例子：

```javascript
        fn(test);   //回调test这个函数

        function test() {
            console.log("我是被回调的函数")
        }

```

输出结果：我是被回调的函数。


**什么情况下使用回调函数：**

回调函数一般是用于**定义一个规则**。因为我们无法通过传递一个变量来传递规则。

换而言之：当我们需要**传递规则的时候，必须使用回调**。规则的传递只能通过函数来实现，无法通过变量实现。


举例：

```javascript
        console.log(fn(12,3,test1));    //注意第三个参数是函数名
        console.log(fn(12,3,test2));    //注意第三个参数是函数名

        //定义一个通用规则（包含加减乘数的抽象函数）
        fn(num1,num2,demo) {
            return demo(num1,num2);
        }

        //定义四个规则：加减乘除
        function test1(a,b) {
            return a+b;
        }
        function test2(a,b) {
            return a-b;
        }
        function test3(a,b) {
            return a*b;
        }
        function test4(a,b) {
            return a/b;
        }
```


打印结果：

```
	15
	9
```





































