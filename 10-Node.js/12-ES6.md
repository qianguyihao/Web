

## 前言

ECMAScript 是 JS 的语言标准。而 ES6 是新的 JS 语法标准。


### 发展历史

20180303_1633.png

- 2015年6月，ES6正式发布。


### ES6 的其他优势

- 使用 babel 语法转换器，支持低端浏览器

- 流行的库基本都是基于 ES6 构建。 React 默认使用 ES6 新源发开发。


## ES6 的常用语法

### ES6语法概览

- 块级作用域、字符串

- 对象扩展、解构

- 类、模块化等。


### 作用域：let 和 const

- 用 `let`定义变量 ，替代 var

- 用const 定义常量（定义后，不可修改）

- 作用域和 {}


举例：

```javascript
    let a1 = 'haha';

    const name = `smyhvae`;
```


### 模板字符串

我们以前让字符串进行拼接的时候，是这样做的：（传统写法的字符串拼接）

```javascript
    var name = 'smyhvae';
    var age = '26';
    console.log('name:'+name+',age:'+age);   //传统写法
```


这种写法，比较繁琐，而且容易出错。

现在有了 ES6 语法，字符串拼接可以这样写：

```javascript
    var name = 'smyhvae';
    var age = '26';

    console.log('name:'+name+',age:'+age);   //传统写法

    console.log(`name:${name},age:${age}`);  //ES6 写法

```

注意，上方代码中，倒数第二行用的是单引号，最后一行用的是反引号（在tab键的上方）。


### 函数扩展

ES6 中函数的用法：

- 参数默认值

- 箭头函数

- 展开运算符



定义和调用函数：（传统写法）

```javascript
    function fn1(name) {
        console.log(name);
    }

    fn1('smyhvae');
```


定义和调用函数：（ES6写法）

```javascript
    var fn2 = (name)=>{
        console.log(name);
    }

    fn2('smyhvae');
```


上面两端代码，执行的结果是一样的。

当然，也可以给上面这个函数的参数加一个默认值：

```javascript
    var fn2 = (name='enen')=>{
        console.log(name);
    }

    fn2();        //参数用默认值 enen
    fn2('smyhvae');
```



比如说，1秒后执行一段代码，可以用箭头函数：

```javascript
    setTimeout(()=>{
        console.log('something');
    },1000);
```

如果函数体只有一条 return 语句，那么大括号可以省略：

```javascript
    const myDouble = x=>x*2;
    console.log(myDouble(5));  //打印结果为10

```


箭头函数的好处：

- 简写代码

- 保持 this 的作用域



##