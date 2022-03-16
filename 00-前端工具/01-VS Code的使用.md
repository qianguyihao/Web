---
title: 01-VS Code的使用
---

<ArticleTopAd></ArticleTopAd>



## 前言

> 文章标题：《第一次使用 VS Code 时你应该知道的一切配置》。本文的最新内容，更新于 2021-10-09。大家完全不用担心这篇文章会过时，因为随着 VS Code 的版本更新和插件更新，本文也会随之更新。

> 本文的最新内容，也会在[GitHub](https://github.com/qianguyihao/Web/blob/master/00-%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/01-VS%20Code%E7%9A%84%E4%BD%BF%E7%94%A8.md)上同步更新，欢迎 star。

VS Code 软件实在是太酷、太好用了，越来越多的新生代互联网民工正在使用它。

前端男神**尤雨溪**大大这样评价 VS Code：

![](http://img.smyhvae.com/20200619_0133.png)

有一点你可能会感到惊讶：VS Code 这款软件本身，是用 JavaScript 语言编写的（具体请自行查阅基于 JS 的 PC 客户端开发框架 `Electron`）。Jeff Atwood 在 2007 年提出了著名的 Atwood 定律：

> **任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现**。

Jeff Atwood 这个人是谁不重要（他是 Stack Overflow 网站的联合创始人），重要的是这条定律。

前端目前是处在春秋战国时代，各路英雄豪杰成为后浪，各种框架工具层出不穷，VS Code 软件无疑是大前端时代最骄傲的工具。

如果你是做前端开发（JavaScript 编程语言为主），则完全可以将 VS Code 作为「**主力开发工具**」。这款软件是为前端同学量身定制的，开箱即用。

如果你是做其他语言方向的开发，并且不需要太复杂的集成开发环境，那么，你可以把 VS Code 作为「**代码编辑器**」来使用，纵享丝滑。

甚至是一些写文档、写作的同学，也经常把 VS Code 作为 markdown **写作工具**，毫无违和感。

退而求其次，即便你不属于以上任何范畴，你还可以把 VS Code 当作最简单的**文本编辑器**来使用，完胜 Windows 系统自带的记事本。

写下这篇文章，是顺势而为。

## 一、惊艳登场：VS Code 的介绍

VS Code 的全称是 Visual Studio Code，是一款开源的、免费的、跨平台的、高性能的、轻量级的代码编辑器。它在性能、语言支持、开源社区方面，都做得很不错。

微软有两种软件：一种是 VS Code，一种是其他软件。

在2015年4月29日的微软Build开发者大会上，微软宣布推出 VS Code之后，这个轻量级的编辑器成为全球无数开发者们最喜爱的开发工具。VS Code基于开源且跨平台的理念，每月都会进行迭代，并提供每天发布的 insider 版本（insider是微软的一种公测计划，类似于国内软件所说的内测版）。它拥有至少几万个插件，生态极为活跃和丰富。

### IDE 与 编辑器的对比

IDE 和编辑器是有区别的：

- **IDE**（Integrated Development Environment，集成开发环境）：对代码有较好的智能提示和相互跳转，同时侧重于工程项目，对项目的开发、调试工作有较好的图像化界面的支持，因此比较笨重。比如 Eclipse 的定位就是 IDE。

- **编辑器**：要相对轻量许多，侧重于文本的编辑。比如 Sublime Text 的定位就是编辑器。再比如 Windows 系统自带的「记事本」就是最简单的编辑器。

需要注意的是，VS Code 的定位是**编辑器**，而非 IDE ，但 VS Code 又比一般的编辑器的功能要丰富许多。可以这样理解：VS Code 的体量是介于编辑器和 IDE 之间。VS Code 的使命，是让开发者在编辑器里拥有 IDE 那样的开发体验。

 VS Code流行起来之后，使用 Sublime Text、Atom 这类编辑器软件的人，自然就越来越少了。

### VS Code 的特点

- 跨平台：支持 MacOS、Windows 和 Linux 等多个平台。在这多种平台下，拥有一致的用户界面和开发体验。
- 开源：VS Code 的源代码以 MIT 协议开源。不仅代码开源，而且整个产品的开发计划和发布管理也都是开源的。VS Code团队每年都会在 GitHub 的Wiki上发布 [Roadmap](https://github.com/microsoft/vscode/wiki/Roadmap)，列出一整年的规划图。VS Code 软件的官方文档也托管在了 [GitHub](https://github.com/Microsoft/vscode-docs) 上。
- 自带终端、图形化的调试工具、Git 版本控制。
- 插件扩展：支持第三方插件，功能强大。既有中心化的插件市场，也可以直接在 VS Code里搜索你想要的插件。
- 生态：社区生态活跃且丰富，社区氛围浓厚。
- 自带  emmet：支持代码自动补全，快速生成简单的语法结构。要知道，这个功能在 Sublime Text中，得先安装插件才行。
- 语法支持：VS Code 自带了 JavaScript、TypeScript 和 Node.js 的**语法支持**，包括：**语法高亮、代码智能提示和补全、括号匹配、颜色区分、代码片段提示**等。也就是说，你在书写 JS 和 TS 时，这些语法支持都是自带的。其他的一些语言，你需要先安装相应的**扩展包**插件，就出现语法支持。
- 在修改配置方面，既有图形化的配置界面，也有 基于 JSON 文件的配置方式，满足不同人群的使用习惯。

### 前端利器之争： VS Code 与 WebStorm

前端小白最喜欢问的一个问题是：哪个编辑器/IDE 好用？是 VS Code 还是 WebStorm （WebStorm 其实是 IntelliJ IDEA 的定制版）？我来做个对比：

- **哪个更酷**：显然 VS Code 更酷。

- **内存占用情况**：根据我的观察，VS Code 是很占内存的（尤其是当你打开多个窗口的时候），但如果你的内存条够用，使用起来是不会有任何卡顿的感觉的。相比之下，IntelliJ IDEA 不仅非常占内存，而且还非常卡顿。如果你想换个既轻量级、又不占内存的编辑器，最好还是使用「Sublime Text」编辑器。

- **使用比例**：当然是 VS Code 更胜一筹。先不说别的，我就拿数据说话，我目前所在的研发团队有 200 人左右（120个后台、80个前端），他们绝大部分人都在用 VS Code 编码，妥妥的。

所以，如果你以后还问这个问题，那就真有些掉底了。

### VS Code 的技术栈、核心组件

了解 VS Code的技术栈和核心组件，可以让我们对 VS Code 有更深入的认识。此小段，了解即可。

- 开发框架：Electron。Electron可以使用 Node.js + JS这样的技术栈开发桌面GUI应用程序。
- 编辑器：Monaco Editor。Monaco Editor 是一款开源的在线代码编辑器，是 **VS Code 浏览器版本**的最核心组件。[#](https://zhuanlan.zhihu.com/p/88828576)
- 编程语言：TypeScript。TypeScript 是  JavaScript的严格超集。TS 在JS的基础上添加了许多功能，引入了声明文件，而且支持类型扩展。TS 适合长期的、多人开发的大型项目开发。
- 让编辑器支持语言功能：Language Server Protocol （LSP） 语言服务协议。LSP是编辑器/IDE 与语言服务器之间的一种协议，通过 JSON-PRC 传输消息，可以让编辑器嵌入并支持各种编程语言。开发者可以在编辑器中使用各种语言来编写程序。
- 让编辑器支持调试功能：Debug Adapter Protocol（DAP）。DAP 是基于 JSON的协议，它抽象了开发工具与调试工具质检的通信。
- 集成终端：Xterm.js。VS Code的集成终端是基于开源项目 [Xterm.js](https://github.com/xtermjs/xterm.js/) 进行开发的。Xterm.js 是一个使用 TS 开发的终端组件。另外，Xterm.js 并不是直接下来下来就能用的终端应用，它只是一个前端组件，可以与 bash这样的进程进行连接，然后让用户通过  Xterm.js 进行交互。

### VS Code 的安装

- VS Code 官网：<https://code.visualstudio.com>

VS Code 的安装很简单，直接去官网下载安装包，然后双击安装即可。

![](http://img.smyhvae.com/20190313_1750_3.png)

上图中，直接点击 download，一键下载安装即可。

VS Code支持以下平台：

![](https://img.smyhvae.com/20210930_1930.png)

安装完成后的界面如下：

![](https://img.smyhvae.com/20211011_1703.png)

VS  Code被分为以下五个区域：

- 编辑器
- 侧边栏
- 状态栏
- 活动栏
- 面板

VS Code在功能上非常克制，只包含了大多数开发流程中所需要的基础模块，包括：编辑器、文件管理、窗口管理、首选项设置、终端等。

你需要根据具体需要安装额外的组件或者插件。比如说，如果开发TS项目，则需要安装 TS编译器、ESLint、TSLint等编译工具。如果开发C语言项目，则需要安装gcc、Clang等编辑工具。

## 二、崭露锋芒：VS Code 快捷键

VS Code 用得熟不熟，首先就看你是否会用快捷键。以下列出的内容，都是常用快捷键，而加粗部分的快捷键，使用频率则非常高。

任何工具，掌握 20%的技能，足矣应对 80% 的工作。既然如此，你可能会问：那就只保留 20% 的特性，不久可以满足 80%的用户了吗？

但我想说的是：**那从来都不是同样的 20%**，每个人都会用到不同的功能。

掌握下面这些高频核心快捷键，你和你的工具，足矣露出锋芒。

### 1、工作区快捷键

| Mac 快捷键             | Win 快捷键               | 作用                                          | 备注                 |
| :--------------------- | :----------------------- | :-------------------------------------------- | :------------------- |
| **Cmd + Shift + P**    | **Ctrl + Shift + P**，F1 | 显示命令面板                                  |                      |
| **Cmd + B**            | **Ctrl + B**             | 显示/隐藏侧边栏                               | 很实用               |
| `Cmd + \` | `Ctrl + \` | **拆分为多个编辑器**  | 【重要】抄代码利器                            |
| **Cmd + 1、2**         | **Ctrl + 1、2**          | 聚焦到第 1、第 2 个编辑器                     | 同上重要             |
| **Cmd + +、Cmd + -** | **ctrl + +、ctrl + -**  | 将工作区放大/缩小（包括代码字体、左侧导航栏） | 在投影仪场景经常用到 |
| Cmd + J                | Ctrl + J                 | 显示/隐藏控制台                               |                      |
| **Cmd + Shift + N**    | **Ctrl + Shift + N**     | 重新开一个软件的窗口                          | 很常用               |
| Cmd + Shift + W        | Ctrl + Shift + W         | 关闭软件的当前窗口                            |                      |
| Cmd + N                | Ctrl + N                 | 新建文件                                      |                      |
| Cmd + W                | Ctrl + W                 | 关闭当前文件                                  |                      |

### 2、跳转操作

| Mac 快捷键                                                         | Win 快捷键             | 作用                                 | 备注               |
| :----------------------------------------------------------------- | :--------------------- | :----------------------------------- | :----------------- |
| Cmd + ` | 没有 | 在同一个软件的**多个工作区**之间切换 | 使用很频繁 |
| **Cmd + Option + 左右方向键**                                      | Ctrl + Pagedown/Pageup | 在已经打开的**多个文件**之间进行切换 | 非常实用           |
| Ctrl + Tab                                                         | Ctrl + Tab             | 在已经打开的多个文件之间进行跳转     | 不如上面的快捷键快 |
| Cmd + Shift + O                                                    | Ctrl + shift + O       | 在当前文件的各种**方法之间**（符号：Symbol）进行跳转 |                    |
| Cmd + T | Ctrl + T | 在当前**工作区**的各种方法之间（符号：Symbol）进行跳转 | |
| Ctrl + G                                                           | Ctrl + G               | 跳转到指定行                         |                    |
| `Cmd+Shift+\` | `Ctrl+Shift+\`                                     | 跳转到匹配的括号       |                                      |

### 3、移动光标

| Mac 快捷键                    | Win 快捷键                                 | 作用                                                         | 备注           |
| :---------------------------- | :----------------------------------------- | :----------------------------------------------------------- | :------------- |
| 方向键                        | 方向键                                     | 在**单个字符**之间移动光标                                   | 大家都知道     |
| **option + 左右方向键**       | **Ctrl + 左右方向键**                      | 在**单词**之间移动光标                                       | 很常用         |
| **Cmd + 左右方向键**          | **Fn + 左右方向键**（或 Win + 左右方向键） | 将光标定位到当前行的最左侧、最右侧（在**整行**之间移动光标） | 很常用         |
| **Option + Alt + 左右方向键** | **Alt + Shift + 左右方向键**               | 左右扩大/缩小选中的范围                                      | 很酷，极为高效 |
| Cmd + ↑                       | Ctrl + Home                                | 将光标定位到文件的第一行                                     |                |
| Cmd + ↓                       | Ctrl + End                                 | 将光标定位到文件的最后一行                                   |                |
| Cmd + Shift + \               |                                            | 在**代码块**之间移动光标                                     |                |

### 4、编辑操作

| Mac 快捷键             | Win 快捷键          | 作用                                 | 备注                                   |
| :--------------------- | :------------------ | :----------------------------------- | :------------------------------------- |
| Cmd + C                | Ctrl + C            | 复制                                 |                                        |
| Cmd + X                | Ctrl + X            | 剪切                                 |                                        |
| Cmd + V                | Ctrl + V            | 粘贴                                 |                                        |
| **Cmd + Enter**        | **Ctrl + Enter**    | 在当前行的下方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向下插入一行 |
| Cmd+Shift+Enter        | Ctrl+Shift+Enter    | 在当前行的上方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向上插入一行 |
| **Option + ↑**         | **Alt + ↑**         | 将代码向上移动                       | 很常用                                 |
| **Option + ↓**         | **Alt + ↓**         | 将代码向下移动                       | 很常用                                 |
| Option + Shift + ↑     | Alt + Shift + ↑     | 将代码向上复制一行                   |                                        |
| **Option + Shift + ↓** | **Alt + Shift + ↓** | 将代码向下复制一行                   | 写重复代码的利器                       |

另外再补充一点：将光标点击到某一行的任意位置时，默认就已经是**选中全行**了，此时可以直接**复制**或**剪切**，无需点击鼠标。这个非常实用，是所有的编辑操作中，使用得最频繁的。它可以有以下使用场景：

- 场景1：假设光标现在处于第5行的**任意位置**，那么，直接依次按下 `Cmd + C` 和 `Cmd + V`，就会把这行代码复制到第6行。继续按 `Cmd + C` 和 `Cmd + V`，就会把这行代码复制到第7行。copy代码so easy。
- 场景2：假设光标现在处于第5行，那么，先按下 `Cmd + C`，然后按两下`↑` 方向键，此时光标处于第3行；紧接着，继续按下`Cmd + V`，就会把刚刚那行代码复制到第3行，原本处于第3行的代码会整体**下移**。

你看到了没？上面的两个场景，我全程没有使用鼠标，只通过简单的复制粘贴和方向键，就做到了如此迅速的copy代码。你说是不是很高效？

### 5、删除操作

| Mac 快捷键             | Win 快捷键           | 作用                   | 备注                                      |
| :--------------------- | :------------------- | :--------------------- | :---------------------------------------- |
| Cmd + shift + K        | Ctrl + Shift + K     | 删除整行               | 「Cmd + X」的作用是剪切，但也可以删除整行 |
| **option + Backspace** | **Ctrl + Backspace** | 删除光标之前的一个单词 | 英文有效，很常用                          |
| option + delete        | Ctrl + delete        | 删除光标之后的一个单词 |                                           |
| **Cmd + Backspace**    |                      | 删除光标之前的整行内容 | 很常用                                    |
| Cmd + delete           |                      | 删除光标之后的整行内容 |                                           |

备注：上面所讲到的移动光标、编辑操作、删除操作的快捷键，在其他编辑器里，大部分都适用。

### 6、多光标选择/多光标编辑

多光标选择在编程的**提效**方面可谓立下了汗马功劳。因为比较难记住，所以你要时不时回来复习这一段。

| Mac 快捷键                        | Win 快捷键                     | 作用                                                         | 备注                                     |
| --------------------------------- | ------------------------------ | ------------------------------------------------------------ | ---------------------------------------- |
| **Option + 鼠标连续点击任意位置** | **Alt + 鼠标连续点击任意位置** | 在任意位置，同时出现多个光标                                 | 很容易记住                               |
| Cmd + D                           | Ctrl + D                       | 将光标放在某个单词的位置（或者先选中某个单词），然后反复按下「 **Cmd + D** 」键， 即可将下一个相同的词逐一加入选择。 | 较常用                                   |
| **Cmd + Shift + L**               | **Ctrl + Shift + L**           | 将光标放在某个单词的位置（或者先选中某个单词），然后按下快捷键，则所有的相同内容处，都会出现光标。 | 很常用。比如变量重命名的时候，就经常用到 |

### 7、多列选择/多列编辑

多列选择是更高效的多光标选择，所以单独列成一小段。

| Mac 快捷键                | Win 快捷键             | 作用                                                         | 备注                 |
| ------------------------- | ---------------------- | ------------------------------------------------------------ | -------------------- |
| Cmd + Option + 上下键     | Ctrl + Alt + 上下键    | 在连续的多列上，同时出现多个光标                             | 较常用               |
| Option + Shift + 鼠标拖动 | Alt + Shift + 鼠标拖动 | 按住快捷键，然后把鼠标从区域的左上角拖至右下角，即可在选中区域的每一行末尾，出现光标。 | 很神奇的操作，较常用 |
| **Option + Shift + i**    | **Alt + Shift + I**    | 选中一堆文本后，按下快捷键，既可在**每一行的末尾**都出现一个光标。 | 很常用               |

### 8、编程语言相关

| Mac 快捷键             | Win 快捷键      | 作用                         | 备注                             |
| :--------------------- | :-------------- | :--------------------------- | :------------------------------- |
| Cmd + /                | Ctrl + /        | 添加单行注释                 | 很常用                           |
| **Option + Shift + F** | Alt + shift + F | 代码格式化                   | 很常用                           |
| F2                     | F2              | 以重构的方式进行**重命名**   | 改代码备                         |
| Ctrl + J               |                 | 将多行代码合并为一行         | Win 用户可在命令面板搜索”合并行“ |
| Cmd +                  |                 |                              |                                  |
| Cmd + U                | Ctrl + U        | 将光标的移动回退到上一个位置 | 撤销光标的移动和选择             |

### 9、搜索相关

| Mac 快捷键          | Win 快捷键          | 作用                                       | 备注   |
| :------------------ | :------------------ | :----------------------------------------- | :----- |
| **Cmd + Shift + F** | **Ctrl + Shift +F** | 全局搜索代码                               | 很常用 |
| **Cmd + P**         | **Ctrl + P**        | 在当前的项目工程里，**全局**搜索文件名     |        |
| Cmd + F             | Ctrl + F            | 在当前文件中搜索代码，光标在搜索框里       |        |
| **Cmd + G**         | **F3**              | 在当前文件中搜索代码，光标仍停留在编辑器里 | 很巧妙 |

### 10、自定义快捷键

按住快捷键「Cmd + Shift + P」，弹出命令面板，在命令面板中输入“快捷键”，可以进入快捷键的设置。

当然，你也可以选择菜单栏「偏好设置 --> 键盘快捷方式」，进入快捷键的设置：

![](http://img.smyhvae.com/20190329_2120.png)

### 11、快捷键列表

你可以点击 VS Code 左下角的齿轮按钮，效果如下：

![](http://img.smyhvae.com/20190418_1738.png)

上图中，在展开的菜单中选择「键盘快捷方式」，就可以查看和修改所有的快捷键列表了：

![](http://img.smyhvae.com/20190418_1739_2.png)

### 快捷键参考表（官方）

VS Code官网提供了 PDF版本的键盘快捷键参考表，转需：

- Windows版本：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- Mac 版本：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
- Linux版本：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

我们在 VS  Code软件里通过菜单栏「帮助-->键盘快捷方式参考」也可以打开相应平台的快捷键大全（PDF版本）。




## 三、高端访问：命令面板的使用

Mac 用户按住快捷键 `Cmd+Shift+P` （Windows 用户按住快捷键`Ctrl+Shift+P`），可以打开快速命令面板。效果如下：

![](http://img.smyhvae.com/20190329_1750_2.png)

命令面板的作用是**希望解放开发者的鼠标，让一些操作和配置可以直接通过键盘进行**。如果让开发者记住所有的配置项在菜单的哪个位置是不现实的，而且有些命令并不在菜单中。

有了命令面板之后，如果你需要修改一些设置项，或者进行一些快捷操作，则可以通过「命令面板」来操作，效率会更高。接下来列举一些。

### 1、VS Code 设置为中文语言

Mac 用户按住快捷键 `Cmd+Shift+P` （Windows 用户按住快捷键`Ctrl+Shift+P`），打开命令面板。

在命令面板中，输入`Configure Display Language`，选择`Install additional languages`，然后安装插件`Chinese (Simplified) Language Pack for Visual Studio Code`即可。

或者，我们可以直接安装插件`Chinese (Simplified) Language Pack for Visual Studio Code`，是一样的。

安装完成后，重启 VS Code。

### 2、设置字体大小

在命令面板输入“字体”，可以进行字体的设置，效果如下：

![](http://img.smyhvae.com/20190329_2110.png)

当然，你也可以在菜单栏，选择「首选项-设置-常用设置」，在这个设置项里修改字体大小。

### 3、快捷键设置

在命令面板输入“快捷键”，就可以进入快捷键的设置。

### 4、大小写转换

选中文本后，在命令面板中输入`transfrom`，就可以修改文本的大小写了。

![](http://img.smyhvae.com/20190414_1751.png)

### 5、使用命令行启动 VS Code

（1）输入快捷键「Cmd + Shift + P 」，选择`install code command`：

![](http://img.smyhvae.com/20191103_1327.png)

（2）使用命令行：

- `code`命令：启动 VS Code 软件
- `code pathName/fileName`命令：通过 VS Code 软件打开指定目录/指定文件。

备注：这种方法快捷简单，但是在电脑重启之后就失效了。稍后在第五段，我会介绍更常见的方法。



### 6、修改特定编程语言的设置项

输入快捷键「Cmd + Shift + P 」打开命令面板，然后输入并执行 `Configure Language Specific Settings`即可。

![](https://img.smyhvae.com/20211012_1039.png)



## 四、私人订制：VS Code 的常见配置

### 0、设置项介绍

在修改 VS Code配置之前，我们需要知道，在哪里可以找到设置项的入口。

**方式1**：Mac用户选择菜单栏「Code--> 首选项-->设置」，即可打开配置项：

![](http://img.smyhvae.com/20210930_2009.png)

**方式2**：点击软件右下角的设置图标：

![](http://img.smyhvae.com/20210930_2016.png)

![](https://img.smyhvae.com/20211012_1017.png)

如上图所示，VS Code提供两种不同范围的设置：

- **用户**设置：全局生效。
- **工作区**设置：只针对当前项目生效。工作区设置会覆盖用户设置。适用于团队协作场景。工作区的设置文件是保存在当前项目根目录的`.vscode/settings.json`中，可以被提交到Git仓库，方便共享给项目组的其他成员。

操作技巧：

（1）我们可以在设置面板的顶部搜索框，输入关键词，就能迅速定位到你想要的设置项。

（2）上图中，点击右上角的icon，可以通过 json文件的形式修改设置项。





### 1、修改主题

1）修改颜色主题：

选择菜单栏「Code --> 首选项 --> 颜色主题」：

![](http://img.smyhvae.com/20210930_2017.png)

在弹出的对话框中，挑选你一个你喜欢的的颜色主题吧，或者安装其他颜色的主题：

![20211013_1018](http://img.smyhvae.com/20211013_1018.png)

或者在设置项里搜索`Workbench: Color Theme`，进行修改。

2）修改文件图标的主题：

选择菜单栏「Code --> 首选项 --> 文件图标主题」：

![20211013_1015](http://img.smyhvae.com/20211013_1015.png)

在弹出的对话框中，挑选你一个你喜欢的的主题吧，或者安装其他的主题：

![20211013_1019](http://img.smyhvae.com/20211013_1019.png)



或者在设置项里搜索`Workbench: Icon Theme`，进行修改。

### 2、面包屑（Breadcrumb）导航

打开 VS Code 的设置项，选择「用户设置 -> 工作台 -> 导航路径」，如下图所示：

![](http://img.smyhvae.com/20191108_1550.png)

上图中，将红框部分打钩即可。

设置成功后，我们就可以查看到当前文件的「层级结构」，非常方便。如下图所示：

![](http://img.smyhvae.com/20190415_2009.png)

有了这个面包屑导航，我们可以点击它，在任意目录、任意文件之间随意跳转。使用频繁非常高。



### 3、是否显示代码的行号

VS Code 默认显示代码的行号。你可以在设置项里搜索 `editor.lineNumbers`修改设置，配置项如下：

![](http://img.smyhvae.com/20190417_2140.png)

我建议保留这个设置项，无需修改。

### 4、右侧是否显示代码的缩略图

如果某个文件的代码量很大，缩略图就很有用了，可以预览全局，并在当前文件中快速跳转。

VS Code 会在代码的右侧，默认显示缩略图。你可以在设置项里搜索 `editor.minimap` 进行设置，配置项如下：

![](http://img.smyhvae.com/20211012_1507.png)

上面这张图，你仔细琢磨下会发现，中文翻译十分精准。

### 5、将当前行代码高亮显示（更改光标所在行的背景色）

当我们把光标放在某一行时，这一行的背景色并没有发生变化。如果想**高亮显示**当前行的代码，需要设置两步：

（1）在设置项里搜索`editor.renderLineHighlight`，将选项值设置为`all`或者`line`。

（2）在设置项里增加如下内容：

```json
"workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#00000090",
    "editor.lineHighlightBorder": "#ffffff30"
}
```

上方代码，第一行代码的意思是：修改光标所在行的背景色（背景色设置为全黑，不透明度 90%）；第二行代码的意思是：修改光标所在行的边框色。

### 6、改完代码后立即自动保存

**方式一**：

改完代码后，默认不会自动保存。你可以在设置项里搜索`files.autoSave`，修改参数值为`afterDelay`  ，即可自动保存。如下：

![](https://img.smyhvae.com/20211012_2000.png)

files.autoSave的参数值有以下几种：

- off（默认值）：不自动保存。
- afterDelay（建议配置）：文件修改超过一定时间（默认1秒）后，就自动保存。
- onFocusChange：当前编辑器失去焦点时，则自动保存。如果我们将配置项修改为`onFocusChange`之后，那么，当光标离开该文件后，这个文件就会自动保存了。
- onWindowChange：VS  Code软件失去焦点时，则自动保存。

**方式二**：

当然，你也可以直接在菜单栏选择「文件-自动保存」。勾选后，当你写完代码后，文件会立即实时保存。

### 7、热退出

当VS Code退出后，它可以记住未保存的文件。如果你希望达到这种效果，那么，你需要先将设置项`files.hotExit`的值改为 `onExitAndWindowClose`。这个配置项要不要改，看你个人需要。比如我自己平时设置的值是`onExit`。

![20211012_2014](http://img.smyhvae.com/20211012_2014.png)


### 8、保存代码后，是否立即格式化

保存代码后，默认**不会立即**进行代码的格式化。你可以在设置项里搜索`editor.formatOnSave`查看该配置项：

![](http://img.smyhvae.com/20190417_2213.png)

我觉得这个配置项保持默认就好，不用打钩。

### 9、自动格式化粘贴的内容

在设置项里搜索 `editor.formatOnPaste`，将设置项改为`true`：

![20211012_1049](https://img.smyhvae.com/20211012_1049.png)

### 10、设置字体大小

在设置项里搜索`fontSize`，然后根据需要设置各种模块的字体大小：

![20211012_1053](http://img.smyhvae.com/20211012_1053.png)



### 11、空格 or 制表符

VS Code 会根据你所打开的文件来决定该使用空格还是制表。也就是说，如果你的项目中使用的都是制表符，那么，当你在写新的代码时，按下 tab 键后，编辑器就会识别成制表符。

（1）建议的设置项如下：

- **editor.detectIndentation**：自动检测（默认开启）。建议把这个配置项修改为 false，截图如下：

![20211012_1139](https://img.smyhvae.com/20211012_1139.png)

这样做，是为了取消系统的自动缩进，建议自己手动格式化比较好。 参考链接：https://www.yisu.com/zixun/327399.html

- **editor.insertSpaces**：按 Tab 键时插入空格（默认值为true）。截图如下：

![](http://img.smyhvae.com/20190417_2207.png)

- **editor.tabSize**：一个制表符默认等于四个空格。截图如下：

![](http://img.smyhvae.com/20190417_2209.png)



（2）状态栏也会显示当前的缩进值。点击状态栏，可以直接修改 tabSize 缩进值：

![](http://img.smyhvae.com/20211009_1610.png)



（3）另外，我们还可以安装 prettier 插件，设置代码在格式化时默认缩进值。prettier 是做代码格式化的最常见工具。

![](https://img.smyhvae.com/20211009_1637.png)

（4）去掉每一行末尾的空格。在设置项里搜索`空格`或者`"files.trimTrailingWhitespace"`，将值设置为 true：

![20211012_1231](http://img.smyhvae.com/20211012_1231.png)

一般来说，每一行代码末尾的空格是多余的，所以建议去掉。

### 12、直观地显示代码里的空格和缩进 ✨

代码里如果有缩进或者空格，肉眼是看不出来的，但是我们可以修改配置项，把它揪出来。

在配置项里搜索`editor.renderWhitespace`，修改为`all`：

![20211012_1150](http://img.smyhvae.com/20211012_1150.png)

修改之后，代码里的空格、缩进的展示效果如下：

![20211012_1258](http://img.smyhvae.com/20211012_1258.png)

看到了没？哪里有空格、哪里是缩进，全都一目了然。

### 13、新建文件后的默认文件类型

当我们按下快捷键「Cmd + N」新建文件时，VS Code 默认无法识别这个文件到底是什么类型的，因此也就无法识别相应的语法高亮。

如果你想修改默认的文件类型，可以在设置项里搜索`files.defaultLanguage`，设置项如下：

![](http://img.smyhvae.com/20190417_2221.png)

上图中的红框部分，填入你期望的默认文件类型。我填的是`html`类型，你也可以填写成 `javascript` 或者 `markdown`，或者其他的语言类型。

### 14、删除文件时，是否弹出确认框

当我们在 VS Code 中删除文件时，默认会弹出确认框。如果你想修改设置，可以在设置项里搜索`xplorer.confirmDelete`。截图如下：

![](http://img.smyhvae.com/20190418_1758.png)

我建议这个设置项保持默认的打钩就好，不用修改。删除文件前的弹窗提示，也是为了安全考虑，万一手贱不小心删了呢？

### 15、在新窗口打开文件/文件夹

通过 `window.openFoldersInNewWindow`（默认值为off）和`window.openFilesInNewWindow`（默认值为default），可以配置在打开文件夹、打开文件时，是否开启一个新的窗口。我个人建议，把这两个配置项都设置为 on，避免旧的窗口被覆盖：

![](http://img.smyhvae.com/20211012_1700.png)

补充知识—— `window.restoreWindows`可以用来配置 如何恢复之前的会话窗口。涉及到的场景是：你把 VS Code 关闭了，然后又打开了，是否要展示之前打开过的文件、文件夹？参数值有以下几种：

- one（默认配置）：只会重新打开上一次回话中最后操作的那一个窗口。
- none：打开一个空的窗口，不包含任何文件、文件夹。
- all（建议配置）：恢复上一次会话中的所有窗口。
- folders：恢复上一次会话中包含文件夹的窗口。

![20211012_1704](http://img.smyhvae.com/20211012_1704.png)



> 接下来，我们来讲一些更高级的操作。



## 五、纵享丝滑：常见操作和使用技巧

### 1、快速生成HTML骨架

先新建一个空的html文件，然后通过以下方式，可以快速生成html骨架。

**方式1**：输入`!`，然后按下`enter`键，即可生成html骨架。如下图：

![](https://img.smyhvae.com/20210623-2115.gif)



**方式2**：输入`html:5`，然后按住 `Tab`键，即可生成html骨架。

生成的骨架，内容如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

有了上面的html骨架之后，我们就可以快乐地在里面插入CSS 代码和 JS 代码。

### 2、并排编辑：左右（上下）显示多个编辑器窗口（copy代码利器）

> 并排编辑是所有的编辑操作中最常用的一个技巧，十分有用。比如我们在开发一个项目时，可能需要同时打开 HTML 文件和 CSS 文件，很常见。

Mac 用户按住快捷键 `Cmd + \`， Windows 用户按住快捷键`Ctrl + \`，即可同时打开多个编辑器窗口，进行并排编辑。效果如下：

![](http://img.smyhvae.com/20200619_0030.gif)

按快捷键「Cmd + 1 」切换到左边的窗口，按快捷键「Cmd + 2 」切换到右边的窗口，以此类推。随时随地，想切就切。

学会了这一招，以后 copy 代码的时候，leader 再也不用担心我抄得慢了，一天工资到手。

---

当然，使用快捷键`Cmd + \`只是其中一种方式，我们还有很多种方式打开并行编辑。我们来做一个汇总。

如果你已经打开了一个编辑器，那么可以通过以下几种方式在另一侧打开另一个编辑器：（按照使用频率，从高到低排序）

- 使用快捷键`Cmd + \`将编辑器一分为二。
- 使用快捷键`Cmd + P`调出文件列表，选择要打开的文件，然后按下 `Cmd + Enter`快捷键。【重要】
- 按住 Option 键的同时，单击资源管理器的文件（Windows 用户是按 Alt 键）。
- 点击编辑器右上角的 `Split Editor`按钮。
- 选择菜单栏「查看--> 编辑器布局」，然后选择你具体想要的布局，如下图所示：

![20211012_1451](http://img.smyhvae.com/20211012_1451.png)

- 通过拖拽，把当前文件移动到任意一侧。

补充知识：通过配置项`worbench.editor.OpenSideBySideDirection`可以控制编辑器在并排打开时出现的默认位置（默认值为right，你也可以根据需要改为 down）。如下图所示：

![20211012_1455](http://img.smyhvae.com/20211012_1455.png)

### 3、从终端 code 命令启动 VS Code（Mac电脑）

在终端输入`code`或者输入 `code + 指定项目的目录`，就可以启动 VS  Code，十分便捷。即：

- `code` 命令：启动 VS Code 软件。
- `code pathName/fileName` 命令：通过 VS Code 软件打开指定目录/指定文件。

为了达到目的，我们需要先将 VS Code的软件安装路径添加到环境变量，一劳永逸。具体操作如下：

（1）打开 `bash_profile`文件：

```bash
cd ~
vim ./bash_profile
```

（2）在 bash_profile 中添加如下内容：

```bash
# 从终端启动VS Code，并设置vscode启动的命令别名
alias code="/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code"
```

注意，由于`Visual Studio Code.app`这个路径里有空格，所以需要在空格前面加上反斜杠`\`。

（3）重启环境变量的配置：

```
# 重启
source ~/.bash_profile
```

大功告成。

改完之后，如果没生效，那你把  `bash_profile`文件 换成 `zshrc`文件试试。

参考链接：

- [mac通过终端code 命令打开vscode](https://blog.csdn.net/logan_LG/article/details/106800904)

### 3、从终端 code 命令启动 VS Code（Windows电脑）

在终端输入`code`或者输入 `code + 指定项目的目录`，就可以启动 VS  Code，十分便捷。即：

- `code` 命令：启动 VS Code 软件。
- `code pathName/fileName` 命令：通过 VS Code 软件打开指定目录/指定文件。

为了达到目的，我们需要先将 VS Code的软件安装路径添加到环境变量，一劳永逸。具体操作如下：

（1）打开 VS Code 的安装位置，进入bin文件夹，复制路径。比如：`D:\Microsoft VS Code\bin`。

（2）回到桌面，右键我的电脑-->高级系统设置-->环境变量-->编辑path值，在原来的path后面，追加内容`;D:\Microsoft VS Code\bin`（即英文的分号+VS  Code 的 bin 路径)

（3）重启电脑，大功告成。

改完之后，如果没生效，那八成是因为你填的 path 值有问题。

参考链接：

- [windows使用 code . 命令打开vscode](https://www.cnblogs.com/zyl-Tara/p/10642704.html)

### 4、在当前文件中搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

- Cmd + F（Win 用户是 Ctrl + F）：在当前文件中搜索，光标在搜索框里

- Cmd + G（Win 用户是 F3）：在当前文件中搜索，光标仍停留在编辑器里

多个搜索结果出来之后，按下 Enter 键之后跳转到下一个搜索结果，按下 Shift + Enter 键之后跳转到上一个搜索结果。

另外，你可能会注意到，搜索框里有很多按钮，每个按钮都对应着不同的功能，如下图所示：

![](http://img.smyhvae.com/20190415_2052.png)

上图中，你可以通过「Tab」键和「Shift + Tab」键在输入框和替换框之间进行切换。

「在选定内容中查找」这个功能还是比较实用的。你也可以在设置项里搜索 `editor.find.autoFindInSelection`，勾选该设置项后，那么，当你选中指定内容后，然后按住「Cmd + F」，就可以**自动**只在这些内容里进行查找。该设置项如下图所示：

![](http://img.smyhvae.com/20191108_1655.png)

### 5、全局搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

- Cmd + Shift + F（Win 用户是 Ctrl + Shift +F）：在全局的文件夹中进行搜索。效果如下：

![20211012_1548](http://img.smyhvae.com/20211012_1548.png)

上图中，你可以点击**红框**部分，展开更多的配置项。然后点击**红圈**部分，进行过滤搜索。注意，第二个红圈那里会经常用到，它可以在搜索时过滤掉  `.git`、`.node_modules`等忽略文件。

上图中，我们还可以点击“在编辑器中打开”，在一个单独的文件中聚合展示搜索结果：

![](https://img.smyhvae.com/20211012_1609.png)

### 6、文件名/文件夹的搜索

前面的快捷键那一段我们讲过，通过 「Cmd + P」可以快速搜索并打开**文件**/文件夹。这种方式，一般用于快速打开最近编辑过的文件。

其实还有一种很巧妙的方式，可以在整个项目里，既能搜到文件，也能搜到**文件夹**。这种方式，常用于**过滤项目的目录**。操作方法很简单：

> 直接在文件资源管理器输入关键字就行。搜索结果会自动出现；使用方向键进行上下移动，可以在搜索的文件和文件夹之间进行跳转。
>
> 另外，右上角会看到一个过滤器，点击下图中的红圈部分，则只显示匹配的文件和文件夹。

![20211012_1616](http://img.smyhvae.com/20211012_1616.png)

当然，这招也有一点不足：不能搜中文。

### 7、大纲视图

如下图所示，大纲视图可以展示当前代码的方法结构、文件的目录结构：

![20211012_1628](http://img.smyhvae.com/20211012_1628.png)

![20211012_1636](http://img.smyhvae.com/20211012_1636.png)

### 8、文件对比

VS Code 默认支持**对比两个文件的内容**。选中两个文件，然后右键选择「将已选项进行比较」即可，效果如下：

![](http://img.smyhvae.com/20190329_1756.png)

VS Code 自带的对比功能并不够强大，我们可以安装插件`compareit`，进行更丰富的对比。比如说，安装完插件`compareit`之后，我们可以将「当前文件」与「剪切板」里的内容进行对比：

![](http://img.smyhvae.com/20190329_1757.png)

如果你安装了 GitLens 插件，还可以将两个git分支的代码进行比对，非常完美。

### 9、查找某个函数在哪些地方被调用了

比如我已经在`a.js`文件里调用了 `foo()`函数。那么，如果我想知道`foo()`函数在其他文件中是否也被调用了，该怎么做呢？

做法如下：在 `a.js` 文件里，选中`foo()`函数（或者将光标放置在`foo()`函数上），然后按住快捷键「Shift + F12」，就能看到 `foo()`函数在哪些地方被调用了，比较实用。

### 10、鼠标操作

- 在当前行的位置，鼠标三击，可以选中当前行。

- 用鼠标单击文件的**行号**，可以选中当前行。

- 在某个**行号**的位置，**上下移动鼠标，可以选中多行**。

### 11、重构

重构分很多种，我们来举几个例子。

**命名重构**：

当我们尝试去修改某个函数（或者变量名）时，我们可以把光标放在上面，然后按下「F2」键，那么，这个函数（或者变量名）出现的地方都会被修改。

**方法重构**：

选中某一段代码，这个时候，代码的左侧会出现一个「灯泡图标」，点击这个图标，就可以把这段代码提取为一个单独的函数。

### 12：终端配置

VS Code软件自带了终端，但我个人认为不是很好用，而且VS Code 软件关了之后，终端也没了。建议大家使用其他的终端软件，专业的事情交给专业的人做。

- Windows平台的终端：推荐 PowerShell 软件。远程终端推荐 xshell 软件。
- Mac平台的终端：推荐 [iTerm2 ](https://iterm2.com/)。 iTerm2 是Mac平台最好用的终端软件，没有之一。

**右键行为**：

> 在终端上，单击右键所产生的行为在不同的系统里是不同的。

- Windows：如果有**选定**文本，则复制当前文本；如果没有选定文本，则粘贴。
- macOS：选中光标所在位置的单词，并显示右键菜单。
- Linux：显示右键菜单。

### 13、Git 版本管理

在 VS Code中使用Git之前，需要你先安装 Git 环境。

VS Code 自带了 Git 版本管理的功能，如下图所示：

![](http://img.smyhvae.com/20190418_1850.png)

上图中，我们可以在这里进行常见的 git 命令操作。如果你还不熟悉 **Git 版本管理**，可以先去补补课。

我自己用的最多的功能是**diff 代码**和**合并冲突**，自从用上了  VS Code 的这两个功能，简直离不开它。

我们先来看看 diff 代码的效果：

![20211013_1411](https://img.smyhvae.com/20211013_1411.png)

上图中，点击右上角的`...`，然后点击`内联视图`，则可以换一种视图 diff 代码：

![](https://img.smyhvae.com/20211013_1415.png)

**Git状态栏**：

![20211013_1421](http://img.smyhvae.com/20211013_1421.png)

在VS Code的左下角会显示Git状态栏。如果当前代码仓库配置了远程仓库，那么“同步更改”会显示以下信息：

- 左边的数字：表示远程分支比本地分支多了XX个 Git commit。
- 右边的数字：表示本地分支比远程分支多了XX个 Git commit。

点击“同步更改”按钮，会拉取（pull）远程分支到本地分支，并推送（push）本地的Git commit到远程分支。

如果当前代码仓库没有配置远程仓库，则会显示“发布更改”的按钮。点击“发布更改”按钮，会把当前分支push到远程仓库。

---

另外，我建议安装插件`GitLens`搭配使用，它是 VS Code 中我最推荐的一个插件，简直是 Git 神器，码农必备。

我还要补充一句：

有人说，高手都是直接用命令行操作Git。然而，根据我多年的经验来看，如果你的代码仓库需要管理的分支特别多，与团队的其他成员需要经常协作，那么，我建议你**优先使用** GUI 图形化工具来操作Git，避免出错。

我推荐的GUI版的Git工具有：

- [Tower](https://www.git-tower.com/)
- [Sourcetree](https://www.sourcetreeapp.com/)
- [GitKraken](https://www.gitkraken.com/)

### 14、将工作区放大/缩小

我们在上面的设置项里修改字体大小后，仅仅只是修改了代码的字体大小。

如果你想要缩放整个工作区（包括代码的字体、左侧导航栏的字体等），可以按下快捷键「**cmd +/-**」。windows 用户是按下「ctrl +/-」

**当我们在投影仪上给别人演示代码的时候，这一招十分管用**。

如果你想恢复默认的工作区大小，可以在命令面板输入`重置缩放`（英文是`reset zoom`）

f### 11、创建多层子文件夹

我们可以在新建文件夹的时候，如果直接输入`aa/bb/cc`，比如：

![](http://img.smyhvae.com/20190418_2022.png)

那么，就可以创建多层子文件夹，效果如下：

![](http://img.smyhvae.com/20190418_2023.png)

### 15、`.vscode` 文件夹的作用

为了统一团队的 vscode 配置，我们可以在项目的根目录下建立`.vscode`目录，在里面放置一些配置内容，比如：

- `settings.json`：工作空间设置、代码格式化配置、插件配置。

- `sftp.json`：ftp 文件传输的配置。

`.vscode`目录里的配置只针对当前项目范围内生效。将`.vscode`提交到代码仓库，大家统一配置时，会非常方便。

### 16、自带终端

我们可以按下「Ctrl + `」打开 VS Code 自带的终端。我认为内置终端并没有那么好用，我更建议你使用第三方的终端 **item2**。

### 17、markdown 语法支持

VS Code 自带 markdown 语法高亮。也就是说，如果你是用 markdown 格式写文章，则完全可以用 VS Code 进行写作。

写完 md 文件之后，你可以点击右上角的按钮进行预览，如下图所示：

![](http://img.smyhvae.com/20190418_1907.png)

我一般是安装「Markdown Preview Github Styling」插件，以 GitHub 风格预览 Markdown 样式。样式十分简洁美观。

你也可以在控制面板输入`Markdown: 打开预览`，直接全屏预览 markdown 文件。

### 18、Emmet in VS Code

`Emmet`可以极大的提高 html 和 css 的编写效率，它提供了一种非常简练的语法规则。

举个例子，我们在编辑器中输入缩写代码：`ul>li*6` ，然后按下 Tab 键，即可得到如下代码片段：

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

VS Code 默认支持 Emmet。更多 Emmet 语法规则，可以自行查阅。

### 19、修改字体，使用「Fira Code」字体

这款字体很漂亮，很适合用来写代码：

![](https://img.smyhvae.com/20200516_1633-2.png)

安装步骤如下：

（1）进入 <https://github.com/tonsky/FiraCode> 网站，下载并安装「Fira Code」字体。

（2）打开 VS Code 的「设置」，搜索`font`，修改相关配置为如下内容：

```json
"editor.fontFamily": "'Fira Code',Menlo, Monaco, 'Courier New', monospace", // 设置字体显示
"editor.fontLigatures": false,//控制是否启用字体连字，true启用，false不启用
```

上方的第二行配置，取决于个人习惯，我是直接设置为`"editor.fontLigatures": null`，因为我不太习惯连字。

### 20、代码格式化

VS Code 默认对 JavaScript、TypeScript、JSON、HTML 提供了开箱即用的代码格式化支持。其他语言则需要先安装相应的插件才能支持。

另外，我们还可以安装 Prettier 插件进行**更精细**的代码格式化。下一段将插件的时候，会讲解。

### 21、智能提示 IntelliSense

VS Code 默认对 JavaScript、TypeScript、JSON、HTML、CSS、SCSS、Less这7种语言（文件）提供了**智能提示**的支持。其他编程语言则需要先安装相应的插件才能支持。

在 VS Code插件职场中，下图是最受欢迎的8种[编程语言插件](https://marketplace.visualstudio.com/search?target=VSCode&category=Programming%20Languages&sortBy=Installs)：

![20211013_1120](https://img.smyhvae.com/20211013_1120.png)

智能提示的功能很强大， 包括函数介绍、代码自动补全等等。

### 22、调试与运行

VS Code **内置**了对 Node.js 运行时的调试支持，可以直接调试  JavaScript 和 TypeScript。其他编程语言的调试，则需要先安装相应的插件才能支持。

在 VS Code插件市场中，下图是最受欢迎的几种调试插件：

![](https://img.smyhvae.com/20211013_1650.png)

### 23、文件传输：sftp

如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器（需要先把服务端的配置搭建好），可以安装`sftp`这个插件，很好用。在公司会经常用到。

步骤如下：

（1）安装插件`sftp`。

（2）配置 `sftp.json`文件。 插件安装完成后，输入快捷键「cmd+shift+P」弹出命令面板，然后输入`sftp:config`，回车，当前工程的`.vscode`文件夹下就会自动生成一个`sftp.json`文件，我们需要在这个文件里配置的内容可以是：

- `host`：服务器的 IP 地址

- `username`：用户名

- `privateKeyPath`：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是 ppk 文件）

- `remotePath`：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用 sftp 上传文件之前，要手动在工作站上 mkdir 生成这个根目录

- `ignore`：指定在使用 sftp: sync to remote 的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号

举例如下：(注意，其中的注释需要去掉)

```json
{
  "host": "192.168.xxx.xxx", //服务器ip
  "port": 22, //端口，sftp模式是22
  "username": "", //用户名
  "password": "", //密码
  "protocol": "sftp", //模式
  "agent": null,
  "privateKeyPath": null,
  "passphrase": null,
  "passive": false,
  "interactiveAuth": false,
  "remotePath": "/root/node/build/", //服务器上的文件地址
  "context": "./server/build", //本地的文件地址

  "uploadOnSave": true, //监听保存并上传
  "syncMode": "update",
  "watcher": {
    //监听外部文件
    "files": false, //外部文件的绝对路径
    "autoUpload": false,
    "autoDelete": false
  },
  "ignore": [
    //忽略项
    "**/.vscode/**",
    "**/.git/**",
    "**/.DS_Store"
  ]
}
```

（3）在 VS Code 的当前文件里，选择「右键 -> upload」，就可以将本地的代码上传到 指定的 ftp 服务器上（也就是在上方 `host` 中配置的服务器 ip）。

我们还可以选择「右键 -> Diff with Remote」，就可以将本地的代码和 ftp 服务器上的代码做对比，非常方便。

### 24、沉浸模式/禅模式

程序员写代码需要专注，有时需要进入一种心流。VS Code给我们提供了一种全屏下的沉浸模式，周围的面板都会被隐藏起来，只显示编辑器部分。

操作方法：菜单栏选择「查看-外观-禅模式」即可；或者按下快捷键`Cmd + K`，放手，再按`Z`也可以达到目的。

### 正则表达式批量删除字符串

**需求**：将文本中的字符串`axxxxb`，批量替换为`ab`。其中，开头字符 a 和 结尾字符 b 固定，中间xxx长度不确定。

**解决**：传统查找替换无法胜任。可以使用VScode正则表达式功能，查找`a.*?b`替换为`ab`即可。其中`?`是禁止贪婪匹配，否则会误删很多内容。

---

**拓展需求**：需求——将文本中的字符串`axxxx`，批量替换为`a`。其中，开头字符 a 固定，后面的xxx长度不确定。

**解决**：传统查找替换无法胜任。可以使用VScode正则表达式功能，查找`a.*?\n`替换为`a\n`即可。

## 六、三头六臂：VS Code 插件介绍 & 插件推荐

VS Code 有一个很强大的功能就是支持插件扩展，让你的编辑器仿佛拥有了三头六臂。
### 安装插件

![](http://img.smyhvae.com/20191108_1553_2.png)

上图中，点击红框部分，即可在顶部输入框里，查找你想要的插件名，然后进行安装。

插件安装完成后，记得重启软件（或者点击插件位置的“重新加载”），插件才会生效。

另外，我们还可以访问官网的插件市场来安装插件：

-  VS Code插件市场（官方）：https://marketplace.visualstudio.com/vscode

**插件的安装目录**：

- Windows：：`%USERPROFILE%\.vscode\extensions`
- macOS：`~/.vscode/extensions`
- macOS：`~/.vscode/extensions`
### 插件的类型

![20211013_1757_2](http://img.smyhvae.com/20211013_1757_2.png)

插件市场的首页有四个模块，可以作为重要的信息来源：

- Featured：由  VS Code团队精心推荐的插件。
- Trending：近期热门插件。
- Most Popular：按总安装量排序的插件。
- Recently Added：最新发布的插件。

![20211013_1758](http://img.smyhvae.com/20211013_1758.png)

![20211013_1955](http://img.smyhvae.com/20211013_1955.png)

插件市场至少有17种类型的插件：（按照数量排序）

- Themes：主题插件
- Programming Languages：编程语言插件
- Snippets：代码片段
- Extension Packs：插件包，里面包括多个插件
- Formatters：代码格式化
- Linters：静态检查
- Debuggers：调试器
- Keymaps：快捷键映射
- Visualization：可视化
- Language Packs：各国的语言插件
- Azure：Azure 云计算
- Data Science：数据科学
- SCM Providers：源代码控制管理器（source control manager）
- Notebooks
- Education：教育
- Testing：测试相关
- Machine Learning：机器学习
- Others：其他
### 插件的过滤显示

在 VS  Code中打开插件管理视图，可以针对已安装的插件，进行过滤展示。

1）点击插件视图右上角的`...`按钮，可以展示不同状态的插件：

![20211013_2011](http://img.smyhvae.com/20211013_2011.png)

2）在搜索框输入字符`@`，会展示出不同类型的过滤器：

![20211013_2015](http://img.smyhvae.com/20211013_2015.png)

**常见的过滤器如下**：

1）按大类搜：

- `@builtin`：显示 VS Code内置的插件
- `@disabled`：显示被禁用的插件
- `@enabled`：显示已启用的插件
- `@installed`：显示已安装的插件
- `@outdated`：显示待更新的插件

2）精准搜索：

- `@id`：按id显示插件
- `@tag`：根据标签显示插件。

3）对插件进行排序：

- `@sort:installs`：根据插件的安装量排序
- `@sourt:rating`：根据插件的评分排序
- `@sort:name`：根据插件名字的字母顺序排序

4）组合搜索：（举例）

- `@installed @category:themes`：显示已安装的主题插件。
- `@sort:installs java`：对 Java 相关的插件按照安装量排序。

下面的内容，我来列举一些常见的插件，这些插件都很实用，小伙伴们可以按需安装。注意：每一类插件里，**顺序越靠前，越实用**。

### 1、基本插件

#### Chinese (Simplified) Language Pack for Visual Studio Code

让软件显示为简体中文语言。

### 2、Git 相关插件

#### GitLens 【荐】

我强烈建议你安装插件`GitLens`，它是 VS Code 中我最推荐的一个插件，简直是 Git 神器，码农必备。如果你不知道，那真是 out 了。

GitLens 在 Git 管理上有很多强大的功能，比如：

- 将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。
- 查看某个 commit 的代码改动记录
- 查看不同的分支
- 可以将两个 commit 进行代码对比
- 甚至可以将两个 branch 分支进行整体的代码对比。这一点，简直是 GitLens 最强大的功能。当我们在不同分支 review 代码的时候，就可以用到这一招。

打开你的 Git仓库，未安装  GitLens 时是这样的：

![](http://img.smyhvae.com/20211009_1400.png)

安装了  GitLens 之后是这样的：

![](http://img.smyhvae.com/20211009_1430.png)

上图中，红框部分就是  GitLens 的功能，诸君可以自由发挥。

补充一个有意思的趣事：Python插件、Ruby插件、GitLens插件、Vetur插件，这四个插件的开发者先后加入了微软。

#### Git History

有些同学习惯使用编辑器中的 Git 管理工具，而不太喜欢要打开另外一个 Git UI 工具的同学，这一款插件满足你查询所有 Git 记录的需求。

#### Local History 【荐】

维护文件的本地历史记录。代码意外丢失时，有时可以救命。

![](http://img.smyhvae.com/20200618_2246.png)

### 3、代码智能提示插件

#### Vetur

Vue 多功能集成插件，包括：语法高亮，智能提示，emmet，错误提示，格式化，自动补全，debugger。VS Code 官方钦定 Vue 插件，Vue 开发者必备。
#### ES7 React/Redux/GraphQL/React-Native snippets

React/Redux/react-router 的语法智能提示。
#### JavaScript(ES6) code snippets

ES6 语法智能提示，支持快速输入。

#### javascript console utils：快速打印 log 日志【荐】

安装这个插件后，当我们按住快捷键「Cmd + Shift + L」后，即可自动出现日志 `console.log()`。简直是日志党福音。

当我们选中某个变量 `name`，然后按住快捷键「Cmd + Shift + L」，即可自动出现这个变量的日志 `console.log(name)`。

其他的同类插件还有：Turbo Console Log。

不过，生产环境的代码，还是尽量少打日志比较好，避免出现一些异常。

编程有三等境界：

- 第三等境界是打日志，这是最简单、便捷的方式，略显低级，一般新手或资深程序员偷懒时会用。

- 第二等境界是断点调试，在前端、Java、PHP、iOS 开发时非常常用，通过断点调试可以很直观地跟踪代码执行逻辑、调用栈、变量等，是非常实用的技巧。

- 第一等境界是测试驱动开发，在写代码之前先写测试。与第二等的断点调试刚好相反，大部分人不是很习惯这种方式，但在国外开发者或者敏捷爱好者看来，这是最高效的开发方式，在保证代码质量、重构等方面非常有帮助，是现代编程开发必不可少的一部分。

#### Code Spell Checker：单词拼写错误检查

这个拼写检查程序的目标是帮助捕获常见的单词拼写错误，可以检测驼峰命名。从此告别 Chinglish.

#### Auto Close Tag、Auto Rename Tag

自动闭合配对的标签、自动重命名配对的标签。

### 4、代码显示增强插件

#### Bracket Pair Colorizer 2：突出显示成对的括号【荐】

`Bracket Pair Colorizer 2`插件：以不同颜色显示成对的括号，并用连线标注括号范围。简称**彩虹括号**。

另外，还有个`Rainbow Brackets`插件，也可以突出显示成对的括号。


#### highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】

VSCode 自带的高亮显示，实在是不够显眼。用插件支持一下吧。

所用了这个插件之后，VS Code 自带的高亮就可以关掉了：

在用户设置里添加`"editor.selectionHighlight": false`即可。

参考链接：[vscode 选中后相同内容高亮插件推荐](https://blog.csdn.net/palmer_kai/article/details/79548164)


#### vscode-icons

vscode-icons 会根据文件的后缀名来显示不同的图标，让你更直观地知道每种文件是什么类型的。


#### indent-rainbow：突出显示代码缩进

`indent-rainbow`插件：突出显示代码缩进。

安装完成后，效果如下图所示：

![](http://img.smyhvae.com/20190418_1958.png)


#### TODO Highlight

写代码过程中，突然发现一个 Bug，但是又不想停下来手中的活，以免打断思路，怎么办？按照代码规范，我们一般是在代码中加个 TODO 注释。比如：（注意，一定要写成大写`TODO`，而不是小写的`todo`）

```
//TODO:这里有个bug，我一会儿再收拾你
```

或者：

```
//FIXME:我也不知道为啥， but it works only that way.
```

安装了插件 `TODO Highlight`之后，按住「Cmd + Shift + P」打开命令面板，输入「Todohighlist」，选择相关的命令，我们就可以看到一个 todoList 的清单。

#### Better Comments

为注释添加更醒目、带分类的色彩。

### 5、代码格式化插件

#### Prettier：代码格式化

Prettier 是一个代码格式化工具，**只关注格式化，但不具备校验功能**。在一个多人协同开发的团队中，统一的代码编写规范非常重要。一套规范可以让我们编写的代码达到一致的风格，提高代码的可读性和统一性。自然维护性也会有所提高，代码的展示也会更加美观。

步骤如下：

（1）安装插件 `Prettier`。

（2）在项目的根路径下，新建文件`.prettierrc`，并在文件中添加如下内容：

```json
{
  "printWidth": 150,
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tslintIntegration": true,
  "insertSpaceBeforeFunctionParenthesis": false
}
```

上面的内容，是我自己的配置，你可以参考。更多配置，可见官方文档：<https://prettier.io/docs/en/options.html>


（3）Mac用户按快捷键「Option + Shift + F」，Win 用户按快捷键「Alt + shift + F」，即可完成代码的格式化。如果你的VS Code 设置的是自动格式化代码，那么这一步可以忽略。


#### ESLint：代码格式的校验

日常开发中，建议用 Prettier 做**代码格式化**，然后用 eslint 做**格式校验**。很多人把这两个插件的功能弄混了。

一般做法是：格式化建议是由程序员手动触发，格式校验由系统强制校验。通过 Prettier **手动**触发格式化，是为了让用户有感知；通过eslint 做**强制**校验之后，如果代码的格式不符合要求，系统就禁止你提交代码。

#### Beautify

代码格式化工具。

备注：相比之下，Prettier 是当前最流行的代码格式化工具，比 Beautify 用得更多。

#### Paste JSON as Code

此插件可以将剪贴板中的 JSON 字符串转换成工作代码。支持多种语言。

#### JS-CSS-HTML Formatter【荐】

保存文件时，自动格式化 HTML、CSS、JS代码。



### 6、图片相关插件

#### Polacode-2020：生成代码截图 【荐】

可以把代码片段保存成美观的图片，主题不同，代码的配色方案也不同，也也可以自定义设置图片的边框颜色、大小、阴影。

尤其是在我们做 PPT 分享时需要用到代码片段时，或者需要在网络上优雅地分享代码片段时，这一招很有用。

生成的效果如下：

![](http://img.smyhvae.com/20200619_1403.png)

其他同类插件：`CodeSnap`。我们也可以通过 <https://carbon.now.sh/>这个网站生成代码图片

有人可能会说：直接用 QQ 截图不行吗？可以是可以，但不够美观、不够干净。

#### Image Preview 【荐】

图片预览。鼠标移动到图片 url 上的时候，会自动显示图片的预览和图片尺寸。



### 7、CSS相关插件

#### CSS Peek

增强 HTML 和 CSS 之间的关联，快速查看该元素上的 CSS 样式。

#### Vue CSS Peek

CSS Peek 对 Vue 没有支持，该插件提供了对 Vue 文件的支持。

#### Color Info

这个便捷的插件，将为你提供你在 CSS 中使用颜色的相关信息。你只需在颜色上悬停光标，就可以预览色块中色彩模型的（HEX、 RGB、HSL 和 CMYK）相关信息了。



### 8、Mardown 相关插件

#### Markdown Preview Github Styling 【荐】

以 GitHub 风格预览 Markdown 样式，十分简洁优雅。就像下面这样，左侧书写 Markdown 文本，右侧预览 Markdown 的渲染效果：

![](http://img.smyhvae.com/20200618_2025.png)

#### Markdown Preview Enhanced

预览 Markdown 样式。

#### Markdown All in One

这个插件将帮助你更高效地在 Markdown 中编写文档。



### 9、通用工具类插件

#### sftp：文件传输 【荐】

如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器，可以安装`sftp`这个插件，很好用。在公司会经常用到。

详细配置已经在上面讲过。

#### Live Server 【荐】

在本地启动一个服务器，代码写完后可以实现「热更新」，实时地在网页中看到运行效果。就不需要每次都得手动刷新页面了。

使用方式：安装插件后，开始写代码；代码写完后，右键选择「Open with Live Server」。

#### open in browser

安装`open in browser`插件后，在 HTML 文件中「右键选择 --> Open in Default Browser」，即可在浏览器中预览网页。


#### Project Manager

工作中，我们经常会来回切换多个项目，每次都要找到对应项目的目录再打开，比较麻烦。Project Manager 插件可以解决这样的烦恼，它提供了专门的视图来展示你的项目，我们可以把常用的项目保存在这里，需要时一键切换，十分方便。

#### WakaTime 【荐】

统计在 VS Code 里写代码的时间。统计效果如下：

![](http://img.smyhvae.com/20200618_2300.png)

#### Code Time

`Code Time`插件：记录编程时间，统计代码行数。

安装该插件后，VS Code 底部的状态栏右下角可以看到时间统计。点击那个位置之后，选择「Code Time Dashboard」，即可查看统计结果。

备注：团长试了一下这个 code time 插件，发现统计结果不是很准。

#### File Tree to Text Generator：快速生成文件的目录树

如题。

#### Settings Sync

- 地址：<https://github.com/shanalikhan/code-settings-sync>

- 作用：多台设备之间，同步 VS Code 配置。通过登录 GitHub 账号来使用这个同步工具。

同步的详细操作，下一段会讲。

另外，北京时间的[2020年8月14日](https://zhuanlan.zhihu.com/p/184868336)，微软发布 Visual Studio Code 1.48 稳定版。此版本**原生**支持用户同步 VS Code的配置，只需要登录微软账号或者 GitHub账号即可。

#### vscode-syncing

- 地址：<https://github.com/nonoroazoro/vscode-syncing>

- 作用：多台设备之间，同步 VS Code 配置。

#### minapp：小程序支持

小程序开发必备插件。




#### Search node_modules

`node_modules`模块里面的文件夹和模块实在是太多了，根本不好找。好在安装 `Search node_modules` 这个插件后，输入快捷键「Cmd + Shift + P」，然后输入 `node_modules`，在弹出的选项中选择 `Search node_modules`，即可搜索 node_modules 里的模块。

![](http://img.smyhvae.com/20200618_2100.png)





#### RemoteHub

不要惊讶，RemoteHub 和 GitLens 是同一个作者开发出来的。

`RemoteHub`插件的作用是：可以在本地查看 GitHub 网站上的代码，而不需要将代码下载到本地。

![](http://img.smyhvae.com/20190418_1937.png)

这个插件目前使用的人还不多，赶紧安装起来尝尝鲜吧。

#### Live Share：实时编码分享

`Live Share`这个神奇的插件是由微软官方出品，它的作用是：**实时编码分享**。也就是说，它可以实现你和你的同伴一起写代码。这绝对就是**结对编程**的神器啊。

安装方式：

打开插件管理，搜索“live share”，安装。安装后重启 VS Code，在左侧会多出一个按钮：

![](http://img.smyhvae.com/20190418_2012.png)

上图中，点击红框部分，登录后就可以分享你的工作空间了。

![](http://img.smyhvae.com/20190418_2005.png)

#### Import Cost

在项目开发过程中，我们会引入很多 npm 包，有时候可能只用到了某个包里的一个方法，却引入了整个包，导致代码体积增大很多。`Import Cost`插件可以在代码中友好的提示我们，当前引入的包会增加多少体积，这很有助于帮我们优化代码的体积。

### 10、主题插件

给你的 VS Code 换个皮肤吧，免费的那种。

- Dracula Theme

- Material Theme

- Nebula Theme

- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

- One Monokai Theme

- Monokai Pro

- Ayu

- [Snazzy Plus](https://marketplace.visualstudio.com/items?itemName=akarlsten.vscode-snazzy-akarlsten)

- [Dainty](https://marketplace.visualstudio.com/items?itemName=alexanderte.dainty-vscode)

- `SynthWave '84`

- GitHub Plus Theme：白色主题

- Horizon Theme：红色主题



## 七、无缝切换：VS Code 配置云同步

我们可以将配置云同步，这样的话，当我们换个电脑时，即可将配置一键同步到本地，就不需要重新安装插件了，也不需要重新配置软件。

下面讲的两个同步方法，都可以，看你自己需要。方法1是 VS Code自带的同步功能，操作简单。方法2 需要安装插件，支持更多的自定义配置。

### 方法1：使用 VS Code 自带的同步功能

1、**配置同步**：

（1）在菜单栏选择「 Code --> 首选项 --> 打开设置同步」：

![](https://img.smyhvae.com/20211008_1713.png)



（2）选择需要同步的配置：

![](http://img.smyhvae.com/20211008_1716.png)



（3）通过Microsoft或者GitHub账号登录。 上图中，点击“登录并打开”，然后弹出如下界面：

![](http://img.smyhvae.com/20211008_1717.png)

上图中，使用  微软账号或者 GitHub账号登录：

![](https://img.smyhvae.com/20211008_1718.png)

（4）同步完成后，菜单栏会显示“首先项同步已打开”，最左侧也会多出一个同步图标，如下图所示：

![](https://img.smyhvae.com/20211008_1720.png)

2、**管理同步**：

（1）点击菜单栏「Code --> 首选项 --> 设置同步已打开」，会弹出如下界面，进行相应的同步管理即可：

![](https://img.smyhvae.com/20211008_1736.png)

（2）换另外一个电脑时，登录相同的账号，即可完成同步。

参考链接：

- [VS Code原生的配置同步功能——Settings Sync](https://blog.csdn.net/baidu_33340703/article/details/106967884)

### 方法2：使用插件 `settings-sync`

使用方法2，我们还可以把配置分享其他用户，也可以把其他用户的配置给自己用。

1、**配置同步**：（将自己本地的配置云同步到 GitHub）

（1）安装插件 `settings-sync`。

（2）安装完插件后，在插件里使用 GitHub 账号登录。

（3）登录后在 vscode 的界面中，可以选择一个别人的 gist；也可以忽略掉，然后创建一个属于自己的 gist。

（4）使用快捷键 「Command + Shift + P」，在弹出的命令框中输入 sync，并选择「更新/上传配置」，这样就可以把最新的配置上传到 GitHub。

2、**管理同步**：（换另外一个电脑时，从云端同步配置到本地）

（1）当我们换另外一台电脑时，可以先在 VS Code 中安装 `settings-sync` 插件。

（2）安装完插件后，在插件里使用 GitHub 账号登录。

（3）登录之后，插件的界面上，会自动出现之前的同步记录：

![](http://img.smyhvae.com/20200521_1530.png)

上图中，我们点击最新的那条记录，就可将云端的最新配置同步到本地：

![](http://img.smyhvae.com/20200521_1550.png)

如果你远程的配置没有成功同步到本地，那可能是网络的问题，此时，可以使用快捷键 「Command + Shift + P」，在弹出的命令框中输入 sync，并选择「下载配置」，多试几次。

**使用其他人的配置**：

如果我们想使用别人的配置，首先需要对方提供给你 gist。具体步骤如下：

（1）安装插件 `settings-sync`。

（2）使用快捷键 「Command + Shift + P」，在弹出的命令框中输入 sync，并选择「下载配置」

（3）在弹出的界面中，选择「Download Public Gist」，然后输入别人分享给你的 gist。注意，这一步不需要登录 GitHub 账号。

## 最后一段

如果你还有什么推荐的 VS Code 插件，欢迎留言。

大家完全不用担心这篇文章会过时，随着 VS Code 的版本更新和插件更新，本文也会随之更新。关于 VS Code 内容的后续更新，你可以关注我在 GitHub 上的前端入门项目，项目地址是：

> https://github.com/qianguyihao/Web

一个超级详细和真诚的前端入门项目。
## todo

- [issues 84](https://github.com/qianguyihao/Web/issues/84)

## 参考链接
### 2021年

- 中文版 Awesome VS Code：https://github.com/formulahendry/awesome-vscode-cn

### 2020年

- [VSCode 插件大全｜ VSCode 高级玩家之第二篇](https://juejin.im/post/5ea40c6751882573b219777d)

- <http://www.supuwoerc.xyz/tools/vscode/plugins.html>

- [如何让 VS Code 更好用 10 倍？这里有一份 VS Code 新手指南](https://zhuanlan.zhihu.com/p/99462672)

- [那些你应该考虑卸载的 VSCode 扩展](https://lyreal666.com/%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%BA%94%E8%AF%A5%E8%80%83%E8%99%91%E5%8D%B8%E8%BD%BD%E7%9A%84-VSCode-%E6%89%A9%E5%B1%95/#more)

- [VS Code 折腾记 - (16) 推荐一波实用的插件集](https://juejin.im/post/5d74eb5c51882525017787d9)

- [VSCode 前端必备插件，有可能你装了却不知道如何使用？](https://juejin.im/post/5db66672f265da4d0e009aad)

- [能让你开发效率翻倍的 VSCode 插件配置（上）](https://juejin.im/post/5a08d1d6f265da430f31950e)

- [https://segmentfault.com/a/1190000012811886](https://segmentfault.com/a/1190000012811886)

- [「Vscode」打造类 sublime 的高颜值编辑器](https://idoubi.cc/2019/07/08/vscode-sublime-theme/)

- [Mac Vscode 快捷键](https://lsqy.tech/2020/03/14/20200314Mac-Vscode%E5%BF%AB%E6%8D%B7%E9%94%AE/)

- [使用 VSCode 的一些技巧](https://mp.weixin.qq.com/s?src=11&timestamp=1591581536&ver=2387&signature=i4xLZlLe1Gkl7OiBIhPO*VSeNB5lzFgTY-dgNW9E9ZbtIAv4bnJ1RdAAZdhvDw*cg-DmMcUa-V8NSUdV-tthmXZCq3ht4edCweq6v0QxKjnh8IuAxyyh5qymdRui*8iE&new=1)

---

本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

![](https://img.smyhvae.com/20210329_1930.png)