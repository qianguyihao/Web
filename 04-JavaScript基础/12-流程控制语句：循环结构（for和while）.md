---
title: 12-流程控制语句：循环结构（for和while）
---

<ArticleTopAd></ArticleTopAd>

## 前言

循环语句：通过循环语句可以反复执行一段代码多次。

## for 循环

### for 循环的语法

语法：

```
for(①初始化表达式; ②条件表达式; ④更新表达式){
	③语句...
}
```

执行流程：

```
①执行初始化表达式，初始化变量（初始化表达式只会执行一次）

②执行条件表达式，判断是否执行循环：
	如果为true，则执行循环③
	如果为false，终止循环

④执行更新表达式，更新表达式执行完毕继续重复②
```

for 循环举例：

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

上方代码的解释：i 是循环变量，1 是初始值，i<100是执行条件，i++是步长。

### for 循环举例

```javascript
for (let i = 1; i < 13; i = i + 4) {
    console.log(i);
}
```

上方代码的遍历步骤：

```
程序一运行，将执行let i = 1;这条语句， 所以i的值是1。
然后程序会验证一下i < 13是否满足，1<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是5。

程序会会验证一下i < 13是否满足，5<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是9。

程序会会验证一下i < 13是否满足，9<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是13。

程序会会验证一下i < 13是否满足，13<13是假，所以不执行循环体了，将退出循环。

最终输出输出结果为：1、5、9
```

接下来做几个题目。

**题目 1**：

```javascript
for (let i = 1; i < 10; i = i + 3) {
    i = i + 1;
    console.log(i);
}
```

输出结果：2、6、10

**题目 2**：

```javascript
for (let i = 1; i <= 10; i++) {}
console.log(i);
```

输出结果：11

**题目 3**：

```javascript
for (let i = 1; i < 7; i = i + 3) {}
console.log(i);
```

输出结果：7

**题目 4**：

```javascript
for (let i = 1; i > 0; i++) {
    console.log(i);
}
```

死循环。

## while 循环语句

### while 循环

语法：

```javascript
while(条件表达式){
	语句...
}
```

执行流程：

```
while语句在执行时，先对条件表达式进行求值判断：

	如果值为true，则执行循环体：
		循环体执行完毕后，继续对表达式进行判断
		如果为true，则继续执行循环体，以此类推

	如果值为false，则终止循环
```

**如果有必要的话，我们可以使用 break 来终止循环**。

### do...while 循环

语法：

```javascript
do{
	语句...
}while(条件表达式)

```

执行流程：

```
do...while语句在执行时，会先执行循环体：

	循环体执行完毕以后，再对while后的条件表达式进行判断：
		如果结果为true，则继续执行循环体，执行完毕继续判断，以此类推
		如果结果为false，则终止循环

```

### while 循环和 do...while 循环的区别

这两个语句的功能类似，不同的是：

-   while：先判断后执行。只有条件表达式为真，才会执行循环体。
-   do...while：先执行后判断。无论条件表达式是否为真，循环体至少会被执行一次。



### while 循环举例

题目：假如投资的年利率为 5%，试求从 1000 块增长到 5000 块，需要花费多少年？

代码实现：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            /*
             * 假如投资的年利率为5%，试求从1000块增长到5000块，需要花费多少年
             */

            //定义一个变量，表示当前的钱数
            let money = 1000;

            //定义一个计数器
            let count = 0;

            //定义一个while循环来计算每年的金额
            while (money < 5000) {
                money *= 1.05;

                //使count自增
                count++;
            }

            console.log(money);
            console.log('一共需要' + count + '年');
        </script>
    </body>
</html>
```

打印结果：

```
5003.18854203379

一共需要33年
```

另外，你也可以自己算一下，假如投资的年利率为 5%，从 1000 块增长到 1 万块，需要花费 48 年：

```
10401.269646942128
一共需要48年
```

## break 和 continue

> 这个知识点非常重要。

### break

-   break 可以用来退出 switch 语句或退出**整个**循环语句（循环语句包括 for 循环、while 循环。不包括 if。单独的 if 语句里不能用 break 和 continue，否则会报错）。

-   break 会立即终止离它**最近**的那个循环语句。

-   可以为循环语句创建一个 label，来标识当前的循环（格式：label:循环语句）。使用 break 语句时，可以在 break 后跟着一个 label，这样 break 将会结束指定的循环，而不是最近的。

**举例 1**：通过 break 终止循环语句

```javascript
for (let i = 0; i < 5; i++) {
    console.log('i的值:' + i);
    if (i == 2) {
        break; // 注意，虽然在 if 里 使用了 break，但这里的 break 是服务于外面的 for 循环。
    }
}
```

打印结果：

```
i的值:0
i的值:1
i的值:2
```

**举例 2**：label 的使用

```javascript
outer: for (let i = 0; i < 5; i++) {
    console.log('外层循环 i 的值：' + i);
    for (let j = 0; j < 5; j++) {
        break outer; // 直接跳出outer所在的外层循环（这个outer是我自定义的label）
        console.log('内层循环 j 的值:' + j);
    }
}
```

打印结果：

```
外层循环 i 的值：0
```

### continue

-   continue 只能用于循环语句（包括 for 循环、while 循环，不包括 if。单独的 if 语句里不能用 break 和 continue，否则会报错）。可以用来跳过**当次**循环，继续下一次循环。

-   同样，continue 默认只会离他**最近**的循环起作用。

-   同样，如果需要跳过指定的当次循环，可以使用 label 标签。

举例：

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log('i的值:' + i);
}
```

打印结果：

```
i的值:1

i的值:3

i的值:5

i的值:7

i的值:9
```

## 各种练习

### 练习一：质数相关

**题目**：在页面中接收一个用户输入的数字，并判断该数是否是质数。

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <script type="text/javascript">
            /*
            质数：只能被1和它自身整除的数，1不是质数也不是合数，质数必须是大于1的自然数。
         */

            const num = prompt('请输入一个大于1的整数:');

            //判断这个值是否合法
            if (num <= 1) {
                alert('该值不合法！');
            } else {
                //先用flag标志位，来保存当前的数的状态
                //默认当前num是质数
                let flag = true;

                //判断num是否是质数
                //获取2-num之间的数
                for (let i = 2; i < num; i++) {
                    //console.log(i);
                    //判断num是否能被i整除
                    if (num % i == 0) {
                        //一旦发现：如果num能被i整除，则说明num一定不是质数，
                        //此时：设置flag为false，然后跳出 for 循环
                        flag = false;
                        break;
                    }
                }

                //如果num是质数则输出
                if (flag) {
                    alert(num + '是质数！！！');
                } else {
                    alert('这个不是质数');
                }
            }
        </script>
    </head>

    <body></body>
</html>
```

### 练习二：质数相关

**题目**：打印 1~100 之间的所有质数

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <script type="text/javascript">
            /*
             * 打印出1-100之间所有的质数
             */

            //打印2-100之间所有的数
            for (let i = 2; i <= 100; i++) {
                //创建一个布尔值，用来保存结果，默认i是质数
                let flag = true;

                //判断i是否是质数
                //获取到2-i之间的所有的数
                for (let j = 2; j < i; j++) {
                    //判断i是否能被j整除
                    if (i % j == 0) {
                        //如果进入判断则证明i不是质数,修改flag值为false
                        flag = false;
                    }
                }

                //如果是质数，则打印i的值
                if (flag) {
                    console.log(i);
                }
            }
        </script>
    </head>

    <body></body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20181229_1415.png)

### 练习三：99 乘法表

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <style type="text/css">
            body {
                width: 2000px;
            }

            span {
                display: inline-block;
                width: 80px;
            }
        </style>
        <script type="text/javascript">
            /*
             * 1.打印99乘法表
             *   1*1=1
             *   1*2=2 2*2=4
             *   1*3=3 2*3=6 3*3=9
             *   1*4=4 2*4=8 3*4=12 4*4=16
             *                      ....9*9=81
             *
             * 2.打印出1-100之间所有的质数
             */

            //创建外层循环，用来控制乘法表的高度
            for (let i = 1; i <= 9; i++) {
                //创建一个内层循环来控制图形的宽度
                for (let j = 1; j <= i; j++) {
                    document.write('<span>' + j + '*' + i + '=' + i * j + '</span>');
                }

                //输出一个换行
                document.write('<br />');
            }
        </script>
    </head>

    <body></body>
</html>
```

页面效果：

![](http://img.smyhvae.com/20181229_1410.png)

## 赞赏作者

创作不易，你的赞赏和认可，是我更新的最大动力：

![](https://img.smyhvae.com/20220401_1800.jpg)