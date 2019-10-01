

## jQuery 设置宽度和高度

宽度操作：

```javascript
	$(selector).height();     //不带参数表示获取高度
	$(selector).height(200);  //带参数表示设置高度
```


宽度操作：


```javascript
	$(selector).width();     //不带参数表示获取宽度
	$(selector).width(200);  //带参数表示设置高宽度
```

**问题**：jQuery的css()获取高度，和jQuery的height获取高度，二者的区别？

答案：


```javascript
	$("div").css();     //返回的是string类型，例如：30px

	$("div").height();  //返回得失number类型，例如：30。常用于数学计算。
```

如上方代码所示，`$("div").height();`返回的是number类型，常用于数学计算。


## jQuery 的坐标操作

### offset()方法


```javascript
	$(selector).offset();
	$(selector).offset({left:100, top: 150});
```

作用：获取或设置元素相对于 document 文档的位置。参数解释：

- 无参数：表示获取。返回值为：{left:num, top:num}。返回值是相对于document的位置。

- 有参数：表示设置。参数建议使用 number 数值类型。

注意：设置offset后，如果元素没有定位(默认值：static)，则被修改为relative。

### position()方法

```javascript
	$(selector).position();
```

作用：获取相对于其最近的**带有定位**的父元素的位置。返回值为对象：`{left:num, top:num}`。

注意：只能获取，不能设置。

### scrollTop()方法

```javascript
	scrollTop();
	$(selector).scrollTop(100);
```

作用：获取或者设置元素被卷去的头部的距离。参数解释：

- 无参数：表示获取偏移。

- 有参数：表示设置偏移，参数为数值类型。


### scrollLeft()方法

```javascript
	scrollLeft();
	$(selector).scrollLeft(100);
```

作用：获取或者设置元素水平方向滚动的位置。参数解释：

- 无参数：表示获取偏移。

- 有参数：表示设置偏移，参数为数值类型。

代码示范：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            height: 5000px;
        }

        .box1 {
            width: 300px;
            height: 300px;
            position: relative;
            margin: 10px;
            overflow: auto;
            background-color: pink;
        }

        .box2 {
            width: 200px;
            height: 400px;
            position: absolute;
            top: 50px;
            left: 50px;
            background-color: yellow;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //距离页面最顶端或者最左侧的距离和有没有定位没有关系
            $("button").eq(0).click(function () {
                alert($(".box2").offset().top);
            })

            //距离页面最顶端或者最左侧的距离和有没有定位没有关系
            $("button").eq(1).click(function () {
                $(".box2").offset({"left": 1000, "top": 1000});
            })

            //距离父系盒子中带有定位的盒子的距离(获取的就是定位值，和margin/padding无关)
            $("button").eq(2).click(function () {
                alert($(".box2").position().top);
            })

            //距离父系盒子中带有定位的盒子的距离(获取的就是定位值，和margin/padding无关)
            $("button").eq(3).click(function () {
                $(".box2").position().top = "100px";
            })

            //获取被选取的头部
            $("button").eq(4).click(function () {
                alert($(window).scrollTop());
            })

            //获取被选取的头部
            $("button").eq(5).click(function () {
                $(window).scrollTop(100);
            })

        })
    </script>

</head>
<body>


<div class="box1">
    <div class="box2"></div>
</div>

<button>offset().top获取</button>
<button>offset().top设置</button>
<button>position().top获取</button>
<button>position().top设置</button>
<button>scrollTop()</button>
<button>scrollTop()</button>

</body>
</html>
```

## jQuery的事件机制

### 常见的事件绑定

- click(handler) 				单击事件。

- blur(handler) 				失去焦点事件。

- mouseenter(handler) 		鼠标进入事件。

- mouseleave(handler)			鼠标离开事件。

- dbclick(handler) 			双击事件。

- change(handler)  改变事件，如：文本框值改变，下拉列表值改变等。

- focus(handler) 				获得焦点事件。

- keydown(handler) 			键盘按下事件。

参考链接：<http://www.w3school.com.cn/jquery/jquery_ref_events.asp>

### on方式绑定事件

最早采用的是 bind、delegate等方式绑定的。jQuery 1.7版本后，jQuery用on统一了所有的事件处理的方法，此方法兼容zepto(移动端类似于jQuery的一个库)。

格式举例：


```javascript
        $(document).on("click mouseenter", ".box", {"name": 111}, function (event) {
            console.log(event.data);      //event.data获取的就是第三个参数这个json。
            console.log(event.data.name); //event.data.name获取的是name的值。
        });
```

参数解释：

- 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）。上方代码绑定的是单击事件和鼠标进入事件。

- 第二个参数：selector, 执行事件的后代元素。

- 第三个参数：data，传递给事件处理函数的数据，事件触发的时候通过event.data来使用（也就是说，可以通过event拿到data）

- 第四个参数：handler，事件处理函数。


简单点的写法：

```javascript
    $(document).on("click",".box", function () {
       alert(1);
    });
```

### off方式解绑事件

```javascript
    $(selector).off();      // 解绑匹配元素的所有事件

    $(selector).off("click");   // 解绑匹配元素的所有click事件

    $(selector).off( "click", "**" );   // 解绑所有代理的click事件，元素本身的事件不会被解绑
```

## jQuery的事件对象

event.data                  传递给事件处理程序的额外数据

event.currentTarget             等同于this，当前DOM对象

event.pageX                     鼠标相对于文档左部边缘的位置

event.target                    触发事件源，不一定===this

event.stopPropagation()；    阻止事件冒泡

event.preventDefault();     阻止默认行为

event.type                  事件类型：click，dbclick…

event.which                     鼠标的按键类型：左1 中2 右3

event.keyCode               键盘按键代码


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $(document).on("click", {}, function (event) {
                console.log(event.data);
                console.log(event.currentTarget);
                console.log(event.target);
                console.log(event.pageX);
                console.log(event.type);
                console.log(event.which);
                console.log(event.keyCode);
            });
        })
    </script>
</head>
<body>

</body>
</html>
```

上方代码中，我们通过event参数，获取了点击事件的各种event里的属性。

单击网页后，打印结果为：

![](http://img.smyhvae.com/20180205_2338.png)

**举例**：键盘上对的按键按下时，变色

这个时候就要用到event参数，因为要获取event.keyCode，才能知道按下的是键盘上的哪个按键。

代码实现：

```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .wrap {
            width: 400px;
            height: 400px;
            margin: 100px auto 0;
        }

        .wrap h1 {
            text-align: center;
        }

        .wrap div {
            width: 400px;
            height: 300px;
            background: pink;
            font-size: 30px;
            text-align: center;
            line-height: 300px;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //需求：在页面上，按键.是哪个颜色的首写字母div就改变为该颜色，然后span内容赋值。
            //步骤：
            //1.给document绑定keyup事件
            //2.获取值，根据此值，给div和span上色和内容

            var div = $("#bgChange");
            var span = $("#keyCodeSpan");

            //绑定事件
            $(document).keyup(function (e) {  //键盘弹出时，触发事件
                //调用方法
                setColor(e.keyCode);
            });


            function setColor(keyCode) {
                //alert(e.keyCode);
                //2.获取值，根据此值，给div和span上色和内容
                switch (keyCode) {
                    case 80:
                        //修改内容pink
                        setEle("pink", keyCode);
                        break;
                    case 66:
                        //修改内容blue
                        setEle("blue", keyCode);
                        break;
                    case 79:
                        //修改内容orange
                        setEle("orange", keyCode);
                        break;
                    case 82:
                        //修改内容red
                        setEle("red", keyCode);
                        break;
                    case 89:
                        //修改内容yellow
                        setEle("yellow", keyCode);
                        break;
                    default :
                        alert("系统没有设置该颜色！");
                }

                function setEle(a, b) {
                    div.css("background-color", a);
                    span.text(b);
                }

            }

            //1.给document绑定keyup事件
//            $(document).keyup(function (e) {
//                //alert(e.keyCode);
//                //2.获取值，根据此值，给div和span上色和内容
//                switch (e.keyCode){
//                    case 80:
//                        //修改内容pink
//                        div.css("background-color","pink");
//                        span.text(e.keyCode);
//                        break;
//                    case 66:
//                        //修改内容blue
//                        div.css("background-color","blue");
//                        span.text(e.keyCode);
//                        break;
//                    case 79:
//                        //修改内容orange
//                        div.css("background-color","orange");
//                        span.text(e.keyCode);
//                        break;
//                    case 82:
//                        //修改内容red
//                        div.css("background-color","red");
//                        span.text(e.keyCode);
//                        break;
//                    case 89:
//                        //修改内容yellow
//                        div.css("background-color","yellow");
//                        span.text(e.keyCode);
//                        break;
//                    default :
//                        alert("系统没有设置该颜色！");
//                }
//            });
        })
    </script>
</head>

<body>

<div class="wrap">
    <h1>按键改变颜色</h1>
    <div id="bgChange">
        keyCode为：
        <span id="keyCodeSpan">80</span>
    </div>
</div>

</body>
</html>

```


## jQuery 的两大特点

（1）**链式编程**：比如`.show()`和`.html()`可以连写成`.show().html()`。


链式编程原理：return this。

通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。

```javascript
    end(); // 结束当前链最近的一次过滤操作，并且返回匹配元素之前的状态。
```


（2）**隐式迭代**：隐式 对应的是 显式。隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。

如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。


**举例：**五角星评分

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>五角星评分案例</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .comment {
            font-size: 40px;
            color: #ff3100;
        }

        .comment li {
            float: left;
            cursor: pointer;
        }

        ul {
            list-style: none;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            var star_none = '☆'; // 空心五角星
            var star_sel = '★'; // 实心五角星

            //需求1：鼠标放悬停时，当前的li和之前所有的li内容全部变为实心五角星，移开变为空心。
            $(".comment li").on("mouseenter", function () {
                //当前五角星，和之前的所有五角星，全部是实心的，其他的为空心

                //写法一：分两次写
//                $(this).text(star_sel).prevAll("li").text(star_sel);
//                $(this).nextAll("li").text(star_none);
                //写法二：一次性写完，但要用到end()，否则会出问题。【重要】
                $(this).text(star_sel).prevAll("li").text(star_sel).end().nextAll("li").text(star_none);
            });

            $(".comment li").on("mouseleave", function () {
                //bug：如果没有点击过li，那么会出现无法清除的现象，处理办法就是先判断，看看是否有current类
                if ($("li.current").length === 0) {
                    $(".comment li").text(star_none);
                } else {
                    //当鼠标移开的时候，谁有current类名，那么当前和之前所有的li前部是实心五角星，后面的所有li都是空心
                    $("li.current").text(star_sel).prevAll("li").text(star_sel).end().nextAll("li").text(star_none);
                }
            });


            //需求2：鼠标点击那个li，当你前li和之前所有的li都变成实心五角星，其他变为空心。
            $(".comment li").on("click", function () {
                //点击哪个li给他加一个类名。清空其他所有的li的类名
                $(this).attr("class", "current").siblings("li").removeAttr("class");
            });


        });
    </script>
</head>
<body>
<ul class="comment">
    <li>☆</li>
    <li>☆</li>
    <li>☆</li>
    <li>☆</li>
    <li>☆</li>
</ul>
</body>
</html>

```


上方代码中，注意end的用法，很巧妙。

实现效果：

![](http://img.smyhvae.com/20180206_1100.gif)

## each的用法

大部分情况下是不需要使用each方法的，因为jQuery的隐式迭代特性。

但是，如果要对每个元素做不同的处理，这时候就用到了each方法。

格式如下：


```javascript
    $(selector).each(function(index,element){});
```

参数解释：

- 参数一：表示当前元素在所有匹配元素中的索引号

- 参数二：参数二表示当前元素（是js 中的DOM对象，而不是jQuery对象）


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        li {
            width: 100px;
            height: 100px;
            margin: 20px;
            float: left;
            list-style: none;
            text-align: center;
            font: 50px/100px "simsun";
            color: white;
            background-color: black;
        }
    </style>

    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            //设置每个不一样的盒子透明度逐渐递增
            $("ul li").each(function (index, element) {
                $(element).css("opacity", (index + 1) / 10);
                console.log(index+"---"+element.tagName);

            });
        });
    </script>
</head>
<body>
<ul>
    <li class="aaa1">1</li>
    <li class="aaa2">2</li>
    <li class="aaa3">3</li>
    <li class="aaa4">4</li>
    <li class="aaa5">5</li>
    <li class="aaa6">6</li>
    <li class="aaa7">7</li>
    <li class="aaa8">8</li>
    <li class="aaa9">9</li>
    <li class="aaa10">10</li>
</ul>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180206_1110.png)

## 多库共存

**多库共存**指的是：jQuery占用了 `$` 和 `jQuery` 这两个变量。当在同一个页面中引用了 jQuery 库以及其他的库（或者其他版本的jQuery库），恰好其他的库中也用到了 `$` 或者`jQuery`变量.那么，要保证每个库都能正常使用，就产生了多库共存的问题。

温馨提示：我们可以通过以下方式获取 jQuery 库的版本号。

```javascript
    console.log($.fn.jquery);  //打印 jQuery 库的版本号
```

**办法一**：让 jQuery 放弃对 `$` 的使用权：

```javascript
    $.noConflict();
```

效果如下：

![](http://img.smyhvae.com/20180206_1126.png)


上图中，代码中同时包含了两个版本的库。1.11.1版本放弃了对 `$` 的使用权，交给了1.8.2版本；但是1.11.1版本并没有放弃对 `jQuery`关键字的使用权。


办法二：同时放弃放弃两个符号的使用权，并定义一个新的使用权（如果有三个库时，可以这样用）

```javascript
    $.noConflict(true);   //返回值是新的关键字
```

效果如下：

![](http://img.smyhvae.com/20180206_1133.png)


## jQuery 的插件机制

jQuery 库，虽然功能强大，但也不是面面俱到。jQuery 是通过插件的方式，来扩展它的功能：

- 当你需要某个插件的时候，你可以“安装”到jQuery上面，然后使用。

- 当你不再需要这个插件，那你就可以从jQuery上“卸载”它。


### 插件之改变颜色

jQuery的自定义动画方法animate()，在执行动画时，是不支持设置背景色这个属性的。这个时候可以借助`jQuery.color.js`这个插件。


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
            background-color: blue;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script src="jquery.color.js"></script>
    <script>
        $(function () {
            //点击按钮，改变盒子的宽度和背景色
            $("button").on("click", function () {
                $("div").animate({"width": 200, "background-color": "red"}, 2000, function () {
                    alert("动画结束");
                });
            });
        })
    </script>
</head>
<body>
<button>变色</button>
<div></div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180206_1400.gif)

上方代码中，因为加入了一行插件：（注意顺序是放在jQuery插件之后）

```html
    <script src="jquery.color.js"></script>
```

否则的话，在动画执行的过程中，是无法设置背景色的。


### 插件之懒加载

懒加载：当打开一个网页时，只有当我看到某个部分，再加载那个部分；而不是一下子全部加载完毕。这样可以优化打开的速度。

比如说，我可以设置一张图片为懒加载，于是，这张图片会等我宠幸到它的时候，它再打开。

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            height: 3000px;
            background-color: pink;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <!--懒加载的使用。第一步：导包(必须在jquery库的下方）-->
    <script src="jquery.lazyload.js"></script>
    <script>
        $(function () {


            //第二步骤：调用懒加载的方法实现功能。参数的不同，功能也不同。
            $("img.lazy").lazyload();
        })
    </script>
</head>
<body>
<div></div>
<!--需要实现将图片设置为懒加载模式-->
<img class="lazy" data-original="images/01.jpg" width="640" height="480">
</body>
</html>
```

