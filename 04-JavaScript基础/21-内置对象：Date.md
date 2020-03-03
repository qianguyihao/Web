

## 内置对象：Date

> Date 对象在实际开发中，使用得很频繁，且容易在细节地方出错，需要引起重视。

内置对象 Date 用来处理日期和时间。

**需要注意的是**：与 Math 对象不同，Date 对象是一个**构造函数** ，需要**先实例化**后才能使用。

## 创建Date对象

创建Date对象有两种写法：

- 写法一：如果Date()不写参数，就返回当前时间对象

- 写法二：如果Date()里面写参数，就返回括号里输入的时间对象

针对这两种写法，我们来具体讲一讲。

### 写法一：不传递参数时，则获取系统的当前时间对象

代码举例：

```javascript
var date1 = new Date();
console.log(date1);
console.log(typeof date1);
```

代码解释：不传递参数时，表示的是获取系统的当前时间对象。也可以理解成是：获取当前代码执行的时间。

打印结果：

```
Mon Feb 17 2020 21:57:22 GMT+0800 (中国标准时间)
object
```

### 写法二：传递参数

参数中既可以传递数字，也可以传递字符串。

代码举例：

```javascript
var date21 = new Date('2020/02/17 21:00:00');
console.log(date21);
// Mon Feb 17 2020 21:00:00 GMT+0800 (中国标准时间)

var date22 = new Date(2020, 2, 18); // 第二个参数返回的是三月，不是二月
console.log(date22);
// Wed Mar 18 2020 00:00:00 GMT+0800 (中国标准时间)

var date23 = new Date(2020, 3, 18, 22, 59, 58);
console.log(date23);
// Sat Apr 18 2020 22:59:58 GMT+0800 (中国标准时间)

var date24 = new Date('2020/04/19'); // 返回的就是四月
console.log(date24);
// Sun Apr 19 2020 00:00:00 GMT+0800 (中国标准时间)

var date25 = new Date('2020-05-20');
console.log(date25);
// Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

var date26 = new Date('Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)');
console.log(date26);
// Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)

```




## 日期的格式化

上一段内容里，我们获取到了 Date **对象**，但这个对象，打印出来的结果并不是特别直观。

如果我们需要获取日期的**指定部分**，就需要用到 Date对象自带的方法。

获取了日期指定的部分之后，我们就可以让日期按照指定的格式，进行展示（即日期的格式化）。比如说，我期望能以 `2020-02-02 19:30:59` 这种格式进行展示。

在这之前，我们先来看看 Date 对象有哪些方法。

### Date对象的方法

Date对象 有如下方法，可以获取日期和时间的**指定部分**：

- `getFullYear() `        获取年份

- `getMonth()  `           **获取月 0-11**（0代表一月）

- `getDate()`                 **获取日 1-31**。即：获取的是几号

- `getDay()`                 **获取星期 0-6**（0代表周日，1代表周一）

- `getHours()  `      获取小时 0-23

- `getMinutes() `         获取分钟 0-59

- `getSeconds()`         获取秒  0-59

- `getMilliseconds()`    获取毫秒 （1s = 1000ms）

**代码举例**：

```javascript
	// 我在执行这行代码时，当前时间为 2019年2月4日，周一，13:23:52
	var myDate = new Date();

	console.log(myDate); // 打印结果：Mon Feb 04 2019 13:23:52 GMT+0800 (中国标准时间)

	console.log(myDate.getFullYear()); // 打印结果：2019
	console.log(myDate.getMonth() + 1); // 打印结果：2
	console.log(myDate.getDate()); // 打印结果：4

	console.log(myDate.getDay()); // 打印结果：1

	console.log(myDate.getHours()); // 打印结果：13
	console.log(myDate.getMinutes()); // 打印结果：23
	console.log(myDate.getSeconds()); // 打印结果：52
	console.log(myDate.getMilliseconds()); // 打印结果：393

	console.log(myDate.getTime()); // 获取时间戳。打印结果：1549257832393
```

获取了日期和时间的指定部分之后，我们把它们用字符串拼接起来，就可以按照自己想要的格式，来展示日期。


### 举例1：年月日的格式化

代码举例：

```javascript
    // 格式化年月日：2020年2月2日 星期三
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var day = date.getDay();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
```


### 举例2：时分秒的格式化


封装一个函数，返回当前时间的时分秒，格式为 06:06:06）





## getTime()：获取时间戳

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



