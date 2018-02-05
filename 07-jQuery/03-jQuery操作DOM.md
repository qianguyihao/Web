


## 文本主要内容

- 样式和类操作

- jQuery 动画

- 节点操作


## 样式操作和类操作

作用：设置或获取元素的样式属性值。

### 样式操作

**1、设置样式：**

```javascript

    //设置单个样式：  css(属性，值);
    $("div").css("background-color","red");

    //设置多个样式：  css(json);
	 $("div").css({"width":100,"height":100,"background-color":"pink"});



```


**2、获取样式：**

```javascript
    //获取样式：css(属性);
    //获取的时候如果有很多个，那么获取jquery对象中的第一个
    alert($("div").css("width"));
```

举例如下：

20180205_1315.png

### 类操作（className）

**1、添加类样式：**

```javascript
	$(selector).addClass("liItem");  //为指定元素添加类className
```

注意：此处类名不带点，所有类操作的方法类名都不带点。


**2、移除类样式：**


```javascript
	$(selector).removeClass("liItem");  //为指定元素移除类 className
	$(selector).removeClass();          //不指定参数，表示移除被选中元素的所有类
```

**3、判断有没有类样式：**

```javascript
	$(selector).hasClass("liItem");   //判断指定元素是否包含类 className
```

此时，会返回true或false。jquery对象中，只要有一个带有指定类名的就是true，所有都不带才是false。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .current {
            background-color: red;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $("button").eq(0).click(function () {
                //添加类
                $("div").addClass("current");
                //判断类
                alert($("div").hasClass("current"));
            });

            $("button").eq(1).click(function () {
                //删除类
                $("div").removeClass("current");
                //判断类
                alert($("div").hasClass("current"));
            });
            //alert($("div").hasClass("current"));//jquery对象中只要有一个带有类名的就是true，所有都不带才是false。
        })
    </script>
</head>
<body>
<button>添加</button>
<button>删除</button>
<div></div>
<div></div>
<div></div>
<div class="current"></div>
</body>
</html>

```

**4、切换类样式：**

```javascript
$(selector).toggleClass(“liItem”);    //为指定元素切换类 className，该元素有类则移除，没有指定类则添加。
```

解释：为指定元素切换类 className，该元素有类则移除，没有指定类则添加。

如果采用采用正常的思路实现上面这句话，代码是：


```javascript
   if($("div").hasClass("current")){
       //如果有类名，那么删除
       $("div").removeClass("current")
   }else{
       //如果没有类名，那么添加
       $("div").addClass("current")
   }
```

现在有了toggleClass()方法，一行代码即可实现。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: green;
        }
        .current {
            background-color: red;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $("button").click(function () {
                //需求：点击按钮 ，切换背景
                //切换类（toggleCLass）
                $("div").toggleClass("current");
            });
        })
    </script>
</head>
<body>
<button>切换背景</button>
<div></div>
</body>
</html>
```

实现的效果：

20180205_1330.gif


### 样式操作和类操作的比较

- 操作的样式非常少，那么可以通过`.css()`实现。

- 操作的样式很多，建议通过使用类 class 的方式来操作。

- 如果考虑以后维护方便（把CSS从js中分离出来）的话，推荐使用类的方式来操作。


**举例**：addClass+removeClass

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrapper {
            width: 1000px;
            height: 475px;
            margin: 0 auto;
            margin-top: 100px;
        }

        .tab {
            border: 1px solid #ddd;
            border-bottom: 0;
            height: 36px;
            width: 320px;
        }

        .tab li {
            position: relative;
            float: left;
            width: 80px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            cursor: pointer;
            border-top: 4px solid #fff;
        }

        .tab span {
            position: absolute;
            right: 0;
            top: 10px;
            background: #ddd;
            width: 1px;
            height: 14px;
            overflow: hidden;
        }

        .products {
            width: 1002px;
            border: 1px solid #ddd;
            height: 476px;
        }

        .products .main {
            float: left;
            display: none;
        }

        .products .main.selected {
            display: block;
        }

        .tab li.active {
            border-color: red;
            border-bottom: 0;
        }

    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(window).ready(function () {
            //需求:鼠标放到那个li上，让该li添加active类，下面的对应的.main的div添加selected
            $(".tab>li").mouseenter(function () {
                //不用判断，当前的li添加active类，其他的删除active类
                $(this).addClass("active").siblings("li").removeClass("active");
                //对应索引值的div添加selected类，其他的删除selected类
                //【重要】根据tab的索引值获取下方图片div的索引值
                $(".products>div").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
            });
        });
    </script>
</head>
<body>
<div class="wrapper">
    <ul class="tab">
        <li class="tab-item active">国际大牌<span>◆</span></li>
        <li class="tab-item">国妆名牌<span>◆</span></li>
        <li class="tab-item">清洁用品<span>◆</span></li>
        <li class="tab-item">男士精品</li>
    </ul>
    <div class="products">
        <div class="main selected">
            <a href="###"><img src="images/guojidapai.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/guozhuangmingpin.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/qingjieyongpin.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/nanshijingpin.jpg" alt=""/></a>
        </div>
    </div>
</div>

</body>
</html>

```


上方代码中，我们注意，tab栏和下方图片栏的index值，一一对应，这里用得很巧妙。

效果：

20180205_1345.gif



```javascript


```






```html


```




```javascript


```








```html


```




```javascript


```








```html


```




```javascript


```






```

```


