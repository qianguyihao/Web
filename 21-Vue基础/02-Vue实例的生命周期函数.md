


## 介绍

### 定义



[vue实例的生命周期](https://cn.vuejs.org/v2/guide/instance.html#实例生命周期)：从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期。


[生命周期钩子](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)：就是生命周期事件的别名而已。

生命周期钩子 = 生命周期函数 = 生命周期事件。


### 主要的生命周期函数分类


创建期间的生命周期函数：


    + beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性
    + created：实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    + beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面中
    + mounted：此时，已经将编译好的模板，挂载到了页面指定的容器中显示
 - 运行期间的生命周期函数：
    + beforeUpdate：状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
    + updated：实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
 - 销毁期间的生命周期函数：
    + beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
    + destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。


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


