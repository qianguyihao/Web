---
title: 05-Promise入门详解
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 为什么需要 Promise？

我们在前面的文章《JavaScript 基础：异步编程和 Ajax/单线程和异步》中讲过，Javascript 是⼀⻔单线程语⾔。早期我们解决异步场景时，⼤部分情况都是通过回调函数来进⾏。

（如果你还不了解单线程和异步的概念，可以先去回顾上一篇文章。）

### 回调的定义

把函数 A 传给另一个函数 B 调用，那么函数 A 就是回调函数。

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

-   1、如果嵌套过深，则会出现**回调地狱**的问题。

-   2、不同的函数，回调的参数，在写法上可能不一致，导致不规范、且需要**单独记忆**。

我们来具体看看这两个问题。

**1、回调地狱的问题**：

如果多个异步函数存在依赖关系（比如，需要等第一个异步函数执行完成后，才能执行第二个异步函数；等第二个异步函数执行完毕后，才能执行第三个异步函数），就需要多个异步函数进⾏层层嵌套，⾮常不利于后续的维护，而且会导致**回调地狱**的问题。

关于回调地狱，我们来举一个形象的例子：

> 假设买菜、做饭、洗碗、倒厨余垃圾都是异步的。

> 但真实的场景中，实际的操作流程是：买菜成功之后，才能开始做饭。做饭成功后，才能开始洗碗。洗碗完成后， 再倒厨余垃圾。这里的一系列动作就涉及到了多层嵌套调用，也就是回调地狱。

关于回调地狱，我们来看看两段代码。

定时器的代码举例：（回调地狱）

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

ajax 请求的代码举例：（回调地狱）

```js
// 伪代码
ajax('a.json', (res1) => {
    console.log(res1);
    ajax('b.json', (res2) => {
        console.log(res2);
        ajax('c.json', (res3) => {
            console.log(res3);
        });
    });
});
```

**2、回调的写法不一致问题**：

```js
// Node.js 读取文件时，成功回调和失败回调，是通过 error参数来区分
readFile('d:\\readme.text', function (error, data) {
    if (error) {
        console.log('文件读取失败');
    } else {
        console.log('文件读取成功');
    }
});

// jQuery的 ajax 写法中，成功回调和失败回调，是通过两个回调函数来区分
$.ajax({
    url: '/ajax.json',
    success: function (response) {
        console.log('文件读取成功');
    },
    error: function (err) {
        console.log('文件读取失败');
    },
});
```

我们可以看到，上面的代码中，成功回调和失败回调，写法不统一，需要单独记忆，容易出错。

**小结**：

在 ES5 中，当进行多层嵌套回调时，会导致代码层次过多，很难进行后续维护和二次开发；而且会导致**回调地狱**的问题。ES6 中的 Promise 就可以解决这两个问题。

当然， Promise 的更强大功能，不止于此。我们来一探究竟。

### Promise 的介绍和优点

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息。

Promise 对象, 可以**用同步的表现形式来书写异步代码**（也就是说，代码看起来是同步的，但本质上的运行过程是异步的）。使用 Promise 主要有以下好处：

-   可以很好地解决**回调地狱**的问题（避免了层层嵌套的回调函数）。

-   语法非常简洁、可读性强，便于后期维护。Promise 对象提供了简洁的 API，使得控制异步操作更加容易。

Promise 的伪代码结构，大概是这样的：

```js
// 伪代码1
myPromise()
    .then(
        function () {},
        function () {}
    )
    .then(
        function () {},
        function () {}
    )
    .then(
        function () {},
        function () {}
    );

// 伪代码2
是时候展现真正的厨艺了().然后(买菜).然后(做饭).然后(洗碗);
```

上面的伪代码可以看出，即便在业务逻辑上是层层嵌套，但是代码写法上，却十分优雅，也没有过多的嵌套。

## Promise 对象的用法和状态

### 使用 Promise 的基本步骤

（1）通过 `new Promise()` 构造出一个 Promise 实例。Promise 的构造函数中传入一个参数，这个参数是一个函数，该函数用于处理异步任务。

（2）函数中传入两个参数：resolve 和 reject，分别表示异步执行成功后的回调函数和异步执行失败后的回调函数。代表着我们需要改变当前实例的状态到**已完成**或是**已拒绝**。

（3）通过 promise.then() 和 promise.catch() 处理返回结果（这里的 `promise` 指的是 Promise 实例）。

看到这里，你估计还是不知道 Promise 怎么使用。我们不妨来看一下 Promise 有哪些状态，便一目了然。要知道，Promise 的精髓在于**对异步操作的状态管理**。

### promise 对象的 3 个状态

-   初始化（等待中）：pending

-   成功：fulfilled

-   失败：rejected

**步骤 1**：

当 new Promise()执行之后，promise 对象的状态会被初始化为`pending`，这个状态是初始化状态。`new Promise()`这行代码，括号里的内容是同步执行的。括号里可以再定义一个 异步任务的 function，function 有两个参数：resolve 和 reject。如下：

-   如果请求成功了，则执行 resolve()，此时，promise 的状态会被自动修改为 fulfilled。

-   如果请求失败了，则执行 reject()，此时，promise 的状态会被自动修改为 rejected

（2）promise.then()方法：**只有 promise 的状态被改变之后，才会走到 then 或者 catch**。也就是说，在 new Promise()的时候，如果没有写 resolve()，则 promise.then() 不执行；如果没有写 reject()，则 promise.catch() 不执行。

`then()`括号里面有两个参数，分别代表两个函数 function1 和 function2：

-   如果 promise 的状态为 fulfilled（意思是：如果请求成功），则执行 function1 里的内容

-   如果 promise 的状态为 rejected（意思是，如果请求失败），则执行 function2 里的内容

另外，resolve()和 reject()这两个方法，是可以给 promise.then()传递参数的。

关于 promise 的状态改变，以及如何处理状态改变，伪代码及注释如下：

```javascript
// 创建 promise 实例
let promise = new Promise((resolve, reject) => {
    //进来之后，状态为pending
    console.log('同步代码'); //这行代码是同步的
    //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
    if (异步的ajax请求成功) {
        console.log('333');
        resolve('请求成功，并传参'); //如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fulfilled（成功状态）
    } else {
        reject('请求失败，并传参'); //如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected（失败状态）
    }
});
console.log('222');

//调用promise的then()：开始处理成功和失败
promise.then(
    (successMsg) => {
        // 处理 promise 的成功状态：如果promise的状态为fulfilled，则执行这里的代码
        console.log(successMsg, '成功了'); // 这里的 successMsg 是前面的 resolve('请求成功，并传参')  传过来的参数
    },
    (errorMsg) => {
        //处理 promise 的失败状态：如果promise的状态为rejected，则执行这里的代码
        console.log(errorMsg, '失败了'); // 这里的 errorMsg 是前面的 reject('请求失败，并传参') 传过来的参数
    }
);
```

上面的注释要多看几遍。

## 几点补充

### new Promise() 是同步代码

`new Promise()`这行代码本身是同步的。promise 如果没有使用 resolve 或 reject 更改状态时，状态为 pending。

**举例1**：

```js
const promiseA = new Promise((resolve, reject) => {});
console.log(promiseA); // 此时 promise 的状态为 pending（准备阶段）
```

上面的代码中，我既没有写 reslove()，也没有写 reject()。也就是说，这个 promise 一直处于准备阶段。

当完成异步任务之后，状态分为成功或失败，此时我们就可以用 reslove() 和 reject() 来修改 promise 的状态。

**举例2**：

```js
new Promise((resolve, reject) => {
    console.log('promise1'); // 这行代码是同步代码，会立即执行
}).then((res) => {
    console.log('promise then:' + res); // 这行代码不会执行，因为前面没有写 resolve()，所以走不到 .then
});
```

打印结果：

```
promise1
```


上方代码，仔细看注释：如果前面没有写 `resolve()`，那么后面的 `.then`是不会执行的。

**举例3**：

```js
new Promise((resolve, reject) => {
    resolove();
    console.log('promise1');  // 代码1：同步任务，会立即执行
}).then(res => {
    console.log('promise  then)';  // 代码2：异步任务中的微任务
})

console.log('千古壹号');  // 代码3：同步任务
```

打印结果：

```
promise1
千古壹号
promise  then
```

代码解释：代码1是同步代码，所以最先执行。代码2是**微任务**里面的代码，所以要先等同步任务（代码3）先执行完。当写完`resolve();`之后，就会立刻把 `.then()`里面的代码加入到微任务队列当中。

补充知识：异步任务分为“宏任务”、“微任务”两种。我们到后续的章节中再详细讲。


### Promise 的状态一旦改变，就不能再变

代码举例：

```js
const p = new Promise((resolve, reject) => {
    resolve(1); // 代码执行到这里时， promise状态是 fulfilled
    reject(2); // 尝试修改状态为 rejected，是不行的。因为状态执行到上一行时，已经被改变了。
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
```

上方代码的打印结果是 1，而不是 2，详见注释。

### Promise 的状态改变，是不可逆的

### 小结

1、promise 有三种状态：等待中、成功、失败。等待中状态可以更改为成功或失败，已经更改过状态后⽆法继续更改（例如从失败改为成功）。

2、promise 实例中需要传⼊⼀个函数，这个函数接收两个参数，执⾏第⼀个参数之后就会改变当前 promise 为「成功」状态，执⾏第⼆个参数之后就会变为「失败」状态。

3、通过 .then ⽅法，即可在上⼀个 promise 达到成功时继续执⾏下⼀个函数或 promise。同时通过 resolve 或 reject 时传⼊参数，即可给下⼀个函数或 promise 传⼊初始值。

4、失败的 promise，后续可以通过 promise 自带的 .catch ⽅法或是 .then ⽅法的第⼆个参数进⾏捕获。

### Promise 规范

Promise 是⼀个拥有 then ⽅法的对象或函数。任何符合 promise 规范的对象或函数都可以成为 Promise。

关于 promise 规范的详细解读，可以看下面这个链接：

-   Promises/A+ 规范：<https://promisesaplus.com/>

了解这些常见概念之后，接下来，我们来具体看看 promise 的代码是怎么写的。

## Promise 封装异步任务

### 传统写法

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

### Promise 写法

```js
function myPromise() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

/* 【重要】上面的 myPromise 也可以写成：
function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
*/

// 先执行异步函数fun1，再执行回调函数
myPromise().then(() => {
    console.log('我是延迟执行的回调函数');
});
```

## Promise 封装 Ajax 请求

### 传统写法

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
           success && success(xmlhttp.responseText);
        } else {
          	// 这里的 && 符号，意思是：如果传了 fail 参数，就调用后面的 fail()；如果没传 fail 参数，就不调用后面的内容。因为 fail 参数不一定会传。
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 执行 ajax 请求
ajax(
    '/a.json',
    (res) => {
        console.log('qianguyihao 第一个接口请求成功:' + JSON.stringify(res));
    (err) => {
        console.log('qianguyihao 请求失败:' + JSON.stringify(err));
    }
);
```

上面的传统写法里，定义和执行 ajax 时需要传⼊ success 和 fail 这两个回调函数，进而执行回调函数。

注意看注释，`callback && callback()`这种格式的写法，很常见。

### Promise 写法

有了 Promise 之后，我们不需要传入回调函数，而是：

-   先将 promise 实例化；

-   然后在原来执行回调函数的地方，改为执行对应的改变 promise 状态的函数；

-   并通过 then ... catch 或者 then ...then 等写法，实现链式调用，提高代码可读性。

和传统写法相比，promise 在写法上的大致区别是：定义异步函数的时候，将 callback 改为 resolve 和 reject，待状态改变之后，我们在外面控制具体执行哪些函数。

写法 1：

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            // 这里的 && 符号，意思是：如果传了 fail 参数，就调用后面的 fail()；如果没传 fail 参数，就不调用后面的内容。因为 fail 参数不一定会传。
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 第一步：model层的接口封装
function promiseA() {
    return new Promise((resolve, reject) => {
        ajax('xxx_a.json', (res) => {
            // 这里的 res 是接口的返回结果。返回码 retCode 是动态数据。
            if (res.retCode == 0) {
                // 接口请求成功时调用
                resolve('request success' + res);
            } else {
                // 接口请求失败时调用
                reject({ retCode: -1, msg: 'network error' });
            }
        });
    });
}

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseA()
    .then((res) => {
        // 从 resolve 获取正常结果：接口请求成功后，打印接口的返回结果
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log(err);
    });
```

上方代码中，当从接口返回的数据`data.retCode`的值（接口返回码）不同时，可能会走 resolve，也可能会走 reject，这个由你自己的业务决定。

接口返回的数据，一般是`{ retCode: 0, msg: 'qianguyihao' }` 这种 json 格式， retCode 为 0 代表请求接口成功，所以前端对应会写`if (res.retCode == 0) `这样的逻辑。

另外，上面的写法中，是将 promise 实例定义成了一个**函数** `promiseA`。我们也可以将 promise 实例定义成一个**变量** `promiseB`，达到的效果和上面的代码是一模一样的。写法如下：（写法上略有区别）

写法 2：

```js
// 第一步：model层的接口封装
const promiseB = new Promise((resolve, reject) => {
    ajax('xxx_a.json', (res) => {
        // 这里的 res 是接口的返回结果。返回码 retCode 是动态数据。
        if (res.retCode == 0) {
            // 接口请求成功时调用
            resolve('request success' + res);
        } else {
            // 接口请求失败时调用
            reject({ retCode: -1, msg: 'network error' });
        }
    });
});

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseB
    .then((res) => {
        // 从 resolve 获取正常结果
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log(err);
    });
```

注意，如果你用的是写法 1（将 promise 实例定义为函数），则调用 promise 的时候是`promiseA().then()`，如果你用的是写法 2（将 promise 实例定位为函数），则调用的时候用的是`promiseB.then()`。写法 1 多了个括号，不要搞混了。

## 处理 reject 失败状态的两种写法

我们有两种写法可以捕获并处理 reject 异常状态：

-   写法 1：通过 catch 方法捕获 状态变为已 reject 时的 promise

-   写法 2：then 可以传两个参数，第⼀个参数为 resolve 后执⾏，第⼆个参数为 reject 后执⾏。

### 代码格式

这两种写法的**代码格式**如下：

```js
// 第一步：model层的接口封装
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口，或者定时器）
				...
        ...
    });
}

const onResolve = function (res) {
    console.log(res);
};

const onReject = function (err) {
    console.log(err);
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

如注释所述：前面的段落里，我们捕获 reject 异常用的就是写法 1。如果你写法 2 也是可以的。

需要注意的是，上面的写法 3 是错误的。运行之后，控制台会报如下错误：

![](http://img.smyhvae.com/20210430_1553.png)

[解释如下](https://blog.csdn.net/xiaoluodecai/article/details/107297404)：

try-catch 主要用于捕获异常，注意，这里的异常是指**同步**函数的异常。如果 try 里面的异步方法出现了异常，此时 catch 是无法捕获到异常的。

原因是：当异步函数抛出异常时，对于宏任务而言，执行函数时已经将该函数推入栈，此时并不在 try-catch 所在的栈，所以 try-catch 并不能捕获到错误。对于微任务而言（比如 promise）promise 的构造函数的异常只能被自带的 reject 也就是.catch 函数捕获到。

（2）写法 1 中，`promiseA().then().catch()`和`promiseA().catch().then()`区别在于：前者可以捕获到 `then` 里面的异常，后者不可以。

### 代码举例

这两种写法的**代码举例**如下：

```js
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口，或者定时器）
            ...
            ...
    });
}

// 写法1
promiseB()
    .then((res) => {
        // 从 resolve 获取正常结果
        console.log('接口请求成功时，走这里');
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log('接口请求失败时，走这里');
        console.log(err);
    })
    .finally(() => {
        console.log('无论接口请求成功与否，都会走这里');
    });


// 写法 2：（和写法 1 等价）
promiseB()
    .then(
        (res) => {
            // 从 resolve 获取正常结果
            console.log('接口请求成功时，走这里');
            console.log(res);
        },
        (err) => {
            // 从 reject 获取异常结果
            console.log('接口请求失败时，走这里');
            console.log(err);
        }
    )
    .finally(() => {
        console.log('无论接口请求成功与否，都会走这里');
    });
```

**代码解释**：写法 1 和写法 2 的作用是完全等价的。只不过，写法 2 是把 catch 里面的代码作为 then 里面的第二个参数而已。

## 总结

了解这些内容之后， 你已经对 Promise 有了基本了解。下一篇文章，我们来讲一讲 Promise 在实战开发的常见用法。

## 参考链接

-   [当面试官问你 Promise 的时候，他究竟想听到什么？](https://zhuanlan.zhihu.com/p/29235579)

-   [手写一个 Promise/A+,完美通过官方 872 个测试用例](https://www.cnblogs.com/dennisj/p/12660388.html)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
