---
title: 10-async异步函数
---

<ArticleTopAd></ArticleTopAd>

## 异步函数（用 async 声明的函数）

### 异步函数的定义

使用`async`关键字声明的函数，称之为异步函数。在普通函数前面加上 async 关键字，就成了异步函数。语法举例：

```js
// 写法1：函数声明的写法
async function foo1() {
}

// 写法2：表达式写法（ES5语法）
const foo2 = async function () {
}

// 写法3：表达式写法（ES6箭头函数语法）
const foo3 = async () => {
}

// 写法4：定义一个类，在类中添加一个异步函数
class Person {
  async foo4() {
  }
}
```

JS中的“异步函数”是一个专有名词，特指用`async`关键字声明的函数，其他函数则称之为普通函数。如果你在一个普通函数中定义了一个异步任务，那并不叫异步函数，而是叫包含异步任务的普通函数。

async （异步的）这个单词是 asynchronous 的缩写；相反，sync（同步的）这单词是 synchronous 的缩写。

上面的异步函数代码，执行顺序与普通函数相同，默认情况下会同步执行。如果想要发挥异步执行的作用，则需要配合 await 关键字使用。稍后我们再讲 async/await的语法。



## 异步函数的返回值

> 异步函数的返回值和普通函数差别比较大，需要特别关注。

普通函数的返回值，默认是 undefined；也可以手动 return 一个返回值，那就以手动 return的值为准。

**异步函数的返回值永远是 Promise 对象**。至于这个 Promise 后续会进入什么状态，那就要看情况了。主要有以下几种情况：

- 情况1：如果异步函数内部返回的是普通值（包括 return undefined时）或者普通对象，那么Promise 的状态为fulfilled。这个值会作为then()回调的参数。

- 情况2：如果异步函数内部返回的是**另外一个新的 Promise**，那么 Promise 的状态将**交给新的 Promise 决定**。
- 情况3：如果异步函数内部返回的是一个对象，并且这个对象里有实现then()方法（这种对象称为 **thenable** 对象），那就会执行该then()方法，并且根据**then()方法的结果来决定Promise的状态**。

另外还有一种特殊情况：

- 情况4：如果异步函数内部在执行时遇到异常或者手动抛出异常时，那么， Promise 处于rejected 状态。

上面这四种情况似曾相识，我们在前面学习“resolve() 传入的参数”、“then()方法的返回值”知识点时，都有类似的情况，知识都是相通的。

### 默认返回值

代码举例：

```js
async function foo2() {
  // 相当于 return undefined，也相当于 return Promise.resolve(undefined)
};

async function foo3() {
  Promise.resolve('qianguyihao');
  // 相当于 return undefined，也相当于 return Promise.resolve(undefined)
};

// foo2()、foo3()都是一个Promise对象
foo2().then(res => {
  console.log(res); // 打印结果：undefined
})

foo3().then(res => {
  console.log(res); // 打印结果：undefined
})
```

代码解释：异步函数即便没有手动写返回值，也相当于 `return Promise.resolve(undefined)`。

### 返回普通值

比如下面这段代码：

```js
async function foo() {
  return 'qianguyihao'
};
```

![image-20230608114346235](https://img.smyhvae.com/image-20230608114346235.png)

可以看到，foo() 的返回值是Promise对象，不是字符串。上面的代码等价于下面这段代码：

```js
async function foo() {
  return Promise.resolve('qianguyihao');
};
```

进而，我们可以通过 Promise 对象的then()方法。代码举例如下。

举例1：（异步函数中手动 return 一个值）

```js
async function foo() {
  return 'qianguyihao';
  // 上面这行代码相当于：return Promise.resolve('qianguyihao');
};

// foo() 是一个Promise对象
foo().then(res => {
  console.log(res); // 打印结果：qianguyihao
})
```







## async/await 的使用

### 异步函数配合 await 关键字使用

我们可以在`async`声明的异步函数中，使用 `await`关键字来暂停函数的执行，等待一个异步操作完成。温馨提示：await 关键字不能在普通函数中使用，只能在异步函数中使用。

在等待异步操作期间，异步函数会暂停执行，并让出线程，使其他代码可以继续执行。一旦异步操作完成，该异步函数会恢复执行，并返回一个 Promise 对象。具体解释如下：

（1）await的后面是一个表达式，这个表达式要求是一个 Promise 对象（通常是一个封装了异步任务的Promise对象）。await执行完成后可以得到异步结果。

（2）await 会等到当前 Promise 的状态变为 fulfilled之后，才继续往下执行异步函数。

- async 的返回值是 Promise 对象。

### 本质是语法糖

async/await 是在 ES8(即ES 2017）中引入的新语法，是另外一种异步编程解决方案。

async/await 本质是 生成器 Generator 的语法糖，是对Generator的封装。什么是语法糖呢？语法糖就是让语法变得更加简洁、更加舒服，有一种甜甜的感觉。

async/await 的写法使得编写异步代码更加直观和易于管理，避免了使用回调函数或Promise链的复杂性。认识到这一点，非常重要。

### Promise、Generator、async/await的对比

我们在使用 Promise、async/await、Generator 的时候，返回的都是 Promise 的实例。

如果直接使用 Promise，则需要通过 then 来进行链式调用；如果使用 async/await、Generator，写起来更像同步的代码。

接下来，我们看看 async/await 的代码是怎么写的。

### async/await 的基本用法

async 后面可以跟一个 Promise 实例对象。代码举例如下：

```js
const request1 = function () {
  const promise = new Promise((resolve, reject) => {
    requestAjax('https://www.baidu.com/xxx_url', (res) => {
      if (res.retCode == 200) {
        // 这里的 res 是接口1的返回结果
        resolve('request1 success' + res);
      } else {
        reject('接口请求失败');
      }
    });
  });

  return promise;
};

async function requestData() {
  // 关键代码
  const res = await request1();
  return res;
}
requestData().then(res => {
  console.log(res);
});
```

### 用 async/await 封装Promise链式调用【重要】

假设现在有三个网络请求，请求2必须依赖请求1的结果，请求3必须依赖请求2的结果，如果按照ES5的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。之前学过 Promise，它可以把原本的**多层嵌套调用**改进为**链式调用**。

而本文要学习的 async/await ，可以把原本的“多层嵌套调用”改成类似于同步的写法，非常优雅。

代码举例：

```js
// 【公共方法层】封装 ajax 请求的伪代码。传入请求地址、请求参数，以及回调函数 success 和 fail。
function requestAjax(url, params, success, fail) {
  var xhr = new xhrRequest();
  // 设置请求方法、请求地址。请求地址的格式一般是：'https://api.example.com/data?' + 'key1=value1&key2=value2'
  xhr.open('GET', url);
  // 设置请求头（如果需要）
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success && success(xhr.responseText);
    } else {
      fail && fail(new Error('接口请求失败'));
    }
  };
}

// 【model层】将接口请求封装为 Promise
function requestData1(params_1) {
  return new Promise((resolve, reject) => {
    requestAjax('https://api.qianguyihao.com/url_1', params_1, res => {
      // 这里的 res 是接口返回的数据。返回码 retCode 为 0 代表接口请求成功。
      if (res.retCode == 0) {
        // 接口请求成功时调用
        resolve('request success' + res);
      } else {
        // 接口请求异常时调用
        reject({ retCode: -1, msg: 'network error' });
      }
    });
  });
}


// requestData2、requestData3的写法与 requestData1类似。他们的请求地址、请求参数、接口返回结果不同，所以需要挨个单独封装 Promise。
function requestData2(params_2) {
  return new Promise((resolve, reject) => {
    requestAjax('https://api.qianguyihao.com/url_2', params_2, res => {
      if (res.retCode == 0) {
        resolve('request success' + res);
      } else {
        reject({ retCode: -1, msg: 'network error' });
      }
    });
  });
}

function requestData3(params_3) {
  return new Promise((resolve, reject) => {
    requestAjax('https://api.qianguyihao.com/url_3', params_3, res => {
      if (res.retCode == 0) {
        resolve('request success' + res);
      } else {
        reject({ retCode: -1, msg: 'network error' });
      }
    });
  });
}

// 封装：用 async ... await 调用 Promise 链式请求
async function getData() {
  // 【关键代码】
  const res1 = await requestData1(params_1);
  const res2 = await requestData2(res1);
  const res3 = await requestData3(res2);
}

getData();
```

上面这段代码比较长，我们在上一章学习《Promise的链式调用》时，已经详细讲过了。

### await 后面也可以跟一个异步函数

前面讲到，await后面通常是一个执行异步任务的Promise对象。由于异步函数的返回值本身就是一个Promise，所以，我们也可以在await 后面也可以跟一个异步函数。

代码举例：

```js
const request1 = function () {
  return new Promise((resolve, reject) => {
    resolve('request1 请求成功');
  });
};

async function request2() {
  const res = await request1();
  return res;
}

async function request3() {
  // 【关键代码】request2() 既是一个异步函数，同样也是一个 Promise，所以可以跟在 await 的后面
  const res = await request2();
  console.log('res:', res);
}

request3();
```



## 异步函数的异常处理

前面讲过，如果异步函数内部在执行时遇到异常或者手动抛出异常时，那么， 这个异步函数返回的Promise 处于rejected 状态。

捕获并处理异步函数的异常时，有两种方式：

- 方式1：通过 Promise的catch()方法捕获异常。
- 方式2：通过 try catch捕获异常。

在处理异步函数的异常情况时，方式2更为常见。

如果我们不捕获异常，则会往上层层传递，最终传递给浏览器，浏览器会在控制台报错。

### 方式1：过 Promise的catch()方法捕获异常

```js
function requestData1() {
  return new Promise((resolve, reject) => {
    reject('任务1失败');
  })
}

function requestData2() {
  return new Promise((resolve, reject) => {
    resolve('任务2成功');
  })
}

async function getData() {
  // requestData1 在执行时，遇到异常
  await requestData1();
  /*
  由于上面的代码在执行是遇到异常，所以，这里虽然什么都没写，底层默认写了如下代码：
  return Promise.reject('任务1失败');
  */

  // 下面这行代码不会再走了
  await requestData2();
}

// getData() 这个异步函数的返回值是一个 Promise，状态为 rejected，所以会走到 catch()
getData().then(res => {
  console.log(res);
}).catch(err => {
  console.log('err:', err);
});
```

打印结果：

```
err: 任务1失败
```

### 方式2：通过 try catch 捕获异常

如果你觉得上面的写法比较麻烦，还可以通过 try catch 捕获异常。

代码举例：

```js
function requestData1() {
  return new Promise((resolve, reject) => {
    reject('任务1失败');
  })
}

function requestData2() {
  return new Promise((resolve, reject) => {
    resolve('任务2成功');
  })
}

async function getData() {
  try {
    // requestData1 在执行时，遇到异常
    await requestData1();
    /*
    由于上面的代码在执行是遇到异常，当前任务立即终止，所以，这里虽然什么都没写，底层默认写了如下代码：
    return Promise.reject('任务1失败');
    */

    // 下面这两代码不会再走了
    console.log('qianguyihao1');
    await requestData2();
  }
  catch (err) {
    // 捕获异常代码
    console.log('err:', err);
  }
}

getData();
console.log('qianguyihao2');

```

打印结果：

```
qianguyihao2
err1: 任务1失败
```
## 总结

在 async 函数中，不是所有的 异步任务都需要 await。如果两个任务在业务上没有**依赖关系**，则不需要 await；也就是说，可以并发执行，不需要线性执行，避免无用的等待。

## 参考链接

- [js async await 终极异步解决方案](https://www.cnblogs.com/CandyManPing/p/9384104.html)

- [理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316)

## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)

