
## 前言

> 在日常开发中，String 对象（字符串对象）的使用频率是非常高的。所以有必要详细介绍。

需要注意的是：**字符串的所有方法，都不会改变原字符串**（字符串的不可变性），操作完成后会返回一个新的值。

字符串的常见方法如下。

## indexOf()/lastIndexOf()：获取指定字符的索引

> 这个方法，是使用频率最高的一个方法。

### 语法


**语法1**：

```javascript
    索引值 = str.indexOf(想要查询的字符);
```

解释：`indexOf()` 是从前向后索引字符串的位置。同理，`lastIndexOf()`是从后向前寻找。

**作用**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

因此可以得出一个技巧：

- **如果获取的索引值为0，说明字符串是以查询的参数为开头的**。

- 如果获取的索引值为-1，说明这个字符串中没有指定的内容。


代码举例1：

```javascript
    var str = 'abcdea';

    //给字符查索引(索引值为0,说明字符串以查询的参数为开头)
    console.log(str.indexOf("c"));
    console.log(str.lastIndexOf("c"));

    console.log(str.indexOf("a"));
    console.log(str.lastIndexOf("a"));

```

打印结果：

![](http://img.smyhvae.com/20180202_1420.png)

**语法2**：

这个方法还可以指定第二个参数，用来指定查找的**起始位置**。语法如下：


```javascript
    索引值 = str.indexOf(想要查询的字符, [起始位置]);
```

代码举例2：（两个参数时，需要特别注意）

```javascript
    var str = 'qianguyihao';
    result = str.indexOf('a', 3); // 从第三个位置开始查找 'a'这个字符 【重要】

    console.log(result); // 打印结果：9
```

上方代码中，`indexOf()`方法中携带了两个参数，具体解释请看注释。


### 举例

**案例**：查找字符串"qianguyihao"中，所有 `a` 出现的位置以及次数。

思路：

（1）先查找第一个 a 出现的位置。

（2）只要indexOf 返回的结果不是 -1 就继续往后查找。

（3）因为indexOf 只能查找到第一个，所以后面的查找，可以利用第二个参数，在当前索引加1，从而继续查找。

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
   var str = new String("smyhvae");

    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
```

打印结果：

![](http://img.smyhvae.com/20180202_1401.png)

上面这个例子一般不用。一般打印数组和json的时候用索引，打印String不建议用索引。

### 2、str[index]

`str.charAt(index)`和`str[index]`的效果是一样的，不再赘述。区别在于：`str[index]`是H5标准里新增的特性。

### 3、charCodeAt(index)

语法：

```javascript
    字符 = str.charCodeAt(index);
```

解释：返回字符串指定位置的字符的 Unicode 编码。不会修改原字符串。

在实际应用中，通过这个方法，我们可以判断用户按下了哪个按键。


**代码举例**：打印字符串的**占位长度**。

提示：一个英文占一个位置，一个中文占两个位置。

思路：判断该字符是否在0-127之间（在的话是英文，不在是非英文）。

代码实现：

```html
<script>
    //    sort();   底层用到了charCodeAt();

    var str = "I love my country!我你爱中国！";

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

从打印结果可以看出：字符串的长度是24，但是却占了30个字符位（一个中文占两个字符位）。

另外，sort()方法其实底层也是用到了charCodeAt()，因为用到了Unicode编码。

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

## slice()

语法：

```javascript
    字符串 = str.slice(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将及截取到的内容返回。


注意：上面的参数，包左不包右。参数举例如下：

- `(2, 5)` 截取时，包左不包右。

- `(2)` 表示**从指定的索引位置开始，截取到最后**。

- `(-3)` 表示从倒数第三个开始，截取到最后。

- `(1, -1)` 表示从第一个截取到倒数第一个。

- `(5, 2)` 表示前面的大，后面的小，返回值为空。

## substring()

语法：

```javascript
    字符串 = str.substring(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。和`slice()`类似。

`substring()`和`slice()`是类似的。但不同之处在于：

- `substring()`不能接受负值作为参数。如果传递了一个**负值**，则默认使用0。

- `substring()`还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， `substring(1, 0)`相当于截取的是第一个字符。

## substr()

语法：

```javascript
   字符串 = str.substr(开始索引, 截取的长度);
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将及截取到的内容返回。

注意，这个方法的第二个参数**截图的长度**，不是结束索引。


参数举例：

- `(2,4)` 从索引值为2的字符开始，截取4个字符。

- `(1)` 从指定位置开始，截取到最后。

- `(-3)` 从倒数第几个开始，截取到最后.


备注：ECMAscript 没有对 `substr()` 方法进行标准化，因此不建议使用它。

## split()：字符串转换为数组 【重要】


语法：


```javascript
   新的数组 = str.split(分隔符);
```

解释：将一个字符串拆分成一个数组。不会改变原字符串。


备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的json数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就排上用场了。

**代码举例1**：

```javascript

    var str = "qian, gu, yi, hao"; // 用逗号隔开的字符串
    var array = str.split(","); // 将字符串 str 拆分成数组，通过逗号来拆分

    console.log(array); // 打印结果是数组：["qian", " gu", " yi", " hao"]
```

**代码举例2**：

```javascript
    //split()方法：字符串变数组
    var str3 = "生命壹号|许嵩|smyhvae";

    console.log(str3);

    console.log(str3.split());   // 无参数，表示：把字符串作为一个元素添加到数组中。

    console.log(str3.split(""));  //参数为空字符串，则表示：分隔字符串中每一个字符，分别添加到数组中

    console.log(str3.split("|")); //参数为指定字符，表示：此字符将不会出现在数组的任意一个元素中

    console.log(str3.split("许")); //同理
```

打印结果：

![](http://img.smyhvae.com/20180202_1503.png)


## replace()


语法：

```javascript
    新的字符串 = str.replace(被替换的字符，新的字符);
```

解释：将字符串中的指定内容，替换为新的内容并返回。不会修改原字符串。

注意：这个方法，只会替换第一个字符。

代码举例：

```javascript
    //replace()方法：替换
    var str2 = "Today is fine day,today is fine day !!!"
    console.log(str2);

    console.log(str2.replace("today","tomorrow"));  //只能替换第一个today
    console.log(str2.replace(/today/gi,"tomorrow")); //这里用到了正则，才能替换所有的today
```


## trim()

`trim()`：去除字符串前后的空白。

代码举例：

```javascript
    //去除前后的空格，trim();
    var str1 = "   a   b   c   ";
    console.log(str1);
    console.log(str1.trim());
```

打印结果：

![](http://img.smyhvae.com/20180202_1455.png)

## 大小写转换

举例：

```javascript
    var str = "abcdEFG";

    //转换成小写
    console.log(str.toLowerCase());

    //转换成大写
    console.log(str.toUpperCase());
```

## html方法

- anchor()  创建a链接

- big()

- sub()

- sup()

- link()

- bold()

注意，str.link()  返回值是字符串。

举例：

```javascript
    var str = "你好";

    console.log(str.anchor())
    console.log(str.big())
    console.log(str.sub())
    console.log(str.sup())
    console.log(str.link("http://www.baidu.com"));
    console.log(str.bold())
```

![](http://img.smyhvae.com/20180202_1536.png)


## 字符串练习

**练习1**："smyhvaevaesmyh"查找字符串中所有m出现的位置。

代码实现：

```javascript
    var str2 = "abcoefoxyozzopp";
    for(var i=0;i<str2.length;i++){
        //如果指定位置的符号=== "o"
        //str2[i]
        if( str2.charAt(i)==="o"){
            console.log(i);
        }
    }
```

**练习2**：判断一个字符串中出现次数最多的字符，统计这个次数

```html
<script>
    var str2 = "smyhvaevaesmyhvae";

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


    console.log("----------------");
    //获取json中属性值最大的选项
    var maxKey = "";
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

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


