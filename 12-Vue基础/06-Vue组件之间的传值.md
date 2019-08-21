

## 父组件向子组件传值


我们可以这样理解：Vue实例就是一个**父组件**，而我们自定义的组件（包括全局组件、私有组件）就是**子组件**。

【重点】需要注意的是，子组件不能直接使用父组件中的数据。**父组件可以通过`props`属性向子组件传值**。

### 父组件向子组件传值的代码举例

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
        <!-- 第三步：父组件在引用子组件的时候， 通过 属性绑定（v-bind:）的形式,  -->
        <!--   把 需要传递给 子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用 -->
        <component1 v-bind:parent-msg="msg"></component1>
    </div>

    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <!-- 第二步：在子组件的模板中，使用props中的属性 -->
        <h2 @click="change">我是子组件。我想使用父组件中的数据parentMsg： {{ parentMsg }}</h2>
    </template>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '父组件中的数据123'
            },
            methods: {},
            components: {
                // 子组件默认无法访问到 父组件中的 data 中的数据 和 methods 中的方法
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 注意： 子组件中的 data 数据，并不是通过 父组件传递过来的，而是子组件自身私有的，比如： 子组件通过 Ajax ，请求回来的数据，都可以放到 data 身上；
                        // data 上的数据，都是可读可写的
                        return {
                            title: '子组件私有的数据 title',
                            content: '子组件私有的数据 content'
                        }
                    },
                    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件 传递给子组件的
                    // props 中的数据，都是只读的，无法重新赋值
                    props: ['parentMsg'], // 第一步：把父组件传递过来的 parentMsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        change() {
                            // 下面这行会报错，因为子组件不要直接修改父组件中的data数据
                            // this.parentMsg = '被修改了'
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>
```


效果如下：

![](http://img.smyhvae.com/20180618_2350.png)

代码截图如下：

![](http://img.smyhvae.com/20180618_2355.png)


**父组件给子组件传值的步骤**：

> 根据上方截图，我们可以总结出父组件给子组件传值的步骤如下。

（1）在子组件的`props`属性中声明父亲传递过来的数据

（2）定义子组件的模板时，使用props中的属性

（3）父组件在引用子组件时，进行属性绑定。




**子组件中，data中的数据和props中的数据的区别**：

- 子组件中的 data 数据，并不是通过 父组件传递过来的，而是子组件自身私有的，比如： 子组件通过 Ajax ，请求回来的数据，都可以放到 data 身上。props 中的数据，都是通过 父组件 传递给子组件的。


- data中的数据是可读可写的；props中的属性只是可读的，无法重新赋值，重新赋值会报错（也就是说，子组件不要直接去修改父组件中的数据）。

### 父组件将方法传递给子组件

> 父组件通过事件绑定机制，将父组件的方法传递给子组件

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
        <!-- 父组件向子组件 传递 方法，是通过 事件绑定机制； v-on。当我们自定义了 一个 事件属性 parent-show（这个地方不能用驼峰命名）之后，-->
        <!-- 那么，子组件就能够，通过 emit 来调用 传递进去的 这个 方法了 -->
        <!-- 【第一步】。意思是说，`show`是父组件的方法名，`parent-show`是自定义的时间属性，稍后要在子组件中用到 -->
        <component1 @parent-show='show'></component1>
    </div>

    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <!-- 【第二步】按照正常的写法来：点击按钮，调用子组件的方法 -->
        <div @click="childClick">我是子组件，点击调用父组件的方法</div>
    </template>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: { //父组件的data
                // msg: '父组件中的数据'
            },
            methods: {
                show: function () { // 定义父组件的show方法
                    console.log('父组件提供的方法');
                }
            },
            components: {
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 子组件的data
                        return {
                            // content: '子组件私有的数据 content'
                        }
                    },
                    props: [''],
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        childClick() {
                            // 当点击子组件的按钮时，如何 拿到 父组件传递过来的 func 方法，并调用这个方法？？？
                            //  emit 英文原意： 是触发，调用、发射。意思是，触发父组件的方法
                            // 【第三步】 在子组件的方法中，通过 emit 触发父组件的方法
                            this.$emit('parent-show');
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>
```

效果如下：（点击子组件，触发了父组件的方法）

![](http://img.smyhvae.com/20180701_1800.png)

根据上面的代码，我们可以总结出，父组件将方法传递给子组件，分为三步，具体可以看上方代码的注释。


## 子组件向父组件传值

上面的一段中，我们再看一遍**父组件将方法传递给子组件**的这段代码（一定要再看一遍，因为我们是要在此基础之上做修改）。

如果要实现**子组件向父组件传值**，代码是类似的，我们只需要在子组件通过`emit`触发父组件的方法时，把子组件的参数带出去就可以了。代码如下。

**代码举例1**：(将子组件中的常量传递给父组件)

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
        <component1 @parent-show='show'></component1>
    </div>

    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <h2 @click="childClick">我是子组件，点击调用父组件的方法</h2>
    </template>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: { //父组件的data
                // msg: '父组件中的数据'
            },
            methods: { // 定义父组件的方法
                show: function (arg1, arg2) { //【第二步】父组件里放两个参数，这个两个参数就代表着子组件中的`child 123`、`child 789`
                    console.log('父组件提供的方法');
                    console.log('打印子组件传递过来的参数。参数一：' + arg1 + '，参数二：'+ arg2);
                }
            },
            components: {
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 子组件的data
                        return {
                            // content: '子组件私有的数据 content'
                        }
                    },
                    props: [''],
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        childClick() {
                            // 子组件如果要给父组件传递参数，在触发 emit 的时候，通过参数的形式带出去就可以了
                            // 【第一步】在子组件里，我们带两个参数出去，传给父组件
                            this.$emit('parent-show', 'child 123', 'child 789');
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>

```

运行结果：（点击`<h2>`之后）

![](http://img.smyhvae.com/20180623_1640.png)

**代码举例2**：（将子组件中的data数据传递给父组件，存放到父组件的data中）

> 在上方代码的基础之上，做改进。


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
        <component1 @parent-show='show'></component1>
    </div>

    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <h2 @click="childClick">我是子组件，点击调用父组件的方法</h2>
    </template>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: { //父组件的data
                parentData: null
            },
            methods: { // 定义父组件的方法
                show: function (arg) { //【第二步】父组件里放参数，这个参数就代表着子组件中的 child.data
                    console.log('父组件提供的方法');
                    this.parentData = arg; //将参数arg传递给父组件的data，也就达到了目的：子组件传递数据，赋值给父组件
                    console.log('打印父组件的数据（这是子组件传过来的）：'+ JSON.stringify(this.parentData));
                }
            },
            components: {
                component1: { //将子组件的名称定义为 component1
                    template: '#myTemplate',
                    data() { // 子组件的data
                        return {
                            childData: { //定义自组件的数据
                                name: 'smyhvae',
                                age: 26
                            }
                        }
                    },
                    props: [''],
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        childClick() {
                            // 子组件如果要给父组件传递参数，在触发 emit 的时候，通过参数的形式带出去就可以了
                            // 【第一步】在子组件里，通过传参的形式，把子组件的data，传给父组件
                            this.$emit('parent-show', this.childData);
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>

```


运行结果：（点击`<h2>`之后）


![](http://img.smyhvae.com/20180623_1655.png)


## 案例：发表评论功能的实现

> 该案例需要完善，目前只是为了演示 localStorage

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
    <link rel="stylesheet" href="bootstrap3.3.7.css">
</head>

<body>
    <div id="app">


        <cmt-box @func="loadComments"></cmt-box>


        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                <span class="badge">评论人： {{ item.user }}</span>
                {{ item.content }}
            </li>
        </ul>


    </div>


    <template id="tmpl">
        <div>

            <div class="form-group">
                <label>评论人：</label>
                <input type="text" class="form-control" v-model="user">
            </div>

            <div class="form-group">
                <label>评论内容：</label>
                <textarea class="form-control" v-model="content"></textarea>
            </div>

            <div class="form-group">
                <input type="button" value="发表评论" class="btn btn-primary" @click="postComment">
            </div>

        </div>
    </template>

    <script>

        var commentBox = {
            data() {
                return {
                    user: '',
                    content: ''
                }
            },
            template: '#tmpl',
            methods: {
                postComment() { // 发表评论的方法
                    // 分析：发表评论的业务逻辑
                    // 提示：评论数据存到哪里去？？？   存放到了 localStorage 中  localStorage.setItem('cmts', '')
                    // 1. 先组织出一个最新的评论数据对象
                    // 2. 想办法，把 第一步中，得到的评论对象，保存到 localStorage 中（注意：localStorage 只支持存放字符串数据， 因此要先调用 JSON.stringify）
                    //  2.1 在保存 最新的 评论数据之前，要先从 localStorage 获取到之前的评论数据（string）， 转换为 一个  数组对象， 然后，把最新的评论， push 到这个数组
                    //         注意：如果获取到的 localStorage 中的 评论字符串，为空不存在， 则  可以 返回一个 '[]'
                    //  2.2  把 最新的  评论列表数组，再次调用 JSON.stringify 转为  数组字符串，然后调用 localStorage.setItem()

                    var comment = { id: Date.now(), user: this.user, content: this.content }

                    // 第一步：一开始，从 localStorage 中获取已存在的评论
                    var list = JSON.parse(localStorage.getItem('cmts') || '[]') //获取已存在的评论数据。【重要】需要考虑空字符串的可能性，否则返回的是undefined
                    // 第二步：添加新的评论item
                    list.unshift(comment)
                    // 第三步：重新保存最新的 评论数据 到 localStorage 中
                    localStorage.setItem('cmts', JSON.stringify(list))

                    this.user = this.content = ''

                    // this.loadComments() // ?????
                    this.$emit('func')
                }
            }
        }

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                list: [
                    { id: Date.now(), user: '李白', content: '天生我材必有用' },
                    { id: Date.now(), user: '江小白', content: '劝君更尽一杯酒' },
                    { id: Date.now(), user: '小马', content: '我姓马， 风吹草低见牛羊的马' }
                ]
            },
            beforeCreate() { // 注意：这里不能调用 loadComments 方法，因为在执行这个钩子函数的时候，data 和 methods 都还没有被初始化好

            },
            created() {
                //页面一开始加载的时候，就去读取 localStorage 中已存在的评论list
                this.loadComments()
            },
            methods: {
                loadComments() { // 从本地的 localStorage 中，加载评论列表

                    var list = JSON.parse(localStorage.getItem('cmts') || '[]')
                    this.list = list
                }
            },
            components: {
                'cmt-box': commentBox
            }
        });
    </script>
</body>

</html>
```


上面的代码中，父组件定义了`loadComments()`方法，作用是**加载 localStorage 中的评论列表**。我们可以看到，页面在一开始加载的时候，就在create()生命周期中调用了`loadComments()`；当自组件中添加了评论之后，再次调用了`loadComments()`。

**待改进**：

不过，这段代码还有些问题：页面一开始加载的时候，读取的是 localStorage 中的评论列表。如果一开始的时候，从网络获取了已存在的列表，岂不是读不到了？

正确的做法应该是：父组件和子组件共享 list数据，每当在子组件中 添加了一条评论之后，就往 list 中添加一条 item。


## 在Vue中，通过 ref 属性获取DOM元素

我们当然可以使用JS原生的做法（document.getElementById）或者 jQuery 来获取DOM，但是这种做法却在无形中操作了DOM，在Vue框架中并不推荐这种做法。

我们可以通过`ref`属性获取DOM元素。

`ref`的英文单词是**reference**，表示**引用**。我们平时可以经常看到控制台会报错**referenceError**的错误，就和引用类型的数据有关。


**在Vue中，通过 ref 属性获取DOM元素**的步骤：

（1）第一步：在标签中给 DOM 元素设置 ref 属性。

```html
    <h3 id="myH3" ref="myTitle"> 今天天气太好了</h3>
```

（2）第二步：通过 this.this.$refs.xxx 获取 DOM 元素

```javascript
console.log(this.$refs.myTitle.innerText)
```

**举例如下**：

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

        <!-- 第一步：在标签中给 DOM 元素设置 ref 属性 -->
        <h3 id="myH3" ref="myTitle"> 今天天气太好了</h3>

        <input type="button" value="按钮元素" @click="getElement" ref="myBtn">


    </div>

    <script>

        var login = {
            template: '<h1>登录组件</h1>',
            data() {
                return {
                    msg: 'son msg'
                }
            },
            methods: {
                show() {
                    console.log('调用了子组件的方法')
                }
            }
        }

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {},
            methods: {
                getElement() {
                    // 原生js获取DOM元素
                    // console.log(document.getElementById('myTitle').innerText)

                    // 第二步：通过 this.this.$refs.xxx 获取 DOM 元素
                    console.log(this.$refs.myTitle.innerText)


                }
            },
            components: {
                login
            }
        });
    </script>
</body>

</html>
```

运行上方代码，然后我们在控制台输入`vm`，就可以看到：

![](http://img.smyhvae.com/20180701_1640.png)


### 使用 ref 属性获取整个子组件（父组件调用子组件的方法）

根据上面的例子，我们可以得出**规律**：只要`ref`属性加在了DOM元素身上，我们就可以获取这个DOM元素。


那我们可以通过ref属性获取整个**Vue子组件**吗？当然可以。这样做的意义是：**在父组件中通过`ref`属性拿到了子组件之后，就可以进一步拿到子组件中的data和method。




举例：

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

        <input type="button" value="点击按钮" @click="getElement">

        <login-component ref="loginTemplate"></login-component>
    </div>

    <script>

        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {},
            methods: {
                getElement() {

                    //在父组件中，通过ref获取整个子组件，进而获取子组件的data
                    console.log(this.$refs.loginTemplate.myData)

                    //在父组件中，通过ref获取整个子组件，进而获取子组件的method
                    this.$refs.loginTemplate.showMethod()
                }
            },
            components: {
                'login-component': {
                    template: '<h1>登录组件</h1>',
                    data() {
                        return {
                            myData: '子组件的data'
                        }
                    },
                    methods: {
                        showMethod() {
                            console.log('调用子组件的method')
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>
```

运行代码，点击按钮后，效果如下：

![](http://img.smyhvae.com/20180701_1735.png)

我们直接在控制台输入`vm`，可以看到：

![](http://img.smyhvae.com/20180701_1740.png)

