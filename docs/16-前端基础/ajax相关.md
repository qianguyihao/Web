

### jsonp ajax

ajax跨域访问是一个老问题了，解决方法很多，比较常用的是JSONP方法，JSONP方法是一种非官方方法，而且这种方法只支持GET方式，不如POST方式安全。

意思是说，如果后台返回的数据类型是jsonp，那么前端的请求方式只能是get，不能是post。

如果跨域使用POST方式，可以使用创建一个隐藏的iframe来实现，与ajax上传图片原理一样，但这样会比较麻烦。

因此，在**前端使用post方法，数据类型是json**的情况下，如果想跨域的话，可以通过设置Access-Control-Allow-Origin来实现跨域访问比较简单。



参考链接：

- [ajax 设置Access-Control-Allow-Origin实现跨域访问](https://blog.csdn.net/fdipzone/article/details/46390573/)


