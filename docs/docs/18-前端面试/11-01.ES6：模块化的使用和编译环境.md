

## 前言


### ES6的主要内容

- 模块化的使用和编译环境

- Class与JS构造函数的区别

- Promise的用法

- ES6其他常用功能

本文来讲“模块化的使用和编译环境”。

### 面试常见问题

- ES6 模块化如何使用，开发环境如何打包

- Class 和普通构造函数有何区别

- Promise 的基本使用和原理

- 总结一下 ES6 其他常用功能


### ES6的现状

- 开发环境已经普及使用

- 浏览器环境却支持不好（需要开发环境编译）

- 内容很多，重点了解常用语法

- 面试：开发环境的使用 + 重点语法的掌握


##  模块化的基本语法


（1）util1.js：

```javascript
export default var a = 100;

export function foo {
  console.log('util1-foo');
}
```

`export default`命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出。

有了默认输出之后，其他模块加载该模块时，import命令可以为该匿名变量/函数，起**任意的名字**。

上面的代码中，默认输出是一个变量。当然，我们也可以换成**默认输出一个匿名函数**：

```javascript
export default function() {
  console.log('util1-function');
}
```


（2）util2.js：

```javascript

export var myUtil2 = 'this is util2';

export function fn1() {
  console.log('util2-fn1');
}

export function fn2() {
  console.log('util2-fn2');
}
```


上方代码中，我把一个变量和两个函数作为了导出。


（3）index.js：

