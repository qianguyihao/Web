## 同步和异步回顾

### 同步和异步的简单理解

-   同步：必须等待前面的任务完成，才能继续后面的任务。

-   异步：不受当前任务的影响。

拿排队举例：

-   同步：在银行排队时，只有等到你了，才能够去处理业务。

-   异步：在排队的时候，可以玩手机。

### 异步更新网站

我们在访问一个普通的网站时，当浏览器加载完`HTML、CSS、JS`以后，网站的内容就固定了。如果想让网站内容发生更改，就必须**刷新**页面才能够看到更新的内容。

可如果用到**异步更新**，情况就大为改观了。比如，我们在访问新浪微博时，看到一大半了，点击底部的**加载更多**，会自动帮我们加载更多的微博，同时页面并不会整体刷新。

试想一下，如果没有异步刷新的话，每次点击“加载更多”，网页都要重新刷新，体验就太糟糕了。

web 前端里的异步更新，就要用到 Ajax。很多人说，如果没有 Ajax，就没有互联网的今天。

关于同步和异步的更详细介绍，可以参考本项目的另外一篇文章：《05-JavaScript 基础：异步编程和 Ajax/01-单线程和异步》

## Ajax

### Ajax 的概念

在浏览器中，我们可以在不刷新页面的情况下，通过 Ajax 的方式去获取一些新的内容。

Ajax：Asynchronous Javascript And XML（异步 JavaScript 和 XML）。它并不是凭空出现的新技术，而是对于现有技术的结合。Ajax 的核心是 js 对象：**XMLHttpRequest**。

### Ajax 原理（发送 Ajax 请求的五个步骤）

> 其实也就是 使用 XMLHttpRequest 对象的五个步骤。

我们先回忆一下，一个完整的 HTTP 请求需要的是：

-   请求的网址、请求方法 get/post。

-   提交请求的内容数据、请求主体等。

-   接收响应回来的内容。

发送 Ajax 请求的五个步骤：

（1）创建异步对象，即 XMLHttpRequest 对象。

（2）使用 open 方法设置请求参数。`open(method, url, async)`。参数解释：请求的方法、请求的 url、是否异步。第三个参数如果不写，则默认为 true。

（3）发送请求：`send()`。

（4）注册事件：注册 onreadystatechange 事件，状态改变时就会调用。

如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。

（5）服务端响应，获取返回的数据。

## 手写 Ajax

### 手写第一个 Ajax 请求

get 请求：

```js
//【发送ajax请求需要五步】
//（1）创建XMLHttpRequest对象
var xmlhttp = new XMLHttpRequest();

//（2）设置请求的参数。包括：请求的方法、请求的url。
xmlhttp.open('get', '02-ajax.php');

//（3）发送请求
xmlhttp.send();

//（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
//如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
xmlhttp.onreadystatechange = function () {
    // 为了保证 数据 完整返回，我们一般会判断 两个值
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // 如果能够进入这个判断，说明数据请求成功了
        //（5）服务端相应：在注册的事件中，获取返回的内容，并显示在页面上
        console.log('数据返回成功');

        // 数据是保存在 异步对象的 属性中
        console.log(JSON.stringify(xmlhttp.responseText));
    }
};
```

post 请求：

```js
//（1）异步对象
var xmlhttp = new XMLHttpRequest();

//（2）设置请求参数。包括：请求的方法、请求的url。
xmlhttp.open('post', '02.post.php');

// 如果想要使用post提交数据,必须添加此行
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//（3）发送请求
xmlhttp.send('name=fox&age=18');

//（4）注册事件
xmlhttp.onreadystatechange = function () {
    //（5）服务端相应
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
    }
};
```

### 封装Ajax请求（重要）

todo

## Ajax 请求举例

### Ajax 请求：get 请求举例

（1）index.html：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <h1>Ajax 发送 get 请求</h1>
        <input type="button" value="发送get_ajax请求" id="btnAjax" />

        <script type="text/javascript">
            // 绑定点击事件
            document.querySelector('#btnAjax').onclick = function () {
                // 发送ajax 请求需要五步
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open('get', '02-ajax.php');
                xmlhttp.send();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        console.log('数据返回成功');
                        console.log(xmlhttp.responseText);
                        // 显示在页面上
                        document.querySelector('h1').innerHTML = xmlhttp.responseText;
                    }
                };
            };
        </script>
    </body>
</html>
```

（2）02-ajax.php：

```php
<?php
	echo 'smyhvae';
 ?>
```

效果如下：

![](http://img.smyhvae.com/20180228_1605.gif)

### Ajax 请求：post 请求举例

index.html：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <h1>Ajax 发送 get 请求</h1>
        <input type="button" value="发送put_ajax请求" id="btnAjax" />
        <script type="text/javascript">
            // 发送ajax 请求需要五步
            var xhr = new XMLHttpRequest();
            xhr.open('post', '02.post.php');
            // 如果想要使用post提交数据,必须添加此行
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('name=fox&age=18');
            xhr.onreadystatechange = function () {
                // 这步为判断服务器是否正确响应
                if (xhr.readyState == 4 && xhr.status == 200) {
                    alert(xhr.responseText);
                }
            };
        </script>
    </body>
</html>
```

## XMLHttpRequest 对象详解

我们在上一段讲解了使用 XMLHttpRequest 对象的五个步骤。本段，我们讲一下注意事项。

### 发送请求

发送请求的方法：

```javascript
open(method, url, async);
```

参数解释：

-   method：请求的类型；GET 或 POST

-   url：文件在服务器上的位置

-   async：true（异步）或 false（同步）

另外还有个方法：（仅用于 POST 请求）

```javascript
send(string);
```

### POST 请求时注意

如果想让 像 form 表单提交数据那样使用 POST 请求，就需要使用 XMLHttpRequest 对象的 setRequestHeader()方法 来添加 HTTP 头。然后在 send() 方法中添加想要发送的数据：

```javascript
xmlhttp.open('POST', 'ajax_test.php', true);

xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xmlhttp.send('name=smyhvae&age=27');
```

### onreadystatechange 事件

注册 onreadystatechange 事件后，每当 readyState 属性改变时，就会调用 onreadystatechange 函数。

readyState：（存有 XMLHttpRequest 的状态。从 0 到 4 发生变化）

-   0: 请求未初始化

-   1: 服务器连接已建立

-   2: 请求已接收

-   3: 请求处理中

-   4: 请求已完成，且响应已就绪

status：

-   200: "OK"。

-   404: 未找到页面。

在 onreadystatechange 事件中，**当 readyState 等于 4，且状态码为 200 时，表示响应已就绪**。

### 服务器响应的内容

-   responseText：获得字符串形式的响应数据。

-   responseXML：获得 XML 形式的响应数据。

如果响应的是普通字符串，就使用 responseText；如果响应的是 XML，使用 responseXML。


## jQuery 中的 Ajax

JQuery 作为最受欢迎的 js 框架之一，常见的 Ajax 已经帮助我们封装好了，只需要调用即可。更为详细的 api 文档可以查阅：[w3cSchool_JQueryAjax](http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp)

格式举例：

```javascript
$.ajax({
    url: '01.php', //请求地址
    data: 'name=fox&age=18', //发送的数据
    type: 'GET', //请求的方式
    success: function (argument) {}, // 请求成功执行的方法
    beforeSend: function (argument) {}, // 在发送请求之前调用,可以做一些验证之类的处理
    error: function (argument) {
        console.log(argument);
    }, //请求失败调用
});
```

代码举例：

（1）index.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>jquery-ajax</title>
    </head>
    <body>
        <input type="button" value="点击" id="btn" />
        <div id="showInfo"></div>
        <script type="text/javascript" src="jquery-1.11.2.js"></script>
        <script type="text/javascript">
            $(function () {
                $('#btn').click(function () {
                    $.ajax({
                        url: 'data.php',
                        dataType: 'text',
                        type: 'get',
                        success: function (data) {
                            alert(data);
                            //$("#showInfo").html(data);
                        },
                        error: function (e) {
                            console.log(e);
                        },
                    });
                });
            });
        </script>
    </body>
</html>
```

（2）data.php：

```php
<?php

$text = 'hello world';

echo $text;

 ?>

```

## 创作不易，赞赏作者

如果你觉得本教程对你有帮助，或者你想催更，不妨赞赏一下。

你的赞赏和认可，是我最大的动力：

![](http://img.smyhvae.com/20210510_2100.jpg)
