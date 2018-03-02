



## 函数封装

ajax_tool.js：

```javascript
// 方法：ajax get 五部曲
function ajax_get(url,data) {
	// 异步对象
	var ajax = new XMLHttpRequest();

	// url 方法
	// 如果是get发送数据 发送的格式为 xxx.php?name=jack&age=18
	// 所以 这里 需要拼接 url
	if (data) {
		// 如果有值 需要拼接字符串
		// 拼接为xxx.php?name=jack&age=18
		url+='?';
		url+=data;
	}else{
	}

	ajax.open('get',url);
	// 发送
	ajax.send();

	// 注册事件
	ajax.onreadystatechange = function () {
		// 在事件中 获取数据 并修改界面显示
		if (ajax.readyState==4&& ajax.status==200) {
			console.log(ajax.responseText);
		}
	}
}


// 方法：ajax_post五部曲
function ajax_post(url,data) {
	// 异步对象
	var ajax = new XMLHttpRequest();

	// url 方法
	ajax.open('post',url);

	// 设置 请求报文
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	// 发送
	if (data) {
		// 如果 有值 post请求 是在 send中 发送给服务器
		ajax.send(data);
	}else{
		ajax.send();
	}


	// 注册事件
	ajax.onreadystatechange = function () {
		// 在事件中 获取数据 并修改界面显示
		if (ajax.readyState==4&&ajax.status==200) {
			console.log(ajax.responseText);
		}
	}

}


// 方法：将 get 跟post 封装到一起
/*
	参数1:url
	参数2:数据
	参数3:请求的方法
	参数4:数据成功获取以后，调用的方法
*/
function ajax_tool(url,data,method,success) {
	// 异步对象
	var ajax = new XMLHttpRequest();

	// get 跟post  需要分别写不同的代码
	if (method=='get') {
		// get请求
		if (data) {
			// 如果有值
			url+='?';
			url+=data;
		}else{

		}
		// 设置 方法 以及 url
		ajax.open(method,url);

		// send即可
		ajax.send();
	}else{
		// post请求
		// post请求 url 是不需要改变
		ajax.open(method,url);

		// 需要设置请求报文
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		// 判断data send发送数据
		if (data) {
			// 如果有值 从send发送
			ajax.send(data);
		}else{
			// 木有值 直接发送即可
			ajax.send();
		}
	}

	// 注册事件
	ajax.onreadystatechange = function () {
		// 在事件中 获取数据 并修改界面显示
		if (ajax.readyState==4&&ajax.status==200) {
			// console.log(ajax.responseText);

			// 将 数据 让 外面可以使用
			// return ajax.responseText;

			// 当 onreadystatechange 调用时 说明 数据回来了
			// ajax.responseText;

			// 数据成功获取以后，执行方法success()。
			//我们把获取的数据作为 success()的参数，意思是：
			//success方法是外面的，数据是里面给的。那数据就变相地传递到了外面去【重要】
			success(ajax.responseText);
		}
	}

}

```


## 函数调用（get方法）

test_get.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value="测试get" id='ajax_get'>
</body>
</html>
<!-- 导入 封装的js -->
<script type="text/javascript" src='ajax_tool.js'></script>
<script type="text/javascript">
	document.querySelector('#ajax_get').onclick = function () {
		// 直接使用 封装的 工具函数即可
		/*
			参数1:url
			参数2:数据
			参数3:请求的方法
			参数4：请求成功后，调用的方法
		*/
		var backData = ajax_tool('test_get.php','name=smyhvae&skill=code','get',function(data){
			console.log(data);
		});
		// 测试
		console.log(backData);
	}
</script>
```


test_get.php：


```php
<?php
	// 获取get提交的数据
	echo $_GET['skill'];
 ?>
```

## 函数调用（post方法）

test_post.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value="测试post" id='ajax_post'>
</body>
</html>
<!-- 导入 封装的js -->
<script type="text/javascript" src='ajax_tool.js'></script>
<script type="text/javascript">
	document.querySelector('#ajax_post').onclick = function () {
		// 直接使用 封装的 工具函数即可
		/*
			参数1:url
			参数2:数据
			参数3:请求的方法
			参数4:数据获取成功调用的方法
		*/
		var backData = ajax_tool('02.test_post.php','friend=好丽友','post',function(data){
			console.log(data);
		});
		// 测试
		console.log(backData);


		// 怎么样 处理数据 全部写在 匿名函数中
		ajax_tool('02.test_post.php','friend=好丽友','post',function(data){
			console.log(data);
			// 修改页面的显示呢?
		});

	}
</script>
```

test_post.php：

```php
<?php

	echo $_POST['friend'];
 ?>

```

工程文件：

- 2018-02-28-Ajax请求封装.rar