## ES6 的变量声明

ES5 中，使用 `var` 定义**全局变量**（ var 是 variable 的简写）。

ES6 中，新增了 let 和 const 来定义变量：

-   `let`：定义**局部变量**，替代 var。

-   `const`：定义**常量**（定义后，不可修改）。

### 1、var：定义全局变量

看下面的代码：

```javascript
{
    var a = 1;
}

console.log(a); //这里的 a，指的是 区块 里的 a
```

上方代码是可以输出结果的，输出结果为 1。因为 var 是全局声明的，所以，即使是在区块里声明，但仍然在全局起作用。

也就是说：**使用 var 声明的变量不具备块级作用域特性**。

再来看下面这段代码：

```javascript
var a = 1;
{
    var a = 2;
}

console.log(a); //这里的 a，指的是 区块 里的 a
```

上方代码的输出结果为 2 ，因为 var 是全局声明的。

**总结：**

用 var 定义的全部变量，有时候会污染整个 js 的作用域。我们在如今的实战中，基本都是用的 ES6 语法，所以请**尽量避免**使用 var 定义变量。

### 2、let：定义局部变量

举例 1：

```js
{
    let a = 'hello';
}
console.log(a); // 打印结果报错：Uncaught ReferenceError: a is not defined
```

上方代码，打印报错。

举例 2：

```javascript
var a = 2;
{
    let a = 3;
}

console.log(a); // 打印结果：2
```

通过上面两个例子可以看出，**用 let 声明的变量，只在局部（块级作用域内）起作用**。

**经典面试题**：

let 可以防止数据污染，我们来看下面这个 **for 循环**的经典面试题。

1、用 var 声明变量：

```javascript
for (var i = 0; i < 10; i++) {
    console.log('循环体中:' + i);
}

console.log('循环体外:' + i);
```


上方代码可以正常打印结果，且最后一行的打印结果是 10。说明**循环体外**定义的变量 i，是**全局作用域**下的 i。

2、用 let 声明变量：

```javascript
for (let i = 0; i < 10; i++) {
    console.log('循环体中:' + i); // // 每循环一次，就会在 { } 所在的块级作用域中，重新定义一个新的变量 i
}

console.log('循环体外:' + i);
```

上方代码的关键在于：**每次循环都会产生一个块级作用域，每个块级作用域中会重新定义一个新的变量 i**。

另外，上方代码的最后一行无法打印结果，也就是说打印会报错。因为用 let 定义的变量 i，只在`{ }`这个**块级作用域**里生效。

**总结：**我们要习惯用 let 声明，减少 var 声明带来的**污染全局空间**。

为了进一步说明 let 不会带来污染，需要说明的是：当我们定义了`let a = 1`时，如果我们在同一个作用域内继续定义`let a = 2`，是会报错的。

### 3、const：定义常量

在程序开发中，有些变量是希望声明后，在业务层就不再发生变化，此时可以用 const 来定义**常量**。常量就是值（内存地址）不能变化的量。

举例：

```javascript
const name = 'smyhvae'; //定义常量
```

用 const 声明的常量，只在局部（块级作用域内）起作用；而且，用 const 声明常量时，必须赋值，否则报错。

### let 和 const 的特点【重要】

-   不存在变量提升

-   禁止重复声明

-   支持块级作用域

- 暂时性死区


相反， 用`var`声明的变量：存在变量提升、可以重复声明、**没有块级作用域**。


### var/let/const 的共同点

-   全局作用域中定义的变量，可以在函数中使用。

-   函数中声明的变量，只能在函数及其子函数中使用，外部无法使用。

### 总结

关于 let、const、var 更详细的介绍和区别，可以看本项目的另一篇文章《JavaScript 进阶/var、let、const 的区别.md》。

## for 循环举例（经典案例）

**代码 1**、我们先来看看如下代码：（用 var 定义变量 i）

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="aa" />
        <input type="button" value="bb" />
        <input type="button" value="cc" />
        <input type="button" value="dd" />

        <script>
            var myBtn = document.getElementsByTagName('input');

            for (var i = 0; i < myBtn.length; i++) {
                myBtn[i].onclick = function () {
                    alert(i);
                };
            }
        </script>
    </body>
</html>
```

上方代码中的运行效果如下：

![](http://img.smyhvae.com/20190904_1030.gif)

你可能会感到诧异，为何点击任何一个按钮，弹出的内容都是 4 呢？这是因为，我们用 var 定义的变量 i，是在全局作用域声明的。整个代码中，自始至终只有一个变量。

for 循环是同步代码，而 onclick 点击事件是异步代码。当我们还没点击按钮之前，同步代码已经执行完了，变量 i 已经循环到 4 了。

也就是说，上面的 for 循环，相当于如下代码：

```javascript
var i = 0;
myBtn[0].onclick = function () {
    alert(i);
};
i++;

myBtn[1].onclick = function () {
    alert(i);
};
i++;

myBtn[2].onclick = function () {
    alert(i);
};
i++;

myBtn[3].onclick = function () {
    alert(i);
};
i++; // 到这里，i 的值已经是4了。因此，当我们点击按钮时，i的值一直都是4
```

**代码 2**、上面的代码中，如果我们改为用 let 定义变量 i：

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="aa" />
        <input type="button" value="bb" />
        <input type="button" value="cc" />
        <input type="button" value="dd" />

        <script>
            var myBtn = document.getElementsByTagName('input');

            for (let i = 0; i < myBtn.length; i++) {
                myBtn[i].onclick = function () {
                    alert(i);
                };
            }
        </script>
    </body>
</html>
```

上方代码中的运行效果如下：

![](http://img.smyhvae.com/20190904_1040.gif)

上面这个运行结果，才是我们预期的效果。我们用 let 定义变量 i，在循环的过程中，每执行一次循环体，就会诞生一个新的 i。循环体执行 4 次，就会有四个 i。


## 暂时性死区 DTC

ES6 规定：使用 let/const 声明的变量，会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。

也就是说，在使用 let/const 声明变量时，**变量需要先声明，再使用**（声明语句必须放在使用之前）。这在语法上，称为 “暂时性死区”（ temporal dead zone，简称 TDZ）。

DTC 其实是一种保护机制，可以让我们养成良好的编程习惯。

代码举例：

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

## 参考链接：

-   [阮一峰 | ECMAScript 6 入门](http://es6.ruanyifeng.com/)



## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200101.png)
