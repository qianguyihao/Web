## var、let、const 的区别

### 1、var 声明的变量会挂载在 window 对象上，而 let 和 const 声明的变量不会

举例：

```js
var a = '我是a';
console.log(a); // 打印结果：我是a
console.log(window.a); // 打印结果：我是a
```

```js
let b = '我是b';
console.log(b); // 打印结果：我是b
console.log(window.b); // 打印结果：undefined
```

```js
let c = '我是c';
console.log(c); // 打印结果：我是c
console.log(window.b); // 打印结果：undefined
```

var 的这一特性，会造成 window 全局变量的污染。举例如下：

```js
var innerHeight = 100;
console.log(window.innerHeight); // 打印结果：永远都是100  ==> 会覆盖 window 自带的 innerHeight 属性
```

### 2、var 声明的变量存在变量提升，let 和 const 声明的变量不存在变量提升

举例：(先使用，再声明)

```js
console.log(a); // 打印结果：undefined ==> a已经声明但没有赋值
var a = '我是a';
```

```js
console.log(b); // 报错：Uncaught ReferenceError: Cannot access 'b' before initialization ==> 找不到b这个变量
let b = '我是b';
```

```js
console.log(c); // 报错：Uncaught ReferenceError: Cannot access 'c' before initialization ==> 找不到c这个变量
const c = '我是c';
```

### 3、var 声明不存在块级作用域，let 和 const 声明存在块级作用域

举例：

```js
{
    var a = '我是a';
    let b = '我是b';
    const c = '我是c';
}

console.log(a); // 我是a
console.log(b); // 报错：Uncaught ReferenceError: b is not defined ==> 找不到b这个变量
console.log(c); // 报错：Uncaught ReferenceError: c is not defined ==> 找不到c这个变量
```

报错是因为找不到 b 和 c 这两个变量。

### 4、同一作用域下，var 可以重复声明变量，let 和 const 不能重复声明变量

```js
var a = '我是a';
var a = 'qianguyihao';
console.log(a); // 打印结果：qianguyihao
```

```js
let b = '我是b';
let b = 'qianguyihao';
console.log(b); //报错：Uncaught SyntaxError: Identifier 'b' has already been declared  ==> 变量 b 已经被声明了
```

```js
const c = '我是c';
const c = 'qianguyihao';
console.log(c); //报错：Uncaught SyntaxError: Identifier 'c' has already been declared  ==> 变量 c 已经被声明了
```

备注：通过第3、第4点可以看出：使用 let/const 声明的变量，不会造成全局污染。



### 5、let 和 const 的暂时性死区（DTC）

**举例 1**：（表现正常）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
}

foo(); // 执行函数后，打印结果：smyhvae
```

上方例子中， 变量 name 被声明在函数外部，此时函数内部可以直接使用。

**举例 2**：（报错）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

代码解释：如果在当前块级作用域中使用了变量 name，并且当前块级作用域中通过 let/const 声明了这个变量，那么，**声明语句必须放在使用之前，也就是所谓的 DTC（暂时性死区）**。DTC 其实是一种保护机制，可以让我们养成良好的编程习惯。

关于”暂时性死区“的更多介绍，详本项目的另一篇文章《JavaScript之ES6语法：变量let、const和块级作用域.md》。


### 6、const：一旦声明必须赋值；声明后不能再修改

一旦声明必须赋值：

```js
const a;
console.log(a); // 报错：Uncaught SyntaxError: Missing initializer in const declaration
```

### 总结

基于上面的种种区别，我们可以知道：var 声明的变量，很容易造成全局污染。以后我们尽量使用 let 和 const 声明变量吧。





## const 常量到底能不能被修改

我们知道：用 const 声明的变量无法被修改。但还有一点，我们一定要记住：

-   如果用 const 声明基本数据类型，则无法被修改；

-   如果用 const 声明引用数据类型（即“对象”），这里的“无法被修改”指的是**不能改变内存地址的引用**；但对象里的内容是可以被修改的。

举例 1：（不能修改）

```js
const name = 'qianguyihao';
name = 'vae'; // 因为无法被修改，所以报错：Uncaught TypeError: Assignment to constant variable
```

举例 2：（不能修改）

```js
const obj = {
    name: 'qianguyihao',
    age: 28,
};

obj = { name: 'vae' }; // 因为无法被修改，所以报错：Uncaught TypeError: Assignment to constant variable
```

举例 3：（可以修改）

```js
const obj = {
    name: 'qianguyihao',
    age: 28,
};
obj.name = 'vae'; // 对象里的 name 属性可以被修改
```

## 传值和传址的区别

详见《JavaScript基础/对象简介.md》。

## for 循环的经典案例

详见《JavaScript之ES6语法：变量let、const和块级作用域.md》。

## 参考链接

-   [JS 中 var、let、const 区别](https://juejin.im/post/5e49249be51d4526e651b654)
