







## call()和apply()


这两个方法都是函数对象的方法，需要通过函数对象来调用。

当函数调用call()和apply()时，函数都会立即**执行**。


- 都可以用来改变函数的this对象的指向。

- 第一个参数都是this要指向的对象（函数执行时，this将指向这个对象），后续参数传实参。


**call()和apply()的区别：**


call()和apply()方法都可以将实参在对象之后依次传递，但是apply()方法需要将实参封装到一个**数组**中统一传递。

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



**this的情况：**【非常重要】


- 1.以函数形式调用时，this永远都是window

- 2.以方法的形式调用时，this是调用方法的对象

- 3.以构造函数的形式调用时，this是新创建的对象

- 4.使用call和apply调用时，this是指定的对象


## call()和apply()的作用

- 改变this的指向

- 实现继承。Father.call(this)


## 参数的传递

1、使用call的时候，thisObj不传或者为null、undefined时，函数中的this会指向window对象。

2、传递一个别的函数名时，函数中的this将指向这个**函数的引用**。

3、传递的值为数字、布尔值、字符串，this会指向这些基本类型的包装对象Number、Boolean、String。

4、传递一个对象，函数中的this则指向传递的这个对象。


## bind()

call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。

bind与call和apply的不同点在于：call或apply会自动执行对应的函数，bind不会执行对应的函数。

推荐链接：

-


参考链接：

- <https://www.jianshu.com/p/56a9c2d11adc>

- <https://github.com/lin-xin/blog/issues/7>

- <https://segmentfault.com/a/1190000007402815>



- [JS中改变this指向的方法](http://www.xiaoxiaohan.com/js/38.html)





