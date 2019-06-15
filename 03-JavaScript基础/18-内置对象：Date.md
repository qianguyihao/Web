
## 内置对象简介

内置对象就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用的或是最基本而必要的功能。

**JavaScript的内置对象**：

| 内置对象 | 对象说明 |
|:-------------|:-------------|
|  Arguments | 函数参数集合|
|  Array | 数组|
|  Boolean | 布尔对象|
|  Date | 日期时间|
|  Error | 异常对象|
|  Function | 函数构造器|
|  Math | 数学对象|
|  Number | 数值对象|
|  Object | 基础对象|
|  RegExp | 正则表达式对象|
|  String | 字符串对象|

前面的几篇文章中，我们专门讲到了数组 Array。今天这篇文章，我们来讲一下其他的内置对象。

## 内置对象：Date

### Date对象的创建

**写法一**：表示的是当前代码执行的时间（也可以理解成是获取当前时间对象）

```javascript
    var date1 = new Date();
    console.log(date1);
```

**写法二**：在参数中传递一个表示时间的字符串（兼容性最强）

```javascript
    var date2 = new Date("2017/09/06 09:00:00");
    console.log(date2);
```

写法三：（不常用）

```javascript
    var date3 = new Date('Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)');
    console.log(date3 );
```

写法四：（不常用）

```javascript
    var date4 = new Date(2017, 1, 27);    //写法四
    console.log(date4);
```

以上四种写法的打印结果是：

![](http://img.smyhvae.com/20180202_1040.png)

### 获取日期和时间

Date对象 有如下方法，可以获取日期和时间：

- `getDate()`                 **获取日 1-31**

- `getDay()`                 **获取星期 0-6**（0代表周日，1代表周一）

- `getMonth()  `           **获取月 0-11**（0代表一月）

- `getFullYear() `        获取年份

- `getHours()  `      获取小时 0-23

- `getMinutes() `         获取分钟 0-59

- `getSeconds()`         获取秒  0-59

- `getMilliseconds()`    获取毫秒 （1s = 1000ms）

代码举例：

```javascript
	// 我在执行这行代码时，当前时间为 2019年2月4日，周一，13:23:52
	var myDate = new Date();

	console.log(myDate); // 打印结果：Mon Feb 04 2019 13:23:52 GMT+0800 (中国标准时间)
	console.log(myDate.getDate()); // 打印结果：4
	console.log(myDate.getDay()); // 打印结果：1
	console.log(myDate.getMonth()); // 打印结果：1
	console.log(myDate.getFullYear()); // 打印结果：2019
	console.log(myDate.getHours()); // 打印结果：13
	console.log(myDate.getMinutes()); // 打印结果：23
	console.log(myDate.getSeconds()); // 打印结果：52
	console.log(myDate.getMilliseconds()); // 打印结果：393

	console.log(myDate.getTime()); // 获取时间戳。打印结果：1549257832393
```


### getTime()：获取时间戳

Date对象 还有如下方法：

- `getTime()`         获取当前日期对象的**时间戳**。这个方法在实际开发中，用得比较多。

啥叫时间戳？接下来，我们解释一下。

**时间戳**：指的是从格林威治标准时间的`1970年1月1日，0时0分0秒`到当前日期所花费的**毫秒数**（1秒 = 1000毫秒）。

计算机底层在保存时间时，使用的都是时间戳。时间戳的存在，就是为了**统一**时间的单位。

我们再来看下面这样的代码：

```javascript
	var myDate = new Date("1970/01/01 0:0:0");

	console.log(myDate.getTime()); // 获取时间戳
```

打印结果（可能会让你感到惊讶）

```javascript
	-28800000
```

为啥打印结果是`-28800000`，而不是`0`呢？这是因为，我们的当前代码，是在中文环境下运行的，与英文时间会存在**8个小时的时差**（中文时间比英文时间早了八个小时）。如果代码是在英文环境下运行，打印结果就是`0`。


**利用时间戳检测代码的执行时间**：

我们可以在业务代码的前面定义 `时间戳1`，在业务代码的后面定义 `时间戳2`。把这两个时间戳相减，就能得出业务代码的执行时间。


### format()

将时间对象转换为指定格式。

参考链接：<https://www.cnblogs.com/tugenhua0707/p/3776808.html>

## 练习

### 举例1：模拟日历

要求每天打开这个页面，都能定时显示当前的日期。

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 800px;
            margin: 200px auto;
            color: red;
            text-align: center;
            font: 600 30px/30px "simsun";
        }
    </style>
</head>
<body>
    <div></div>

    <script>
        //模拟日历
        //需求：每天打开这个页面都能定时显示年月日和星期几

        //1.创建一个当前日期的日期对象
        var date = new Date();
        //2.然后获取其中的年、月、日和星期
        var year = date.getFullYear();
        var month = date.getMonth();
        var hao = date.getDate();
        var week = date.getDay();
//        console.log(year+" "+month+" "+hao+" "+week);
        //3.赋值给div
        var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var div = document.getElementsByTagName("div")[0];
        div.innerText = "今天是："+year+"年"+(month+1)+"月"+hao+"日 "+arr[week];

    </script>

</body>
</html>

```

实现效果：

![](http://img.smyhvae.com/20180202_1110.png)


### 举例2：发布会倒计时

实现思路：

设置一个定时器，每间隔1毫秒就自动刷新一次div的内容。

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 1210px;
            margin: 200px auto;
            color: red;
            text-align: center;
            font: 600 30px/30px "simsun";
        }
    </style>
</head>
<body>
<div></div>

<script>
    var div = document.getElementsByTagName("div")[0];
    var timer = setInterval(fn, 1);

    function fn() {
        var nowtime = new Date();
        var future = new Date("2019/02/03 11:20:00");
        var timeSum = future.getTime() - nowtime.getTime();  //获取时间差：发布会时间减去此刻的毫秒值
        var day = parseInt(timeSum / 1000 / 60 / 60 / 24);
        var hour = parseInt(timeSum / 1000 / 60 / 60 % 24);
        var minu = parseInt(timeSum / 1000 / 60 % 60);
        var sec = parseInt(timeSum / 1000 % 60);
        var millsec = parseInt(timeSum % 1000);

        //问题处理：所有的时间小于10的时候，在前面自动补0，毫秒值要补双0（比如如，把 8 秒改成 08 秒）
        day = day < 10 ? "0" + day : day;  //day小于10吗？如果小于，就补0；如果不小于，就是day本身
        hour = hour < 10 ? "0" + hour : hour;
        minu = minu < 10 ? "0" + minu : minu;
        sec = sec < 10 ? "0" + sec : sec;
        if (millsec < 10) {
            millsec = "00" + millsec;
        } else if (millsec < 100) {
            millsec = "0" + millsec;
        }
//        console.log(day);
//        console.log(parseInt(timeSum/1000/60/60/24));
        if (timeSum < 0) {
            div.innerHTML = "距离苹果发布会还有00天00小时00分00秒000毫秒";
            clearInterval(timer);
            return;
        }
        div.innerHTML = "距离苹果发布会还有" + day + "天" + hour + "小时" + minu + "分" + sec + "秒" + millsec + "毫秒";
    }
</script>
</body>

</html>
```

实现效果：

![](http://img.smyhvae.com/20180202_1130.gif)

## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)



