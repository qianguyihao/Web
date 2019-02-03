

## Web 存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，传统方式我们以document.cookie来进行存储的，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便，HTML5规范则提出解决方案。

### H5 中有两种存储的方式

1、**`window.sessionStorage` 会话存储：**

- 保存在内存中。

- **生命周期**为关闭浏览器窗口。也就是说，当窗口关闭时数据销毁。

- 在同一个窗口下数据可以共享。


2、**`window.localStorage` 本地存储**：

- 有可能保存在浏览器内存里，有可能在硬盘里。

- 永久生效，除非手动删除（比如清理垃圾的时候）。

- 可以多窗口共享。


### Web 存储的特性

（1）设置、读取方便。

（2）容量较大，sessionStorage 约5M、localStorage 约20M。

（3）只能存储字符串，可以将对象 JSON.stringify() 编码后存储。


### 常见 API

设置存储内容：

```javascript
	setItem(key, value);
```

PS：可以新增一个 item，也可以更新一个 item。

读取存储内容：

```javascript
	getItem(key);
```

根据键，删除存储内容：

```javascript
	removeItem(key);
```


清空所有存储内容：

```javascript
	clear();
```

根据索引值来获取存储内容：


```javascript
	key(n);
```


sessionStorage 的 API 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<input type="text"/>
<button>sesssionStorage存储</button>
<button>sesssionStorage获取</button>
<button>sesssionStorage更新</button>
<button>sesssionStorage删除</button>
<button>sesssionStorage清除</button>
<script>

    //在h5中提供两种web存储方式

    // sessionStorage  session（会话，会议） 5M  当窗口关闭是数据销毁  内存
    // localStorage    20M 永久生效 ，除非手动删除  清理垃圾  硬盘上

    var txt = document.querySelector('input');

    var btns = document.querySelectorAll('button');
    //        sessionStorage存储数据
    btns[0].onclick = function () {
        window.sessionStorage.setItem('userName', txt.value);
        window.sessionStorage.setItem('pwd', '123456');
        window.sessionStorage.setItem('age', 18);
    }

    //        sessionStorage获取数据
    btns[1].onclick = function () {
        txt.value = window.sessionStorage.getItem('userName');
    }

    //        sessionStorage更新数据
    btns[2].onclick = function () {
        window.sessionStorage.setItem('userName', txt.value);
    }

    //        sessionStorage删除数据
    btns[3].onclick = function () {
        window.sessionStorage.removeItem('userName');
    }

    //        sessionStorage清空数据
    btns[4].onclick = function () {
        window.sessionStorage.clear();
    }
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180224_2200.gif)

如上图所示，我们可以在 Storage 选项卡中查看 Session Storage 和Local Storage。

**localStorage 的 API 举例：**


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<input type="text"/>
<button>localStorage存储</button>
<button>localStorage获取</button>
<button>localStorage更新</button>
<button>localStorage删除</button>
<button>localStorage清除</button>

<script>

    /*
    *  localStorage
    *  数据存在硬盘上
    *  永久生效
    *  20M
    * */

    var txt = document.querySelector('input');
    var btns = document.querySelectorAll('button');

    //        localStorage存储数据
    btns[0].onclick = function () {
        window.localStorage.setItem('userName', txt.value);
    }

    //        localStorage存储数据
    btns[1].onclick = function () {
        txt.value = window.localStorage.getItem('userName');
    }

    //        localStorage删除数据
    btns[3].onclick = function () {
        window.localStorage.removeItem('userName');
    }

</script>
</body>
</html>
```


### 案例：记住用户名和密码

代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<label for="">
    用户名：<input type="text" class="userName"/>
</label>
<br/><br/>
<label for="">
    密 码：<input type="text" class="pwd"/>
</label>
<br/><br/>
<label for="">
    <input type="checkbox" class="check" id=""/>记住密码
</label>
<br/><br/>
<button>登录</button>

<script>
    var userName = document.querySelector('.userName');
    var pwd = document.querySelector('.pwd');
    var chk = document.querySelector('.check');
    var btn = document.querySelector('button');

    //        当点击登录的时候 如果勾选“记住密码”，就存储密码；否则就清除密码
    btn.onclick = function () {
        if (chk.checked) {
//                记住数据
            window.localStorage.setItem('userName', userName.value);
            window.localStorage.setItem('pwd', pwd.value);
        } else {
//                清除数据
            window.localStorage.removeItem('userName');
            window.localStorage.removeItem('pwd');
        }
    }
    //        下次登录时，如果记录的有数据，就直接填充
    window.onload = function () {
        userName.value = window.localStorage.getItem('userName');
        pwd.value = window.localStorage.getItem('pwd');

    }
</script>
</body>
</html>
```

## 网络状态

我们可以通过 `window.onLine` 来检测用户当前的网络状况，返回一个布尔值。另外：

- window.online：用户网络连接时被调用。

- window.offline：用户网络断开时被调用（拔掉网线或者禁用以太网）。

网络状态监听的代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    window.addEventListener('online', function () {
        alert('网络连接建立！');
    });

    window.addEventListener('offline', function () {
        alert('网络连接断开！');
    })
</script>
</body>
</html>
```


## 应用缓存

HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个 `cache manifest` 缓存清单文件。


### 优势

1、可配置需要缓存的资源；

2、网络无连接应用仍可用；

3、本地读取缓存资源，提升访问速度，增强用户体验；

4、减少请求，缓解服务器负担。





### `cache manifest` 缓存清单文件



缓存清单文件中列出了浏览器应缓存，以供离线访问的资源。推荐使用 `.appcache`作为后缀名，另外还要添加MIME类型。

**缓存清单文件里的内容怎样写：**

（1）顶行写CACHE MANIFEST。

（2）CACHE: 换行 指定我们需要缓存的静态资源，如.css、image、js等。

（3）NETWORK: 换行 指定需要在线访问的资源，可使用通配符（也就是：不需要缓存的、必须在网络下面才能访问的资源）。

（4）FALLBACK: 换行 当被缓存的文件找不到时的备用资源（当访问不到某个资源时，自动由另外一个资源替换）。

格式举例1：

![](http://img.smyhvae.com/20180224_2240.png)


格式举例2：

```bash
CACHE MANIFEST

#要缓存的文件
CACHE:
    images/img1.jpg
    images/img2.jpg


#指定必须联网才能访问的文件
NETWORK:
     images/img3.jpg
     images/img4.jpg


#当前页面无法访问是回退的页面
FALLBACK:
    404.html

```


**缓存清单文件怎么用：**

（1）例如我们创建一个名为 `demo.appcache`的文件。例如：

demo.appcache：

```bash
CACHE MANIFEST

# 注释以#开头
#下面是要缓存的文件
CACHE:
    http://img.smyhvae.com/2016040101.jpg
```


（2）在需要应用缓存在页面的根元素(html)里，添加属性manifest="demo.appcache"。路径要保证正确。例如：


```html
<!DOCTYPE html>
<html manifest="01.appcache">
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<img src="http://img.smyhvae.com/2016040101.jpg" alt=""/>
</body>
</html>
```



