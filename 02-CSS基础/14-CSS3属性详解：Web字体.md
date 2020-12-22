


## 前言


开发人员可以为自已的网页指定特殊的字体（将指定字体提前下载到站点中），无需考虑用户电脑上是否安装了此特殊字体。从此，把特殊字体处理成图片的方式便成为了过去。

支持程度比较好，甚至 IE 低版本的浏览器也能支持。

## 字体的常见格式

> 不同浏览器所支持的字体格式是不一样的，我们有必要了解一下字体格式的知识。

#### TureTpe格式：(**.ttf**)

.ttf 字体是Windows和Mac的最常见的字体，是一种RAW格式。

支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+。



#### OpenType格式：(**.otf**)

.otf 字体被认为是一种原始的字体格式，其内置在TureType的基础上。

支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+。


#### Web Open Font Format格式：(**.woff**)

woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离。

支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+。

#### Embedded Open Type格式：(**.eot**)

.eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种字体的浏览器有IE4+。


#### SVG格式：(**.svg**)

.svg字体是基于SVG字体渲染的一种格式。

支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+。

**总结：**

了解了上面的知识后，**我们就需要为不同的浏览器准备不同格式的字体**。通常我们会通过字体生成工具帮我们生成各种格式的字体，因此无需过于在意字体格式之间的区别。


下载字体的网站推荐：

- <http://www.zhaozi.cn/>

- <http://www.youziku.com/>


## WebFont 的使用步骤

打开网站<http://iconfont.cn/webfont#!/webfont/index>，如下：

![](http://img.smyhvae.com/20180220_1328.png)

上图中，比如我想要「思源黑体-粗」这个字体，那我就点击红框中的「本地下载」。

下载完成后是一个压缩包，压缩包链接：http://download.csdn.net/download/smyhvae/10253561

解压后如下：

![](http://img.smyhvae.com/20180220_1336.png)

上图中， 我们把箭头处的html文件打开，里面告诉了我们 webfont 的**使用步骤**：

![](http://img.smyhvae.com/20180220_1338.png)

（1）第一步：使用font-face声明字体

```css
@font-face {font-family: 'webfont';
    src: url('webfont.eot'); /* IE9*/
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff') format('woff'), /* chrome、firefox */
    url('webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
```


（2）第二步：定义使用webfont的样式

```css
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
```


（3）第三步：为文字加上对应的样式

```html
<i class="web-font">这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了。</i>
```

**举例：**

我们按照上图中的步骤来，引入这个字体。完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        p{
            font-size:30px;
        }

        /*  如果要在网页中使用web字体（用户电脑上没有这种字体）*/
        /* 第一步：声明字体*/
        /* 告诉浏览器 去哪找这个字体*/
        @font-face {font-family: 'my-web-font';
            src: url('font/webfont.eot'); /* IE9*/
            src: url('font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/webfont.woff') format('woff'), /* chrome、firefox */
            url('font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
        }
        /* 第二步：定义一个类名，谁加这类名，就会使用 webfont 字体*/
        .webfont{
            font-family: 'my-web-font';
        }
    </style>
</head>
<body>
    <!-- 第三步：引用 webfont 字体 -->
    <p class="webfont">生命壹号，永不止步</p>
</body>
</html>
```


代码解释：

（1）`my-web-font`这个名字是随便起的，只要保证第一步和第二步中的名字一样就行。

（2）因为我把字体文件单独放在了font文件夹中，所以在src中引用字体资源时，写的路径是 `font/...`

工程文件：

- [2018-02-20-WebFont举例.zip](http://download.csdn.net/download/smyhvae/10253565)


## 字体图标（阿里的 iconfont 网站举例）

我们其实可以把图片制作成字体。常见的做法是：把网页中一些小的图标，借助工具生成一个字体包，然后就可以像使用文字一样使用图标了。这样做的优点是：

- 将所有图标打包成字体库，减少请求；

- 具有矢量性，可保证清晰度；

- 使用灵活，便于维护。

也就是说，我们可以把这些图标当作字体来看待，凡是字体拥有的属性（字体大小、颜色等），均适用于图标。

**使用步骤如下：**（和上一段的使用步骤是一样的）

打开网站<http://iconfont.cn/>，找到想要的图标，加入购物车。然后下载下来：

![](http://img.smyhvae.com/20180220_1750.png)

压缩包下载之后，解压，打开里面的demo.html，里面告诉了我们怎样引用这些图标。

![](http://img.smyhvae.com/20180220_1755.png)

**举例1**：（图标字体引用）

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*申明字体*/
        @font-face {font-family: 'iconfont';
            src: url('font/iconfont.eot'); /* IE9*/
            src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/iconfont.woff') format('woff'), /* chrome、firefox */
            url('font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }

        .iconfont{
            font-family: iconfont;
        }

        p{
            width: 200px;
            border: 1px solid #000;
            line-height: 60px;
            font-size:30px;
            margin:100px auto;
            text-align: center;
        }

        p span{
            color:red;
        }
    </style>
</head>
<body>
    <!-- 【重要】编码代表图标 -->
    <p><span class="iconfont">&#xe628;</span>扫码付款</p>
</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180220_1800.png)


**举例2**：（伪元素的方式使用图标字体）

如果想要在文字的前面加图标字体，我们更习惯采用**伪元素**的方式进行添加。

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*申明字体*/
        @font-face {font-family: 'iconfont';
            src: url('font/iconfont.eot'); /* IE9*/
            src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/iconfont.woff') format('woff'), /* chrome、firefox */
            url('font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }



        p{
            width: 200px;
            border: 1px solid #000;
            line-height: 60px;
            font-size:30px;
            margin:100px auto;
            text-align: center;
            position: relative;
        }

        .icon::before{
            /*&#xe628;*/
            content:"\e628";
            /*position: absolute;*/
            /*left:10px;*/
            /*top:0px;*/
            font-family: iconfont;
            color:red;
        }

        span{
            position: relative;

        }


    </style>
</head>
<body>
    <p class="icon">扫码付款</p>
    <span class="icon" >我是span</span>
    <div class="icon">divvvvvvvvvvv</div>
</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180220_1815.png)


工程文件：

- 2018-02-20-图标字体demo.zip



## 其他相相关网站介绍

- Font Awesome 使用介绍：<http://fontawesome.dashgame.com/>

定制自已的字体图标库：

- <http://iconfont.cn/>

- <https://icomoon.io/>

SVG素材：

- <https://www.iconfont.cn/>




## 360浏览器网站案例

暂略。

这里涉及到：jQuery fullPage   全屏滚动插件。

- 中文网址:http://www.dowebok.com

- 相关说明:http://www.dowebok.com/77.html


## 使用 Bootstrap 网站的图标字体

打开如下网站：<http://www.bootcss.com/p/font-awesome/>。

![](http://img.smyhvae.com/20180223_2100.png)

如上图所示，下载字体后，进行解压：

![](http://img.smyhvae.com/20180223_2105.png)

使用步骤如下：

（1）如图只是想要字体的话，可以把`css`和`font`这两个文件夹拷贝到项目里。

（2）在html文档中的 <head> 标签里，引入 font-awesome.min.css 文件：

```html
    <link rel="stylesheet" href="css/font-awesome.min.css">
```

（3）想在哪个标签里用这个图标，直接在这个标签里加className就行（className都在[网站](http://www.bootcss.com/p/font-awesome/)上列出来了）。


完整版代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <style>

    </style>
</head>
<body>
    <span class="icon-play">播放</span>
</body>
</html>
```



## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)













