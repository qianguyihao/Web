
## 常见问题

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

### 说一下CSS盒模型

可以参考本人的另外一篇文章：《02-CSS基础/06-CSS盒模型详解》。

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


### 选择器的优先级如何确定

- 选择器越具体，优先级越高。 #xxx 大于 .yyy

- 同样优先级，写在后面的覆盖前面的。

- color: red !important; 优先级最高。


### BFC 是什么


overflow:hidden ：取消父子 margin 合并。 （另一种推荐做法：`padding-top: 0.1px;`）


### 如何清除浮动

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

### 伪类和伪元素的区别是什么？

概念上的区别：

- 伪类表示一种状态

- 伪元素是真的有元素。比如 ::after 是真的有元素，可以在页面上显示内容。

使用上的区别：

- 伪类：使用单冒号

- 伪元素：使用双冒号

## 参考链接

- [互联网公司招聘启事的正确阅读方式](https://zhuanlan.zhihu.com/p/33998813)


