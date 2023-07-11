---
title: 07-Promise实例的方法
---

<ArticleTopAd></ArticleTopAd>

## Promise 实例的方法简介

Promise 的 API 分为两种：

- Promise 实例的方法（也称为：Promis的实例方法）
- Promise 类的方法（也称为：Promise的静态方法）

Promise **实例**的方法：我们需要实例化 Promise，也就是先 new 一个 Promise 实例对象，然后通过 Promise 实例去调用 `then`、`catch`、`finally`等方法。这几个方法就是 Promise 的实例方法。

Promise 实例提供了如下方法：

-   promise.then()：异步任务成功的回调函数。

-   promise.catch()：异步任务失败的回调函数。

-   promise.finaly()：异步任务无论成功与否，都会执行的回调函数。

我们在上一篇文章《Promise入门详解》中，用到的都是Promise实例的方法。本篇文章，我们来把这三个实例方法详细学习一下。

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

## then() 方法的返回值（重要）

> 这一段的知识点略有难度，但是非常重要，是我们学习 Promise 链式调用的理论基础。

then()方法本身是有返回值的，它会返回一个**新的Promise对象**。因为 then()方法的返回值永远是一个 Promise 对象，所以我们才可以对它进行**链式调用**。

Promise 链式调用的伪代码：

 ```js
// 伪代码
myPromise.then().then().catch()
 ```

上方代码中，因为 myPromise.then() 的返回值本身就是一个 Promise，所以才可以继续调用 then()、继续调用 catch()。

那么，**then()方法返回的 Promise 对象处于什么状态呢**？then()方法的参数里，是一个回调函数。这取决于回调函数的返回值是什么。情况如下：

1、当then()方法中的回调函数在执行时，那么Promise 处于pending状态。

2、当 then()方法中的回调函数中，手动 return 一个返回值时，那么 Promise 的状态取决于返回值的类型。当返回值这行代码执行完毕后， Promise 会立即决议，进入确定状态（成功 or 失败）。具体情况如下：

- 情况1：如果没有返回值（相当于 return undefined），或者返回值是**普通值/普通对象**，那么 Promise 的状态为fulfilled。这个值会作为fulfilled 状态的回调函数的参数值。
- 情况2：如果返回值是**另外一个新的 Promise**，那么原 Promise 的状态将**交给新的 Promise 决定**，这两个Promise 的状态一致。
- 情况3：如果返回值是一个对象，并且这个对象里有实现then()方法（这种对象称为 **thenable** 对象），那就会执行该then()方法，并且根据**then()方法的结果来决定Promise的状态**。

还有一种特殊情况：

- 情况4：当then()方法传入的回调函数遇到异常或者手动抛出异常时，那么， Promise 处于rejected 状态，并将抛出的错误作为 rejected 状态的回调函数的参数值。

**小结**：then()方法里，我们可以通过 return **传递结果和状态**给下一个新的Promise。

### 默认返回值

如果then()方法的回调函数里没写返回值（相当于 return undefined），那么then()方法的返回值是一个新的Promise。新 Promise 的状态为fulfilled，其then()方法里，res的值为 undefined。

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

### 返回普通值：通过 return 传递数据结果

我们也可以在 then()方法的回调函数里，手动 return 自己想要的数据，比如一个普通值 value1。这个普通值就可以传递给下一个新的Promise。新 Promise 的状态为fulfilled，其then()方法里，res的值为 value1。

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('1号');
});

myPromise
  .then(res => {
    console.log('res1:', res);
    // return一个普通值，把这个值传递给下一个Promise
    return '2号';
  	/*
  	上面这行 return，相当于：
  	return new Promise((resolve, reject)=> {
  		resolve('2号');
  	})
  	*/
  })
  .then(res => {
  	// res可以接收到上一个 Promise 传递的值
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

情况1、在 then() 方法的回调函数中 return 一个成功的新 Promise，那么，then()返回的Promise 也是成功状态。相当于把新Promise的成功结果传递出去。代码举例：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 1');
});

const promise2 = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 2');
});

promise1
  .then(res => {
    console.log('res1:', res);
    return promise2;
  })
  .then(res => {
    // 监听 promise2 的成功状态
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

情况2、在 then() 方法的回调函数中 return 一个失败的新 Promise，那么，then()返回的Promise 也是失败状态。再继续往下走，会怎么样？相当于把新Promise 的失败原因传递出去。代码举例：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 1');
});

const promise2 = new Promise((resolve, reject) => {
  reject('qianguyihao rejected 2');
});

promise1
  .then(res => {
    console.log('res1:', res);
    // return 一个 失败的 Promise
    return promise2;
  })
  .then(res => {
    console.log('res2:', res);
  }, err => {
    // 如果 promise2 为失败状态，可以通过 then() 的第二个参数（即失败的回调函数）捕获异常，然后就可以继续往下执行其他的代码
    console.log('err2:', err);
   // 这里相当于 return undefined
  })
  .then(res => {
    console.log('res3', res);
  }, err => {
    console.log('err3:', err);
  });
```

打印结果：

```
res1: qianguyihao fulfilled 1
err2: qianguyihao rejected 2
res3: undefined
```

上方代码可以看到，第二个Promise走的是失败回调，这很容易理解。重点是，最后一个 Promise 走的是成功回调，这很出人意料。我们稍后学习 catch()方法的返回值后，就能看懂。**这例子很经典，一定要记住**。

情况3：在 then() 方法的回调函数中 return 一个 pending 状态的新 Promise，那么 then() 返回的Promise状态也是 pending。

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

### then() 中抛出异常

当then()方法传入的回调函数遇到异常或者手动抛出异常时，那么，then()所返回的**新的 Promise 会进入rejected 状态**，进而触发新Promise 的 catch() 方法的执行，做异常捕获。

这方面的内容，我们在后续的文章《异常处理方案》中会详细讲解。

### 特殊情况：then() 中传入非函数时，会发生值穿透

在Promise的`then()`方法中，如果传入一个非函数作为参数，JS 会将其忽略，并且将前一个 Promise 的结果值传递给下一个`then()`方法。这意味着如果你在`then()`中传入非函数参数，它将被视为一个空操作，而不会对Promise链产生任何影响。

“值穿透”的意思是，传入的非函数值会被忽略。

代码举例：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Hello');
});

myPromise
  .then('Invalid Argument')
  .then(res1 => {
    console.log('res1:', res1);
    return 'World';
  })
  .then(res2 => {
    console.log('res2:', res2);
  });
```

打印结果：

```
res1: Hello
res2: World
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

## catch() 方法的返回值（重要）

与 then() 方法类似，catch()方法默认也是有返回值的，它会返回一个**新的Promise对象**。因为 catch()方法的返回值永远是一个 Promise 对象，所以我们才可以对它进行**链式调用**。

Promise 链式调用的伪代码：

 ```js
// 伪代码
myPromise.then().then().catch().then()
 ```

上方代码中，因为 myPromise.catch() 的返回值本身就是一个 Promise，所以才可以继续调用 then()、继续调用 catch()。

与 then() 方法类似，**catch()方法返回的 Promise 对象处于什么状态呢**？catch()方法的参数里，是一个回调函数。这取决于回调函数的返回值是什么。情况如下：

1、当catch()方法中的回调函数在执行时，那么Promise 处于 pending 状态。

2、当 catch方法中的回调函数中，手动 return 一个返回值时，那么 Promise 的状态取决于返回值的类型。当返回值这行代码执行完毕后， Promise 会立即决议，进入确定状态（成功 or 失败），进而触发下一个then/catch 函数的执行。同时可以给下一个 then/catch 传递参数。具体情况如下：

- 情况1：如果没有返回值（相当于 return undefined），或者返回值是**普通值/普通对象**，那么 Promise 的状态为fulfilled。这个值会作为then()回调的参数。
- 情况2：如果返回值是**另外一个新的 Promise**，那么原 Promise 的状态将**交给新的 Promise 决定**。这两个Promise 的状态一致。
- 情况3：如果返回值是一个对象，并且这个对象里有实现then()方法（这种对象称为 **thenable** 对象），那就会执行该then()方法，并且根据**then()方法的结果来决定Promise的状态**。

还有一种特殊情况：

- 情况4：当catch()方法传入的回调函数遇到异常或者手动抛出异常时，那么， Promise 处于rejected 状态。

**小结**：catch()方法里，我们可以通过 return **传递结果**给下一个新的Promise。

### 默认返回值

如果catch()方法的回调函数里没写返回值（相当于 return undefined），那么catch()方法的返回值是一个新的Promise。新 Promise 的状态为fulfilled，其then()方法里，res的值为 undefined。

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
      resolve(undefined); // resolve() 的参数是空
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

### 返回普通值

我们也可以在 catch()方法的回调函数里，手动 return 自己想要的数据，比如一个普通值 value1。这个普通值就可以传递给下一个新的Promise。新 Promise 的状态为fulfilled，其then()方法里，res的值为 value1。

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

上方代码中的 catch() 是属于哪个 Promise 实例的方法呢？其实没有严格的界限。它既可以捕获 myPromise的异常，也可以捕获那两个 then()的异常，就是这么灵活。

再来看一段代码：

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled');
});

myPromise
  .then(res => {
    console.log('res1:', res);
    // 遇到异常（或者任务失败）后，会找到最近的 catch() 去执行
    throw new Error('not login')
  })
  .then(res => {
    console.log('res2:', res);
  }, err => {
    console.log('err2:', err);
  })
  .catch(err => {
    console.log('err3:', err);
  });
```

打印结果：

```
res1: qianguyihao fulfilled
err2: Error: not login
```

请记住，myPromise 的状态变为失败时，它会找到**最近的**那个**失败回调函数**并执行。这是 Promise的内部机制。

## 处理失败状态的两种写法

我们有两种写法可以捕获 Promise的失败/异常状态：

-   写法 1：单独写 catch() 方法作为失败的回调函数。

-   写法 2：then()方法里可以传两个参数，第⼀个参数是成功时的回调函数，第⼆个参数是失败时的回调函数。

### 代码格式

这两种写法的**代码格式**如下：

```js
// 第一步：model层的接口封装
const myPromise = new Promise((resolve, reject) => {
  // 这里做异步任务（比如 ajax 请求接口，或者定时器），然后执行 resolve 或者 reject。
	...
  ...
});

const onFulfilled = (res) => {
  console.log(res);
};

const onRejected = function (err) {
  console.log(err);
};

// 写法1：通过 catch 方法捕获失败状态的Promise
myPromise.then(onFulfilled).catch(onRejected);

// 写法2：then()方法里可以传两个参数，第⼀个参数是成功时的回调函数，第⼆个参数是失败时的回调函数。
myPromise.then(onFulfilled, onRejected);
```

注意事项：

1、上面这两种写法是等价的，选其中一种写法即可。这两种写法几乎没有区别。

2、有一点点区别：

- `myPromise.then(onFulfilled).catch(onRejected)`：既可以捕获到 myPromise 的异常，**也可以捕获到 then() 里面的异常**（划重点）。
- `myPromise.then(onFulfilled, onRejected)`：只能捕获到 promise的异常，无法捕获then()里面的异常。

知识拓展：`myPromise.catch().then()`这种写法，只能捕获到 myPromise 里面的异常。









### 代码举例

这两种写法在实战开发中的**代码举例**如下：

```js
function myPromise() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口，或者定时器）
            ...
            ...
    });
}

// 写法1
myPromise()
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
myPromise()
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

**代码解释**：写法 1 和写法 2 的作用是等价的。只不过，写法 2 是把 catch 里面的代码作为 then 里面的第二个参数而已。

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

## Promise的其他写法

### 写法1





## Promise 规范

Promise 是⼀个拥有 then ⽅法的对象或函数。任何符合 promise 规范的对象或函数都可以成为 Promise。

关于 promise 规范的详细解读，可以看下面这个链接：

-   Promises/A+ 规范：<https://promisesaplus.com/>
-   【翻译】Promises/A+规范：https://www.ituring.com.cn/article/66566

## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)

