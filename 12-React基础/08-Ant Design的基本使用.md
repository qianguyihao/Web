
## andt 的介绍

Ant Design 是基于 React 实现，开发和服务于企业级后台产品。

### 支持环境

- 现代浏览器和 IE9 及以上（需要 polyfills）。

- 支持服务端渲染。

- [Electron](https://electronjs.org/)


Electron（原名为Atom Shell）是GitHub开发的一个开源框架。 它允许使用Node.js（作为后端）和Chromium（作为前端）完成桌面GUI应用程序的开发。

很多客户端软件都是基于 Electron 开发的。比如 VS Code。我们打开 VS Code 菜单栏的 “帮助 --> 切换开发人员工具”，就会看到类似于 chrome的调试工具。


### 相关链接

- 官方文档：<https://ant.design/docs/react/introduce-cn>





## andt 的使用



### 环境安装

```
npm install antd --save
```

### 代码示例

我们需要什么组件，就导入该组件即可。


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

```java
// JS打包入口文件
// 1. 导入包
import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./components/MyComponent.jsx";

// 使用 render 函数渲染 虚拟DOM
ReactDOM.render(<MyComponent></MyComponent>, document.getElementById("app"));

```



(3)MyComponent.jsx:

```java
import React from "react";

// 导入 日期选择组件
import { DatePicker } from "antd";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>在组件中引入 andt</h3>

        <DatePicker />
      </div>
    );
  }
}

```


代码运行效果：

20190217_1500.png


## AntD组件

### 表格


`pagination`属性可以用来分页。


### loading框

需求：在数据显示之前，展示 loading；在数据显示之后，关闭loading。


## 相关问题的链接




### AntD pro，跳转到详情页，携带参数

- [ant design列表页，转跳到详情页，携带参数](https://blog.csdn.net/u011613356/article/details/81505883)

- [ant design pro商品页带参数转到详情页](https://blog.csdn.net/ws995339251/article/details/86771701)


### AntD pro ，必填项前面，显示星号

- [表单必填项label上的红色*号是怎么出现的](https://github.com/ant-design/ant-design-pro/issues/2044)

### 其他问题

- 面包屑层级显示问题：<https://github.com/ant-design/ant-design-pro/issues/1584>

- from验证input框只能输入数字：<https://blog.csdn.net/zr15829039341/article/details/82745239>


