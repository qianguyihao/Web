


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

