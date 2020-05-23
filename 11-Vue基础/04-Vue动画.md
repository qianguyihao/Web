04-Vue动画.md



## 前言

动画的作用：提高用户的体验，帮助用户更好的理解页面中的功能。


## 使用过渡类名实现动画

### 官方文档的截图

过渡类名如下：

![](http://img.smyhvae.com/20180616_1555.png)

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

`v-enter-to`和`v-leave`的状态是一样的。而且一般来说，`v-enter`和`v-leave-to`的状态也是一致的。所以，我们可以把这四个状态写成两组。

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

![](http://img.smyhvae.com/20180615_2200.gif)


**3、再加一个 transform 属性进行位移**：

我们在上方代码的基础之上，加一个 transform 属性，让动画有一个位移的效果。完整代码如下：


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
            transform: translateX(80px); /* smyhvae提示：v-enter表示，一开始让DOM元素处于靠右80px的位置 */
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


效果如下：

![](http://img.smyhvae.com/20180615_2205.gif)

### 修改过渡类名的前缀

在上一小段中，`.v-enter`、`.v-leave-to`这些过渡类名都是以`v-`开头的。这样做，会有一个局限性：假设有两个DOM元素都用`<transition>`进行了包裹，那这两个DOM元素就都具备了`v-`中所定义的动画。

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
        <!-- 【重点】在这里，我们给这个transition定义一个别名，叫`name`，然后，我们就可以通过 `.my-enter`等 来定义动画的样式【重要】 -->
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

运行效果如下：

![](http://img.smyhvae.com/20180616_1513.gif)

## 使用第三方animate.css类库实现动画

animate.css网址：

- 官方网站：<https://daneden.github.io/animate.css/>


**代码举例**：

下面的代码中，我们使用animate.css提供的`bounceIn`、`bounceOut`这两个类来做入场、离场的动画。代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
    <link rel="stylesheet" href="animate3.6.0.css">
    <!-- 入场 bounceIn    离场 bounceOut -->
</head>

<body>
    <div id="app">
        <input type="button" value="toggle" @click="flag=!flag">
        <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
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



上面的代码中，注意：

注意1：`enter-active-class`和`leave-active-class`这两个类名是Vue动画里的关键词，不能写成自己**随意起**的类名。

注意2：`bounceIn`、`bounceOut`这两个类不能直接使用，要在前面加上`animated`这个类；否则动画是不会生效的。当然，上面的代码中，我们还可以把`class = animated`这个代码移到`<h3>`标签里，效果是一样的，如下：

```html
        <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
        <transition enter-active-class="bounceIn" leave-active-class="bounceOut">
            <h3 v-if="flag" class="animated">这是一个H3</h3>
        </transition>

```


运行效果如下：

![](http://img.smyhvae.com/20180616_1538.gif)

**改进1**：（统一设置入场、出场动画的持续时间）

我们把上面的代码改进一下，如果我们想给入场、出场动画设置持续的时间，可以使用`:duration`来做。如下：


```html
        <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
        <!-- 使用 :duration="毫秒值" 来统一设置 入场 和 离场 时候的动画时长 -->
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" :duration="500">
            <h3 v-if="flag">这是一个H3</h3>
        </transition>
```


**改进2**：（分别设置入场、出场动画的持续时间）

```html
        <!-- 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 -->
        <!-- 使用  :duration="{ enter: 1000, leave: 300 }"  来分别设置 入场的时长 和 离场的时长  -->
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" :duration="{ enter: 1000, leave: 300 }">
            <h3 v-if="flag">这是一个H3</h3>
        </transition>
```


## 钩子函数实现半场动画

只有出场动画、没有离场动画，这种就是属于半场动画。比如你把一件商品加入收藏，会出现一个动画；当再次点击收藏按钮的时候却看不到动画效果，这就说明，只有前一半才有动画。


半场动画，可以使用钩子函数来实现。


### 动画的钩子函数介绍

可以在属性中声明 JavaScript 钩子函数：（这八个钩子函数可以理解成是动画的生命周期）

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- DOM元素 -->
</transition>
```


我们可以这样理解：上面这八个钩子函数（四个入场、四个离场），对应了八个事件，我们要紧接着在methods中定义八个函数。

如果要定义半场动画，做法是：直接在methods中写入场动画的函数，不写离场动画的函数即可。

### 举例：使用钩子函数模拟小球半场动画

现在要实现的例子是：点击按钮后，让小球进行移动。完整代码如下：

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
        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
        }
    </style>
</head>

<body>
    <div id="app">
        <input type="button" value="加入购物车" @click="flag=!flag">
        <!-- 1. 使用 transition 元素把 小球包裹起来 -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>
    </div>

    <script>

        var vm = new Vue({
            el: '#app',
            data: {
                flag: false
            },
            methods: {
                // 注意： 动画钩子函数的第一个参数：el，表示 要执行动画的那个DOM元素，是个原生的 JS DOM对象
                // 我们可以认为 ， el 是通过 document.getElementById('') 方式获取到的原生JS DOM对象
                beforeEnter(el) {
                    // beforeEnter 表示动画入场之前，此时，动画尚未开始，可以 在 beforeEnter 中，设置元素开始动画之前的起始样式
                    // 设置小球开始动画之前的 起始位置
                    el.style.transform = "translate(0, 0)"   // smyhvae提示：一开始的时候，让小球处于（0，0）的位置
                },
                enter(el, done) {
                    // 【注意1】el.offsetWidth 这句话，没有实际的作用，但是，如果不写，出不来动画效果。可以认为 el.offsetWidth 会强制动画刷新
                    el.offsetWidth
                    // enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
                    el.style.transform = "translate(150px, 300px)" // smyhvae 提示：让小球从（0，0）移动到 (150px, 300px)
                    el.style.transition = 'all 1s ease'

                    // 【注意2】这里的 done， 起始就是 afterEnter 这个函数，也就是说：done 是 afterEnter 函数的引用
                    done()
                },
                afterEnter(el) {
                    // 动画完成之后，会调用 afterEnter
                    // console.log('ok')
                    // 动画结束后，让小球消失（直接让 flag 取反即可）
                    this.flag = !this.flag  // 因为最开始的时候，小球就是处于消失的状态，这行代码可以让小球的动画重新开始
                }
            }
        });
    </script>
</body>

</html>

```


运行效果如下：（我们可以用这种动画效果，做类似于“加入购物车”的动画效果）

![](http://img.smyhvae.com/20180616_1618.gif)

上面的代码中，有两个地方要注意：


**注意1**：

`el.offsetWidth`这行代码不能少。虽然这行代码没有实际的意义，但是少了之后，动画效果出不来：

![](http://img.smyhvae.com/20180616_1620.gif)

当然，我们也可以把这行代码换成`el.offsetHeight`、`el.offsetLeft`、`el.offsetTop`之类的，只要包含了offset就行。


**注意2**：

`enter()`函数里，函数的第二个参数要加上`done`，函数体的最后一行要写`done()`，表示**立即执行**后面的`afterEnter()`函数；如果没有这个`done`，则会**延迟执行**后面的`afterEnter()`函数：

![](http://img.smyhvae.com/20180616_2145.gif)

Vue官方文档的解释是这样：


 > 当只用 JavaScript 过渡的时候，在`enter`和`leave`中必须使用`done`进行回调。否则，它们将被同步调用，过渡会立即完成。




## 使用transition-group元素实现列表动画

现在的场景是：在一个`<ul>`列表中，如果我想给**指定的某个**`li`添加动画效果，该怎么做呢？（需要声明的是，这些`li`是用v-for循环进行遍历的）

如果我们用`<transition>`把`li`包裹起来，就会让所有的`li`都具备了动画，这显然是不可取的。

那该怎么做呢？这里我们就可以用`transition-group`进行包裹。

**代码举例1**：点击添加按钮后，给新增的 item 加个动画

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
        li {
            border: 1px dashed #999;
            margin: 5px;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }

        li:hover {
            background-color: hotpink;
            transition: all 0.8s ease;  /*鼠标悬停时，出现背景色。让这个背景色的出现，也加一个淡入的动画*/
        }

        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.6s ease;
        }
    </style>
</head>

<body>
    <div id="app">

        <div>
            <label>
                Id:
                <input type="text" v-model="id">
            </label>

            <label>
                Name:
                <input type="text" v-model="name">
            </label>

            <input type="button" value="添加" @click="add">
        </div>

        <!-- <ul> -->
        <!-- 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup -->
        <!-- 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性 -->
        <transition-group>
            <li v-for="(item, i) in list" :key="item.id">
                {{item.id}} --- {{item.name}}
            </li>
        </transition-group>
        <!-- </ul> -->

    </div>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                id: '',
                name: '',
                list: [
                    { id: 1, name: '赵高' },
                    { id: 2, name: '秦桧' },
                    { id: 3, name: '严嵩' },
                    { id: 4, name: '魏忠贤' }
                ]
            },
            methods: {
                add() {
                    this.list.push({ id: this.id, name: this.name })
                    this.id = this.name = ''
                }
            }
        });
    </script>
</body>

</html>
```

运行效果如下：

![](http://img.smyhvae.com/20180616_2240.gif)


**改进1**：添加删除item的功能

基于上面的代码，我们来添加**删除item**的功能，代码本应该是这样写：


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
        li {
            border: 1px dashed #999;
            margin: 5px;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }

        li:hover {
            background-color: hotpink;
            transition: all 0.8s ease;
            /*鼠标悬停时，出现背景色。让这个背景色的出现，也加一个淡入的动画*/
        }

        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.6s ease;
        }
    </style>
</head>

<body>
    <div id="app">

        <div>
            <label>
                Id:
                <input type="text" v-model="id">
            </label>

            <label>
                Name:
                <input type="text" v-model="name">
            </label>

            <input type="button" value="添加" @click="add">
        </div>

        <!-- <ul> -->
        <!-- 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup -->
        <!-- 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性 -->
        <transition-group>
            <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
                {{item.id}} --- {{item.name}}
            </li>
        </transition-group>
        <!-- </ul> -->

    </div>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                id: '',
                name: '',
                list: [
                    { id: 1, name: '赵高' },
                    { id: 2, name: '秦桧' },
                    { id: 3, name: '严嵩' },
                    { id: 4, name: '魏忠贤' }
                ]
            },
            methods: {
                add() {
                    this.list.push({ id: this.id, name: this.name })
                    this.id = this.name = ''
                },
                del(i) {
                    this.list.splice(i, 1);
                }
            }
        });
    </script>
</body>

</html>

```

运行效果如下：

![](http://img.smyhvae.com/20180617_1555.gif)

**改进2:**：

上图中，我们发现，当我删除第2个item时，**第3、第4个item在往上移动的过程比会较突兀**。为了改进这个地方，我们可以给`.v-move`、`.v-leave-active`加一些动画属性。最终，完整版代码如下：

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
        li {
            border: 1px dashed #999;
            margin: 5px;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }

        li:hover {
            background-color: hotpink;
            transition: all 0.8s ease;
            /*鼠标悬停时，出现背景色。让这个背景色的出现，也加一个淡入的动画*/
        }

        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.6s ease;
        }

        /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
        .v-move {
            transition: all 0.6s ease;
        }

        .v-leave-active {
            position: absolute;
        }
    </style>
</head>

<body>
    <div id="app">

        <div>
            <label>
                Id:
                <input type="text" v-model="id">
            </label>

            <label>
                Name:
                <input type="text" v-model="name">
            </label>

            <input type="button" value="添加" @click="add">
        </div>

        <!-- <ul> -->
        <!-- 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup -->
        <!-- 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性 -->
        <transition-group>
            <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
                {{item.id}} --- {{item.name}}
            </li>
        </transition-group>
        <!-- </ul> -->

    </div>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                id: '',
                name: '',
                list: [
                    { id: 1, name: '赵高' },
                    { id: 2, name: '秦桧' },
                    { id: 3, name: '严嵩' },
                    { id: 4, name: '魏忠贤' }
                ]
            },
            methods: {
                add() {
                    this.list.push({ id: this.id, name: this.name })
                    this.id = this.name = ''
                },
                del(i) {
                    this.list.splice(i, 1);
                }
            }
        });
    </script>
</body>

</html>
```

运行效果如下：

![](http://img.smyhvae.com/20180617_1556.gif)

### transition-group中appear和tag属性的作用

我们可以在上面的代码基础之上，给transition-group加上`appear`属性，这样的话，可以让transition-group包裹的所有DOM元素在刷新时，有**淡入效果**。

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
        li {
            border: 1px dashed #999;
            margin: 5px;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }

        li:hover {
            background-color: hotpink;
            transition: all 0.8s ease;
        }

        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.6s ease;
        }

        /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */

        .v-move {
            transition: all 0.6s ease;
        }

        .v-leave-active {
            position: absolute;
        }
    </style>
</head>

<body>
    <div id="app">

        <div>
            <label>
                Id:
                <input type="text" v-model="id">
            </label>

            <label>
                Name:
                <input type="text" v-model="name">
            </label>

            <input type="button" value="添加" @click="add">
        </div>

        <ul>
            <!-- 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup -->
            <!-- 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性 -->
            <!-- 给 ransition-group 添加 appear 属性，实现页面刚展示出来时候，入场时候的效果 -->
            <!-- 通过 为 transition-group 元素，设置 tag 属性，指定 transition-group 渲染为指定的元素，如果不指定 tag 属性，默认，渲染为 span 标签 -->
            <transition-group appear>
                <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
                    {{item.id}} --- {{item.name}}
                </li>
            </transition-group>
        </ul>

    </div>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                id: '',
                name: '',
                list: [
                    { id: 1, name: '赵高' },
                    { id: 2, name: '秦桧' },
                    { id: 3, name: '严嵩' },
                    { id: 4, name: '魏忠贤' }
                ]
            },
            methods: {
                add() {
                    this.list.push({ id: this.id, name: this.name })
                    this.id = this.name = ''
                },
                del(i) {
                    this.list.splice(i, 1)
                }
            }
        });
    </script>
</body>

</html>
```

![](http://img.smyhvae.com/20180617_1600.gif)

**改进**：`transition-group`的`tag`属性

上面的代码中，我们审查一下代码元素会发现，用`transition-group`包裹的元素，会被默认套上一层`<span>`：

![](http://img.smyhvae.com/20180617_1620.png)

这个`<span>`虽然没有太大副作用，但是不符合代码规范。为了解决这个问题，我们可以通过`tag`属性给`transition-group`包谷的元素套上一层`<ul>`，然后把现有的`<ul>`注释掉，就可以了。最终代码如下：

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
        li {
            border: 1px dashed #999;
            margin: 5px;
            line-height: 35px;
            padding-left: 5px;
            font-size: 12px;
            width: 100%;
        }

        li:hover {
            background-color: hotpink;
            transition: all 0.8s ease;
        }



        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }

        .v-enter-active,
        .v-leave-active {
            transition: all 0.6s ease;
        }

        /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */

        .v-move {
            transition: all 0.6s ease;
        }

        .v-leave-active {
            position: absolute;
        }
    </style>
</head>

<body>
    <div id="app">

        <div>
            <label>
                Id:
                <input type="text" v-model="id">
            </label>

            <label>
                Name:
                <input type="text" v-model="name">
            </label>

            <input type="button" value="添加" @click="add">
        </div>

        <!-- <ul> -->
        <!-- 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup -->
        <!-- 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性 -->
        <!-- 给 ransition-group 添加 appear 属性，实现页面刚展示出来时候，入场时候的效果 -->
        <!-- 通过 为 transition-group 元素，设置 tag 属性，指定 transition-group 渲染为指定的元素，如果不指定 tag 属性，默认，渲染为 span 标签 -->
        <transition-group appear tag="ul">
            <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
                {{item.id}} --- {{item.name}}
            </li>
        </transition-group>
        <!-- </ul> -->

    </div>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                id: '',
                name: '',
                list: [
                    { id: 1, name: '赵高' },
                    { id: 2, name: '秦桧' },
                    { id: 3, name: '严嵩' },
                    { id: 4, name: '魏忠贤' }
                ]
            },
            methods: {
                add() {
                    this.list.push({ id: this.id, name: this.name })
                    this.id = this.name = ''
                },
                del(i) {
                    this.list.splice(i, 1)
                }
            }
        });
    </script>
</body>

</html>
```

这样的话，审查元素的效果如下：

![](http://img.smyhvae.com/20180617_1621.png)

