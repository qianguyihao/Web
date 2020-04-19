
## defaultProps 和 prop-types

### 使用 defaultProps 设置组件的默认值

React 中，使用静态的 `defaultProps` 属性，来设置组件的默认属性值。

格式举例：

```javascript
  // 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值
  static defaultProps = {
    initcount: 0 // 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）
  };

```


### 使用prop-types进行props数据类型的校验

在组件中，可以通过 `prop-types` 把外界传递过来的属性，做类型校验。如果类型不匹配，控制台会弹出告警。

注意：如果要为 传递过来的属性做类型校验，必须安装 React 提供的 第三方包，叫做 `prop-types`。

格式举例：

```javascript
  static propTypes = {
    initcount: ReactTypes.number // 使用 prop-types 包，来定义 initcount 为 number 类型
  };
```

下方代码中，在引用组件的时候，如果类型不匹配：

```javascript
// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(
  <div>
    {/* 规定，每个用户在使用 组件的时候，必须传递一个 默认的 数值，作为 组件初始化的 数据 */}
    <Counter initcount="我是string类型"></Counter>
  </div>,
  document.getElementById("app")
);

```

控制台告警如下：

20190212_2130.png


### 代码举例

我们把 `defaultProps` 和 `prop-types` 来举个例子。

（1）index.html:

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

（2）main.js:

```js
// JS打包入口文件
// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

// 导入计数器组件
import Counter from "./components/Counter.jsx";

// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(
  <div>
    {/* 规定，每个用户在使用 组件的时候，必须传递一个 默认的 数值，作为 组件初始化的 数据 */}
    <Counter initcount={0}></Counter>
  </div>,
  document.getElementById("app")
);

```


（3）/components/Counter.jsx：


```javascript
import React from "react";
// 注意： prop-types 包中职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验
import ReactTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    // 初始化组件，保存的是组件的私有数据
    this.state = {
      msg: "ok",
      count: props.initcount // 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了
    };
  }

  // 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值
  static defaultProps = {
    initcount: 0 // 如果外界没有传递 initcount，那么，自己初始化一个 数值，为0
  };

  render() {
    return (
      <div>
        <div>
          <h3>这是 Counter 计数器组件 </h3>
          <p>当前的计数是：{this.state.count}</p>
        </div>
      </div>
    );
    // 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中
  }
}

```


运行效果：

20190212_2100.png



## 事件绑定

案例：点击按钮后，计数器 +1。

### 原生js做事件绑定

代码举例：

（1）index.html:

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

（2）main.js:

```js
// JS打包入口文件
// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

// 导入计数器组件
import Counter from "./components/Counter.jsx";

// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(
  <div>
    {/* 规定，每个用户在使用 组件的时候，必须传递一个 默认的 数值，作为 组件初始化的 数据 */}
    <Counter initcount={0}></Counter>
  </div>,
  document.getElementById("app")
);

```


（3）/components/Counter.jsx：


```java
import React from "react";
// 注意： prop-types 包的职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验
import ReactTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    // 初始化组件，保存的是组件的私有数据
    this.state = {
      msg: "ok",
      count: props.initcount // 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了
    };
  }

  // 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值
  static defaultProps = {
    initcount: 0 // 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）
  };

  // 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验
  static propTypes = {
    initcount: ReactTypes.number // 使用 prop-types 包，来定义 initcount 为 number 类型
  };

  render() {
    return (
      <div>
        <div>
          <h3>这是 Counter 计数器组件 </h3>
          <input type="button" value="+1" id="btn" />
          <p>当前的计数是：{this.state.count}</p>
        </div>
      </div>
    );
    // 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中
  }

  // 当组件挂载到页面上之后，会进入这个生命周期函数，只要进入这个生命周期函数了，必然说明，页面上，已经有可见的DOM元素了
  componentDidMount() {
    // 在这个函数中，我们可以放心的去 操作 页面上你需要使用的 DOM 元素了。
    // 也就是说，如果我们想操作DOM元素，最早，只能在 componentDidMount 中进行。
    document.getElementById("btn").onclick = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
  }
}

```

### 使用 React 提供的方法，做事件绑定

代码举例：

（1）index.html和 （2）main.js 的代码不变，和上一小段中的代码一致。

（3）/components/Counter.jsx：

```java
import React from "react";
// 注意： prop-types 包的职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验
import ReactTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    // 初始化组件，保存的是组件的私有数据
    this.state = {
      msg: "ok",
      count: props.initcount // 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了
    };
  }

  // 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值
  static defaultProps = {
    initcount: 0 // 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）
  };

  // 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验
  static propTypes = {
    initcount: ReactTypes.number // 使用 prop-types 包，来定义 initcount 为 number 类型
  };

  render() {
    return (
      <div>
        <div>
          <h3>这是 Counter 计数器组件 </h3>
          {/* 这里的 this 指向的是 Counter 组件的实例  */}
          <input type="button" value="+1" id="btn" onClick={this.myMethod} />
          <p>当前的计数是：{this.state.count}</p>
        </div>
      </div>
    );
    // 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中
  }

  // 点击事件的方法定义
  myMethod = () => {
    // 修改组件的state里面的值
    this.setState({
      count: this.state.count + 1
    });
  };
}

```


## 生命周期函数：shouldComponentUpdate()

在 shouldComponentUpdate() 函数中，必须要求返回一个**布尔值**。

**需要注意的是**：如果返回的值是 false，则不会继续执行后续的生命周期函数，而是直接退回到了 运行中 的状态。因为此时，**后续的 render 函数并没有被调用**，因此页面不会被更新，但是组件的 state 状态，却被修改了。这种情况，我们也可以这样理解：如果返回值为 false，此时只是更新了 state 里面的数值，但是并没有渲染到 DOM节点上。

利用上面这个特性，我们可以来举个例子。

**举例**：实现 Counter 计数器只在偶数情况下更新。

实现思路：在 shouldComponentUpdate() 函数中，如果 state 中 的count 的值为奇数，就 return false；否则就 return true。

代码实现：（我们在上面的`Counter.jsx`代码基础之上，做添加）


```javascript
  // 判断组件是否需要更新
  shouldComponentUpdate(nextProps, nextState) {

    // 经过打印测试发现：在 shouldComponentUpdate 中，通过 this.state.count 拿到的值，是上一次的旧数据，并不是当前最新的；
    // 解决办法：通过 shouldComponentUpdate 函数的第二个参数 nextState，可以拿到 最新的 state 数据。

    console.log(this.state.count + " ---- " + nextState.count);

    // 需求： 如果 state 中的 count 值是偶数，则 更新页面；如果 count 值 是奇数，则不更新页面。最终实现的的页面效果：2，4，6，8，10，12....
    // return this.state.count % 2 === 0 ? true : false
    return nextState.count % 2 === 0 ? true : false;
  }
```

上面这部分的代码，和 render() 方法是并列的。我们需要注意里面的注释，关注 nextState 参数的用法。


## 在js代码中获取html标签的属性

比如说，如果想获取 html标签的 innerHTML 属性，做法如下：

通过原生 js 获取：

```javascript
	document.getElementById('myh3').innerHTML
```

也可以通过 React 提供的 `refs` 获取：


```javascript
	this.refs.h3.innerHTML
```

代码举例：

（3）/components/Counter.jsx：


```java
import React from "react";
// 注意： prop-types 包的职能跟单一，只提供了 一些常见的 数据类型，用于做类型校验
import ReactTypes from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    // 初始化组件，保存的是组件的私有数据
    this.state = {
      msg: "ok",
      count: props.initcount // 把 父组件传递过来的 initcount 赋值给子组件 state 中的 count值。这样的话，就把 count 值改成了可读可写的 state 属性。因此，以后就能实现“点击 按钮 ，count 值 + 1”的需求了
    };
  }

  // 在 React 中，使用静态的 defaultProps 属性，来设置组件的默认属性值
  static defaultProps = {
    initcount: 0 // 如果外界没有传递 initcount，那么，自己初始化一个数值（比如0）
  };

  // 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验
  static propTypes = {
    initcount: ReactTypes.number // 使用 prop-types 包，来定义 initcount 为 number 类型
  };

  render() {
    return (
      <div>
        <div>
          <h3>这是 Counter 计数器组件 </h3>
          {/* 这里的 this 指向的是 Counter 组件的实例  */}
          <input type="button" value="+1" id="btn" onClick={this.myMethod} />
          <h3 id="myh3" ref="mymyh3">
            当前的计数是：{this.state.count}
          </h3>
        </div>
      </div>
    );
    // 当 return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中
  }

  // 点击事件的方法定义
  myMethod = () => {
    // 修改组件的state里面的值
    this.setState({
      count: this.state.count + 1
    });
  };

  // 判断组件是否需要更新
  shouldComponentUpdate(nextProps, nextState) {
    // 需求： 如果 state 中的 count 值是偶数，则 更新页面；如果 count 值 是奇数，则不更新页面。最终实现的的页面效果：2，4，6，8，10，12....

    // 经过打印测试发现：在 shouldComponentUpdate 中，通过 this.state.count 拿到的值，是上一次的旧数据，并不是当前最新的；
    // 解决办法：通过 shouldComponentUpdate 函数的第二个参数 nextState，可以拿到 最新的 state 数据。

    console.log(this.state.count + " ---- " + nextState.count);
    // return this.state.count % 2 === 0 ? true : false
    // return nextState.count % 2 === 0 ? true : false;
    return true;
  }

  // 组件将要更新。此时尚未更新，在进入这个 生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的 DOM 元素 也是旧的
  componentWillUpdate() {
    // 经过打印分析发现：此时页面上的 DOM 节点，都是旧的，应该慎重操作，因为你可能操作的是旧DOM
    // console.log(document.getElementById('myh3').innerHTML)
    console.log(this.refs.mymyh3.innerHTML);
  }

  // 组件完成了更新。此时，state 中的数据、虚拟DOM、页面上的DOM，都是最新的，此时，你可以放心大胆的去操作页面了
  componentDidUpdate() {
    console.log(this.refs.mymyh3.innerHTML);
  }
}

```


上方代码中，componentWillUpdate() 和 componentDidUpdate() 方法里的代码，就是我们这一段要举的例子。

需要注意的是，`<h3 id="myh3" ref="mymyh3">`这部分代码中，属性名只能小写，不能大写。

工程文件：

- [2019-02-12-ReactDemo.zip](https://pan.baidu.com/s/1STNpgtmO23hE_cHIjNkBMA)


## 生命周期函数：componentWillReceiveProps()


当子组件第一次被渲染到页面上的时候，不会触发这个 函数。

只有当父组件中，通过 某些 事件，重新修改了 传递给 子组件的 props 数据之后，才会触发 componentWillReceiveProps。

代码举例：

（1）index.html:

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


（2）main.js:（引入组件）


```javascript
// JS打包入口文件
// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

import MyParent from "./components/TestReceiveProps.jsx";

// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(
  <div>
    <MyParent></MyParent>
  </div>,
  document.getElementById("app")
);

```


（3）TestReceiveProps.jsx：（组件的定义）

```javascript
import React from "react";

// 父组件
export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是父组件中的 msg 消息"
    };
  }

  render() {
    return (
      <div>
        <h1>这是父组件</h1>
        <input
          type="button"
          value="点击修改父组件的 MSG"
          onClick={this.changeMsg}
        />
        <hr />
        {/* 在父组件 Parent 中引用子组件 Son */}
        <Son pmsg={this.state.msg} />
      </div>
    );
  }

  changeMsg = () => {
    this.setState({
      msg: "修改组件的msg为新的值"
    });
  };
}

// 子组件
class Son extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>这是子组件 --- {this.props.pmsg}</h3>
      </div>
    );
  }

  // 组件将要接收外界传递过来的新的 props 属性值
  // 当子组件第一次被渲染到页面上的时候，不会触发这个 函数；
  // 只有当 父组件中，通过 某些 事件，重新修改了 传递给 子组件的 props 数据之后，才会触发 componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    // console.log('被触发了！');
    // 注意： 在 componentWillReceiveProps 被触发的时候，如果我们使用 this.props 来获取属性值，这个属性值，不是最新的，是上一次的旧属性值
    // 如果想要获取最新的属性值，需要通过 componentWillReceiveProps 的参数列表来获取
    console.log(this.props.pmsg + " ---- " + nextProps.pmsg);
  }
}

```

上方代码中，我们在组件 Parent 中引入了子组件 Son。重点注意 componentWillReceiveProps()函数 的注释部分。



