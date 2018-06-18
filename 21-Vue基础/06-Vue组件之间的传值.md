

## 父组件向子组件传值


我们可以这样理解：Vue实例就是一个**父组件**，而我们自定义的组件（包括全局组件、私有组件）就是**子组件**。

需要注意的是，子组件不能直接使用父组件中的数据。**父组件可以通过`props`属性向子组件传值**。

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
        <!--第二步：父组件在引用子组件的时候， 通过 属性绑定（v-bind:）的形式, 把 需要传递给 子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用 -->
        <component1 v-bind:parent-msg="msg"></component1>
    </div>

    <!-- 定义子组件的模板 -->
    <template id="myTemplate">
        <h1 @click="change">我是子组件。我想使用父组件中的数据parentMsg： {{ parentMsg }}</h1>
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
                component1: {
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


**父组件给字组件传值的步骤**：

> 根据上方截图，我们可以总结出父组件给子组件传值的步骤。

子组件中，data中的数据和props中的数据的区别：

-


- data中的数据是可读可写的；props中的属性只是可读的，无法重新赋值，重新赋值会报错（也就是说，子组件不要直接去修改父组件中的数据）。





