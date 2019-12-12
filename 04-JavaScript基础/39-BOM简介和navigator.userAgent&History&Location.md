
## 常见概念

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

### 常见的 BOM 对象

BOM可以让我们通过JS来操作浏览器。BOM中为我们提供了一些对象，来完成对浏览器相关的操作。

常见的 BOM对象有：

- Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。

- Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

- Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。

- History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。

- Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。

备注：这些 BOM 对象都是作为 window 对象的属性保存的，可以通过window对象来使用，也可以直接使用。比如说，我可以使用 `window.location.href`，也可以直接使用 `location.href`，二者是等价的。

备注2：不要忘了，之前学习过的`document`也是在`window`中保存的。

这篇文章，我们先来讲一下 几个常见的 BOM 对象。

## Navigator 和 `navigator.userAgent`

`Navigator`代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了。

**一般我们只会使用`navigator.userAgent`来获取浏览器的信息**。


userAgent 的值是一个字符串，简称 **UA**，这个字符串中包含了用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent。

**代码举例**：（获取当前浏览器的UA）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            var ua = navigator.userAgent; // 获取当前浏览器的 userAgent

            console.log('qianguyihao 当前浏览器的UA是：' + ua);

            if (/firefox/i.test(ua)) {
                alert('是火狐浏览器');
            } else if (/chrome/i.test(ua)) {
                alert('是Chrome浏览器');
            } else if (/msie/i.test(ua)) {
                alert('是IE浏览器');
            } else if ('ActiveXObject' in window) {
                alert('是 IE11 浏览器');
            }
        </script>
    </body>
</html>
```

### 在电脑上模拟移动端浏览器

不同浏览器（包括微信内置的浏览器）的 userAgent 信息，是不一样的，我们可以根据 `navigator.userAgent`属性来获取。

比如说，我们在电脑浏览器上，按F12，然后在控制台输入`navigator.userAgent`，如下：

![](http://img.smyhvae.com/20180425_1656.png)

上图显示，MacOS上的Chrome浏览器的 userAgent 是：

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
```

我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景，非常有用，请务必掌握。操作如下：

（1）需要点击 edit，手动添加：

![](http://img.smyhvae.com/20191127_1903.png)

（2）添加时，根据 User agent 来识别不同的浏览器：

![](http://img.smyhvae.com/20191127_1918.png)


### 不同浏览器的 userAgent

iOS 版微信浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 MicroMessenger/6.3.15 NetType/WIFI Language/zh_CN
```

Android 版微信浏览器：

```
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI
```

iOS 版本QQ浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C202 QQ/7.3.5.473 V1_IPH_SQ_7.3.5_1_APP_A Pixel/1125 Core/UIWebView Device/Apple(iPhone X) NetType/WIFI QBWebViewType/1
```

Android 版 QQ浏览器：

```
Mozilla/5.0 (Linux; Android 4.4.2; PE-TL20 Build/HuaweiPE-TL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 V1_AND_SQ_7.3.2_762_YYB_D QQ/7.3.2.3350 NetType/WIFI WebP/0.3.0 Pixel/1080
```


**参考链接**：

- [微信、QQ在Android和iOS的UserAgent](https://blog.csdn.net/taambernk520/article/details/80801574)

- [判断微信内置浏览器的UserAgent](http://www.cnblogs.com/7z7chn/p/5370352.html)

- [微信内置浏览器UserAgent的判断](https://gist.github.com/wjp2013/fff34c063cf0cf227d65)


## History 对象

History对象：可以用来操作浏览器的向前或向后翻页。

### History对象的属性

```javascript
history.length
```

解释：获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为1。

### History对象的方法

**方法1**：

```
history.back();
```

解释：用来回退到上一个页面，作用和浏览器的「回退按钮」一样。

**方法2**：

```javascript
history.forward();
```

解释：用来跳转下一个页面，作用和浏览器的「前进按钮」一样。

**方法3**：

```javascript
history.go( int n);  // 需要整数作为参数

// 代码举例：
history.go( 1 ); // 向前跳转一个页面，相当于 history.forward()

history.go( 2 ); // 表示向前跳转两个页面

history.go( 0 ); // 刷新当前页面

history.go( -1 ); // 向后跳转一个页面，相当于 history.back()

history.go( -2 ); // 向后跳转两个页面

```

解释：向前/向后跳转 n 个页面。

备注：浏览器的前进按钮、后退按钮，在这个位置：

![](http://img.smyhvae.com/20180201_2146.png)


## Location 对象

Location 对象：封装了浏览器地址栏的 URL 信息。

下面介绍一些常见的属性和方法。

### Location 对象的属性

**属性1**：

```
location.href

location.href = 'https://xxx';
```

解释：获取当前页面的 url 路径（或者设置 url 路径）。

代码举例1：

```javascript
console.log(location.href); // 获取当前页面的url 路径

```

代码举例2：

```javascript
    location.href = 'www.baidu.com'; // 跳转到指定的页面链接。通俗理解就是：跳转到其他的页面
```

从上方的**举例2**中可以看出：如果直接将`location.href`属性修改为一个绝对路径（或相对路径），则页面会自动跳转到该路径，并生成相应的历史记录。


### Location 对象的方法

**方法1**：

```javascript
    location.assign(str);
```

解释：用来跳转到其他的页面，作用和直接修改`location.href`一样。

**方法2**：

```javascript
    location.reload();
```

解释：用于重新加载当前页面，作用和刷新按钮一样。

代码举例：

```javascript
    location.reload(); // 重新加载当前页面。
    location.reload(true); // 在方法的参数中传递一个true，则会强制清空缓存刷新页面。

```

**方法3**：

```javascript

    location.replace();
```

解释：使用一个新的页面替换当前页面，调用完毕也会跳转页面。但不会生成历史记录，不能使用「后退按钮」后退。


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


