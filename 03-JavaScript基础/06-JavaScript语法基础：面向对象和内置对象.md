

## 面向对象的概念

**对象的作用是：封装信息**。比如Student类里可以封装学生的姓名、年龄、成绩等。

那为什么不用数组封装信息呢？首先，数组只能存放同一种类型的数据；其次，要功过

对象具有**特征**（属性）和**行为**（方法）。

面向对象：可以创建自定义的类型、很好的支持继承和多态。

面向对象的特征：封装、继承、多态。

## 创建自定义对象

### 创建单个自定义对象

创建一个空白的对象，举例：

```
    var student= new Object();
```

完整的举例如下：

```javascript
        //调用对象
        console.log(student);   //调用对象的方法
        student.sayHi();        //调用对象的方法


        //（1）创建一个空白的对象
        var student= new Object();

        // （2）定义对象的属性
        student.name = "生命壹号";
        student.age = 26;
        // （3）定义对象的方法
        student.sayHi = function () {
            console.log(this.name + "今年的岁数是" + this.age); //如果要调用自己的name，可以使用this
        }
```

输出如下：

20180125_1059.png

### 引入：创建多个自定义对象

举例：

```javascript
        var stu1 = createStudent("生命壹号");
        console.log(stu1);
        stu1.sayHi();

        console.log("------------------");

        var stu2 = createStudent("许嵩");
        console.log(stu2);
        stu2.sayHi();


        // 创建一个函数
        function createStudent(name) {
            var student = new Object();
            student.name = name;      //第一个name指的是student对象定义的变量。第二个name指的是createStudent函数的参数。二者不一样
            student.sayHi = function () {
                console.log(this.name + "厉害了");
            }
            return student;
        }
```

打印结果：

20180125_1121.png

上方代码中，注意`student.name = name;`中这两个name是不同的。另外，注意this指的是student的this。

### new和this

**this：**

1、this只出现在函数中。

2、谁调用函数，this就指的是谁。

3、new People();   People中的this代指被创建的对象实例。


**new之后：**

（1）开辟内存空间，存储新创建的对象。new Object()

（2）**把this设置为当前对象**

（3）执行内部代码，设置对象属性和方法

（4）返回新创建的对象

因为this指的是new一个Object之后的对象实例。于是，下面这段代码：

```javascript
        // 创建一个函数
        function createStudent(name) {
            var student = new Object();
            student.name = name;      //第一个name指的是student对象定义的变量。第二个name指的是createStudent函数的参数。二者不一样
		}
```

可以改进为：

```javascript
        // 创建一个函数
        function Student(name) {
            this.name = name;       //this指的是构造函数中的对象实例
		}

```

注意上方代码中的注释。

于是，便得出了接下来的代码。

**利用构造函数自定义对象：**（改进版）

```javascript
        //利用构造函数自定义对象
        var stu1 = new Student("smyh");
        console.log(stu1);
        stu1.sayHi();

        var stu2 = new Student("vae");
        console.log(stu2);
        stu2.sayHi();


        // 创建一个构造函数
        function Student(name) {
            this.name = name;    //this指的是构造函数中的对象实例
            this.sayHi = function () {
                console.log(this.name + "厉害了");
            }
        }
```

打印结果：

20180125_1350.png



### 属性绑定

暂略。


### 对象字面量


**对象的字面量**就是一个{}。里面的属性和方法均是**键值对**。

例如：

```javascript
var o = {
            name: "生命壹号",
            age: 26,
            isBoy: true,
            sayHi: function() {
                console.log(this.name);
            }
        };

console.log(o);
```

控制台输出：

20180125_1834.png

**json的介绍：**

> 对象字面量和json比较像，这里我们对json做一个简单介绍。

JSON：JavaScript Object Notation（JavaScript对象表示形式）。

JSON和对象字面量的区别：JSON的属性必须用双引号引号引起来，对象字面量可以省略。

json举例：

```
      {
            "name" : "zs",
            "age" : 18,
            "sex" : true,
            "sayHi" : function() {
                console.log(this.name);
            }
        };
```

注：json里一般放常量、数组、对象等，但很少放function。

另外，对象和json没有长度，json.length的打印结果是undefined。于是乎，自然也就不能用for循环遍历（因为便利时需要获取长度length）。



## 类和对象

函数并没有创建对象的能力，类才有。


```javascript
class Customer {
    //属性
    public String Name;
    public String Age;
    public String Money;

    //方法
    public void Buy (String id,int num,double price) {
        self.money -= num * price; //记录订单
    }
}
```








```javascript

```


















```javascript

```















































