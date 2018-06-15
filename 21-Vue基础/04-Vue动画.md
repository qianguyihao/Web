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


### 使用举例（通过Vue的过渡类名来实现）

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


上方代码中，我们使用vue提供的`<transition>`标签把需要被动画控制的元素，包裹起来；然后使用`.v-enter`、`.v-leave-to`等进行动画的定义。

运行效果如下：

20180615_2200.gif


**3、再加一个tramsform属性进行位移**：


我们在上方代码的基础之上，加一个tramsform属性，让动画有一个位移的效果。完整代码如下：


效果如下：

20180615_2205.gif


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
            /* 在动画中加入位移 */
            transform: translateX(80px);
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


### 修改过渡类名的前缀

在上一小段中，`.v-enter`、`.v-leave-to`这些过渡类名都是以`v-`开头的。这样做，会有一个问题：假设有两个DOM元素都用`<transition>`进行了包裹，那这两个DOM元素就都具备了`v-`中所定义的动画。

那**如果我们想把两个DOM元素的动画进行分开定义**，该怎么做呢？这里，我们可以通过修改过渡类名的前缀来做。比如：

第一步：（自定义别名）

```html
    <transition name="my">
      <h6 v-if="flag2">这是一个H6</h6>
    </transition>
```

上方代码中，我们加了`name="my"`。

第二步：（我们就可以使用 `my-enter`、`.my-leave-to`这些类名了）

```css
    .my-enter,
    .my-leave-to {
      opacity: 0;
      transform: translateY(70px);
    }

```


完整代码举例如下；


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <style>
    /* 自定义第一组样式，来控制 transition 内部的元素实现动画 */

    /* v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 */

    /* v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了 */

    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    /* v-enter-active 【入场动画的时间段】 */

    /* v-leave-active 【离场动画的时间段】 */

    .v-enter-active,
    .v-leave-active {
      transition: all 0.8s ease;
    }


    /* 自定义第二组样式，来控制 transition 内部的元素实现动画。这次，我们通过自己起的别名`name`来作为指令 */

    .my-enter,
    .my-leave-to {
      opacity: 0;
      transform: translateY(70px);
    }

    .my-enter-active,
    .my-leave-active {
      transition: all 1s ease;
    }
  </style>
</head>

<body>
  <div id="app">
    <!-- 第一组 -->
    <input type="button" value="toggle" @click="flag=!flag">
    <!-- 使用 transition 元素，把 需要被动画控制的元素 h3，包裹起来 -->
    <!-- transition 元素，是 Vue 官方提供的 -->
    <transition>
      <h3 v-if="flag">这是一个H3</h3>
    </transition>

    <hr>

    <!-- 第二组 -->
    <input type="button" value="toggle2" @click="flag2=!flag2">
    <!-- 使用 transition 元素，把 需要被动画控制的元素 h6，包裹起来 -->
    <!-- transition 元素，是 Vue 官方提供的 -->
    <!-- 但是，在这里，我们给这个transition定义一个别名，叫`name`，然后，我们就可以通过 `.my-enter`等 来定义动画的样式【重要】 -->
    <transition name="my">
      <h6 v-if="flag2">这是一个H6</h6>
    </transition>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        flag: false,
        flag2: false
      },
      methods: {}
    });
  </script>
</body>

</html>
```









