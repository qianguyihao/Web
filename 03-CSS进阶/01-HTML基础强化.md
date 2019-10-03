
## 本文主要内容

- html 常见元素和理解

- html版本

- html 元素分类

- html 元素嵌套关系

- html 元素默认样式和定制化

- html 常见面试题


## html的 常见元素

html 的常见元素主要分为两类：head 区域的元素、body 区域的元素。下面来分别介绍。


### 1、head 区域的 html 元素

> head 区域的 html 元素，不会在页面上留下直接的内容。

- meta

- title

- style

- link

- script

- base

**base**：

```html
<base href="/">
```

base 标签用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准。

### 2、html 元素（body 区域）

> body 区域的 html 元素，会直接出现在页面上。

- div、section、article、aside、header、footer

- p

- span、em、strong

- 表格元素：table、thead、tbody、tr、td

- 列表元素：ul、ol、dl、dt、dd

- a

- 表单元素：form、input、select、textarea、button

div 是最常见的元素，大多数场景下，都可以用div（实在不行就多包几层div）。可见，**div 是比较通用的元素，这也决定了 div 的的语义并不是很明确**。

**常见标签的重要属性**：

- a[href,target]

- img[src,alt]

- table td[colspan,rowspan]。设置当前单元格占据几行几列。在合并单元格时，会用到。

- form[target,method,enctype]
- input[type,value]
- button[type]
- selection>option[value]
- label[for]



