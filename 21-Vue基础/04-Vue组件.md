




## 组件的定义和注册

组件`Component`是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。


### 写法一

写法一：使用Vue.extend方法定义组件，使用 Vue.component方法注册组件。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <div id="app">
        <account> </account>
    </div>

    <script>
        //第一步：定义组件
        var myAccount = Vue.extend({
            template: '<div><h2>登录页面</h2> <h3>注册页面</h3></div>'    // template 是 Vue 中的关键字，不能改。
        });
        //第二步：注册组件
        Vue.component('account', myAccount); //第一个参数是标签名，第二个参数是组件的定义

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```

上方代码中，绿框部分的内容，就是我想定义的整个组件。

运行结果如下：

![](http://img.smyhvae.com/20180422_2230.png)

代码截图如下：

![](http://img.smyhvae.com/20180422_2223.png)

上图中，注意两点：

1、红框部分，要保证二者的名字是一致的。

2、绿框部分，一定要用一个大的根元素（例如`<div>`）包裹起来。如果我写成下面这样，就没有预期的效果：

```
            template: '<h2>登录页面</h2> <h3>注册页面</h3>'
```

结果如下：（并非预期的效果）

![](http://img.smyhvae.com/20180422_2232.png)

### 写法二


写法二：Vue.component方法定义、注册组件（一步到位）。

代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <div id="app">
        <account> </account>
    </div>

    <script>

        //定义、注册组件（第一个参数是标签名，第二个参数是组件的定义）
        Vue.component('account', {
            template: '<div><h2>登录页面</h2> <h3>注册页面</h3></div>'   // template 是 Vue 中的关键字，不能改。
        });

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```

代码截图如下：

![](http://img.smyhvae.com/20180422_2251.png)


上图中，同样注意两点：

1、红框部分，要保证二者的名字是一致的。

2、绿框部分，一定要用一个大的根元素（例如`<div>`）包裹起来。如果我写成下面这样，就没有预期的效果：

```
            template: '<h2>登录页面</h2> <h3>注册页面</h3>'
```

结果如下：（并非预期的效果）

![](http://img.smyhvae.com/20180422_2232.png)



### 写法三【荐】

写法三：将组件内容定义到template标签中去。

代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <!-- 定义模板 -->
    <template id="myAccount">
        <div>
            <h2>登录页面</h2>
            <h3>注册页面</h3>
        </div>
    </template>

    <div id="app">
        <account> </account>
    </div>

    <script>

        //定义、注册组件
        Vue.component('account', {
            template: '#myAccount'    // template 是 Vue 中的关键字，不能改。
        });

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```


代码截图如下：

![](http://img.smyhvae.com/20180422_2256.png)

写法三其实和方法二差不多，无非是把绿框部分的内容，单独放在了`<template>`标签中而已，这样有利于 html 标签的书写。

## 为组件添加 data 和 method

既然组件是一个页面，那么，页面中可能会有一些功能要**动态展示**。因此，我们有必要为组件添加 data 和 method。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <!-- 定义模板 -->
    <template id="myAccount">
        <div>
            {{myData}}
            <a href="#" v-on:click="login">登录1</a>
            <h2>登录页面</h2>
            <h3>注册页面</h3>

        </div>
    </template>

    <div id="app">
        <account> </account>
    </div>

    <script>

        //定义、注册组件
        Vue.component('account', {
            template: '#myAccount',
            //组件中的 data
            //注意，组件中的data，是一个方法，而不是对象，否则无效果
            data: function () {
                return {
                    myData: 'smyhvae'
                }
            },
            //组件中的 method
            methods: {
                login: function () {
                    alert('login操作');
                }
            }
        });

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>

```


上方代码所示，我们在`account`组件中添加的data 和 method，其**作用域**只限于`account`组件里，保证独立性。

注意，在为组件添加数据时，data不再是对象了，而是方法，而且要通过 return的形式进行返回；否则，页面上是无法看到效果的。


## 子组件的定义和注册


我们在本文的第一段中，通过`Vue.component`形式定义的是**全局组件**。这一段中，我们来讲一下**子组件**。

比如说，一个`账号`模块是父组件，里面分为`登陆`模块和`注册`模块，这两个模块可以定义为子组件。


需要注意的是，我们在父组件中定义的子组件，只能在当前父组件中使用；在其他的组件，甚至根组件中，都无法使用。


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>

    <div id="app">
        <account>

        </account>
    </div>

    <script>

        //定义、注册组件
        Vue.component('account', {
            template: '<div><h2>账号模块</h2> <login></login></div>',
            components: {
                'login': {
                    template: '<h3>登录模块</h3>'
                }
            }
        });

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```

显示效果：

20180423_1029.png

## 组件之间的动态切换

我们可以利用`<component> `标签的`:is`参数来进行组件之间的切换。









