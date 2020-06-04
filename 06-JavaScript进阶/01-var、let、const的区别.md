


## var、let、const的区别

### var声明的变量存在变量提升，let和const声明的变量不存在变量提升

var 声明的变量：

```js
console.log(a); // 打印结果：undefined ==> a已经声明但没有赋值
var a = '我是a';
```

let 声明的变量：

```js
console.log(b); // 打印结果报错：Uncaught ReferenceError: Cannot access 'b' before initialization ==> 找不到b这个变量
let b = '我是b';
```

const 声明的变量：

```js
console.log(c); // 打印结果报错：Uncaught ReferenceError: Cannot access 'c' before initialization ==> 找不到c这个变量
const c = '我是c';
```


### 暂时性死区 DTC

**举例1**：（表现正常）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
}

foo(); // 执行函数后，打印结果：smyhvae
```

上方例子中， 变量 name 被声明在函数外部，此时函数内部可以直接使用。

**举例2**：（报错）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

代码解释：如果在当前块级作用域中使用了变量 name，并且当前块级作用域中通过 let/const 声明了这个变量，那么，**声明语句必须放在使用之前，也就是所谓的 DTC（暂时性死区）**。DTC其实是一种保护机制，可以让我们养成良好的编程习惯。

关于”暂时性死区“的更多介绍，详本项目的另一篇文章《ES6：变量》。



## 参考链接

- [JS中var、let、const区别](https://juejin.im/post/5e49249be51d4526e651b654)