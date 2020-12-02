
## Node.js 运行环境配置：通过 Node.js 安装包（不推荐）

去 Node.js 的[官网](https://nodejs.org/en/)下载安装包：

![](http://img.smyhvae.com/20180301_1505.png)

我们也可以在<https://nodejs.org/en/download/releases/> 里下载历史版本。

![](http://img.smyhvae.com/20180301_1507.png)

注意，我们以一定要用偶数版（V4、V6 等)，不要用奇数版（比如 V5），因为奇数版不稳定。

后续如果需要安装其他版本，可以这样做：重新下载最新的安装包，覆盖安装即可。

但我们并不推荐直接采用 Node.js.msi（windows）或者 Node.js.pkg（Mac） 安装包进行安装，因为会产生如下问题。

**通过 Node.js 安装包产生的问题**：

-   安装新版本时，需要覆盖就版本；而且以前版本安装的很多全局工具包，需要重新安装。

-   无法回滚到之前的旧版本。

-   无法在多个版本之间切换（很多时候，不同的项目需要使用特定版本。或者，我想临时尝鲜一下新版本的特性）

因此，我们暂时先不用安装 Node.js，稍后用 NVM 的方式来安装 Node.js。通过 NVM 的方式，可以让多个版本的 Node.js 共存，并灵活切换。

### Node.js 版本常识

-   偶数版本为稳定版（0.6.x ，0.8.x ，8.10.x）

-   奇数版本为非稳定版（0.7.x ，0.9.x ，9.11.x）

-   LTS（Long Term Support）

参考链接：[node.js 中 LTS 和 Current 的区别](https://blog.csdn.net/u012532033/article/details/73332099)

## Node.js 运行环境安装：通过 NVM（推荐）

**[NVM](https://github.com/nvm-sh/nvm)**：node.js version manager，用来管理 node 的版本。

**我们可以先安装 NVM，然后通过 NVM 安装 Node.js**。这是官方推荐的做法。

Windows 和 Mac 下安装的 Node.js 的步骤如下。

### Windows 系统安装 Node.js

**1、安装 NVM**：

（1）我们去 <https://github.com/coreybutler/nvm-windows/releases> 下载 NVM 的安装包：

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

-   root 配置为：当前 nvm.exe 所在的目录

-   path 配置为：node 快捷方式所在的目录

-   arch 配置为：当前操作系统的位数（32/64）

-   proxy 不用配置

（3）配置环境变量：

-   `NVM_HOME` = `D:\web\nvm`（当前 nvm.exe 所在目录）

-   `NVM_SYMLINK` = `D:\web\nodejs` （node 快捷方式所在的目录）

-   PATH += `;%NVM_HOME%;%NVM_SYMLINK%`

配置成功后，重启资源管理器。

**2、验证：**(在 cmd 命令行中输入命令)

（1）输入`nvm`命令查看环境变量是否配置成功：

![](http://img.smyhvae.com/20180301_1645.png)

（2）输入 `nvm ls`，查看已安装的所有 node 版本。

（3）输入 `nvm -v`，查看 已安装的 nvm 版本。

（4）输入 `node -v`，查看正在使用的 node 版本。

-   **参考链接**：[安装 npm，nvm，node](https://segmentfault.com/a/1190000011114680)

如果 Node 安装失败，可以参考上面这个链接。

**3、安装指定版本的 Node.js**：

```bash
nvm install 版本号

# 举例
nvm install 8.10.0
```

输入 `node -v`，查看当前使用的 node 版本。

关于 NVM 的常用命令，详见下一段。

### Mac 系统安装 Node.js

**1、安装 NVM**：

（1）打开 终端.app，输入：

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

安装成功的界面：

![](http://img.smyhvae.com/20180302_2126.png)

完成后，nvm 就被安装在了`~/.nvm`下。

如果发现安装失败：

![](http://img.smyhvae.com/20180302_2111.png)

原因：Xcode 软件进行过更新。

解决办法：打开 Xcode 软件，同意相关内容即可。

（2）配置环境变量：

编辑器打开`~/.bash_profile`文件，如果不会就输入`open ~/.bash_profile`。

（补充：如果你的 Mac 电脑里找不到`~/.bash_profile`文件，那就找找有没有`~/.profile`文件，或者`~/.bashrc`文件，或者`~/.zshrc`文件。如果还是没有，那你就手动创建一个`~/.bash_profile`文件）。

在最后一行输入：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

如果你发现文件中已经存在了上面这行代码，就不用往里面加了。这一步的作用是每次新打开一个 bash，nvm 都会被自动添加到环境变量中。

最后，输入 `source ~/.bash_profile`重启环境变量的配置。

PS：NVM 现在已经不支持 Homebrew 的方式来安装了。

参考链接：<https://www.jianshu.com/p/a3f8778bc0a1>

**2、验证：**(在 终端命令行中输入命令)

（1）输入 `nvm` 命令查看环境变量是否配置成功：

（2）输入 `nvm ls`，查看已安装的所有 node 版本。

（3）输入 `nvm -v`，查看 已安装的 nvm 版本。

（4）输入 `node -v`，查看正在使用的 node 版本。

**3、安装指定版本的 Node.js**：

和 Windows 下一样，也是执行如下命令：

```bash
nvm install 版本号

# 举例
nvm install 8.10.0
```

网速有点慢，要稍等。

![](http://img.smyhvae.com/20180302_2148.png)

输入 `node -v`，查看当前使用的 node 版本。

安装好 `Node` 之后，`npm` 也会自动安装的，输入 `npm -v`，查看 npm 的版本。

关于 NVM 的常用命令，详见下一段。

## NVM 的常用命令

> 注意，这一段说的是 NVM 的常用命令，不是 Node 的常用命令。

查看当前使用的 nvm 版本：

```bash
nvm --version
```

查看本地安装的所有的 Node.js 版本：

```bash
# 方式1
nvm ls

# 方式2
nvm list
```

**安装指定版本的 Node.js：**

```bash
nvm install 版本号

# 举例
nvm install 8.10.0
```

卸载指定版本 Node.js：

```bash
nvm uninstall 版本号
```

**切换使用指定版本的 node**：

```bash
nvm use 版本号
```

**设置node的默认版本**：

```bash
nvm alias default 版本号
```


**查看全局npm包的安装路径**：

```
npm root -g
```


查看远程服务器端的所有 Node 版本：

```bash
nvm ls-remote
```

执行上面的命令后，在列出的版本清单中，凡是用 `Latest LTS`标注的版本，则表明是**长期维护**的版本。我们在安装时，建议安装这些版本。当然，我们也可以在网址 <https://nodejs.org/en/download/releases/> 查看 LTS 的历史版本。

## Node.js 的常用命令

查看 node 的版本：

```bash
$ node -v
```

执行脚本字符串：

```bash
$ node -e 'console.log("Hello World")'
```

运行脚本文件：

```bash
$ node index.js

$ node path/index.js

$ node path/index
```

查看帮助：

```bash
$ node --help

```

**进入 REPL 环境：**

```bash
$ node
```

REPL 的全称：Read、Eval、 Print、Loop。类似于浏览器的控制台。

![](http://img.smyhvae.com/20180301_1900.png)

如果要退出 REPL 环境，可以输入`.exit` 或 `process.exit()`。

在 VS Code 里，我们可以在菜单栏选择“帮助->切换开发人员工具”，打开 console 控制台。

## 包和 NPM

### 什么是包

由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念：
与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用。

Node 本身并没有太多的功能性 API，所以市面上涌现出大量的第三方人员开发出来的 Package。

### 包的加载机制

如果 Node 中自带的包和第三方的包名冲突了，该怎么处理呢？原则是：

-   先在系统核心（优先级最高）的模块中找；

-   然后到当前项目中 node_modules 目录中找。

比如说：

```javascript
requiere(`fs`);
```

那加载的肯定是系统的包。所以，我们尽量不要创建一些和现有的包重名的包。

### NPM 的概念

**NPM**：Node Package Manager。官方链接： <https://www.npmjs.com/>

Node.js 发展到现在，已经形成了一个非常庞大的生态圈。包的生态圈一旦繁荣起来，就必须有工具去来管理这些包。NPM 应运而生。

举个例子，当我们在使用 Java 语言做开发时，需要用到 JDK 提供的内置库，以及第三方库。同样，在使用 JS 做开发时，我们可以使用 NPM 包管理器，方便地使用成熟的、优秀的第三方框架，融合到我们自己的项目中，极大地加速日常开发的构建过程。

随着时间的发展，NPM 出现了两层概念：

-   一层含义是 Node 的开放式模块登记和管理系统，亦可以说是一个生态圈，一个社区。

-   另一层含义是 Node 默认的模块管理器，是一个命令行下的软件，用来安装和管理 Node 模块。

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

```bash
$ npm install npm -g
```

### 配置 NPM 的全局目录（暂略）

NPM 默认安装到当前正在使用 Node 版本所在目录下。我们建议重新配置 NPM 的全局目录。

输入`npm config ls`，查看：

![](http://img.smyhvae.com/20180302_1210.png)

## NPM 的常用命令

查看 npm 当前版本：

```bash
npm -v
```

更新 npm：

```bash
npm install npm@latest -g

```

项目初始化：（执行完成后，会生成`package.json`文件）

```bash
npm init

# 快速跳过问答式界面，选择默认配置
npm init --yes
```

只在当前工程下安装指定的包：

```bash
npm install [package]
```

在全局安装指定的包：

```
npm install -g [package]
```

安装的包只用于开发环境，不用于生产环境：（会出现在 package.json 文件中的 devDependencies 属性中）

```bash
npm install [package] --save-dev

# 或者
npm install [package] -D
```

安装的包需要发布到生产环境：（会出现在 package.json 文件中的 dependencies 属性中）

```bash
npm install [package] --save

# 或者
npm install [package] -S
```

查看当前目录下已安装的 node 包：

```bash
npm list
```

查看全局已经安装的 node 包：

```bash
npm list -g
```

查看 npm 帮助命令：

```bash
npm --help
```

查看指定命令的帮助：

```bash
npm [指定命令] --help
```

更新指定的包：

```bash
npm update [package]
```

卸载指定的包：

```bash
npm uninstall [package]
```

查看配置信息：

```bash
npm config list
```

查看本地安装的指定包的信息，没有则显示 empty：

```bash
npm ls [package]
```

查看全局安装的指定包的信息，没有则显示 empty：

```bash
npm ls [package] -g
```

查看远程 npm 上指定包的所有版本信息：

```bash
npm info [package]
```

查看当前包的安装路径：

```bash
npm root
```

查看全局包的安装路径：

```bash
npm root -g
```

## 配置 npm 镜像源

由于 npm 默认的下载地址在国外（npmjs.com），有时候会被墙，导致无法下载或者下载很慢。因此，我们可以尝试切换成，从其他的镜像源下载 npm 包。

切换镜像源，有下面这几种方式：

-   方式 1：临时切换镜像源。

-   方式 2：切换镜像源

-   方式 3：通过 NRM 切换镜像源（最为推荐的方式）。

-   方式 4：cnpm。

下面来分别讲一下。

### 方式 1：临时切换镜像源

安装指定包的时候，通过追加 `--registry`参数即可。格式如下：

```bash
# 格式
npm install [package] --registry [https://xxx]

# 举例：在下载安装 express 这个包的时候，临时指定镜像源为 https://registry.npm.taobao.org
npm install express --registry https://registry.npm.taobao.org
```

### 方式 2：切换镜像源

```bash
npm config set registry https://registry.npm.taobao.org
```

执行上述命令后，以后下载所有 npm 包的时候，都会改为使用淘宝的镜像源。

### 方式 3：通过 NRM 切换镜像源（推荐）

**NRM**：Node Registry Manager。作用是：**切换和管理 npm 包的镜像源**。

-   项目地址：<https://www.npmjs.com/package/nrm>

-   GitHub 地址： <https://github.com/Pana/nrm>

**安装 NRM**：

```bash
	npm install -g nrm
```

![](http://img.smyhvae.com/20180302_1208.png)

**NRM 的常用命令：**

```bash
# 显示全部的镜像
nrm ls

# 使用淘宝的镜像
nrm use taobao
```

效果如下：

![](http://img.smyhvae.com/20180302_1215.png)

推荐的国内加速镜像淘宝：<https://npm.taobao.org/>

## 方式 4：安装 cnpm

-   项目地址：<https://npm.taobao.org/>

安装`cnpm`替换 npm（npm 由于源服务器在国外，下载包的速度较慢，cnpm 会使用国内镜像）：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

![](http://img.smyhvae.com/20180302_2204.png)

以后我们就可以通过 cnpm 命令去安装一个包。举例如下：

```bash
# 安装 vue 这个包
cnpm install vue
```

这里的单词 `install` 可以简写成 `i`。

## Node.js 的简单使用

我们可以输入`node`命令，然后在里面写 js 的代码。

或者，也可以 通过 node 运行 指定的 js 文件。比如，编写好一个 js 文件`01.js`，然后在命令行输入：

```bash
	node 01.js
```

就可以执行这个 js 程序，直接在命令行查看运行结果。

## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200101.png)
