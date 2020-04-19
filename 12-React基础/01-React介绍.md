

## 虚拟DOM和diff算法

> 在学习 React 之前，我们需要先了解两个概念：虚拟DOM、diff算法。


### 虚拟DOM

**问题描述**：

假设我们的数据发生一点点的变化，也会被强制重建整颗DOM树，这么做，会涉及到很多元素的重绘和重排，导致性能浪费严重。

**解决上述问题的思路**：

实现按需更新页面上的元素即可。也就是说，把 需要修改的元素，所对应的 DOM 元素重新构建；其他没有变化的数据，所对应的 DOM 节点不需要被强制更新。

**具体实现方案**：（如何按需更新页面上的元素）

只需要拿到 页面更新前的 内存中的DOM树，同时再拿到 页面更新前的 新渲染出来的 内存DOM树；然后，对比这两颗新旧DOM树，找到那些需要被重新创建和修改的元素即可。这样就能实现 DOM 的**按需更新**。


**如何拿到这两棵DOM树**：（即：如何从浏览器的内存住哪个获取到 浏览器私有的那两颗DOM树？）

如果要拿到浏览器私有的DOM树，那我们必须调用浏览器提供的相关JS的API才行。但是问题来了，浏览器并没有提供这样的API。既然如此，那我们可以自己**模拟**这两颗 新旧DOM树。

**如何自己模拟这两颗 新旧DOM树**：（即：如何自己模拟一个DOM节点？）

这里涉及到手动模拟DOM树的原理：使用 JS 创建一个对象，用和这个对象来模拟每一个DOM节点；然后在每个DOM节点中，又提供了类似于 children 这样的属性来描述当前DOM的子节点。这样的话，当DOM节点形成了嵌套关系，就模拟出了一颗 DOM 树。


**总结**：

- 虚拟DOM的**本质**：使用 JS 对象模拟DOM树。

- 虚拟DOM的**目的**：为了实现 DOM 节点的高效更新。

React内部已经帮我们实现了虚拟DOM，初学者掌握如何调用即可。


### diff算法

怎么实现 两颗新旧DOM树的对比 呢？这里就涉及到了 diff算法。常见的 diff算法如下：

 - tree diff：新旧DOM树，逐层对比的方式，就叫做 tree diff。每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素。

 - component diff：在对比每一层的时候，组件之间的对比，叫做 component diff。当对比组件的时候，如果两个组件的类型相同，则暂时认为这个组件不需要被更新，如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置。

 - element diff：在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做 element diff。

 - key：key这个属性，可以把 页面上的 DOM节点 和 虚拟DOM中的对象，做一层关联关系。


## React 介绍

### React 是什么

- Facebook 开源的一个JS库。

- 一个用于动态构建用户界面的JS库。

### React 的特点

- Declarative（声明式编码）

- Component-Based（组件化编码）

- Learn Once, Write Anywhere（支持客户端、服务器端渲染）

- 高效的DOM Diff算法，最小化页面重绘

- 单向数据流

### React高效的原因

- 虚拟(virtual)DOM，不总是直接操作DOM

- 高效的DOM Diff算法，最小化页面重绘（即“局部渲染”）。

虚拟DOM指的是：在真实DOM的上一层**映射**一层虚拟DOM。我们操作的是映射关系，而不是真实的DOM。假设页面的样式做了修改（比如新增了一个标签），此时修改的是虚拟DOM的样式，真实的DOM并未发生变化。那什么时候，真实的DOM会发生变化呢？ 当我把所有的内容操作完之后，转化为真实的DOM，此时要打包统一的渲染页面，于是真实的DOM发生变化，然后渲染一次。 这样做的话，可以减少页面的渲染次数。

### 相关网址

- 官网：<https://reactjs.org/>

- GitHub 地址：<https://github.com/facebook/react>  截至2019-02-08，React项目已经有 121k 的star。

官网截图：

20190208_1057.png

上方截图中，有一个特性是“Learn Once, Write Anywhere”。这里的 “Anywhere” 其实指的是两个地方：一个是浏览器端，一个是服务器端。后者指的是，**React支持在服务器端渲染页面**。

### 生态介绍

- Vue生态：Vue + Vue-Router + Vuex + Axios + Babel + Webpack

- React生态：React + React-Router + Redux + Axios + Babel + Webpack


## React 模块化、组件化

### 模块

- 理解：向外提供特定功能的js程序, 一般就是一个js文件

- 理由：js代码更多更复杂

- 作用：简化js的编写，阅读，提高运行效率

### 组件

- 理解：用来实现特定功能效果的代码集合(html/css/js)

- 理由：一个界面的功能更复杂

- 作用：复用，简化项目编码，提高运行效率

### 模块化与组件化

- 模块化：当应用的js都以模块来编写的, 这个应用就是一个模块化的应用

- 组件化：当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用


### 面相对象与面向过程的区别

面向对象编程：

- 重点是对象

- 更加关心的是干活的人

面向过程编程：

- 更加关心的是干活的过程

- 谁去干活儿不关心


## React 环境搭建：写第一个Hello World

### react.js 和 react-dom.js

为了通过 React 写一个Hello World程序，我们需要先安装几个包：

- react.js: React的核心库。这个包，是专门用来创建React组件、组件生命周期等。

- react-dom.js: 操作DOM的扩展库。这个包，主要封装了和 DOM 操作相关的包（比如，把组件渲染到页面上）。

- babel.min.js: 将 JSX语法 解析为 纯JS语法代码。

### 方式一：本地引入相关的js库

入门的时候，我们建议采取方式一。

如果是本地引入的话，可以这样写：

```html
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

```

如果是通过CDN的方式引入的话，可以使用网站 <https://www.bootcdn.cn/> 提供的CDN链接。

**完整代码举例**：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="myContainer"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">

      //页面中的真实容器元素
      var containDiv = document.getElementById("myContainer");

      //1、创建虚拟DOM对象
      var vDom = <div>Hello, React!</div>; // 不是字符串, 不能加引号

      //2、渲染虚拟DOM对象（将虚拟DOM对象渲染到页面元素中）
      ReactDOM.render(vDom, containDiv); // 参数1：虚拟DOM对象；参数2：页面中的容器
    </script>
  </body>
</html>

```

代码运行后，页面上的DOM结构如下：

```html
<div id="myContainer">
	<div>Hello, React!</div>
</div>
```


**代码解释**：

render的中文含义是“渲染”。render 方法的语法如下：

```javascript
	ReactDOM.render(要渲染的虚拟DOM对象, 容器 container：要渲染到页面上的哪个位置);
```

【工程文件下载】

- [2019-02-08-ReactDemo.zip](https://download.csdn.net/download/smyhvae/10951736)


### 方式二：npm install

实际开发中，我们一般都是通过 npm install 的方式来安装 react 相关的包。

首先，新建一个空的文件夹`2019-02-08-ReactDemo`，作为项目的根目录。然后在根目录下执行如下命令，进行**项目初始化**：

```
  npm init --yes
```

上方命令执行完成后，会生成`package.json`文件。

然后继续执行如下命令，安装 react.js 和 react-dom.js 这两个包：

```
  npm i react react-dom
```

完整代码举例：

index.html:

```

```


main.js:

```javascript
// JS打包入口文件

import React from 'react'
import ReactDOM from 'react-dom'

// 在 react 中，如要要创建 DOM 元素，只能使用 React 提供的 JS API 来创建，不能【直接】像 Vue 中那样，手写 HTML 元素
// React.createElement() 方法，用于创建 虚拟DOM 对象，它接收 3个及以上的参数
//     参数1： 是个字符串类型的参数，表示要创建的元素类型
//     参数2： 是一个属性对象，表示 创建的这个元素上，有哪些属性
//     参数3： 从第三个参数的位置开始，后面可以放好多的虚拟DOM对象，这写参数，表示当前元素的子节点

// <div title="this is a div" id="mydiv">这是一个div</div>
var myDiv = React.createElement('div', { title: 'this is a div', id: 'mydiv' }, '这是一个div');

// ReactDOM.render('要渲染的虚拟DOM元素', '要渲染到页面上的哪个位置');
ReactDOM.render(myDiv, document.getElementById('app'));
```


上方代码中，createElement()方法介绍如下：

```javascript
  React.createElement(需要创建的元素类型, 有哪些属性, 子节点)
```


【工程文件下载】

- [2019-02-09-ReactDemo.zip](https://download.csdn.net/download/smyhvae/10951196)


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20160401_01.jpg)








