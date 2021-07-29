---
title: 06-Promise的链式调用
publish: true
---

<ArticleTopAd></ArticleTopAd>


## Promise 的链式调用：处理多次 Ajax 请求【重要】

实际开发中，我们经常需要同时请求多个接口。比如说：在请求完`接口1`的数据`data1`之后，需要根据`data1`的数据，继续请求接口 2，获取`data2`；然后根据`data2`的数据，继续请求接口 3。

换而言之，现在有三个网络请求，请求 2 必须依赖请求 1 的结果，请求 3 必须依赖请求 2 的结果，如果按照往常的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。有了 Promise 之后，我们可以把多层嵌套调用按照**线性**的方式进行书写，非常优雅。也就是说：Promise 可以把原本的**多层嵌套写法**改进为**链式写法**。

### ES5 中的传统写法

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
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 执行 ajax 请求
ajax(
    '/a.json',
    (res) => {
        console.log('qianguyihao 第一个接口请求成功:' + JSON.stringify(res));
        // ajax嵌套调用
        ajax('b.json', (res) => {
            console.log('qianguyihao 第二个接口请求成功:' + JSON.stringify(res));
            // ajax嵌套调用
            ajax('c.json', (res) => {
                console.log('qianguyihao 第三个接口请求成功:' + JSON.stringify(res));
            });
        });
    },
    (err) => {
        console.log('qianguyihao 请求失败:' + JSON.stringify(err));
    }
);
```

上面的代码层层嵌套，可读性很差，而且出现了我们常说的回调地狱问题。

### Promise 链式调用（初步写法，方便理解）

如果我们不对 Promise 的链式调用进行封装，那么，它的简单写法是下面这样的：

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
            fail && fail(new Error('接口请求失败'));
        }
    };
}

new Promise((resolve, reject) => {
    ajax('a.json', (res) => {
        console.log(res);
        resolve();
    });
})
    .then((res) => {
        console.log('a成功');
        return new Promise((resolve, reject) => {
            ajax('b.json', (res) => {
                console.log(res);
                resolve();
            });
        });
    })
    .then((res) => {
        console.log('b成功');
        return new Promise((resolve, reject) => {
            ajax('c.json', (res) => {
                console.log(res);
                resolve();
            });
        });
    })
    .then((res) => {
        cnosole.log('c成功');
    });
```

上面代码中，then 是可以链式调用的，一旦 return 一个新的 promise 实例之后，后面的 then 就可以拿到前面 resolve 出来的数据。这种**扁平化**的写法，更方便维护；并且可以更好的**管理**请求成功和失败的状态。

但是，你可能会奇怪，上面的代码，怎么这么多？而且有不少重复。因为这里只是采用了一种笨拙的方式来写，为的是方便大家理解 promise 的执行过程。我们其实可以对 promise 的链式调用进行封装。

怎么个封装法呢？上面的代码中，每次在 return 一个 promise 的时候，只是 url 地址不一样，其他的代码是一样的。所以我们可以把重复的代码封装成函数。写法如下。

### Promise 链式调用（封装一个接口）

针对同一个接口的多次嵌套调用，采用 promise 封装后的写法如下：

```js
// 定义 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 第一步：model层，接口封装
function getPromise(url) {
    return new Promise((resolve, reject) => {
        ajax(url, (res) => {
            // 这里的 res 是接口的返回结果。返回码 retCode 是动态数据。
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

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
getPromise('a.json')
    .then((res) => {
        // a 请求成功。从 resolve 获取正常结果：接口请求成功后，打印a接口的返回结果
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
        console.log(res);
    })
    .catch((e) => {
        // 从 reject中获取异常结果
        console.log(e);
    });
```

怎么样？上面代码是不是非常简洁？而且可读性很强。

代码写到这里，我们还可以再继续优化一下。细心的你可以发现，我们在做三次嵌套请求的时候，针对 resolve 和 reject 的处理时机是一样的。如果你的业务是针对**同一个接口**连续做了三次调用，只是请求**传参不同**，那么，按上面这样写是没有问题的。

但是，真正在实战中，我们往往需要嵌套请求**多个不同的接口**，要处理的 resolve 和 reject 的时机往往是不同的，所以需要分开封装不同的 Promise 实例，这在实战开发中更为常见。代码应该是像下面这样写。

### Promise 链式调用（封装多个接口）

针对多个不同接口的嵌套调用，采用 promise 封装后的写法如下：

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
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// Promise 封装接口1
function request1() {
    return new Promise((resolve, reject) => {
        ajax('https://www.baidu.com', (res) => {
            if (res.retCode == 201) {
                // 接口请求成功时调用：这里的 res 是接口1的返回结果
                resolve('request1 success' + res);
            } else {
                // 接口请求异常时调用异常
                reject('接口1请求失败');
            }
        });
    });
}

// Promise 封装接口2
function request2() {
    return new Promise((resolve, reject) => {
        ajax('https://www.jd.com', (res) => {
            if (res.retCode == 202) {
                // 这里的 res 是接口2的返回结果
                resolve('request2 success' + res);
            } else {
                reject('接口2请求失败');
            }
        });
    });
}

// Promise 封装接口3
function request3() {
    return new Promise((resolve, reject) => {
        ajax('https://www.taobao.com', (res) => {
            if (res.retCode == 203) {
                // 这里的 res 是接口3的返回结果
                resolve('request3 success' + res);
            } else {
                reject('接口3请求失败');
            }
        });
    });
}

// 先发起request1，等resolve后再发起request2；紧接着，等 request2有了 resolve之后，再发起 request3
request1()
    .then((res1) => {
        // 接口1请求成功
        console.log(res1);
        return request2();
    })
    .then((res2) => {
        // 接口2请求成功
        console.log(res2);
        return request3();
    })
    .then((res3) => {
        // 接口3请求成功
        console.log(res3);
    })
    .catch((err) => {
        // 从 reject中获取异常结果
        console.log(err);
    });
```

这段代码很经典，你一定要多看几遍，多默写几遍。倒背如流也不过分。

## 链式调用，如何处理 reject 失败状态

### 例 1：不处理 reject

```js
getPromise('a.json')
    .then(
        (res) => {
            console.log(res);
            return getPromise('b.json'); // 继续请求 b
        },
        (err) => {
            // a 请求失败
            console.log('a: err');
        }
    )
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log('c：success');
    });
```

上面的代码中，假设 a 请求失败，那么，后面的代码会怎么走呢？

打印结果：

```
a: err
undefined
c：success
```

我们可以看到，虽然 a 请求失败，但后续的请求依然会继续执行。

为何打印结果的第二行是 undefined？这是因为，当 a 请求走到 reject 之后，我们并没有做任何处理。这就导致，代码走到第二个 `then`的时候，**其实是在执行一个空的 promise**。

### 例 2：单独处理 reject

```js
getPromise('a.json')
    .then(
        (res) => {
            console.log(res);
            return getPromise('b.json'); // 继续请求 b
        },
        (err) => {
            // a 请求失败
            console.log('a: err');
            // 【重要】即使 a 请求失败，也依然继续执行 b请求
            return getPromise('b.json');
        }
    )
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log('c：success');
    });
```

跟例 1 相比，例 2 在 reject 中增加了一行`return getPromise('b.json')`，意味着，即使 a 请求失败，也要继续执行 b。

这段代码，我们是单独处理了 a 请求失败的情况。

### 统一处理 reject

针对 a、b、c 这三个请求，不管哪个请求失败，我都希望做统一处理。这种代码要怎么写呢?我们可以在最后面写一个 catch。

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

上面的代码中，由于是统一处理多个请求的异常，所以**只要有一个请求失败了，就会马上走到 catch**，剩下的请求就不会继续执行了。比如说：

-   a 请求失败：然后会走到 catch，不执行 b 和 c

-   a 请求成功，b 请求失败：然后会走到 catch，不执行 c。

## return 的返回值

return 后面的返回值，有两种情况：

-   情况 1：返回 Promise 实例对象。返回的该实例对象会调用下一个 then。

-   情况 2：返回普通值。返回的普通值会直接传递给下一个 then，通过 then 参数中函数的参数接收该值。

我们针对上面这两种情况，详细解释一下。

### 情况 1：返回 Promise 实例对象

举例如下：

```js
getPromise('a.json')
    .then((res) => {
        // a 请求成功。从 resolve 获取正常结果：接口请求成功后，打印a接口的返回结果
        console.log(res);
        // 这里的 return，返回的是 Promise 实例对象
        return new Promise((resolve, reject) => {
            resolve('qianguyihao');
        });
    })
    .then((res) => {
        console.log(res);
    });
```

### 情况 2：返回 普通值

```js
getPromise('a.json')
    .then((res) => {
        // a 请求成功。从 resolve 获取正常结果：接口请求成功后，打印a接口的返回结果
        console.log(res);
        // 返回普通值
        return 'qianguyihao';
    })
    /*
        既然上方代码并没有返回 promise，那么，这里的 then 是谁来调用呢？
        答案是：这里会产生一个新的 默认的 promise实例，来调用这里的then，确保可以继续进行链式操作。
    */
    .then((res2) => {
        // 这里的 res2 接收的是 普通值 'qianguyihao'
        console.log(res2);
    });
```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
