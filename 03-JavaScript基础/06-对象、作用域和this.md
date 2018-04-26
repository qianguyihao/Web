
## 面向对象的概念

**对象的作用是：封装信息**。比如Student类里可以封装学生的姓名、年龄、成绩等。

对象具有**特征**（属性）和**行为**（方法）。

面向对象：可以创建自定义的类型、很好的支持继承和多态。

面向对象的特征：封装、继承、多态。

## 向对象中添加属性/添加方法

首先创建一个对象：


```javascript
	var obj = new Object();
```

向对象中添加属性：

```javascript
		obj.name = "孙悟空";
		obj.age = 18;
```

对象的属性值可以是任何的数据类型，也可以是个**函数**：

```javascript
    var obj = new Object();
    obj.sayName = function () {
        console.log('smyhvae');
    };

    console.log(obj.sayName);  //没加括号，获取的是对象
    console.log('-----------');
    console.log(obj.sayName());  //加了括号，执行函数内容，并执行函数体的内容

```

打印结果：

![](http://img.smyhvae.com/20180314_2109.png)

**函数和方法的区别：**

如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的**方法**。调用这个函数就说调用对象的方法（method）。但是它只是名称上的区别，没有其他的区别。


```javascript
	//调方法
	obj.sayName();

	//调函数
	fun();
```

## 枚举对象中的属性：for in

语法：

```javascript
	for (var 变量 in 对象) {

	}
```

解释：对象中有几个属性，循环体就会执行几次。每次执行时，会将对象中的**每个属性的名字赋值给变量**。


举例：


```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title></title>
	<script type="text/javascript">
		var obj = {
			name: "smyhvae",
			age: 26,
			gender: "男",
			address: "shenzhen"
		};

		//枚举对象中的属性
		for (var n in obj) {
			console.log("属性名:" + n);
			console.log("属性值:" + obj[n]);
		}
	</script>
</head>

<body>
</body>

</html>

```

打印结果：

![](http://img.smyhvae.com/20180314_2125.png)

## 作用域 Scope【重要】

作用域指一个变量的作用的范围。在JS中一共有两种作用域：

- 全局作用域

- 函数作用域

### 全局作用域

直接编写在script标签中的JS代码，都在全局作用域。

- 全局作用域在页面打开时创建，在页面关闭时销毁。

- 在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用。

在全局作用域中：

- 创建的变量都会作为window对象的属性保存。

- 创建的函数都会作为window对象的方法保存。

全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问的到。

**变量的声明提前：**


使用var关键字声明的变量（ 比如 `var a = 1`），**会在所有的代码执行之前被声明**（但是不会赋值），但是如果声明变量时不是用var关键字（比如直接写`a = 1`），则变量不会被声明提前。

举例1：

```javascript
    console.log(a);
    var a = 123;
```


打印结果：undefined

举例2：

```javascript
    console.log(a);
    a = 123;   //此时a相当于window.a
```

程序会报错：

![](http://img.smyhvae.com/20180314_2136.png)

**函数的声明提前：**

- 使用`函数声明`的形式创建的函数`function foo(){}`，**会被声明提前**。

也就是说，它会在所有的代码执行之前就被创建，所以我们可以在函数声明之前，调用函数。

- 使用`函数表达式`创建的函数`var foo = function(){}`，**不会被声明提前**，所以不能在声明前调用。

很好理解，因为此时foo被声明了，且为undefined，并没有给其赋值`function(){}`。

所以说，下面的例子，会报错：

![](http://img.smyhvae.com/20180314_2145.png)

### 函数作用域

**调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁。**

每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的。

在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量。

**作用域的上下级关系：**

当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（**就近原则**）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错ReferenceError。

在函数中要访问全局变量可以使用window对象。（比如说，全局作用域和函数作用域都定义了变量a，如果想访问全局变量，可以使用`window.a`）

**提醒1：**

在函数作用域也有声明提前的特性：

- 使用var关键字声明的变量，会在函数中所有的代码执行之前被声明

- 函数声明也会在函数中所有的代码执行之前执行


因此，在函数中，没有var声明的变量都会成为**全局变量**，而且并不会提前声明。

举例1：

```javascript
        var a = 1;

        function foo() {
            console.log(a);
            a = 2;     // 此处的a相当于window.a
        }

        foo();
        console.log(a);   //打印结果是2

```

上方代码中，foo()的打印结果是`1`。如果去掉第一行代码，打印结果是`Uncaught ReferenceError: a is not defined`


**提醒2：**定义形参就相当于在函数作用域中声明了变量。

```

        function fun6(e) {
            console.log(e);
        }

        fun6();  //打印结果为 undefined
        fun6(123);//打印结果为123
```


## this

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，this指向的是一个对象，这个对象我们称为函数执行的 上下文对象。

根据函数的调用方式的不同，this会指向不同的对象：【重要】

- 1.以函数的形式调用时，this永远都是window。比如`fun();`相当于`window.fun();`

- 2.以方法的形式调用时，this是调用方法的那个对象

- 3.以构造函数的形式调用时，this是新创建的那个对象

- 4.使用call和apply调用时，this是指定的那个对象

针对第1和第2条的举例：

```javascript
        function fun() {
            console.log(this.name);
        }


        var obj1 = {
            name: "smyh",
            sayName: fun
        };

        var obj2 = {
            name: "vae",
            sayName: fun
        };

        var name = "全局的name属性";
        //obj.sayName();
        //以函数形式调用，this是window
        //fun();       //可以理解成 window.fun()

        //以方法的形式调用，this是调用方法的对象
        obj2.sayName();

```

打印结果：`vae`。

**箭头函数中this的指向**：

ES6中的箭头函数并不会使用上面四条标准的绑定规则，而是会继承外层函数调用的this绑定（无论this绑定到什么）。

