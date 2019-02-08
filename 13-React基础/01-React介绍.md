


## React 介绍

### React 是什么

- Facebook 开源的一个JS库。

- 一个用于动态构建用户界面的JS库。

### React 的特点

- Declarative（声明式编码）

- Component-Based（组件化编码）

- Learn Once, Write Anywhere（支持客户端、服务器端渲染）

- 高效

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



## Hello World


### 引入相关的js库

为了通过 React 写一个Hello World程序，我们需要先引入以下 JS 库：

- react.js: React的核心库

- react-dom.js: 提供操作DOM的扩展库

- babel.min.js: 解析JSX语法代码转为纯JS语法代码的库



如果是本地引入的话，可以这样写：

```html
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

```


如果是通过CDN的方式引入的话，可以使用网站 <https://www.bootcdn.cn/> 提供的CDN链接。

### 代码举例

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
      var containDiv = document.getElementById("demo");

      //1、创建虚拟DOM对象
      var vDom = <div>Hello, React!</div>; // 不是字符串, 不能加引号
      //2、渲染虚拟DOM对象（将虚拟DOM对象渲染到页面元素中）
      ReactDOM.render(vDom, myContainer); // 参数1：虚拟DOM对象；参数2：页面中的容器
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
	ReactDOM.render(虚拟DOM对象, container);
```





```javascript

```



```javascript

```



```javascript

```




```javascript

```




```javascript

```




```javascript

```









