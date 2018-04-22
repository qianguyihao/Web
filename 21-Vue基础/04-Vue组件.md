

## 前言

组件`Component`是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。


## 组件的定义和注册

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
        Vue.component('account', myAccount);

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```

上方代码中，绿框部分的内容，就是我想定义的整个组件。

运行结果如下：

20180422_2230.png

代码截图如下：

20180422_2223.png

上图中，注意两点：

1、红框部分，要保证二者的名字是一致的。

2、绿框部分，一定要用一个大的 div 包裹起来。如果我写成下面这样，就没有预期的效果：

```
            template: '<h2>登录页面</h2> <h3>注册页面</h3>'
```

结果如下：（并非预期的效果）

20180422_2232.png


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

        //定义、注册组件
        Vue.component('account', {
            template: '<div><h2>登录页面</h2> <h3>注册页面</h3></div>'
        });

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```

代码截图如下：

20180422_2251.png


上图中，同样注意两点：

1、红框部分，要保证二者的名字是一致的。

2、绿框部分，一定要用一个大的 div 包裹起来。如果我写成下面这样，就没有预期的效果：

```
            template: '<h2>登录页面</h2> <h3>注册页面</h3>'
```

结果如下：（并非预期的效果）

20180422_2232.png



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
            template: '#myAccount'
        });

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```



代码截图如下：

20180422_2256.png

写法三其实和方法二差不多，无非是把绿框部分的内容，单独放在了`<template>`标签中而已，这样有利于 html 标签的书写。



