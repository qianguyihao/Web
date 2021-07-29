---
title: 07-Promise的静态方法
publish: true
---

<ArticleTopAd></ArticleTopAd>


## Promise 的常用 API 分类

### Promise 的实例方法

**实例方法**：我们需要先 new 一个 promise 实例对象，然后通过 promise 对象去调用 `then`、`catch`、`finally`方法。这几个方法就是 Promise 的实例方法。

Promise 的自带 API 提供了如下实例方法：

-   promise.then()：获取异步任务的正常结果。

-   promise.catch()：获取异步任务的异常结果。

-   promise.finaly()：异步任务无论成功与否，都会执行。

### Promise 的静态方法

**静态方法**：可以直接通过大写的`Promise.xxx`调用的方法。这里的`xxx`就称之为静态方法。

Promise 的自带 API 提供了如下静态方法：

-   `Promise.resolve()`

-   `Promise.reject()`

-   `Promsie.all()`：并发处理多个异步任务，所有任务都执行成功，才算成功（走到 resolve）；只要有一个失败，就会走到 reject，整体都算失败。

-   `Promise.race()`：并发处理多个异步任务，返回的是第一个执行完成的 promise，且状态和第一个完成的任务状态保持一致。

前面的几篇文章，讲的都是 Promise 的**实例方法**；今天这篇文章，我们来详细讲一下 Promise 的**静态方法**。

## Promise.resolve() 和 Promise.reject()

当我们在定义一个 promise 的过程中，如果涉及到异步操作，那就需要通过`new Promise`的方式创建一个 Promise 实例。

但有些场景下，我们并没有异步操作，但**仍然想调用 promise.then**，此时，我们可以用 `Promise.resolve()` 将其包装成成功的状态。同理，`Promise.reject()`可以包装成失败的状态。

比如说，有的时候，promise 里面并不涉及异步操作，我只是**单纯地想通过 promise 对象返回一个字符串**（有的业务就是有这样的需求），那就可以通过 `Promise.reslove('字符串')` `Promise.reject('字符串')` 、这种**简写**的方式返回。

这两种情况，我们来对比看看。

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

`Promsie.all([p1, p2, p3])`：并发处理多个异步任务，所有任务都执行成功，才算成功（才会走到 then）；只要有一个任务失败，就会马上走到 catch，整体都算失败。参数里传的是 多个 promise 实例组成的数组。

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
        console.log(JSON.stringify(res));
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
["promise 1 成功","promise 2 成功","promise 3 成功"]
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

可以看到，当 promise2 执行失败之后，马上就走到了 catch，而且 promise3 里的 resolve 并没有执行。

### Promise.all()举例：多张图片上传

比如说，现在有一个**图片上传**的接口，每次请求接口时只能上传一张图片。需求是：当用户连续上传完九张图片（正好凑齐九宫格）之后，给用户一个“上传成功”的提示。这个时候，我们就可以使用`Promsie.all()`。

代码举例如下：

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
Promise.all(promiseArr).then((res) => {
    console.log('图片全部上传完成');
    console.log('九张图片的url地址，组成的数组：' + res);
}).catch(res=> {
    console.log('部分图片上传失败');
});
```

上方代码解释：

1、只有九张图片都上传成功，才会走到 then。

2、按时间顺序来看，假设第一张图片上传成功，第二张图片上传失败，那么，最终的表现是：

- 对于前端来说，九张图都会走到 reject；整体会走到 catch，不会走到 then。

- 对于后端来说，第一张图片会上传成功（因为写入DB是不可逆的），第二张图上传失败，剩下的七张图，会正常请求 upload img 接口。

3、**特别说明**：

- 第一张图会成功调 upload 接口，并返回 imgUrl，但不会走到 resolve，因为要等其他八张图的执行结果，再决定是一起走 resolove 还是一起走 reject。

- 当执行 Promise.all() / Promise.race() / Promise.any() 的时候，**其实九张图的 upload img 请求都已经发出去了**。对于后端来说，是没有区别的（而且读写DB的操作不可逆），只是在前端的交互表现不同、走到 resolve / reject / then / catch 的时机不同而已。


上面这个例子，在实际的项目开发中，经常遇到，属于高频需求，需要记住并理解。

4、**思维拓展**：

- 拓展1：如果你希望九张图同时上传，并且想知道哪些图上传成功、哪些图上传失败，则可以这样做：**无论 upload img 接口请求成功与否，全都执行 reslove**。这样的话，最终一定会走到 then，然后再根据接口返回的结果判断九张图片的上传成功与否。

- 拓展2：实战开发中，在做多张图片上传时，可能是一张一张地单独上传，各自的上传操作相互独立。此时 `Promise.all`便不再适用，这就得具体需求具体分析了。

## Promise.race()

`Promise.race([p1, p2, p3])`：并发处理多个异步任务，返回的是第一个执行完成的 promise，且状态和第一个完成的任务状态保持一致。参数里传的是多个 promise 实例组成的数组。

上面这句话，第一次读时，可能很绕口。我说的再通俗一点：在多个同时执行的异步任务中，先找出哪个异步任务**最先执行完成**（无论是走到 resolve，还是走到 reject，都算执行完成），整体的状态就跟这个任务保持一致。如果这个任务执行成功，那整体就算成功（走到 then）；如果这个任务执行失败，那整体就算失败（走到 catch）。

`race`的中文翻译，可以理解为“竞赛”。意思是，谁先抢到名额，就认定谁了。无论这个人最终的结局是成功或者失败，整体的结局，都以这个人的结局为准。

我刚开始学 Promise.race()的时候，误以为它的含义是“只要有一个异步**执行成功**，整体就算成功（走到 then）；所有任务都执行失败，整体才算失败（走到 catch）”。现在想来，真是大错特错，过于懵懂。

现在我顿悟了，准确来说，Promise.race()强调的是：只要有一个异步任务**执行完成**，整体就是**完成**的。

我们来看看各种场景的打印结果，便能擦干泪水，继续前行。

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
        // 第一个完成的任务，如果执行失败，就会走到这里
        // 这里拿到的 res，是第一个成功的 promise 返回的结果，不是数组
        console.log(JSON.stringify(res));
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
"promise 1 成功"

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

可以看出，场景 2 的打印结果和场景 1 的打印结果，是一样的。因为最新执行完成的任务，是成功的，所以整体会马上走到 then，且整体就算成功。

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

看清楚了没？场景 3 的最终打印结果，是走到了 catch；任务 2 和任务 3 里的 resolve，并没有继续执行。

场景 3 的代码，一定好好好理解。

### Promise.race()举例

现在有个需求是这样的：前端需要加载并显示一张图片。如果图片在三秒内加载成功，那就显示图片；如果三秒内没有加载成功，那就按异常处理，前端提示“加载超时”。

代码实现思路：

```js
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

如代码注释所述：采用 Promise.race()之后，如果 timeout() 的 promise 比 getImg() 的 promise 先执行，说明定时器时间到了，那就算超时。整体的最终结果按失败处理。

这个思路很巧妙。

## Promise.any()




## 总结

Promise 不仅能解决嵌套异步任务的**回调地域**问题，也可做多个异步任务的**并发请求**，还可以进行舒适简洁的状态管理。

Promise 本身不是异步的，但是它可以封装异步任务，并对异步操作进行良好的状态管理，这便是 Promise 的魅力所在。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
