

## 手机设置代理

连接好指定的wifi后，点击那个wifi里的设置，将「代理」那一项，设置为手动，然后输入ip（电脑上的ip）、端口号（8899）。然后就可以通过电脑上的whistle工具，查看手机的网页请求。

注意，要保证手机和电脑在同一个网络下。



## 捕获和拦截https请求


whistle安装证书后，可以拦截 https 请求。但是，我现在又不想拦截https请求了，该怎么卸载证书呢？

我发现，证书无法卸载，正确的操作是：

![](http://img.smyhvae.com/20180426_1621.png)

上图中，把红框部分，去掉勾选，就不捕获https了。谢谢azh童鞋。



参考链接：

- [Android 手机如何设置http代理？](https://www.zhihu.com/question/21474174)

- [使用 Whistle 对 iOS HTTPS 进行抓包](http://zhuscat.com/2017/09/20/https-proxy-on-ios/)






