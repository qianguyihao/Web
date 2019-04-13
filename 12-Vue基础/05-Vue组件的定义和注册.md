
> 本文最初发表于[博客园](https://www.cnblogs.com/smyhvae/p/9195261.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。

## 前言

### 什么是组件

**组件**： 组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可。


### 模块化和组件化的区别

- 模块化：是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一

- 组件化：是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用


## 全局组件的定义和注册

组件`Component`是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。

全局组件的定义和注册有三种方式，我们接下来讲一讲。

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
        <!-- 如果要使用组件，直接把组件的名称，以 HTML 标签的形式，引入到页面中，即可 -->
        <account> </account>
    </div>

    <script>
        //第一步：使用 Vue.extend 定义组件
        var myAccount = Vue.extend({
            template: '<div><h2>登录页面</h2> <h3>注册页面</h3></div>' // 通过 template 属性，指定了组件要展示的HTML结构。template 是 Vue 中的关键字，不能改。
        });
        //第二步：使用 Vue.component 注册组件
        // Vue.component('组件的名称', 创建出来的组件模板对象)
        Vue.component('account', myAccount); //第一个参数是组件的名称（标签名），第二个参数是模板对象

        new Vue({
            el: '#app'
        });
    </script>
</body>

</html>
```

上方代码中，在注册组件时，第一个参数是标签名，第二个参数是组件的定义。

运行结果如下：

![](http://img.smyhvae.com/20180422_2230.png)

代码截图如下：

![](http://img.smyhvae.com/20180422_2223.png)

上图中，注意两点：

**注意1**、红框部分，要保证二者的名字是一致的。如果在注册时，组件的名称是**驼峰命名**，比如：

```javascript
Vue.component('myComponent', myAccount); //第一个参数是组件的名称（标签名），第二个参数是模板对象
```

那么，在标签中使用组件时，需要把大写的驼峰改为小写的字母，同时两个单词之间使用`-`进行连接：

```html
<my-component> </my-component>

```

所以，为了避免名字不一致的问题，我们注册组件时，组件的名称可以直接写成`my-component`。比如：（避免驼峰不一致的建议写法）

```javascript
    Vue.component('my-component', myAccount);
```



**注意2**、绿框部分，一定要用一个大的根元素（例如`<div>`）包裹起来。如果我写成下面这样，就没有预期的效果：

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

        //定义、注册组件：第一个参数是组件的名称（标签名），第二个参数是组件的定义
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

> 上面的写法一、写法二并不是很智能，因为在定义模板的时候，没有智能提示和高亮，容易出错。我们不妨来看看写法三。

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
        <!-- 使用组件 -->
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


## 使用components定义私有组件

我们在上一段中定义的是**全局组件**，这样做的时候，多个Vue实例都可以使用这个组件。

我们还可以在一个Vue实例的内部定义**私有组件**，这样做的时候，只有当前这个Vue实例才可以使用这个组件。

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
        <!-- 使用Vue实例内部的私有组件 -->
        <my-login></my-login>
    </div>

    <script>

        new Vue({
            el: '#app',
            data: {},
            components: { // 定义、注册Vue实例内部的私有组件
                myLogin: {
                    template: '<h3>这是私有的login组件</h3>'
                }
            }


        });
    </script>
</body>

</html>
```

运行效果：

![](http://img.smyhvae.com/20180617_1809.png)

【荐】当然，我们还可以把**模板的定义**存放在`<template>`标签中，这样的话，模板里的html标签就可以出现智能提示和高亮，避免出错。如下：


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
    <template id="loginTmp">
        <h3>这是私有的login组件</h3>
    </template>

    <div id="app">
        <!-- 调用Vue实例内部的私有组件 -->
        <my-login></my-login>
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {},
            components: { // 定义、注册Vue实例内部的私有组件
                myLogin: {
                    template: '#loginTmp'
                }
            }
        });
    </script>
</body>

</html>
```

运行效果不变。

上方代码中，如果在注册私有组件时，组件的名称是**驼峰命名**，比如：

```javascript
            components: { // 定义、注册Vue实例内部的私有组件
                myLogin: {
                    template: '#loginTmp'
                }
            }
```

那么，在标签中使用组件时，需要把大写的驼峰改为小写的字母，同时两个单词之间使用`-`进行连接：

```html
        <my-login></my-login>
```

所以，为了避免名字不一致的问题，我们注册组件时，组件的名称可以直接写成`my-login`。比如：（避免驼峰不一致的建议写法）


```javascript
            components: { // 定义、注册Vue实例内部的私有组件
                `my-login`: {
                    template: '#loginTmp'
                }
            }
```



## 为组件添加 data 和 methods

既然组件是一个页面，那么，页面中可能会有一些功能要**动态展示**。因此，我们有必要为组件添加 data 和 methods。

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
    <!-- 定义组件的模板 -->
    <template id="myAccount">
        <div>
            <!-- 在组件的模板中，调用本组件中的data -->
            {{myData}}
            <a href="#" v-on:click="login">登录1</a>
            <h2>登录页面</h2>
            <h3>注册页面</h3>

        </div>
    </template>

    <div id="app">
        <!-- 第一次调用组件 -->
        <account> </account>
        <!-- 第二次调用组件 -->
        <account> </account>
    </div>

    <script>

        //定义、注册组件
        Vue.component('account', {
            template: '#myAccount',
            //组件中的 data
            //【注意】组件中的data，不再是对象，而是一个方法（否则报错）；而且这个方法内部，还必须返回一个对象才行
            // 组件中 的data 数据,使用方式,和实例中的 data 使用方式完全一样!!!
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

上方代码所示，我们在`account`组件中添加的data 和 methods，其**作用域**只限于`account`组件里，保证独立性。

注意，在为组件添加数据时，data不再是对象了，而是function，而且要通过 return的形式进行返回；否则，页面上是无法看到效果的。通过 function返回对象的形式来定义data，作用是：

- 上方代码中，组件`<account>`被调用了两次（不像根组件那样只能调用一次），但是每个组件里的数据 myData是**各自独立**的，不产生冲突。

- 换而言之，通过函数返回对象的目的，是为了让每个组件都有自己**独立的数据存储**，而不应该共享一套数据。


### 为什么组件的data必须是一个function


我们先来看下面这样的例子：

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
        <!-- 第一次调用组件 -->
        <counter></counter>
        <hr>

        <!-- 第二次调用组件 -->
        <counter></counter>
    </div>

    <!-- 定义模板 -->
    <template id="tmpl">
        <div>
            <input type="button" value="让count加1" @click="increment">
            <h3>{{count}}</h3>
        </div>
    </template>

    <script>
        var dataObj = { count: 0 }

        // 这是一个计数器的组件, 身上有个按钮,每当点击按钮,让 data 中的 count 值 +1
        Vue.component('counter', {
            template: '#tmpl',
            data: function () {
                return dataObj //当我们return全局的dataObj的时候，子组件们会共享这个dataObj
            },
            methods: {
                increment() {
                    this.count++
                }
            }
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {},
            methods: {}
        });
    </script>
</body>

</html>
```

运行效果如下：


![](http://img.smyhvae.com/20180617_1925.gif)


上面的例子中，将组件`<counter>`调用了两次，由于`dataObj`是**全局对象**，导致两个组件实例都可以**共享**这个`dataObj`数据。于是，我们点击任何一个组件实例的按钮，都可以让`count`数据加1。


现在问题来了，如果我们想让组件`<counter>`的两个实例去单独操作`count`数据，应该怎么做呢？我们应该修改 data中 return出去的内容：

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
        <counter></counter>
        <hr>
        <counter></counter>
        <hr>
        <counter></counter>
    </div>

    <template id="tmpl">
        <div>
            <input type="button" value="让count加1" @click="increment">
            <h3>{{count}}</h3>
        </div>
    </template>

    <script>
        var dataObj = { count: 0 }

        // 这是一个计数器的组件, 身上有个按钮,每当点击按钮,让 data 中的 count 值 +1
        Vue.component('counter', {
            template: '#tmpl',
            data: function () {
                // return dataObj //当我们return全局的dataObj的时候，这个dataObj是共享的
                return { count: 0 } // 【重要】return一个**新开辟**的对象数据
            },
            methods: {
                increment() {
                    this.count++
                }
            }
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {},
            methods: {}
        });
    </script>
</body>

</html>

```

运行效果：

![](http://img.smyhvae.com/20180617_1935.gif)

如上图所示，每当我们创建一个新的组件实例时，就会调用data函数，data函数里会return一个**新开辟**的对象数据。这样做，就可以保证每个组件实例有**独立的数据存储**。

## 组件的切换


### 使用v-if和v-else结合flag进行切换


代码举例：（登录组件/注册组件，二选一）

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
        <!-- 温馨提示：`.prevent`可以阻止超链接的默认事件 -->
        <a href="" @click.prevent="flag=true">登录</a>
        <a href="" @click.prevent="flag=false">注册</a>

        <!-- 登录组件/注册组件，同时只显示一个 -->
        <login v-if="flag"></login>
        <register v-else="flag"></register>

    </div>

    <script>
        Vue.component('login', {
            template: '<h3>登录组件</h3>'
        })

        Vue.component('register', {
            template: '<h3>注册组件</h3>'
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                flag: false
            },
            methods: {}
        });
    </script>
</body>

</html>

```

运行效果如下：

![](http://img.smyhvae.com/20180617_1957.gif)


### 使用Vue提供的`<component>`标签实现组件切换

上面的例子中，我们是通过flag的值来进行组件的切换。但是，flag的值只可能有两种情况，也就是说，v-if和v-else只能进行两个组件之间的切换。

那如何实现三个甚至三个以上的组件切换呢？这里，我们可以用到Vue提供的`<component>`标签。


我们先来看一下`<component>`标签的用法。

基于上面的代码，如果我想让login组件显示出来，借助`<component>`标签可以这样做：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="Vue2.5.16.js"></script>
</head>

<body>
    <div id="app">

        <!-- Vue提供了 component ,来展示对应名称的组件 -->
        <!-- 【重要】component 是一个占位符, `:is` 属性,可以用来指定要展示的组件名称。这里，我们让 login 组件显示出来 -->
        <component :is="'login'"></component>

    </div>

    <script>
        // 组件名称是 字符串
        Vue.component('login', {
            template: '<h3>登录组件</h3>'
        })

        Vue.component('register', {
            template: '<h3>注册组件</h3>'
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                comName: 'login' // 当前 component 中的 :is 绑定的组件的名称
            },
            methods: {}
        });
    </script>
</body>

</html>
```

上方代码中，提取关键代码如下：

```html
        <component :is="'login'"></component>
```


如果我想让register组件显示出来，借助`<component>`标签可以这样做：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="Vue2.5.16.js"></script>
</head>

<body>
    <div id="app">

        <!-- Vue提供了 component ,来展示对应名称的组件 -->
        <!-- 【重要】component 是一个占位符, `:is` 属性,可以用来指定要展示的组件名称 -->
        <component :is="'register'"></component>

    </div>

    <script>
        // 组件名称是 字符串
        Vue.component('login', {
            template: '<h3>登录组件</h3>'
        })

        Vue.component('register', {
            template: '<h3>注册组件</h3>'
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                comName: 'login' // 当前 component 中的 :is 绑定的组件的名称
            },
            methods: {}
        });
    </script>
</body>

</html>
```

上方代码中，提取关键代码如下：

```html
        <component :is="'register'"></component>
```

因此，如果要实现组件之间的切换，我们可以给`<component>`标签里的is属性值设置为变量即可，来看看代码实现。

**实现组件切换**的完整代码：

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
        <!-- 点击按钮后，设置变量`comName`为不同的值，代表着后面的component里显示不同的组件 -->
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>

        <!-- Vue提供了 component ,来展示对应名称的组件 -->
        <!-- component 是一个占位符, :is 属性,可以用来指定要展示的组件的名称 -->
        <!-- 此处的`comName`是变量，变量值为组件名称 -->
        <component :is="comName"></component>

    </div>

    <script>
        // 组件名称是 字符串
        Vue.component('login', {
            template: '<h3>登录组件</h3>'
        })

        Vue.component('register', {
            template: '<h3>注册组件</h3>'
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                comName: 'login' // 当前 component 中的 :is 绑定的组件的名称
            },
            methods: {}
        });
    </script>
</body>

</html>
```

效果：

![](http://img.smyhvae.com/20180617_1957.gif)


## 多个组件切换时，通过mode属性添加过渡的动画



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
    <style>
        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateX(150px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.5s ease;
        }
    </style>
</head>

<body>
    <div id="app">
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>

        <!-- 通过 mode 属性,设置组件切换时候的 过渡动画 -->
        <!-- 【重点】亮点是 mode="out-in" 这句话 -->
        <transition mode="out-in">
            <component :is="comName"></component>
        </transition>

    </div>

    <script>
        // 组件名称是 字符串
        Vue.component('login', {
            template: '<h3>登录组件</h3>'
        })

        Vue.component('register', {
            template: '<h3>注册组件</h3>'
        })

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                comName: 'login' // 当前 component 中的 :is 绑定的组件的名称
            },
            methods: {}
        });
    </script>
</body>

</html>
```

运行效果：

20180618_2240.gif

如上方代码所示，多个组件切换时，如果要设置动画，可以用`<transition>`把组件包裹起来。需要注意的是，我给`<transition>`标签里添加了`mode="out-in"`这种模式，它表示第一个组件消失之后，第二个组件才会出现。如果没有这个mode属性，效果如下：（第一个组件准备消失的时候，第二个组件马上就准备出现，这不是我们想要的效果）

20180618_2245.gif


## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)


