











































## 子组件的定义和注册

我们在本文的第一段中，通过`Vue.component`形式定义的是**全局组件**。这一段中，我们来讲一下**子组件**。

### 在父组件中定义子组件

比如说，一个`账号`模块是父组件，里面分为`登陆`模块和`注册`模块，这两个晓得模块就可以定义为子组件。

需要注意的是作用域的问题：我们在父组件中定义的子组件，只能在当前父组件的模板中使用；在其他的组件，甚至根组件中，都无法使用。

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

我们发现，既然是定义父亲`<account>`的子组件，那么，子组件`<login>`的调用，只能写在父组件`<account>`的`template`模板中。

显示效果：

![](http://img.smyhvae.com/20180423_1029.png)


### 在 Vue 根实例中定义子组件

当然，我们还可以这样做：把整个 Vue 对象当成父亲，这样的话，就可以在 Vue 示例中定义一个子组件。如下：

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
        <login> </login>
    </div>

    <script>

        new Vue({
            el: '#app',
            //在Vue实例中定义子组件
            components: {  // components 是关键字，不能改
                'login': {
                    template: '<h3>登录模块</h3>'
                }
            }
        });
    </script>
</body>

</html>

```

这样写的话，我们定义的子组件`<login>`在整个`#app`区域，都是可以使用的。

上面的代码，还有**另外一种写法**：（把子组件的模板定义，存放到变量中）【重要】

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
        <login> </login>
    </div>

    <script>

        //通过变量接收定义的子组件
        var myLogin = {
            template: '<h3>登录模块</h3>'   // template 是关键字，不能改
        }

        new Vue({
            el: '#app',
            //在Vue实例中定义子组件
            components: {  // components 是关键字，不能改
                'login': myLogin

            }
        });
    </script>
</body>

</html>
```

注意，在定义子组件时，关键字`components`不要写错了。

## 组件之间的动态切换（暂略）

我们可以利用`<component> `标签的`:is`参数来进行组件之间的切换。

## 父组件向子组件传递数据

我们要记住：父组件通过**属性**的形式，向子组件传递数据。

**引入**：

我们先来看这样一段代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script src="vue2.5.16.js"></script>

<body>

    <div id="app">
        <!-- 这里是父组件的范围，自定义一个数值 number -->
        <counter number="1+2"> </counter>
        <counter number="10+20"> </counter>
    </div>

    <script>
        var myCounter = {
            //【重要】这里是子组件的范围，无法直接获取父组件中的 number
            template: '<div>我是子组件。{{number}}</div>'
        }

        var vm = new Vue({
            el: '#app',
            components: {
                'counter': myCounter
            }
        });
    </script>

</body>

</html>

```

上方代码中，我想把父组件里 number 的数值传递给子组件，直接这样写，是看不到效果的：

![](http://img.smyhvae.com/20180424_1520.png)

**1、父组件传值给子组件**：

要通过 props 属性将number进行传递给子组件才可以。代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script src="vue2.5.16.js"></script>

<body>

    <div id="app">
        <!-- 这里是父组件的范围，自定义一个数值 number -->
        <counter :number="1+2"> </counter>
        <counter :number="10+20"> </counter>
    </div>

    <script>
        var myCounter = {
            //这里是子组件的范围
            props: ['number'], //通过 props 属性将父亲的 number 数据传递给子组件
            template: '<div>我是子组件。{{number}}</div>'
        }

        var vm = new Vue({
            el: '#app',
            components: {
                'counter': myCounter
            }
        });
    </script>

</body>

</html>
```

在`<counter>`标签中，要注意`:number`里的冒号。加上冒号，那么引号里的内容就是表达式（期望的结果）；否则，引号的内容只是字符串：

![](http://img.smyhvae.com/20180424_1530.png)

**2、子组件获取了父组件的数据后，进行求和操作**：

上方代码中，子组件已经获取了父组件的两个number，现在要求：每点击一次子组件，在子组件中将数据加 1。

一般人可能会这样写：（不推荐的写法：子组件直接修改父组件中的数据）

```javascript
        var myCounter = {
            //这里是子组件的范围
            props: ['number'], //通过 props 属性将父亲的数据传递给子组件
            template: '<div @click="addClick">我是子组件。{{number}}</div>',
            methods: {
                addClick: function () {
                    this.number ++;  //这种写法不推荐。不建议直接操作父组件中的数据
                }

            }
        }
```

上方代码的写法不推荐，因为不建议直接操作父组件中的数据。虽然数据操作成功，但是控制台会报错：

img.png

这样涉及到**单向数据流**的概念：

- 父组件可以传递参数给子组件，但是反过来，子组件不要去修改父组件传递过来的参数。因为同一个参数，可能会传递给多个子组件，避免造成修改的冲突。

既然如此，我可以把父组件中的数据，在子组件中创建**副本**，然后我们去修改这个副本，就不会造成影响了。最终，完整版代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script src="vue2.5.16.js"></script>

<body>

    <div id="app">
        <!-- 这里是父组件的范围，自定义一个数值 number -->
        <counter :number="1+2"> </counter>
        <counter :number="10+20"> </counter>
    </div>

    <script>
        var myCounter = {
            //这里是子组件的范围
            props: ['number'], //通过 props 属性将父亲的数据传递给子组件
            data: function () {
                return {
                    number2: this.number
                }
            },
            template: '<div @click="addClick">我是子组件。{{number2}}</div>',

            methods: {
                addClick: function () {
                    this.number2 ++;   //操作和修改number的副本
                }

            }
        }

        var vm = new Vue({
            el: '#app',
            components: {
                'counter': myCounter
            },

        });
    </script>

</body>

</html>

```

## 子组件向父组件传值

我们要记住：子组件通过**事件触发**的形式，向父组件传值。




**案例1:**子组件给父组件传递数据

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
        <!-- 在外层监听`mysend`事件，进而出发外层的 getData 方法 -->
        <counter v-on:mysend="getData"> </counter>
    </div>

    <script>

        Vue.component('counter', {
            template: '<div @click = "addClick">发送数据给父组件</div>',  //当组件被点击时，触发 addClick 方法

            methods: {
                addClick: function () {
                    //第一个参数为键(注意，要小写，不能大写)，第二个参数为值
                    this.$emit('mysend', 'smyhvae'); //通过键`mysend`事件通知外面，将值`smyhvae`传给父组件
                }
            }
        });

        new Vue({
            el: '#app',
            methods: {
                getData: function (input) { //通过括号里的参数，获取子组件传递过来的值
                    console.log(input);   //打印结果：smyhvae
                }
            }
        });
    </script>
</body>

</html>

```


**案例2**：获取子组件的DOM对象

题目：给两个相同的子组件定义计数器，每点击一次，数值加1。然后在父组件中求和。

步骤（1）：给两个相同的子组件定义计数器，每点击一次，数值加1。代码如下：

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
        <counter> </counter>
        <counter> </counter>
    </div>

    <script>

        Vue.component('counter', {
            template: '<div @click = "addClick">当前计数：{{number}}</div>',  //当组件被点击时，调用 addClick 方法

            data: function () {
                return {
                    number: 0 //给组件定义一个数据：number
                }
            },
            methods: {
                addClick: function () {
                    this.number++;   //定义方法：每点击一次，number 的数值加 1
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

步骤（2）：两个子组件的数值加 1 后，通知父组件。代码如下：

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
        <!-- 在外层监听`change`事件，进而出发外层的 myClick 方法 -->
        <counter @change="myMethod"> </counter>
        <counter @change="myMethod"> </counter>
    </div>

    <script>

        Vue.component('counter', {
            template: '<div @click = "addClick">当前计数：{{number}}</div>',  //当组件被点击时，

            data: function () {
                return {
                    number: 0 //给组件定义一个数据：number
                }
            },
            methods: {
                addClick: function () {
                    this.number++;   //定义方法：每点击一次，number 的数值加 1
                    this.$emit('change'); //通过这一行的`change`，通知外面，内部的 addClick 方法已经执行了
                }
            }
        });

        new Vue({
            el: '#app',
            methods: {
                myMethod: function () {
                    console.log('触发父组件');
                }
            }
        });
    </script>
</body>

</html>

```

上方代码中，通过关键字`emit`通知父组件，子组件里的 addClick 方法被执行了。父组件得知后，执行`myMethod()`方法（这个方法是在Vue实例中定义的，很好理解）

步骤（3）：在父组件中求和

既然父组件已经得知子组件的 addClick 事件，那我们直接在父组件的`myMethod()`里定义求和的方法即可。

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
        <!-- 在外层监听`change`事件，进而触发外层的 myMethod 方法 -->
        <counter ref="one" @change="myMethod"> </counter>
        <counter ref="two" @change="myMethod"> </counter>
        <div>{{totalData}}</div>
    </div>

    <script>

        Vue.component('counter', {
            template: '<div @click = "addClick">当前计数：{{number}}</div>',  //当组件被点击时，触发 addClick方法

            data: function () {
                return {
                    number: 0 //给组件定义一个数据：number
                }
            },
            methods: {
                addClick: function () {
                    this.number++;   //定义方法：每点击一次，number 的数值加 1
                    this.$emit('change'); //通过这一行自定义的`change`，通知外面，内部的 addClick 方法已经执行了
                }
            }
        });

        new Vue({
            el: '#app',
            data: {
                totalData: 0
            },
            methods: {
                myMethod: function () {
                    console.log('触发父组件');
                    //通过`$refs`获取子组件中各自的number数值
                    var a1 = this.$refs.one.number;
                    var a2 = this.$refs.two.number;
                    //求和，存放在父组件的 totalData 中
                    this.totalData = a1 + a2;

                    console.log();
                }
            }
        });
    </script>
</body>

</html>

```

代码的关键：

- 在`<counter>`标签中，通过 `ref = "xxx"`属性，给各个组件起一个别名，代表组件的引用

- 在父函数`myMethod()`中，通过`this.$refs.xxx`获取组件的引用。我们看一下最后两行代码在控制台的输出便知：（组件里有 number 属性）

![](http://img.smyhvae.com/20180424_1455.png)



