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

### 题目 2

代码举例：

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
        console.log('a接口返回的内容：' + res);
        resolve();
    });
})
    .then((res) => {
        console.log('a成功');
        new Promise((resolve, reject) => {
            ajax('b.json', (res) => {
                console.log('b接口返回的内容：' + res);
                resolve();
            });
        });
    })
    .then((res) => {
        // 因为上面在b接口的时候，并没有 return，也就是没有返回值。那么，这里的链式操作then，其实是针对一个空的 promise 对象进行then操作
        console.log('b成功');
    });
```

打印结果：

```
a接口返回的内容
a成功
b成功
b接口返回的内容
```
