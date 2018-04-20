


## MVVM模式

20180420_2150.png

- Model：负责数据存储

- View：负责页面展示

- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示

## 前端的各种框架

### Vue、React、AngularJS

AngularJS 提供更多的是一套解决方案，更像是一个生态。

 Vue 和 React目前都是用了 Virtual Dom。

### Vue 和 React 的对比

![](http://img.smyhvae.com/20180302_1623.png)


### Vue 和 React 的相同点

![](http://img.smyhvae.com/20180302_1636.png)

国内的很多开发者喜欢 Vue；国外的开发者更喜欢 React，适合做大型网站。

### 什么是虚拟 DOM

传统的web开发，是利用 jQuery操作DOM，这是非常耗资源的。

我们可以在 JS 的内存里构建类似于DOM的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到html里去。这就形成了虚拟 DOM。


Vue1.0没有虚拟DOM，Vue2.0改成了基于虚拟DOM。


### 前端框架回顾

![](http://img.smyhvae.com/20180302_1645.png)


![](http://img.smyhvae.com/20180302_1651.png)


![](http://img.smyhvae.com/20180302_1652.png)



Vue框架中，没有控制器。


## Vue 框架

### 发展历史

![](http://img.smyhvae.com/20180302_1655.png)

2016.10发布2.0版本。

### 相关网址

- [中文官网](https://cn.vuejs.org/)


- [vuejs官方论坛](https://forum.vuejs.org/)

- GitHub地址：<https://github.com/vuejs/vue>


- Vue1.0 在线文档：<http://v1-cn.vuejs.org/guide/>

- Vue2.x 在线文档：<https://cn.vuejs.org/v2/guide/>

- Vue1下载地址：http://v1-cn.vuejs.org/js/vue.js

- Vue2下载地址：https://unpkg.com/vue@2.2.1/dist/vue.js





![](http://img.smyhvae.com/20180302_1658.png)

上方截图的时间：2018-03-02。



### 介绍

 Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。

渐进式框架图：


![](http://img.smyhvae.com/20180302_1701.png)


- 声明式渲染：当我们在页面里，通过 new 一个 view 的事例时，


### Vue 的特点

- 模板渲染

- 组件化/模块化

- 扩展功能：路由、ajax、数据流等。

![](http://img.smyhvae.com/20180302_1750.png)

![](http://img.smyhvae.com/20180302_1751.png)

![](http://img.smyhvae.com/20180302_1752.png)

![](http://img.smyhvae.com/20180302_1753.png)

## Vue 的环境搭建

> 我们首先要安装好 NVM、Node.js环境，然后再来做下面的操作。

### 常见的插件

- Webpack：代码模块化构建打包工具。

- Gulp：基于流的自动化构建工具。

- Grunt ：JS 世界的构建工具。

- Babel：使用最新的 规范来编写 js。

- Vue：构建数据驱动的Web界面的渐进式框架

- Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

以上这些包，都可以通过 NPM 这个包管理工具来安装。

### 引用 Vue.js 文件

1、**方式一**：（引用的方式）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
</head>
<body>


</body>
</html>
```


2、方式二：（下载 vue.js 文件）

去网站<https://cdn.jsdelivr.net/npm/vue/>下载 vue.js 文件，直接放到工程文件里，然后引用。

3、方式三：（npm安装vue）

```bash
# 最新稳定版
$ npm install vue
```

如果网络不稳定，可以采用下面的方式安装：

```
$ cnpm i vue --save
```

我们可以看到 vue.js 的安装目录：

![](http://img.smyhvae.com/20180302_2252.png)

![](http://img.smyhvae.com/20180302_2255.png)

此时在 src 中需要引入的路径是：


![](http://img.smyhvae.com/20180302_2106.png)

上图中的引入方式，不是很理解。

### 安装 vue-cli（命令行工具）

Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

安装命令如下：

```bash
# 全局安装 vue-cli
$ npm install -g vue-cli
```

以下代码来自官网，仅供阅读：

```
# 创建一个基于 webpack 模板的简单的新项目【荐】
$ vue init webpack-simple demo01

# 创建一个基于 webpack 模板的完整的新项目
$ vue init webpack demo02


# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```

## 利用 vue-cli 新建一个空的项目

### 构建一个 simple 项目

我们利用 vue-cli 来构建一个 SPA 应用：

（1）首先执行：

```
$ vue init webpack-simple VueDemo01

```

然后根据提示输入 project name（**要求小写**），description 默认即可：


![](http://img.smyhvae.com/20180303_0850.png)


上方截图中，`npm install `指的是下载各种依赖包，`npm run dev`指的是打开发包，`npm run build`指的是打生产包。

我们可以看到这个项目的结构：

![](http://img.smyhvae.com/20180303_0851.png)

- src：项目源码

- .babelrc：ES6编译插件的配置

- index.html：单页面的入口


（2）Mac环境，安装各种依赖包，执行如下命令：

```
cd /Users/smyhvae/Dropbox/workspace/Mac/VueDemo01

cnpm install
```

备注：我们在 GitHub上下载的任何Vue有关的项目，第一步都是要首先执行 cnpm install。


（3）让项目跑起来：

```
cnpm run dev
```

这个空的项目就可以在浏览器上跑起来：


![](http://img.smyhvae.com/20180303_0853.png)

如果是在webstorm中开发这个项目，会有点卡，因为依赖的包比较多，重启软件即可。

### 构建一个 非 simple 项目


（1）构建一个空的项目，首先执行：

```
$ vue init webpack VueDemo02

```

然后根据提示依次输入：

-  project name：**要求小写**。

- description：默认即可。

- vue-router：需要。

- ESlint：语法检查，初学者可以暂时不需要。

- 单元测试：暂时也不需要。

- e2e test：不需要。



（2）Mac环境，安装各种依赖包，执行如下命令：

```
cd /Users/smyhvae/Dropbox/workspace/Mac/VueDemo02

cnpm install
```

备注：我们在 GitHub上下载的任何Vue有关的项目并没有包含 `node_modules`，第一步都是要首先执行 cnpm install，把 `node_modules`里的包下载下来。我们发给同事的工程文件，建议也不要包含 `node_modules`。



（3）让项目跑起来：

```
cnpm run dev
```

这个空的项目就可以在浏览器上跑起来。

![](http://img.smyhvae.com/20180303_0915.png)

![](http://img.smyhvae.com/20180303_0913.png)



## vue 项目结构分析

![](http://img.smyhvae.com/20180303_1010.png)

- buid：打包配置的文件夹

- config：webpack对应的配置

- src：开发项目的源码
	- App.vue：入口组件。`.vue`文件都是组件。
	- main.js：项目入口文件。

- static：存放静态资源

- `.babelrc`：解析ES6的配置文件

- `.editorcofnig`：编辑器的配置

- `.postcssrc.js`：html添加前缀的配置

- `index.html`：单页面的入口。通过 webpack打包后，会把 src 源码进行编译，插入到这个 html 里面来。


- `package.json`：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等。




### 图片的base64编码

默认是10k以下，建议都通过 base64编码。在配置文件`webpack.base.conf.js`中进行修改：

```
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
```

## Vue 基础语法

![](http://img.smyhvae.com/20180303_1130.png)

![](http://img.smyhvae.com/20180303_1135.png)

![](http://img.smyhvae.com/20180303_1145.png)

![](http://img.smyhvae.com/20180303_1146.png)

![](http://img.smyhvae.com/20180303_1150.png)




本文参考链接：

- [Get全栈技能点 Vue2.0/Node.js/MongoDB 打造商城系统](https://coding.imooc.com/class/chapter/113.html)








