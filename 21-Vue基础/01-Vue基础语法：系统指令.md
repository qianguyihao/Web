

## Vue初体验

新建一个空的项目，引入vue.js文件。写如下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--vue的版本：2.5.15-->
    <script src="vue.js"></script>
</head>
<body>
<!--这个div区域就是MVVM中的 View-->
<div id="div1">
    {{name}}
</div>
</body>

<script>
    //new出来的对象就是MVVM中的 View Module
    var myVue = new Vue({
        el: '#div1', //当前vue对象将接管上面的div区域
        data: {//data就是MVVM中的 module
            name: 'smyhvae'
        }
    });
</script>
</html>
```


显示效果：

20180313_0955.png

如果我们在控制台输入`myVue.data+='123'`，页面会**自动更新**name的值。


下面来讲一下Vue的系统指令

## v-on：注册事件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <!--vue的版本：2.5.15-->
  <script src="vue.js"></script>
</head>

<body>
  <!--这个div区域就是MVVM中的 View-->
  <div id="div1">
    <!-- 给button节点绑定按钮的点击事件 -->
    {{name}}
    <button v-on:click="change">改变name的值</button>
  </div>


</body>

<script>
  //new出来的对象就是MVVM中的 View Module
  var myVue = new Vue({
    el: '#div1', //当前vue对象将接管上面的div区域
    data: { //data就是MVVM中的 module
      name: 'smyhvae'
    },
    methods: {
      change: function() { //上面的button按钮的点击事件
        this.name += '1';
      }
    }
  });
</script>

</html>
```


上方代码中，我们给button按钮绑定了点击事件。注意，这个button标签要写在div区域里（否则点击事件不生效），因为下方的View module接管的是div区域。



## 插值表达式 {{}}

数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值。例如：

```html
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应数据对象上 msg 属性（msg定义在data对象中）的值。
无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会**自动更新**。

`{{}}`对JavaScript 表达式支持，例如：

```javascript
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ name == 'smyhvae' ? 'true' : 'false' }}

{{ message.split('').reverse().join('') }}
```


但是有个限制就是，每个绑定都**只能包含单个表达式**，如下表达式无效：

```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```


## v-text

v-text可以将一个变量的值渲染到指定的元素中。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <!--vue的版本：2.5.15-->
  <script src="vue.js"></script>
</head>

<body>
  <div id="div1">
    <span v-text="name"></span>
  </div>
</body>

<script>
  new Vue({
    el: '#div1',
    data: {
      name: 'hello smyhvae'
    }
  });
</script>

</html>
```

结果：


20180313_1645.png

## v-html


`v-text`是纯文本，而`v-html`会被解析成html元素。

注意：使用v-html渲染数据可能会非常危险，因为它很容易导致 XSS（跨站脚本） 攻击，使用的时候请谨慎，能够使用{{}}或者v-text实现的不要使用v-html。


## v-cloak

`v-cloak`：保持和元素实例的关联，直到结束编译后自动消失。


这个指令和CSS 规则一起用的时候，可以隐藏未编译的标签直到实例准备完毕。比如说，在网络很慢的情况下，通过`v-cloak`隐藏元素，当加载完毕后，再显示出来。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script src="vue.js"></script>
  <style>

    /*网络很慢时，在span上加上 v-cloak和css样式控制以后，浏览器在加载时会先把span隐藏起来。
    直到 Vue实例化完毕以后，v-cloak 会自动消失，那么对应的css样式就会失去作用，最终将span中的内容呈现给用户 */
    [v-cloak] {
      display: none;
    }
  </style>
</head>

<body>
  <div id="div1">
    <span v-cloak>{{name}}</span>

  </div>
</body>

<script src="vue.js"></script>
<script>
  new Vue({
    el: '#div1',
    data: {
      name: 'hello1 smyhvae22'
    }
  });
</script>

</html>

```



## v-bind

`v-bind`：给html元素或者组件**动态绑定**一个或多个特性，例如动态绑定style和class。

比如说：

```html
    <img v-bind:src="imageSrc">

    <div v-bind:style="{ fontSize: size + 'px' }"></div>
```


上方代码中的`imageSrc`和`size`其实是Vue实例里面的变量。

上面两行代码可以简写成：

```html
    <img :src="imageSrc">

    <div :style="{ fontSize: size + 'px' }"></div>
```

**举例：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
  </style>
</head>

<body>
  <div id="div1">
    <!-- value里的值只是简单的字符串 -->
    <input type="text" value="name">
    <!-- 加上 v-bind 之后，value里的值是 Vue 里的变量 -->
    <input type="text" v-bind:value="name">
    <!-- 超链接后面的path是 Vue 里面的变量 -->
    <a v-bind="{href:'http://www.baidu.com/'+path}">超链接</a>

  </div>
</body>

<script src="vue.js"></script>
<script>
  new Vue({
    el: '#div1',
    data: {
      name: 'smyhvae',
      path: `2.html`
    }
  });
</script>

</html>

```


效果：

20180313_1745.png



## v-model：双向数据绑定

上面的一段中，我们通过v-bind，给`<input>`标签绑定了`data`对象里的`name`属性。当`data -> name`的值发生改变时，`<input>`标签里的内容会自动更新。

可我现在要做的是：我在`<input>`标签里修改内容，要求`data -> name`的值自动更新。从而实现双向数据绑定。该怎么做呢？这就可以利用`v-model`这个属性。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="app">

    <form action="#">
        <input type="text" id="username" v-model="myAccount.username">
        <input type="password" id="pwd" v-model="myAccount.userpwd">

        <input type="submit" v-on:click="submit1" value="注册">

    </form>
</div>
</body>

<script>
    var vm = new Vue({
        el: '#app',
        //采用v-model进行双向数据绑定，数据会自动更新到data里面来
        data: {
            name: 'smyhvae',
            myAccount: {username: '', userpwd: ''}
        },
        //绑定方法，根据业务需要进行操作
        methods: {
            submit1: function () {
                alert(this.myAccount.username + "  pwd=" + this.myAccount.userpwd);
            }
        }
    });
</script>

</html>
```


















