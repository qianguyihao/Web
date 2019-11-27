
## 常见概念

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。


### 常见的 BOM 对象

BOM可以使我们通过JS来操作浏览器。BOM中为我们提供了一组对象，用来完成对浏览器的操作。

常见的 BOM对象有：

- Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。

- Navigator：代表当前浏览器的信息，通过该对象可以来识别不同的浏览器。

- Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。

- History：代表浏览器的历史记录，可以通过该对象操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。

- Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。

备注：这些 BOM 对象都是作为 window 对象的属性保存的，可以通过window对象来使用，也可以直接使用。比如说，我可以使用 `window.location.href`，也可以直接使用 `location.href`，二者是等价的。

备注2：不要忘了，之前学习过的， `document`也是在`window`中保存的。

我们先来讲一下 `Navigator`。

## Navigator 和 `navigator.userAgent`

`Navigator`代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了。

一般我们只会使用`navigator.userAgent`来获取浏览器的信息。


userAgent 的值是一个字符串，简称 **UA**，这个字符串中包含了用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent。‘

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
            var ua = navigator.userAgent;

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

不同浏览器（包括微信内置的浏览器）的 useragent 信息，是不一样的，我们可以根据 `navigator.userAgent`属性来获取。

比如说，我们在电脑浏览器上，按F12，然后在控制台输入`navigator.userAgent`，如下：

![](http://img.smyhvae.com/20180425_1656.png)

上图显示，MacOS上的Chrome浏览器的 UserAgent 是：

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
```

我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景，非常有用，请务必掌握。操作如下：

（1）需要点击 edit，手动添加：

![](http://img.smyhvae.com/20191127_1902.png)

（2）添加时，根据 User agent 来识别不同的浏览器：

![](http://img.smyhvae.com/20191127_1917.png)


### 不同浏览器的 UserAgent

iPhone版微信浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 MicroMessenger/6.3.15 NetType/WIFI Language/zh_CN
```

Android版微信浏览器：

```
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI
```


### 参考链接

- [判断微信内置浏览器的UserAgent](http://www.cnblogs.com/7z7chn/p/5370352.html)

- [微信内置浏览器UserAgent的判断](https://gist.github.com/wjp2013/fff34c063cf0cf227d65)


