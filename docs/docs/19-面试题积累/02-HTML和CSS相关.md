




## HTML 相关


### 你是如何理解 HTML 语义化的？


**语义化**：指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化）。


**举例**：段落用 p，边栏用 aside，主要内容用 main 标签。


**好处：**

- 便于开发者阅读和维护

- 有利于SEO：让浏览器的爬虫和辅助技术更好的解析，


**语义化标签介绍**：

在HTML5出来之前，我们习惯于用div来表示页面的章节或者不同模块，但是`div`本身是没有语义的。但是现在，HTML5中加入了一些语义化标签，来更清晰的表达文档结构。

20180322_1120.jpg



参考链接：

- [初探 · HTML5语义化](https://zhuanlan.zhihu.com/p/32570423)


### meta viewport 是做什么用的，怎么写？



```html
 	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

控制页面在移动端不要缩小显示。


### canvas 元素是干什么的？

看 MDN 的 [canvas 入门手册](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)。




## 说一下CSS盒模型

可以参考本人的另外一篇文章：[CSS盒模型及BFC](https://github.com/smyhvae/Web/blob/master/18/02-CSS%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%8F%8ABFC.md)



### css reset 和 Normalize.css 有什么区别

> 此题考英文。

二者都是用来**统一**浏览器的默认样式：

- reset：重置。相对「暴力」，不管你有没有用，统统重置成一样的效果，且影响的范围很大，讲求跨浏览器的一致性。（一刀切）

- `Normalize.css` ：标准化。相对「平和」，注重通用的方案，重置掉该重置的样式，保留有用的 user agent 样式，同时进行一些 bug 的修复，这点是 reset 所缺乏的。（去伪存真）

参考链接：

- [Normalize.css 与传统的 CSS Reset 有哪些区别？](https://p.baidu.com/question/ab496162636234613761335c00)

- [CSS3初始化代码Normalize.css中文版](http://www.bbsxiaomi.com/html_css/html5_css3/177.html)

- [谈谈一些有趣的 CSS 话题](https://github.com/chokcoco/iCSS)

- [前端面试之CSS总结(上)](https://segmentfault.com/a/1190000006890725)


## 如何居中（必考）


### 水平居中

1、**行内元素：**（文字、图片等水平居中）

给父亲设置：


```
    text-align: center;

```

另外，**让文字的行高 等于 盒子的高度**，可以让单行文本垂直居中。


2、**块级元素：**（让标准流中的盒子水平居中）

给元素设置：（让当前元素在父亲里剧中）

```
	//方式一
 	margin: auto;

	方式二
	margin: 0 auto;
```

上面的代码， `margin: auto`相当于`margin: auto auto auto auto`。`margin: 0 auto`相当于`margin: 0 auto 0 auto`，四个值分别对应上右下左。

- 垂直方向：根据规范，margin-top: auto 和 margin-bottom: auto，其计算值为0。

- 水平方向：水平方向的 auto，其计算值取决于可用空间（**剩余空间**）。

参考链接：<https://www.zhihu.com/question/21644198/answer/22392394>

### 垂直居中/水平居中（元素的高度已知）

方法：绝对定位 + margin-top

如果盒子是绝对定位的，此时已经脱标了，`margin:auto`无效。如果还想让其居中（位于父亲的正中间），可以这样做：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>


        .parent {
            height: 300px; /*高度已知*/
            position: relative;
            border: 1px solid red;
        }

        .child {
            width: 200px;
            height: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -150px;
            margin-top: -50px;
            border: 1px solid green;
        }
    </style>
</head>

<body>

<div class="parent">
    <div class="child">
        一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字
    </div>
</div>

</body>
</html>
```

如上方代码所示，我们先让这个高度为100px的盒子，上边线居中，然后向上移动宽度的一半(50px)，就达到了垂直居中的效果。水平居中的原理类似。

效果：

20180322_1843.png

### 垂直居中/水平居中（元素的高度未知）

**方法1：**模拟表格法

将父元素设置为display:table，然后将子元素也（就是要垂直居中显示的元素）设置为display:table-cell，然后加上vertical-align:middle来实现。

html代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>


        .parent {
            display: table;
            width: 300px;
            height: 300px;
            border: 10px solid pink;

        }

        .child {
            display: table-cell;
            vertical-align: middle; /*来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。*/
            height: 200px; /*此处的宽高设置无效*/
            width: 200px;
            border: 10px solid blue;
        }

        /*实现的效果：让单元格(.child)里的内容(.content)垂直居中*/
        .content {
            width: 100px;
            height: 100px;
            border: 10px solid green;

        }
    </style>
</head>

<body>

<div class="parent">
    <div class="child">
        <div class="content">
            <p>测试垂直居中效果测试垂直居中效果测试垂直居中效果测试垂直居中效果</p>
        </div>
    </div>
</div>

</body>
</html>

```




效果：

20180322_1833.png

**方式二：**绝对定位 +  `margin:auto`

```css
.element {
    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
}
```


代码两个关键点：

- 上下左右均0位置定位；

- margin: auto





**方式三：**用绝对定位 +  translate 位移来做

```css
    div {
        background-color: red;
        position: absolute;       绝对定位的盒子
        top: 50%;               首先，让上边线居中
        transform: translateY(-50%);    然后，利用translate，往上走自己宽度的一半【推荐写法】
    }
```


**方式四：**flex 布局

```css
    .parent{
        display: flex;/*Flex布局*/
        display: -webkit-flex; /* Safari */
        align-items: center;/*设置子元素在侧轴方向上的布局*/
    }
```


参考链接：

- [七种方式实现垂直居中](https://jscode.me/t/topic/1936)

- [margin:auto实现绝对定位元素的水平垂直居中](http://www.zhangxinxu.com/wordpress/2013/11/margin-auto-absolute-%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D-%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD/)


## 选择器的优先级如何确定

- 选择器越具体，优先级越高。 #xxx 大于 .yyy

- 同样优先级，写在后面的覆盖前面的。

- color: red !important; 优先级最高。


## BFC 是什么


overflow:hidden ：取消父子 margin 合并。 （另一种推荐做法：`padding-top: 0.1px;`）


## 如何清除浮动

（1）overflow: hidden

（2）.clearfix 清除浮动写在爸爸身上

```css
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    /* 兼容 IE */
    .clearfix {
        zoom: 1;
    }
```



## 参考链接

- [互联网公司招聘启事的正确阅读方式](https://zhuanlan.zhihu.com/p/33998813)


