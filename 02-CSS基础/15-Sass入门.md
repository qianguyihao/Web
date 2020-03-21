

## Sass简介

大家都知道，js 中可以自定义发量，css 仅仅是一个标记语言，不是编程语言，因此不可以自定义发量、不可以引用等等。

面对这些问题，我们现在来引入 Sass，简单的说，他是 css 的升级版，可以自定义发量，可以有 if 语句，还可以嵌套等等，很神奇吧！那下面我们就来介绍返个神奇的 Sass。

Sass比Less的功能更强大，也更复杂。


### Sass 的定义

Sass：英文是 Syntactically Awesome Stylesheets Sass。最早由 Hampton Catlin 开发和设计。 一种帮助你简化 CSS 工作流程的方式，帮助你更容易维护和开发 CSS 内容。


官网是：<https://sass-lang.com/>

Sass 是这个世界上最成熟、稳定和强大的专业级 CSS 扩展语言。

Sass专注的是怎样创建优雅的样式表，而不是内容。


### Sass、Compass与CSS

**关系：**

- Less/Sass是语法、Compass是框架、CSS是目标。

**Sass&Compass的好处**：

- 写出更优秀的CSS。

- 解决CSS编写过程中的痛点问题，比如精灵图合图、属性的浏览器前缀处理等。

- 有效组织样式、图片、字体等项目元素。


**受众群体：**

- 重构的同学，写很多CSS，不知如何自动化。

- 希望在项目周期内更好地组织项目内容。



## Sass的安装

sass引擎是用Ruby语言开发的（但是两者的语法没有关系），因此在安装 Sass 前，需要先安装Ruby（mac下自带Ruby无需再安装Ruby）。

下面来讲一下 Windows 下的安装Sass的步骤。

### 第一步：安装Ruby（windows环境）

下载地址：<http://rubyinstaller.org/downloads/>

貌似网络很慢，不一定能下载成功~

安装时，记得勾选“环境变量”：

![](http://img.smyhvae.com/20180407_2022.png)

安装完ruby之后，在命令行中输入`ruby -v`，查看ruby的的版本：

![](http://img.smyhvae.com/20180407_2039.png)


### 关于Mac下的Ruby

刚刚说了，Mac下自带Ruby，但是版本肯定很老：

![](http://img.smyhvae.com/20180407_2145.png)

有的时候，我们可能需要使用特定版本的ruby，或者在不同的ruby版本之间进行切换，所以，大家可以尝试安装`rvm`，它是ruby的版本管理工具。官网是：<https://rvm.io>

### 第二步：安装 Sass

安装完ruby之后，在开始菜单中，找到刚才我们安装的ruby，打开Start Command Prompt with Ruby。输入`gem install sass`安装Sass。

PS：Ruby 是使用 gem 来管理它的各种包（比如Sass）。我们安装好ruby之后，gem会自动安装上；类似于，我们安装完node之后，npm也自动安装好了。

但是，由于访问网络受限，我们可以先切换到淘宝的镜像，再安装Sass。步骤如下：

（1）移除默认的镜像，添加淘宝的镜像：

```
	gem sources --remove https://rubygems.org/

	gem sources -a https://ruby.taobao.org/  //注意：如果你系统不支持https，请将淘宝源更换成：gem sources -a http://gems.ruby-china.org
```

PS：我测试了一下，Win 7 不支持https，Mac支持https。

（2）查看当前使用的是哪个镜像：

```
	gem sources -l
```

![](http://img.smyhvae.com/20180407_2050.png)

（3）安装sass：

紧接着，输入如下命令安装Sass：

```
	gem install sass        // 如果mac下输入这个命令时没有权限，则需要在前面加上 sudo
```

系统会自动安装上最新版本的Sass。

查看sass版本的命令为:

```
	sass -v
```

升级sass版本的命令为：

```
	gem update sass
```

你也可以运行帮助命令行来查看你需要的命令：

```
	sass -h
```

![](http://img.smyhvae.com/20180407_2100.png)

参考链接：<https://www.w3cplus.com/sassguide/install.html>

## Compass 简介和安装

安装完sass之后，我们在main.scss中写一些代码，然后输入如下命令，就可以将`scss文件`转化为`css文件`：

```
	sass main.scss main.css
```

然而，真正的项目开发中，我们不一定是直接使用 sass 命令，而是使用 Compass。

### Compass 简介

官网是：<http://compass-style.org/>。

Compass 是开源的CSS书写框架。

### Compass 安装

输入如下命令安装 Compass：

```
	gem isntall compass
```

输入如下命令查看版本：

```
	compass -v
```

![](http://img.smyhvae.com/20180407_2208.png)

compass可以直接用来搭建前端项目的样式部分，但并不是常用的方法。

### Compass的简单使用

通过 Compass 创建工程目录：


```
cd workspace

compass create CompassDemo
```

文件结构如下：

- /sass
	- ie.scss
	- print.scss
	- screen.scss

- /stylesheets
	- ie.css
	- print.css
	- screen.css

- config.rb



为了能够让文件实时编译，我们可以通过 copass watch 监听sass文件的变化：

```
	cd CompassDemo

	compass watch
```

当.scss文件改动时，会自动生成对应的.css文件。



## Sass的语法

### 两种后缀名（两种语法）

sass 有两种后缀名文件：

（1）`.sass`：对空格敏感。不使用大括号和分号，所以每个属性之间是通过换行来分隔。

比如：

```
h1
	color: #000
	background: #fff
```

这种语法是类ruby的语法，和CSS的语法相比，相差较大。所以，在3.0版本中就引入了`.scss`的语法。



（2）`.scss`：是css语法的超集，可以使用大括号和分号。

比如：

```
h1 {
	color: #000;
	background: #fff;
}
```


注意：一个项目中可以混合使用两种语法，但是一个文件中不能同时使用两种语法。


**两种格式之间的转换：**

我们在工程目录下新建`main.scss`，输入如下代码：

```
*{
    margin: 0;
    padding: 0;
}
```

然后输入如下命令，就可以将上面的`main.scss`转化为`main.sass`：

```bash
	sass-convert main.scss main.sass
```


打开生成的`main.sass`，内容如下：

```
*
  margin: 0
  padding: 0

```


### 变量语法

Sass 是通过`$`符号来声明变量。

（1）我们新建一个文件`_variables.scss`，这个文件专门用来存放变量，然后在其他的文件中引入`_variables.scss`即可。

因为这个文件只需要存储变量，并不需要它编译出对应的 css 文件，所以我们给文件名的前面加了**下划线**，意思是声明为**局部文件**。

我们在这个文件中，声明两个字体变量：

```css
$font1: Braggadocio, Arial, Verdana, Helvetica, sans-serif;

$font2: Arial, Verdana, Helvetica, sans-serif;
```


（2）新建文件main.scss，在里面引入步骤（1）中的变量文件：

```
@import "variables";    // 引入变量文件

.div1{
    font-family: $font1;
}

.div2{
    font-family: $font2;
}
```

基于 Sass 的既定规则：

- 没有文件后缀名时，Sass 会自动添加 .scss 或者 .sass 的后缀（具体要看已经存在哪个后缀的文件）。

- 同一目录下，局部文件和非局部文件不能重名。

对应生成的main.css文件如下：

main.css

```css
/* line 9, ../sass/main.scss */
.div1 {
  font-family: Braggadocio, Arial, Verdana, Helvetica, sans-serif;
}

/* line 13, ../sass/main.scss */
.div2 {
  font-family: Arial, Verdana, Helvetica, sans-serif;
}

```



### 注释语法

单行注释：

```
//我是单行注释
```

块级注释：

```
/*
	我是块级注释
	哈哈
*/

```



二者的区别是：单行注释不会出现在自动生成的css文件中。




