


## Vue 2.0的生命周期函数

![](http://img.smyhvae.com/20180422_1650.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <!--这个div区域就是MVVM中的 View-->
    <div id="app">
    </div>
</body>

<script>
    new Vue({
        el: '#app',
        data: {
            msg: 'hello vuejs'
        },
        beforeCreate: function () {
            console.log('1.0 beforeCreate', this.msg);
        }
        ,
        created: function () {
            console.log('2.0 created', this.msg);
        }
        ,
        beforeMount: function () {
            console.log('3.0 beforeMount', this.msg);
        }
        ,
        mounted: function () {
            console.log('4.0 mounted', this.msg);
        }
    });

</script>

</html>
```

打印结果：

![](http://img.smyhvae.com/20180420_2302.png)


