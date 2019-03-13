
## call()和apply()

### 介绍

这两个方法都是函数对象的方法，需要通过函数对象来调用。

当函数调用call()和apply()时，函数都会立即**执行**。

- 都可以用来改变函数的this对象的指向。

- 第一个参数都是this要指向的对象（函数执行时，this将指向这个对象），后续参数用来传实参。

### 显式绑定this

JS提供的绝大多数函数以及我们自己创建的所有函数，都可以使用call 和apply方法。

它们的第一个参数是一个对象。因为你可以直接指定 this 绑定的对象，因此我们称之为显式绑定。

例1：

```javascript
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    };

    // 将 this 指向 obj
    foo.apply(obj); //打印结果：2
```

### 第一个参数的传递

1、thisObj不传或者为null、undefined时，函数中的this会指向window对象（非严格模式）。

2、传递一个别的函数名时，函数中的this将指向这个**函数的引用**。

3、传递的值为数字、布尔值、字符串时，this会指向这些基本类型的包装对象Number、Boolean、String。

4、传递一个对象时，函数中的this则指向传递的这个对象。


### call()和apply()的区别

call()和apply()方法都可以将实参在对象之后依次传递，但是apply()方法需要将实参封装到一个**数组**中统一传递（即使只有实参只有一个，也要放到数组中）。

比如针对下面这样的代码：

```javascript
    var persion1 = {
        name: "小王",
        gender: "男",
        age: 24,
        say: function (school, grade) {
            alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);
        }
    }
    var person2 = {
        name: "小红",
        gender: "女",
        age: 18
    }
```

如果是通过call的参数进行传参，是这样的：

```javascript
	persion1.say.call(persion2, "实验小学", "六年级");
```

如果是通过apply的参数进行传参，是这样的：

```javascript
	persion1.say.apply(persion2, ["实验小学", "六年级"]);
```

看到区别了吗，call后面的实参与say方法中是一一对应的，而apply传实参时，要封装成一个数组，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。

### call()和apply()的作用

- 改变this的指向

- 实现继承。Father.call(this)

## bind()

- 都能改变this的指向

- call()/apply()是**立即调用函数**

- bind()是将函数返回，因此后面还需要加`()`才能调用。

bind()传参的方式与call()相同。

参考链接：

- <https://www.jianshu.com/p/56a9c2d11adc>

- <https://github.com/lin-xin/blog/issues/7>

- <https://segmentfault.com/a/1190000007402815>

- [JS中改变this指向的方法](http://www.xiaoxiaohan.com/js/38.html)





