## 	Node.js 中的util.promisify()方法

Node.js 中有一个内置的方法 util.promisify()，它可以很方便地将 ES5回调函数写法的方法，转成Promise写法的方法。就不需要我们手动封装Promise了。

代码举例：

```js
// 引入 util 模块
const util = require('util');
// 引入 fs 模块
const fs = require('fs');

// 返回一个新的函数，这个函数是一个 Promise 对象
const readFilePromise = util.promisify(fs.readFile);
readFilePromise('readme.txt').then(res => {
  console.log('res:', res.toString());
});
```

## 使用 Promise 封装定时器，实现延迟函数

代码举例：

```js
// 方法：XX秒后执行指定的代码。这个方法，就是在宏任务（定时器）的执行过程中，创建了一个微任务（resolve）
function delaySeconds(delay = 1000) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

delaySeconds(2000)
    .then(() => {
        console.log('qiangu');
        return delaySeconds(3000);
    })
    .then(() => {
        console.log('yihao');
    });
```

打印结果：

```js
// 2秒后打印：
qiangu

// 再等3秒后打印：
yihao
```



## 请求重试

参考链接：

- 网络请求失败自动重试 js 重试机制：https://blog.csdn.net/Seasons_in_your_sun/article/details/126468481





