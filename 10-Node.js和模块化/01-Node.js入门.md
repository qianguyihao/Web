
> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8492713.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## Node.js的介绍


### 引擎

**引擎的特性**：

JS的内核即**引擎**。因为引擎有以下特性：

（1）转化的作用：

-  汽油柴油等等->动能

- 模板+数据--->页面

- js引擎：js 代码--->机器码\字节码

（2）移植性。


**有哪些引擎**：

![](http://img.smyhvae.com/20180302_1258.png)


备注：Node是用V8引擎去解析 js，此时，我们不用去考虑浏览器的兼容性问题。

### 什么是 Node.js

**1、官方解释：**

Node.js 是一个基于 **Chrome V8** 引擎的 JavaScript 运行环境。 Node.js使用了一个**事件驱动**、**非阻塞式I/O**的模型（ Node.js的特性），使其轻量级又高效。 Node.js 的包管理器 npm 是全球最大的开源库生态系统。

![](http://img.smyhvae.com/20180301_1540.png)

如上图所示：

- Node 内部采用 Google Chrome 的 V8 引擎，作为 JavaScript 语言解释器；

- 通过自行开发的 libuv 库，调用操作系统资源。


**2、非官方解释：**

**Node.js**：是 JavaScript 语言在服务器端的运行环境（平台）。

**3、运行环境（平台）的含义：**

- 首先，JavaScript 语言通过 Node 在服务器运行，在这个意义上，Node 有点像 JavaScript 虚拟机。

- 其次，Node 提供大量工具库，使得 JavaScript 语言能与操作系统互动（比如读写文件、新建子进程），在这个意义上， Node 又是 JavaScript 的工具库。

**总结：**

**Node.js 是一个 JavaScript 的运行环境（平台）**，不是一门语言，也不是 JavaScript 的框架。

- 与PHP、JSP、Python、Perl、Ruby的“既是语言，也是平台”不同，Node.js的使用JavaScript进行编程，运行在 Chrome 的 V8 引擎上。

- 与PHP、JSP等相比（PHP、JSP、.net都需要运行在服务器程序上，Apache、Naginx、Tomcat、IIS。
），Node.js跳过了Apache、Naginx、IIS等HTTP服务器，它自己不用建设在任何服务器软件之上。Node.js的许多设计理念与经典架构（LAMP = Linux + Apache + MySQL + PHP）有着很大的不同，可以提供强大的伸缩能力。Node.js没有web容器。


### Node 的历史

- 2008年左右，随着 AJAX 的逐渐普及，Web 开发逐渐走向复杂化，系统化；

- 2009年2月，Ryan Dahl 想要创建一个轻量级，适应现代 Web 开发的平台；

- 2009年5月，Ryan Dahl 在 GitHub 中开源了最初版本，同年11月，JSConf 就安排了 Node 讲座；

- 2010年底，Joyent 公司资助，Ryan Dahl 也加入了该公司，专门负责 Node 的开发；

- 2011年7月，在微软的支持下登陆 Windows 平台。PS：node 的生产环境基本是在 Linux 下。

据 Node.js 创始人 Ryan Dahl 回忆，他最初希望采用 Ruby，但是 Ruby 的虚拟机效率不行。

注意：是 Node 选择了 JavaScript，不是 JavaScript 发展出来了一个 Node。

### 国内外的应用情况

以下几个项目都用到了 Node：

- https://github.com/nodejs/node-v0.x-archive/wiki/Projects,-Applications,-and-Companies-Using-Node

- https://nodejs.org/en/foundation/members/

- https://github.com/NetEase/pomelo


还有以下几个网站：

- LinkedIn移动版From RoR to Node.js, base on Joyent

- Paypal From Java to Node.js

- Twitter的队列：收集需要保存的Tweets，传给负责写入的进程

- 知乎的推送

- 网易、阿里、各种创业团队等




### Node.js的主要应用领域

- RESTFul API

- 实时通信：如消息推送等

- 高并发

- I/O阻塞



### 知名度较高的Node.js开源项目

![](http://img.smyhvae.com/20180301_2009.png)

- express：Node.js中最有名的web服务器框架。

- PM2：node 本来是单进程的，PM2可以实现和管理多进程。

- jade：非常优秀的模板引擎，不仅限于 js 语言。

- CoffeeScript：用简洁的方式展示 JavaScript 优秀的部分。

- Atom：文本编辑器。

- socket.io：实时通信框架。

- mocha：功能强大的 node.js 测试框架。


## Node.js的特点

### 单线程







## Node.js 的环境配置

### Node.js 安装包（不推荐）

去 Node.js 的[官网](https://nodejs.org/en/)下载安装包：

![](http://img.smyhvae.com/20180301_1505.png)

我们也可以在<https://nodejs.org/en/download/releases/>上下载历史版本。

![](http://img.smyhvae.com/20180301_1507.png)


注意，我们以一定要用偶数版（V4、V6等)，不要用奇数版（比如V5），因为奇数版不稳定。

我们并不推荐直接采用 Node.js.msi 安装包进行安装，不方便 node 的更新，原因如下：

- 以前版本安装的很多全局的工具包需要重新安装；

- 无法回滚到之前的版本；

- 无法在多个版本之间切换（很多时候我们要使用特定版本）。


因此，我们暂时先不用安装 Node.js，稍后用 NVM 的方式来安装 Node.js。


### 通过 NVM 安装Node.js（推荐）

**NVM**：node.js version manager，用来管理 node 的版本。安装的步骤如下。

（1）我们去[官网](https://github.com/coreybutler/nvm-windows/releases)下载 NVM 的安装包：

![](http://img.smyhvae.com/20180301_1603.png)

下载下来后，直接解压到 `D:\web`目录下：

![](http://img.smyhvae.com/20180301_1610.png)

（2）在上面的目录中，新建一个`settings.txt`文件，里面的内容填充如下：


```bash
root: D:\web\nvm
path: D:\web\nodejs
arch: 64
proxy
```

上方内容的解释：

- root 配置为：当前 nvm.exe 所在的目录

- path 配置为：node 快捷方式所在的目录

- arch 配置为：当前操作系统的位数（32/64）

- proxy 不用配置

（3）配置环境变量：

- `NVM_HOME` = `D:\web\nvm`（当前 nvm.exe 所在目录）

- `NVM_SYMLINK` = `D:\web\nodejs` （node 快捷方式所在的目录）

- PATH += `;%NVM_HOME%;%NVM_SYMLINK%`

配置成功后，重启资源管理器。

**验证：**(在 cmd 中输入命令)

（1）输入`nvm`命令查看环境变量是否配置成功：

![](http://img.smyhvae.com/20180301_1645.png)


（2）输入 `nvm ls`，查看已安装的所有 node 版本。

（3）输入 `nvm -v`，查看 已安装的 nvm 版本。

（4）输入 `node -v`，查看正在使用的 node 版本。


- **参考链接**：[安装npm，nvm，node](https://segmentfault.com/a/1190000011114680)

如果 node 安装失败，可以参考上面这个链接。

### NVM 的常用命令



查看当前使用的 nvm 版本：

```
nvm -v

nvm --version
```


查看本地安装的所有的 node 版本：

```
nvm list|ls
```


**安装指定版本的node：**

```
nvm install 版本号 [arch]
```

比如：`nvm install 8.10.0`。

卸载指定版本node：

```
nvm uninstall 版本号
```

切换使用指定版本的node：

```
nvm use 版本号 [arch]
```

### Node 的常用命令

查看 node 的版本：

```
$ node -v
```

执行脚本字符串：

```
$ node -e 'console.log("Hello World")'
```

运行脚本文件：

```
$ node index.js

$ node path/index.js

$ node path/index
```

查看帮助：


```
$ node --help

```

**进入 REPL 环境：**

```
$ node
```


REPL 的全称：Read、Eval、 Print、Loop。类似于浏览器的控制台。

![](http://img.smyhvae.com/20180301_1900.png)

如果要退出 REPL 环境，可以输入`.exit` 或 `process.exit() `。

在 VS Code 里，我们可以在菜单栏选择“帮助->切换开发人员工具”，打开console控制台。



## 包和 NPM

### 什么是包


由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念：
与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用。

Node 本身并没有太多的功能性 API，所以市面上涌现出大量的第三方人员开发出来的 Package。

### 包的加载机制

如果 Node中自带的包和第三方的包名冲突了，该怎么处理呢？原则是：

- 先在系统核心（优先级最高）的模块中找；

- 然后到当前项目中 node_modules 目录中找。


比如说：

```
requiere(`fs`)
```

那加载的肯定是系统的包。所以，我们尽量不要创建一些和现有的包重名的包。


### NPM的概念

>包的生态圈一旦繁荣起来，就必须有工具去来管理这些包。NPM 应运而生。

**NPM**：Node Package Manager。官方链接： <https://www.npmjs.com/>

随着时间的发展，NPM 出现了两层概念：

- 一层含义是 Node 的开放式模块登记和管理系统，亦可以说是一个生态圈，一个社区。

- 另一层含义是 Node 默认的模块管理器，是一个命令行下的软件，用来安装和管理 Node 模块。

### NPM 的安装（不需要单独安装）

NPM 不需要单独安装。默认在安装 Node 的时候，会连带一起安装 NPM：

![](http://img.smyhvae.com/20180302_1105.png)

NVM、Node、NPM 安装之后，目录分布如下：

![](http://img.smyhvae.com/20180302_1134.png)

![](http://img.smyhvae.com/20180302_1137.png)

![](http://img.smyhvae.com/20180302_1138.png)

输入 `npm -v`，查看 npm 的版本：

![](http://img.smyhvae.com/20180302_1139.png)

如果上方命令无效，可能是之前的 node 并没有完全安装成功。解决办法：<https://segmentfault.com/a/1190000011114680>

另外，Node 附带的 NPM 可能不是最新版本，可以用下面的命令，更新到最新版本：

```
$ npm install npm -g
```


### 配置 NPM 的全局目录（暂略）

NPM 默认安装到当前正在使用 Node 版本所在目录下。我们建议重新配置 NPM 的全局目录。

输入`npm config ls`，查看：

![](http://img.smyhvae.com/20180302_1210.png)


### NPM的常用命令

- npm init --yes

项目的初始化。执行完成后，会生成`package.json`文件。

- npm install [package]

只在当前工程下安装 package。

- npm install -g [package]

在全局环境下安装 package。

- npm run [script]


## NRM的安装(Win 和 Mac 通用)

由于 NPM 的资源都在国外，有时候会被墙，导致无法下载或者很慢。此时可以用到NRM。

**NRM**：Node Registry Manager。作用是：**切换和管理包的镜像源**。

- 项目地址：<https://www.npmjs.com/package/nrm>

- GitHub地址： <https://github.com/Pana/nrm>

安装 NRM：

```
	npm install -g nrm
```

![](http://img.smyhvae.com/20180302_1208.png)



**NRM 的常用命令：**

```
nrm ls  //显示全部的镜像

nrm use taobao  // 使用淘宝的镜像
```

效果入下：

![](http://img.smyhvae.com/20180302_1215.png)


推荐的国内加速镜像淘宝：<https://npm.taobao.org/>


## 安装cnpm

- 项目地址：<https://npm.taobao.org/>

安装`cnpm`替换npm（npm由于源服务器在国外，下载node包速度较慢，cnpm使用国内镜像）：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```


![](http://img.smyhvae.com/20180302_2204.png)


如果我们需要通过 cnpm 去安装一个包时，举例如下：

```
	cnpm i vue
```


解释： i  指的就是 install。



## Node 的使用

我们可以输入`node`命令，然后在里面写 js 的代码，也可以 通过 node 运行 js 文件。比如，编写好一个 js文件`01.js`，然后在命令行输入：

```
	node 01.js
```

就可以执行  js 程序。


## Mac 下的环境安装


### Mac 下安装 NVM

（1）打开 终端.app，输入：

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

安装成功的界面：

![](http://img.smyhvae.com/20180302_2126.png)

完成后，nvm就被安装在了`~/.nvm`下。


如果发现安装失败：

![](http://img.smyhvae.com/20180302_2111.png)

原因：Xcode 软件进行过更新。

解决办法：打开 Xcode 软件，同意相关内容即可。


（2）配置环境变量：

打开文件：

```
open  ～／.bash_profile
```

在最后一行输入：

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```


如果你发现文件中已经存在了上面这行代码，就不用往里面加了。


最后，重启终端软件，输入`nvm`试试。

PS：NVM 现在已经不支持 Homebrew 的方式来安装了。


参考链接：<https://www.jianshu.com/p/a3f8778bc0a1>


### Mac 下安装 Node（通过nvm安装）

和Windows下一样，也是执行如下命令：

```
nvm install 8.10.0
```

网速有点慢，要稍等。

![](http://img.smyhvae.com/20180302_2148.png)

输入 `node -v`，查看当前使用的 node 版本。

安装好 `Node` 之后，`npm` 也会自动安装的，输入 `npm -v`，查看 npm 的版本。



## 我的公众号

想学习<font color=#0000ff>**代码之外的技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)



