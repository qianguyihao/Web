## Promise 的执行顺序

题目 1：

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

我们需要注意的是：Promise里的代码整体，其实是同步任务，会立即执行。