

> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8476602.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## CSS 预处理器

### 为什么要有 CSS 预处理器

**CSS基本上是设计师的工具，不是程序员的工具**。在程序员的眼里，CSS是很头痛的事情，它并不像其它程序语言，比如说PHP、Javascript等等，有自己的变量、常量、条件语句以及一些编程语法，只是一行行单纯的属性描述，写起来相当的费事，而且代码难以组织和维护。

很自然的，有人就开始在想，能不能给CSS像其他程序语言一样，加入一些编程元素，让CSS能像其他程序语言一样可以做一些预定的处理。这样一来，就有了“**CSS预处器**（CSS Preprocessor）”。

### 什么是 CSS 预处理器

- 是 CSS 语言的**超集**，比CSS更丰满。

CSS 预处理器定义了一种新的语言，其基本思想是：**用一种专门的编程语言，为CSS增加了一些编程的特性**，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。

通俗的说，**CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件**，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

CSS预处理器技术已经非常成熟，而且也涌现出了很多种不同的CSS预处理器语言，比如说：**Sass（SCSS）、LESS**、Stylus、Turbine、Swithch CSS、CSS Cacheer、DT CSS等。如此之多的CSS预处理器，那么“我应该选择哪种CSS预处理器？”也相应成了最近网上的一大热门话题，在Linkedin、Twitter、CSS-Trick、知乎以及各大技术论坛上，很多人为此争论不休。相比过去我们对是否应该使用CSS预处理器的话题而言，这已经是很大的进步了。

到目前为止，在众多优秀的CSS预处理器语言中就属**Sass、LESS和Stylus最优秀**，讨论的也多，对比的也多。本文将分别从他们产生的背景、安装、使用语法、异同等几个对比之处向你介绍这三款CSS预处理器语言。相信前端开发工程师会做出自己的选择——我要选择哪款CSS预处理器。


## less 的介绍

less 是一款比较流行的**预处理 CSS**，支持变量、混合、函数、嵌套、循环等特点。


- [官网](http://lesscss.org/)

-  [中文网（less 文档）](http://lesscss.cn/)

- [Bootstrap网站的 less 文档](https://less.bootcss.com/)

-  推荐文章：<http://www.w3cplus.com/css/less>

## less 的语法

### 注释

less 的注释可以有两种。


第一种注释：模板注释

```
  // 模板注释 这里的注释转换成CSS后将会删除
```

因为 less 要转换为 css才能在浏览器中使用。转换成 css 之后，这种注释会被删除（毕竟 css 不识别这种注释）。

第二种注释：CSS 注释语法

```less

/* CSS 注释语法 转换为CSS后让然保留 */
```

总结：如果在less中写注释，我们推荐写第一种注释。除非是类似于版权等内容，就采用第二种注释。


### 定义变量

我们可以把**重复使用或经常修改的值**定义为变量，在需要使用的地方引用这个变量即可。这样可以避免很多重复的工作量。

（1）在less文件中，定义一个变量的格式：

```less
@变量名: 变量值;        //格式

@bgColor: #f5f5f5;      //格式举例
```

（2）同时，在 less 文件中引用这个变量。

最终，less文件的完整版代码如下：

main.less：

```less
// 定义变量
@bgColor: #f5f5f5;

// 引用变量
body{
    background-color: @bgColor;
}
```


我们将上面的less文件编译为 css 文件后（下一段讲less文件的编译），自动生成的代码如下：

main.css：

```css
body{
    background-color: #f5f5f5;
}
```


### 使用嵌套

在 css 中经常会用到子代选择器，效果可能是这样的：


```css
.container {
  width: 1024px;
}

.container > .row {
  height: 100%;
}

.container > .row a {
  color: #f40;
}

.container > .row a:hover {
  color: #f50;
}
```

上面的代码嵌套了很多层，写起来很繁琐。可如果用 less 的嵌套语法来写这段代码，就比较简洁。

嵌套的举例如下：

main.less:

```less
.container {
  width: @containerWidth;

  > .row {
    height: 100%;
    a {
      color: #f40;

      &:hover {
        color: #f50;
      }

    }
  }

  div {
    width: 100px;

    .hello {
      background-color: #00f;
    }

  }
}
```

将上面的less文件编译为 css 文件后，自动生成的代码如下：

main.css

```css
.container {
    width: 1024px;
}

.container > .row {
    height: 100%;
}

.container > .row a {
    color: #f40;
}

.container > .row a:hover {
    color: #f50;
}

.container div {
    width: 100px;
}

.container div .hello {
    background-color: #00f;
}
```



### Mixin

Mixin 的作用是把**重复的代码**放到一个类当中，每次只要引用类名，就可以引用到里面的代码了，非常方便。

（1）在 less 文件中定义一个类：（将重复的代码放到自定义的类中）

```less
/* 定义一个类 */
.roundedCorners(@radius: 5px) {
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
  border-radius: @radius;
}
```

上方代码中，第一行里面，括号里的内容是参数：这个参数是**缺省值**。

（2）在 less 文件中引用上面这个类：

```less
#header {
  .roundedCorners;
}
#footer {
  .roundedCorners(10px);
}
```



上方代码中，header 中的引用没有带参数，表示参数为缺省值； footer 中的引用带了参数，那就用这个参数。



### Import

在开发阶段，我们可以将不同的样式放到多个文件中，最后通过@import 的方式合并。意思就是，当出现多个 less 文件时，怎么引用它们。

这个很好理解， css 文件可以有很多个，less文件也可以有很多个。

（1）定义一个被引用的less文件，名为`_button1.less`：

`_button1.less:`

```less
.btn{
  line-height: 100px;
  color: @btnColor;
}
```

PS1：被引用的less文件，我们习惯在前面加**下划线**，表示它是**部分文件**。

PS2：`_button1.less`里可以引用`main.css`里的自定义变量。

（2）在 `main.css` 中引用上面的 `_button1.less`：（代码的第二行）

main.css：

```less
@btnColor: red;

@import url(`_button1.less:');    //这里的路径写的是相对路径

body{
  width: 1024px;
}
```

将 上面的main.less 编译为 main.css之后，自动生成的代码如下：

```css
.btn {
    line-height: 100px;
    color: red;
}

body {
    width: 1024px;
}
```

### 内置函数

less 里有一些内置的函数，这里讲一下 lighten 和 darken 这两个内置函数。


main.less:

```less
body {
  background-color: lighten(#000, 10%);   // 让黑色变亮 10%
  color: darken(#fff, 10%);               // 让白色变暗 10%
}

```


将 上面的 main.less 编译为 main.css 之后，自动生成的代码如下：


main.css：


```css
body {
  background-color: #1a1a1a;
  color: #e6e6e6;
}

```


如果还有什么不懂的，可以看 api 文档，在上面的第二段附上了链接。

## 在 index.html中直接引用 less.js

- 做法一：写完 less文件后，将其编译为 css 文件，然后在代码中引用css文件。

- 做法二：在代码中直接用引用 less 文件。

产品上线后，当然是使用做法一，因为做法二会多出编译的时间。

平时开发或演示demo的时候可以用做法二。


这一段，我们讲一下做法二，其实是浏览器在本地在线地把 less 文件转换为 css 文件。

（1）在 less 官网下载 less.js 文件：

![](http://img.smyhvae.com/20180226_2131.png)

把下载好的文件放在工程文件的lib文件夹里：

![](http://img.smyhvae.com/20180226_2143.png)

（2）在 index.html 中引入 less.js 和我们自己写的  main.less。位置如下：

![](http://img.smyhvae.com/20180226_2145.png)

copy 红框那部分的代码如下：

```html
    <link rel="stylesheet/less" href="../main.less">
```

我们可以在打开的网页中，通过控制台看到效果：

![](http://img.smyhvae.com/20180226_2150.png)

注意，我们要在服务器中打开 html 文件，否则，看不到效果。

这里也告诉了我们：

> 不提倡将 less 引入页面，因为 less 需要编译，因此你就需要再引入一个less.js, 多了一个HTTP 请求，同时当浏览器禁用了 js 你的样式就不起作用了，less 编译应该在服务端或使用 grunt 自动编译。


工程文件：（工程文件中，我引用的less.js版本是 2.5.3）

- [2018-02-27-LessDemo.rar](http://download.csdn.net/download/smyhvae/10260410)


参考链接：

- [知乎 | less文件如何引入页面](https://www.zhihu.com/question/26075208)



## less 的编译

less 的编译指的是将写好的 less 文件 生成为 css 文件。

less 的编译，依赖于 NodeJS 环境。因此，我们需要先安装 NodeJS。


### 1、安装 Node.js

去 [Node.js](https://nodejs.org/zh-cn/)的官网下载安装包：

![](http://img.smyhvae.com/20180226_2153.png)

一路 next 进行安装。

安装完成后，配置环境变量：

在 path 变量中追加安装路径：`;C:\Program Files\nodejs`。重启资源管理器，即可生效。

PS：我发现，我安装的 node.js v8.9.4 版本，已经自动添加了环境变量。

在 cmd 命令行，输入`node.exe -v`，可以查看 node.js 的版本。

### 2、安装 less 的编译环境

将 [npm.zip](http://download.csdn.net/download/smyhvae/10260414) 解压，将解压后的文件拷贝到路径`C:\Users\smyhvae\AppData\Roaming\npm`下：

![](http://img.smyhvae.com/20180226_2212.png)

然后重启资源管理器（或者重启电脑）。在 cmd 中输入 `lessc`，如果能看到下面的效果，说明 less编译环境安装成功：

![](http://img.smyhvae.com/20180226_2217.png)

如果你用的是 linux 系统，可以输入下面的命令安装：

```bash
    npm install -g less
```

### 3、将 less 文件编译为 css 文件

在 less 所在的路径下，输入 `lessc xxx.less`，即可编译成功。或者，如果输入 `lessc xxx.less > ..\xx.css`，表示输出到指定路径。


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
