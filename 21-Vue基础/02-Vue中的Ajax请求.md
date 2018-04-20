

## vue-resource

官网链接：

- http相关：<https://github.com/pagekit/vue-resource/blob/master/docs/http.md>

按照先后顺序，导入vue.js和vue-resource.js文件。

### get 请求

```javascript
    this.$http.get(url)
        .then(function (response) {
            var data = response.body;  //response.body是要获取的数据
        },
            function (err) {
                //err是异常数据
            });
```


获取到的`response.body`就是要获取的数据，但直接打印出来是 object，所以要记得转成string。



### jsonp

20180420_2250.png

```javascript
    // 利用vue-resource中的jsonp方法实现跨域请求数据，这里要注意的是：
    // url后面不需要跟callback=fn这个参数了，jsonp方法会自动加上
    this.$http.jsonp('http://vuecms.ittun.com/api/getlunbo?id=1')
        .then(function (response) {
            console.log(JSON.stringify(response.body));
        }, function (err) {
            //err是异常数据
        });
```

请求结果：

20180420_2256.png


