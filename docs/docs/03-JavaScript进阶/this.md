
## this

### this的作用

- this可以帮我们简化很多代码。比如`xiaoming.name`、`xiaoming.age`可以直接写成`this.name`、`this.age`。

- 特别是当我们不知道一个对象是什么，或者这个对象没有名字但又很想调用它的时候，就会使用到this对象。

**举例：**

- 遍历DOM对象，绑定click事件，调用当前点击的对象的id，而不是所有对象的id。

代码：

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: green;
            margin: 10px;
        }

    </style>
</head>
<body>
<script>
    window.onload = function () {
        var myDiv = document.getElementsByTagName('div');
        for (var i = 0; i < myDiv.length; i++) {
            myDiv[i].onclick = function () {
                console.log(i);
                console.log(this.id);
            }
        }

    }

</script>
<section>
    <div id="div0"> div0</div>
    <div id="div1"> div1</div>
    <div id="div2"> div2</div>
    <div id="div3"> div3</div>
    <div id="div4"> div4</div>
</section>


</body>
</html>

```


点击其中的任何一个元素后，`i`的打印结果是5。你可能会觉得很惊讶。我们来解释一下：

当代码执行完毕后，i已经等于5了。因为一旦运行程序，for循环已经执行完了，此时i等于5。

现在，我们尝试在 myDiv[i].onclick事件中写代码，如果打印：

```
	console.log(i);  //打印结果为5
```


如果打印：

```
	console.log(myDiv[i].id);
```

上方这行代码，打印会报错，因为i=5；如果想打印每个div的id，应该这样写：

```
	console.log(this.id);
```

你看，this的作用，就体现出来了。

PS：顺便提醒一下，上面的代码中，如果把`var i`改成`let i`，效果又完全不同了。参考链接：[let和var在for循环中的表现](http://blog.csdn.net/stopllL/article/details/64130664)

### 全局作用域中的this

当一段代码在浏览器中执行时，所有的全局变量和对象都是在window对象上定义的。换而言之，所有的全局变量和对象都属于window对象。


## this的定律

this关键字永远指向函数（方法）运行时的**所有者**。

### 函数赋值给变量时，this指向window


比如：

```
var foo1 = args.getInfo;
foo1();

var foo2 = function(){};
foo2();
```


this都是指向window。

### 以函数形式调用时，this永远都是window


### 以方法的形式调用时，this是调用方法的对象


## 解决闭包中的this指向问题


内部函数是可以访问到外部函数的变量的。

方式一：直接通过父函数的名字访问

方式二：如果不知道父函数的名字，在父函数里加一句`_this = this`，此时`_this`相当于父函数的名字。

### 当this遇到一些特殊的函数时











