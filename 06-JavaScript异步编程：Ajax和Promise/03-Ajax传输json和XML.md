---
title: 03-Ajax传输json和XML
publish: true
---

<ArticleTopAd></ArticleTopAd>




## Ajax 传输 JSON

### JSON 的语法

JSON(JavaScript Object Notation)：是 ECMAScript 的子集。作用是进行数据的交换。语法更为简洁，网络传输、机器解析都更为迅速。

语法规则：

-   数据在键值对中

-   数据由逗号分隔

-   花括号保存对象

-   方括号保存数组

数据类型：

-   数字（整数或浮点数）

-   字符串（在双引号中）

-   逻辑值（true 或 false）

-   数组（在方括号中）

-   对象（在花括号中）

-   null

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

### JavaScript 中：json 字符串 <--> js 对象

基本上，所有的语言都有**将 json 字符串转化为该语言对象**的语法。

比如在 js 中：

-   JSON.parse()：将 JSON 字符串转化为 js 对象。例如：

```javascript
// 将 JSON 字符串格式化为 js 对象
var jsObj = JSON.parse(ajax.responseText);
```

-   JSON.stringify()：将 JS 对象转化为 JSON 字符串。例如：

```javascript
var Obj = {
    name: 'fox',
    age: 18,
    skill: '撩妹',
};

console.log(Obj);

// 将 js 对象格式化为 JSON 字符串
var jsonStr = JSON.stringify(Obj);
```

### PHP 中：json 字符串 <--> js 对象

-   **json_decode()**方法：将`json`字符串转化为变量。

-   **json_encode()**方法：将变量转化为`json`字符串。

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
    "name": "小强",
    "skill": "砍树",
    "friend": "老板"
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
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <h1>获取 json 数据</h1>
        <input type="button" value="获取json" id="btnJson" />
    </body>
</html>
<script type="text/javascript">
    // 获取的是一个 如果要获取多个
    // document.querySelectorAll(selector)
    document.querySelector('#btnJson').onclick = function () {
        var ajax = new XMLHttpRequest();

        ajax.open('get', 'myJson.php');

        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // json 字符串 是字符串 所以我们可以 通过  responseText获取
                console.log(ajax.responseText);

                // 转化为 js对象
                var jsObj = JSON.parse(ajax.responseText);

                console.log(jsObj);

                // 拼接ul s
                var str = '';

                str += '<ul>';
                str += '<li>' + jsObj.name + '</li>';
                str += '<li>' + jsObj.skill + '</li>';
                str += '<li>' + jsObj.friend + '</li>';
                str += '</ul>';

                // 设置到界面上

                document.body.innerHTML = str;
            }
        };
    };
</script>
```

演示效果：

![](http://img.smyhvae.com/20180228_1740.gif)


## Ajax 传输 XML

### XML 语法

XML（Extensible Markup Language）：可扩展标记语言。详细语法可以查看：[#](http://www.w3school.com.cn/xml/index.asp)。

**1、XML 声明：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

第一行的声明，指定了 XML 版本(1.0)以及使用的编码。

**2、自定义标签：**

XML 中没有默认的标签，所有的标签都是我们自己已定义的。例如：

```xml
<fox></fox>
<name></name>
```

XML 中没有单标签，都是双标签。

**3、根节点：**

XML 中必须要有一个根节点，所有的子节点都放置在根节点下。例如：

```xml
<root1>
  <name></name>
</root1>
```

### XML 解析

因为 XML 就是标签，所以我们可以直接用**解析 Dom 元素**的方法解析 XML。

**解析过程：**

（1）html 部分：（包含 xml ）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <person id="personXML">
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
    var xmlObj = document.getElementById('personXML');
    var name = xmlObj.getElementsByTagName('name')[0].innerHTML;

    console.log(name);
</script>
```

### ajax 请求解析 xml（举例）

（1）get_xml.php：（里面包含了 xml 文件）

```php
<?php
	// 设置 返回的为 xml
	header('content-type:text/xml; charset= utf-8');

	// 读取xml文件 并返回
	echo file_get_contents('info/star.xml');

 ?>
```

上方代码解释：

-   php 自带了 读取 xml 文件的方法。

-   在 php 中，如果要使用 xml 传输数据，则需要使用 header()设置返回的内容为 xml。

（2）get_xml.html：（Ajax 请求，获取并解析 xml）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="获取XMl数据" id="getXML" />
    </body>
</html>
<script type="text/javascript">
    document.querySelector('#getXML').onclick = function () {
        var ajax = new XMLHttpRequest();

        ajax.open('get', 'get_XMl.php');

        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
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
        };
    };
</script>
```
