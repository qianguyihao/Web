

## 父组件向子组件传值


我们可以这样理解：Vue实例就是一个**父组件**，而我们自定义的组件（包括全局组件、私有组件）就是**子组件**。

需要注意的是，子组件不能直接使用父组件中的数据。**父组件可以通过`props`属性向子组件传值**。

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
        <!--第三步：父组件在引用子组件的时候， 通过 属性绑定（v-bind:）的形式, 把 需要传递给 子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用 -->
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
                    // props 中的数据，都是只读的，无法重新赋值（也就是说，）
                    props: ['parentMsg'], // 第一步：把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
                    directives: {},
                    filters: {},
                    components: {},
                    methods: {
                        change() {
                            // 下面这行会报错，因为子组件不要直接修改父组件中的data数据
                            // this.parentmsg = '被修改了'
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

20180618_2350.png

代码截图如下：

20180618_2355.png


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
        <!-- 父组件向子组件 传递 方法，是通过 事件绑定机制； v-on。当我们自定义了 一个 事件属性 parent-show（这个地方不能用驼峰命名）之后，那么，子组件就能够，通过 emit 来调用 传递进去的 这个 方法了 -->
        <!-- 【第一步】。意思是说，`show`是父组件的方法名，`parent-show`是自定义的时间属性，稍后要在子组件中用到 -->
        <component1 @parent-show='show'></component1>
    </div>

    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <!-- 【第二步】按照正常的写法来：点击按钮，调用子组件的方法 -->
        <h2 @click="childClick">我是子组件，点击调用父组件的方法</h2>
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

20180623_1640.png

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


20180623_1655.png


## 案例：发表评论功能的实现










