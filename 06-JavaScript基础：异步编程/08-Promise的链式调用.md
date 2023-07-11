---
title: 08-Promise的链式调用
---

<ArticleTopAd></ArticleTopAd>

## 前言

实际开发中，我们经常需要先后请求多个接口：发送第一次网络请求后，等待请求结果；有结果后，然后发送第二次网络请求，等待请求结果；有结果后，然后发送第三次网络请求。以此类推。

比如说：在请求完接口 1 的数据`data1`之后，需要根据`data1`的数据，继续请求接口 2，获取`data2`；然后根据`data2`的数据，继续请求接口 3。换而言之，现在有三个网络请求，请求 2 必须依赖请求 1 的结果，请求 3 必须依赖请求 2 的结果。

如果按照往常的写法，会有三层回调，陷入“回调地狱”的麻烦。

这种场景其实就是接口的多层嵌套调用，在前端的异步编程开发中，经常遇到。有了 Promise 以及更高级的写法之后，我们可以把多层嵌套调用按照**线性**的方式进行书写，非常优雅。也就是说：Promise 等ES6的写法可以把原本的**多层嵌套写法**改进为**链式写法**。

我们来对比一下嵌套写法和链式调用的写法，你会发现后者的非常优雅。

## Promise 链式调用：封装多次网络请求

### ES5 中的传统嵌套写法

伪代码举例：

```js
// 封装 ajax 请求：传入请求地址、请求参数，以及回调函数 success 和 fail。
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

// ES5的传统写法，执行 ajax 请求，层层嵌套
requestAjax(
  'https://api.qianguyihao.com/url_1', params_1,
  res1 => {
    console.log('第一个接口请求成功:' + JSON.stringify(res1));
    // ajax嵌套调用
    requestAjax('https://api.qianguyihao.com/url_2', params_2, res2 => {
      console.log('第二个接口请求成功:' + JSON.stringify(res2));
      // ajax嵌套调用
      requestAjax('https://api.qianguyihao.com/url_3', params_3, res3 => {
        console.log('第三个接口请求成功:' + JSON.stringify(res3));
      });
    });
  },
  (err1) => {
    console.log('qianguyihao 请求失败:' + JSON.stringify(err1));
  }
);
```

上面的代码层层嵌套，可读性很差，而且出现了我们常说的回调地狱问题。

### Promise 的嵌套写法

改用 ES6 的 Promise  之后，写法上会稍微改进一些。代码举例如下：

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

// 【业务层】Promise 调接口的嵌套写法。温馨提示：这段代码在接下来的学习中，会被改进无数次。
// 发送第一次网络请求
requestData1(params_1).then(res1 => {
  console.log('第一个接口请求成功:' + JSON.stringify(res1));

  // 发送第二次网络请求
  requestData1(params_2).then(res2 => {
    console.log('第二个接口请求成功:' + JSON.stringify(res2));

    // 发送第三次网络请求
    requestData1(params_3).then(res3 => {
      console.log('第三个接口请求成功:' + JSON.stringify(res3));
    })
  })
})
```

上方代码非常经典。在真正的实战中，我们往往需要嵌套请求**多个不同的接口**，它们的接口请求地址、要处理的 resolve 和 reject 的时机、业务逻辑往往是不同的，所以需要分开封装不同的 Promise 实例。也就是说，如果要调三个不同的接口，建议单独封装三个不同的 Promise 实例：requestData1、requestData2、requestData3。

这三个 Promise 实例，最终都需要调用底层的公共方法 requestAjax()。每个公司都有这样的底层方法，里面的代码会做一些公共逻辑，比如：封装原生的 ajax请求，用户登录态的校验等等；如果没有这种公共方法，你就自己写一个，为组织做点贡献。

但是，细心的你可能会发现：上面的最后10行代码仍然不够优雅，因为 Promise 在调接口时出现了嵌套的情况，实际开发中如果真这么写的话，是比较挫的，阅读性非常差，我不建议这么写。要怎么改进呢？这就需要用到 Promise 的**链式调用**。

### Promise 的链式调用写法（重要）

针对多个不同接口的嵌套调用，采用 Promise 的**链式调用**写法如下：（将上方代码的最后10行，改进如下）

```js
requestData1(params_1).then(res1 => {
  console.log('第一个接口请求成功:' + JSON.stringify(res1));
  // 【关键代码】继续请求第二个接口。如果有需要，也可以把 res1 的数据传给 requestData2()的参数
  return requestData2(res1);
}).then(res2 => {
  console.log('第二个接口请求成功:' + JSON.stringify(res2));
  // 【关键代码】继续请求第三个接口。如果有需要，也可以把 res2 的数据传给 requestData3()的参数
  return requestData3(res2);
}).then(res3 => {
  console.log('第三个接口请求成功:' + JSON.stringify(res3));
}).catch(err => {
  console.log(err);
})
```

上面代码中，then 是可以链式调用的，一旦 return 一个新的 Promise 实例之后，后面的 then() 就可以作为这个新 Promise 在成功后的回调函数。这种**扁平化**的写法，更方便维护，可读性更好；并且可以更好的**管理**请求成功和失败的状态。

这段代码很经典，你一定要多看几遍，多默写几遍，倒背如流也不过分。如果你平时的异步编程代码能写到这个水平，说明你对 Promise 已经入门了，因为绝大多数人都是用的这个写法。

其实还有更高级、更有水平的写法，那就是用生成器、用 async ... await 来写Promise的链式调用，也就是改进上面的十几行代码。你把它掌握了，编程水平才能更上一层楼。我们稍后会讲。

### Promise 链式调用举例：封装 Node.js 的回调方法

代码结构与上面的类似，这里仅做代码举例，不再赘述。

传统写法：

```js
fs.readFile(A, 'utf-8', function (err, data) {
    fs.readFile(B, 'utf-8', function (err, data) {
        fs.readFile(C, 'utf-8', function (err, data) {
          console.log('qianguyihao:' + data);
        });
    });
});
```

上方代码多层嵌套，存在回调地狱的问题。

Promise 写法：

```js
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

read(A)
    .then((data) => {
        return read(B);
    })
    .then((data) => {
        return read(C);
    })
    .then((data) => {
        console.log('qianguyihao:' + data);
    })
    .catch((err) => {
        console.log(err);
    });
```



## 用 async ... await 封装链式调用

前面讲的 Promise 链式调用是用 `then().then().then()` 这种写法。其实我们还可以用更高级的写法，也就是用生成器、用 async ... await  改写那段代码。改进之后，代码写起来非常简洁。

在学习这段内容之前，你需要先去《JavaScript进阶/迭代器和生成器》那篇文章里去学习迭代器、生成器相关的知识。生成器是一种特殊的迭代器，async ... await 是生成器的语法糖。

### 用生成器封装链式调用

代码举例：

```js
// 封装 Promise 链式请求
function* getData(params_1) {
  // 【关键代码】
  const res1 = yield requestData1(params_1);
  const res2 = yield requestData2(res1);
  const res3 = yield requestData3(res2);
}

// 调用 Promise 链式请求
const generator = getData(params_1);

generator.next().value.then(res1 => {
  generator.next(res1).value.then(res2 => {
    generator.next(res2).value.then(res3 => {
      generator.next(res3);
    })
  })
})
```

生成器在执行时，是分阶段执行的，每次遇到 next()方法后就会执行一个阶段，遇到 yield 就会结束当前阶段的执行并暂停。 上方代码中，yield 后面的内容是当前阶段产生的 Promise 对象；yield 前面的内容是要传递给下一个阶段的参数。

### 用 async ... await 封装链式调用（重要）

上面的生成器代码有些晦涩难懂，实际开发中，通常不会这么写。我们更喜欢用 async ... await 语法封装 Promise 的链式调用。async ... await  是属于生成器的语法糖，写起来更简洁直观、更容易理解。

代码举例：

```js
// 封装：用 async ... await 调用 Promise 链式请求
async function getData() {
  const res1 = await requestData1(params_1);
  const res2 = await requestData2(res1);
  const res3 = await requestData3(res2);
}

getData();
```

代码解释：requestData1()、requestData2()、requestData3() 这三个函数都是一个Promise对象，其内部封装的代码写法已经在前面「Promise 的嵌套写法」这一小段中讲过了。

上面的代码非常简洁。实际开发中也经常用到，非常实用。暂时我们先记住用法，下一章我们会学习 async ... await 的详细知识。





## 链式调用，如何处理任务失败的情况

在链式调用多个异步任务的Promise时，如果中间有一个任务失败或者异常，要怎么处理呢？是继续往下执行？还是停止执行，直接抛出异常？这取决于你的业务逻辑是怎样的。

常见的处理方案有以下几种，你可以根据具体情况**按需**选择。

### 统一处理失败的情况，不继续往下走

针对 a、b、c 这三个请求，不管哪个请求失败，我都希望做统一处理。这种代码要怎么写呢?我们可以在最后面写一个 catch。

由于是统一处理多个请求的异常，所以**只要有一个请求失败了，就会马上走到 catch**，剩下的请求就不会继续执行。比如说：

-   a 请求失败：然后会走到 catch，不执行 b 和 c

-   a 请求成功，b 请求失败：然后会走到 catch，不执行 c。

代码举例如下：

```js
getPromise('a.json')
  .then((res) => {
    console.log(res);
    return getPromise('b.json'); // 继续请求 b
  })
  .then((res) => {
    // b 请求成功
    console.log(res);
    return getPromise('c.json'); // 继续请求 c
  })
  .then((res) => {
    // c 请求成功
    console.log('c：success');
  })
  .catch((err) => {
    // 统一处理请求失败
    console.log(err);
  });
```

### 中间的任务失败后，如何继续往下走？

在多个Promise的链式调用中，**如果中间的某个Promise 执行失败，还想让剩下的其他 Promise 顺利执行**的话，那就请在中间**那个失败的Promise里加一个失败的回调函数**（可以写到then函数的第二个参数里，也可以写到catch函数里）。捕获异常后，便可继续往下执行其他的Promise。

代码举例：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 1');
});

const promise2 = new Promise((resolve, reject) => {
  reject('qianguyihao rejected 2');
});

const promise3 = new Promise((resolve, reject) => {
  resolve('qianguyihao fulfilled 3');
});


promise1
  .then(res => {
    console.log('res1:', res);
    // return 一个 失败的 Promise
    return promise2;
  })
  .then(res => {
    console.log('res2:', res);
    return promise3;
  }, err => {
    // 如果 promise2 为失败状态，可以通过 then() 的第二个参数（即失败的回调函数）捕获异常，然后就可以继续往下执行其他 Promise
    console.log('err2:', err);
    // 关键代码：即便 promise2 失败了，也要继续执行 Promise3
    return promise3;
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
res3 qianguyihao fulfilled 3
```

上方代码中，我们单独处理了 promise2 失败的情况。不管promise2 成功还是失败，我们都想让后续的 promise3 正常执行。



## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)
