
### 方法的注释

方法写完之后（注意，一定要先写完整），我们在方法的前面输入`/**`，然后回车，会发现，注释的格式会自动补齐。

比如：


```javascript
/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
```

### 断点调试

（1）先让程序运行一遍。

（2）f12，弹出代码调试工具

（3）打断点：

![](http://img.smyhvae.com/20180124_2035.png)

然后刷新页面。

（4）一步步调试，每点击一次，执行一步：

![](http://img.smyhvae.com/20180124_2036.png)

（5）监视变量：

当然，也可以添加变量或者表达式到监视窗口。操作如下：

![](http://img.smyhvae.com/20180124_2037.png)

上图中，选择变量或表达式，然后右键add to watch.

然后监视窗口：

![](http://img.smyhvae.com/20180124_2038.png)


### 2019-05-20-给数组、对象赋值

**数组赋值的正确写法**：

```javascript
this.todayList.splice(0, 0, ...dataList);
```

**对象赋值的正确写法**：

```javascript
Object.assign(obj2, obj1);
```

上方代码中，是将`obj1` 的值追加到`obj2`中。如果对象里的属性名相同，会被覆盖。


### 2019-11-25-在新的窗口中打开url

在原来的窗体中跳转到新页面：

```javascript
window.location.href="要跳转的新页面";
```

在新窗体中打开新页面：

```javascript
window.open('你所要跳转的新页面');
```


### 2019-12-10-JavaScript 新特性：Optional Chaining（可选链式调用）语法

以往写代码，我们一般都这么写：

```javascript
if (result && result.user && result.user.name && result.user.name.length) {
    console.log('qianguyihao');
}
```

有了 Optinal Chain 语法之后，就简洁很多了，可以这么写：


```javascript
if (result?.user?.name?.length) {
    console.log('qianguyihao');
}
```



参考链接：

- 了解 JavaScript 新特性：Optional Chaining：<https://www.infoq.cn/article/2JDORgXrU6VmZ7jlyuFD>

- 原文链接： https://v8.dev/features/optional-chaining



### 2020-04-28-判断字符串的包含关系

```js
var str = 'qiangu2';
if (str == ('qiangu1' || 'qiangu2')) {
    console.log('qianguyihao');
}
```

注意，上面的代码，根本就不会走 console.log 语句，因为if里面的内容是false。

如果我们要判断变量 `str` 是否在 `qiangu1、qiangu2`的合集里，我们应该这样写：

```js
var str = 'qiangu2';
if (str == 'qiangu1' || str == 'qiangu2') {
    console.log('qianguyihao');
}
```



