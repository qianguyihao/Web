---
title: 03-网络抓包和代理工具：Whistle
---

<ArticleTopAd></ArticleTopAd>


## Whistle 官网

- Whistle 官网：<https://wproxy.org/whistle/>

- Whistle 的 GitHub：<https://github.com/avwo/whistle>


## Whistle 安装启动

### 1、Whistle 安装


（1）通过 npm 安装 Whistle


### 2、启动 whistle

```bash
w2 start
```

然后在浏览器输入`http://127.0.0.1:8899/` 即可打开代理配置的页面。


### 3、配置代理

**chrome浏览器配置代理**：

可参考官方文档。

**Firefox浏览器配置代理**：

![](https://img.smyhvae.com/20200420_1357.png)



### 4、安装证书并添加信任：

![](https://img.smyhvae.com/20200420_0922.png)


证书下载后，双击安装，安装目录选择“登录”这个tab。安装完成后，记得执行 `w2 restart`重启 whistle。


### 手机设置代理

连接好指定的wifi后，点击那个wifi里的设置，将「代理」那一项，设置为手动，然后输入ip（电脑上的ip）、端口号（8899）。然后就可以通过电脑上的whistle工具，查看手机的网页请求。

注意，要保证手机和电脑在同一个网络下。

另外，还需要在手机的浏览器，地址栏输入`rootca.pro`，给手机安装证书。



## 捕获和拦截https请求


whistle安装证书后，可以拦截 https 请求。但是，我现在又不想拦截https请求了，该怎么卸载证书呢？

我发现，证书无法卸载，正确的操作是：

![](http://img.smyhvae.com/20180426_1621.png)

上图中，把红框部分，去掉勾选，就不捕获https了。谢谢azh童鞋。


参考链接：

- [Android 手机如何设置http代理？](https://www.zhihu.com/question/21474174)

- [使用 Whistle 对 iOS HTTPS 进行抓包](http://zhuscat.com/2017/09/20/https-proxy-on-ios/)


## 移动端调试神器:eruda


> 手机连接代理时，如何看console.log的日志信息?

> 现在，代码里有console.log，如果是在电脑浏览器上看，可以直接在控制台查看console.log的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看console.log的内容呢？具体做法如下：

（1）在 whistle中，新建一个名叫`Eruda H5`的代理，代理中的内容是：

```
http://xxx.com htmlAppend://{eruda.html}
```

(2)新建一个values，里面的内容是：

```html
<script src="//cdn.bootcss.com/eruda/1.4.3/eruda.min.js"></script>
<script>
    eruda.init()
</script>
```


然后就OK了。


