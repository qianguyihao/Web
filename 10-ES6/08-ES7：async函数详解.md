
> 备注： async/await 的内容还有待完善。

## async/await （异步函数）概述

async/await 是在 ES7 中引入的新语法，可以更加方便地进行异步操作。

本质： Generator 的语法糖。

- async 的返回值是 Promise 实例对象。

- await 可以得到异步结果。

我们在普通的函数前面加上 async 关键字，就成了 async 函数。

## async/await 的基本用法

async 后面可以跟一个 Promise 实例对象。代码举例如下：

```javascript
    const request1 = function() {
        const promise = new Promise(resolve => {
            request('https://www.baidu.com', function(response) {
                if (response.retCode == 200) {
                    // 这里的 response 是接口1的返回结果
                    resolve('request1 success'+ response);
                } else {
                    reject('接口请求失败');
                }
            });
        });

        return promise;
    };

    async function queryData() {
        const response = await request1();
        });
        return response;
    }
    queryData().then(data => {
        console.log(data);
    });

```


## 基于 async/await 处理多次 Ajax 请求【重要】

实际开发中，现在有三个网络请求，请求2必须依赖请求1的结果，请求3必须依赖请求2的结果，如果按照往常的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。之前学过 Promise，它可以把原本的**多层嵌套调用**改进为**链式调用**。

而今天要学习的 async/await ，可以把原本的“多层嵌套调用”改成类似于同步的写法，非常优雅。

代码举例：

暂略。


## 参考链接

- [js async await 终极异步解决方案](https://www.cnblogs.com/CandyManPing/p/9384104.html)

- [理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316)

