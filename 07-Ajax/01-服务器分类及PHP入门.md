
## C/S架构和B/S架构

### C/S架构

是Client/Server这两个单词的首字母，指的是客户端，服务器。

优点:

- 性能较高：可以将一部分的计算工作放在客户端上,这样服务器只需要处理数据即可。

- 界面酷炫:客户端可以使用更多系统提供的效果,做出更为炫目的效果。

缺点:

- 更新软件：如果有新的功能，就要推出新的版本。

- 不同设备访问：如果使用其他的电脑，没有安装客户端的话就无法登陆软件。






### B/S架构

是Browser/Server的这两个单词的首字母。指的是浏览器、服务器，是WEB兴起之后的一种架构。

现在所有的网站都是B/S架构，较为常见的例子有百度、知乎、网易云音乐Web等等，只需要通过浏览器即可使用.

优点：

- 更新简洁：如果需要更新内容了,对开发人员而言需要更改服务器的内容，对用户而言只需要刷新浏览器即可。

- 多设备同步：所有数据都在网上,只要能够使用浏览器即可登录使用。

缺点:

- 性能较低：相比于客户端应用性能较低,但是随着硬件性能的提升,这个差距在缩小。

- 浏览器兼容：处理低版本的浏览器显示问题一直是前端开发人员头痛的问题之一。移动设备兼容性较好，ie6已经越来越少人用了。


## 服务器分类

项目开发时，有三套环境：

- Development 开发环境

- Test 测试环境

- Production 生产环境

程序员平时干活儿用开发环境；开发完成后，部署到测试环境；测试完成后，产品上线，部署到生产环境。

三套环境意味着三个服务器。

### 服务器类型



按类型分：

- 文件服务器

- 数据库服务器

- 邮件服务器

- Web 服务器等


按软件分：

- Apache 服务器

- Nginx 服务器

- IIS 服务器

- Tomcat 服务器

- Node 服务器等


按操作系统分：

- Linux服务器

- Windows服务器等


### 服务器软件

提供了某种服务的计算器，我们称之为服务器。那么这些赋予计算器各种服务功能的软件主要有哪一些呢？

常见的服务器软件有：

- 文件服务器：Server-U、FileZilla、VsFTP等；

- 数据库服务器：Oracle、MySQL、PostgreSQL、MSSQL等；

- 邮件服务器：Postfix、Sendmail等；

- HTTP 服务器：Apache（免费、开源）、Nginx、IIS（微软的.net服务器）、Tomcat（java编程的服务器）、NodeJS 等。


## 使用 WampServer 搭建 HTTP服务

### 集成环境的分类

- AMP：Apache + Mysql + PHP。

- WAMP：windows + Apache + Mysql + PHP。

- XAMPP：WAMP 是针对windows的，而 XAMPP 可以安装在Linux、Windows、MacOS、Solaris这些操作系统上面。

在windows平台下，如果想要一步到位安装好这些软件，可是使用软件 **WampServer**。

### WampServer 的安装

去 WampServer 的[官网](http://www.wampserver.com/en/)下载软件。

![](http://img.smyhvae.com/20180227_1936.png)


安装完成后进行安装。

### 测试访问

打开浏览器输入 `127.0.0.1` 查看显示的内容，如果是第一次安装，默认显示的应该是如下图片：


![](http://img.smyhvae.com/20180227_2203.png)

127.0.0.1 是回送地址，指本地机，一般用来测试使用，如果想要让其他电脑也能够访问，需要进行如下配置：

（1）关闭防火墙：


![](http://img.smyhvae.com/20180227_2207.gif)

（2）修改httpd.conf文件：

因为 Apache 的配置默认不允许外部访问，我们需要修改配置。

打开文件`c:\wamp\bin\apache\Apache2.2.21\conf\httpd.conf`，通过搜索功能找到`onlineoffline tag - don't remove`这句话，在第234行的 `Allow from 127.0.0.1`的下面，加一行：`Allow from all`。

然后将第192行的`Deny from all`改为`Allow from all`。


保存，然后重启 wamp 即可。


### 配置网站根目录

网站的根目录默认是在`D:\wamp\www`。如果想修改这个根目录，可以这样改：

打开 Apache的配置文件 `D:\wamp\bin\apache\Apache2.2.21\conf\http.conf`，如果是初次安装，找到178行的`DocumentRoot "d:/wamp/www/"`，以及205行的`<Directory "d:/wamp/www/">`，改这两个位置的路径即可。我们可以通过搜索关键字`documentRoot`来定位。



## 静态网站和动态网站

静态网站：

- 访问的是实实在在保存在服务器上的文件。静态资源包括：html页面、css文件、js文件、图片等。

- 当内容、图片、界面需要更新时，直接修改.html文件。

动态网站：

- 当用户访问网站时，根据`某些逻辑`,动态生成对应的`HTML、CSS、JS`代码给用户（这也就是web服务器开发的本质）。

- 通过某种手段，当有新的消息时，**自动**的完成网站的更新。

总结：

由于静态网站在维护的局限性，所以产生了动态网站。

实现动态网站的技术：php/jsp/.net/python等。

动态网站的原理：浏览器请求动态网站的页面（比如*.php），php拼接数据并动态生成html页面，然后将新生成的页面返回给浏览器

php 之所以被称为最好的语言，是因为：基本上，我们能够想到的功能，它都帮助我们封装成了方法。十分方便。


## PHP的常见语法

**PHP代码执行方式**：

- 在服务器端执行，然后返回给用户结果。如果直接使用浏览器打开，就会解析为文本。

- 意思是说，需要浏览器通过 http请求，才能够执行php页面。

这里只列举常用的PHP语法，更为详细的语法教程可以查阅 [api 文档](http://www.w3school.com.cn/php/index.asp)。

### 第一段 php 代码

将 WampServer 跑起来，在D:\wamp\www下新建一个`1.php`文件，代码如下：

1.php：

```
<?php
	echo "hello smyhvae";
?>
```


在浏览器中输入`http://127.0.0.1/2018-02-28/1.php`，效果如下：

![](http://img.smyhvae.com/20180228_0910.png)


**代码的编写位置**：

上方代码中，注意php语言的格式，第一行和第三行的格式中，没有空格。代码的编写位置在`<?php 代码写在这里?>`。

### 注释

php 注释的写法跟 js 一致。

```
<?php
	//这是单行注释
	/*
		这是多行注释
	*/
?>
```


### 变量

- 变量以`$`符号开头，其后是变量的名称。大小写敏感。

- 变量名称必须以字母或下划线开头。

举例：

```
	$a1;
	$_abc;
```

### 数据类型

PHP支持的数据类型包括：

- 字符串

- 整数

- 浮点数

- 布尔

- 数组

- 对象

- NULLL


定义字符串时需要注意：

- 单引号`` ：内部的内容只是作为字符串。

- 双引号"" ：如果内部是PHP的变量,那么会将该变量的值解析。如果内部是html代码，也会解析成html。


说白了，单引号里的内容，一定是字符串。双引号里的内容，可能会进行解析。

```
	echo "<input type=`button` value=`smyhvae`>";
```

上面这个语句，就被会解析成按钮。


```
	// 字符串
	$str = '123';

	// 字符串拼接
	$str2 = '123'.'哈哈哈';


	// 整数
	$numA = 1; //正数
	$numB = -2;//负数

	// 浮点数
	$x = 1.1;

	// 布尔
	$a = true;
	$b = false;

	// 普通数组：数组中可以放 数字、字符串、布尔值等，不限制类型。
	$arr1 = array('123', 123);
	echo $arr1[0];

	// 关系型数组：类似于json格式
	$arr2 = $array(`name`=>`smyhvae`, `age`=>`26`);
	echo $arr2[`name`];  //获取时，通过  key 来获取

```

上方代码中注意，php 中字符串拼接的方式是 `.`。要注意哦。


### 运算符

PHP 中的运算符跟 JavaScript 中的基本一致，用法也基本一致。

- 算数运算符：`+`、`-`、`/`、`*`、`%`

- 赋值运算符：`x = y`、`x += y`,`x -= y`等。

举例：

```php
<?php
	$x = 10;
	$y = 6;

	echo ($x + $y); // 输出 16
	echo ($x - $y); // 输出 4
	echo ($x * $y); // 输出 60
	echo ($x / $y); // 输出 1.6666666666667
	echo ($x % $y); // 输出 4
?>
```

### 函数的定义

语法格式：

```php

	function functionName() {
	  //这里写代码
	}
```

（1）有参数、无返回值的函数：

```php
	function sayName($name){
	    echo $name.'你好哦';
	}
	// 调用
	sayName('smyhvae');
```

（2）有参数、参数有默认值的函数：

```php
	function sayFood($food='西兰花'){
	    echo $food.'好吃';
	}
	// 调用
	sayFood('西葫芦');// 如果传入参数,就使用传入的参数
	sayFood();// 如果不传入参数,直接使用默认值
```

（3）有参数、有返回值的函数：

```php
	function sum($a,$b){
		return $a+$b
	}
	sum(1,2);// 返回值为1+2 = 3
```

### 类和对象

PHP中允许使用对象这种**自定义**的数据类型。必须先声明，实例化之后才能够使用。

定义最基础的类：

```php
	class Fox{

	        public $name = 'itcast';
	        public $age = 10;
	}

	$fox = new $fox;
	// 对象属性取值
	$name = $fox->name;
	// 对象属性赋值
	$fox->name = '小狐狸';
```


带构造函数的类：

```php
	class fox{
	    // 私有属性,外部无法访问
	    var $name = '小狐狸';
	    // 定义方法 用来获取属性
	    function Name(){
	    return $this->name;
	    }
	    // 构造函数,可以传入参数
	    function fox($name){
	    $this->name = $name
	    }
	}

    // 定义了构造函数 需要使用构造函数初始化对象
    $fox = new fox('小狐狸');
    // 调用对象方法,获取对象名
    $foxName = $fox->Name();
```



### 内容输出

- `echo`：输出字符串。

- `print_r()`：输出复杂数据类型。比如数组、对象。

- `var_dump()`：输出详细信息。






```php
	$arr =array(1,2,'123');

	echo'123';
	//结果：123


	print_r($arr);
	//结果：Array ( [0] => 1 [1] => 2 [2] => 123 )

	var_dump($arr);
	/* 结果：
	array
	  0 => int 1
	  1 => int 2
	  2 => string '123' (length=3)
	*/

```

### 循环语句

这里只列举了`foreach`、`for`循环。

for 循环：

```php
	for ($x=0; $x<=10; $x++) {
	  echo "数字是：$x <br>";
	}

```


foreach 循环：

```php
	$colors = array("red","green","blue","yellow");

	foreach ($colors as $value) {
	  echo "$value <br>";
	}
```

上方代码中，参数一：循环的对象。参数二：将对象的值挨个取出，直到最后。

如果循环的是对象，输出的是对象的属性的值。

输出结果：


```bash
	red
	green
	blue
	yellow
```


## php中的header()函数

浏览器访问http服务器，接收到响应时，会根据响应**报文头**的内容进行一些具体的操作。在php中，我们可以根据 **header** 来设置这些内容。


**header()函数的作用**：用来向客户端(浏览器)发送报头。直接写在php代码的第一行就行。

下面列举几个常见的 header函数。

（1）设置编码格式：

```php
	header('content-type:text/html; charset= utf-8');
```

例如：

```php
<?php
	header('content-type:text/html; charset= utf-8');
	echo "我的第一段 PHP 脚本";
?>
```

（2）设置页面跳转：

```php
	header('location:http://www.baidu.com');
```


设置页面刷新的间隔：


```php
	header('refresh:3; url=http://www.xiaomi.com');
```


## php中的 get 请求和 post 请求

### get 请求

可以通过`$_GET`对象来获取。

**举例**：下面是一个简单的表单代码，通过 get 请求将数据提交到01.php。


（1）index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!-- 通过 get 请求，将表单提交到 php 页面中 -->
<form action="01.php" method="get">
    <label for="">姓名：
        <input type="text" name="userName"></label>
    <br/>
    <label for="">邮箱：
        <input type="text" name="userEmail"></label>
    <br/>
    <input type="submit" name="">
</form>

</body>
</html>
```

（2）01.php：


```php
<?php
	header('content-type:text/html; charset= utf-8');
    echo "<h1>php 的get 请求演示</h1>";
    echo '用户名：'.$_GET['userName'];
    echo '<br/>';
    echo '邮箱：'.$_GET['userEmail'];
 ?>
```

上方代码可以看出，`$_GET`是关系型数组，可以通过 **$_GET[`key`]**获取值。这里的 key 是 form 标签中表单元素的 name 属性的值。

效果：

![](http://img.smyhvae.com/20180228_1140.gif)

### post 请求

可以通过`$_POST`对象来获取。

**举例**：下面是一个简单的表单代码，通过 post 请求将数据提交到02.php。

（1）index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!-- 通过 post 请求，将表单提交到 php 页面中 -->
<form action="02.php" method="post" >
  <label for="">姓名：
      <input type="text" name= "userName"></label>
      <br/>
  <label for="">邮箱：
      <input type="text" name= "userEmail"></label>
      <br/>
      <input type="submit" name="">
</form>

</body>
</html>
```

（2）02.php：

```php
<?php
	header('content-type:text/html; charset= utf-8');
    echo "<h1>php 的 post 请求演示</h1>";
    echo '用户名：'.$_POST['userName'];
    echo '<br/>';
    echo '邮箱：'.$_POST['userEmail'];
 ?>
```

上方代码可以看出，`$_POST`是关系型数组，可以通过 **$_POST[`key`]**获取值。这里的 key 是 form 标签中表单元素的 name 属性的值。

效果演示：

![](http://img.smyhvae.com/20180228_1145.gif)

实际开发中，可能不会单独写一个php文件，常见的做法是：在 html 文件中嵌入 php 的代码。

比如说，原本 html 中有个 li 标签是存放用户名的：

```html
	<li>smyhvae</li>
```

嵌入 php后，用户名就变成了动态获取的：

```php
	<li><?php
		echo $_POST[`userName`]
		?></li>
```

## php 中文件相关的操作

### 文件上传 `$_FILES`

上传文件时，需要在html代码中进行如下设置：

（1）在html表单中，设置`enctype="multipart/form-data"`。该值是必须的。

（2）只能用 post 方式获取。

代码如下：

（1）index.html:

```html
  <form action="03-fileUpdate.php" method="post" enctype="multipart/form-data">
	  <label for="">照片:
	      <input type="file" name = "picture" multiple=""></label>
	  <br/>
	  <input type="submit" name="">
  </form>

```

（2）在 php 文件中打印 file 的具体内容：

```php
<?php
  sleep(5);// 让服务器休息一会
  print_r($_FILES);  //打印 file 的具体内容
?>
```

演示效果：

![](http://img.smyhvae.com/20180228_php_post_file.gif)

上方现象可以看出：

- 点击提交后，服务器没有立即出现反应,而是休息了一会`sleep(5)`。

- 在`wamp/tmp`目录下面出现了一个`.tmp`文件。

- .tmp文件一会就被自动删除了。

- 服务器返回的内容中有文件的名字`[name] => computer.png`，以及上传文件保存的位置`D:\wamp\tmp\php3D70.tmp`。服务器返回的内容如下：

```bash
	Array ( [upFile] => Array ( [name] => yangyang.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\phpCC56.tmp [error] => 0 [size] => 18145 ) )
```

### 文件保存

我们尝试一下，把上面的例子中的`临时目录`下面的文件保存起来。这里需要用到 php 里的 `move_uploaded_file()`函数。[#](http://www.w3school.com.cn/php/func_filesystem_move_uploaded_file.asp)

格式如下：

```php
	move_uploaded_file($_FILES['photo']['tmp_name'], './images/test.jpg');
```

参数解释：参数一：移动的文件。参数二：目标路径。

（1）index.html：（这部分的代码保持不变）

```php
	<form action="03.fileUpdate.php" method="post" enctype="multipart/form-data">
      <label for="">照片:
          <input type="file" name = "picture" multiple=""></label>
      <br/>
      <input type="submit" name="">
  	</form>
```


（2）PHP代码：

暂略。


### WampServer 中修改上传文件的大小

（1）打开 WampServer的文件`php.ini`：

![](http://img.smyhvae.com/20180228_1454.png)


（2）修改`php.ini`中的如下内容：

设置文件最大上传限制：（值的大小可以根据需求修改）

```php
	file_uploads = On;         是否允许上传文件 On/Off 默认是On
	upload_max_filesize = 32M; 设置 上传文件的最大限制
	post_max_size = 32M;       设置 通过Post提交的最多数据
```


考虑网络传输快慢：这里修改一些参数：


```php
	max_execution_time = 30000      ; 脚本最长的执行时间 单位为秒
	max_input_time = 600            ; 接收提交的数据的时间限制 单位为秒
	memory_limit = 1024M            ; 最大的内存消耗
```




## HTTP 协议

### 请求

客户端发出的请求，主要由三个组成部分：请求行、请求头、请求主体。如下图所示：

20180228_1505.jpg

**1、请求行：**

- 请求方法：GET or POST

- 请求URL

- HTTP协议版本


**2、请求头：**

常见的请求头如下：

```bash
User-Agent：浏览器的具体类型　　如：User-Agent：Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0

Accept：浏览器支持哪些数据类型　　如：Accept: text/html,application/xhtml+xml,application/xml;q=0.9;

Accept-Charset：浏览器采用的是哪种编码　　如：Accept-Charset: ISO-8859-1

Accept-Encoding：浏览器支持解码的数据压缩格式　　如：Accept-Encoding: gzip, deflate

Accept-Language：浏览器的语言环境　　如：Accept-Language zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3

Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。Host:www.baidu.com

Connection：表示是否需要持久连接。
属性值可以是Keep-Alive/close，HTTP1.1默认是持久连接，它可以利用持久连接的优点，当页面包含多个元素时（例如Applet，图片），显著地减少下载所需要的时间。
要实现这一点，Servlet需要在应答中发送一个Content-Length头，最简单的实现方法是：先把内容写入ByteArrayOutputStream，然后在正式写出内容之前计算它的大小。如：Connection: Keep-Alive

Content-Length：表示请求消息正文的长度。对于POST请求来说Content-Length必须出现。

Content-Type：WEB服务器告诉浏览器自己响应的对象的类型和字符集。例如：Content-Type: text/html; charset='gb2312'

Content-Encoding：WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip

Content-Language：WEB服务器告诉浏览器自己响应的对象的语言。

Cookie：最常用的请求头，浏览器每次都会将cookie发送到服务器上，允许服务器在客户端存储少量数据。

Referer：包含一个URL，用户从该URL代表的页面出发访问当前请求的页面。服务器能知道你是从哪个页面过来的。Referer: http://www.baidu.com/

```

**3、请求体：**

指的是提交给服务器的数据。

需要注意的是，如果是往服务器提交数据，需要在请求头中设置`Content-Type: application/x-www-form-urlencoded`(在ajax中需要手动设置)。

### 响应

响应报文是服务器返回给客户端的。组成部分有响应行、响应头、响应主体。

![](http://img.smyhvae.com/20180228_1510.jpg)


**1、状态行：**

HTTP响应行：主要是设置响应状态等信息。



**2、响应头：**

Cookie、缓存等信息就是在响应头的属性中设置的。

常见的响应头如下：



```bash
Cache-Control

响应输出到客户端后，服务端通过该报文头属告诉客户端如何控制响应内容的缓存。

下面，的设置让客户端对响应内容缓存3600秒，也即在3600秒内，如果客户再次访问该资源，直接从客户端的缓存中返回内容给客户，不要再从服务端获取（当然，这个功能是靠客户端实现的，服务端只是通过这个属性提示客户端“应该这么做”，做不做，还是决定于客户端，如果是自己宣称支持HTTP的客户端，则就应该这样实现）。

Cache-Control: max-age=3600

ETag

一个代表响应服务端资源（如页面）版本的报文头属性，如果某个服务端资源发生变化了，这个ETag就会相应发生变化。它是Cache-Control的有益补充，可以让客户端“更智能”地处理什么时候要从服务端取资源，什么时候可以直接从缓存中返回响应。

ETag: "737060cd8c284d8af7ad3082f209582d"

Location

我们在Asp.net中让页面Redirect到一个某个A页面中，其实是让客户端再发一个请求到A页面，这个需要Redirect到的A页面的URL，其实就是通过响应报文头的Location属性告知客户端的，如下的报文头属性，将使客户端redirect到iteye的首页中：

Location: http://www.google.com.hk

Set-Cookie

服务端可以设置客户端的Cookie，其原理就是通过这个响应报文头属性实现的。

Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1


```


**3、HTTP响应体：**

如果请求的是HTML页面，那么返回的就是HTML代码。如果是JS就是JS代码。

### 抓包工具

常见的抓包工具有：Fiddler、Charles。





















```php

```









```php

```









```php

```









```php

```



