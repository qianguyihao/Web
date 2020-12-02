

## JS 有哪些数据类型

- 基本数据类型：string number bool undefined null

- 引用数据类型：object、symbol。

另外，object 包括：数组、函数、正则、日期等对象。NaN属于number类型。

注意，数据类型里，没有数组。因为数组属于object（一旦说数组、函数、正则、日期、NaN是数据类型，直接0分）。



## Promise 怎么使用

then：

```javascript
	$.ajax(...).then(成功函数, 失败函数)
```



链式 then：

```javascript
 	$.ajax(...).then(成功函数, 失败函数).then(成功函数2, 失败函数2)
```


如何自己生成 Promise 对象：

```javascript
	function xxx(){
      return new Promise(function(resolve, reject){
          setTimeout(()=>{
              resolve() 或者 reject()
          },3000)
      })
  }
  xxx().then(...)
```


## ajax手写




```javascript
	let xhr = new XMLHttpRequest();
	 xhr.open('POST', '/xxxx');
	 xhr.onreadystatechange = function(){
	     if(xhr.readyState === 4 && xhr.status === 200){
	         console.log(xhr.responseText)
	     }
	 }
	 xhr.send('a=1&b=2');

```


## 闭包是什么






```javascript
    function fn1() {
      var a = 2

      function fn2() {
        a++
        console.log(a)
      }
      return fn2;
    }

    var f = fn1();   //执行外部函数fn1，返回的是内部函数fn2
    f() // 3       //执行fn2
    f() // 4       //再次执行fn2
    console.log(a); // 会报错：a is not defined

```


参考链接：

- [JS 中的闭包是什么？](https://zhuanlan.zhihu.com/p/22486908)


## 这段代码里的 this 是什么？

1、fn() 里面的 this 就是 window

2、fn() 是 strict mode，this 就是 undefined

3、a.b.c.fn() 里面的 this 就是 a.b.c

4、new F() 里面的 this 就是新生成的实例

5、() => console.log(this) ，这个this指的是外面的 this。

参考链接：

- [this 的值到底是什么？](https://zhuanlan.zhihu.com/p/23804247)

##  什么是立即执行函数？作用是？


立即执行函数：

（1）声明一个匿名函数，（2）马上调用这个匿名函数。如下：

```javascript
		(function(a, b) {
			var name;  //声明一个局部变量
			console.log("a = " + a);
			console.log("b = " + b);
		})(123, 456);
```


**作用：**创建一个独立的作用域，防止污染全局变量。

因为我们只能通过函数的形式声明一个局部变量。当有了ES6之后，我们可以通过let来定义一个局部变量：


```javascript
	 {
	     let  name
	 }
```

上面这段代码，就相当于立即执行函数。有了let，立即执行函数就毫无意义。


参考链接：

## ES6 新特性


## async/await 语法了解吗？目的是什么？

目的：把异步代码写成同步代码的形式。


我们知道，promise是这样写的：


```javascript
    let promise = new Promise((resolve, reject) => {
        //进来之后，状态为pending
        console.log('111');  //这一行代码是同步的
        //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
        if (异步的ajax请求成功) {
            console.log('333');
            resolve();//如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fulfilled
        } else {
            reject();//如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
        }
    })
    console.log('222');

    //调用promise的then()
    promise.then(() => {
            //如果promise的状态为fulfilled，则执行这里的代码
            console.log('成功了');
        }
        , () => {
            //如果promise的状态为rejected，则执行这里的代码
            console.log('失败了');

        }
    )
```

有了await之后，可以直接替换掉then。如下：


```javascript
 function returnPromise(){
     return new Promise( function(resolve, reject){
         setTimeout(()=>{
             resolve('success')
         },3000)
     })
 }

 returnPromise().then((result)=>{
     result === 'success'
 })

 var result = await returnPromise()
 result === 'success'

```

## 如何实现深拷贝

### 方式一：JSON 来深拷贝

```javascript
    var a = {...};
    var b = JSON.parse(JSON.stringify(a)); //先将对象转成json字符串，然后再转成对象
```

缺点：JSON 不支持函数、引用、undefined、RegExp、Date……


### 方式二：递归拷贝


```javascript
	 function clone(object){
	     var object2
	     if(! (object instanceof Object) ){
	         return object
	     }else if(object instanceof Array){
	         object2 = []
	     }else if(object instanceof Function){
	         object2 = eval(object.toString())
	     }else if(object instanceof Object){
	         object2 = {}
	     }
	     你也可以把 Array Function Object 都当做 Object 来看待，参考 https://juejin.im/post/587dab348d6d810058d87a0a
	     for(let key in object){
	         object2[key] = clone(object[key])
	     }
	     return object2
	 }

```

## 如何实现数组去重

### 方式1：计数排序的逻辑（只能针对正整数）




```javascript
 var a = [4,2,5,6,3,4,5]
 var hashTab = {}
 for(let i=0; i<a.length;i++){
     if(a[i] in hashTab){
         // 什么也不做
     }else{
         hashTab[ a[i] ] = true
     }
 }
 //hashTab: {4: true, 2: true, 5: true, 6:true, 3: true}
 console.log(Object.keys(hashTab)) // ['4','2','5','6','3']

```

### 方式二：set


```javascript
	Array.from(new Set(a));
```


###方式三


## 如何用正则实现 string.trim()

```javascript
    function trim(string) {
        return string.replace(/^\s+|\s+$/g, '')
    }
```

## JS 原型是什么？



参考链接：


- [什么是 JS 原型链？](https://zhuanlan.zhihu.com/p/23090041)



## ES 6 中的 class 了解吗？


参考链接：

- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes>


## 如何实现继承

- 构造函数

- 原型链

- extends




```javascript


```










```javascript


```












```javascript


```












```javascript


```



