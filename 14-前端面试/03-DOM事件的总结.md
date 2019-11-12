

## 前言


要学习事件的基础内容，请看先本人之前的基础文章：

- 《04-JavaScript基础/27-事件对象Event》

- 《04-JavaScript基础/28-事件捕获和事件冒泡》

- 《04-JavaScript基础/29-事件委托》

知识难度不大，只是大家需要系统地学习。

**知识点主要包括以下几个方面：**

- 基本概念：DOM事件的级别

面试不会直接问你，DOM有几个级别。但会在题目中体现：“请用DOM2 ....”。


- DOM事件模型、DOM事件流

面试官如果问你“**DOM事件模型**”，你不一定知道怎么回事。其实说的就是**捕获和冒泡**。

**DOM事件流**，指的是事件传递的**三个阶段**。

- 描述DOM事件捕获的具体流程

讲的是事件的传递顺序。参数为false（默认）、参数为true，各自代表事件在什么阶段触发。

能回答出来的人，寥寥无几。也许有些人可以说出一大半，但是一字不落的人，极少。

- Event对象的常见应用（Event的常用api方法）

DOM事件的知识点，一方面包括事件的流程；另一方面就是：怎么去注册事件，也就是监听用户的交互行为。第三点：在响应时，Event对象是非常重要的。

- 自定义事件（非常重要）

一般人可以讲出事件和注册事件，但是如果让你讲**自定义事件**，能知道的人，就更少了。

- 事件委托

业务中经常用到。

下面分别讲解。


## DOM事件的级别

DOM事件的级别，准确来说，是**DOM标准**定义的级别。包括：

**DOM0的写法：**


```javascript
    element.onclick = function () {

    }
```


上面的代码是在 js 中的写法；如果要在html中写，写法是：在onclick属性中，加 js 语句。


**DOM2的写法：**


```javascript
    element.addEventListener('click', function () {

    }, false);
```

【重要】上面的第三参数中，**true**表示事件在**捕获阶段**触发，**false**表示事件在**冒泡阶段**触发（默认）。如果不写，则默认为false。


**DOM3的写法：**


```javascript
    element.addEventListener('keyup', function () {

    }, false);
```

DOM3中，增加了很多事件类型，比如鼠标事件、键盘事件等。


PS：为何事件没有DOM1的写法呢？因为，DOM1标准制定的时候，没有涉及与事件相关的内容。

**总结**：关于“DOM事件的级别”，能回答出以上内容即可，不会出题目让你做。


## DOM事件模型、DOM事件流

### DOM事件模型

DOM事件模型讲的就是**捕获和冒泡**，一般人都能回答出来。

- 捕获：从上往下。

- 冒泡：从下（目标元素）往上。

### DOM事件流

DOM事件流讲的就是：浏览器在于当前页面做交互时，这个事件是怎么传递到页面上的。

类似于Android里面的事件传递。

完整的事件流，分三个阶段：

- （1）捕获：从 window 对象传到 目标元素。

- （2）目标阶段：事件通过捕获，到达目标元素，这个阶段就是目标阶段。

- （3）冒泡：从**目标元素**传到 Window 对象。

![](http://img.smyhvae.com/20180306_1058.png)

![](http://img.smyhvae.com/20180204_1218.jpg)


## 描述DOM事件捕获的具体流程

> 很少有人能说完整。

### 捕获的流程


![](http://img.smyhvae.com/20180306_1103.png)


**说明**：捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。

PS1：第一个接收到事件的对象是 **window**（有人会说body，有人会说html，这都是错误的）。

PS2：JS中涉及到DOM对象时，有两个对象最常用：window、doucument。它们俩也是最先获取到事件的。

代码如下：


```javascript
    window.addEventListener("click", function () {
        alert("捕获 window");
    }, true);

    document.addEventListener("click", function () {
        alert("捕获 document");
    }, true);

    document.documentElement.addEventListener("click", function () {
        alert("捕获 html");
    }, true);

    document.body.addEventListener("click", function () {
        alert("捕获 body");
    }, true);

    fatherBox.addEventListener("click", function () {
        alert("捕获 father");
    }, true);

    childBox.addEventListener("click", function () {
        alert("捕获 child");
    }, true);

```


**补充一个知识点：**

在 js中：

- 如果想获取 `body` 节点，方法是：`document.body`；

- 但是，如果想获取 `html`节点，方法是`document.documentElement`。


### 冒泡的流程

与捕获的流程相反


## Event对象的常见 api 方法

用户做的是什么操作（比如，是敲键盘了，还是点击鼠标了），这些事件基本都是通过Event对象拿到的。这些都比较简单，我们就不讲了。我们来看看下面这几个方法：

### 方法一

```javascript
    event.preventDefault();
```

解释：阻止默认事件。

比如，已知`<a>`标签绑定了click事件，此时，如果给`<a>`设置了这个方法，就阻止了链接的默认跳转。

### 方法二：阻止冒泡

这个在业务中很常见。

有的时候，业务中不需要事件进行冒泡。比如说，业务这样要求：单击子元素做事件A，单击父元素做事件B，如果不阻止冒泡的话，出现的问题是：单击子元素时，子元素和父元素都会做事件A。这个时候，就要用到阻止冒泡了。


w3c的方法：（火狐、谷歌、IE11）

```javascript
    event.stopPropagation();
```

IE10以下则是：

```javascript
	event.cancelBubble = true;
```

兼容代码如下：

```javascript
   box3.onclick = function (event) {

        alert("child");

        //阻止冒泡
        event = event || window.event;

        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
```

上方代码中，我们对box3进行了阻止冒泡，产生的效果是：事件不会继续传递到 father、grandfather、body了。


### 方法三：设置事件优先级


```javascript
    event.stopImmediatePropagation();

```

这个方法比较长，一般人没听说过。解释如下：

比如说，我用addEventListener给某按钮同时注册了事件A、事件B。此时，如果我单击按钮，就会依次执行事件A和事件B。现在要求：单击按钮时，只执行事件A，不执行事件B。该怎么做呢？这是时候，就可以用到`stopImmediatePropagation`方法了。做法是：在事件A的响应函数中加入这句话。

大家要记住 event 有这个方法。

### 属性4、属性5（事件委托中用到）


```javascript

    event.currentTarget   //当前所绑定的事件对象。在事件委托中，指的是【父元素】。

    event.target  //当前被点击的元素。在事件委托中，指的是【子元素】。

```

上面这两个属性，在事件委托中经常用到。


**总结**：上面这几项，非常重要，但是容易弄混淆。


## 自定义事件

自定义事件的代码如下：


```javascript
    var myEvent = new Event('clickTest');
    element.addEventListener('clickTest', function () {
        console.log('smyhvae');
    });

	//元素注册事件
    element.dispatchEvent(myEvent); //注意，参数是写事件对象 myEvent，不是写 事件名 clickTest

```

上面这个事件是定义完了之后，就直接自动触发了。在正常的业务中，这个事件一般是和别的事件结合用的。比如延时器设置按钮的动作：

```javascript
    var myEvent = new Event('clickTest');

    element.addEventListener('clickTest', function () {
        console.log('smyhvae');
    });

    setTimeout(function () {
        element.dispatchEvent(myEvent); //注意，参数是写事件对象 myEvent，不是写 事件名 clickTest
    }, 1000);
```


## 事件委托

参考本人这篇文章的最后一段：

- 《04-JavaScript基础/29-事件委托》





