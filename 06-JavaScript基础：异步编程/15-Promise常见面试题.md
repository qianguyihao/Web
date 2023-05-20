## 这些代码的打印结果是什么？

想要考察一个人对 Promise 的掌握程度，就让他看看这些代码的打印结果是什么。

**例1**：resolve()多次

```js
const promise = new Promise((resolve, reject) => {
  resolve();
  resolve();
});

promise
  .then(res => {
    console.log('成功的回调');
  })
  .catch(err => {
    console.log('失败的回调');
  });
```

打印结果：

```
成功的回调
```

