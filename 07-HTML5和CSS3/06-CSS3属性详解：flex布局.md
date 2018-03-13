


## 多列布局


类似报纸或杂志中的排版方式，上要用以控制大篇幅文本。用得不多。

格式举例：

```css
    .wrapper{
        /* 分成几列 */
        -webkit-column-count: 3;

        /* 每列之间，用分割线隔开 */
        -webkit-column-rule: 1px dashed red;

        /* 设置列之间的间距 */
        -webkit-column-gap: 60px;

        /* 设置每一列的宽度 */
        /* -webkit-column-width: 400px; */

        /*-webkit- -moz-  -ms- -o-*/
    }

    h4{
        /* 设置跨列：让h4这标题位于整个文本的标题，而不是处在某一列之中*/
        -webkit-column-span: all;
        text-align: center;
    }
```


备注：上面这几个属性涉及到兼容性问题，需要加私有前缀。


## flex：伸缩布局

CSS3在布局方面做了非常大的改进，使得我们对**块级元素**的布局排列变得十分灵活，适应性非常强。其强大的伸缩性，在响应式开中可以发挥极大的作用。


![](http://img.smyhvae.com/20180219_2035.png)

如上图所示，有几个概念需要了解一下：

- 主轴：Flex容器的主轴主要用来配置Flex项目，默认是水平方向，从左向右。

- 侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向，从上往下。

PS：主轴和侧轴并不是固定不变的，通过flex-direction可以互换。


### 设置伸缩布局的步骤

（1）指定一个盒子为伸缩布局：

```javascript
    display: flex;
```

（2）设置 `flex-direction` 属性来调整此盒的子元素的布局方式。默认的方向是水平方向。

（3）可互换主侧轴，也可改变主侧轴的方向。


### 各属性详解

**1、`flex-direction`属性：**设置主轴方向。

- `flex-direction: row;` 设置**主轴方向**，默认是水平方向。属性值可以是：
    - `row` 水平方向（默认值）
    - `reverse-row` 反转
    - `column` 垂直方向
    - `reverse-column` 反转列


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
       body{
           background-color: #eee;
           font-family: "Microsoft Yahei";
           font-size:22px;
       }

        h3{
            font-weight: normal;
        }
        section{
            width: 1000px;

            margin:40px auto;
        }

        ul{
            background-color: #fff;
            border: 1px solid #ccc;

        }

        ul li{
            width: 200px;
            height: 200px;
            background-color: pink;
            margin:10px;
        }
        section:nth-child(1) ul{
            overflow: hidden; /* 清除浮动 */
        }
        section:nth-child(1) ul li{
            float: left;
        }
        /* 设置伸缩盒子*/
        section:nth-child(2) ul{
            display: flex;
        }

        section:nth-child(3) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向*/
            flex-direction: row;
        }

        section:nth-child(4) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :水平翻转*/
            flex-direction: row-reverse;
        }

        section:nth-child(5) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :垂直*/
            flex-direction: column;
        }

        section:nth-child(6) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :垂直*/
            flex-direction: column-reverse;
        }
    </style>
</head>
<body>
    <section>
        <h3>传统布局</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>伸缩布局 display:flex</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:row</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:row-reverse</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:column</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:column-reverse</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>
</body>
</html>
```


**2、justify-content：**设置子元素在**主轴上的对齐方式**。


- `justify-content: flex-start;` 设置子元素在**主轴上的对齐方式**。属性值可以是：
    - `flex-start` 从主轴的起点对齐（默认值）
    - `flex-end` 从主轴的终点对齐
    - `center` 居中对齐
    - `space-around` 在父盒子里平分
    - `space-between` 两端对齐 平分


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;}
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul{
            /* 主轴对齐方式：从主轴开始的方向对齐*/
            justify-content: flex-start;
        }

        section:nth-child(2) ul{
            /* 主轴对齐方式：从主轴结束的方向对齐*/
            justify-content: flex-end;
        }

        section:nth-child(3) ul{
            /* 主轴对齐方式：居中对齐*/
            justify-content: center;
        }

        section:nth-child(4) ul{
            /* 主轴对齐方式：在父盒子中平分*/
            justify-content: space-around;

           }

        section:nth-child(5) ul{
            /* 主轴对齐方式：两端对齐 平分*/
            justify-content: space-between;
        }
    </style>
</head>
<body>
    <section>
        <h3>主轴的对齐方式：justify-content:flex-start</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:flex-end</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:center</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:space-round</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:space-bettwen</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </section>
</body>
</html>
```


**3、align-items：**设置子元素在**侧轴上的对齐方式**。


- `align-items:flex-start;` 设置子元素在**侧轴上的对齐方式**。属性值可以是：
    - `flex-start` 从侧轴开始的方向对齐
    - `flex-end` 从侧轴结束的方向对齐
    - `baseline` 基线 默认同flex-start
    - `center` 中间对齐
    - `stretch` 拉伸


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;
        }
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;
            height:500px;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul{
            /* 侧轴对齐方式 ：从侧轴开始的方向对齐*/
            align-items:flex-start;
        }

        section:nth-child(2) ul{
            /* 侧轴对齐方式 ：从侧轴结束的方向对齐*/
            align-items:flex-end;
        }

        section:nth-child(3) ul{
            /* 侧轴对齐方式 ：居中*/
            align-items:center;
        }

        section:nth-child(4) ul{
            /* 侧轴对齐方式 ：基线 默认同flex-start*/
            align-items:baseline;
        }

        section:nth-child(5) ul{
            /* 侧轴对齐方式 ：拉伸*/
            align-items:stretch;

        }

        section:nth-child(5) ul li{
            height:auto;
        }


    </style>
</head>
<body>
<section>
    <h3>侧轴的对齐方式:align-items ：flex-start</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-items:flex-end</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-items:center</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-itmes:baseline</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-itmes: stretch</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>
</body>
</html>
```


**4、`flex`属性**：设置子盒子的权重

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;
        }
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul li:nth-child(1){
            flex:1;
        }

        section:nth-child(1) ul li:nth-child(2){
            flex:1;
        }

        section:nth-child(1) ul li:nth-child(3){
            flex:8;
        }

        section:nth-child(2) ul li:nth-child(1){

        }

        section:nth-child(2) ul li:nth-child(2){
            flex:1;
        }

        section:nth-child(2) ul li:nth-child(3){
           flex:4;
        }


    </style>
</head>
<body>
<section>
    <h3>伸缩比例:flex</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>伸缩比例:flex</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>


</body>
</html>
```




















