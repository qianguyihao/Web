
## 前言

文本主要内容：

- Promise（比较重要）

- Symbol

- async函数

## Promise

### 概述

Promise对象: 代表了未来某个将要发生的事件(通常是一个异步操作)。


ES6中的promise对象, 可以**将异步操作以同步的流程表达出来，**很好地解决了**回调地狱**的问题（避免了层层嵌套的回调函数）。在使用ES5的时候，在多层嵌套回调时，写完的代码层次过多，很难进行维护和二次开发。


### 回调地狱的举例

假设买菜、做饭、洗碗都是异步的。

现在的流程是：买菜成功之后，才能开始做饭。做饭成功后，才能开始洗碗。这里面就涉及到了回调的嵌套。


ES6的Promise是一个构造函数, 用来生成promise实例。


### promise对象的3个状态

- 初始化状态（等待状态）：pending

- 成功状态：fullfilled

- 失败状态：rejected

### 使用promise的基本步骤

（1）创建promise对象

（2）调用promise的**回调函数**then()


代码格式如下：

```javascript
    let promise = new Promise((resolve, reject) => {
        //进来之后，状态为pending
        console.log('111');  //这一行代码是同步的
        //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
        if (异步的ajax请求成功) {
            console.log('333');
            resolve();//如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled
        } else {
            reject();//如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
        }
    })
    console.log('222');

    //调用promise的then()
    promise.then(() => {
            //如果promise的状态为fullfilled，则执行这里的代码
            console.log('成功了');
        }
        , () => {
            //如果promise的状态为rejected，则执行这里的代码
            console.log('失败了');

        }
    )
```

代码解释：

（1）当new Promise()执行之后，promise对象的状态会被初始化为`pending`，这个状态是初始化状态。`new Promise()`这行代码，括号里的内容是同步执行的。括号里定义一个function，function有两个参数：resolve和reject。如下：


- 如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled。

- 如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected

（2）promise.then()方法，括号里面有两个参数，分别代表两个函数 function1 和 function2：

- 如果promise的状态为fullfilled（意思是：如果请求成功），则执行function1里的内容

- 如果promise的状态为rejected（意思是，如果请求失败），则执行function2里的内容

另外，resolve()和reject()这两个方法，是可以给promise.then()传递参数的。如下：


```javascript
    let promise = new Promise((resolve, reject) => {
        //进来之后，状态为pending
        console.log('111');  //这行代码是同步的
        //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
        if (异步的ajax请求成功) {
            console.log('333');
            resolve('haha');//如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled
        } else {
            reject('555');//如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
        }
    })
    console.log('222');

    //调用promise的then()
    promise.then((successMsg) => {
            //如果promise的状态为fullfilled，则执行这里的代码
            console.log(successMsg, '成功了');
        }
        , (errorMsg) => {
            //如果promise的状态为rejected，则执行这里的代码
            console.log(errorMsg, '失败了');

        }
    )
```



### ajax请求的举例（涉及到嵌套的回调）

```javascript
    //定义一个请求news的方法
    function getNews(url) {
        //创建一个promise对象
        let promise = new Promise((resolve, reject) => {
            //初始化promise状态为pending
            //启动异步任务
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        let news = request.response;
                        resolve(news);
                    } else {
                        reject('请求失败了。。。');
                    }
                }
            };
            request.responseType = 'json';//设置返回的数据类型
            request.open("GET", url);//规定请求的方法，创建链接
            request.send();//发送
        })
        return promise;
    }

    getNews('http://localhost:3000/news?id=2')
        .then((news) => {
            console.log(news);
            document.write(JSON.stringify(news));
            console.log('http://localhost:3000' + news.commentsUrl);
            return getNews('http://localhost:3000' + news.commentsUrl);
        }, (error) => {
            alert(error);
        })
        .then((comments) => {
            console.log(comments);
            document.write('<br><br><br><br><br>' + JSON.stringify(comments));
        }, (error) => {
            alert(error);
        })

```






### 参考链接

- [当面试官问你Promise的时候，他究竟想听到什么？](https://zhuanlan.zhihu.com/p/29235579)







## Symbol

### 概述

背景：ES5中对象的属性名都是字符串，容易造成重名，污染环境。

**概念**：ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。


**特点：**

- Symbol属性对应的值是唯一的，解决**命名冲突问题**

- Symbol值不能与其他数据进行计算，包括同字符串拼串

- for in、for of 遍历时不会遍历Symbol属性。


### 创建Symbol属性值

Symbol是函数，但并不是构造函数。创建一个Symbol数据类型：

```javascript
    let mySymbol = Symbol();

    console.log(typeof mySymbol);  //打印结果：symbol
    console.log(mySymbol);         //打印结果：Symbol()
```


打印结果：

20180317_1134.png



下面来讲一下Symbol的使用。

### 1、将Symbol作为对象的属性值

```javascript
    let mySymbol = Symbol();

    let obj = {
        name: 'smyhvae',
        age: 26
    };

    //obj.mySymbol = 'male'; //错误：不能用 . 这个符号给对象添加 Symbol 属性。
    obj[mySymbol] = 'hello';    //正确：通过**属性选择器**给对象添加 Symbol 属性。后面的属性值随便写。

    console.log(obj);
```


上面的代码中，我们尝试给obj添加一个Symbol类型的属性值，但是添加的时候，不能采用`.`这个符号，而是应该用`属性选择器`的方式。打印结果：

20180317_1145.png

现在我们用for in尝试对上面的obj进行遍历：

```javascript
    let mySymbol = Symbol();

    let obj = {
        name: 'smyhvae',
        age: 26
    };

    obj[mySymbol] = 'hello';

    console.log(obj);

    //遍历obj
    for (let i in obj) {
        console.log(i);
    }
```

打印结果：

20180317_1817.png

从打印结果中可以看到：for in、for of 遍历时不会遍历Symbol属性。


### 创建Symbol属性值时，传参作为标识

如果我通过 Symbol()函数创建了两个值，这两个值是不一样的：

```javascript
    let mySymbol1 = Symbol();
    let mySymbol2 = Symbol();

    console.log(mySymbol1 == mySymbol2); //打印结果：false
    console.log(mySymbol1);         //打印结果：Symbol()
    console.log(mySymbol2);         //打印结果：Symbol()
```

20180317_1733.png

上面代码中，倒数第三行的打印结果也就表明了，二者的值确实是不相等的。

最后两行的打印结果却发现，二者的打印输出，肉眼看到的却相同。那该怎么区分它们呢？

既然Symbol()是函数，函数就可以传入参数，我们可以通过参数的不同来作为**标识**。比如：



```javascript
    //在括号里加入参数，来标识不同的Symbol
    let mySymbol1 = Symbol('one');
    let mySymbol2 = Symbol('two');

    console.log(mySymbol1 == mySymbol2); //打印结果：false
    console.log(mySymbol1);         //打印结果：Symbol(one)
    console.log(mySymbol2);         //打印结果：Symbol(two)。颜色为红色。
    console.log(mySymbol2.toString());//打印结果：Symbol(two)。颜色为黑色。
```

打印结果：

20180317_1739.png

### 定义常量

Symbol 可以用来定义常量：




```javascript
    const MY_NAME = Symbol('my_name');
```



### 内置的 Symbol 值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

- `Symbol.iterator`属性

对象的`Symbol.iterator`属性，指向该对象的默认遍历器方法。



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







