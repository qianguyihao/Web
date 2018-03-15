
## this

### this的作用

- this可以帮我们简化很多代码。比如`xiaoming.name`、`xiaoming.age`可以直接写成`this.name`、`this.age`。

- 特别是当我们不知道一个对象是什么，或者这个对象没有名字但又很想调用它的时候，就会使用到this对象。

举例：

- 遍历DOM对象，绑定click事件，调用当前点击的对象的id，而不是所有对象的id。


### 全局作用域中的this

当一段代码在浏览器中执行时，所有的全局变量和对象都是在window对象上定义的。换而言之，所有的全局变量和对象都属于window对象。



### this的定律


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


### 解决闭包中的this指向问题


内部函数是可以访问到外部函数的变量的。

方式一：直接通过父函数的名字访问

方式二：如果不知道父函数的名字，在父函数里加一句`_this = this`，此时`_this`相当于父函数的名字。

### 当this遇到一些特殊的函数时











