## 前言：单线程和异步

### 单线程

JavaScript 的执行环境是**单线程**。即同一时间，只能处理一个任务。

具体来说，所谓单线程，是指 JS 引擎中负责解释和执行 JavaScript 代码的线程只有一个，也就是一次只能完成一项任务，这个任务执行完后才能执行下一个。所有的任务都**需要排队**。

JS为何要被设计为单线程呢？原因如下：

- 首先是历史原因，在最初设计 JS 这门语言时，多进程、多线程的架构并不流行，硬件支持并不好。

- 其次是因为多线程的复杂性，多线程操作需要加锁，编码的复杂性会增高。

- 而且，如果多个线程同时操作同一个 DOM，在多线程不加锁的情况下，会产生冲突，最终会导致 DOM 渲染的结果不符预期。

所以，为了避免这些复杂问题的出现，JS被设计成了单线程语言。

### 同步任务和异步任务、事件循环

如果当前正在执行的任务很耗时，它就会**阻塞**其他正在排队的任务。为了解决这个问题，JS在设计之初，将任务分成了两类：同步任务、异步任务。

- 同步任务：在**主线程**上排队执行的任务。只有前一个任务执行完毕，才能执行下一个任务。

- 异步任务：不进入主线程、而是进入**任务队列**（task queue）的任务。只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。



### 多次异步调用的顺序

-   多次异步调用的结果，顺序可能不同步。

-   异步调用的结果如果**存在依赖**，则需要通过回调函数进行嵌套。


### 前端使用异步的场景

什么时候需要**等待**，就什么时候用异步。

- 定时任务：setTimeout（定时炸弹）、setInterval（循环执行）

- 事件绑定（比如说，按钮绑定点击事件之后，用户爱点不点。我们不可能卡在按钮那里，什么都不做。所以，应该用异步）

- 网络请求：ajax请求、网络图片加载

- ES6中的Promise




### 接口调用的方式

js 中常见的接口调用方式，有以下几种：

-   原生 ajax、基于 jQuery 的 ajax
-   Promise
-   Fetch
-   axios


今天这篇文章，我们重点讲一下接口调用里的**Promise**。



### 参考链接

- [JS-同步任务，异步任务，微任务，和宏任务](https://github.com/PleaseStartYourPerformance/javaScript/issues/34)

- [JS同步异步宏任务微任务](https://juejin.cn/post/6875605533127081992)、[JavaScript中事件循环的理解](https://zhuanlan.zhihu.com/p/364475433)、[javascript事件循环机制](https://github.com/reng99/blogs/issues/34)


## 为什么需要 Promise？

如上一段所述，Javascript 是⼀⻔单线程语⾔。早期我们解决异步场景时，⼤部分情况都是通过回调函数来进⾏。

### 回调的定义

把函数A传给另一个函数B调用，那么函数A就是回调函数。

例如在浏览器中发送 ajax 请求，就是常⻅的⼀个异步场景，发送请求后，需要等待一段时间，等服务端响应之后我们才能拿到结果。如果我们希望在异步结束之后执⾏某个操作，就只能通过**回调函数**这样的⽅式进⾏操作。

```js
var dynamicFunc = function (callback) {
    setTimeout(function () {
        callback();
    }, 1000);
};

dynamicFunc(function () {
    console.log('qian gu');
});
```

例如上⾯这个例⼦，dynamicFunc 就是⼀个异步函数，⾥⾯ setTimeout 会在 1s 之后调⽤传⼊的 callback 函数。按照上⾯的调⽤⽅式，最终 1s 之后，会打印 qian gu 这个结果。


为了能使回调函数以更优雅的⽅式进⾏调⽤，在 ES6 语法中，新增了⼀个名为 Promise 的新规范。

### 回调的缺点

回调的写法比较直观，不需要 return，层层嵌套即可。但也存在两个问题：

- 1、如果嵌套过深，则会出现**回调地狱**的问题。

- 2、不同的函数，回调的参数，在写法上可能不一致，导致不规范、且需要**单独记忆**。

我们来具体看看这两个问题。

**1、回调地狱的问题**：

如果后续还有内容需要在异步函数结束时输出，就需要多个异步函数进⾏嵌套，⾮常不利于后续的维护，而且会导致**回调地狱**的问题：

```js
setTimeout(function () {
    console.log('qiangu1');
    setTimeout(function () {
        console.log('qiangu2');
        setTimeout(function () {
            console.log('qiangu3');
        }, 3000);
    }, 2000);
}, 1000);
```

关于回调地狱，我们来举一个形象的例子：

假设买菜、做饭、洗碗、倒厨余垃圾都是异步的。

但真实的场景中，实际的操作流程是：买菜成功之后，才能开始做饭。做饭成功后，才能开始洗碗。洗碗完成后， 再倒厨余垃圾。这里的一系列动作就涉及到了多层嵌套调用，也就是回调地狱。

在 ES5 中，当进行多层嵌套回调时，会导致代码层次过多，很难进行后续维护和二次开发；而且会导致**回调地狱**的问题。ES6 中的 Promise 就可以解决这两个问题。

**2、回调的写法不一致问题**：

```js
// Node.js 读取文件时，成功回调和失败回调，是通过 error参数来区分
readFile('d:\\readme.text', function (error, data) {
    if (error) {
        console.log('文件读取失败');
    } else {
        console.log('文件读取成功');
    }
})


// jQuery的 ajax 写法中，成功回调和失败回调，是通过两个回调函数来区分
$.ajax({
    url: '/ajax.json',
    success: function (response) {
        console.log('文件读取成功');
    },
    error: function (err) {
        console.log('文件读取失败');

    }
})

```

我们可以看到，上面的代码中，成功回调和失败回调，写法不统一，需要单独记忆，容易出错。


### Promise 的介绍和优点

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息。

Promise 对象, 可以**用同步的表现形式来书写异步代码**（也就是说，代码看起来是同步的，但本质上的运行过程是异步的）。使用 Promise 主要有以下好处：

-   可以很好地解决**回调地狱**的问题（避免了层层嵌套的回调函数）。

-   语法非常简洁、可读性强，便于后期维护。Promise 对象提供了简洁的 API，使得控制异步操作更加容易。

Promise 的伪代码结构，大概是这样的：

```js
// 伪代码1
myPromise()
    .then(function () { }, function () { })
    .then(function () { }, function () { })
    .then(function () { }, function () { })

// 伪代码2
是时候展现真正的厨艺了()
    .然后(买菜)
    .然后(做饭)
    .然后(洗碗)
```

上面的伪代码可以看出，即便在业务逻辑上是层层嵌套，但是代码写法上，却十分优雅，也没有过多的嵌套。

## Promise 基础

### Promise 的基本用法

（1）通过 `new Promise()` 构造出一个 Promise 实例。Promise 的构造函数中传入一个参数，这个参数是一个函数，该函数用于处理异步任务。

（2）函数中传入两个参数：resolve 和 reject，分别表示异步执行成功后的回调函数和异步执行失败后的回调函数。代表着我们需要改变当前实例的状态到**已完成**或是**已拒绝**。

（3）通过 promise.then() 处理返回结果（这里的 `promise` 指的是 Promise 实例）。

接下来，我们来具体看看， promise 的代码是怎么写的。

### Promise 处理异步任务的过程

通过 Promise 处理异步任务的典型写法如下：

```js
// 第一步：model层的接口封装
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口。这里暂时用定时器代替）
        setTimeout(() => {
            var data = { retCode: 0, msg: 'qianguyihao' }; // 接口返回的数据，返回码 retCode 是动态数据
            if (data.retCode == 0) {
                // 接口请求成功时调用
                resolve(data);
            } else {
                // 接口请求失败时调用
                reject({ retCode: -1, msg: 'network error' });
            }
        }, 100);
    });
}

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseA()
    .then((data) => {
        // 从 resolve 获取正常结果
        console.log(data);
    })
    .catch((e) => {
        // 从 reject 获取异常结果
        console.log(e);
    });
```

上方代码中，当从接口返回的数据`data.retCode`的值（接口返回码）不同时，可能会走 resolve，也可能会走 reject，这个由你自己的业务决定。

上面的写法中，是将 promise 实例定义成了一个**函数** `promiseA`。我们也可以将 promise 实例定义成一个**变量** `promiseB`，达到的效果是一模一样的。写法如下：（写法上略有区别）

```js
// 第一步：model层的接口封装
const promiseB = new Promise((resolve, reject) => {
    // 这里做异步任务（比如ajax 请求接口。这里暂时用定时器代替）
    setTimeout(() => {
        var data = { retCode: 0, msg: 'qianguyihao' }; // 接口返回的数据，返回码 retCode 是动态数据
        if (data.retCode == 0) {
            // 接口请求成功时调用
            resolve(data);
        } else {
            // 接口请求失败时调用
            reject({ retCode: -1, msg: 'network error' });
        }
    }, 100);
});

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseB
    .then((data) => {
        // 从 resolve 获取正常结果
        console.log(data);
    })
    .catch((e) => {
        // 从 reject 获取异常结果
        console.log(e);
    });
```

### 捕获 reject 异常状态的两种写法

我们有两种写法可以捕获并处理 reject 异常状态。上一小段中，用的就是其中一种写法。

这两种写法的代码举例如下：

```js
// 第一步：model层的接口封装
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口。这里暂时用定时器代替）
        setTimeout(() => {
            var data = { retCode: 0, msg: 'qianguyihao' }; // 接口返回的数据，返回码 retCode 是动态数据
            if (data.retCode == 0) {
                // 接口请求成功时调用
                resolve(data);
            } else {
                // 接口请求失败时调用
                reject({ retCode: -1, msg: 'network error' });
            }
        }, 100);
    });
}

const onResolve = function (value) {
    console.log(value);
};

const onReject = function (e) {
    console.log(e);
};

// 写法1：通过 catch 方法捕获 状态变为已拒绝时的 promise
promiseA().then(onResolve).catch(onReject);

// 写法2：then 可以传两个参数，第⼀个参数为 resolve 后执⾏，第⼆个参数为 reject 后执⾏
promiseA().then(onResolve, onReject);

// 【错误写法】写法3：通过 try catch 捕获 状态变为已拒绝时的 promise
// 这种写法是错误的，因为 try catch只能捕获同步代码里的异常，而  promise.reject() 是异步代码。
try {
    promiseA().then(onResolve);
} catch (e) {
    // 语法上，catch必须要传入一个参数，否则报错
    onReject(e);
}
```

需要注意的是：

（1）上面的写法 3 是错误的。运行之后，控制台会报如下错误：

![](http://img.smyhvae.com/20210430_1553.png)

[解释如下](https://blog.csdn.net/xiaoluodecai/article/details/107297404)：

try-catch 主要用于捕获异常，注意，这里的异常是指**同步**函数的异常。如果 try 里面的异步方法出现了异常，此时 catch 是无法捕获到异常的。

原因是：当异步函数抛出异常时，对于宏任务而言，执行函数时已经将该函数推入栈，此时并不在 try-catch 所在的栈，所以 try-catch 并不能捕获到错误。对于微任务而言（比如 promise）promise 的构造函数的异常只能被自带的 reject 也就是.catch 函数捕获到。


（2）写法1中，`promiseA().then().catch()`和`promiseA().catch().then()`区别在于：前者可以捕获到 `then` 里面的异常，后者不可以。


### 小结

1、promise 有三种状态：等待中、成功、失败。等待中状态可以更改为成功或失败，已经更改过状态后⽆法继续更改（例如从失败改为成功）。

2、promise 实例中需要传⼊⼀个函数，他接受两个函数参数，执⾏第⼀个参数之后就会改变当前 promise 为「成功」状态，执⾏第⼆个参数之后就会变为「失败」状态。

3、通过 .then ⽅法，即可在上⼀个 promise 达到成功时继续执⾏下⼀个函数或 promise。同时通过 resolve 或 reject 时传⼊参数，即可给下⼀个函数或 promise 传⼊初始值。

4、失败的 promise，后续可以通过 promise 自带的 .catch ⽅法或是 .then ⽅法的第⼆个参数进⾏捕获。


## Promise 规范

### Promise 规范解读

Promise 是⼀个拥有 then ⽅法的对象或函数。任何符合 promise 规范的对象或函数都可以成为 Promise。

关于promise 规范的详细解读，可以看下面这个链接：

- Promises/A+ 规范：<https://promisesaplus.com/>

## promise 对象的 3 个状态

-   初始化（等待中）：pending

-   成功：fulfilled

-   失败：rejected

（1）当 new Promise()执行之后，promise 对象的状态会被初始化为`pending`，这个状态是初始化状态。`new Promise()`这行代码，括号里的内容是同步执行的。括号里定义一个 function，function 有两个参数：resolve 和 reject。如下：

-   如果请求成功了，则执行 resolve()，此时，promise 的状态会被自动修改为 fulfilled。

-   如果请求失败了，则执行 reject()，此时，promise 的状态会被自动修改为 rejected

（2）promise.then()方法，括号里面有两个参数，分别代表两个函数 function1 和 function2：

-   如果 promise 的状态为 fulfilled（意思是：如果请求成功），则执行 function1 里的内容

-   如果 promise 的状态为 rejected（意思是，如果请求失败），则执行 function2 里的内容

另外，resolve()和 reject()这两个方法，是可以给 promise.then()传递参数的。

完整代码举例如下：

```javascript
let promise = new Promise((resolve, reject) => {
    //进来之后，状态为pending
    console.log('111'); //这行代码是同步的
    //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
    if (异步的ajax请求成功) {
        console.log('333');
        resolve('haha'); //如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fulfilled
    } else {
        reject('555'); //如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
    }
});
console.log('222');

//调用promise的then()
promise.then(
    (successMsg) => {
        //如果promise的状态为fulfilled，则执行这里的代码
        console.log(successMsg, '成功了');
    },
    (errorMsg) => {
        //如果promise的状态为rejected，则执行这里的代码
        console.log(errorMsg, '失败了');
    }
);
```

## 如何封装异步操作为 promise

### Promise 封装异步任务

**传统写法**：

写法 1：

```js
// 定义一个异步的延迟函数：异步函数结束1秒之后，再执行cb回调函数
function fun1(cb) {
    setTimeout(function () {
        console.log('即将执行cb回调函数');
        cb();
    }, 1000);
}

// 先执行异步函数 fun1，再执行回调函数 myCallback
fun1(myCallback);

// 定义回调函数
function myCallback() {
    console.log('我是延迟执行的cb回调函数');
}
```

写法 2：（精简版，更常见）

```js
// 定义一个异步的延迟函数：异步函数结束1秒之后，再执行cb回调函数
function fun1(cb) {
    setTimeout(cb, 1000);
}

// 先执行异步函数fun1，再执行回调函数
fun1(function () {
    console.log('我是延迟执行的cb回调函数');
});
```

上⾯的例⼦就是最传统的写法，在异步结束后通过传入回调函数的方式执⾏函数。

学习 Promise 之后，我们可以将这个异步函数封装为 Promise，如下。

**Promise 写法**：

```js
function fun2() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

/* 【重要】上面的 fun2 也可以写成：
function fun2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
*/

// 先执行异步函数fun1，再执行回调函数
fun2().then(() => {
    console.log('我是延迟执行的回调函数');
});
```

### Promise 封装 Ajax 请求

**传统写法**：

```js
// 定义 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = function () {
        if (this.readyState !== 4) {
            return;
        }
        if (this.status === 200) {
            success(this.response);
        } else {
            fail(new Error(this.statusText));
        }
    };
    client.send();
}

// 执行 ajax 请求
ajax(
    '/ajax.json',
    function () {
        console.log('qianguyihao 成功');
    },
    function () {
        console.log('失败');
    }
);
```

上面的传统写法里，定义和执行 ajax 时需要传⼊ success 和 fail 这两个回调函数，进而执行回调函数。

有了 Promise 之后，我们不需要传入回调函数，而是：

-   先将 promise 实例化；

-   然后在原来执行回调函数的地方，改为执行对应的改变 promise 状态的函数；

-   并通过 then ... catch 或者 then ...then 等写法，实现链式调用，提高代码可读性。

和传统写法相比，promise 在写法上的大致区别是：定义异步函数的时候，将 callback 改为 resolve 和 reject，待状态改变之后，我们在外面控制具体执行哪些函数。

**Promise 写法**：

```js
const request = require('request');

// Promise 定义接口
function request1() {
    return new Promise((resolve, reject) => {
        request('https://www.baidu.com', (response) => {
            if (response.retCode == 200) {
                // 这里的 response 是接口1的返回结果
                resolve('request1 success' + response);
            } else {
                reject('接口请求失败');
            }
        });
    });
}

request1()
    .then((res1) => {
        // 接口1请求成功后，打印接口1的返回结果
        console.log(res1);
        return request2();
    })
    .catch((e) => {
        // 从 reject 获取异常结果
        console.log(e);
    });
```

## 总结


了解这些内容之后， 你已经对 Promise 有了基本了解。下一篇文章，我们来讲一讲 Promise在实战开发的常见用法。

## 参考链接

-   [当面试官问你 Promise 的时候，他究竟想听到什么？](https://zhuanlan.zhihu.com/p/29235579)

-   [手写一个 Promise/A+,完美通过官方 872 个测试用例](https://www.cnblogs.com/dennisj/p/12660388.html)

## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200101.png)
