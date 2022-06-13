


## WebStorm的简单设置

#### 1、主题修改：

可能大家会觉得软件的界面不太好看，我们可以换一下主题。选择菜单栏“File--settings--appearance--theme”，主题选择 Dracula：

![](http://img.smyhvae.com/20180118_1600.png)

#### 2、导入第三方主题：

系统提供的两种主题可能都不太好看，我们可以进入网站<http://color-themes.com/>来获取第三方主题，这里推荐两个主题，大家二选一即可：

- [Sublime](https://github.com/y3sh/Intellij-Colors-Sublime-Monokai)

- [Material](https://github.com/ChrisRM/material-theme-jetbrains)

![](http://img.smyhvae.com/20180118_1636.png)

![](http://img.smyhvae.com/20180118_1637.png)

上图中，在网站<http://color-themes.com/>中将主题下载之后，是一个jar包。那怎么导入到WebStorm呢？

别着急，回到WebStorm，选择菜单栏“ File-Import Settings”，将下载好的jar包导入即可。



#### 3、代码字体修改：

选择菜单栏“File--settings--Editor--Font”：

![](http://img.smyhvae.com/20180118_1627.png)

上图中，点击红框部分，然后弹出如下界面：

![](http://img.smyhvae.com/20180118_1628.png)

我们在上图中修改代码的字体。

修改完之后发现 WebStorm 的一些默认字体（比如侧边栏的工程目录的字体）并没有发生变化，如果想改的话，也可以改（我个人一般是不改的）。



#### 4、关闭更新：

如下图所示：

![](http://img.smyhvae.com/20180118_1646.png)

#### 5、快捷键习惯的修改：




#### 7、配置代码的自动提示：



#### 14、修改文件编码为UTF-8：

WebStorm 2017.3.3版本的默认编码方式是 GBK，我们还是统一设置为UTF-8吧，不要坑队友哦：

![](http://img.smyhvae.com/20180124_1856.png)


### 新建一个空的项目

配置完成后，可以开始新建一个项目文件夹（站点），项目通常包含如下内容：

- 首页：index.html

- 样式：css文件夹
	- index.css
	- 相同样式：全局样式、公共样式。起名为：base.css（基本样式）或者 global.css (全局样式)

- 图片：images文件夹、文件

- 特效：js文件夹、js文件

**步骤如下：**

（1）新建一个空的项目：
![](http://img.smyhvae.com/20180118_1720.png)

（2）然后新建一个html文件：

![](http://img.smyhvae.com/20180118_1602.png)

（3）新建一个空的文件夹，命名为`css`：

![](http://img.smyhvae.com/20180118_1725.png)

然后在这个css文件夹中，新建样式表：（比如index.css\base.css）

![](http://img.smyhvae.com/20180118_1730.png)

（4）最后新建一个images文件夹，用于存放土片。这样的话，一个基本的项目结构就搭建好了：

![](http://img.smyhvae.com/20180118_1733.png)

接下来，开始运用起你们的前端知识吧。



（5）如果要新建JS文件的话，操作如下：

![](http://img.smyhvae.com/20180124_1859.png)



## 使用技巧



#### 多光标编辑

我们可以按住鼠标不松手，选中多个光标，然后同时编辑：


#### 随时在浏览器中看代码效果

20180118_1658.png

如上图所示，我们可以点击右上角的浏览器图标，在各个浏览器中看效果。


#### 实时查看颜色

写代码时如果想输入颜色，会自动提示颜色的预览。

![](http://img.smyhvae.com/20180118_1702.png)

点击最左侧的颜色预览，还能弹出调色板：

![](http://img.smyhvae.com/20180118_1710.gif)






## 代码的自动补齐


（1）在html文档中，输入`div*10`，按tab键后，弹出的效果如下：

```html
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
```



（2）在html文档中，输入如下部分：

```
.search-logo+.search-input+.search-car+.search-moreA
```

按tab键后，弹出的效果如下：

```html
        <div class="search-logo"></div>
        <div class="search-input"></div>
        <div class="search-car"></div>
        <div class="search-moreA"></div>
```

你看，京东的搜索框就包含了这几个div：

20180122_1045.png

（3）方法的注释：

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


## 常用快捷键

#### 标签环绕

输入一段字符后，按住`Ctrl + Alt + T`，可以用标签将这段字符环绕：

![](http://img.smyhvae.com/20180118_1719.gif)



#### 选中正行中的文本

比如下面这行：

```
    text-align: center;  /*让 li 里面的文本水平方向居中*/

```

如果直接按 【ctrl+C】的话，复制的是整行的内容，把前面的空格也包含进去了。如果不想复制空格，有另外一个办法：将光标放在行尾，然后按住【shift+home】，就能选中你想要的内容了。




