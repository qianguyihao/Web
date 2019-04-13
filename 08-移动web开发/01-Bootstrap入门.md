

> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8470657.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。

## Bootstrap 介绍

Bootstrap 是非常流行的前端框架。特点是：灵活简洁、代码优雅、美观大方。它是由Twitter的两名工程师 Mark Otto 和 Jacob Thornton 在2011年开发的。

简单来说，Bootstrap 让 Web 开发**更简单、更快捷**。使用 Bootstrap 框架并不代表我们再开发时不用自己写 CSS 样式，而是不用写绝大多数常见的样式。

PS：[Amaze UI](http://amazeui.org/) 这个框架其实跟 Bootstrap 很像。

### 官网网站

- 官方网站：<https://getbootstrap.com/>

- 中文网站：<http://www.bootcss.com/>

V3版本：

![](http://img.smyhvae.com/20180225_1033.png)

V4版本：

![](http://img.smyhvae.com/20180225_1043.png)

列举几个用 Bootstrap 做的网站：

- [Bootstrap 优站精选](http://www.youzhan.org/)

- <https://mobirise.com/>

- <http://snappa.io/>

### Bootstrap 版本

目前市面上使用的最多的是 3.x.x 版本。各个版本的介绍：

2.3.2版本：

- 2013年之后，停止维护；

- 支持更广泛的浏览器

- 代码不够简洁， 功能不够多。

3.x.x 版本：

- 目前最新的稳定版本。

- 不支持 IE7 和早期的 Firefox

- 支持 IE8，单效果不好。


2015年8月发布 4.0.0-alpha 的内部测试版。

**版本号的普及：**

- alpha 版：内部测试版。α 是希腊字母的第一个，表示最早的版本，bug很多。主要是给开发和测试人员找 bug 用的。

- beta 版：公开测试版。 主要是给“部落”用户和忠实用户测试用的。bug依然很多，但比 Alpha 版要稳定。这个阶段的版本还会不断增加新功能，如果你是发烧友，可以下载这个版本。

- rc 版：候选版本（Release Candidate）。该版本不再增加新的功能。类似于最终发行版之前的预览版（发行的候选版本）。此版本的发布，预示着最终发行版即将到来。作为普通用户，如果很着急，也可以下载 rc 版。

- stable 版：稳定版。在开源软件中，都有 stable版本，这个是开源软件的最终发行版，用户可以放心大胆地使用。

### Bootstrap 库的下载

> 这里我们以  Bootstrap V3.3.7 为例。

进入[中文官网](https://v3.bootcss.com/)，下载 `用于生产环境的 Bootstrap`，如下图所示：

![](http://img.smyhvae.com/20180225_1052.png)

下载之后，解压 `bootstrap-3.3.7-dist` ，有三个文件夹：

![](http://img.smyhvae.com/20180225_1053.png)

将其拷贝到工程文件的lib文件夹下即可。

PS：`dist`表示编译之后的文件，这在库文件中是很常见的。

因为 bootstrap.js依赖jQuery，所以要先引用jquery.js 然后引用bootstrap.js。


### Bootstrap 基础模板的介绍

[Bootstrap](https://v3.bootcss.com/getting-started/)官网提供了基本模板，如下图所示：

![](http://img.smyhvae.com/20180225_1119.png)

其完整版代码 copy 如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>我的网站</title>

    <!-- Bootstrap -->
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

我们需要对上面的代码进行解释。

**（1）Compatible**：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

解释：设置浏览器的兼容模式版本。表示如果在IE浏览器下则使用最新的标准，渲染当前文档。

**（2）viewport 视口**：


```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

解释：声明当前网页在移动端浏览器中展示的相关设置。我们在做移动 web 开发时，就用上面这行代码设置 viewport。

视口的作用：在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，将页面容器缩放到设备这么大，然后展示。


需要注意的是：

- 目前大多数手机浏览器的视口（承载页面的容器）宽度都是980；
- 此属性为移动端页面视口设置，上方代码设置的值，表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）。

属性解释：

- width:设置viewport的宽度。
- initial-scale：初始化缩放比例。
- minimum-scale:最小缩放比例。
- maximum-scale:最大缩放比例。
- user-scalable:是否允许用户手动缩放（值可以写成yes/no，也可以写成1/0）


PS：如果设置了不允许用户缩放，那么最小缩放和最大缩放就没有意义了。二者是矛盾的。



**（3）条件注释**：

```html
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
```

条件注释的作用：当判断条件满足时，就会执行注释中的HTML代码，不满足时会当做注释忽略掉。

上方代码的条件注释中，引入了两个脚本：

- [html5shiv](https://github.com/aFarkas/html5shiv)：让浏览器可以识别 HTML5 的新标签。如header、footer、section等。
- [respond.js](https://github.com/scottjehl/Respond)：让低版本浏览器可以使用 CSS3 的媒体查询。

另外，我们还需要引入下面这个库：

- [jQuery](https://github.com/jquery/jquery)：Bootstrap框架中的所有 JS 组件都依赖于 jQuery 实现。

我们可以把上面这三个库文件拷贝到 lib 文件夹中（注意引用的路径要写正确）。

## 使用 Bootstrap 搭建项目

### 1、工程文件的目录结构

```
├─ Demo ·························· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```

### 2、下载并引入 Bootstrap 库文件

见上一段的讲解。引入之后，另外还需要引入 html5shiv、respond、jQuery 这三个库文件。

### 3、字符集、Viewport设置、浏览器兼容模式

我们将 Bootstrap 的基础模板代码 copy到项目的index.html中，这其中就包括最前面的三个meta标签：

```html
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
```

### 4、favicon（站点图标）

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

### 5、引入相应的第三方文件

```html
    <!-- 引入 Bootstrap 的核心样式文件（必须） -->
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <!-- 引入我们自己写的 css 样式文件-->
    <link rel="stylesheet" href="css/my.css">

	...

	<script src="lib/jquery/jquery.js"></script>
	<script src="lib/bootstrap/js/bootstrap.js"></script>
	<script src="js/my.js"></script>
```

注意，先引入第三方的文件，再引入我们自己写的文件。


### 6、默认字体

在我们默认的样式表中将默认字体设置为：

```css
body{
  font-family: "Helvetica Neue",
                Helvetica,
                Microsoft Yahei,
                Hiragino Sans GB,
                WenQuanYi Micro Hei,
                sans-serif;
}
```

### 7、完成页面空结构

> 先划分好页面中的大容器，然后在具体看每一个容器中单独的情况。

完整代码如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>我的网站</title>
    <!--建议：第三方引用的css库放在上面，我们自己写的文件，都放在下面-->

    <!-- 引入 Bootstrap 的核心样式文件（必须） -->
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <!-- 引入我们自己写的 css 样式文件-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <!--[if lt IE 9]>
    <script src="lib/html5shiv/html5shiv.min.js"></script>
    <script src="lib/respond/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<!-- 头部区域 -->
<header id="header">
</header>
<!-- /头部区域 -->

<!-- 广告轮播 -->
<section id="main_ad"></section>
<!-- /广告轮播 -->

<!-- 特色介绍 -->
<section></section>
<!-- /特色介绍 -->

<!-- 立即预约 -->
<section></section>
<!-- /立即预约 -->

<!-- 产品推荐 -->
<section></section>
<!-- /产品推荐 -->

<!-- 新闻列表 -->
<section></section>
<!-- /新闻列表 -->

<!-- 合作伙伴 -->
<section></section>
<!-- /合作伙伴 -->

<!-- 脚注区域 -->
<footer></footer>
<!-- /脚注区域 -->

<script src="lib/jquery/jquery.js"></script>
<script src="lib/bootstrap/js/bootstrap.js"></script>
<script src="js/main.js"></script>
</body>

</html>

```




## CSS 样式

全局 CSS 样式在[官网](https://v3.bootcss.com/css/)有介绍：

![](http://img.smyhvae.com/20180225_1710.png)

**如果需要哪个样式，直接根据文档的指引，在相应的元素里加指定的类名即可。**

我们选部分重要的来讲一下。

### 布局容器：container 类

截图如下：

![](http://img.smyhvae.com/20180225_1720.png)

**作用**：用于定义一个固定宽度且居中的版心。只不过，这个版心的宽度具有**响应式**的效果。

也就是说，在 Bootstrap 中，我们一般用 .container 类来表示版心。

格式举例：

```html
<div class="topbar">
  <div class="container">
    <!--
      此处的代码会显示在一个固定宽度且居中的容器中
      该容器的宽度会跟随屏幕的变化而变化
    -->
  </div>
</div>
```

这个 container 类我们自己其实也可以写，通过媒体查询即可实现。

### 栅格参数

栅格系统最主要的操作是：利用 css 的响应式去做一套行列布局的预置样式。

栅格参数如下：

![](http://img.smyhvae.com/20180225_1732.png)

我们尤其要记住各个屏幕的尺寸和**类前缀**。

## 组件

一个按钮称之为样式；两个按钮在一起，就可以称之为组件。

组件在[官网](https://v3.bootcss.com/components/)有介绍：

![](http://img.smyhvae.com/20180225_1738.png)

我们现在需要关注的不是组件怎么用，而是里面有哪些组件，避免**重复造轮子**：别人已经做得很好了，不需要我们再重复。

## JS 组件

JS 组件在[官网](https://v3.bootcss.com/javascript/)有介绍：

![](http://img.smyhvae.com/20180225_1750.png)

这里面包含了很多带交互的组件。比如轮播图：

![](http://img.smyhvae.com/20180225_1841.png)

## 博主提供的下载链接

空结构的工程文件的下载地址：(lib文件夹里包含了Bootstrap相关的各种库和中文文档)

- [2018-02-25-BootstrapDemo及文档.rar](http://download.csdn.net/download/smyhvae/10258718)

还是那句话：**如果需要哪个样式，直接根据文档的指引，在相应的元素里加指定的类名即可。**

## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
