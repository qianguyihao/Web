04-Vue动画.md



## 前言

动画的作用：提高用户的体验，帮助用户更好的理解页面中的功能。


## 使用过渡类名实现动画

### 官方文档的解释

过渡类名如下：



动画进入：

- v-enter：动画进入之前的**初始**状态

- v-enter-to：动画进入之后的**结束**状态

- v-enter-active：动画进入的时间段

PS：第一、第二个是时间点；第三个是时间段。

动画离开：

- v-leave：动画离开之前的**初始**状态

- v-leave-to：动画离开之后的**结束**状态

- v-leave-active：动画离开的时间段

PS：第一、第二个是时间点；第三个是时间段。


### 使用举例

温馨提示：`v-enter-to`和`v-leave`的状态是一样的。而且一般来说，`v-enter`和`v-leave-to`的状态也是一致的。所以，我们可以把这四个状态写成两组。


现在我们来做个例子：点击按钮时，让div显示/隐藏。

**1、引入**：

如果我们不使用动画，应该是这样做：


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
        <input type="button" value="toggle" @click="flag=!flag">
        <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
        <h3 v-if="flag">这是一个H3</h3>
    </div>

    <script>
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


**2、使用动画**：（通过Vue的过渡类名来实现）

现在，我们加**淡入淡出**的动画，让div显示和隐藏。代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
    <!-- 2. 自定义两组样式，来控制 transition 内部的元素实现动画 -->
    <style>
        /* v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 */

        /* v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了 */

        .v-enter,
        .v-leave-to {
            opacity: 0;
        }

        /* v-enter-active 【入场动画的时间段】 */

        /* v-leave-active 【离场动画的时间段】 */

        .v-enter-active,
        .v-leave-active {
            transition: all 1s ease;   /*期间，设置过渡的属性：all表示所有的属性、时间为1秒、过渡的状态*/
        }
    </style>
</head>

<body>
    <div id="app">
        <input type="button" value="toggle" @click="flag=!flag">
        <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
        <!-- 1. 使用 transition 元素，把 需要被动画控制的元素，包裹起来 -->
        <!-- transition 元素，是 Vue 官方提供的 -->
        <transition>
            <h3 v-if="flag">这是一个H3</h3>
        </transition>
    </div>

    <script>
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








