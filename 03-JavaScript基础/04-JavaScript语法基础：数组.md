

> 本文最初发表于[博客园](https://www.cnblogs.com/smyhvae/p/8359654.html)，并在[GitHub](https://github.com/smyhvae/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## 数组的定义

之前学习的数据类型，只能存储一个值（字符串为一个值）。如果我们想存储多个值，就可以使用数组。

### 数组的定义

（1）字面量定义。举例：

```
var arr = [1,2,3];
```

（2）对象定义（数组的构造函数）。格式：

```
var arr = new Array(参数);
```

参数位置是一个数值时，表示数组长度；多个数值时，表示数组中的元素。

### 数组的操作

1、求数组的长度：

```
	数组的长度 = 数组名.length；
```

可以通过修改数组的长度来改变数组中元素的个数，如果改小了，数组将从后面删除元素。（伪数组arguments的长度可以修改，但是不能修改里面的元素，后面单独讲）

2、获取数组中的元素：

```
	数组中的指定元素 = 数组名[索引值];
```

数组的索引代表的是数组中的元素在数组中的位置，从0开始。

如果索引值有误（比如元素没那么多），系统不报错，而是会给定值为undefined。

### 遍历数组（重要）

遍历数组即：获取并操作数组中的每一个元素。

举例：

```javascript
        var arr = ["生命壹号","许嵩","永不止步"];
        for(var i = 0;i<arr.length;i++){
            console.log(arr[i]);  // arr[i]代表的是数组中的每一个元素i
        }

        console.log(arr);
```

打印结果：

![](http://img.smyhvae.com/20180124_2008.png)

## 数组Array的常用方法

Array数组是属于**内置对象**，我们可以在下面的网站上查询各种方法。

- MDN（开发者网站）：<https://developer.mozilla.org/zh-CN/>

Array有各种api接口（Application Programming Interface，应用程序编程接口），下面分别介绍。

（1）判断是否为数组：instanceof

```javascript
    布尔类型值 = A instanceof B;
```

解释：判断A是否为B类型（instanceof 是一个关键字）。

在数组里，这种方法已经用的不多了，因为有下面这种方法。

（2）判断是否为数组：isArray()

```javascript
    布尔类型值 = Array.isArray(被检测的值) ;
```

PS：属于HTML5中新增的方法。

（3）转换数组：toString()

```javascript
    字符串 = 数组.toString();
```

解释：把数组转换成字符串，每一项用`,`分割。

（4）返回数组本身：valueOf()

```javascript
    数组本身 = 数组.valueOf();
```

这个方法的意义不大。因为我们指直接写数组对象的名字，就已经是数组本身了。

（5）将数组中的元素用符号连接成字符串：join()

```javascript
	字符串 = 数组.join(参数);
```

参数决定用什么符号进行连接。如果不写参数，则和toString()的效果一致。

举例：

```javascript
    var arr = ["生命壹号","许嵩","棒棒哒"];

    console.log(arr.join());    //无参数
    console.log(arr.join(" ")); //用空格进行连接
    console.log(arr.join(""));  //用空字符串进行连接
    console.log(arr.join("&")); //用符号"&"进行连接
```

打印结果：

```
	生命壹号,许嵩,棒棒哒

	生命壹号 许嵩 棒棒哒

	生命壹号许嵩棒棒哒

	生命壹号&许嵩&棒棒哒
```

join方法有一定的实际用途：当我们需要把一堆字符串进行连接时，我们可以把他们转换成数组，然后调用数组的join()方法。这样做有个好处是：内存不会溢出。


## 伪数组：arguments

arguments代表的是实参。有个讲究的地方是：arguments**只在函数中使用**。

（1）返回函数**实参**的个数：arguments.length

举例：

```javascript
    fn(2,4);
    fn(2,4,6);
    fn(2,4,6,8);

    function fn(a,b) {
        console.log(arguments);
        console.log(fn.length);         //获取形参的个数
        console.log(arguments.length);  //获取实参的个数

        console.log("----------------");
    }
```

打印结果：

![](http://img.smyhvae.com/20180125_2140.png)

（2）返回正在执行的函数：arguments.callee

在使用函数**递归**调用时，推荐使用arguments.callee代替函数名本身。

（3）之所以说arguments是伪数组，是因为：**arguments可以修改元素，但不能改变数组的长短**。举例：

```javascript
    fn(2,4);
    fn(2,4,6);
    fn(2,4,6,8);

    function fn(a,b) {
        arguments[0] = 99;  //将实参的第一个数改为99
        arguments.push(8);  //此方法不通过，因为无法增加元素
    }

```

## 数组的添加和删除

（1）push()：在数组**最后面**插入项，返回数组的长度

```javascript
	数组改后的长度 = 数组.push(元素);
```

（2）pop()：取出数组中的**最后一个**元素，返回被删除的元素

```javascript
	被删除的元素 = 数组.pop();
```

（3）unshift()：在数组**最前面**插入项，返回数组的长度

数组改后的长度 = 数组.unshift(元素);

（4）shift()：取出数组中的**第一个**元素，返回被删除的元素

```javascript
	被删除的元素 = 数组.shift();
```

## 数组的反转和排序

（1）reverse()：翻转数组（返回值是反转后的数组，而且**原数组也已经被反转了**）

```
	反转后的数组  =  数组.reverse();
```

举例：

```javascript
    var arr = ["a","b","c","d","e","f"];

    console.log(arr);              //反转前打印
    console.log(arr.reverse());    //反转
    console.log(arr);              //反转后打印
```

打印结果：

![](http://img.smyhvae.com/20180125_2220.png)

注意：反转后，打印原来的数组发现，原来的数组已经被反转了。

（2）sort()：给数组排序，返回排序后的数组（排序的规则看参数）

```
	从小到大排序后的数组 = 数组.sort(function(a,b){
	                                  return a-b;
	});

```

- 无参：按照数组元素的**首字符对应的Unicode编码值**，从小到大排列数组元素。

- 带参：必须为函数（回调函数：callback）。这个回调函数中带有两个参数，代表数组中的前后元素。
	- 如果返回值（a-b）为负数，a排b前面。
	- 如果返回值（a-b）等于0，不动。
	- 如果返回值（a-b）为正数，a排b后面。

上面的这个带参的排序，其实是调用了底层的**冒泡排序**，小的排前面，大的排后面。

PS：sort方法的功能非常强大，能对数字和字母进行排列。

## 数组的一些其他方法

（1）concat() ：把参数拼接到当前数组（原数组不会被修改）

```javascript
	新数组 = 数组1.concat(数组2);

```

举例：

```javascript
    var arr1 = [1,2,3];
    var arr2 = ["a","b","c","d","e","f"];

    console.log(arr1.concat(arr2));  //把参数拼接到当前数组
    console.log(arr1);
    console.log(arr2);
```

打印结果：

![](http://img.smyhvae.com/20180126_1040.png)

从打印结果中可以看到，原数组（数组1、数组2）并没有被修改。

（2）slice()：从当前数组中截取一个新的数组（不影响原来的数组）

```javascript
	新数组 = 原数组.slice(开始位置index，结束位置index);    //注意：索引值包括左边的，不包括右边的
```

举例：

```javascript
    var arr = ["a","b","c","d","e","f"];

    console.log(arr.slice(2));  //从第二个值开始截取
    console.log(arr.slice(2,4));  //截取从第二个到第四个之间的值（不包括第四个值）
    console.log(arr.slice(-2)); //截取最后两个值
    console.log(arr.slice(4,2));  //空


```

打印结果：

![](http://img.smyhvae.com/20180126_1053.png)

（3）splice()：删除当前数组的某些元素（原数组会被改变）

```javascript
	新数组 = 数组1.splice(起始索引index，需要操作的个数，弥补的值);
```

举例：

```javascript
    var arr11 = ["a","b","c","d","e","f"];
    var arr12 = arr11.splice(1);    //从第一个位置开始，删除元素
    console.log("原数组："+arr11);
    console.log("新数组："+arr12);
    console.log("-----------");

    var arr21 = ["a","b","c","d","e","f"];
    var arr22 = arr21.splice(1,3);    //从第一个元素开始删除，一共删除3个元素
    console.log(arr21);
    console.log(arr22);
```

打印结果：

![](http://img.smyhvae.com/20180126_1113.png)

PS：第三个参数很少用，这里先不讲。

（3）获取数据的索引：indexOf()、lastIndexOf()

- indexOf()：从前往后索引

- lastIndexOf() ：从后往前索引

```javascript
	索引值 = 数组.indexOf/lastIndexOf(数组中的元素内容);
```

 PS：如果没找到返回-1。

 举例：

```javascript
    var arr = ["a","b","c","d","e","d","c"];

    console.log(arr.indexOf("c"));       //从前往后，找"c"在哪个位置
    console.log(arr.lastIndexOf("d"));   //从前往后，找"d"在哪个位置
```

打印结果：

![](http://img.smyhvae.com/20180126_1125.png)

## 数组迭代方法

数组迭代方法包括：every()、filter()、forEach()、map()、some()

PS：这几个方法**不会修改原数组**。

语法格式：

```
数组/boolean/无 = 数组.every/filter/forEach/map/some(
                            function(element,index,arr){
                                            程序和返回值；
```

有了这几种方法，就可以替代一些for循环了。下面依次来介绍。

### every()方法

解释：对数组中每一项运行回调函数，如果都返回true，every就返回true；如果有一项返回false，则停止遍历，此方法返回false。

注意：every()方法的返回值是boolean值，参数是回调函数。

举例：

```javascript
    var arr1 = ["千古", "宿敌", "南山忆", "素颜"];
    var bool1 = arr1.every(function (element, index, array) {
        if (element.length > 2) {
            return false;
        }
        return true;
    });
    console.log(bool1);  //输出结果：false。只要有一个元素的长度是超过两个字符的，就返回false

    var arr2 = ["千古", "宿敌", "南山", "素颜"];
    var bool2 = arr2.every(function (element, index, array) {
        if (element.length > 2) {
            return false;
        }
        return true;
    });
    console.log(bool2);  //输出结果：true。因为每个元素的长度都是两个字符。
```

### some()方法

解释：对数组中每一项运行回调函数，只要有一项返回true，则停止遍历，此方法返回true。

### filter()方法

解释：对数组中每一项运行回调函数，该函数返回结果是true的项，将组成新的数组（返回值就是这个新的数组）。

```javascript
    var arr1 = ["千古", "宿敌", "南山忆", "素颜"];

    var arr2 = arr1.filter(function (element, index, array) {
        if (element.length > 2) { //arr1中的元素，如果是长度超过2个字符的，我就把它放到arr2中去
            return true;
        }
        return false;
    });
    console.log(arr1);
    console.log(arr2);

```

结果：

![](http://img.smyhvae.com/20180126_1410.png)

### forEach()方法

解释：遍历数组。

注意：无返回值，纯粹操作数组中的元素，所以应用场景并不多。

### map()方法

解释：对数组中每一项运行回调函数，返回该函数的结果，组成的新数组（返回值就是这个新的数组）。

举例：

```javascript
    var arr1 = ["千古", "宿敌", "南山忆", "素颜"];

    var arr2 = arr1.map(function (element, index, array) {
        return element + "vae";  //给arr1中所有的元素增加字符串"vae"，放到arr2中。
    });

    console.log(arr1);
    console.log(arr2);
```

结果：

![](http://img.smyhvae.com/20180126_1425.png)

## 清空数组

清空数组，有以下几种方式：

```javascript
	var array = [1,2,3,4,5,6];

	array.splice(0);      //方式1：删除数组中所有项目
	array.length = 0;     //方式1：length属性可以赋值，在其它语言中length是只读
	array = [];           //方式3：推荐
```

## 数组练习

### 练习1

**问题**：将一个字符串数组输出为`|`分割的形式，比如“千古|宿敌|素颜”。使用两种方式实现。

答案：

方式1：（不推荐）

```javascript
    var arr = ["千古","宿敌","素颜"];
    var str = arr[0];
    var separator = "|";
    for(var i = 1;i< arr.length;i++) {
        str += separator+arr[i];    //从第1个数组元素开始，每个元素前面加上符号"|"
    }

    console.log(str);
```

输出结果：

![](http://img.smyhvae.com/20180126_1336.png)

不推荐这种方式，因为：由于字符串的不变性，str拼接过多的话，容易导致内存溢出（很多个str都堆放在栈里）。

方式2：（推荐。通过array数组自带的api来实现）

```javascript
    var arr = ["千古","宿敌","素颜"];

    console.log(arr.join("|"));
```

结果：

![](http://img.smyhvae.com/20180126_1339.png)

### 练习2

题目：将一个字符串数组的元素的顺序进行反转，使用两种种方式实现。提示：第i个和第length-i-1个进行交换。

答案：

方式1：

```javascript
   function reverse(array) {
       var newArr = [];
       for (var i = array.length - 1; i >= 0; i--) {
           newArr[newArr.length] = array[i];
       }
       return newArr;
   }
```

方式2：（算法里比较常见的方式）

```javascript
   function reverse(array){
       for(var i=0;i<array.length/2;i++){
           var temp = array[i];
           array[i] = array[array.length-1-i];
           array[array.length-1-i] = temp;
       }
       return array;
   }
```

方式3：（数组自带的reverse方法）

现在我们学习了数组自带的api，我们就可以直接使用reverse()方法。

### 练习3

问题：针对工资的数组[1500,1200,2000,2100,1800]，把工资超过2000的删除。

答案：

```javascript
    var arr1 = [1500, 1200, 2000, 2100, 1800];

    var arr2 = arr1.filter(function (ele, index, array) {
        if (ele < 2000) {
            return true;
        }
        return false;
    })
    console.log(arr1);
    console.log(arr2);
```

结果：

![](http://img.smyhvae.com/20180126_1435.png)

### 练习4

问题：找到数组["c","a","z","a","x","a"]中每一个元素出现的次数。

分析：这道题建议用json数据来做，因为我们想知道a出现了几次，c出现了几次，x出现了几次。恰好`k:v ..  k:v`这种键值对的形式就比数组方便很多了。

键值对的形式：用key代表数组中的元素，用value代表元素出现的次数。

略难，答案暂略。

### 练习5

问题：编写一个方法去掉一个数组中的重复元素。

分析：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。

答案：

```javascript
//    编写一个方法 去掉一个数组的重复元素
    var arr = [1,2,3,4,5,2,3,4];
    console.log(arr);
    var aaa = fn(arr);
    console.log(aaa);
    //思路：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。
    function fn(array){
        var newArr = [];
        for(var i=0;i<array.length;i++){
            //开闭原则
            var bool = true;
            //每次都要判断新数组中是否有旧数组中的值。
            for(var j=0;j<newArr.length;j++){
                if(array[i] === newArr[j]){
                    bool = false;
                }
            }
            if(bool){
                newArr[newArr.length] = array[i];
            }
        }
        return newArr;
    }
```


## 我的公众号

想学习<font color=#0000ff>**代码之外的软技能**</font>？不妨关注我的微信公众号：**生命团队**（id：`vitateam`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
