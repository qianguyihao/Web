

## 单项数据绑定


在 Vue 中，可以通过 v-model 指令来实现双向数据绑定。但是，在 React 中并没有指令的概念，而且 **React 默认不支持 双向数据绑定**。

React 只支持，把数据从 state 上传输到 页面，但是，无法自动实现数据从 页面 传输到 state 中 进行保存。

React中，只支持单项数据绑定，不支持双向数据绑定。不信的话，我们来看下面这个例子：


```java
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
        <h3>呵呵哒</h3>
        <input type="text" value={this.state.msg} />
      </div>
    );
  }

}


```

上方代码中，我们尝试在 input文本框中读取 state.msg 的值，运行结果中，却弹出了警告：

20190213_2000.png

```
Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
```

## 通过onChange方法，实现双向数据绑定

如果针对 表单元素做 value 属性绑定，那么，必须同时为 表单元素 绑定 readOnly, 或者提供 onChange 事件：

- 如果是绑定readOnly，表示这个元素只读，不能被修改。此时，控制台就不会弹出警告了。

- 如果是绑定onChange，表示这个元素的值可以被修改，但是，要自己定义修改的逻辑。

绑定readOnly的举例如下：（表示value中的数据是只读的）

```javascript
	<input type="text" value={this.state.msg} readOnly />
```

**绑定 onChange 的举例如下**：（通过onChange方法，实现双向数据绑定）

(1)index.html:

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

```javascript
// JS打包入口文件
// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

// 导入组件
import MyComponent from "./components/MyComponent.jsx";

// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(
  <div>
    <MyComponent></MyComponent>
  </div>,
  document.getElementById("app")
);

```

（3）components/MyComponent.jsx

```javascript
import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "这是组件 默认的msg"
    };
  }

  render() {
    return (
      <div>
        <h1>呵呵哒</h1>
        <input
          type="text" value={this.state.msg} onChange={this.txtChanged} ref="txt" />
        <h3>{"实时显示msg中的内容：" + this.state.msg}</h3>
      </div>
    );
  }

  // 为 文本框 绑定 txtChanged 事件
  txtChanged = (e) => {
    // 获取 <input> 文本框中 文本的3种方式：
    //  方式一：使用 document.getElementById

    //  方式二：使用 ref
    // console.log(this.refs.txt.value);

    //  方式三：使用 事件对象的 参数 e 来拿
    // 此时，e.target 就表示触发 这个事件的 事件源对象，得到的是一个原生的JS DOM 对象。在这个案例里，e.target就是指文本框
    // console.log(e.target.value);
    this.setState({
      msg: e.target.value
    });
  };
}

```


工程文件：

- [2019-02-13-ReactDemo.zip]()











