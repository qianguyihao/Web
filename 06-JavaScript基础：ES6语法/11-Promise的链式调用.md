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
            success(xmlhttp.responseText);
        } else {
            fail(new Error('接口请求失败'));
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
            success(xmlhttp.responseText);
        } else {
            fail(new Error('接口请求失败'));
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

但是，你可能会奇怪，上面的代码，怎么这么多？而且有不少重复。这里只是采用了一种笨拙的方式来写，为的是方便大家理解 promise 的执行过程。我们其实可以对 promise 的链式调用进行进一步封装。

怎么个封装法呢？上面的代码中，每次在 return 一个 promise 的时候，只是 url 地址不一样，其他的代码是一样的。所以我们可以把重复的代码封装成函数。

### Promise 链式调用（封装写法）

针对同一个接口的多次嵌套调用，采用 promise 封装后的写法如下：

```js
// 定义 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success(xmlhttp.responseText);
        } else {
            fail(new Error('接口请求失败'));
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

怎么样？上面代码中，是不是非常简洁？而且可读性很强。

代码写到这里，我们还可以再继续优化一下。细心的你可以发现，我们在依次请求三个接口的时候，里面针对 resolve 和 reject 的处理时机是一样的。

但是，真正在实战中，我们在调不用的接口时，要处理的 resolve 和 reject 的时机往往是不同的。所以分开封装 不同的 Promise 实例。实战中的代码，应该是像下面这样写。

### Promise 链式调用（封装写法，多个接口）

针对多个不同接口的嵌套调用，采用 promise 封装后的写法如下：

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success(xmlhttp.responseText);
        } else {
            fail(new Error('接口请求失败'));
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


