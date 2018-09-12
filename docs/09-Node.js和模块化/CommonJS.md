


## 全局对象

### global

类似于客户端 JavaScript 运行环境中的 window。


## process

用于获取当前的 Node 进程信息，一般用于获取环境变量之类的信息。

### console

Node 中内置的 console 模块，提供操作控制台的输入输出功能，常见使用方式与客户端类似。

## 全局函数

- setInterval(callback, millisecond)

- clearInterval(timer)

- setTimeout(callback, millisecond)

- clearTimeout(timer)

- Buffer：Class
	- 用于操作二进制数据
	- 以后介绍


## Node 调试

### 最简单的调试

最方便也是最简单的调试：console.log()


### Node 原生的调试

网址：<https://nodejs.org/api/debugger.html>

### 第三方模块提供的调试工具

```
$ npm install node-inspector –g   //方式一


$ npm install devtool -g          //方式二
```

### 开发工具的调试

- Visual Studio Code

- WebStorm

## 模块化结构

Node 实现 CommonJS 规范，所以可以使用模块化的方式组织代码结构。

- Node 采用的模块化结构是按照 CommonJS 规范。

- 模块与文件是一一对应关系，即加载一个模块，实际上就是加载对应的一个模块文件。

### CommonJS 规范

CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构。

参考链接：

- <http://wiki.commonjs.org/wiki/CommonJS>

### 常用内置模块

- `path`：处理文件路径。

- `fs`：操作（CRUD）文件系统。

- `child_process`：新建子进程。

- `util`：提供一系列实用小工具。

- `http`：提供 HTTP 服务器功能。

- `url`：用于解析 URL。

- `querystring`：解析 URL 中的查询字符串。

- `crypto`：提供加密和解密功能。


总结：更多内容可以参考 api文档：<https://nodejs.org/api/>


## 文件系统操作

### 相关模块

- fs：基础的文件操作 API

- path：提供和路径相关的操作 API

- readline：用于读取大文本文件，一行一行读

- fs-extra（第三方）：<https://www.npmjs.com/package/fs-extra>






