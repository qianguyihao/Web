

> 本文首发于[博客园](http://www.cnblogs.com/smyhvae/p/8310295.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。


## 代码块

用`{}`包围起来的代码，就是代码块。


JS中的代码块，只具有**分组**的作用，没有其他的用途。

代码块中的内容，在外部是完全可见的。举例：

```javascript
    {
        var a = 2;
        alert("smyhvae");
        console.log("永不止步");
    }

    console.log("a = " + a);
```

打印结果：（可以看出，虽然变量 a 是定义在代码块中的，但是在外部依然可以访问）

```
永不止步
a = 2
```


## 流程控制语句

在一个程序执行的过程中，各条语句的执行顺序对程序的结果是有直接影响的。所以，我们必须清楚每条语句的执行流程。而且，很多时候我们要通过控制语句的执行顺序来实现我们要完成的功能。

### 流程控制语句分类

- 顺序结构

- 选择结构：if语句、switch语句

- 循环结构：while语句、for语句


## 顺序结构

按照代码的先后顺序，依次执行。结构图如下：

![](http://img.smyhvae.com/20181227_1200.png)

## if语句

if语句有以下三种。

### 1、条件判断语句

> 条件成立才执行。如果条件不成立，那就什么都不做。

格式：

```javascript
	if (条件表达式) {
		// 条件为真时，做的事情

	}
```


### 2、条件分支语句


格式1：

```javascript
	if (条件表达式) {
		// 条件为真时，做的事情

	} else {
		// 条件为假时，做的事情

	}
```


格式：（多分支的if语句）

```javascript
	if (条件表达式1) {
		// 条件1为真时，做的事情

	} else if (条件表达式2) {
		// 条件1不满足，条件2满足时，做的事情

	} else if (条件表达式3) {
		// 条件1、2不满足，条件3满足时，做的事情

	} else {
		// 条件1、2、3都不满足时，做的事情
	}
```

以上所有的语句体中，只执行其中一个。

### 做个题目

```
	根据BMI（身体质量指数）显示一个人的体型。
	BMI指数，就是体重、身高的一个计算公式。公式是：
	BMI =体重÷身高的平方

	比如，老师的体重是81.6公斤，身高是1.71米。
	那么老师的BMI就是  81.6 ÷ 1.712     等于 27.906022365856163

	过轻：低于18.5
	正常：18.5-24.99999999
	过重：25-27.9999999
	肥胖：28-32
	非常肥胖, 高于32

	用JavaScript开发一个程序，让用户先输入自己的体重，然后输入自己的身高（弹出两次prompt框）。
	计算它的BMI，根据上表，弹出用户的身体情况。比如“过轻” 、 “正常” 、“过重” 、 “肥胖” 、“非常肥胖”。
```

**答案**：

写法1：

```javascript
	//第一步，输入身高和体重
	var height = parseFloat(prompt("请输入身高，单位是米"));
	var weight = parseFloat(prompt("请输入体重，单位是公斤"));
	//第二步，计算BMI指数
	var BMI = weight / Math.pow(height, 2);
	//第三步，if语句来判断。注意跳楼现象
	if (BMI < 18.5) {
		alert("偏瘦");
	} else if (BMI < 25) {
		alert("正常");
	} else if (BMI < 28) {
		alert("过重");
	} else if (BMI <= 32) {
		alert("肥胖");
	} else {
		alert("非常肥胖");
	}
```

写法2：

```javascript
	//第一步，输入身高和体重
	var height = parseFloat(prompt("请输入身高，单位是米"));
	var weight = parseFloat(prompt("请输入体重，单位是公斤"));
	//第二步，计算BMI指数
	var BMI = weight / Math.pow(height, 2);
	//第三步，if语句来判断。注意跳楼现象
	if (BMI > 32) {
		alert("非常肥胖");
	} else if (BMI >= 28) {
		alert("肥胖");
	} else if (BMI >= 25) {
		alert("过重");
	} else if (BMI >= 18.5) {
		alert("正常")
	} else {
		alert("偏瘦");
	}
```

### if语句的嵌套

我们通过下面这个例子来引出if语句的嵌套。

```
	一个加油站为了鼓励车主多加油，所以加的多有优惠。
	92号汽油，每升6元；如果大于等于20升，那么每升5.9；
	97号汽油，每升7元；如果大于等于30升，那么每升6.95
	编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。
```

![](http://img.smyhvae.com/20180117_2232.png)


代码实现如下：

```javascript
	//第一步，输入
	var bianhao = parseInt(prompt("您想加什么油？填写92或者97"));
	var sheng = parseFloat(prompt("您想加多少升？"));

	//第二步，判断
	if (bianhao == 92) {
		//编号是92的时候做的事情
		if (sheng >= 20) {
			var price = sheng * 5.9;
		} else {
			var price = sheng * 6;
		}
	} else if (bianhao == 97) {
		//编号是97的时候做的事情
		if (sheng >= 30) {
			var price = sheng * 6.95;
		} else {
			var price = sheng * 7;
		}
	} else {
		alert("对不起，没有这个编号的汽油！");
	}

	alert("价格是" + price);
```


## switch语句（条件分支语句）

switch语句也叫条件分支语句。

格式：

```
switch(表达式) {
	case 值1：
		语句体1;
		break;

	case 值2：
		语句体2;
		break;

	...
	...

	default：
		语句体 n+1;
		break;
}
```


### switch语句的执行流程

 流程图如下：

![](http://img.smyhvae.com/20190815_1501.png)

执行流程如下：

（1）首先，计算出表达式的值，和case依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到break就会结束。

（2）然后，如果所有的case都和表达式的值不匹配，就会执行default语句体部分。


### switch 语句的结束条件【非常重要】

- 情况a：遇到break就结束，而不是遇到default就结束。（因为break在此处的作用就是退出switch语句）

- 情况b：执行到程序的末尾就结束。

我们来看下面的两个例子就明白了。

### case穿透的问题

switch 语句中的`break`可以省略，但一般不建议。否则结果可能不是你想要的，会出现一个现象：**case穿透**。


**举例1**：（case穿透的情况）

```javascript
    var num = 4;

    //switch判断语句
    switch (num) {
        case 1:
            console.log("星期一");
            break;
        case 2:
            console.log("星期二");
            break;
        case 3:
            console.log("星期三");
            break;
        case 4:
            console.log("星期四");
        //break;
        case 5:
            console.log("星期五");
        //break;
        case 6:
            console.log("星期六");
            break;
        case 7:
            console.log("星期日");
            break;
        default:
            console.log("你输入的数据有误");
            break;
    }

```

上方代码的运行结果，可能会令你感到意外：

```
星期四
星期五
星期六
```


上方代码的解释：因为在case 4和case 5中都没有break，那语句走到case 6的break才会停止。

**举例2**：

```javascript
    //switch判断语句
    var number = 5;

    switch (number) {
        default:
            console.log("我是defaul语句");
            // break;
        case (2):
          	console.log("第二个呵呵:" + number);
            //break;
        case (3):
          	console.log("第三个呵呵:" + number);
            break;
        case (4):
          	console.log("第四个呵呵:" + number);
            break;
    }

```

上方代码的运行结果，你也许会意外：

```
我是defaul语句
第二个呵呵:5
第三个呵呵:5
```

上方代码的解释：代码走到 default 时，因为没有遇到 break，所以会继续往下走，直到遇见 break 或者走到程序的末尾。 从这个例子可以看出：switch 语句的结束与 default 的顺序无关。

## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)


