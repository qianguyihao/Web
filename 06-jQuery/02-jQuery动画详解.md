

> 本文最初发表于[博客园]()，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。

## 前言

jQuery提供的一组网页中常见的动画效果，这些动画是标准的、有规律的效果；同时还提供给我们了自定义动画的功能。

## 显示动画

方式一：

```javascript
	$("div").show();
```

解释：无参数，表示让指定的元素直接显示出来。其实这个方法的底层就是通过`display: block;`实现的。

方式二：

```javascript
	$("div").show(2000);
```

解释：通过控制元素的宽高、透明度、display属性，逐渐显示，2秒后显示完毕。

效果如下：

![](http://img.smyhvae.com/20180205_1358.gif)

方式三：

```javascript
	$("div").show("slow");
```

参数可以是：

- slow 慢：600ms

- normal 正常：400ms

- fast 快：200ms

解释：和方式二类似，也是通过控制元素的宽高、透明度、display属性，逐渐显示。

方式四：

```javascript
    //show(毫秒值，回调函数;
    $("div").show(5000,function () {
        alert("动画执行完毕！");
    });
```

解释：动画执行完后，立即执行回调函数。

**总结：**

上面的四种方式几乎一致：参数可以有两个，第一个是动画的执行时长，第二个是动画结束后执行的回调函数。

## 隐藏动画

方式参照上面的show()方法的方式。如下：


```javascript
	$(selector).hide();

	$(selector).hide(1000);

	$(selector).hide("slow");

	$(selector).hide(1000, function(){});
```

**显示和隐藏的来回切换：**

显示和隐藏的来回切换采用的是toggle()方法：就是先执行show()，再执行hide()。

同样是四种方式：

```javascript
$(selector).toggle();

```

## 滑入和滑出

**1、滑入动画效果**：（类似于生活中的卷帘门）


```javascript
	$(selector).slideDown(speed, 回调函数);
```

解释：下拉动画，显示元素。

注意：省略参数或者传入不合法的字符串，那么则使用默认值：400毫秒（同样适用于fadeIn/slideDown/slideUp）


**2 滑出动画效果：**

```javascript
	$(selector).slideUp(speed, 回调函数);
```

解释：上拉动画，隐藏元素。


**3、滑入滑出切换动画效果：**

```javascript
	$(selector).slideToggle(speed, 回调函数);
```

参数解释同show()方法。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 300px;
            height: 300px;
            display: none;
            background-color: pink;
        }
    </style>

    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //点击按钮后产生动画
            $("button:eq(0)").click(function () {

                //滑入动画： slideDown(毫秒值，回调函数[显示完毕执行什么]);
                $("div").slideDown(2000, function () {
                    alert("动画执行完毕！");
                });
            })

            //滑出动画
            $("button:eq(1)").click(function () {

                //滑出动画：slideUp(毫秒值，回调函数[显示完毕后执行什么]);
                $("div").slideUp(2000, function () {
                    alert("动画执行完毕！");
                });
            })

            $("button:eq(2)").click(function () {
                //滑入滑出切换（同样有四种用法）
                $("div").slideToggle(1000);
            })

        })
    </script>
</head>
<body>
<button>滑入</button>
<button>滑出</button>
<button>切换</button>
<div></div>

</body>
</html>
```

![](http://img.smyhvae.com/20180205_1420.gif)

## 淡入淡出动画

1、淡入动画效果：

```javascript
	$(selector).fadeIn(speed, callback);
```

作用：让元素以淡淡的进入视线的方式展示出来。

2、淡出动画效果：

```javascript
	$(selector).fadeOut(1000);
```

作用：让元素以渐渐消失的方式隐藏起来

3、淡入淡出切换动画效果：


```javascript
	$(selector).fadeToggle('fast', callback);
```

作用：通过改变透明度，切换匹配元素的显示或隐藏状态。

参数的含义同show()方法。

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 300px;
            height: 300px;
            display: none;
            /*opacity: 1;*/
            background-color: pink;
        }
    </style>

    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //点击按钮后产生动画
            $("button:eq(0)").click(function () {
//                //淡入动画用法1:   fadeIn();   不加参数
                $("div").fadeIn();

//                //淡入动画用法2:   fadeIn(2000);   毫秒值
//                $("div").fadeIn(2000);
//                //通过控制  透明度和display

                //淡入动画用法3:   fadeIn(字符串);   slow慢：600ms   normal正常:400ms   fast快：200ms
//                $("div").fadeIn("slow");
//                $("div").fadeIn("fast");
//                $("div").fadeIn("normal");

                //淡入动画用法4:   fadeIn(毫秒值，回调函数[显示完毕执行什么]);
//                $("div").fadeIn(5000,function () {
//                    alert("动画执行完毕！");
//                });
            })

            //滑出动画
            $("button:eq(1)").click(function () {
//                //滑出动画用法1:   fadeOut();   不加参数
//                $("div").fadeOut();

//                //滑出动画用法2:   fadeOut(2000);   毫秒值
//                $("div").fadeOut(2000);  //通过这个方法实现的：display: none;
//                //通过控制  透明度和display

                //滑出动画用法3:   fadeOut(字符串);   slow慢：600ms   normal正常:400ms   fast快：200ms
//                $("div").fadeOut("slow");
//                $("div").fadeOut("fast");
//                $("div").fadeOut("normal");

                //滑出动画用法1:   fadeOut(毫秒值，回调函数[显示完毕执行什么]);
//                $("div").fadeOut(2000,function () {
//                    alert("动画执行完毕！");
//                });
            })

            $("button:eq(2)").click(function () {
                //滑入滑出切换
                //同样有四种用法
                $("div").fadeToggle(1000);
            })

            $("button:eq(3)").click(function () {
                //改透明度
                //同样有四种用法
                $("div").fadeTo(1000, 0.5, function () {
                    alert(1);
                });
            })
        })
    </script>
</head>
<body>
<button>淡入</button>
<button>淡出</button>
<button>切换</button>
<button>改透明度为0.5</button>
<div></div>

</body>
</html>
```

## 自定义动画

```javascript
	$(selector).animate({params}, speed, callback);
```

作用：执行一组CSS属性的自定义动画。

- 第一个参数表示：要执行动画的CSS属性（必选）

- 第二个参数表示：执行动画时长（可选）

- 第三个参数表示：动画执行完后，立即执行的回调函数（可选）

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            position: absolute;
            left: 20px;
            top: 30px;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            $("button").click(function () {
                var json = {"width": 500, "height": 500, "left": 300, "top": 300, "border-radius": 100};
                var json2 = {
                    "width": 100,
                    "height": 100,
                    "left": 100,
                    "top": 100,
                    "border-radius": 100,
                    "background-color": "red"
                };

                //自定义动画
                $("div").animate(json, 1000, function () {
                    $("div").animate(json2, 1000, function () {
                        alert("动画执行完毕！");
                    });
                });

            })
        })
    </script>
</head>
<body>
<button>自定义动画</button>
<div></div>
</body>
</html>
```

## 停止动画

```javascript
	$(selector).stop(true, false);
```

**里面的两个参数，有不同的含义。**

第一个参数：

- true：后续动画不执行。

- false：后续动画会执行。

第二个参数：

- true：立即执行完成当前动画。

- false：立即停止当前动画。

PS：参数如果都不写，默认两个都是false。实际工作中，直接写stop()用的多。

**效果演示：**

当第二个参数为true时，效果如下：

![](http://img.smyhvae.com/20180205_1445.gif)

当第二个参数为false时，效果如下：

![](http://img.smyhvae.com/20180205_1450.gif)


这个**后续动画**我们要好好理解，来看个例子。

**案例：鼠标悬停时，弹出下拉菜单（下拉时带动画）**

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

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-color: pink;
        }

        .wrap li {
            background-color: green;
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        $(document).ready(function () {
            //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
            var jqli = $(".wrap>ul>li");

            //绑定事件
            jqli.mouseenter(function () {
                $(this).children("ul").stop().slideDown(1000);
            });

            //绑定事件(移开隐藏)
            jqli.mouseleave(function () {
                $(this).children("ul").stop().slideUp(1000);
            });
        });
    </script>

</head>
<body>
<div class="wrap">
    <ul>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180205_1500.gif)

上方代码中，关键的地方在于，用了stop函数，再执行动画前，先停掉之前的动画。

如果去掉stop()函数，效果如下：（不是我们期望的效果）

![](http://img.smyhvae.com/20180205_1505.gif)

### stop方法的总结

当调用stop()方法后，队列里面的下一个动画将会立即开始。
但是，如果参数clearQueue被设置为true，那么队列面剩余的动画就被删除了，并且永远也不会执行。

如果参数jumpToEnd被设置为true，那么当前动画会停止，但是参与动画的每一个CSS属性将被立即设置为它们的目标值。比如：slideUp()方法，那么元素会立即隐藏掉。如果存在回调函数，那么回调函数也会立即执行。

注意：如果元素动画还没有执行完，此时调用stop()方法，那么动画将会停止。并且动画没有执行完成，那么回调函数也不会被执行。


## 举例：右下角的弹出广告

代码实现：

```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        .ad {
            position: fixed;
            right: 0;
            bottom: 0;
            width: 230px;
            height: 120px;
            background-image: url(images/ad.jpg);
            display: none;
        }

        .ad span {
            position: absolute;
            right: 0;
            top: 0;
            width: 40px;
            height: 18px;
            background-image: url(images/h.jpg);
            cursor: pointer;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //需求：然广告ad部分，先滑入，在滑出，在淡入。然后绑定事件，点击span弹出
            //步骤：
            $(".ad").slideDown(1000).slideUp(1000).fadeIn(1000).children("span").click(function () {
                $(this).parent().fadeOut(1000);
            });


            //第二种写法
//            $(".ad").slideDown(1000, function () {
//                $(".ad").slideUp(1000, function () {
//                    $(".ad").fadeIn(1000, function () {
//                        $(".ad").children("span").click(function () {
//                            $(this).parent().fadeOut(1000, function () {
//                                alert("执行完毕！");
//                            });
//                        });
//                    });
//                });
//            })
        })
    </script>
</head>

<body>

<div class="ani">我是内容</div>
<div class="ad">
    <span></span>
</div>

</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180205_2000.gif)


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

