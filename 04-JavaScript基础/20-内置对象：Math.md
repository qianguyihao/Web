
## 内置对象简介

> JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象。

> 前面两种对象：是JS的基础内容，属于 ECMAScript； 第三个浏览器对象：属于JS独有，即 JS 内置的API。

**内置对象**：就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用或者最基本而必要的功能（属性和方法）。

内置对象最大的优点就是帮助我们快速开发。

**JavaScript的内置对象**：

| 内置对象 | 对象说明 |
|:-------------|:-------------|
|  Arguments | 函数参数集合|
|  Array | 数组|
|  Boolean | 布尔对象|
|  Math | 数学对象|
|  Date | 日期时间|
|  Error | 异常对象|
|  Function | 函数构造器|
|  Number | 数值对象|
|  Object | 基础对象|
|  RegExp | 正则表达式对象|
|  String | 字符串对象|

前面的几篇文章中，我们专门讲到了数组 Array。今天这篇文章，我们先来讲一下内置对象 Math。



## 内置对象 Math 的常见方法

Math 和其他的对象不同，它不是一个构造函数，不需要创建对象。所以我们不需要 通过 new 来调用，而是直接使用里面的属性和方法即可。

Math属于一个工具类，里面封装了数学运算相关的属性和方法。如下：

| 方法 | 描述 | 备注 |
|:-------------|:-------------|:-------------|
| Math.PI | 圆周率 | Math对象的属性  |
| Math.abs() |  **返回绝对值** |  |
| Math.floor() | **向下取整**（往小取值） |  |
| Math.ceil() | **向上取整**（往大取值） |  |
| Math.round() | 四舍五入取整（正数四舍五入，负数五舍六入） |  |
| Math.random() | 生成0-1之间的**随机浮点数** | 取值范围是 [0，1) |
| Math.max(x, y, z)  | 返回多个数中的最大值 |  |
| Math.min(x, y, z)  | 返回多个数中的最小值 |  |
| Math.pow(x,y) | 返回 x 的 y 次幂 |  |
| Math.sqrt() | 对一个数进行开方运算 |  |


**举例**：

```javascript
    var num = -0.6;

    console.log(Math.abs(num));        //取绝对值

    console.log(Math.floor(num));      //向下取整，向小取

    console.log(Math.ceil(num));       //向上取整，向大取

    console.log(Math.round(num));      //四舍五入取整（正数四舍五入，负数五舍六入）

    console.log(Math.random());        //生成0-1之间的随机数
```

运行结果：

```
    0.6

    -1

    -0

    -1

    0.6453756205275165
```

##  Math.abs() 方法

方法定义：返回绝对值。

注意：

- 参数中可以接收字符串类型的数字，此时会将字符串做隐式类型转换，然后再调用 Math.abs() 方法。

代码举例：

```javascript
    console.log(Math.abs(2)); // 2
    console.log(Math.abs(-2)); // 2

    // 先做隐式类型转换，将 '-2'转换为数字类型 -2，然后再调用 Math.abs()
    console.log(Math.abs('-2'));

    console.log(Math.abs('hello')); // NaN
```

## Math.random() 方法

方法定义：生成 [0, 1) 之间的**随机浮点数**。

我们来看几个例子。

### 生成 [0, x) 之间的随机数

```javascript
    Math.round(Math.random()*x)
```


### 生成 [x, y) 之间的随机数

```javascript
    Math.round(Math.random()*(y-x)+x)
```

### 【重要】生成 [x, y]之间的随机整数

也就是说：生成两个整数之间的随机整数，**并且要包含这两个整数**。

这个功能很常用，我们可以将其封装成一个方法，代码实现如下：

```javascript
    /*
    * 生成两个整数之间的随机整数，并且要包含这两个整数
    */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(getRandom(1, 10));
```

### 随机点名

根据上面的例子，我们还可以再延伸一下，来看看随机点名的例子。

```javascript
    /*
    * 生成两个整数之间的随机整数，并且要包含这两个整数
    */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const arr = ['许嵩', '邓紫棋', '毛不易', '解忧邵帅'];
    const index = getRandom(0, arr.length - 1); // 生成随机的index
    console.log(arr[index]); // 随机点名
```







## 乘方

如果想计算 `a 的 b 次方`，可以使用如下函数：

```
	Math.pow(a, b);
```

Math的中文是“数学”，pow是“power 幂”。

**举例1：**

![](http://img.smyhvae.com/20180117_1730.png)

代码实现：

```
	var a = Math.pow(3, Math.pow(2, 2));
	console.log(a);
```

**举例2：**

![](http://img.smyhvae.com/20180117_1740.png)

代码实现：

```
	var a = Math.pow(Math.pow(3, 2), 4);
	console.log(a);
```

## 开方

如果想计算数值a的开二次方，可以使用如下函数：

```
	 Math.sqrt(a);
```

sqrt即“square 开方”。比如：

```
	var a = Math.sqrt(36);
```



## url 编码和解码

URI (Uniform ResourceIdentifiers,通用资源标识符)进行编码，以便发送给浏览器。有效的URI中不能包含某些字符，例如空格。而这URI编码方法就可以对URI进行编码，它们用特殊的UTF-8编码替换所有无效的字符，从而让浏览器能够接受和理解。

```javascript
    encodeURIComponent();   //把字符串作为 URI 组件进行编码
    decodeURIComponent();   //把字符串作为 URI 组件进行解码

```

举例：

```javascript
    var url = "http://www.cnblogs.com/smyhvae/";

    var str = encodeURIComponent(url);
    console.log(str);                           //打印url的编码
    console.log(decodeURIComponent(str));       //对url进行编码后，再解码，还原为url
```

打印结果：

![](http://img.smyhvae.com/20180202_1432.png)


## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)



