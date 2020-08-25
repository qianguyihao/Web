## 异步调用

### 异步

JavaScript 的执行环境是**单线程**。

所谓单线程，是指 JS 引擎中负责解释和执行 JavaScript 代码的线程只有一个，也就是一次只能完成一项任务，这个任务执行完后才能执行下一个，它会「阻塞」其他任务。这个任务可称为主线程。

异步模式可以一起执行**多个任务**。

常见的异步模式有以下几种：

- 定时器

- 接口调用

- 事件函数

今天这篇文章，我们重点讲一下**接口调用**。接口调用里，重点讲一下**Promise**。

### 接口调用的方式

js 中常见的接口调用方式，有以下几种：

- 原生 ajax
- 基于 jQuery 的 ajax
- Fetch
- Promise
- axios

### 多次异步调用的依赖分析

- 多次异步调用的结果，顺序可能不同步。

- 异步调用的结果如果**存在依赖**，则需要嵌套。

在 ES5 中，当进行多层嵌套回调时，会导致代码层次过多，很难进行维护和二次开发；而且会导致**回调地狱**的问题。ES6 中的 Promise 就可以解决这两个问题。

## Promise 概述

### Promise 的介绍和优点

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息。

Promise 对象, 可以**用同步的表现形式来书写异步代码**（也就是说，代码看起来是同步的，但本质上的运行过程是异步的）。使用 Promise 主要有以下好处：

- 可以很好地解决**回调地狱**的问题（避免了层层嵌套的回调函数）。

- 语法非常简洁、可读性强。Promise 对象提供了简洁的 API，使得控制异步操作更加容易。

### 回调地狱的举例

假设买菜、做饭、洗碗、倒厨余垃圾都是异步的。

但真实的场景中，实际的操作流程是：买菜成功之后，才能开始做饭。做饭成功后，才能开始洗碗。洗碗结束后， 再倒厨余垃圾。这里的一系列动作就涉及到了多层嵌套调用，也就是回调地狱。

## Promise 的基本用法

（1）使用 new 实例化一个 Promise 对象，Promise 的构造函数中传递一个参数。这个参数是一个函数，该函数用于处理异步任务。

（2）并且传入两个参数：resolve 和 reject，分别表示异步执行成功后的回调函数和异步执行失败后的回调函数；

（3）通过 promise.then() 处理返回结果。这里的 `promise` 指的是 Promise 实例。

### Promise 处理异步任务

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // 第一步：model层的接口封装
      const promise = new Promise((resolve, reject) => {
        // 这里做异步任务（比如ajax 请求接口。这里暂时用定时器代替）
        setTimeout(function () {
          var data = { retCode: 0, msg: 'qianguyihao' }; // 接口返回的数据
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
      promise
        .then((data) => {
          // 从 resolve 获取正常结果
          console.log(data);
        })
        .catch((data) => {
          // 从 reject 获取异常结果
          console.log(data);
        });
    </script>
  </body>
</html>
```

上方代码中，当从接口返回的数据`data.retCode`的值不同时，可能会走 resolve，也可能会走 reject，这个由你自己的业务决定。

### Promise 封装 Ajax 请求

写法1：

```js
const request = require('request');

// Promise 封装接口
function request1() {
    return new Promise((resolve, reject) => {
        request('https://www.baidu.com', function (response) {
            if (response.retCode == 200) {
                // 这里的 response 是接口1的返回结果
                resolve('request1 success' + response);
            } else {
                reject('接口请求失败');
            }
        });
    });
}

request1().then((res1) => {
    // 接口1请求成功后，打印接口1的返回结果
    console.log(res1);
    return request2();
});
```

写法2：

```js
const request = require('request');

// Promise 封装接口1
const request1 = function () {
    const promise = new Promise((resolve, reject) => {
        request('https://www.baidu.com', function (response) {
            if (response.retCode == 200) {
                // 这里的 response 是接口1的返回结果
                resolve('request1 success' + response);
            } else {
                reject('接口请求失败');
            }
        });
    });

    return promise;
};

// 先发起request1，等resolve后再发起request2；紧接着，等 request2有了 resolve之后，再发起 request3
request1().then((res1) => {
    // 接口1请求成功后，打印接口1的返回结果
    console.log(res1);
    return request2();
});

```


## promise 对象的 3 个状态（了解即可）

- 初始化状态（等待状态）：pending

- 成功状态：fulfilled

- 失败状态：rejected

（1）当 new Promise()执行之后，promise 对象的状态会被初始化为`pending`，这个状态是初始化状态。`new Promise()`这行代码，括号里的内容是同步执行的。括号里定义一个 function，function 有两个参数：resolve 和 reject。如下：

- 如果请求成功了，则执行 resolve()，此时，promise 的状态会被自动修改为 fulfilled。

- 如果请求失败了，则执行 reject()，此时，promise 的状态会被自动修改为 rejected

（2）promise.then()方法，括号里面有两个参数，分别代表两个函数 function1 和 function2：

- 如果 promise 的状态为 fulfilled（意思是：如果请求成功），则执行 function1 里的内容

- 如果 promise 的状态为 rejected（意思是，如果请求失败），则执行 function2 里的内容

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

## 基于 Promise 处理多次 Ajax 请求（链式调用）【重要】

实际开发中，我们经常需要同时请求多个接口。比如说：在请求完`接口1`的数据`data1`之后，需要根据`data1`的数据，继续请求接口 2，获取`data2`；然后根据`data2`的数据，继续请求接口 3。

换而言之，现在有三个网络请求，请求 2 必须依赖请求 1 的结果，请求 3 必须依赖请求 2 的结果，如果按照往常的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。有了 Promise 之后，我们可以把多层嵌套调用按照**线性**的方式进行书写，非常优雅。也就是说：Promise 可以把原本的**多层嵌套调用**改进为**链式调用**。

代码举例：（多次 Ajax 请求，链式调用）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const request = require('request');

      // Promise 封装接口1
      const request1 = function () {
        const promise = new Promise((resolve, reject) => {
          request('https://www.baidu.com', function (response) {
            if (response.retCode == 200) {
              // 这里的 response 是接口1的返回结果
              resolve('request1 success' + response);
            } else {
              reject('接口请求失败');
            }
          });
        });

        return promise;
      };

      // Promise 封装接口2
      const request2 = function () {
        const promise = new Promise((resolve, reject) => {
          request('https://www.jd.com', function (response) {
            if (response.retCode == 200) {
              // 这里的 response 是接口2的返回结果
              resolve('request2 success' + response);
            } else {
              reject('接口请求失败');
            }
          });
        });

        return promise;
      };

      // Promise 封装接口3
      const request3 = function () {
        const promise = new Promise((resolve, reject) => {
          request('https://www.taobao.com', function (response) {
            if (response.retCode == 200) {
              // 这里的 response 是接口3的返回结果
              resolve('request3 success' + response);
            } else {
              reject('接口请求失败');
            }
          });
        });

        return promise;
      };

      // 先发起request1，等resolve后再发起request2；紧接着，等 request2有了 resolve之后，再发起 request3
      request1()
        .then((res1) => {
          // 接口1请求成功后，打印接口1的返回结果
          console.log(res1);
          return request2();
        })
        .then((res2) => {
          // 接口2请求成功后，打印接口2的返回结果
          console.log(res2);
          return request3();
        })
        .then((res3) => {
          // 接口3请求成功后，打印接口3的返回结果
          console.log(res3);
        });
    </script>
  </body>
</html>
```

上面代码中，then 是可以链式调用的，后面的 then 可以拿到前面 resolve 出来的数据。

这个举例很经典，需要多看几遍。

## return 的函数返回值

return 后面的返回值，有两种情况：

- 情况 1：返回 Promise 实例对象。返回的该实例对象会调用下一个 then。

- 情况 2：返回普通值。返回的普通值会直接传递给下一个 then，通过 then 参数中函数的参数接收该值。

我们针对上面这两种情况，详细解释一下。

### 情况 1：返回 Promise 实例对象

举例如下：（这个例子，跟上一段 Ajax 链式调用 的例子差不多）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="text/javascript">
      /*
              基于Promise发送Ajax请求
            */
      function queryData(url) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.readyState == 4 && xhr.status == 200) {
              // 处理正常情况
              resolve(xhr.responseText);
            } else {
              // 处理异常情况
              reject('接口请求失败');
            }
          };
          xhr.responseType = 'json'; // 设置返回的数据类型
          xhr.open('get', url);
          xhr.send(null); // 请求接口
        });
      }
      // 发送多个ajax请求并且保证顺序
      queryData('http://localhost:3000/api1')
        .then(
          (data1) => {
            console.log(JSON.stringify(data1));
            return queryData('http://localhost:3000/api2');
          },
          (error1) => {
            console.log(error1);
          }
        )
        .then(
          (data2) => {
            console.log(JSON.stringify(data2));
            // 这里的 return，返回的是 Promise 实例对象
            return new Promise((resolve, reject) => {
              resolve('qianguyihao');
            });
          },
          (error2) => {
            console.log(error2);
          }
        )
        .then((data3) => {
          console.log(data3);
        });
    </script>
  </body>
</html>
```

### 情况 2：返回 普通值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="text/javascript">
      /*
              基于Promise发送Ajax请求
            */
      function queryData(url) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.readyState == 4 && xhr.status == 200) {
              // 处理正常情况
              resolve(xhr.responseText);
            } else {
              // 处理异常情况
              reject('接口请求失败');
            }
          };
          xhr.responseType = 'json'; // 设置返回的数据类型
          xhr.open('get', url);
          xhr.send(null); // 请求接口
        });
      }
      // 发送多个ajax请求并且保证顺序
      queryData('http://localhost:3000/api1')
        .then(
          (data1) => {
            console.log(JSON.stringify(data1));
            return queryData('http://localhost:3000/api2');
          },
          (error1) => {
            console.log(error1);
          }
        )
        .then(
          (data2) => {
            console.log(JSON.stringify(data2));
            // 返回普通值
            return 'qianguyihao';
          },
          (error2) => {
            console.log(error2);
          }
        )
        /*
                    既然上方返回的是 普通值，那么，这里的 then 是谁来调用呢？
                    答案是：这里会产生一个新的 默认的 promise实例，来调用这里的then，确保可以继续进行链式操作。
                */
        .then((data3) => {
          // 这里的 data3 接收的是 普通值 'qianguyihao'
          console.log(data3);
        });
    </script>
  </body>
</html>
```

## Promise 的常用 API：实例方法【重要】

Promise 自带的 API 提供了如下实例方法：

- promise.then()：获取异步任务的正常结果。

- promise.catch()：获取异步任务的异常结果。

- promise.finaly()：异步任务无论成功与否，都会执行。

代码举例如下。

写法 1：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function queryData() {
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            var data = { retCode: 0, msg: 'qianguyihao' }; // 接口返回的数据
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

      queryData()
        .then((data) => {
          // 从 resolve 获取正常结果
          console.log('接口请求成功时，走这里');
          console.log(data);
        })
        .catch((data) => {
          // 从 reject 获取异常结果
          console.log('接口请求失败时，走这里');
          console.log(data);
        })
        .finally(() => {
          console.log('无论接口请求成功与否，都会走这里');
        });
    </script>
  </body>
</html>
```

写法 2：（和上面的写法 1 等价）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function queryData() {
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            var data = { retCode: 0, msg: 'qianguyihao' }; // 接口返回的数据
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

      queryData()
        .then(
          (data) => {
            // 从 resolve 获取正常结果
            console.log('接口请求成功时，走这里');
            console.log(data);
          },
          (data) => {
            // 从 reject 获取异常结果
            console.log('接口请求失败时，走这里');
            console.log(data);
          }
        )
        .finally(() => {
          console.log('无论接口请求成功与否，都会走这里');
        });
    </script>
  </body>
</html>
```

**注意**：写法 1 和写法 2 的作用是完全等价的。只不过，写法 2 是把 catch 里面的代码作为 then 里面的第二个参数而已。

## Promise 的常用 API：对象方法【重要】

Promise 自带的 API 提供了如下对象方法：

- Promise.all()：并发处理多个异步任务，所有任务都执行成功，才能得到结果。

- Promise.race(): 并发处理多个异步任务，只要有一个任务执行成功，就能得到结果。

下面来详细介绍。

### Promise.all() 代码举例

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="text/javascript">
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

      Promise.all([promise1, promise2, promise3]).then((result) => {
        console.log(result);
      });
    </script>
  </body>
</html>
```

### Promise.race() 代码举例

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="text/javascript">
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
    </script>
  </body>
</html>
```

了解这些内容之后， Promise 的基本用法，你就已经掌握了。

## 参考链接

- [当面试官问你 Promise 的时候，他究竟想听到什么？](https://zhuanlan.zhihu.com/p/29235579)

- [手写一个 Promise/A+,完美通过官方 872 个测试用例](https://www.cnblogs.com/dennisj/p/12660388.html)

## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200101.png)
