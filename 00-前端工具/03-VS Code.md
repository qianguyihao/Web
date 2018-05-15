

## 常见操作

### 自动保存

```
 "files.autoSave": "onFocusChange"
```

参考链接：<https://blog.csdn.net/WestLonly/article/details/78048049>




### 如何查看代码结构

- 方法一：「Cmd + Shift + O」

- 方法二：安装插件`Code Outline`

参考链接：<https://www.zhihu.com/question/264045094>



### 在新的窗口中打开文件

```json
"workbench.editor.enablePreview": false,
```

### 在本地开启服务器

```bash
# 安装
npm install -g live-server

# 启动
live-server
```


参考链接：[Visual Studio Code + live-server编辑和浏览HTML网页](http://www.cnblogs.com/1zhk/p/5699379.html)






## 常用插件

方式一：打开VS Code，左侧有五个按钮，点击最下方的按钮，然后就可以开始安装相应的插件了。

方式二：在vscode中输入快捷键「ctrl+shift+P」，弹出指令窗口，输入`extension:install`，回车，左侧即打开扩展安装的界面。


### sftp：文件传输


输入快捷键「ctrl+shift+P」，弹出指令窗口，输入`sftp:config`，回车，当前工作工程的`.vscode`文件夹下就会自动生成一个`sftp.json`文件，我们需要在这个文件里配置的是：

- `host`：服务器的IP地址

- `username`：工作站自己的用户名

- `privateKeyPath`：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是ppk文件）

- `remotePath`：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用sftp上传文件之前，要手动在工作站上mkdir生成这个根目录

- `ignore`：指定在使用sftp: sync to remote的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号


举例如下：(注意，其中的注释不能保留)

```json
{
    "host": "",     //服务器ip
    "port": 22,     //端口，sftp模式是22
    "username": "", //用户名
    "password": "", //密码
    "protocol": "sftp", //模式
    "agent": null,  
    "privateKeyPath": null,
    "passphrase": null,
    "passive": false,
    "interactiveAuth": false,
    "remotePath": "/root/node/build/",  //服务器上的文件地址
    "context": "./server/build",        //本地的文件地址
    
    "uploadOnSave": true,   //监听保存并上传
    "syncMode": "update",
    "watcher": {            //监听外部文件
        "files": false,     //外部文件的绝对路径
        "autoUpload": false,
        "autoDelete": false
    },
    "ignore": [             //忽略项
        "**/.vscode/**",
        "**/.git/**",
        "**/.DS_Store"
    ]
}
```


### Sass Formatter

Sass 文件格式化。


### Code Outline：显示代码结构


安装好插件「Code Outline」后，可以在左侧的资源管理器中，显示当前文件的代码结构：

![](http://img.smyhvae.com/20180420_0925.png)

参考链接：

- <https://www.zhihu.com/question/50273450>

- <http://itopic.org/vscode.html>

- <https://github.com/varHarrie/varharrie.github.io/issues/10>

### vscode-fileheader：添加顶部注释模板(签名)

（1）安装插件vscode -fileheader，并重启。

（2）在首选项-》设置-》中搜索fileheader，找到头部模板修改。

默认的快捷键是：「Ctrl + option + I」。

参考链接：

- <https://www.zhihu.com/question/62385647>




### Vue 相关的插件

- vetur：vue 文件的基本语法高亮

安装完 vetur 后还需要加上这样一段配置下：

```
"emmet.syntaxProfiles": {
  "vue-html": "html",
  "vue": "html"
}
```

参考链接：

- <https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/>


- <https://github.com/varHarrie/varharrie.github.io/issues/10>



### 参考链接

- <https://www.jianshu.com/p/0724921285d4>

- <https://www.cnblogs.com/AmosLee94/p/8338013.html>




## 常用快捷键


| Win快捷键 |Mac快捷键| 作用 | 备注 |
|:-------------|:-------------|:-----|:-----|
| Shift + Alt + F |Shift + option + F| 代码格式化 |  |
| Ctrl + Shift + N | |在当前行上面增加一行并跳至该行  |   |
|  **Ctrl + Shift + D** | |复制当前行到下一行  |   | 





### 代码格式化



### 如何同时打开多个窗口












## 问题

问题1

解决；You can kill the Microsoft.VSCode.Cpp.IntelliSense.Msvc process to save the file successfully. 也就是 IntelliSense 这个进程。