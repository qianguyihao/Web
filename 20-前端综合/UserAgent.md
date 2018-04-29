

## 前言


我们知道，在控制台里可以添加很多设备。我们需要点击 edit，手动添加：

img

添加时，是根据 User agent 来识别的：

img

不同浏览器（包括微信内置的浏览器）的 useragent 信息，是不一样的，我们可以根据 `navigator.userAgent`属性来获取。

比如说，我们在控制台输入`navigator.userAgent`，如下：


20180425_1656.png

上图显示，MacOS上的Chrome浏览器的 UserAgent 是：

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
```



## 不同浏览器的 UserAgent

iPhone版微信：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 MicroMessenger/6.3.15 NetType/WIFI Language/zh_CN
```

Android版微信：

```
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI
```






Android版微信：

```
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI
```

## 参考链接

- [判断微信内置浏览器的UserAgent](http://www.cnblogs.com/7z7chn/p/5370352.html)

- [微信内置浏览器UserAgent的判断](https://gist.github.com/wjp2013/fff34c063cf0cf227d65)



