

## hello world：开始写第一行JavaScript代码

JS 代码的书写位置在哪里呢？这个问题，也可以理解成：引入 JS 代码，有哪几种方式？有三种方式：（和CSS的引入方式类似）

1. **行内式**：写在标签内部。

2. **内嵌式**（内联式）：写在head标签中。

3. **外链式**：引入外部JS文件。

### 方式1：行内式

**代码举例**：

```javascript
<input type="button" value="点我点我" onclick="alert('千古壹号 Hello 方式1')" />
```

完整的可执行代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="点我点我" onclick="alert('千古壹号 Hello 方式1')" />
    </body>
</html>

```

**分析**：

- 可以将单行或少量 JS 代码写在HTML标签的事件属性中（以 on 开头的属性），比如放在上面的 `onclick`点击事件中。

- 这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS代码时，很难维护；引号多层嵌套时，也容易出错。

- 关于代码中的「引号」，在HTML标签中，我们推荐使用双引号，JS 中我们推荐使用单引号。

### 方式2、内嵌式

我们可以在 HTML 页面的 `<body>` 标签里放入`<script type=”text/javascript”></script>`标签对，并在`<script>`里书写JavaScript 代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript">
		// 在这里写 js 代码
		alert('千古壹号 hello 方式2');
		console.log('qianguyihao hello 方式2');
	</script>
</body>
</html>
```

**分析**：

- text表示纯文本，因为JavaScript代码本身就是纯文本。

- 可以将多行JS代码写到 `<script>` 标签中。

- 内嵌式 JS 是学习时常用的方式。

### 方式3：外链式

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 外链式：引入外部的 js 文件：这个 utils.js 文件与当前的 html 文件，处于同一级目录 -->
	<script src="utils.js"></script>
</body>
</html>
```

**分析**：

- 上面这段代码，依然是放到body标签里，可以和内嵌的JS代码并列。
- 上方代码的 script 标签已经引入了外部JS文件，所以这个标签里面，不可以再写JS代码。

**总结**：

我们在实战开发中，基本都是采用方式3，因为将 html 文件和 js 文件分开的方式，有利于代码的结构化和复用，符合高内聚、低耦合的思想。很少会有人把一大堆 JS 代码塞到 html 文件里。

### 关于 window.onload：先加载，最后执行

上面的三种方式，有个共同的地方是：JS代码都是写在`</body>`中的，准确来说，是在页面标签元素的后面，在body**结束标签**的前面。

为什么一般是按这样的顺序来写呢？这是因为：浏览器默认会**从上至下**解析网页（这句话很重要）。当你**需要通过 JS 来操作界面上的标签元素**的时候，假如将 JS 代码、`<script>`标签写到`<head>`标签中，或者写在页面标签元素的前面，那么这样的 JS 是无效的，因为标签元素在此时都还没来得及加载，自然无法操作这个元素。

**重点来了：**

当你**需要通过 JS 来操作界面上的标签元素**的时候，如果实在想把 JS 写到`<head>`标签中，那么就必须用 window.onload 将JS代码进行包裹。代码格式如下：

```html
<head>
  window.onload = function(){
    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行
    ...
  }
</head>
```

**window.onload**的含义是：等界面上所有内容都加载完毕后，再执行`{}`中的代码。不仅要等文本加载完毕，而且要等图片也要加载完毕，才执行函数。做到了**先加载，最后执行**，也就是：**等页面加载完毕后再执行**。

当然，我们可以根据具体需求，将 window.onload 写在 `<head>`标签中，或者写在`<script>`标签中。

## JavaScript 一些简单的语法规则

学习程序，是有规律可循的，程序会有有相同的部分，这些部分就是一种规定，不能更改，我们称之为：语法。

（1）JavaScript对换行、缩进、空格不敏感。每一条语句以分号结尾。

也就是说：

代码一：

```html
<script type="text/javascript">
	alert("今天蓝天白云");
	alert("我很高兴");
</script>
```

等价于代码二：

```html
<script type="text/javascript">
	alert("今天蓝天白云");alert("我很高兴");
</script>
```

备注：每一条语句末尾要加上分号，虽然分号不是必须加的，如果不写分号，浏览器会自动添加，但是会消耗一些系统资源。

（2）所有的符号，都是英语的。比如**括号**、引号、分号。

如果你用的是搜狗拼音，**建议不要用shift切换中英文**（可以在搜狗软件里进行设置），不然很容易输入中文的分号；建议用ctrl+space切换中英文输入法。

（3）严格区分大小写。

## 前端代码的注释

我们不要把 HTML、CSS、JavaScript三者的注释格式搞混淆了。

### HTML 的注释

```html
<!-- 我是注释  -->
```

### CSS的注释

```html
<style type="text/css">

	/*
		我是注释
	*/

	p{
		font-weight: bold;
		font-style: italic;
		color: red;
	}

</style>
```

注意：CSS只有`/*  */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效。

### JavaScript 的注释

单行注释：

```js
// 我是注释
```

多行注释：

```js
/*
	多行注释1
	多行注释2
*/
```

补充：VS Code中，单行注释的快捷键是「Ctrl + /」，多行注释的默认快捷键是「Alt + Shift + A」。

当然，如果你觉得多行注释的默认快捷键不方便，我们还可以修改默认快捷键。操作如下：

VS Code --> 首选项 --> 键盘快捷方式 --> 查找“注释”这两个字 --> 将原来的快捷键修改为「Ctrl + Shift + /」。

## Javascript 输入输出语句

### 弹出警告框：alert语句

我们要学习的第一个语句，就是alert语句。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            alert('千古壹号');
        </script>
    </body>
</html>

```

**alert**（英文翻译为“警报”）的用途：**弹出“警告框”**。

`alert("")`警告框的效果如下：

![](http://img.smyhvae.com/20180116_1735.gif)

这个警告框，在IE浏览器中长这样：

![](http://img.smyhvae.com/20180116_1906.png)

上面的代码中，如果写了两个alert()语句的话，网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

### 控制台输出：console.log("")

`console.log("")`表示在控制台中输出。console表示“控制台”，log表示“输出”。

在Chrome浏览器中，按F12即可打开控制台，选择「console」栏，即可看到打印的内容。

`console.log("")`效果如下：

![](http://img.smyhvae.com/20180116_2008.gif)

控制台是工程师、程序员调试程序的地方。程序员经常使用这条语句输出一些东西，来测试程序是否正确。

普通人是不会在意控制台的，但是有些网站另藏玄机。有个很有意思的地方是，百度首页的控制台，悄悄地放了一段招聘信息的彩蛋：

![](http://img.smyhvae.com/20180116_2010.png)

做前端开发时需要经常使用控制台做调试，我们甚至可以直接在控制台输入 JS 语句，然后打印执行结果。

**总结**：alert() 主要用来显示消息给用户，console.log() 用来给程序员做调试用。

### 弹出输入框：prompt()语句

`prompt()`就是专门用来弹出能够让用户输入的对话框。用得少，测试的时候偶尔会用。

JS代码如下：

```javascript
var a = prompt("请随便输入点什么东西吧");
console.log(a);
```

上方代码中，用户输入的内容，将被传递到变量 a 里面，并在控制台打印出来。

效果如下：

![](http://img.smyhvae.com/20180116_2230.gif)

**prompt()语句中，用户不管输入什么内容，都是字符串。**

**alert()和prompt()的区别：**

- alert() 可以直接使用。

- prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200102.png)

