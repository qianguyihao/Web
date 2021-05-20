## Promise 的执行顺序

### 题目 1

代码举例：

```js
const p = new Promise((resolve, reject) => {
    console.log(1);
});

console.log(2);
```

打印结果：

```
1
2
```

我们需要注意的是：Promise 里的代码整体，其实是同步任务，会立即执行。

补充：上面的代码中，如果继续写`p.then()`，那么 `then()`里面是不会执行的。因为在定义 promise 的时候需要写 resolve，调用 promise 的时候才会执行 `then()`。

基于此，我们再来看下面这段代码：

```js
const p = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
});

console.log(2);

p.then((res) => {
    console.log(3);
});
```

打印结果：

```
1
2
3
```

name of having such things download name of giving things download