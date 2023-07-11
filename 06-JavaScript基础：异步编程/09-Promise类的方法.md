---
title: 09-Promise类的方法
---

<ArticleTopAd></ArticleTopAd>

## Promise 类的方法简介

Promise 的 API 分为两种：

- Promise 实例的方法（也称为：Promis的实例方法）
- Promise 类的方法（也称为：Promise的静态方法）

前面几篇文章，讲的都是 Promise **实例**的方法（需要先将Promise实例化），它们都是存放在Promise的prototype上的。今天这篇文章，我们来讲一下 Promise **类**的方法。

Promise **类**的方法：可以直接通过大写的`Promise.xxx`调用的方法。这里的`xxx`就称之为静态方法。

Promise 的自带 API 提供了如下静态方法：

| Promise 的静态方法   | 含义                                                         | 版本    |
| -------------------- | ------------------------------------------------------------ | ------- |
| Promise.resolve()    | 返回一个成功状态的 Promise 对象                              | ES 2015 |
| Promise.reject()     | 返回一个失败状态的 Promise 对象                              | ES 2015 |
| Promsie.all()        | 所有 Promise 都执行成功才算成功；或者任意一个 Promise 执行失败，就算失败 | ES 2015 |
| Proimse.allSettled() | 不论成功与失败，把所有Promise的执行结果全部返回              | ES 2020 |
| Promise.race()       | Promise集合中，返回第一个执行完成（无论成功与失败）的 Promise | ES 2015 |
| Promise.any()        | Promise集合中，返回第一个执行成功的Promise                   | ES 2021 |



## Promise.resolve() 和 Promise.reject()

### 使用场景

当我们在定义一个 Promise 的过程中，如果涉及到异步操作，那就需要通过`new Promise`的方式创建一个 Promise 实例。

但有些场景下，我们已经有一个**现成的内容**了，希望**将其转成 Promise 来使用**。此时，我们可以用 `Promise.resolve()` 将其封装为成功的状态。同理，用`Promise.reject()`可以封装为失败的状态。

比如说，有时候，promise 里面并没有异步操作，我只是**单纯地想通过 promise 的方式返回一个字符串**（有的业务就是有这样的需求），那就可以通过 `Promise.reslove('字符串')`、 `Promise.reject('字符串')` 这种**简写**的方式返回。

代码举例：

```js
const promise = Promise.resolve('qianguyihao')

promise.then(res => {
  console.log('res:', res);
});

// 上方代码如果是连续书写的话，也可以简写成：
Promise.resolve('qianguyihao').then(res => console.log('res:', res));
```

`Promise.resolve('qianguyihao')` 这种写法似乎过于啰嗦，直接 `return 'qianguyihao'`不行吗？that depands。举个例子，我们在调用别人的方法时，对方如果要求返回值必须是 Promise对象，那么，Promise.resolve() 就能派上用场了。

`Promise.resolve()`和`Promise.reject()`的返回值就是一个 Promise。

### 用法拆解

`Promise.resolve()`的用法相当于new Promise()，并执行resolve()操作。下面这两种写法是等价的：

```js
// 写法1：Promise 类的 resolve() 方法
const promise = Promise.resolve(params);

// 写法2：Promise 实例的 resolve() 方法
const promise = new Promise((resolve, reject)=> resolve(params));
```

Promise.reject()的用法同理。下面这两种写法是等价的：

```js
// 写法1：Promise 类的 reject() 方法
const promise = Promise.reject(params);

// 写法2：Promise 实例的 reject() 方法
// 第一个形参用不到，我们通常用 下划线 表示。这是一种约定俗成的规范写法。
const promise = new Promise((_, reject)=> reject(params));
```

写法2显然过于啰嗦，写法1用得更多。

写法2中，我们可以学到一个写代码的小技巧：如果某个形参我们用不到，但又必须写出来的话，我们通常用**下划线**表示。这是一种约定俗成的规范写法，比较简洁。

### resolve()和reject()的参数

resolve()参数中传入的值，可以有很多种类型，进而决定 Promise 的状态：

- 情况1：如果resolve()中传入**普通的值或者普通对象**，那么这个值会作为then()回调的参数。Promise 的状态为fulfilled。
- 情况2：如果resolve()中传入的是**另外一个新的 Promise**，那么原 Promise 的状态将**交给新的 Promise 决定**。
- 情况3：如果resolve()中传入的是**thenable** 对象，那就**会执行该then()方法**，并且根据**then()方法的结果来决定Promise的状态**。

reject()的参数中，无论传入什么值，Promise都会直接进入 rejected 状态，并触发 catch() 方法的执行。

我们在前面的文章《Promise入门详解》中针对这些情况做了详细介绍，在此不再赘述。

### 代码详解


resolve()、reject()既可以作为 Promise 实例的方法，也可以作为 Promise 类的方法。这两种情况，我们来对比看看。

例 1：

```js
function foo(flag) {
    if (flag) {
        return new Promise((resolve) => {
            // 这里可以做异步操作
            resolve('success');
        });

        // return Promise.resolve('success2');
    } else {
        return new Promise((reslove, reject) => {
            // 这里可以做异步操作
            reject('fail');
        });
    }
}

// 执行 reslove 的逻辑
foo(true).then((res) => {
    console.log(res);
});

// 执行 reject 的逻辑
foo(false).catch((err) => {
    console.log(err);
});
```

例 2：（见证奇迹的时刻）

```js
function foo(flag) {
    if (flag) {
        // Promise的静态方法：直接返回字符串
        return Promise.resolve('success');
    } else {
        // Promise的静态方法：直接返回字符串
        return Promise.reject('fail');
    }
}

// 执行 reslove 的逻辑
foo(true).then((res) => {
    console.log(res);
});

// 执行 reject 的逻辑
foo(false).catch((err) => {
    console.log(err);
});
```

例 1 和例 2 的打印结果是一样的。这两段代码的区别在于：例 1 里面可以封装异步任务；例 2 只能单纯的返回一个字符串等变量，不能封装异步任务。

## Promise.all()

Promise.all()的参数是一个数组，数组里可以填写多个 Promise；Promise.all()的返回值是一个新的 Promise。这里我们以三个 Promise 为例，比如 `Promsie.all([p1, p2, p3])`。它的作用是将p1、p2、p3 这三个 Promise 包裹在一起，**组成一个新的 Promise**。

**新 Promise 的状态**由 p1、p2、p3 这三个 Promse **共同决定**：

- 当 p1、p2、p3等所有的 Promise 状态都变为 fulfilled 时，新的 Promise 将变为 fulfilled 状态，并会将 p1、p2、p3 等所有 Promise 的返回值**组成一个数组**，作为 then() 的参数。
- 当p1、p2、p3 等 Promise中有一个 Promise 状态为 rejected 时，新的 Promise 将立马变为 rejected 状态，并会将第一个 reject() 的返回值作为 catch() 的参数。

`Promsie.all([p, p2, p3])` 的**使用场景**：并发处理多个异步任务，所有任务都执行成功，才算成功（才会走到 then）；只要有一个任务失败，就会马上走到 catch，整体都算失败。参数里传的是多个 Promise 实例组成的数组。

Promsie.all() 在实际开发中使用得非常频繁，真的很好用。我们在开发一个前端页面时，经常需要同时调用多个接口，等待这些接口的数据都准备好之后，前端再来做接下来的事。如果你也遇到这样的需求，那么 Promsie.all() 适合你。

### 语法举例

**1、异步任务都执行成功时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        resolve('promise 2 成功');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((res) => {
        // 三个异步任务都执行成功，才会走到这里
        // 这里拿到的 res，是三个成功的返回结果组成的数组
        console.log('all promise res:' + JSON.stringify(res));
    })
    .catch((err) => {
        // 只要有一个异步任务执行失败，就会马上走到这里
        console.log(err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1

// 2秒后
执行 promise2

// 3秒后
执行 promise3

all promise res:["promise 1 成功","promise 2 成功","promise 3 成功"]
```

**2、异步任务有至少一个执行失败时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        // 这里通过 reject() 的方式，表示任务执行失败
        reject('promise 2 失败');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((res) => {
        // 三个异步任务都执行成功，才会走到这里
        console.log('走到 then:' + JSON.stringify(res));
    })
    .catch((err) => {
        // 只要有一个异步任务执行失败，就会马上走到这里
        console.log('走到 catch:' + err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1

// 2秒后
执行 promise2
走到 catch:promise 2 失败

// 3秒后
执行 promise3
```

可以看到，当 promise2 执行失败之后，马上就走到了 catch，获取到了 promise2 失败的结果。

要注意的是，promise1、promise3并不会执行 resolve()，它俩状态是 pending，且无法获取它俩的结果。我们只知道整体的任务是失败的，获取了整体的失败结果。

### Promise.all()案例：多张图片上传

案例：现在有一个**图片上传**的接口，每次请求接口时只能上传一张图片。需求是：当用户连续上传完九张图片（正好凑齐九宫格）之后，给用户一个“上传成功”的提示。这个时候，我们就可以使用`Promsie.all()`。

这个例子，在实际的项目开发中，经常遇到，属于高频需求，需要记住并理解。

1、代码举例如下：

```js
const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const promiseArr = [];
imgArr.forEach((item) => {
    const p = new Promise((resolve, reject) => {
        // 在这里做图片上传的异步任务。图片上传成功后，接口会返回图片的 url 地址
        //  upload img ==> return imgUrl
        if (imgUrl) {
            // 单张图片上传完成
            resolve(imgUrl);
        } else {
            reject('单张图片上传失败');
        }
    });
    promiseArr.push(p);
});
Promise.all(promiseArr)
    .then((res) => {
        console.log('图片全部上传完成');
        console.log('九张图片的url地址，组成的数组：' + res);
    })
    .catch((res) => {
        console.log('部分图片上传失败');
    });
```

2、上方代码解释：

（1）只有九张图片都上传成功，才会走到 then。

第一张图会成功调 upload 接口，并返回 imgUrl，但不会走到 resolve，因为要等其他八张图的执行结果，再决定是一起走 resolove 还是一起走 reject。

（2）按时间顺序来看，假设第一张图片上传成功，第二张图片上传失败，那么，最终的表现是：

-   对于前端来说，九张图都会走到 reject；整体会走到 catch，不会走到 then。

-   对于后端来说，第一张图片会上传成功（因为写入 DB 是不可逆的），第二张图上传失败，剩下的七张图，会正常请求 upload img 接口。

**其实九张图的 upload img 请求都已经发出去了**。对于后端来说，是没有区别的（而且读写 DB 的操作不可逆），只是在前端的交互表现不同、走到 resolve / reject / then / catch 的时机不同而已。

3、**思维拓展**：

-   拓展 1：如果你希望九张图同时上传，并且想知道哪些图上传成功、哪些图上传失败，则可以这样做：**无论 upload img 接口请求成功与否，全都执行 resolve**。这样的话，最终一定会走到 then，然后再根据接口返回的结果判断九张图片的上传成功与否。

-   拓展 2：实战开发中，在做多张图片上传时，可能是一张一张地单独上传，各自的上传操作相互独立。此时 `Promise.all`便不再适用，这就得具体需求具体分析了。



### 注意：某个任务失败之后，其他任务会继续执行

一定要注意，当执行 Promise.all() / Promise.race() / Promise.any() 等方法时，如果其中一个任务失败了，**其他任务并没有停止，会继续执行**。只是前端拿不到其他任务的执行状态而已。

其他任务是否需要做一些特殊梳理，就要结合你自己的业务逻辑来考虑。

## Promse.allSettled()

Promise.all()方法组成的多个Promise中，有个明显的特点是：只要有一个 Promise 元素进入 rejected 状态，则整体的 Promise 会立即进入 rejected 状态。其他 Promise 元素会处于 pending 状态，任务本身是否执行成功，我们在前端代码里无从知晓，因为无法拿到处理结果。我们只知道整体的 Promise 是 fulfilled或者 rejected ，获取整体的成功/失败结果。

如果你认为 Promise.all() 的这一点无法满足你的需求，那么， Promise.allSettled() 可以提供一种新思路。

Promise.allSettled() 是ES11（ES 2020）中提供的新API。它会等待所有的 Promise 元素都有结果（无论是 fulfilled，还是rejected）后，才会有最终的结果（settled），而且状态一定是 fulfilled。

Promise.allSettled() 的状态为 fulfilled，不代表 里面的 Promise 元素都是 fulfilled，这只是在表明，里面的 Promise 元素都已经有了就结果（可能成功、可能失败）。

### 语法举例

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise1');
    resolve('promise 1 成功');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise2');
    reject('promise 2 失败');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise3');
    resolve('promise 3 成功');
  }, 3000);
});

Promise.allSettled([promise1, promise2, promise3]).then(res => {
  // 注意看 res 的返回结果
  console.log('allSettled:', res);
});
```

打印结果：

```
执行 promise1

执行 promise2

执行 promise3

allSettled:

[
    {
        "status": "fulfilled",
        "value": "promise 1 成功"
    },
    {
        "status": "rejected",
        "reason": "promise 2 失败"
    },
    {
        "status": "fulfilled",
        "value": "promise 3 成功"
    }
]
```

打印结果截图：

<img src="https://img.smyhvae.com/image-20230523193237044.png" alt="image-20230523193237044" style="zoom:50%;" />

从上面的打印结果可以看出，Promise.allSettled() 的状态为 fulfilled后，then()的回调函数里，res 是一个数组，数组里存放了每个 Promise 元素的执行结果（包括状态和返回值）。

在实际开发中，Promise.all() 比 Promise.allSettled() 用得更多一些。

## Promise.race()

`Promise.race([p1, p2, p3])`：参数里传的是多个 Promise 元素组成的数组。可以并发处理多个Promise，整体的执行状态取**第一个执行完成的 Promise**的状态，且状态和第一个完成的任务状态保持一致。

上面这句话，第一次读时，可能很绕口。我以异步任务为例，说的再通俗一点：在多个同时执行的异步任务中，等待哪个任务 **最先执行完成**（无论是走到 resolve，还是走到 reject，都算执行完成），整体的状态就立即跟这个任务保持一致。如果这个任务执行成功，那整体就算成功（走到 then）；如果这个任务执行失败，那整体就算失败（走到 catch）。

`race`的中文翻译，可以理解为“竞赛”、“竞争”。意思是，谁先抢到名额，就认定谁了。**谁前有结果，就用谁的结果**。无论这个人最终的结局是成功或者失败，整体的结局，都以这个人的结局为准。

我刚开始学 Promise.race()的时候，误以为它的含义是“只要有一个异步**执行成功**，整体就算成功（走到 then）；所有任务都执行失败，整体才算失败（走到 catch）”。现在想来，真是大错特错，过于懵懂。

现在我顿悟了，准确来说，Promise.race()强调的是：只要有一个异步任务**执行完成**，整体就是**完成**的。

Promise.race()的**应用场景**：在众多 Promise 实例中，最终结果只取一个 Promise 的状态，**谁返回得最快就用谁的 Promise **状态。

我们来看看各种场景的打印结果，继续前行。

### 语法举例

**场景 1、所有任务都执行成功时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        resolve('promise 2 成功');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        // 这里拿到的 res，是第一个成功的 promise 返回的结果，不是数组
        console.log(JSON.stringify(res));
				console.log('走到then:' + res);
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log(err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1
走到then:promise 1 成功

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```

**场景 2、第一个任务成功、第二个任务失败时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        // 第二个任务执行失败时
        reject('promise 2 失败');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        console.log('走到then:' + res);
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log('走到catch:' + err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1
走到then:promise 1 成功

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```

可以看出，场景 2 的打印结果和场景 1 的打印结果，是一样的。因为第一个执行完成的任务是成功的，所以整体就算成功，马上走到 then()。

**场景 3、第一个任务失败、第二个任务成功时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        // 第一个任务执行失败时
        reject('promise 1 失败');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        resolve('promise 2 成功');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        console.log('走到then:' + res);
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log('走到catch:' + err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1
走到catch：promise 1 失败

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```

看清楚了没？场景 3 的最终打印结果，是走到了 catch；任务 2 和任务 3 里的 resolve，并没有执行。

场景 3 的代码，一定要好好理解。

### Promise.race()举例：图片加载超时

现在有个需求是这样的：前端需要加载并显示一张图片。如果图片在三秒内加载成功，那就显示图片；如果三秒内没有加载成功，那就按异常处理，前端提示“加载超时”或者“请求超时”。

代码实现：

```js
// 图片请求的Promise
function getImg() {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function () {
            // 图片的加载，是异步任务
            resolve(img);
        };
        img.src = 'https://img.smyhvae.com/20200102.png';
    });
}

// 加载超时的 Promise
function timeout() {
    return new Promise((resolve, reject) => {
        // 采用 Promise.race()之后，如果 timeout() 的 promise 比 getImg() 的 promise先执行，说明定时器时间到了，那就算超时。整体的最终结果按失败处理。
        setTimeout(() => {
            reject('图片加载超时');
        }, 3000);
    });
}

Promise.race([getImg(), timeout()])
    .then((res) => {
        // 图片加载成功
        console.log(res);
    })
    .catch((err) => {
        // 图片加载超时
        console.log(err);
    });
```

如代码注释所述：采用 Promise.race() 之后，如果 timeout() 的 Promise 比 getImg() 的 Promise 先执行，说明定时器时间到了，那就算超时。整体的最终结果按失败处理。

这个思路很巧妙。用同样的思路，我们还可以处理网络请求超时的问题。如果接口请求时长超过 3 秒，就按超时处理，也就是下面我们要举的例子。

### Promise.race()举例：网络请求超时

现在有这种需求：如果接口请求时长超过 3 秒，就按超时处理。

基于这种需求，我们可以用 Promise.race() 来实现：一个 Promise 用于请求接口，另一个 Promise 用于 setTimeout() 定时器。把这两个 Promise 用 Promise.race() 组装在一起，谁先执行，那么最终的结果就以谁的为准。

代码举例：

```js
function query(url, delay = 4000) {
    let promiseArr = [
        myAajax(url),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('网络请求超时');
            }, delay);
        }),
    ];
    return Promise.race(promiseArr);
}

query('http://localhost:8899/xxx_url', 3000)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
```

## Promise.any()

Promise.any() 是 ES12（ES 2021）中推出的新API。它类似于 Promise.race()，但有一个关键的区别：Promise.any() 会等待参数中第一个状态为 fulfilled 的Promise元素，然后立即进入 fulfilled状态。

如果参数中所有的 Promise 元素都进入了 rejected，那么也会等到所有的Promise都变成rejected 状态，最终报错 AggregateError。

### 语法举例

**场景1**、第一个任务失败，第二个任务成功：

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise1');
    reject('promise 1 失败');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise2');
    resolve('promise 2 成功');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise3');
    resolve('promise 3 成功');
  }, 3000);
});

Promise.any([promise1, promise2, promise3]).then(res => {
  console.log('走到then:', res);
});
```

打印结果：

```
// 1秒后
执行 promise1

// 2秒后
执行 promise2
走到then(): promise 2 成功

// 3秒后
执行 promise3
```

**场景2**、三个任务都失败：

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise1');
    reject('promise 1 失败');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise2');
    reject('promise 3 失败');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行 promise3');
    reject('promise 3 失败');
  }, 3000);
});

Promise.any([promise1, promise2, promise3])
  .then(res => {
    console.log('走到then:', res);
  })
  .catch(err => {
    console.log('走到catch:', err);
  });
```

打印日志：

```
// 1秒后
执行 promise1

// 2秒后
执行 promise2

// 3秒后
执行 promise3
走到catch: AggregateError: All promises were rejected
```

注意看打印结果中的报错信息。`执行 promise3`这行日志出来之后，报错的那行马上就出来了。

### 兼容性问题

`Promise.any()` 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 [TC39 第四阶段草案（Stage 4）](https://github.com/tc39/proposal-promise-any)。

## 总结

Promise 的静态方法简化处理了多个并发操作的代码，使其更加方便、直观地调用。

Promise 不仅能解决嵌套异步任务的**回调地域**问题，也可管理多个异步任务的**并发请求**。

Promise 本身不是异步的，但是它可以封装异步任务，并对异步操作进行良好的、舒适简洁的状态管理，这便是 Promise 的魅力所在。

## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)
