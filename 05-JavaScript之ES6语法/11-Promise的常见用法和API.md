

## 链式调用：基于 Promise 处理多次 Ajax 请求【重要】

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

-   情况 1：返回 Promise 实例对象。返回的该实例对象会调用下一个 then。

-   情况 2：返回普通值。返回的普通值会直接传递给下一个 then，通过 then 参数中函数的参数接收该值。

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

-   promise.then()：获取异步任务的正常结果。

-   promise.catch()：获取异步任务的异常结果。

-   promise.finaly()：异步任务无论成功与否，都会执行。

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

-   Promise.all()：并发处理多个异步任务，所有任务都执行成功，才能得到结果。

-   Promise.race(): 并发处理多个异步任务，只要有一个任务执行成功，就能得到结果。

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

