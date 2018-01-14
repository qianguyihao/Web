


## 前言

> CSS已经学了一些基础内容了，我们来讲解一个小案例吧。以[博雅互动](http://www.boyaa.com/)的官网首页举例。

### 版心

首页的**版心**如下：

20170813_1535.png

这里我们要普及一个概念，叫“[版心](https://baike.baidu.com/item/%E7%89%88%E5%BF%83)”。**版心是页面中主要内容所在的区域。**

比如说，网站左上角的logo，设计图给出的左边距是143像素，此时，我们先玩不要以为，logo的左边距真的是143像素。因为设计图只是一个版心；而整个页面是处于浏览器的中间，浏览器的宽度是可以随时调整的。

我们量一下中间四个方形图的width，是1000px，所以，网页版心的宽度是1000px。


### 网页的结构

从结构上来看，网页分为头部（导航栏）、banner区、内容区、底部。



## 导航栏的制作

在此我们只讲基础知识的使用，不涉及浏览器的优化。


`class==header`这个div是顶部的通栏，我们在里面放一个1000px宽的div，作为通栏的版心，我一般把这个版心称为`class=inner_c`，c指的是center。

`class=inner_c`不需要给高，因为它可以被内容撑高。

现在我们需要在`class=inner_c`里放三个东西：左侧的logo、中间的导航栏、右侧的“加入我们”。



接下来我们开始做右侧的「加入我们」，「加入我们」的背景是带圆角的矩形，这个圆角，实现的方式有两种：要么切图，要么用CSS3实现（IE 7、IE 8不兼容）。我们暂时使用切图来实现。

我们最好把「加入我们」这个超链接`<a>`放到`div`里，然后设置div的margin和padding，而不是直接设置`<a>`的边距。

我们起个名字叫`class=jrwm`是没有问题的，这在工作当中很常见，如果写成`class=join_us`反倒很别扭。

暂时我们的做法是：

- （1）给`class=jrwm_box`这个div里放一个`class=jrwm`的div。`class=jrwm`用来放绿色的背景图片。
- （2）在`class=jrwm`里放一个超链接，并将超链接转为块级元素。

最终，导航栏的代码如下：


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin: 0px;
            padding: 0px;
        }
        body{
            font-size: 14px;
            font-family: "Microsoft YaHei","SimSun";
            height: 8888px;
        }
        .header{
            height: 58px;
            background-color: #191D3A;
        }
        /*版心*/
        .inner_c{
            width: 1000px;
            margin: 0 auto; /*让导航条、内容区域等部分的版心在父亲里居中*/
        }
        /*导航条的logo*/
        .header .logo{
            float: left;
            margin-right: 40px;
        }
        .header .nav{
            float: left;
        }
        .header .nav ul{
            list-style: none; /*去掉列表前面的圆点*/
        }
        .header .nav ul li{
            float: left;
            width: 100px;
            line-height: 58px; /*让行高等于这一行的高度，保证里面的文字垂直居中*/
            border-left: 1px solid #252947; /*每个li之间有间隔线*/
        }
        .header .nav ul li.last{
            border-right: 1px solid #252947;/*最后一个li的右边加间隔线*/
        }
        .header .nav ul li a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            height: 58px;
            text-decoration: none; /*去掉超链的下划线*/
            color:#818496;
            text-align: center;  /*让这个div内部的文本居中*/
        }
        .header .nav ul li a.current{
            color:white;
            background: #252947;
        }
        .header .nav ul li a:hover{
            color: white;
            background: #252947;
        }

        .header .jrwm_box{
            float: left;
            height: 58px;
            width: 100px;
            padding-left: 48px;
            padding-top: 12px;

        }
        /*放背景图片的div*/
        .header .jrwm_box .jrwm{
            height: 34px;
            background-image: url(images/jrwm.png);
            background-repeat: no-repeat;
            text-align: center; /*让这个div内部的超链接居中*/
        }
        .header .jrwm_box .jrwm a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            line-height: 34px; /*让行高为背景图片的高度，可以保证超链接的文字在背景图片里垂直居中*/
            text-decoration: none; /*去掉超链的下划线*/
            color: white;
        }

    </style>
</head>
<body>
    <div class="header">
        <div class="inner_c">
            <div class="logo">
                <img src="images/logo.png " alt="">
            </div>
            <div class="nav">
                <ul>
                    <li><a href="#" class="current">首页</a></li>
                    <li><a href="#">博雅游戏</a></li>
                    <li><a href="#">博雅新闻</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">客服中心</a></li>
                    <li class="last"><a href="#">投资者关系</a></li>
                </ul>
            </div>
            <div class="jrwm_box">
                <div class="jrwm">
                    <a href="https://www.google.com/" target="_blank">加入我们</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

导航栏的效果如下：

20180114_1332.gif



## banenr图

> 因为涉及到 js 的内容，这里先不讲内容区域**轮播图**的效果。

我们首先在导航条和banner图之间加一道墙，即`class=cl`，然后采用隔墙法对其设置`clear: both;`的属性。


然后设置banner的背景图片属性，添加banner图。


## 内容区域的制作

导航栏+banner+内容区域的完整代码如下：


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin: 0px;
            padding: 0px;
        }

        /*清除浮动的影响*/
        .cl{
            clear: both;
        }
        body{
            font-size: 14px;
            font-family: "Microsoft YaHei","SimSun";
            height: 8888px;
        }
        .header{
            height: 58px;
            background-color: #191D3A;
        }
        /*版心*/
        .inner_c{
            width: 1000px;
            margin: 0 auto; /*让导航条、内容区域等部分的版心在父亲里居中*/
        }
        /*导航条的logo*/
        .header .logo{
            float: left;
            margin-right: 40px;
        }
        .header .nav{
            float: left;
        }
        .header .nav ul{
            list-style: none; /*去掉列表前面的圆点*/
        }
        .header .nav ul li{
            float: left;
            width: 100px;
            line-height: 58px; /*让行高等于这一行的高度，保证里面的文字垂直居中*/
            border-left: 1px solid #252947; /*每个li之间有间隔线*/
        }
        .header .nav ul li.last{
            border-right: 1px solid #252947;/*最后一个li的右边加间隔线*/
        }
        .header .nav ul li a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            height: 58px;
            text-decoration: none; /*去掉超链的下划线*/
            color:#818496;
            text-align: center;  /*让这个div内部的文本居中*/
        }
        .header .nav ul li a.current{
            color:white;
            background: #252947;
        }
        .header .nav ul li a:hover{
            color: white;
            background: #252947;
        }

        .header .jrwm_box{
            float: left;
            height: 58px;
            width: 100px;
            padding-left: 48px;
            padding-top: 12px;

        }
        /*放背景图片的div*/
        .header .jrwm_box .jrwm{
            height: 34px;
            background-image: url(images/jrwm.png);
            background-repeat: no-repeat;
            text-align: center; /*让这个div内部的超链接居中*/
        }
        .header .jrwm_box .jrwm a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            line-height: 34px; /*让行高为背景图片的高度，可以保证超链接的文字在背景图片里垂直居中*/
            text-decoration: none; /*去掉超链的下划线*/
            color: white;
        }



        .banner{
            height: 465px;
            background: url(images/banner.jpg) no-repeat center top;
        }
        .content{
            padding-top: 50px;
        }
        .content .product{
            height: 229px;
            border-bottom: 1px solid #DBE1E7;
        }
        .content .product ul{
            list-style: none;
        }
        .content .product ul li{
            float: left;
            width: 218px;
            margin-right: 43px;
        }
        .content .product ul li.last{
            margin-right: 0;
            width: 217px;
        }
        .content .product ul li img{
            width: 218px;
            height: 130px;
        }
        .content .product ul li.last img{
            width: 217px;
        }

        .content .product ul li h3{
            text-align: center;
            line-height: 38px;
            font-size: 14px;
            font-weight: bold;
        }
        .content .product ul li p.djbf{
            text-align: center;
            line-height: 16px;
        }
        .content .product ul li p.djbf a{
            font-size: 12px;
            color:#38B774;
            text-decoration: none;
            background:url(images/sanjiaoxing.png) no-repeat right 5px;
            padding-right: 12px;
        }

    </style>
</head>
<body>
    <div class="header">
        <div class="inner_c">
            <div class="logo">
                <img src="images/logo.png " alt="">
            </div>
            <div class="nav">
                <ul>
                    <li><a href="#" class="current">首页</a></li>
                    <li><a href="#">博雅游戏</a></li>
                    <li><a href="#">博雅新闻</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">客服中心</a></li>
                    <li class="last"><a href="#">投资者关系</a></li>
                </ul>
            </div>
            <div class="jrwm_box">
                <div class="jrwm">
                    <a href="https://www.google.com/" target="_blank">加入我们</a>
                </div>
            </div>
        </div>
    </div>

    <!-- 在导航条和banner之间隔一堵墙 -->
    <div class="cl"></div>

    <div class="banner"></div>

    <!-- 内容区域 -->
    <div class="content inner_c">
        <div class="product">
            <ul>
                <li>
                    <p><img src="images/pro1.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
                <li>
                    <p><img src="images/pro2.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
                <li>
                    <p><img src="images/pro3.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
                <li class="last">
                    <p><img src="images/pro4.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
```


代码解释：




最终实现的效果如下：

20180114_1405.png









