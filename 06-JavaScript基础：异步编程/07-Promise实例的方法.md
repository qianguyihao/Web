## Promise 实例的方法简介

Promise 的 API 分为两种：

- Promise 实例的方法（也称为：Promis的实例方法）
- Promise 类的方法（也称为：Promise的静态方法）

Promise **实例**的方法：我们需要先 new 一个 promise 实例对象，然后通过 promise 实例去调用 `then`、`catch`、`finally`方法。这几个方法就是 Promise 的实例方法。

Promise 实例提供了如下方法：

-   promise.then()：获取异步任务的正常结果。

-   promise.catch()：获取异步任务的异常结果。

-   promise.finaly()：异步任务无论成功与否，都会执行。

我们在上一篇文章《Promise入门详解》中，用到的都是Promise实例的方法。本篇文章，我们来把这三个实例方法进一步详细学习一下。

## Promise 实例的 then()方法

then()方法是 Promise实例上的一个方法。它其实是放在Promise的原型上的 `Promise.prototype.then`。

###  then()方法的参数

then()方法可以接收一个参数，也可以接收两个参数。两个参数时，分别代表两个回调函数，这两个函数一直处于**监听状态**：

-   参数1：当 Promise 的状态变为 fulfilled（意思是：任务执行成功）时会立即执行的回调函数。

-   参数2：当 Promise 的状态为 rejected（任务执行失败）时会立即执行的回调函数。

下面这两种写法是等价的。处理 rejected 失败状态的回调函数，既可以放在 then() 方法的第二个参数里，也可以单独放在 catch() 方法的参数里。

写法1：

```js
const promise = new Promise((resolve, reject) => {
  reject('qianguyihao');
});

promise.then(
  res => {
    console.log('res:', res);
  },
  err => {
    console.log('err:', err);
  }
);
```

写法2：

```js
const promise = new Promise((resolve, reject) => {
  reject('qianguyihao');
});

promise
  .then(res => {
    console.log('res:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
```

### then()方法可以被多次调用

一个 Promise 的 then() 方法可以被多次调用。每次调用时我们都可以传入对应fulfilled状态的回调函数。当 Promise 的状态变为 fulfilled 时，这些回调函数都会被执行。

then被调用多次的伪代码：

```js
const myPromise = new Promise();

myPromise.then();
myPromise.then();
myPromise.then();
```



代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('qianguyihao');
});

myPromise.then(res => {
  console.log('成功回调1');
  console.log('res1:', res);
});

myPromise.then(res => {
  console.log('成功回调2');
  console.log('res2:', res);
});

myPromise.then(res => {
  console.log('成功回调3');
  console.log('res3', res);
});
```

打印结果：

```
成功回调1
res1: qianguyihao

成功回调2
res2: qianguyihao

成功回调3
res3 qianguyihao
```

代码解释：

当 myPromise 状态为 fulfilled 时，下面的四个 then() 方法**都在监听**，所以这四个 then() 方法都会收到状态确定的通知，进而都会执行。

此外，then() 被调用多次还有一种**链式调用**的写法，它的打印结果与上面的打印结果不同，想要了解 Promise 的链式调用，需要先学习 then() 方法的返回值，我们继续往下看。

## then() 方法传入回调函数的返回值

> 这一段的知识点略有难度，但也很重要。

### 默认返回值

then()方法的参数里，是一个回调函数。这个回调函数**默认是有返回值**的，它的返回值是一个**新的Promise**。正是因为这样，我们才可以进行链式调用。

这个新 Promise 的决议时机是等到当前 then() 方法参数里传入的回调函数有返回值时，进行决议。当返回值这行代码执行完毕后，这个 新 Promise 会立即进入 fulfilled 状态，进而触发下一个 then()的执行。同时可以给下一个 then()传递参数。

特殊情况：当then()方法传入的回调函数抛出异常时，那么，这个新 Promise 处于rejected 状态。（后续再讲）

Promise 链式调用的伪代码：

 ```js
// 伪代码
myPromise.then().then().catch()
 ```

上方代码中，因为 myPromise.then() 的返回值本身就是一个 Promise，所以才可以继续调用 then()，继续调用 catch()。

then() 链式调用的代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('qianguyihao');
});

myPromise
  .then(res => {
    console.log('成功回调1');
    console.log('res1:', res);
    /*
    这里虽然什么都没写，底层默认写了如下代码：
    return new Promise((resolve, reject) => {
  		resolve(); // resolve() 的参数是空，相当于 resolve(undefined)
    })
    */
  })
  .then(res => {
    console.log('成功回调2');
    console.log('res2:', res);
  })
  .then(res => {
    console.log('成功回调3');
    console.log('res3', res);
  });
```

打印结果：

```
成功回调1
res1: qianguyihao

成功回调2
res2: undefined

成功回调3
res3：undefined
```

代码解释：

第一个 then()里的回调，是由 myPromise 进行决议。第二个then()、第三个then() 也在**等待决议**。

但是，**第二个 then() 的回调是由第一个 then()传入的回调函数，返回的 Promise 进行决议**；第三个 then() 的回调是由第二个 then()传入的回调函数，返回的 Promise 进行决议，以此类推。所以，这两个then()里面的打印参数的结果是 undefined，并没有打印 myPromise 的决议结果。

换句话说，第一个 then() 在等待 myPromise 的决议结果，有决议结果后执行；第二个 then() 在等待第一个 then()参数里返回的新 Promise的决议结果，有决议结果后执行；第三个 then() 在等待第二个 then()参数里返回的新 Promise的决议结果，有决议结果后执行。

此外，我们也可以在 then()的回调函数里，手动 return 自己想要的数据类型，可以有以下几种情况。

### 返回普通值

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('1号');
});

myPromise
  .then(res => {
    console.log('res1:', res);
    return '2号';
  	/*
  	上面这行 return，相当于：
  	return new Promise((resolve, reject)=> {
  		resolve('2号');
  	})
  	*/
  })
  .then(res => {
    console.log('res2:', res);
  })
  .then(res => {
    console.log('res3:', res);
  });
```

返回结果：

```
res1: 1号
res2: 2号
res3: undefined
```

### 返回新的 Promise

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 1');
});

const myPromise2 = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 2');
});

myPromise
  .then(res => {
    console.log('res1:', res);
    return myPromise2;
  })
  .then(res => {
    // 监听 myPromise2 的决议：
    console.log('res2:', res);
  })
  .then(res => {
    console.log('res3', res);
  });
```

打印结果：

```
res1: qianguyihao fulfilled 1
res2: qianguyihao fulfilled 2
res3 undefined
```

### 返回 thenable 对象

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 1');
});

myPromise
  .then(res => {
    console.log('res1:', res);
    return {
      then: (resolve, reject) => {
        resolve('thenable fulfilled');
      },
    };
  })
  .then(res => {
    console.log('res2:', res);
  })
  .then(res => {
    console.log('res3', res);
  });
```

打印结果：

```
res1: qianguyihao fulfilled 1
res2: thenable fulfilled
res3 undefined
```

## Promise 实例的 catch() 方法

catch()方法是 Promise实例上的一个方法。它其实是放在Promise的原型上的 `Promise.prototype.catch`。

### catch() 方法的参数

catch()方法可以接收一个参数。这个参数是一直处于**监听状态**的回调函数。当 Promise 的状态为 rejected（任务执行失败）时会立即执行这个回调函数。

代码举例：

```js
const promise = new Promise((resolve, reject) => {
  reject('qianguyihao reject');
});

promise
  .then(res => {
    console.log('res:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
```

打印结果：

```
err: qianguyihao reject
```



### catch() 方法可以被多次调用

一个 Promise 的 catch() 方法可以被多次调用。每次调用时我们都可以传入对应 rejected 状态的回调函数。当 Promise 的状态变为 rejected 时，这些回调函数都会被执行。

catch() 被调用多次的伪代码：

```js
const myPromise = new Promise();

myPromise.catch();
myPromise.catch();
myPromise.catch();
```

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  reject('qianguyihao rejected');
});

myPromise.catch(err => {
  console.log('失败回调1');
  console.log('err1:', err);
});

myPromise.catch(err => {
  console.log('失败回调2');
  console.log('err2:', err);
});

myPromise.catch(err => {
  console.log('失败回调3');
  console.log('err3:', err);
});
```

打印结果：

```
失败回调1
err1: qianguyihao rejected

失败回调2
err2: qianguyihao rejected

失败回调3
err3: qianguyihao rejected
```

代码解释：

当 myPromise 状态为 rejected 时，下面的四个 catch() 方法**都在监听**，所以这四个 catch() 方法都会收到状态确定的通知，进而都会执行。

## catch() 方法传入回调函数的返回值

### 默认返回值

then()方法的参数里，是一个回调函数。这个回调函数**默认也是有返回值**的，它的返回值是一个**新的Promise**。所以，catch() 方法后面，我们可以继续调用 then() 或者 catch()。

这个新 Promise 的决议时机是等到当前 catch() 方法参数里传入的回调函数有返回值时，进行决议。当返回值这行代码执行完毕后，这个 新 Promise 会立即进入 fulfilled 状态，进而触发下一个then/catch 函数的执行。同时可以给下一个 then/catch 传递参数。

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  reject('qianguyihao rejected');
});

myPromise
  .catch(err => {
    console.log('err:', err);
    /*
    这里虽然什么都没写，底层默认写了如下代码：
    return new Promise((resolve, reject) => {
      resolve(); // resolve() 的参数是空
    })
    */
  })
  .then(res => {
    console.log('res:', res);
  });
```

打印结果：

```
err: qianguyihao rejected
res: undefined
```

此外，我们也可以在 catch()的回调函数里，手动 return 自己想要的数据类型，可以有以下几种情况：

- 返回普通值
- 返回新的 Promise对象
- 返回 thenable 对象

这些情况的写法与前面讲的 then() 方法类似。接下来我们仅以“返回普通值”作为例子进行代码演示。

### 返回普通值

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  reject('1号');
});

myPromise
  .catch(err => {
    console.log('err1:', err);
    return '2号';
    /*
    上面这行 return，相当于：
    return new Promise((resolve, reject)=> {
      resolve('2号');
    })
    */
  })
  .then(res => {
    console.log('res2:', res);
  })
  .then(res => {
    console.log('res3:', res);
  });
```

返回结果：

```
err1: 1号
res2: 2号
res3: undefined
```





## catch() 方法的执行时机

### 找到最近的 catch() 去执行

我们先来看一段代码：

```js
const myPromise = new Promise((resolve, reject) => {
  reject('qianguyihao rejected');
});

myPromise
  .then(res => {
    console.log('res1:', res);
  })
  .then(res => {
    console.log('res2:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
```

打印结果：

```
err: qianguyihao rejected
```

上方代码中的 catch() 是属于哪个 Promise 实例的方法呢？其实没有严格的界限。myPromise 的状态进入 rejected之后，它会找到**最近的catch()**去执行。这是 Promise的内部机制。

### Promise 抛出 rejected 异常时，一定要捕获并处理

当 Promise 状态为 rejected 时，表示抛出异常，如果不处理失败的回调，行不行呢？不行，会报错。代码举例：

```js
      const promise = new Promise((resolve, reject) => {
        // 在这里抛出异常
        reject('qianguyihao reject');
      });

      promise.then(res => {
        console.log('res:', res);
      });
```

![image-20230521135912267](https://img.smyhvae.com/image-20230521135912267.png)

这个报错的意思是：未捕获 rejected 失败状态的 Promise 异常。必须要加一个 catch() 进行捕获。

书写 Promise 时，比较好的习惯是，无论如何都要在末尾写一个 catch() 方法。

### 可在 then() 中通过 throw 抛出异常

先来看一段代码：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('aaa');
});

myPromise
  .then(res => {
    console.log('res1:', res);
   // 如果我想在这里 return 一个失败状态的promise，该怎么做？
  })
  .then(res => {
    console.log('res2:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
```

注意看注释，如果在那个位置return 一个失败状态的Promise，该怎么做？

做法1：

```js
return new Promise((resolve, reject)=> {
  reject('第二个 promise 执行失败');
})
```

做法2：

```js
throw new Error('第二个 Promise 执行失败');
```

做法2比做法1更为常用，完整代码如下：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('aaa');
});

myPromise
  .then(res => {
    console.log('res1:', res);
    // 抛出异常：相当于 return 一个失败状态的 Promise
    throw new Error('第二个 Promise 执行失败');
  })
  .then(res => {
    console.log('res2:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
```

打印结果：

```
res1: aaa
err: Error: 第二个 Promise 执行失败
```

当通过 throw 抛出异常后，当前 then() 里的后续代码会暂停执行，后续的 then() 也会暂停执行，直接往后走到最近的 catch()。

throw 这种写法在实战开发中很常用，需要理解并记住。



## Promise 实例的 finally() 方法

finally() 方法是在ES9（ES 2018）中新增的一个特性，表示 Promise 对象无论变成 fulfilled 状态 还是 rejected 状态，finally() 里传入的回调函数都会被执行。

finally() 里可传入一个参数，这个参数是一个回调函数。回调函数不传参数，因为前面无论是 fulfilled 状态，还是 rejected状态，这个回调函数都会执行。

finally() 方法很实用，可以避免我们写很多重复代码，它的执行时机也有很重要的应用场景。

代码举例：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('promise1 fulfilled');
});

const promise2 = new Promise((resolve, reject) => {
  reject('promise2 rejected');
});

promise1
  .then(res => {
    console.log('res1:', res);
  })
  .catch(err => {
    console.log('err1:', err);
  })
  .finally(() => {
    console.log('promise1 决议后都会执行的代码');
  });

promise2
  .then(res => {
    console.log('res2:', res);
  })
  .catch(err => {
    console.log('err2:', err);
  })
  .finally(() => {
    console.log('promise2 决议后都会执行的代码');
  });
```

打印结果：

```
res1: promise1 fulfilled
err2: promise2 rejected
promise1 决议后都会执行的代码
promise2 决议后都会执行的代码
```

## 处理 rejected 失败状态的两种写法

>  这一段是针对本文知识点的回顾和应用。

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

这两种写法在实战开发中的**代码举例**如下：

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





## Promise 规范

Promise 是⼀个拥有 then ⽅法的对象或函数。任何符合 promise 规范的对象或函数都可以成为 Promise。

关于 promise 规范的详细解读，可以看下面这个链接：

-   Promises/A+ 规范：<https://promisesaplus.com/>

## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)

