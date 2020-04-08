
## async函数（异步函数）

### 概述

> async 函数是在 ES2017 引入的。

概念：真正意义上去解决异步回调的问题，同步流程表达异步操作。

本质： Generator 的语法糖。

async比之前的 Promise、Generator要好用一些。


语法：

```javascript
    async function foo() {
        await 异步操作;
        await 异步操作；
    }
```

我们在普通的函数前面加上 async 关键字，就成了 async 函数。


###  async、Promise、Generator的对比（async的特点）

1、不需要像Generator去调用next方法，遇到await等待，当前的异步操作完成就往下执行。

2、async返回的总是Promise对象，可以用then方法进行下一步操作。

3、async取代Generator函数的星号*，await取代Generator的yield。

4、语意上更为明确，使用简单，经临床验证，暂时没有任何副作用。


