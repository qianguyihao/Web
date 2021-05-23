
## Promise 的常用API分类

### Promise的实例方法

**实例方法**：我们需要先 new 一个 promise实例对象，然后通过 promise对象去调用 `then`、`catch`、`finally`方法。这几个方法就是 Promise 的实例方法。

具体来说，Promise 的自带API 提供了如下实例方法：

-   promise.then()：获取异步任务的正常结果。

-   promise.catch()：获取异步任务的异常结果。

-   promise.finaly()：异步任务无论成功与否，都会执行。


### Promise的静态方法

**静态方法**：可以直接通过大写的`Promise.xxx`调用的方法。这里的`xxx`就称之为静态方法。

具体来说，Promise 的自带API 提供了如下静态方法：

- `Promise.resolve()`

- `Promise.reject()`

- `Promsie.all()`

- `Promise.race`

前面的几篇文章，讲的都是 Promise的**实例方法**；今天这篇文章，我们来详细讲一下 Promise的**静态方法**。

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

