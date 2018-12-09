
## DOM操作练习

### 举例1：点击按钮时，显示和隐藏盒子。

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        button {
            margin: 10px;
        }

        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .show {
            display: block;
        }

        .hide {
            display: none;
        }
    </style>

</head>
<body>
<button id="btn">隐藏</button>
<div>
    生命壹号
</div>

<script>
    //需求：点击button,隐藏盒子。改变文字，在点击按钮，显示出来。
    //步骤：
    //1.获取事件源和相关元素
    //2.绑定事件
    //3.书写事件驱动程序

    //1.获取事件源和相关元素
    var btn = document.getElementById("btn");
    var div1 = document.getElementsByTagName("div")[0];
    //2.绑定事件
    btn.onclick = function () {
        //3.书写事件驱动程序
        //判断btn的innerHTML属性值，如果为隐藏就隐藏盒子，并修改按钮内容为显示。
        //反之，则显示，并修改按钮内容为隐藏
        if (this.innerHTML === "隐藏") {
            div1.className = "hide";
            //修改按钮上的文字（innerHTML）
            btn.innerHTML = "显示";
        } else {
            div1.className = "show";
            //修改按钮上的文字（innerHTML）
            btn.innerHTML = "隐藏";
        }
    }

</script>

</body>
</html>

```

代码解释：

当盒子是显示状态时，就设置为隐藏；当盒子是隐藏状态时，就设置为显示。注意这里的逻辑判断。

另外，这里用到了`innerHTHL`属性，它可以修改按钮上显示的文字。

代码最终显示的效果如下：

20180127_1518.gif

### 举例2：美女相册

这里推荐一个网站：

- 占位图片生成的在线网站：<https://placeholder.com/>

好处是：素材做出来之前，先留出空位，方便以后换图。比如<http://via.placeholder.com/400x300>这个链接可以生成400*300的占位图片。

需求：

- （1）点击小图片，改变下面的大图片的src属性值，让其赋值为a链接中的href属性值。
- （2）让p标签的innnerHTML属性值，变成a标签的title属性值。


为了实现美女相册，代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        body {
            font-family: "Helvetica", "Arial", serif;
            color: #333;
            margin: 1em 10%;
        }

        h1 {
            color: #333;
            background-color: transparent;
        }

        a {
            color: #c60;
            background-color: transparent;
            font-weight: bold;
            text-decoration: none;
        }

        ul {
            padding: 0;
        }

        li {
            float: left;
            padding: 1em;
            list-style: none;
        }

        #imagegallery {

            list-style: none;
        }

        #imagegallery li {
            margin: 0px 20px 20px 0px;
            padding: 0px;
            display: inline;
        }

        #imagegallery li a img {
            border: 0;
        }
    </style>

</head>
<body>
<h2>
    美女画廊
</h2>
<a href="#">注册</a>
<ul id="imagegallery">
    <li>
        <a href="image/1.jpg" title="美女A">
            <img src="image/1-small.jpg" width="100" alt="美女1"/>
        </a>
    </li>
    <li>
        <a href="image/2.jpg" title="美女B">
            <img src="image/2-small.jpg" width="100" alt="美女2"/>
        </a>
    </li>
    <li>
        <a href="image/3.jpg" title="美女C">
            <img src="image/3-small.jpg" width="100" alt="美女3"/>
        </a>
    </li>
    <li>
        <a href="image/4.jpg" title="美女D">
            <img src="image/4-small.jpg" width="100" alt="美女4"/>
        </a>
    </li>
</ul>


<div style="clear:both"></div>

<img id="image" src="image/placeholder.png" width="450px"/>

<p id="des">选择一个图片</p>

<script>
    //需求：
    //（1）点击小图片，改变下面的大图片的src属性值，让其赋值为a链接中的href属性值。
    //（2）让p标签的innnerHTML属性值，变成a标签的title属性值。

    //1.获取事件源和相关元素
    //利用元素获取其下面的标签。
    var ul = document.getElementById("imagegallery");
    var aArr = ul.getElementsByTagName("a");     //获取ul中的超链接<a>

    //    console.log(aArr[0]);
    var img = document.getElementById("image");
    var des = document.getElementById("des");
    //2.绑定事件
    //以前是一个一个绑定，但是现在是一个数组。我们用for循环绑定
    for (var i = 0; i < aArr.length; i++) {
        aArr[i].onclick = function () {
            //3.【核心代码】书写事件驱动程序：修改属性值
            img.src = this.href;  //this指的是函数调用者，和i并无关系，所以不会出错。
//            img.src = aArr[i].href;   注意，上面这一行代码不要写成这样
            des.innerHTML = this.title;
            return false;    //return false表示：阻止继续执行下面的代码。
        }
    }

</script>
</body>
</html>
```

代码解释：

（1）获取事件源：我们通过`ul.getElementsByTagName("a")`来获取ul里面的a元素。

（2）绑定事件：因为要绑定一个数组，所以这里用for循环来绑定

（3）【重要】书写事件驱动程序：这里是用`img.src = this.href`，而不是用`img.src = aArr[i].href`。因为this指的是函数的调用者。如果写成后者，等i变成了4，就会一直是4。显然不能达到效果。

（4）代码的最后一行：`return false`表示：阻止继续执行下面的代码。

实现的效果如下：

20180127_1630.gif

工程文件：

- [2018-01-27-美女相册demo.rar](http://download.csdn.net/download/smyhvae/10227161)

### 举例3：鼠标悬停时，显示二维码大图

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .code {
            width: 50px;
            height: 50px;
        }

        .code a {
            display: block;
            width: 50px;
            height: 50px;
            background: url(http://img.smyhvae.com/20180127_QRcode_small.png) no-repeat -159px -51px;
            position: relative;

        }

        .code-big {
            position: absolute;
            top: 10px;
            left: 80px;
        }

        .hide {
            display: none;
        }

        .show {
            display: block;
        }


    </style>

    <script>
        window.onload = function () {
            //需求：鼠标放到a链接上，显示二维码（添加show类名，去掉hide类名）
            //      鼠标移开a链接，隐藏二维码（添加hide类名，去掉show类名）


            //1.获取事件源和相关元素
            var a = document.getElementsByTagName("a")[0];
            var div = document.getElementsByClassName("code-big")[0];
            //2.绑定事件
            a.onmouseover = fn1;   //鼠标悬停时
            a.onmouseout = fn2;     //鼠标离开时

            //定义方法
            function fn1() {
                //3.书写事件驱动程序
                div.className = "code-big show";
                //div.className = div.className.replace("hide", "show");

            }

            function fn2() {
                div.className = "code-big hide";
                //了解,字符串操作，把字符串中的hide替换成show。
                // div.className = div.className.replace("show","hide");
            }
        }
    </script>
</head>
<body>

<div class="code">
    <a href="#"></a>
    <img src="http://img.smyhvae.com/2016040102.jpg" alt="" class="code-big hide"/>
</div>

</body>
</html>

```


实现效果：

20180127_1800.gif


## 表单元素的属性

表单元素的属性包括：type、value、checked、selected、disabled等。


### 举例1：禁用文本框/解禁文本框


```html
<body>

账号: <input type="text" value="生命壹号..."/><button>禁用</button><button>解禁</button><br><br>
密码: <input type="password" value="aaabbbccc"/>

<script>

    var inp = document.getElementsByTagName("input")[0];
    var btn1 = document.getElementsByTagName("button")[0];
    var btn2 = document.getElementsByTagName("button")[1];

    btn1.onclick = function () {
        inp.disabled = "no";   //禁用文本框。属性值里随便写什么字符串都行，但不能为空。
    }
    btn2.onclick = function () {
        inp.disabled = false;   //解禁文本框。让disabled属性消失即可。
//            inp.removeAttribute("disabled");
    }
</script>
</body>

```

当文本框被禁用之后，文本框只读，不能编辑，光标点不进去。


上方代码可以看到，**禁用文本框**的代码是：

```javascript
	inp.disabled = "no";   //让disabled属性出现，即可禁用
```

我们的目的时让`disabled`这个属性出现，即可禁用。所以，属性值里可以写数字，可以写任意一个字符串，但不能写0，不能写false，不能为空。一般我们写no。



**解禁文本框**的代码是：


```javascript
	inp.disabled = false;      // 方法1：让disabled属性消失，即可解禁。
	inp.removeAttribute("disabled");  //方法2：推荐

```


我们的目的是删除`disabled`属性，即可解禁。属性值可以是false，可以是0。但我们一般采用方式2进行解禁。

实现效果：





### 举例2：文本框获取焦点/失去焦点

细心的读者会发现，京东和淘宝的搜索框，获取焦点时，提示文字的体验是不同的。

京东：

20180127_2000.gif

淘宝：

20180127_2005.gif

其实，**淘宝的提示文字，是用一个绝对定位的单独的标签来做的**。

京东是判断输入框是否获取焦点；淘宝是判断输入框内是否有用户输入的文字。


我们现在来实现一下。代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        input {
            width: 300px;
            height: 36px;
            padding-left: 5px;
            color: #ccc;
        }

        label {
            position: absolute;
            top: 82px;
            left: 56px;
            font-size: 12px;
            color: #ccc;
            cursor: text;
        }

        .hide {
            display: none;
        }

        .show {
            display: block;
        }
    </style>
</head>
<body>
京东: <input id="inp1" type="text" value="微单相机"/><br><br>
淘宝: <label for="inp2">电动牙刷</label><input id="inp2" type="text"/><br><br>
placeholder: <input type="text" placeholder="我是placeholder"/>

<script>
    //需求：京东的input按钮获取焦点后，立刻删除内容。失去后光标显示文字。

    var inp1 = document.getElementById("inp1");

    inp1.onfocus = function () {
        //判断，如果input里面的内容是“微单相机”，那么把值赋值为“”；
        if (this.value === "微单相机") {
            inp1.value = "";
            inp1.style.color = "#000";

        }
    }
    //失去焦点事件
    inp1.onblur = function () {
        //判断：如果input内容为空，那么把内容赋值为微单相机。
        if (this.value === "") {
            inp1.value = "微单相机";
            inp1.style.color = "#ccc";

        }
    }


    //需求：在input中输入文字，label标签隐藏；当里面的文字变成空字符串，label显示。

    var inp2 = document.getElementById("inp2");
    var lab = document.getElementsByTagName("label")[0];

    //2.绑定事件(输入文字、和删除文字时，都会触动这个事件)
    inp2.oninput = function () {
        //判断input中的值是否为空，如果为空，那么label显示，否则隐藏。
        if (this.value === "") {
            lab.className = "show";
        } else {
            lab.className = "hide";
        }
    }
</script>
</body>
</html>
```


实现效果如下：

20180127_2010.gif

如上方所示，我们还可以用placeholder来做，但是IE678并不支持，所以不建议使用。


### 举例3：用户注册信息错误时，输入框失去焦点后，高亮显示。

代码实现：



```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .wrong {
            border: 2px solid red;
        }
        .right {
            border: 2px solid #91B81D;
        }
    </style>
</head>
<body>

账号：<input type="text" onblur="fn(this)"/><br><br>
密码：<input type="password" onblur="fn(this)"/>

<script>
    //需求：失去焦点的时候判断input按钮中的值，如果账号或密码在6-12个字符之间通过，否则报错。

    function fn(aaa){
        //html中的input标签行内调用function的时候,是先通过window调用的function，所以打印this等于打印window
//            console.log(this)
        //只有传递的this才指的是标签本身。
//            console.log(aaa)
//            console.log(this.value)
        if(aaa.value.length < 6 || aaa.value.length>12){
            aaa.className = "wrong";
        }else{
            aaa.className = "right";
        }
    }
</script>
</body>
</html>
```

代码解释：这次我们是在标签内调用function的，此时是先通过window调用的function。所以行内调用的时候要带this。


实现效果：

20180127_2035.gif


### 举例4：全选和反选


对应的代码如下：


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

        .my-table {
            width: 300px;
            margin: 100px auto 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
            width: 300px;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }

        td {
            font: 14px "微软雅黑";
        }

        tbody tr {
            background-color: #f0f0f0;
        }

        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>

    <script>

        window.onload = function () {
            //需求1：点击上面的的input，下面全选或者反选。
            //思路：获取了上面的input按钮，只需要判断，checked属性是true还是false，如果是true，下面的全部变成true；false同理。

            var topInp = document.getElementById("title");

            var tbody = document.getElementById("content");
            var botInpArr = tbody.getElementsByTagName("input");

            //绑定事件
            topInp.onclick = function () {
                //费劲版
//                for(var i=0;i<botInpArr.length;i++){
//                    if(topInp.checked === true){
//                        botInpArr[i].checked = true;
//                    }else{
//                        botInpArr[i].checked = false;
//                    }
//                }

                //优化版（被点击的input按钮的checked属性值，应该直接作为下面的所有的input按钮的checked属性值）
                for(var i=0;i<botInpArr.length;i++){
                    botInpArr[i].checked = this.checked;
                }
            }

            //需求2：点击下面的的input，如果下面的全部选定了，上面的全选，否则相反。
            //思路：为下面的每一个input绑定事件，每点击一次都判断所有的按钮
            // checked属性值是否全部都是true，如果有一个是false，
            // 那么上面的input的checked属性也是false;都是true，topInp的checked就是true；


            for(var i=0;i<botInpArr.length;i++){
                botInpArr[i].onclick = function () {  //每一个input都要绑定事件
                    //开闭原则（用开关来控制）
                    var bool = true;
                    //检测每一个input的checked属性值。
                    for(var j=0;j<botInpArr.length;j++){
                        if(botInpArr[j].checked === false){
                            bool = false;
                        }
                    }
                    topInp.checked = bool;
                }
            }
        }

    </script>

</head>
<body>
<div class="my-table">
    <table>
        <thead>
        <tr>
            <th>
                <input type="checkbox" id="title" />
            </th>
            <th>菜名</th>
            <th>饭店</th>
        </tr>
        </thead>
        <tbody id="content">
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品1</td>
            <td>木屋烧烤</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品2</td>
            <td>蒸菜馆</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品3</td>
            <td>海底捞火锅</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品4</td>
            <td>面点王</td>
        </tr>
        </tbody>
    </table>
</div>

</body>
</html>
```

注意代码中的注释，需求2是比较难的地方，这里用到了两次for循环。第一次for循环是因为，要给每个input都要进行绑定事件。

实现的效果如下：

20180127_2320.gif




```javascript

```
