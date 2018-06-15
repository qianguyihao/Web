


## vue-resource的介绍

`vue-resource`是Vue高度集成的第三方包。

官网链接：

- 文档（http相关）：<https://github.com/pagekit/vue-resource/blob/master/docs/http.md>

vue-resource 依赖于 Vue。所以，我们要按照先后顺序，导入vue.js和vue-resource.js文件。

**解释**：

`vue.js`文件向Windows对象暴露了`Vue`这个关键词；`vue-resource.js`向Vue身上挂载了`this.$http`这个属性。于是，我们可以直接写`this.$http.get`或者`this.$http.post`或者`this.$http.jsonp`来调用。

## vue-resource 发送Ajax请求

常见的数据请求类型包括：get、post、jsonp。下面我们分别讲一讲。


### get 请求

**格式举例**：

```javascript
    this.$http.get(url)
        .then(function (result) { // 当发起get请求之后，通过 .then 来设置成功的回调函数
            console.log(result.body); // response.body就是服务器返回的成功的数据
            var result = result.body;
        },
            function (err) {
                //err是异常数据
            });
```

获取到的`response.body`就是要获取的数据，但直接打印出来是 object，所以要记得转成string。

**举例**：获取数据

现规定，获取品牌数据的 api 接口说明如下：

![](http://img.smyhvae.com/20180422_2140.png)


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
    #app {
        width: 800px;
        margin: 20px auto;
    }

    #tb {
        width: 800px;
        border-collapse: collapse;
        margin: 20px auto;
    }

    #tb th {
        background-color: #0094ff;
        color: white;
        font-size: 16px;
        padding: 5px;
        text-align: center;
        border: 1px solid black;
    }

    #tb td {
        padding: 5px;
        text-align: center;
        border: 1px solid black;
    }
    </style>
    <script src="../vue.js"></script>
    <script src="../vue-resource121.js"></script>
</head>

<body>
    <div id="app">
        <input type="text" v-model="id">
        <input type="text" v-model="pname">
        <button>添加数据</button>

        <table id="tb">
            <tr>
                <th>编号</th>
                <th>名称</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in list">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.ctime}}</td>
                <td>
                <a href="javascript:void(0)">删除</a>
                </td>
            </tr>
        </table>
    </div>
</body>
<script>

 new Vue({
    el :'#app',
    data:{
        list:[]
    },
    // Vue对象实例创建成功以后就会自动调用这个方法
    created:function(){
        this.getlist();
    },
    methods:{
        getlist:function(){
            // 请求服务器的api获取到品牌的数据列表
            this.$http.get('http://vueapi.ittun.com/api/getprodlist')
            .then(function(response){
                // 1、处理服务器异常信息提示
                if(response.body.status != 0){
                    alert(response.body.message);
                    return;
                }

                // 2、处理正常的数据逻辑
               this.list =  response.body.message;  //直接将数据放到list数组当中，页面就会自动显示
               console.log(this.list);
            });
        }
    }
 });
</script>

</html>

```

上方代码中，我们用到了生命周期函数`created`，意思是：程序一加载，就马上在`created`这个函数里执行`getlist()`方法。


运行的结果如下：

![](http://img.smyhvae.com/20180422_2152.png)

如果我直接在浏览器中输入请求的url，获取的json数据如下：（可以看到，这种方式获取的是相同的数据）

![](http://img.smyhvae.com/20180422_2150.png)


### post请求

**格式举例**：

```javascript
    // 方法：$http.post(url, 传给服务器的请求体中的数据， {emulateJSON:true})
    // 通过 post 方法的第三个参数{ emulateJSON: true } ，来设置 提交的内容类型 为 普通表单数据格式
    this.$http.post(url, { name: '奔驰' }, { emulateJSON: true })
        .then(function (response) {
            alert(response.body.message);
        },
            function (error) {

            });
```

上方代码中，post()方法中有三个参数，其中第三个参数是固定值，照着写就可以了。


**代码举例**：（添加数据）

现规定，添加品牌数据的 api 接口说明如下：

![](http://img.smyhvae.com/20180422_1720.png)


代码如下：（在上一段代码的基础之上，添加代码）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #app {
            width: 800px;
            margin: 20px auto;
        }

        #tb {
            width: 800px;
            border-collapse: collapse;
            margin: 20px auto;
        }

        #tb th {
            background-color: #0094ff;
            color: white;
            font-size: 16px;
            padding: 5px;
            text-align: center;
            border: 1px solid black;
        }

        #tb td {
            padding: 5px;
            text-align: center;
            border: 1px solid black;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-resource121.js"></script>
</head>

<body>
    <div id="app">
        <input type="text" v-model="pname">
        <button @click="adddata">添加数据</button>

        <table id="tb">
            <tr>
                <th>编号</th>
                <th>名称</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in list">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.ctime}}</td>
                <td>
                    <a href="javascript:void(0)">删除</a>
                </td>
            </tr>
        </table>
    </div>
</body>
<script>

    new Vue({
        el: '#app',
        data: {
            pname: '', //这个 pname 是我在输入框里添加的数据。我们要把这个传给服务器
            list: []
        },
        // Vue对象实例创建成功以后就会自动调用这个方法
        created: function () {
            this.getlist();
        },
        methods: {
            //ajax请求：添加数据
            adddata: function () {
                // 1、获取用户填写的文本框的值只需要通过this.pname即可
                // 2、调用ajax的post方法将数据上传到服务器
                var url = 'http://vueapi.ittun.com/api/addproduct';
                var postData = { name: this.pname };  //【重要】键`name`是json中约定好的字段。我们把这个字段传给服务器
                var options = { emulateJSON: true };
                this.$http.post(url, postData, options).then(function (response) {
                    if (response.body.status != 0) {
                        alert(response.body.message);
                        return;
                    }

                    this.pname = '';

                    // 3、添加完成后，只需要手动再调用一次getlist（将列表数据重新加载一次），即可刷新页面上的数据
                    this.getlist();

                });
            },

            //ajax请求：获取数据
            getlist: function () {
                this.$http.get('http://vueapi.ittun.com/api/getprodlist')
                    .then(function (response) {
                        // 1、处理服务器异常信息提示
                        if (response.body.status != 0) {
                            alert(response.body.message);
                            return;
                        }

                        // 2、处理正常的数据逻辑
                        this.list = response.body.message;
                        console.log(this.list);
                    });
            }
        }
    });
</script>

</html>
```


**代码举例**：（删除数据）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #app {
            width: 800px;
            margin: 20px auto;
        }

        #tb {
            width: 800px;
            border-collapse: collapse;
            margin: 20px auto;
        }

        #tb th {
            background-color: #0094ff;
            color: white;
            font-size: 16px;
            padding: 5px;
            text-align: center;
            border: 1px solid black;
        }

        #tb td {
            padding: 5px;
            text-align: center;
            border: 1px solid black;
        }
    </style>
    <script src="vue.js"></script>
    <script src="vue-resource121.js"></script>
</head>

<body>
    <div id="app">
        <input type="text" v-model="pname">
        <button @click="adddata">添加数据</button>

        <table id="tb">
            <tr>
                <th>编号</th>
                <th>名称</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in list">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.ctime}}</td>
                <td>
                    <!-- 具体要删除哪个item，不能写死。所以要根据id来删 -->
                    <a href="javascript:void(0)" @click="deldata(item.id)">删除</a>
                </td>
            </tr>
        </table>
    </div>
</body>
<script>

    new Vue({
        el: '#app',
        data: {
            pname: '', //这个 pname 是我在输入框里添加的数据。我们要把这个传给服务器
            list: []
        },
        // Vue对象实例创建成功以后就会自动调用这个方法
        created: function () {
            this.getlist();
        },
        methods: {
            //ajax请求：添加数据
            adddata: function () {
                // 1、获取用户填写的文本框的值只需要通过this.pname即可
                // 2、调用ajax的post方法将数据上传到服务器
                var url = 'http://vueapi.ittun.com/api/addproduct';
                var postData = { name: this.pname };  //【重要】键`name`是json中约定好的字段。我们把这个字段传给服务器
                var options = { emulateJSON: true };
                this.$http.post(url, postData, options).then(function (response) {
                    if (response.body.status != 0) {
                        alert(response.body.message);
                        return;
                    }

                    this.pname = '';

                    // 3、直接将列表数据重新加载一次，即可刷新页面上的数据
                    this.getlist();

                });
            },

            //ajax请求：获取数据
            getlist: function () {
                this.$http.get('http://vueapi.ittun.com/api/getprodlist')
                    .then(function (response) {
                        // 1、处理服务器异常信息提示
                        if (response.body.status != 0) {
                            alert(response.body.message);
                            return;
                        }

                        // 2、处理正常的数据逻辑
                        this.list = response.body.message;
                        console.log(this.list);
                    });
            },

            // ajax请求：删除数据
            deldata: function (id) {
                this.$http.get('http://vueapi.ittun.com/api/delproduct/' + id)
                    .then(function (response) {
                        if (response.body.status != 0) {
                            alert(response.body.message);
                            return;
                        }

                        // 刷新列表
                        this.getlist();
                    });
            }
        }
    });
</script>

</html>

```


### jsonp

![](http://img.smyhvae.com/20180420_2250.png)


**格式举例**：

```javascript
    // 利用vue-resource中的jsonp方法实现跨域请求数据，这里要注意的是：
    // url后面不需要跟callback=fn这个参数了，jsonp方法会自动加上
    this.$http.jsonp('http://vuecms.ittun.com/api/getlunbo?id=1')
        .then(function (response) {
            console.log(JSON.stringify(response.body));
        }, function (err) {
            //err是异常数据
        });
```

请求结果：

![](http://img.smyhvae.com/20180420_2256.png)


## JSONP的实现原理

由于浏览器的安全性限制，默认不允许Ajax发起跨域（协议不同、域名不同、端口号不同）的请求。浏览器认为这种访问不安全。

**JSONP的实现原理**：通过动态创建script标签的形式，用script标签的src属性，代表api接口的url，因为script标签不存在跨域限制，这种数据获取方式，称作JSONP（注意：根据JSONP的实现原理，知晓，JSONP只支持Get请求）。


 具体实现过程：


- 先在客户端定义一个回调方法，预定义对数据的操作

- 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的api接口；

- 服务器api接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；

- 客户端拿到服务器返回的字符串之后，当作Script脚本去解析执行，这样就能够拿到JSONP的数据了


## axios

除了 vue-resource 之外，还可以使用 `axios` 的第三方包实现实现数据的请求。


## 通过Vue全局配置api接口的url地址

api接口的url地址包括：绝对路径+相对路径。

我们在做Ajax请求的时候，所填写的url建议填**相对路径**，然后把**绝对路径**放在全局的位置。

Vue就提供了这个功能。举例如下：

```html

  <script>
    // 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
    Vue.http.options.root = 'http://smyhvae/';
    // 全局启用 emulateJSON 选项
    Vue.http.options.emulateJSON = true;

    var vm = new Vue({
      el: '#app',
      data: {
        name: '',
        list: [ // 存放所有品牌列表的数组
        ]
      },
      created() { // 当 vm 实例 的 data 和 methods 初始化完毕后，vm实例会自动执行created 这个生命周期函数
        this.getAllList()
      },
      methods: {
        getAllList() { // 获取所有的品牌列表
          // 分析：
          // 1. 由于已经导入了 Vue-resource这个包，所以 ，可以直接通过  this.$http 来发起数据请求
          // 2. 根据接口API文档，知道，获取列表的时候，应该发起一个 get 请求
          // 3. this.$http.get('url').then(function(result){})
          // 4. 当通过 then 指定回调函数之后，在回调函数中，可以拿到数据服务器返回的 result
          // 5. 先判断 result.status 是否等于0，如果等于0，就成功了，可以 把 result.message 赋值给 this.list ; 如果不等于0，可以弹框提醒，获取数据失败！

          this.$http.get('api/getprodlist').then(result => {
            // 注意： 通过 $http 获取到的数据，都在 result.body 中放着
            var result = result.body
            if (result.status === 0) {
              // 成功了
              this.list = result.message
            } else {
              // 失败了
              alert('获取数据失败！')
            }
          })
        }
      }
    });
  </script>

```

如上方代码所示，第一步是在全局的位置写**绝对路径**：

```javascript
    Vue.http.options.root = 'http://smyhvae/';
```

第二步是在Ajax请求的url中写**相对路径**：（注意，前面不要带`/`）

```javascript
this.$http.get('api/getprodlist')
```



