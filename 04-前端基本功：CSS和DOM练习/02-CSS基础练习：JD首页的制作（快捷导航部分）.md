02-CSS基础练习：JD首页的制作（快捷导航部分）

我们在上一篇文章中制作的网页最顶部的导航，是属于网页导航。

本文中，Banner图上方的导航，叫做**快捷导航**（shortcut）。

##快捷导航的骨架

我们先制作快捷导航的骨架。如下图所示：

![](http://img.smyhvae.com/20180123_1057.png)

上图中，`shortcut-nav-menu-all`和`shortcut-nav-menu-one`都是属于`shortcut-nav-menu`部分，只不过，后者是将父亲撑破了。

为了实现上图，对应的html代码如下：

```html
<!--shortcut-nav部分start-->
<div class="shortcut-nav">
    <div class="w">
        <div class="shortcut-nav-menu">
            <div class="shortcut-nav-menu-all">
                <a href="#">全部商品分类</a>
            </div>
            <div class="shortcut-nav-menu-one" style="color: #fff">
                下一段再讲
            </div>
        </div>
        <div class="shortcut-nav-items">
            <ul>
                <li><a href="#">服装城</a></li>
                <li><a href="#">美妆馆</a></li>
                <li><a href="#">京东超市</a></li>
                <li><a href="#">生鲜</a></li>
                <li><a href="#">全球购</a></li>
                <li><a href="#">闪购</a></li>
                <li><a href="#">团购</a></li>
                <li><a href="#">拍卖</a></li>
                <li><a href="#">金融</a></li>
            </ul>
        </div>
        <div class="shortcut-nav-img">
            <a href="#">
                <img src="images/img2.jpg"/>
            </a>
        </div>
    </div>
</div>
<!--shortcut-nav部分end-->
```

css代码如下：

```css
/*shortcut-nav部分start*/
.shortcut-nav {
    height: 44px;
    border-bottom: 2px solid #B1191A;
}
.shortcut-nav-menu {     /*撑开和撑破是两回事：撑开说明盒子变成那么大，撑破盒子还是那么大，子盒子很大。子盒子shortcut-nav-menu-one把父亲撑破了*/
    width: 210px;
    height: 44px;        /*浮动的盒子相互影响，不过是否在同一个盒子中*/
    float: left;
    position: relative;
    z-index: 1;       /*通过z-index属性将层级放到最高*/
}
.shortcut-nav-menu-all a {
    display: block;
    width: 190px;
    height: 44px;
    color: white;
    padding: 0 10px;
    background-color: #B1191A;
    font: 400 15px/44px "microsoft yahei";
}
.shortcut-nav-menu-one {
    height: 465px;
    margin-top: 2px;
    background-color: #C81623;
    border-left: 1px solid #B1191A;
    border-bottom: 1px solid #B1191A;
    /*border-left: 1px solid #000;*/
    /*border-bottom: 1px solid #000;*/
}
.shortcut-nav-items {
    width: 730px;
    height: 44px;
    float: left;
}
.shortcut-nav-items li {
    float: left;
}
.shortcut-nav-items a {
    display: inline-block;
    height: 44px;
    padding: 0 20px;
    color: #333;
    font: 400 16px/44px "microsoft yahei";
}
.shortcut-nav-items a:hover {
    color: #C81623;
}
.shortcut-nav-img {
    width: 200px;
    height: 44px;
    float: right;
    margin-top: -10px;
    margin-right: 50px;
    /*position: relative;*/
    /*left: -50px;*/
    /*top: -10px;*/
}
/*shortcut-nav部分end*/
```


## 具体的商品分类

商品的具体分类即`shortcut-nav-menu-one`部分，我们来实现这部分的代码。要求实现的效果如下：

![](http://img.smyhvae.com/20180123_1510.gif)

我们在上面的代码中已经给`shortcut-nav-menu-one`设置了一些属性（例如给左边和下边增加一个像素的红色边框），在此基础之上，需要新增的代码如下：

html代码：

```html
            <!--具体的商品分类start-->
            <div class="shortcut-nav-menu-one" style="color: #fff">
                <ul>
                    <li>
                        <a href="">家用电器</a>
                        <i>></i>
                    </li>
                    <li>
                        <a href="">手机</a>
                        <span>、</span>
                        <a href="">数码</a>
                        <i>></i>
                    </li>
                    <li>
                        <a href="">电脑</a>
                        <span>、</span>
                        <a href="">办公</a>
                        <i>></i>

                    </li>
                    <li>
                        <a href="">家居</a>
                        <span>、</span>
                        <a href="">家具</a>
                        <i>></i>
                    </li>
                    <li>
                        <a href="">男装</a>
                        <span>、</span>
                        <a href="">女装</a>
                        <i>></i>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <!--具体的商品分类end-->
```

css部分如下：

```css
/*具体的商品分类start*/
.shortcut-nav-menu-one ul {
    font: 400 14px/31px "microsoft yahei";   /*字体属性具有继承性，让儿子 a 具有此继承性*/
}
.shortcut-nav-menu-one li {
    padding-left: 10px;
    position: relative;
}

.shortcut-nav-menu-one a{
    color: #fff;
}

.shortcut-nav-menu-one i {
    right: 10px;
    position: absolute;
}

.shortcut-nav-menu-one li:hover {
    background-color: #fff;
}

.shortcut-nav-menu-one li:hover a,span,i{
    color: #C81623;
}
/*具体的商品分类end*/
```


## 轮播图slider + 京东快报

接下来，我们要实现下面这个部分：

![](http://img.smyhvae.com/20180123_1527.png)

组成部分包括：左侧的轮播图、右侧的京东快报 & 充话费 & 右下角的小海报。

结构如下：

```html
<!--main部分start-->
<div class="main">
    <div class="w">
        <div class="main-slider">

        </div>
        <div class="main-news">
            <div class="main-news-top">    <!--京东快报+充话费-->
                <div class="main-news-top-faster">   <!--京东快报-->

                </div>
                <div class="main-news-top-money">    <!--充话费-->

                </div>

            </div>
            <div class="main-news-bottom">

            </div>
        </div>
    </div>
</div>
<!--main部分end-->
```

我们依次来讲解。

### 1、轮播图：main-slider

首页的banner图是首页独有的，所以这部分的css代码要写在index.css里，不要写在base.css里。

html代码如下：

```html

<!--main部分start-->
<div class="main">
    <div class="w">
        <div class="main-slider">
            <a href="">
                <img src="images/slider.jpg" alt="">
            </a>

            <ul>            <!--指示点-->
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
            <a href="javascript:;" class="arrow-left">&lt;</a>   <!--左边的箭头-->
            <a href="javascript:;" class="arrow-right">&gt;</a>  <!--右边的箭头-->
        </div>
    </div>
</div>
<!--main部分end-->

```

注意：超链接 a 标签中，`href="javascript:;`表示点击超链接时，什么都不做。

CSS代码如下：

```css
.main-slider {
    float: left;
    margin: 12px 0 0 220px;
    width: 730px;
    height: 454px;
    position: relative;
}

.main-slider ul {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -66px;
}

.main-slider ul li {
    float: left;
    width: 18px;
    height: 18px;
    color: #fff;
    background-color: #3E3E3E;
    border-radius: 50%;   /*圆角矩形*/
    line-height: 18px;
    text-align: center;  /*让 li 里面的文本水平方向居中*/
    margin: 0 2px;
    cursor: pointer;   /*鼠标悬停时变成小手*/
}

.main-slider .arrow-left {  /* 轮播图左侧的箭头*/
    position: absolute;
    top: 50%;
    margin-top: -31px;
    left: 0px;
    width: 28px;
    height: 62px;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    font: 400 22px/62px "sumsun";
    text-align: center;
    border-radius: 10px 0 0 10px;
}

.main-slider .arrow-left:hover {
    background-color: rgba(0,0,0,0.7);
}

.main-slider .arrow-right {  /*轮播图右侧的箭头*/
    position: absolute;
    top: 50%;
    margin-top: -31px;
    right: 0px;
    width: 28px;
    height: 62px;
    background-color: pink;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    font: 400 22px/62px "sumsun";
    text-align: center;
    border-radius: 10px 0 0 10px;
}

.main-slider .arrow-right:hover {
    background-color: rgba(0,0,0,0.7);
}

```

代码解释如下；

（1）轮播图，我们采取的方式是：在超链接 a 里面放一个img标签。

（2）指示点：在一个ul中放多个li。然后通过绝对定位的方式，让ul放在轮播图的正中间（水平方向）。最后详细设置每个指示点li的属性（比如，`text-align: center`属性可以让li里面的文字水平居中）。

（3）左右两边的箭头：鼠标悬停时，颜色不同。我们通过`background-color: rgba(0,0,0,0.3)`设置背景的透明度。

最终实现的效果如下：

![](http://img.smyhvae.com/20180123_1951.png)

### 京东快报

html代码如下：

```html
                <div class="main-news-top-faster">   <!--京东快报-->
                    <div class="main-news-top-faster-title">
                        <h2>京东快报</h2>
                        <a href="#">更多 ></a>
                    </div>
                    <div class="main-news-top-faster-content">
                        <ul>
                            <li><span>[特惠]</span>新闻1</li>
                            <li><span>[公告]</span>新闻2</li>
                            <li><span>[特惠]</span>新闻3</li>
                            <li><span>[公告]</span>新闻4</li>
                            <li><span>[特惠]</span>新闻5</li>
                        </ul>

                    </div>
                </div>

```

css代码如下；

```css
.main-news-top-faster {
    height: 163px;
    border-bottom: 1px dashed #E4E4E4;    /*虚线*/
}


.main-news-top-faster-title {
    height: 32px;
    line-height: 32px;
    border-bottom: 1px dotted #E8E8E8;   /*点线*/
    padding: 0 15px;

}

.main-news-top-faster-title h2{
    float: left;
    font: 400 16px/32px "microsoft yahei";
}

.main-news-top-faster-title a {
    float: right;
}

.main-news-top-faster-content {
    padding: 5px 0 0 15px;

}

.main-news-top-faster-content li {
    line-height: 24px;
}

.main-news-top-faster-content span {
    font-weight: 700;
    margin-right: 5px;
    color: #666;
}

.main-news-top-money ul {
    width: 250px;
}

```


### 3、充话费部分：12个单元格（重要）

**（1）步骤一：**画表格

充话费这部分，我们不用table标签来做，一般table标签一般是用来放文字的。这里因为有图片，所以我们用ul标签来做，在ul里放12个浮动的li。

如果我们直接这样进行设置：

```css
.main-news-top-money ul {
    width: 250px;
}

.main-news-top-money li {
    width: 62px;
    height: 70px;
    border: 1px solid #E8E8E8;
    float: left;

}
```

会发现，效果不尽人意：

![](http://img.smyhvae.com/20180123_2202.png)

上图所示，我们发现，红框部分的12个li，并没有按照我们预期的那样进行排列。因为每个li有border。真实的li当中，它们的border是有重叠的。

解决办法：

> 父亲宽度不够时，为了让盒子浮动不掉下去，可以给子盒子之上父盒子之下再给一个盒子，让它的宽度略大于父亲的宽度即可。

比如这里，**本身这个区域整体的宽度是250，我们就设置ul的宽度是260px即可（**满足的条件是：li的宽度*4 < **ul的宽度** < li的宽度*5）。

ul的宽度设置为260px之后发现，最右边和最下面的部分会多出来：

![](http://img.smyhvae.com/20180123_2207.png)

我们可以给`main-news-top-money`设置`overflow: hidden`，将多余的部分切掉（这是没有办法的事情）。

于是乎，充话费这部分的代码如下：

html部分：

```html
                <div class="main-news-top-money">    <!--充话费-->
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
```

css部分：

```css
.main-news-top-money ul {
    width: 260px;   /*让宽度略大于整体的宽度250px*/
}

.main-news-top-money li {
    width: 62px;
    height: 70px;
    border: 1px solid #E8E8E8;
    float: left;
    border-top: 0;  /* 将每个单元格的上边框去掉，因为跟单元格的下边框重合了。*/
    margin-top: -1px;  /* 整体向上移动一个单位，因为边框重合了*/
    margin-left: -1px ;/* 整体向左移动一个单位，因为边框重合了*/
}
```

这样的话，表格就画好了：

![](http://img.smyhvae.com/20180123_2240.png)

**（2）步骤二：**往表格里填充内容

接下来，我们往表格里填充内容。最终，充话费部分的代码如下：

html部分：

```html
               <div class="main-news-top-money">    <!--充话费-->
                    <ul>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="main-news-top-money-icon2"></i>   <!--单元格里的图片-->
                                <span>机票</span>
                            </a>

                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                    </ul>
                </div>
```

index.css部分：

```css
/*充话费部分start*/
.main-news-top-money {
    overflow: hidden;   /*将多余的部分切掉*/
}

.main-news-top-money ul {
    width: 260px;   /*让宽度略大于整体的宽度250px*/
}

.main-news-top-money li {
    width: 62px;
    height: 70px;
    border: 1px solid #E8E8E8;
    float: left;
    border-top: 0;  /* 将每个单元格的上边框去掉，因为跟单元格的下边框重合了。*/
    margin-top: -1px;  /* 整体向上移动一个单位，因为边框重合了*/
    margin-left: -1px ;/* 整体向左移动一个单位，因为边框重合了*/
}

.main-news-top-money li a {
    display: block;
    width: 62px;
    height: 30px;
    padding-top: 40px;
    text-align: center;
    line-height: 30px;
    position: relative;
}

.main-news-top-money li a i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 13px;
    left: 18px;
    background: url("../images/fly.png") right top;
}

.main-news-top-money .main-news-top-money-icon2 {
    background: url("../images/fly.png") right -25px;
}
/*充话费部分end*/
```

代码解释：

- 单元格里的文字：我们可以给单元格里的文字设置padding-top，保证文字位于单元格的底部。

- 单元格里的图片（精灵图）的位置：通过子绝父相的方式（子是图片`<i>`本身，相是每个单元格里的超链接文字`<a>`）。通过子绝父相的方式定位之后，发现精灵图都是一样的图标，目前的处理办法是：手动添加不同的class进行修改精灵图，以后等我们学习js了，就不用这么麻烦了。

画出的表格如下：

![](http://img.smyhvae.com/20180124_1121.png)


## 今日推荐

接下来，我们开始做下面这部分：

![](http://img.smyhvae.com/20180124_1434.png)

上图中的“今日推荐”，标签可以这样布局：ul > li > a > img

为了防止这部分的内容跑到上面去，我们可以给上面的`class-main`部分清除浮动。

“今日推荐”这部分的代码如下。

html代码如下：

```html
<!--今日推荐start-->
<div class="today">
    <div class="w clearfix">
        <div class="today-left fl">
            <a href=""></a>
        </div>

        <div class="today-right">
            <ul>
                <li><a href=""><img src="images/today1.jpg" alt=""></a></li>
                <li><a href=""><img src="images/today2.jpg" alt=""></a></li>
                <li><a href=""><img src="images/today3.jpg" alt=""></a></li>
                <li><a href=""><img src="images/today4.jpg" alt=""></a></li>
            </ul>
            <a href="javascript:;" class="arrow-left">&lt;</a>   <!--左边的箭头-->
            <a href="javascript:;" class="arrow-right">&gt;</a>  <!--右边的箭头-->

        </div>

    </div>
</div>
<!--今日推荐end-->
```

index.css中的代码如下；

```css
/*今日推荐start*/
.today {
    padding: 10px 0 20px;
}

.today-left a{
    display: block;
    width: 210px;
    height: 150px;
    background: url("../images/today.jpg");
}

.today-right {
    float: right;
    width: 1000px;
    overflow: hidden;  /*隐藏掉右侧超出的几个像素*/
    position: relative;
}

.today-right ul {
    width: 410%;   /*这一点很有技巧*/
}

.today-right li{
    float: left;
    margin-right: 1px;

}
/*今日推荐end*/
```


## banner两侧的广告

要实现的内容是下图中的箭头处：

![](http://img.smyhvae.com/20180124_1615.png)


注意这部分的div的位置，是放在`class="shortcut-nav"`和`class="main"`之间的。

两侧的广告其实是一个放在 a 标签里的超大背景图，而且这个大图的宽度超过了版心。所以，超链接的宽度给`width: 100%`更合适。a 的高度设置为图片的高度即可。

代码实现如下：

html:

```html
<!--网页两侧的广告start-->
<div class="banner-ad">
    <a href="http://www.baidu.com"></a>
</div>
<!--网页两侧的广告end-->
```

index.css:

```css
/*banner两侧的广告start*/
.banner-ad {
    position: relative;
}

.banner-ad a {
    width: 100%;
    height: 644px;
    background: url("../images/ad.png") no-repeat center top;
    position: absolute;
}
/*banner两侧的广告end*/
```

上方代码中，我们不用给图片的父亲`banner-ad`设置高度。

超链接a ：我们不知道超链接的宽度是多少，所以直接设置为`width: 100%`。注意它的背景图的摆放位置，`center`确保了背景图位于水平方向的正中间，`top`确保了背景图和父亲定边对齐。




注意，上图中，两侧的广告实现之后发现，蓝框部分的两个位置(`main-news-top-faster`和`today-left`)点击时，发现跳转的是两侧广告的链接，因为它们的层级不够高。解决办法：给蓝框这两个部分加一个`position: relative`属性即可提高层级。

## 总结

上一篇文章和这一篇文章，加起来，最终实现的效果如下：

![](http://img.smyhvae.com/20180124_1607.png)

工程文件如下：

- [2018-01-23-前端基础练习-JD顶部导航.rar](http://download.csdn.net/download/smyhvae/10222155)


