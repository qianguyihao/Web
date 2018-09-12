


## 关于 Webpack 

### 什么是 Webpack

- Webpack是一个模块打包器(bundler)。

- 在 Webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。

- 它将根据模块的依赖关系进行静态分析，生成对应的静态资源。

Webpack有四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)。


### 配置文件(默认)

webpack.config.js : 是一个node模块，返回一个 json 格式的配置信息对象。

我们将在这个文件中，配置上面所描述的四个部分。


### Loader

- Webpack 本身只能加载JS/JSON模块（模块即文件），如果要加载其他类型的文件(模块)，就需要使用对应的loader 进行转换/加载

- Loader 本身也是运行在 node.js 环境中的 JavaScript 模块（JS库）

- 它本身是一个函数，接受源文件作为参数，返回转换的结果

- loader 一般以`xxx-loader`的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。


### 插件（plugins）


插件件可以完成一些loader不能完成的功能。插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。

下面列举几个常见的插件：

- CleanWebpackPlugin: 自动清除指定文件夹资源

- HtmlWebpackPlugin: 自动生成HTML文件并

- UglifyJSPlugin: 压缩js文件

官网所列出的插件：<https://doc.webpack-china.org/plugins>


### 相关链接

- Webpack官网：<https://webpack.js.org/>

- 中文文档：<https://doc.webpack-china.org/concepts/>

- GitHub地址：<https://github.com/webpack/webpack>


## 初始化项目

（1）在工程目录下，新建文件`package.json`。内容如下：

```json   
{
    "name": "webpackdemo",
    "version": "1.0.0"
}
```


（2）安装 Webpack：

```bash
# 全局安装
npm install webpack -g

# 局部安装
npm install webpack --save-dev
```

为什么要先全局安装，再局部安装呢？这是考虑到兼容性的问题。比如说，当前项目要求 Webpack 版本是3.10.0，那我就必须要在局部进行安装。命令如下：

```bash
# 局部安装 Webpack 的 3.10.0版本
npm i webpack@^3.10.0 --save-dev
```











### 文本的开发环境






## Webpack4 的升级说明

如果Webpack要更新到4，会导致其他的内容也会变化：

- 版本变化：loader、plugin也要相应升级。

- 配置变化：增加了 module 的配置项，用来区分开发环境和生产环境。

- 插件变化：比如，webpack 3中的`CommonsChunkPlugin`在4中取消了，而是通过...去配置。


参考链接：

- [webpack4升级指北](https://www.imooc.com/article/23555)









