
## JSX介绍

### JSX的引入

如果直接让用户通过 JS 代码手动创建DOM元素，肯定是非常麻烦的。

于是，React 官方就提出了一套 JSX 语法规范，能够让我们在 JS 文件中，书写类似于 HTML 那样的代码，快速定义虚拟DOM结构。

### JSX的全称

JSX：JavaScript XML，一种类似于XML的JS扩展语法。也可以理解成：符合 XML 规范的 JS 语法。

需要注意的是，哪怕你在 JS 中写的是 JSX 语法（即JSX这样的标签），但是，JSX内部在运行的时候，并不是直接把 我们的 HTML 标签渲染到页面上；而是先把 类似于HTML 这样的标签代码，转换成 React.createElement 这样的JS代码，再渲染到页面中。

从这一点我们可以看出，JSX是一个对程序员友好的语法糖。

**JSX语法的本质**：以 React.createElement 的形式来实现的，并没有直接把 用户写的 HTML代码，渲染到页面上。

### babel转换工具

如果要直接使用 JSX 语法，需要先安装相关的 语法转换工具：

```
	运行 cnpm i babel-preset-react -D
```

这个babel包的作用是：将 JSX语法 转换为 JS语法。

安装完成后，就可以开始使用JSX语法了。

完整代码举例：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="app"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">
      //页面中的真实容器元素
      var containDiv = document.getElementById("app");

      //1、使用JSX语法 创建虚拟DOM对象
      var vDom = (
        <div>
          Hello, React!
          <h2>这是标题</h2>
        </div>
      );

      //2、渲染虚拟DOM对象（将虚拟DOM对象渲染到页面元素中）
      ReactDOM.render(vDom, containDiv); // 参数1：虚拟DOM对象；参数2：页面中的容器
    </script>
  </body>
</html>

```


## JSX的基本语法

（1）在 JSX内部 写 JS代码：如果要在 JSX 语法内部，书写 JS 代码，那么，所有的JS代码必须写到 `{}` 的内部。在{}内部，可以写任何符合JS规范的代码。

例如：

```javascript
	var myTitle = '这是使用变量定义的 tilte 值'

	// 使用JSX语法 创建虚拟DOM对象
	var vDom = (
	<div>
	  Hello, React!
	  <h2 title={myTitle + 'vae'}>这是标题</h2>
	</div>
	);
```

（2）当编译引擎在编译JSX代码的时候，如果遇到了`<`，会把它当作 HTML代码 去编译；如果遇到了 `{}`， 会把方括号里面的代码当作 普通JS代码 去编译。

（3）在JSX中，如果要为元素添加`class`属性，则必须写成`className`，因为 `class`在ES6中是一个关键字；和`class`类似，label标签的 `for` 属性需要替换为 `htmlFor`。

代码举例：

```html
  // 使用JSX语法 创建虚拟DOM对象
  var vDom = (
    <div>
      Hello, React!
      <p className="qianguyihao">千古壹号</p>
      <label htmlFor="" />
    </div>
  );
```

（4）在JSX创建DOM的时候，所有的节点，必须有唯一的根元素进行包裹。

（5）如果要写注释，注释必须放到 {} 内部。例如：

```javascript
	// 使用JSX语法 创建虚拟DOM对象
	var vDom = (
	// 这一行是注释
	<div>
	  Hello, React!
	  <p className="qianguyihao">千古壹号</p>
	  {/*这一行也是注释 */}
	</div>
	);
```

最后，再举个例子：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="app"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">
      //页面中的真实容器元素
      var containDiv = document.getElementById("app");

      var arr = []
      for (var i = 0; i < 6; i++) {
        var p = <p className="myp" key={i}>这个是p标签</p>  // 注意这个地方的写法： key = {i}
        arr.push(p)
      }

      //1、使用JSX语法 创建虚拟DOM对象
      var vDom = (
        <div>
          Hello, React!
            {arr}
        </div>
      );

      //2、渲染虚拟DOM对象
      ReactDOM.render(vDom, containDiv); // 参数1：虚拟DOM对象；参数2：页面中的容器
    </script>
  </body>
</html>
```

运行结果：

20190210_1501.png


## 创建组件的第一种方式

### 创建组件

在React中，构造函数就是一个最基本的组件。

如果想要把组件放到页面中，可以把**构造函数的名称**当作**组件的名称**，以 HTML标签形式引入页面中即可。

举例：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="app"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">
      // 这个构造函数，就相当于一个 组件
      function Hello() {
        return (
          <div>
            <h3>这是 Hello组件 中定义的元素</h3>
          </div>
        );
      }

      ReactDOM.render(
        <div>
          <Hello> </Hello>
        </div>,
        document.getElementById("app")
      );
    </script>
  </body>
</html>

```

运行结果：

20190210_1510.png

**需要注意的是**：

React在解析所有标签的时候，是以标签的首字母来区分的：如果标签的首字母是小写，就按照普通的 HTML 标签来解析；如果首字母是大写，则按照 **组件**的形式来解析。

比如上方代码中，如果把大写的 `Hello` 改成小写的 `hello`，运行会报错，无法看到预期的结果。

**结论**：组件的首字母必须大写。

### 父组件传值给子组件

代码举例：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="app"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">
      // 父组件中的数据
      var person = {
        name: "qianguyihao",
        age: 27,
        gender: "男",
        address: "深圳"
      };

	  // 在子组件中，如果想要使用外部传递过来的数据，必须显示的在 构造函数参数列表中，定义 props 属性来接收
	  // 通过 props 得到的任何数据都是只读的，不能重新赋值
      function Hello(props) {
        return (
          <div>
            <h3>这是 Hello子组件 中定义的元素： {props.name}</h3>
          </div>
        );
      }

      ReactDOM.render(
      	<!-- 注意：这里的 ...Obj 语法，是 ES6中的属性扩散，表示：把这个对象上的所有属性，展开了，放到这个位置 -->
        <div>
          <Hello {...person}> </Hello>
        </div>,
        document.getElementById("app")
      );
    </script>
  </body>
</html>

```

上方代码中，我们是想把整个person对象传递给子组件，所以采用了`...Obj 语法`语法。传递给子组件后，子组件获取的数据仅仅只是可读的。

## class 关键字的介绍

面向对象语言的三个特性：封装、继承、多态。多态 和 接口、虚拟方法有关。

### class的基本用法：使用class创建对象

myclass.js:

```javascript
// 以前学习的：使用构造函数创建对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log("呵呵哒");
};
Person.info = 123;

var p1 = new Person("zs", 20);


// 本次需要学习的：class 后面跟上类名，类名后面，不需要加 () ，直接上 {}
class Per {
  // 在每个class类内部，都有一个 constructor 构造器， 如果没有显示定义 构造器，那么类内部默认都有个看不见的 constructor
  // constructor 的作用，就好比 咱们之前的 function Person(){ }
  // 每当，使用 new 关键字创建 class 类实例的时候，必然会优先调用 constructor 构造器
  // constructor(){}
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 这是实例方法，必须通过 new 出来的对象调用
  say() {
    console.log("ok a ");
  }

  static info = 123;

  static sayHello() {
    console.log("这是静态方法");
  }
}

var p2 = new Per("壹号", 26);
console.log(p2);
console.log(Per.info);
console.log(Per.sayHello());

```


### 使用 class 实现 JS 中的继承

myclass2.js：

```javascript
class Person {
  constructor(name, age) {
    console.log(3);
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("这是 Person中的 say 方法");
  }
  static info = 123;
}

// 使用 extends 实现继承，extends的前面的是子类，后面的是父类
class Chinese extends Person {
  constructor(name, age, color, language) {
    console.log(1);
    // 注意： 当使用 extends 关键字实现了继承， 子类的 constructor 构造函数中，必须显示调用 super() 方法，这个 super 表示父类中 constructor 的引用
    super(name, age);
    this.color = color;
    this.language = language;
    console.log(2);
  }
}

var c1 = new Chinese("张三", 22, "yellow", "汉语");
console.log(c1);
// 父类中任何东西，子类都能继承到
c1.say();

```

注意上方 `constructor`处的注释：当使用 extends 关键字实现了继承， 子类的 constructor 构造函数中，必须显示调用 super() 方法，这个 super 表示父类中 constructor 的引用。也就是说，在子类当中，要么不写 constructor，如果写了 constructor，就一定要把 `super()`也加上。

为啥我们要引入 `class`这个功能？就是因为， `class`里，永远都存在着一个 constructor。我们可以利用 `constructor`做很多事情。

## 创建组件的第二种方式：使用 class 关键字


使用 class 创建的类，通过 extends 关键字，继承 `React.Component` 之后，这个类，就是一个组件的模板了。如果想要引用这个组件，可以把类的名称以**标签的形式**，导入到 JSX 中使用。

在 class 实现的组件内部，必须定义一个 render 函数。在 render 函数中，还必须 return 一个东西，如果没有什么需要被return 的，则需要 return null。


**代码举例**：

index.html:

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="app"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">

      // 使用 class 创建的类，通过 extends 关键字，继承 `React.Component` 之后，这个类，就是一个组件的模板了。
      // 如果想要引用这个组件，可以把类的名称以**标签的形式**，导入到 JSX 中使用。
      class Hello2 extends React.Component {
        // 在 class 实现的组件内部，必须定义一个 render 函数
        render() {
          // 在 render 函数中，还必须 return 一个东西，如果没有什么需要被return 的，则需要 return null
          return (
            <div>
              <h3>这是使用 class 类创建的组件 </h3>
            </div>
          );
        }
      }

      ReactDOM.render(
        <div>
          <Hello2> </Hello2>
        </div>,
        document.getElementById("app")
      );
    </script>
  </body>
</html>

```

### 父组件传值给子组件

代码举例：

index.html:

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
  </head>
  <body>
    <!-- 引入React相关的js库 -->
    <script type="text/javascript" src="./libs/react.js"></script>
    <script type="text/javascript" src="./libs/react-dom.js"></script>
    <script type="text/javascript" src="./libs/babel.min.js"></script>

    <div id="app"></div>

    <!-- 注意，这一行的 type 是写 "text/babel"，而不是 "text/javascript" -->
    <script type="text/babel">
      // 使用 class 创建的类，通过 extends 关键字，继承 `React.Component` 之后，这个类，就是一个组件的模板了。
      // 如果想要引用这个组件，可以把类的名称以**标签的形式**，导入到 JSX 中使用。
      class Hello2 extends React.Component {
        constructor(props) {
          super(props);
          console.log(props.name);

          // 注意：`this.state` 是固定写法，表示当前组件实例的私有数据对象，就好比 vue 中，组件实例身上的 data(){ return {} } 函数
          // 如果想要使用 组件中 state 上的数据，直接通过 this.state.*** 来访问即可
          this.state = {
            msg: "这是 Hello2 组件的私有msg数据",
            info: "永不止步"
          };
        }
        // 在 class 实现的组件内部，必须定义一个 render 函数
        render() {
          // 在 render 函数中，还必须 return 一个东西，如果没有什么需要被return 的，则需要 return null
          return (
            <div>
              <h3>这是使用 class 类创建的组件 </h3>
            </div>
          );
        }
      }

      ReactDOM.render(
        <div>
          <Hello2 name="qianguyihao"> </Hello2>
        </div>,
        document.getElementById("app")
      );
    </script>
  </body>
</html>

```

## 方式一和方式二的对比

上面的内容里，我们使用了两种方式创建组件。这两种方式，有着本质的区别，我们来对比一下。

**对比**：

- **方式一**：通过 function构造函数 创建组件。内部没有 state 私有数据，只有 一个 props 来接收外界传递过来的数据。

- **方式二**：通过 class 创建子组件。内部除了有 this.props 这个只读属性之外，还有一个专门用于 存放自己私有数据的 this.state 属性，这个 state 是可读可写的。

基于上面的区别，我们可以为这两种创建组件的方式下定义： 使用 function 创建的组件，叫做【无状态组件】；使用 class 创建的组件，叫做【有状态组件】。

**本质区别**：

有状态组件和无状态组件，最本质的区别，就是有无 state 属性。同时， class 创建的组件，有自己的生命周期函数，但是，function 创建的 组件，没有自己的生命周期函数。

**什么时候使用 有状态组件，什么时候使用无状态组件**：

- （1）如果一个组件需要存放自己的私有数据，或者需要在组件的不同阶段执行不同的业务逻辑，此时，非常适合用 class 创建出来的有状态组件。

- （2）如果一个组件，只需要根据外界传递过来的 props，渲染固定的页面结构即可的话，此时，非常适合使用 function 创建出来的无状态组件。（使用无状态组件的小小好处： 由于剔除了组件的生命周期，所以，运行速度会相对快一点点）。



