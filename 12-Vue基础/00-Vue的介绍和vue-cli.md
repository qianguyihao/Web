
## MVVM模式

![](http://img.smyhvae.com/20180420_2150.png)

- Model：负责数据存储

- View：负责页面展示

- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示

## 关于框架

### 为什么要学习流行框架

**1、企业为了提高开发效率**：在企业中，时间就是效率，效率就是金钱；企业中，使用框架，能够提高开发的效率。

**提高开发效率的发展历程**：

原生JS -> Jquery之类的类库 -> 前端模板引擎 -> Angular.js / Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念）

2、在Vue中，一个核心的概念就是：数据驱动，避免手动操作DOM元素。这样的话，可以让前端程序员可以更多的时间去关注数据的业务逻辑，而不是关心 DOM 是如何渲染的了。

### 框架和库的区别

**框架**：

框架是一套完整的解决方案。

对项目的**侵入性**较大，项目如果需要更换框架，则需要重新架构整个项目。但是优点也很明显：功能完善、提供了一整套的解决方案。

**库（插件）**：

只是提供某一个小功能。

对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。

举例：

- 从Jquery 切换到 Zepto

- 从 EJS 切换到 art-template

## 前端的各种框架


### Vue 和 React 的相同点

- 利用虚拟DOM实现快速渲染

- 轻量级

- 响应式组件

- 支持服务器端渲染

- 易于集成路由工具、打包工具以及状态管理工具

PS：Vue 在国内很受欢迎；React 在国内和国外都很受欢迎，适合做大型网站。

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

- 2013年底作为尤雨溪个人实验项目开始开发

- 2014年2月公开发布。

- 2014年11月发布0.11版本

- 2016年10月发布2.0版本。

### 相关网址

- [中文官网](https://cn.vuejs.org/)

- [vuejs官方论坛](https://forum.vuejs.org/)

- GitHub地址：<https://github.com/vuejs/vue>


- Vue1.0 在线文档：<http://v1-cn.vuejs.org/guide/>

- Vue2.x 在线文档：<https://cn.vuejs.org/v2/guide/>

- Vue1下载地址：<http://v1-cn.vuejs.org/js/vue.js>

- Vue2下载地址：<https://cdn.jsdelivr.net/npm/vue/>

![](http://img.smyhvae.com/20180302_1658.png)

上方截图的时间：2018-03-02。

### 介绍

 Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。

 Vue 以及大型 Vue 项目所需的周边技术，构成了生态。

渐进式框架图：

![](http://img.smyhvae.com/20180302_1701.png)

### Vue框架的特点

- 模板渲染：基于 html 的模板语法，学习成本低。

- 响应式的更新机制：数据改变之后，视图会自动刷新。【重要】

- 渐进式框架

- 组件化/模块化

- 轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到60kb）。

## Vue 的环境搭建

> 我们首先要安装好 NVM、Node.js环境，然后再来做下面的操作。

### 常见的插件

- Webpack：代码模块化构建打包工具。

- Gulp：基于流的自动化构建工具。

- Babel：使用最新的 规范来编写 js。

- Vue：构建数据驱动的Web界面的渐进式框架

- Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

以上这些包，都可以通过 NPM 这个包管理工具来安装。

### 引用 Vue.js 文件

1、**方式一**：（CDN的方式进行引用）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
</head>
<body>


</body>
</html>
```

2、方式二：（下载 vue.js 文件）

去网站 <https://cdn.jsdelivr.net/npm/vue/> 下载 vue.js 文件，直接放到工程文件里，然后引用。

3、方式三：（NPM的方式安装vue）

```bash
# 最新稳定版
$ npm install vue
```

如果网络不稳定，可以采用下面的方式安装：

```
$ cnpm i vue --save
```

然后在代码中通过下面这种方式进行引用：

```javascript
  import Vue from 'vue'
```

## 利用 vue-cli 新建一个空的项目

Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

### 官方代码参考

```
  npm install -g @vue/cli

  vue create my-app

  cd my-app

  npm run serve
```

我们根据上方的参考代码，来看看“利用 vue-cli 新建一个空的项目”的步骤。

### 安装 vue-cli（命令行工具）

安装命令如下：

```bash
# 全局安装 vue-cli
$ npm install -g @vue/cli
```

### 初始化一个 simple 项目

（1）首先执行：

```
  vue create my-app
```

输入上方命令后，会弹出一个选项：

![](http://img.smyhvae.com/20190624_163626.png)

如果是初学者，直接选`default`就行。之后会自动生成一个空的初始化项目，包含了项目目录、以及项目依赖的脚本。

这个空项目的工程文件如下：（请务必仔细研究这个项目的写法和目录结构）

- [2019-06-21-vue-my-app.zip](https://download.csdn.net/download/smyhvae/11256220)

我们可以看到这个项目的结构：

![](http://img.smyhvae.com/20190624_160726.png)

- src：项目源码

- .babelrc：ES6编译插件的配置

- index.html：单页面的入口

上方截图中，`npm install `指的是下载各种依赖包，`npm run dev`指的是打开发包，`npm run build`指的是打生产包。

（2）本地运行项目：

```
  cd my-app

  npm run serve
```

浏览器输入`http://localhost:8080/`，就可以让这个空的项目在本地跑起来：

![](http://img.smyhvae.com/20190624_160229.png)

备注：我们在 GitHub上下载的任何Vue有关的项目，第一步都是要首先执行 npm install，安装依赖的 mode_modules，然后再运行。我们发给同事的工程文件，建议不要包含 `node_modules`。

### 构建一个 非 simple 项目

构建一个空的项目，首先执行：

```
$ vue create vuedemo2
```

![](http://img.smyhvae.com/20190624_163726.png)

上图中，选择 `Manually select features`，然后根据提示依次输入：

![](http://img.smyhvae.com/20190624_164305.png)

-  project name：**要求小写**。

- description：默认即可。

- vue-router：需要。

- ESlint：语法检查，初学者可以暂时不需要。

- 单元测试：暂时也不需要。

- e2e test：不需要。

选择 eslint 的配置：

![](http://img.smyhvae.com/20190624_165001.png)

然后让这个空的项目就可以在浏览器上跑起来。

## vue 项目结构分析

![](http://img.smyhvae.com/20180501_2100.png)

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


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20160401_01.jpg)


