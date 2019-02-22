
## React路由的使用

使用React路由之前，我们需要先安装 `react-router-dom`这个包。比如：

```
yarn add react-router-dom
```

代码举例：

（1）index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <!-- 容器，通过 React 渲染得到的 虚拟DOM，会呈现到这个位置 -->
  <div id="app"></div>
</body>

</html>

```

（2）main.js：

```javascript
// JS打包入口文件
// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(<App />, document.getElementById("app"));

```

（3）app.jsx:

```java
import React from "react";

// 如果要使用 路由模块，第一步，运行 yarn add react-router-dom
// 第二步，导入 路由模块

// HashRouter 表示一个路由的跟容器，将来，所有的路由相关的东西，都要包裹在 HashRouter 里面，而且，一个网站中，只需要使用一次 HashRouter 就好了；
// Route 表示一个路由规则， 在 Route 上，有两个比较重要的属性， path   component
// Link 表示一个路由的链接 ，就好比 vue 中的 <router-link to=""></router-link>
import { HashRouter, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import About from "./components/About.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 当 使用 HashRouter 把 App 根组件的元素包裹起来之后，网站就已经启用路由了
    // 在一个 HashRouter 中，只能有唯一的一个根元素
    // 在一个网站中，只需要使用 唯一的一次 <HashRouter></HashRouter> 即可
    return (
      <HashRouter>
        <div>
          <h1>这是网站的APP根组件</h1>
          <hr />

          <Link to="/home">首页</Link>&nbsp;&nbsp;
          <Link to="/movie">电影</Link>&nbsp;&nbsp;
          <Link to="/about">关于</Link>
          <hr />

          {/* Route 创建的标签，就是路由规则，其中 path 表示要匹配的路由，component 表示要展示的组件 */}
          {/* 在 vue 中有个 router-view 的路由标签，专门用来放置，匹配到的路由组件的，但是，在 react-router 中，并没有类似于这样的标签，而是 ，直接把 Route 标签，当作的 坑（占位符） */}
          {/* Route 具有两种身份：1. 它是一个路由匹配规则； 2. 它是 一个占位符，表示将来匹配到的组件都放到这个位置 */}
          <Route path="/home" component={Home} />
          <hr />
          <Route path="/movie" component={Movie} />
          <hr />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

```

（4）ReactDemo/src/components/Home.jsx

```java
import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Home组件</div>;
  }
}

```

（5）ReactDemo/src/components/Movie.jsx

```java

import React from "react";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

  render() {
    return <div>Movie组件</div>;
  }
}

```

（6）ReactDemo/src/components/About.jsx

```java
import React from "react";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>About组件</div>;
  }
}

```

运行结果：

20190214_1000.png

## 匹配路由参数

### 模糊匹配与精准匹配

我们在上面的代码中，进一步修改。假设 Movie 这个组件修改成这种路由匹配方式：

```html
<Link to="/movie/top250">电影</Link>

<Route path="/movie" component={Movie} />

```

上面这种匹配方式，也是可以成功匹配到的。这是为啥呢？

这是因为：默认情况下，路由中的匹配规则，是**模糊匹配**的。如果 路由可以部分匹配成功，就会展示这个路由对应的组件。

如果想让路由规则，进行**精确匹配**，可以为Route添加 `exact` 属性。比如下面这种写法，因为是开启了精准匹配，所以是匹配不到的：（无法匹配）

```html
<Link to="/movie/top250/20">电影</Link>

<Route path="/movie/" component={Movie} exact/>
```


另外，如果要匹配参数，可以在匹配规则中，使用 `:` 修饰符，表示这个位置匹配到的是参数。举例如下：（匹配正常）

```html
<Link to="/movie/top250/20">电影</Link>&nbsp;&nbsp;

<Route path="/movie/:type/:id" component={Movie} exact/>
```


### 获取路由参数

继续修改上面的代码。如果我想在 Movie 组件中显示路由中的参数，怎么做呢？

我们可以通过 `props.match.params`获取路由中的参数。举例做法如下：

app.jsx中的匹配规则如下：


```html
<Link to="/movie/top100/5">电影</Link>&nbsp;&nbsp;

<Route path="/movie/:type/:id" component={Movie} exact/>
```


Moivie 组件的写法如下：

```java
import React from "react";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeParams: props.match.params // 把路由中的参数保存到 state 中
    };
  }

  render() {
    console.log(this);
    // 如果想要从路由规则中，提取匹配到的参数，进行使用，可以使用 this.props.match.params.*** 来访问
    return (
      <div>
        {/* Movie --- {this.props.match.params.type} --- {this.props.match.params.id} */}
        Movie --- {this.state.routeParams.type} --- {this.state.routeParams.id}
      </div>
    );
  }
}


```

打印结果如下：

20190214_1030.png


工程文件：

2019-02-14-ReactDemo.zip

## 参考链接



