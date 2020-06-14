
## 内置对象简介

> JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象。

> 前面两种对象：是JS的基础内容，属于 ECMAScript； 第三个浏览器对象：属于JS独有，即 JS 内置的API。

**内置对象**：就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用或者最基本而必要的功能（属性和方法）。

内置对象最大的优点就是帮助我们快速开发。

**JavaScript的内置对象**：

| 内置对象 | 对象说明 |
|:-------------|:-------------|
|  Arguments | 函数参数集合|
|  Array | 数组|
|  Boolean | 布尔对象|
|  Math | 数学对象|
|  Date | 日期时间|
|  Error | 异常对象|
|  Function | 函数构造器|
|  Number | 数值对象|
|  Object | 基础对象|
|  RegExp | 正则表达式对象|
|  String | 字符串对象|

前面的几篇文章中，我们专门讲到了数组 Array。今天这篇文章，我们先来讲一下内置对象 Math。



## 字符串前言

> 在日常开发中，String 对象（字符串对象）的使用频率是非常高的。所以有必要详细介绍。

需要注意的是：**字符串的所有方法，都不会改变原字符串**（字符串的不可变性），操作完成后会返回一个新的值。

字符串的常见方法如下。

## 查找字符串

### 1、indexOf()/lastIndexOf()：获取字符串中指定内容的索引

> 这个方法，是使用频率最高的一个方法。


**语法 1**：

```javascript
索引值 = str.indexOf(想要查询的字符串);
```

备注：`indexOf()` 是从前向后查找字符串的位置。同理，`lastIndexOf()`是从后向前寻找。

**解释**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

因此可以得出一个重要技巧：

-   **如果获取的索引值为 0，说明字符串是以查询的参数为开头的**。

-   如果获取的索引值为-1，说明这个字符串中没有指定的内容。

举例 1：(查找单个字符)

```javascript
const str = 'abcdea';

//给字符查索引(索引值为0,说明字符串以查询的参数为开头)
console.log(str.indexOf('c'));
console.log(str.lastIndexOf('c'));

console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
```

打印结果：

![](http://img.smyhvae.com/20180202_1420.png)

举例 2：（查找字符串）

```js
const name = 'qianguyihao';

console.log(name.indexOf('yi')); // 打印结果：6
```

**语法 2**：

这个方法还可以指定第二个参数，用来指定查找的**起始位置**。语法如下：

```javascript
索引值 = str.indexOf(想要查询的字符串, [起始位置]);
```

举例 3：（两个参数时，需要特别注意）

```javascript
var str = 'qianguyihao';
result = str.indexOf('a', 3); // 从第三个位置开始查找 'a'这个字符 【重要】

console.log(result); // 打印结果：9
```

上方代码中，`indexOf()`方法中携带了两个参数，具体解释请看注释。

### indexOf 举例

**案例**：查找字符串"qianguyihao"中，所有 `a` 出现的位置以及次数。

思路：

（1）先查找第一个 a 出现的位置。

（2）只要 indexOf 返回的结果不是 -1 就继续往后查找。

（3）因为 indexOf 只能查找到第一个，所以后面的查找，可以利用第二个参数，在当前索引加 1，从而继续查找。

代码实现：

```js
var str = 'qianguyihao';
var index = str.indexOf('a');
var num = 0;
while (index !== -1) {
    console.log(index);
    num++; // 每打印一次，就计数一次
    index = str.indexOf('o', index + 1);
}

console.log('a 出现的次数是: ' + num);
```


### 2、search()：获取字符串中指定内容的索引（参数里一般是正则）


**语法**：

```javascript
索引值 = str.search(想要查找的字符串);
索引值 = str.search(正则表达式);

```

备注：`search()` 方法里的参数，既可以传字符串，也可以传正则表达式。

**解释**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。


举例：

```js
const name = 'qianguyihao';

console.log(name.search('yi')); // 打印结果：6
console.log(name.search(/\yi/i)); // 打印结果：6
```


### 3、includes()：字符串中是否包含指定的内容

**语法**：

```js
布尔值 = str.includes(想要查找的字符串, [position]);
```

**解释**：判断一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回 true；否则返回 false。

参数中的 `position`：如果不指定，则默认为0；如果指定，则规定了检索的起始位置。

```js
const name = 'qianguyihao';

console.log(name.includes('yi')); // 打印结果：true
console.log(name.includes('haha')); // 打印结果：false

console.log(name.includes('yi',7)); // 打印结果：false
```


### 4、startsWith()：字符串是否以指定的内容开头

**语法**：

```js
布尔值 = str.startsWith(想要查找的内容, [position]);
```

**解释**：判断一个字符串是否以指定的子字符串开头。如果是，则返回 true；否则返回 false。

**参数中的position**：

- 如果不指定，则默认为0。

- 如果指定，则规定了**检索的起始位置**。检索的范围包括：这个指定位置开始，直到字符串的末尾。即：[position, str.length)

举例：

```js
const name = 'abcdefg';

console.log(name.startsWith('a')); // 打印结果：true
console.log(name.startsWith('b')); // 打印结果：false

// 因为指定了起始位置为3，所以是在 defg 这个字符串中检索。
console.log(name.startsWith('d',3)); // 打印结果：true
console.log(name.startsWith('c',3)); // 打印结果：false
```

### 5、endsWith()：字符串是否以指定的内容结尾

**语法**：

```js
布尔值 = str.endsWith(想要查找的内容, [position]);z
```

**解释**：判断一个字符串是否以指定的子字符串结尾。如果是，则返回 true；否则返回 false。

**参数中的position**：

- 如果不指定，则默认为 str.length。

- 如果指定，则规定了**检索的结束位置**。检索的范围包括：从第一个字符串开始，直到这个指定的位置。即：[0, position)

- 或者你可以这样简单理解：endsWith() 方法里的position，表示**检索的长度**。

注意：startsWith() 和 endsWith()这两个方法，他们的 position 的含义是不同的，请仔细区分。

举例：

```js
const name = 'abcdefg';

console.log(name.endsWith('g')); // 打印结果：true
console.log(name.endsWith('f')); // 打印结果：false

// 因为指定了截止位置为3，所以是在 abc 这个长度为3字符串中检索
console.log(name.endsWith('c', 3)); // 打印结果：true
console.log(name.endsWith('d', 3)); // 打印结果：false
```

注意看上方的注释。

参考链接：[JavaScript endsWith()介绍](https://www.softwhy.com/article-2885-1.html)

## 获取指定位置的字符

### 1、charAt(index)

语法：

```javascript
字符 = str.charAt(index);
```

解释：返回字符串指定位置的字符。这里的 `str.charAt(index)`和`str[index]`的效果是一样的。

注意：字符串中第一个字符的下标是 0。如果参数 index 不在 [0, string.length) 之间，该方法将返回一个空字符串。

**代码举例**：

```javascript
var str = new String('smyhvae');

for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
```

打印结果：

![](http://img.smyhvae.com/20180202_1401.png)

上面这个例子一般不用。一般打印数组和 json 的时候用索引，打印 String 不建议用索引。

### 2、str[index]

`str.charAt(index)`和`str[index]`的效果是一样的，不再赘述。区别在于：`str[index]`是 H5 标准里新增的特性。

### 3、charCodeAt(index)

语法：

```javascript
字符 = str.charCodeAt(index);
```

解释：返回字符串指定位置的字符的 Unicode 编码。不会修改原字符串。

在实际应用中，通过这个方法，我们可以判断用户按下了哪个按键。

**代码举例**：打印字符串的**占位长度**。

提示：一个英文占一个位置，一个中文占两个位置。

思路：判断该字符是否在 0-127 之间（在的话是英文，不在是非英文）。

代码实现：

```html
<script>
    //    sort();   底层用到了charCodeAt();

    var str = 'I love my country!我你爱中国！';

    //需求：求一个字符串占有几个字符位。
    //思路；如果是英文，站一个字符位，如果不是英文占两个字符位。
    //技术点：判断该字符是否在0-127之间。（在的话是英文，不在是非英文）
    alert(getZFWlength(str));
    alert(str.length);

    //定义方法：字符位
    function getZFWlength(string) {
        //定义一个计数器
        var count = 0;
        for (var i = 0; i < string.length; i++) {
            //对每一位字符串进行判断，如果Unicode编码在0-127，计数器+1；否则+2
            if (string.charCodeAt(i) < 128 && string.charCodeAt(i) >= 0) {
                count++;
            } else {
                count += 2;
            }
        }
        return count;
    }
</script>
```

打印结果：

```
    30
    24
```

从打印结果可以看出：字符串的长度是 24，但是却占了 30 个字符位（一个中文占两个字符位）。

另外，sort()方法其实底层也是用到了 charCodeAt()，因为用到了 Unicode 编码。

## 字符串截取


### 1、slice()


> slice() 方法用的最多。


语法：

```javascript
新字符串 = str.slice(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将及截取到的内容返回。

注意：上面的参数，包左不包右。参数举例如下：

- `(2, 5)` 截取时，包左不包右。

- `(2)` 表示**从指定的索引位置开始，截取到最后**。

- `(-3)` 表示从倒数第三个开始，截取到最后。

- `(1, -1)` 表示从第一个截取到倒数第一个。

- `(5, 2)` 表示前面的大，后面的小，返回值为空。

### 2、substring()

语法：

```javascript
新字符串 = str.substring(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。和`slice()`类似。

`substring()`和`slice()`是类似的。但不同之处在于：

- `substring()`不能接受负值作为参数。如果传递了一个**负值**，则默认使用 0。

- `substring()`还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， `substring(1, 0)`相当于截取的是第一个字符。

### 3、substr()

语法：

```javascript
字符串 = str.substr(开始索引, 截取的长度);
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将及截取到的内容返回。

注意，这个方法的第二个参数**截取的长度**，不是结束索引。

参数举例：

- `(2,4)` 从索引值为 2 的字符开始，截取 4 个字符。

- `(1)` 从指定位置开始，截取到最后。

- `(-3)` 从倒数第几个开始，截取到最后.

备注：ECMAscript 没有对 `substr()` 方法进行标准化，因此不建议使用它。



## String.fromCharCode()

`String.fromCharCode()`：根据字符的 Unicode 编码获取字符。

代码举例：

```javascript
var result1 = String.fromCharCode(72);
var result2 = String.fromCharCode(20013);

console.log(result1); // 打印结果：H
console.log(result2); // 打印结果：中
```

## concat()

语法：

```javascript
    新字符串 = str1.concat(str2)； //连接两个字符串
```

解释：字符串的连接。

这种方法基本不用，直接把两个字符串相加就好。

是的，你会发现，数组中也有`concat()`方法，用于数组的连接。这个方法在数组中用得挺多的。

代码举例：

```javascript
var str1 = 'qiangu';
var str2 = 'yihao';

var result = str1.concat(str2);
console.log(result); // 打印结果：qianguyihao
```

## split()：字符串转换为数组 【重要】

语法：

```javascript
新的数组 = str.split(分隔符);
```

解释：通过指定的分隔符，将一个字符串拆分成一个**数组**。不会改变原字符串。

备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就派上用场了。

**代码举例 1**：

```javascript
var str = 'qian, gu, yi, hao'; // 用逗号隔开的字符串
var array = str.split(','); // 将字符串 str 拆分成数组，通过逗号来拆分

console.log(array); // 打印结果是数组：["qian", " gu", " yi", " hao"]
```

**代码举例 2**：

```javascript
//split()方法：字符串变数组
var str3 = '千古壹号|qianguyihao|许嵩';

console.log('结果1：' +str3.split()); // 无参数，表示：把整个字符串作为一个元素添加到数组中。

console.log(str3.split('')); // 参数为空字符串，则表示：分隔字符串中每一个字符，分别添加到数组中

console.log(str3.split('|')); // 参数为指定字符，表示：用 '|' 分隔字符串。此分隔符将不会出现在数组的任意一个元素中

console.log(str3.split('许')); // 同上
```

打印结果：（都是数组）

![](http://img.smyhvae.com/20200611_2050.png)





## replace()

语法：

```javascript
新的字符串 = str.replace(被替换的字符，新的字符);
```

解释：将字符串中的指定内容，替换为新的内容并返回。不会修改原字符串。

注意：这个方法，默认只会替换第一个被匹配到的字符。如果要全局替换，需要使用正则。

代码举例：

```javascript
//replace()方法：替换
var str2 = 'Today is fine day,today is fine day !';
console.log(str2);

console.log(str2.replace('today', 'tomorrow')); //只能替换第一个today
console.log(str2.replace(/today/gi, 'tomorrow')); //这里用到了正则，才能替换所有的today
```

## repeat()：重复字符串

语法：

```js
newStr = str.repeat(重复的次数);
```

解释：将字符串重复指定的次数。会返回新的值，不会修改原字符串。

举例1：

```js
const name = 'qianguyihao';

console.log(name.repeat(2)); // 打印内容：qianguyihaoqianguyihao
```

举例2：（模糊字符串的后四位）

```js
const telephone = '13088889999';
const mix_telephone = telephone.slice(0, -4) + '*'.repeat(4); // 模糊电话号码的后四位

console.log(telephone); // 打印结果：13088889999
console.log(mix_telephone); // 打印结果：1308888****
```






## trim()

`trim()`：去除字符串前后的空白。

代码举例：

```javascript
//去除字符串前后的空格，trim();
let str = '   a   b   c   ';
console.log(str);
console.log(str.length);

console.log(str.trim());
console.log(str.trim().length);
```

打印结果：

![](http://img.smyhvae.com/20200607_2132.png)

## 大小写转换

举例：

```javascript
var str = 'abcdEFG';

//转换成小写
console.log(str.toLowerCase());

//转换成大写
console.log(str.toUpperCase());
```

## html 方法

- anchor() 创建 a 链接

- big()

- sub()

- sup()

- link()

- bold()

注意，str.link() 返回值是字符串。

举例：

```javascript
var str = '你好';

console.log(str.anchor());
console.log(str.big());
console.log(str.sub());
console.log(str.sup());
console.log(str.link('http://www.baidu.com'));
console.log(str.bold());
```

![](http://img.smyhvae.com/20180202_1536.png)

## 字符串练习

**练习 1**："smyhvaevaesmyh"查找字符串中所有 m 出现的位置。

代码实现：

```javascript
var str2 = 'abcoefoxyozzopp';
for (var i = 0; i < str2.length; i++) {
    //如果指定位置的符号=== "o"
    //str2[i]
    if (str2.charAt(i) === 'o') {
        console.log(i);
    }
}
```

**练习 2**：判断一个字符串中出现次数最多的字符，统计这个次数

```html
<script>
    var str2 = 'smyhvaevaesmyhvae';

    //定义一个json，然后判断json中是够有该属性，如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
    var json = {};
    for (var i = 0; i < str2.length; i++) {
        //判断：如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
        var key = str2.charAt(i);
        if (json[key] === undefined) {
            json[key] = 1;
        } else {
            json[key] += 1;
        }
    }
    console.log(json);

    console.log('----------------');
    //获取json中属性值最大的选项
    var maxKey = '';
    var maxValue = 0;
    for (var k in json) {
        //        if(maxKey == ""){
        //            maxKey = k;
        //            maxValue = json[k];
        //        }else{
        if (json[k] > maxValue) {
            maxKey = k;
            maxValue = json[k];
        }
        //        }
    }
    console.log(maxKey);
    console.log(maxValue);
</script>
```

打印结果：

![](http://img.smyhvae.com/20180202_1540.png)

## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
