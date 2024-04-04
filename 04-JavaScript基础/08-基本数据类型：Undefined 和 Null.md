---
title: 08-基本数据类型：Null 和 Undefined
---

<ArticleTopAd></ArticleTopAd>

有些其他的语言中，只有 null；但 JS 语言中，既有 undefined，又有 null。很多人会弄混，由此觉得 JS 语言很麻烦。其实不然，学习完本文后，你会发现 undefined 和 null 的区别很容易理解。

## Undefined：未定义类型

Undefined 类型的值只有一个，就是 undefind。比如 `var a = undefined`。

使用 typeof 检查一个 undefined 值时，会返回 undefined。

undefined 的出现有以下几种情况。

### case1：变量已声明，未赋值（未初始化）

一个变量如果只**声明**了，但没有**赋值**，此时它的值就是 `undefined`。举例：

```js
var name;
console.log(name); // 打印结果：undefined
console.log(typeof name); // 打印结果：undefined
```

下面这两行代码是等价的：

```js
// 写法1
var name;
// 写法2。这种写法冗余了，不推荐。
var name = undefined;
```

注意事项：

1、不要显式地将变量赋值为 undefined，不太规范。也就是说，上面的写法 2 是冗余的，增加了不必要的代码量，这种写法不太规范。

2、变量在定义时，尽量做一下初始化（赋值操作），而不是只声明一个变量。上面的写法 1 就是属于只声明一个变量，也不太推荐这种写法。

如果变量刚开始没有值，我们可以将其赋一个默认值（空字符串、false、0、null 等值），这有利于代码书写的语义化。推荐的代码举例：

```js
var a = ''; // 字符串类型的变量，如果刚开始没有值，则可以初始化为空字符串
var b = false; // 布尔类型的变量，如果刚开始没有值，则可以考虑默认值为 false
var c = 0;  // 字符串类型的变量，如果刚开始没有值，可以考虑默认值为 0
var d = null; // 空对象，可以初始化为 null
```



### case2：变量未声明（未定义）

如果你从未声明一个变量，就去使用它，则会报错（这个大家都知道）；此时，如果用 `typeof` 检查这个变量时，会返回 `undefined`。举例：

```js
console.log(typeof a); // undefined
console.log(a); // 打印结果：Uncaught ReferenceError: a is not defined
```

### case3：函数无返回值时

如果一个函数没有返回值，那么，这个函数的返回值就是 undefined。

或者，也可以这样理解：在定义一个函数时，如果末尾没有 return 语句，那么，其实就是 `return undefined`。

举例：

```js
function foo() {}

console.log(foo()); // 打印结果：undefined
```

### case4：调用函数时，未传参

调用函数时，如果没有传实参，那么，对应形参的值就是 undefined。

举例：

```js
function foo(name) {
    console.log(name);
}

foo(); // 调用函数时，未传参。执行函数后的打印结果：undefined
```

实际开发中，如果调用函数时没有传参，我们可以根据需要给形参设置一个默认值：

```js
function foo(name) {
    name = name || 'qianguyihao';
}

foo();
```

等学习了 ES6 之后，上方代码也可以这样写：

```js
function foo(name = 'qianguyihao') {}

foo();
```

## Null：空对象

Null 类型的值只有一个，就是 null。比如 `var a = null`。

null 专门用来定义一个**空对象**。例如：`let a = null`，又例如 `Object.create(null)`。

如果你想定义一个变量用来保存引用类型（也就是对象），但是还不确定放什么内容，这个时候，可以在初始化时将其赋值为 null。

从语义上讲，null表示一个空对象，所以使用 typeof 检查一个 null 值时，会返回 object。举例：

```js
var myObj = null;
cosole.log(typeof myObj); // 打印结果：object
```

## 其他区别

undefined 实际上是由 null 衍生出来的，所以`null == undefined`的结果为 true。

但是 `null === undefined` 的结果是 false。它们虽然相似，但还是有区别的，其中一个区别是，和数字运算时：

-   10 + null 结果为 10。

-   10 + undefined 结果为 NaN。

规律总结：

- 任何值和 null 运算，null 可看做 0 运算。

-   任何数据类型和 undefined 运算都是 NaN。


## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)
