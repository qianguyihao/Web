
> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8485028.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。

## 同步和异步

### 同步和异步的概念


- 同步：必须等待前面的任务完成，才能继续后面的任务。

- 异步：不受当前任务的影响。

拿排队举例：

- 同步：在银行排队时，只有等到你了，才能够去处理业务。

- 异步：在排队的时候，可以玩手机。

### 异步更新网站

我们在访问一个普通的网站时，当浏览器加载完`HTML、CSS、JS`以后，网站的内容就固定了。如果想让网站内容发生更改，就必须**刷新**页面才能够看到更新的内容。

可如果用到**异步更新**，情况就大为改观了。比如，我们在访问新浪微博时，看到一大半了，点击底部的**加载更多**，会自动帮我们加载更多的微博，同时页面并没有刷新。

试想一下，如果没有异步刷新的话，每次点击“加载更多”，网页都要刷新，体验就太不好了。

web前端里的异步更新，就要用到 Ajax。


## Ajax

### Ajax 的概念

在浏览器中，我们可以在不刷新页面的情况下，通过ajax的方式去获取一些新的内容。

Ajax：Asynchronous Javascript And XML（异步 JavaScript 和 XML）。它并不是凭空出现的新技术，而是对于现有技术的结合。Ajax 的核心是 js 对象：**XMLHttpRequest**。


### 发送 Ajax 请求的五个步骤

> 其实也就是 使用 XMLHttpRequest 对象的五个步骤。

我们先回忆一下，一个完整的HTTP请求需要的是：

- 请求的网址、请求方法get/post。

- 提交请求的内容数据、请求主体等。

- 接收响应回来的内容。

发送 Ajax 请求的五个步骤：

（1）创建异步对象。即 XMLHttpRequest 对象。

（2）使用open方法设置请求的参数。open(method, url, async)。参数解释：请求的方法、请求的url、是否异步。

（3）发送请求。

（4）注册事件。 注册onreadystatechange事件，状态改变时就会调用。

如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。

（5）获取返回的数据。

###  Ajax 请求：get 请求举例

（1）index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h1>Ajax 发送 get 请求</h1>
<input type="button" value="发送get_ajax请求" id='btnAjax'>

<script type="text/javascript">
    // 绑定点击事件
    document.querySelector('#btnAjax').onclick = function () {
        // 发送ajax 请求 需要 五步

        // （1）创建异步对象
        var ajaxObj = new XMLHttpRequest();

        // （2）设置请求的参数。包括：请求的方法、请求的url。
        ajaxObj.open('get', '02-ajax.php');

        // （3）发送请求
        ajaxObj.send();

        //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
        //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
        ajaxObj.onreadystatechange = function () {
            // 为了保证 数据 完整返回，我们一般会判断 两个值
            if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
                // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
                console.log('数据返回成功');

                // 数据是保存在 异步对象的 属性中
                console.log(ajaxObj.responseText);

                // 修改页面的显示
                document.querySelector('h1').innerHTML = ajaxObj.responseText;
            }
        }
    }
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
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h1>Ajax 发送 get 请求</h1>
<input type="button" value="发送put_ajax请求" id='btnAjax'>
<script type="text/javascript">

    // 异步对象
    var xhr = new XMLHttpRequest();

    // 设置属性
    xhr.open('post', '02.post.php');

    // 如果想要使用post提交数据,必须添加此行
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // 将数据通过send方法传递
    xhr.send('name=fox&age=18');

    // 发送并接受返回值
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

- method：请求的类型；GET 或 POST

- url：文件在服务器上的位置

- async：true（异步）或 false（同步）

另外还有个方法：（仅用于 POST 请求）

```javascript
	send(string);
```

### POST请求时注意

如果想让 像form 表单提交数据那样使用POST请求，就需要使用 XMLHttpRequest 对象的 setRequestHeader()方法 来添加 HTTP 头。然后在 send() 方法中添加想要发送的数据：

```javascript
	xmlhttp.open("POST","ajax_test.php", true);

	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xmlhttp.send("name=smyhvae&age=27");
```

### onreadystatechange 事件

注册 onreadystatechange 事件后，每当 readyState 属性改变时，就会调用 onreadystatechange 函数。

readyState：（存有 XMLHttpRequest 的状态。从 0 到 4 发生变化）

- 0: 请求未初始化

- 1: 服务器连接已建立

- 2: 请求已接收

- 3: 请求处理中

- 4: 请求已完成，且响应已就绪

status：

- 200: "OK"。

- 404: 未找到页面。

在 onreadystatechange 事件中，**当 readyState 等于 4，且状态码为200时，表示响应已就绪**。

### 服务器响应的内容

- responseText：获得字符串形式的响应数据。

- responseXML：获得 XML 形式的响应数据。

如果响应的是普通字符串，就使用responseText；如果响应的是XML，使用responseXML。

## Ajax 传输 XML

### XML 语法

XML（Extensible Markup Language）：可扩展标记语言。详细语法可以查看：[#](http://www.w3school.com.cn/xml/index.asp)。


**1、XML声明：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

第一行的声明，指定了XML版本(1.0)以及使用的编码。


**2、自定义标签：**

XML中没有默认的标签，所有的标签都是我们自己已定义的。例如：

```xml
<fox></fox>
<name></name>
```

XML中没有单标签，都是双标签。

**3、根节点：**

XML中必须要有一个根节点，所有的子节点都放置在根节点下。例如：

```xml
<root1>
  <name></name>
</root1>
```

### XML 解析

因为 XML 就是标签，所以我们可以直接用**解析Dom元素**的方法解析 XML。

**解析过程：**

（1）html 部分：（包含  xml ）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <person id='personXML'>
      <name>fox</name>
      <age>18</age>
      <skill>小花花</skill>
  </person>
</body>
</html>
```


（2）解析 xml：

```html
<script type="text/javascript">
    var xmlObj = document.getElementById("personXML");
    var name = xmlObj.getElementsByTagName('name')[0].innerHTML;

    console.log(name);
</script>

```

### ajax 请求解析xml（举例）

（1）get_xml.php：（里面包含了xml文件）

```php
<?php
	// 设置 返回的为 xml
	header('content-type:text/xml; charset= utf-8');

	// 读取xml文件 并返回
	echo file_get_contents('info/star.xml');

 ?>
```

上方代码解释：

-  php 自带了 读取 xml 文件的方法。

- 在 php 中，如果要使用xml传输数据，则需要使用header()设置返回的内容为xml。

（2）get_xml.html：（Ajax 请求，获取并解析xml）

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value="获取XMl数据" id='getXML'>
</body>
</html>
<script type="text/javascript">
	document.querySelector('#getXML').onclick = function () {
		var ajax = new XMLHttpRequest();

		ajax.open('get','get_XMl.php');

		ajax.send();

		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status==200) {
				// 如果 返回的是 xml文件
				console.log(ajax.responseText);

				// 异步 对象中 有另外一个属性 用来专门获取 xml
				// xml对象 在浏览器段 就是一个 document对象
				// 解析时 可以直接使用 querySelector 或者 getElementById等等 document对象 有的语法
				console.log(ajax.responseXML);
				console.log(ajax.responseXML.querySelector('kuzi').innerHTML);
				// 下面这个 页面文档对象 如果要获取某个标签
				console.log(window.document);

			}
		}
	}
</script>
```

## Ajax 传输 JSON

### JSON 的语法

JSON(JavaScript Object Notation)：是ECMAScript的子集。作用是进行数据的交换。语法更为简洁，网络传输、机器解析都更为迅速。


语法规则：

- 数据在键值对中

- 数据由逗号分隔

- 花括号保存对象

- 方括号保存数组

数据类型：

- 数字（整数或浮点数）

- 字符串（在双引号中）

- 逻辑值（true 或 false）

- 数组（在方括号中）

- 对象（在花括号中）

- null

示例：

```json
// 对象
{
  "name":"fox",
  "age":"18",
  "sex":"true",
  "car":null
}

// 数组
[
  {
      "name":"小小胡",
      "age":"1"
  },
  {
      "name":"小二胡",
      "age":"2"
  }
]
```

### JavaScript中：json 字符串 <--> js 对象

基本上，所有的语言都有**将 json 字符串转化为该语言对象**的语法。

比如在 js中：

- JSON.parse()：将JSON字符串转化为 js 对象。例如：

```javascript
	// 将 JSON 字符串格式化为 js 对象
	var jsObj = JSON.parse(ajax.responseText);
```

- JSON.stringify()：将 JS 对象转化为JSON字符串。例如：

```javascript
	var Obj = {
	  name: "fox",
	  age: 18,
	  skill: "撩妹"
	};

	console.log(Obj);

	// 将 js 对象格式化为 JSON 字符串
	var jsonStr = JSON.stringify(Obj);
```

### PHP中：json 字符串 <--> js 对象

- **json_decode()**方法：将`json`字符串转化为变量。

- **json_encode()**方法：将变量转化为`json`字符串。

代码举例：

```php
<?php
    header("Content-Type:text/html;charset=utf-8");
    // json字符串
    $jsonStr = '{"name":"itcast","age":54,"skill":"歌神"}';
    // 字符串转化为 php对象
      print_r(json_decode($jsonStr));

      echo "<br>";
      // php数组
      $arrayName = array('name' =>'littleFox' ,'age' => 13 );
      // php对象 转化为 json字符串
      print_r(json_encode($arrayName));
 ?>
```

输出结果：

```bash
	stdClass Object ( [name] => itcast [age] => 54 [skill] => 歌神 )
	{"name":"littleFox","age":13}

```

### ajax 请求解析 json（举例）

（1）Person.json:

```json
{
	"name":"小强",
	"skill":"砍树",
	"friend":"老板"
}
```

（2）myJson.php：

```php
<?php

	// 读取json文件 并返回即可
	echo  file_get_contents('info/Person.json');

 ?>
```

（3）getJson.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>获取 json 数据</h1>
	<input type="button"  value="获取json" id='btnJson'>
</body>
</html>
<script type="text/javascript">
	// 获取的是一个 如果要获取多个
	// document.querySelectorAll(selector)
	document.querySelector("#btnJson").onclick = function () {
		var ajax = new XMLHttpRequest();

		ajax.open('get','myJson.php');

		ajax.send();

		ajax.onreadystatechange = function () {
			if (ajax.readyState==4&&ajax.status==200) {
				// json 字符串 是字符串 所以我们可以 通过  responseText获取
				console.log(ajax.responseText);

				// 转化为 js对象
				var jsObj = JSON.parse(ajax.responseText);

				console.log(jsObj);

				// 拼接ul s
				var str = '';

				str+='<ul>';
				str+='<li>'+jsObj.name+'</li>';
				str+='<li>'+jsObj.skill+'</li>';
				str+='<li>'+jsObj.friend+'</li>';
				str+='</ul>';

				// 设置到界面上

				document.body.innerHTML = str;
			}
		}
	}
</script>
```

演示效果：

![](http://img.smyhvae.com/20180228_1740.gif)




## jQuery 中的 Ajax


JQuery作为最受欢迎的js框架之一，常见的Ajax已经帮助我们封装好了，只需要调用即可。更为详细的api文档可以查阅：[w3cSchool_JQueryAjax](http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp)

格式举例：

```javascript
$.ajax({
        url:'01.php',//请求地址
        data:'name=fox&age=18',//发送的数据
        type:'GET',//请求的方式
        success:function (argument) {},// 请求成功执行的方法
        beforeSend:function (argument) {},// 在发送请求之前调用,可以做一些验证之类的处理
        error:function (argument) {console.log(argument);},//请求失败调用
    })
```



代码举例：

（1）index.html

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jquery-ajax</title>
</head>
<body>
<input type="button" value="点击" id="btn">
<div id="showInfo"></div>
<script type="text/javascript" src="jquery-1.11.2.js"></script>
<script type="text/javascript">
	$(function(){

		$("#btn").click(function(){
			$.ajax({
				url:"data.php",
				dataType:"text",
				type:"get",
				success:function(data){
					alert(data);
					//$("#showInfo").html(data);
				},
				error:function(e){
					console.log(e);
				}
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



## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

