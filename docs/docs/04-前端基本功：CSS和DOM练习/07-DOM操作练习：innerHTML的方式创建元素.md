

## 动态创建DOM元素的三种方式

- `document.write();` 不常用，因为容易覆盖原来的页面。

- `innerHTML = ();` 用的比较多。绑定属性和内容比较方便。(节点套节点)

- `document.createElement();` 用得也比较多，指定数量的时候一般用它。


**1、方式一：**

```javascript
document.write();
```

这种方式的好处是：比较随意，想创建就创建，可以直接在`write`里写属性都行。但是会把原来的标签给覆盖掉。所以不建议。


举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
    smyhvae
</ul>

<script>
    //第一种创建方式：document.write();
    document.write("<li class='hehe'>我是document.write创建的</li>");
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180129_1908.png)


**方式二：**innerHTML


举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
    smyhvae
</ul>

<script>
    var ul = document.getElementsByTagName("ul")[0];

    //第二种：直接利用元素的innerHTNL方法。（innerText方法不识别标签）
    ul.innerHTML += "<li id='li1'>我是innerHTML创建的</li>"  //注意，是用符号“+=”，不是“=”
</script>
</body>
</html>
```

注意，上方代码中，是用是用符号`+=`，不是`=`，前者是在原来的基础之上增加，后者是替换。


效果如下：

![](http://img.smyhvae.com/20180129_2017.png)



**3、方式三：**利用DOM的api创建

利用DOM的api创建节点，有很多种：

比如：

- createElement()

- appendChild()

- removeChild()

- insertBefore()

- replaceChild()


这个我们在上一篇文章的`DOM节点的操作`这一段中已经讲到了。

```html

```


## innerHTML举例：在线用户的获取

现在要做下面这样一个页面：


![](http://img.smyhvae.com/20180129_2151.png)


上图的意思是，每次刷新页面，都从服务器获取最新的在线人数的名单（我们先用本地的数组来模拟服务器上的数据）。

它的结构是：div > ul > li。每一个li就是一个头像。

如果在本地直接添加几个头像的话，代码是：

```html
    //往ul中添加li元素以及li元素中的内容
       ul.innerHTML += '<li>'+
                       '<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="生命壹号"></a>'+
                       '<p><a href="#" title="生命壹号" target="_blank">生命壹号</a></p>'+
                   '</li>';
       ul.innerHTML += '<li>'+
               '<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="生命壹号"></a>'+
               '<p><a href="#" title="生命壹号" target="_blank">生命壹号</a></p>'+
               '</li>';
       ul.innerHTML += '<li>'+
               '<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="生命壹号"></a>'+
               '<p><a href="#" title="生命壹号" target="_blank">生命壹号</a></p>'+
               '</li>';

```

上方代码有两点比较重要：

- 我们是通过`ul.innerHTML += 元素节点`的方式来不停地往ul里面加内容，比`createElement`的方式要方便。

- 元素的内容本身有双引号`"`，所以我们要用单引号`'`进行字符串的连接。

但是，当我们从服务器获取在线用户的时候，头像和用户的昵称是动态变化的，所以每个字符串要用变量进行表示：

```html
        ul.innerHTML += '<li>'+
                            '<a href="#" target="blank"><img src="'+users[i].icon+'" width="48" height="48" alt="'+users[i].name+'"></a>'+
                            '<p><a href="#" title="'+users[i].name+'" target="_blank">'+users[i].name+'</a></p>'+
                        '</li>';

```

这里我们暂时用本地的数组来代表服务器的数据，最终的完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            word-wrap: break-word;
        }

        .wp {
            width: 730px;
            margin: 0px auto;
        }

        .mtn {
            margin-top: 5px !important;
        }

        #ct .frame {
            margin: 0;
            border: none;
        }

        .xfs_2 .frame-title, .xfs_2 .frametitle, .xfs_2 .tab-title {
            background-color: #A90000;
            background-position: 0 -99px;
        }

        .xfs .frame-title, .xfs .frametitle, .xfs .tab-title, .xfs .frame-title a, .xfs .frametitle a, .xfs .tab-title a {
            color: #FFF !important;
        }

        .xfs .frame-title, .xfs .frametitle, .xfs .tab-title {
            border: none;
            background: transparent url(images/mu.png) repeat-x 0 95;
        }

        .title {
            padding: 0 10px;
            height: 32px;
            font-size: 14px;
            font-weight: 700;
            line-height: 32px;
            overflow: hidden;
        }

        .block {
            margin: 10px 10px 0;
        }

        ul, menu, dir {
            display: block;
            list-style: none;
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            -webkit-padding-start: 25px;
        }

        .mls li {
            padding: 0 0 5px;
            width: 66px;
            height: 85px;
        }

        .ml li {
            float: left;
            text-align: center;
            overflow: hidden;
        }

        a {
            color: #333;
            text-decoration: none;
            font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
        }

        .mls p {
            margin-top: 5px;
        }

        .ml p, .ml span {
            display: block;
            width: 100%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .mls img {
            width: 48px;
            height: 48px;
        }

        .ml img {
            display: block;
            margin: 0 auto;
        }

        a img {
            border: none;
        }
    </style>
</head>
<body>

<div class="wp mtn">
    <div id="diy3" class="area">
        <div id="frameipq7f2" class="xfs xfs_2 frame move-span cl frame-1">
            <div
                    class="title frame-title"><span class="titletext">当前在线用户</span></div>
            <div id="frameipq7f2_left"
                 class="column frame-1-c">
                <div
                        id="frameipq7f2_left_temp" class="move-span temp"></div>
                <div id="portal_block_695"
                     class="block move-span">
                    <div
                            id="portal_block_695_content" class="dxb_bc">
                        <div class="module cl ml mls" id="users">
                            <ul>
                                <!--<li>-->
                                <!--<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="生命壹号"></a>-->
                                <!--<p><a href="#" title="生命壹号" target="_blank">生命壹号</a></p>-->
                                <!--</li>-->

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    //模拟从服务器获取数据
    var users = [
        {"name": "smyhvae", "icon": "images/noavatar_small.gif"},
        {"name": "smyh", "icon": "images/noavatar_small.gif"},
        {"name": "smyh02", "icon": "images/75_avatar_small.jpg"},
        {"name": "vae", "icon": "images/89_avatar_small.jpg"},
        {"name": "today", "icon": "images/noavatar_small.gif"},
        {"name": "enen", "icon": "images/noavatar_small.gif"},
        {"name": "oyey", "icon": "images/noavatar_small.gif"},
        {"name": "dongxiaojie", "icon": "images/noavatar_small.gif"},
        {"name": "qishi", "icon": "images/noavatar_small.gif"},
        {"name": "qqtang", "icon": "images/noavatar_small.gif"},
        {"name": "wawawa", "icon": "images/noavatar_small.gif"},
        {"name": "haha", "icon": "images/noavatar_small.gif"},
        {"name": "robot", "icon": "images/noavatar_small.gif"},
        {"name": "heheda", "icon": "images/noavatar_small.gif"},
        {"name": "smyhvae1", "icon": "images/noavatar_small.gif"},
        {"name": "lihaile", "icon": "images/noavatar_small.gif"}
    ];

    //需求：页面显示所有的在线用户。
    //思路：模拟服务器获取数据（数组中装着json）.获取ul，把ul的innerHTML属性获取到，然后不间断的往innerHTML属性中赋值。
    //赋值要求：li标签的内容。
    //步骤：(获取元素)
    var div = document.getElementById("users");
    var ul = div.firstElementChild || div.firstChild;
    //        var ul = div.children[0];

    //1.模拟服务器获取数据（定义数组），通过循环添加元素（定义for）
    //数组中有多少元素，我们就创建多少个li标签
    for (var i = 0; i < users.length; i++) {
        //2.模拟实验的操作方式。
        ul.innerHTML += '<li>' +
            '<a href="#" target="blank"><img src="' + users[i].icon + '" width="48" height="48" alt="' + users[i].name + '"></a>' +
            '<p><a href="#" title="' + users[i].name + '" target="_blank">' + users[i].name + '</a></p>' +
            '</li>';
    }
</script>
</body>
</html>
```

工程文件：

- [2018-02-01-获取在线用户列表demo.rar](http://download.csdn.net/download/smyhvae/10237611)



## innerHTML举例2：模拟百度搜索的下方提示

要求实现的效果如下：

![](http://img.smyhvae.com/20180201_2030.gif)

在这之前，我们先实现这样一个例子：**判断字符串以某个字符串为开头**。

**判断字符串是否以某个字符串为开头：**


```javascript
    var str = "smyhvae";

    //判断str是否以sm为开头？（给定字符串，然后他的索引值为0）
    var num = str.indexOf("sm");
    //只有返回值为0，那么字符串才是以参数为开头
    //如果在任何位置都查询不到参数，则返回值为-1；

```


代码解释：我们可以通过`indexOf("参数")`来实现。如果返回的索引值为0，说明字符串就是以这个参数开头的。

为了实现上方gif图的搜索功能，完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .box {
            width: 500px;
            margin: 200px auto;
        }

        ul {
            width: 392px;
            padding: 5px;
            list-style: none;
            border: 1px solid red;
        }

        li:hover {
            background-color: red;
        }

        input {
            width: 400px;
        }

        button {
            width: 70px;
        }
    </style>
</head>
<body>
<div class="box">
    <input type="text"/>
    <button>搜索</button>
    <!--<ul>-->
    <!--<li>aaaa</li>-->
    <!--<li>bbb</li>-->
    <!--<li>ccc</li>-->
    <!--</ul>-->
</div>

<script>
    //需求：输入内容(输入事件，键盘弹起事件)，模拟服务器获取内容，创建ul，并在其中显示。

    //1.获取事件源
    //模拟服务器获取内容
    var arr = ["a", "ab", "abc", "abcd", "aa", "aaa"];
    var box = document.getElementsByTagName("div")[0];
    var inp = box.children[0];
    //        var inp = document.getElementsByTagName("input")[0];

    //2.绑定事件(输入内容(输入事件，键盘弹起事件))
    inp.onkeyup = function () {
        //创建一个字符串，里面添加满了li和对应的内容。
        var newArr = [];
        //遍历老数组arr，然后判断每一项，只要是以input的内容为开头的，就添加到新数组newArr中，然后转成字符串。
        for (var i = 0; i < arr.length; i++) {

            //获取输入内容input标签的value属性值。
            if (arr[i].indexOf(this.value) === 0) {  //【重要】判断老数组arr中的每一项，是否以input的内容为开头
                newArr.push("<li>" + arr[i] + "</li>");
            }
        }
        var str = newArr.join("");

        //Bug1：每次创建新的ul之前，如果有就的ul，就先删除旧的ul
        if (box.getElementsByTagName("ul")[0]) {
            //只要存在，那么就是object，object类型的数据，只要不是null,对应的boolean值都是true；
            box.removeChild(box.children[2]);
        }

        //Bug2.如果input的内容为空，那么就不能再生成ul了。
        //如果input为空，那就切断函数

        //Bug3.如果arr数组中找不到以input为开头的元素。那就切断函数
        //newArr的长度为0，就能证明以input内容为开头的元素，在arr中不存在
        if (this.value.length === 0 || newArr.length === 0) {  //fix bug2、fix bug3
            //切断函数，直接return
            return;
        }

        //3.书写事件驱动程序
        var ul = document.createElement("ul");
        //把创建好的内容添加到ul中。
        ul.innerHTML = str;
        box.appendChild(ul);
    }
</script>
</body>
</html>
```



## 动态操作表格


方式1：

```
  createElement()
```

方式2：

- rows                          (只读，table和textarea能用)

- insertRow()              (只有table能调用)

- deleteRow()           (只有table能调用)

- cells             (只读，table和textarea能用)

- insertCell()               (只有tr能调用)

- deleteCell()              (只有tr能调用)


PS：括号里可以带index。用的不多。





















