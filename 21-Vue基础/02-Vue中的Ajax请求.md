

## vue-resource

官网链接：

- http相关：<https://github.com/pagekit/vue-resource/blob/master/docs/http.md>

按照先后顺序，导入vue.js和vue-resource.js文件。

### get 请求

**格式**：

```javascript
    this.$http.get(url)
        .then(function (response) {
            var data = response.body;  //response.body是要获取的数据
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

如果我直接在浏览器中输入请求的url，获取的json数据如下：（这种方式获取的是相同的数据）

![](http://img.smyhvae.com/20180422_2150.png)


### post请求

**格式**：

```javascript
    // 调用 $http.post(url, 传给服务器的请求体中的数据， {emulateJSON:true})
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




