

## 前言

我们先来看下面这段代码：

components/MyComponent.jsx

```javascript
import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是 MyComponent 组件 默认的msg"
    };
  }

  render() {
    return (
      <div>
        <h1>绑定This并传参</h1>
        <input type="button" value="绑定this并传参" onClick={this.changeMsg} />
        <h3>{this.state.msg}</h3>
      </div>
    );
  }

  changeMsg() {
    // 注意：这里的changeMsg()只是一个普通方法。因此，在触发的时候，这里的 this 是 undefined
    console.log(this); // 打印结果：undefined
    this.setState({
      msg: "设置 msg 为新的值"
    });
  }
}


```

上面的代码中，点击按钮，执行 changeMsg() 方法，尝试修改 this.state.msg 的值。但是，这个方法执行的时候，是会报错的：

```
Uncaught TypeError: Cannot read property 'setState' of null
```

而且，打印this的结果也是 undefined。这是为啥呢？因为这里的 this 并不是指向 MyComponent 组件本身。

那如何让 changeMsg() 方法里面的 this，指向MyComponent 组件呢？办法总是有的，比如说，将changeMsg() 修改为箭头函数：

```javascript
  changeMsg = () => {
    console.log(this); // 打印结果：MyComponent 组件
    this.setState({
      msg: "设置 msg 为新的值"
    });
  };
```

那么，除了箭头函数可以 绑定 this，还有没有其他的方式呢？我们接下来讲一讲。


## 绑定 this 的方式一：bind()

代码举例：

```javascript
import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是 MyComponent 组件 默认的msg"
    };
  }

  render() {
    return (
      <div>
        <h1>绑定This并传参</h1>
        {/* bind 的作用：为前面的函数，修改函数内部的 this 指向。让 函数内部的this，指向 bind 参数列表中的 第一个参数 */}
        <input
          type="button"
          value="绑定this并传参"
          onClick={this.changeMsg1.bind(this)}
        />
        <h3>{this.state.msg}</h3>
      </div>
    );
  }

  changeMsg1() {
    this.setState({
      msg: "设置 msg 为新的值"
    });
  }
}

```


上方代码中，我们为什么用 bind()，而不是用 call/apply 呢？因为 bind() 并不会立即调用，正是我们需要的。

**注意**：bind 中的第一个参数，是用来修改 this 指向的。第一个参数**后面的所有参数**，都将作为函数的参数传递进去。

我们来看看通过 bind() 是怎么传参的。

**通过 bind() 绑定this，并给函数传参**：


```javascript
import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是 MyComponent 组件 默认的msg"
    };
  }

  render() {
    return (
      <div>
        <h1>绑定This并传参</h1>
        {/* bind 的作用：为前面的函数，修改函数内部的 this 指向。让 函数内部的this，指向 bind 参数列表中的 第一个参数 */}
        <input type="button" value="绑定this并传参" onClick={this.changeMsg1.bind(this, "千古啊", "壹号啊")} />
        <h3>{this.state.msg}</h3>
      </div>
    );
  }

  changeMsg1(arg1, arg2) {
    this.setState({
      msg: "设置 msg 为新的值" + arg1 + arg2
    });
  }
}

```


## 绑定 this 并给函数传参 的方式二：构造函数里设置 bind()

我们知道，构造函数中的 this 本身就是指向组件的实例的，所以，我们可以在这里做一些事情。

代码举例：

```javascript
import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是 MyComponent 组件 默认的msg"
    };

    // 绑定 this 并给函数传参的方式2: 在构造函数中绑定并传参
    // 注意：当一个函数调用 bind 改变了this指向后，bind 函数调用的结果，有一个【返回值】，这个值，就是被改变this指向后的函数的引用。
    // 也就是说： bind 不会修改 原函数的 this 指向，而是改变了 “函数拷贝”的this指向。
    this.changeMsg2 = this.changeMsg2.bind(this, "千古恩", "壹号恩");
  }

  render() {
    return (
      <div>
        <h1>绑定This并传参</h1>
        <input type="button" value="绑定this并传参" onClick={this.changeMsg2} />
        <h3>{this.state.msg}</h3>
      </div>
    );
  }

  changeMsg2(arg1, arg2) {
    this.setState({
      msg: "设置 msg 为新的值" + arg1 + arg2
    });
  }
}


```

上方代码中，需要注意的是：当一个函数调用 bind 改变了this指向后，bind 函数调用的结果，有一个【返回值】，这个值，就是被改变this指向后的函数的引用。也就是说： bind 不会修改 原函数的 this 指向，而是改变了 “函数拷贝”的this指向。


## 绑定 this 并给函数传参 的方式三：箭头函数【荐】

第三种方式用得最多。

代码举例：


```javascript
import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是 MyComponent 组件 默认的msg"
    };
  }

  render() {
    return (
      <div>
        <h1>绑定This并传参</h1>
        <input
          type="button"
          value="绑定this并传参"
          onClick={() => {
            this.changeMsg3("千古3", "壹号3");
          }}
        />
        <h3>{this.state.msg}</h3>
      </div>
    );
  }

  changeMsg3 = (arg1, arg2) => {
    // console.log(this);
    // 注意：这里的方式，是一个普通方法，因此，在触发的时候，这里的 this 是 undefined
    this.setState({
      msg: "绑定this并传参的方式3：" + arg1 + arg2
    });
  };
}


```





