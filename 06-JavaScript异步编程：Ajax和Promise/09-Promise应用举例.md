## 使用 Promise 封装 SetTimeout 定时器

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
