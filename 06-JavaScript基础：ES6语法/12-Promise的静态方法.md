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

-   `Promise.race`：并发处理多个异步任务，只要有一个任务执行成功，就会成功（马上会走到 resolve）；

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

`Promsie.all([p1, p2, p3])`：并发处理多个异步任务，所有任务都执行成功，才算成功（走到 resolve）；只要有一个失败，就会走到 reject，整体都算失败。参数里传的是 多个 promise 实例组成的数组。

### 代码举例

```js
/*
              封装 Promise 接口调用
            */
function queryData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.readyState == 4 && xhr.status == 200) {
                // 处理正常结果
                resolve(xhr.responseText);
            } else {
                // 处理异常结果
                reject('服务器错误');
            }
        };
        xhr.open('get', url);
        xhr.send(null);
    });
}

const promise1 = queryData('http://localhost:3000/api1');
const promise2 = queryData('http://localhost:3000/api2');
const promise3 = queryData('http://localhost:3000/api3');

Promise.all([promise1, promise2, promise3]).then((res) => {
    // 这里拿到的 res是三个返回结果组成的数组。
    console.log(res);
});
```

### Promise.all()：图片上传举例

比如说，现在有一个**图片上传**的接口，每次请求接口时只能上传一张图片。需求是：当用户连续上传完三张图片之后，给用户一个“上传成功”的提示。这个时候，我们就可以使用`Promsie.all()`。

## Promise.race()

`race`的中文翻译，可以理解为“竞赛”。

代码举例：

```js
/*
              封装 Promise 接口调用
            */
function queryData(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.readyState == 4 && xhr.status == 200) {
                // 处理正常结果
                resolve(xhr.responseText);
            } else {
                // 处理异常结果
                reject('服务器错误');
            }
        };
        xhr.open('get', url);
        xhr.send(null);
    });
}

var promise1 = queryData('http://localhost:3000/api1');
var promise2 = queryData('http://localhost:3000/api2');
var promise3 = queryData('http://localhost:3000/api3');

Promise.race([promise1, promise2, promise3]).then((result) => {
    console.log(result);
});
```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
