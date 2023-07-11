---
title: 06-Promise入门详解
---

<ArticleTopAd></ArticleTopAd>

## 前言


 Promise 是 JavaScript 中特有的语法。可以毫不夸张得说，Promise 是ES6中最重要的语法，没有之一。初学者可能对 Promise 的概念有些陌生，但是不用担心。大多数情况下，使用 Promise 的语法是比较固定的。我们可以先把这些固定语法和结构记下来，多默写几遍；然后在实战开发中逐渐去学习和领悟 Promise 的原理、底层逻辑以及细节知识点，自然就慢慢掌握了。

在了解 Promise 之前，必须要知道什么是回调函数，这是必不可少的前置知识。关于回调函数的知识，已经在上一篇文章中做了讲解。

## Promise 的介绍和优点（为什么需要 Promise？）

Promise 是异步编程的一种**新的解决方案和规范**。ES6将其写进了语言标准，统一了用法，原生提供了 Promise 对象。

Promise 对象, 可以**用同步的表现形式来书写异步代码**（也就是说，代码看起来是同步的，但本质上的运行过程是异步的）。使用 Promise 主要有以下优点：

-   1、可以很好地解决ES5中的**回调地狱**的问题（避免了层层嵌套的回调函数）。
-   2、统一规范、语法简洁、可读性和和可维护性强。
-   3、Promise 对象提供了简洁的 API，使得管理异步任务更方便、更灵活。

从语法上讲，Promise 是一个构造函数。从功能上来说，Promise 对象用于封装一个异步操作，并获取其成功/ 失败的结果值。

从写法规范上讲，**Promise 本质上是处理异步任务的一种编写规范**，要求每个人都按照这种规范来写。异步任务成功了该怎么写、异步任务失败了该怎么写、成功或者失败之后怎么通知调用者，这些都有规定的写法。Promise 的目的就是要让每个使用ES6的人都遵守这种写法规范。

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

上面的伪代码可以看出，业务逻辑上层层递进，但是代码写法上却十分优雅，没有过多的嵌套。

## Promise 的基本使用

ES5中，使用传统的回调函数处理异步任务时，其基本模型的写法已在上一篇内容“回调函数”里讲过。

ES6中，有了 Promise之后，我们可以对那段代码进行改进（基本模型不变）。你会发现，代码简洁规范了许多。

使用 Promise 处理异步任务的**基本代码结构**如下，我们先来认识一下：

```js
// 使用 Promise 处理异步任务的基本模型

// 封装异步任务
function requestData(url) {
  // resolve 和 reject 这两个单词是形参，可以自由命名。大家的习惯写法是写成 resolve 和 reject
  const promise = new Promise((resolve, reject) => {
    const res = {
      retCode: 0,
      data: 'qiangu yihao`s data',
      errMsg: 'not login',
    };
    setTimeout(() => {
      if (res.retCode == 0) {
        // 网络请求成功
        resolve(res.data);
      } else {
        // 网络请求失败
        reject(res.errMsg);
      }
    }, 1000);
  });
  return promise;
}


// 调用异步任务
requestData('www.qianguyihao.com/index1').then(data => {
  console.log('异步任务执行成功:', data);
}).catch(err=> {
  console.log('异步任务执行失败:', err);
})

// 再次调用异步任务
requestData('www.qianguyihao.com/index2').then(data => {
  console.log('异步任务再次执行成功:', data);
}).catch(err=> {
  console.log('异步任务再次执行失败:', err);
})


// 调用异步任务（写法2）
/* 这段代码的写法比较啰嗦。一般推荐上面的写法。
const myPromise = requestData('www.qianguyihao.com/index1');
myPromise.then(data => {
  console.log('异步任务执行成功:', data);
});
myPromise.catch(err => {
  console.log('异步任务执行失败:', err);
});

const myPromise2 = requestData('www.qianguyihao.com/index2');
myPromise2.then(data => {
  console.log('异步任务执行成功:', data);
});
myPromise2.catch(err => {
  console.log('异步任务执行失败:', err);
});
*/
```

在日常开发中使用Promise时，80%以上的场景都符合上面的代码结构。你说它重不重要？我们暂且先记下，默写十遍，形成肌肉记忆，然后继续往下边学习边理解。

## Promise 的状态和回调函数

Promise的三种状态是我们需要学习的第一个概念，也是最重要的概念，理解它才能理解 Promise的用法。

### Promise 对象的 3 种状态

在使用  Promise 时，我们可以将它划分为三种状态：

-   `pending`：等待中。属于初始状态，既没有被兑现，也没有被拒绝。

-   `fulfilled`：已兑现/已解决/成功。执行了`resolve()` 时，立即处于该状态，表示 Promise已经被**解决**，任务**执行成功**。

-   `rejected`：已拒绝/失败。执行了 `reject()`时，立即处于该状态，表示 Promise已经被**拒绝**，任务**执行失败**。

具体解释：

1、Promise 的中文名翻译为“承诺”（一般不称呼中文名）。resolve 的中文翻译为“解决”，reject 的中文翻译为“拒绝”。

2、当 new Promise()执行之后，promise 对象的状态会被初始化为`pending`，这个是初始状态。`new Promise()`这行代码，括号里的内容是同步执行的。括号里可以再定义一 异步任务的 function，function 有两个参数：resolve 和 reject。如下：

-   如果异步任务成功了，请执行 resolve()，此时，promise 的状态会自动变为 fulfilled。

-   如果异步任务失败了，请执行 reject()，此时，promise 的状态会自动变为 rejected。

3、什么时候算成功，什么时候算失败呢？这是**你自己定**的，需要结合具体需求和业务逻辑灵活决定。

关于 promise 的状态改变，以及如何处理状态改变，伪代码及详细注释如下：

```javascript
// 创建 promise 实例
const promise = new Promise((resolve, reject) => {
  //进来之后，promise 的状态为 pending
  console.log('同步代码'); //这行代码是同步的
  //开始执行异步操作（这里开始，根据具体需求写异步的代码，比如ajax请求 or 开启定时器）
  if (异步的ajax请求成功) {
    console.log('233');
    // 如果请求成功了，请写resolve()，此时，promise的状态会自动变为fulfilled（成功状态）
    resolve('请求成功，并传参');
  } else {
    // 如果请求失败了，请写reject()，此时，promise的状态会被自动变为rejected（失败状态）
    reject('请求失败，并传参');
  }
});
console.log('qianguyihao');

//调用promise的then()：开始处理成功和失败
promise.then(
  successValue => {
    // 处理 promise 的成功状态：如果promise的状态为fulfilled，则执行这里的代码
    console.log(successValue, '回调成功了'); // 这里的 successMsg 是前面的 resolve('请求成功，并传参')  传过来的参数
  },
  errorMsg => {
    //处理 promise 的失败状态：如果promise的状态为rejected，则执行这里的代码
    console.log(errorMsg, '回调失败了'); // 这里的 errorMsg 是前面的 reject('请求失败，并传参') 传过来的参数
  }
);
```

上面的注释要多看几遍。

### Promise 的回调函数

Promise的回调函数，伪代码如下：

```js
const promise = new Promise(executor);

// 【划重点】下面这两行代码是等价的，选其中一种写法即可。这两种写法没有区别，只是写法形式上的区别
promise.then(onFulfilled, onRejected);

promise.then(onFulfilled).catch(onRejected);
```

Promise是一个类，通过 `new Promise()` 进行**实例化**，构造出一个 Promise 实例对象。

1、Promise 的构造函数中需要传入一个参数，这个参数是一个回调函数，常用于处理异步任务。这个回调函数有一个专有名词叫  **executor**（执行器），因为在 `new Promise()` 时，这个函数会**立即执行**。

可以在该回调函数中传入两个参数：resolve 和 reject。我们可以在适当的时机执行 resolve()、reject()，用于改变当前 Promise 实例的状态到**成功**或**失败**。

（2）当Promise状态变为成功时，会触发 then() 方法里的回调函数的执行，对成功的返回结果进行处理。

（3）当Promise状态变为失败时，会触发 catch() 方法里的回调函数的执行，，对失败的返回结果进行处理。

2、`then()`方法的括号里面有两个参数，分别代表两个回调函数 **onFulfilled** 和 **onRejected**，这两个函数一直处于**监听状态**：

-   参数1：**成功的回调函数**。如果 Promise 的状态为 fulfilled（意思是：任务执行成功），则触发 onFulfilled 函数的执行。

-   参数2：**失败的回调函数**。如果 Promise 的状态为 rejected（意思是，任务执行失败），则触发 onRejected 函数的执行。

3、**只有 Promise 的状态被改变之后，才会走到 then() 或者 catch()**。也就是说，在 new Promise() 时，如果没有写 resolve()，则 promise.then() 不执行；如果没有写 reject()，则 promise.catch() 不执行。

4、resolve()和 reject()这两个方法，可以给 promise.then()、promise.catch()传递参数。

5、then() 可以被多次调用，会按照顺序执行。比如：

```js
const promise = new Promise(executor);

// then() 可以被多次调用
promise.then(onFulfilled, onRejected);
promise.then(onFulfilled, onRejected);
```

### Promise的状态图

![image-20230624100254023](https://img.smyhvae.com/image-20230624100254023.png)

上面的Promise状态图很经典，需要反复研读，了然于胸。

### Promise 的状态一旦改变，就不能再变

Promise 的状态一旦改变，就确定下来了，不能再变。也不能再次执行 resolve()或者 reject()来改变状态。Promise 的状态改变，是不可逆的。

代码举例：

```js
const p = new Promise((resolve, reject) => {
    resolve(1); // 代码执行到这里时， promise状态是 fulfilled
  	resolve(111); // 这行重复代码写了没用，等于没写
    reject(2); // 尝试修改状态为 rejected，是不行的。因为状态执行到上面的 resolve(1)时，已经被改变了。
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
```

上方代码的打印结果是 1，而不是 2，详见注释。

### new Promise() 是同步代码

`new Promise()`这行代码本身是同步的。promise 如果没有使用 resolve 或 reject 更改状态时，状态为 pending，里面的代码是同步代码。

**举例 1**：（重要）

```js
// 会立即创建 Promise 实例
const promise1 = new Promise((resolve, reject) => {
  // 这行代码会立即执行
  console.log('qianguyihao1');
})

console.log(promise1); // 此时 promise1 的状态为 pending（准备阶段）

// 需要调用 promise2函数，才会创建 Promise 实例
function promise2() {
  return new Promise((resolve, reject) => {
    // 这行代码不会立即执行
    console.log('qianguyihao2');
  })
}
```

上面的代码中，我既没有写 reslove()，也没有写 reject()。那么，Promise 一直处于准备阶段。

此外，需要特别注意的是，promise1 中的 console.log() 会**立即执行**，因为**Promise的执行器函数在创建 Promise 实例时就会被调用，并立即开始执行其中的代码逻辑**。

**举例 2**：

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

**举例 3**：

```js
new Promise((resolve, reject) => {
    resolve();
    console.log('promise1'); // 代码1：同步任务，会立即执行
}).then(res => {
    console.log('promise  then'); // 代码2：异步任务中的微任务
});

console.log('千古壹号'); // 代码3：同步任务
```

打印结果：

```
promise1
千古壹号
promise  then
```

代码解释：

当完成异步任务之后，状态分为成功或失败，此时我们就可以用 reslove() 和 reject() 来修改 promise 的状态。

代码 1 是同步代码，所以最先执行。代码 2 是**微任务**里面的代码，所以要先等同步任务（代码 3）先执行完。当写完`resolve();`之后，就会立刻把 `.then()`里面的代码加入到微任务队列当中。

补充知识：异步任务分为“宏任务”、“微任务”两种。我们到后续的章节中再详细讲。



## Promise 封装定时器

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

// 先执行异步函数 myPromise，再执行回调函数
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
    },
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

## resolve() 传入的参数（重要）

执行 resolve()之后，Promise 的状态一定会变成 fulfilled 吗？这是不一定的。

严格来说，在我们调用 resolve 时，如果 resolve()的参数中传入的值**本身不是一个Promise**，那么会将该 promise 的状态变成 fulfilled。

resolve()的参数中，可以传入哪些值，Promise会进入哪种状态呢？具体情况如下：

- 情况1：如果resolve()中传入**普通的值或者普通对象**（包括 undefined），那么Promise 的状态为fulfilled。这个值会作为then()回调的参数。这是最常见的情况。
- 情况2：如果resolve()中传入的是**另外一个新的 Promise**，那么原 Promise 的状态将**交给新的 Promise 决定**。
- 情况3：如果resolve()中传入的是一个对象，并且这个对象里有实现then()方法（这种对象称为 **thenable** 对象），那就会执行该then()方法，并且根据**then()方法的结果来决定Promise的状态**。

情况3中，我们通常称这个对象为 thenable 对象。thenable 的意思是，在某个对象或者函数中定义了一个 then() 方法，我们就称其为 thenable 对象/thenable函数。注意，thenable对象里面的那个单词只能写 then，不能写其他的单词；如果写其他的单词，就不是 thenable 对象了，就不符合情况3，而是符合情况1。

扩展一下：reject()的参数中可以传入什么值呢？无论传入什么值，Promise 都会直接进入 rejected 状态，并触发 catch() 方法的执行。

情况1的代码已经在前面反复出现过了，接下来重点讲一下情况2 和情况3。

### resolve() 中传入新的 Promise

代码举例：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve(promise2);
});

const promise2 = new Promise((resolve, reject) => {
  reject('promise2 的 reject');
});

promise1
  .then(res => {
    console.log('qianguyihao then');
    console.log(res);
  })
  .catch(err => {
    console.log('qianguyihao catch');
    console.log(err);
  });
```

打印结果：

```
qianguyihao catch
promise2 的 reject
```

代码解释：

promise1 在执行resolve时，传入的是 promise2。那么，promise1接下来的状态将交给 promise2 处理。因为 promise2 执行的是 reject()，所以 promise1 的状态进入 rejected，执行 catch() 方法。

上方代码中，如果把 promise1 和 promise2  的顺序换一下的话， 代码会报错：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve(promise2);
});

const promise2 = new Promise((resolve, reject) => {
  reject('promise2 的 reject');
});

promise1
  .then(res => {
    console.log('qianguyihao then');
  })
  .catch(err => {
    console.log('qianguyihao catch');
    console.log(err);
  });
```

报错如下：

![image-20230520224902096](https://img.smyhvae.com/image-20230520224902096.png)

### resolve()中传入 thenable 对象

代码举例：

```js
const promise1 = new Promise((resolve, reject) => {
  // resolve 里传入了一个 thenable 对象，里面有一个 then()方法，then()方法里执行的是 reject()
  resolve({
    name: 'qianguyihao',
    then: (resolve, reject) => {
      // 可以执行 resolve，也可以执行 reject，这里以 reject 为例
      reject('thenable reject');
    },
  });
});

promise1
  .then(res => {
    console.log('qianguyihao then');
    console.log(res);
  })
  .catch(err => {
    console.log('qianguyihao catch');
    console.log(err);
  });
```

打印结果：

```
qianguyihao catch
thenable reject
```

代码解释：

promise1 在执行resolve时，传入的是一个 thenable 对象。thenable 对象里有一个 then()方法。那么，promise1接下来的状态将由 thenable 对象 里的 then() 方法决定。当前的代码中， then() 里执行的是 reject()，所以 promise1 的状态进入 rejected，执行 catch() 方法。

上方代码中，如果把 thenable 对象里的单词`then`改成`then1`会怎么样呢？那它就不是 thenable 对象，只是一个普通的对象，代码如下：

```js
const promise1 = new Promise((resolve, reject) => {
  // resolve 里传入了一个 thenable 对象，里面有一个 then()方法，then()方法里执行的是 reject()
  resolve({
    name: 'qianguyihao',
    // 把 单词 then 改成 then1，就不符合 thenable 对象 的特征了
    then1: (resolve, reject) => {
      reject('thenable resolve');
    },
  });
});

promise1
  .then(res => {
    console.log('qianguyihao then');
    console.log(JSON.stringify(res));
  })
  .catch(err => {
    console.log('qianguyihao catch');
    console.log(err);
  });
```

打印结果：

```
qianguyihao then
{"name":"qianguyihao"}
```



## 小结

学习这些内容之后， 相信你已经对 Promise 有了基本了解。下一篇文章，我们来讲一讲 Promise 在实战开发的常见用法。

## 参考链接

- [Promise 注册微任务和执行过程](https://juejin.cn/post/6844903987183894535)
- [深入分析 Promise 实现细节](https://juejin.cn/post/6953452438300917790)

-   [当面试官问你 Promise 的时候，他究竟想听到什么？](https://zhuanlan.zhihu.com/p/29235579)

- [手写一个 Promise/A+,完美通过官方 872 个测试用例](https://www.cnblogs.com/dennisj/p/12660388.html)

-   [从 Promises/A+ 看异步流控制 - Liu Bowen](https://set.sh/post/200215-how-promise-works)

## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)

