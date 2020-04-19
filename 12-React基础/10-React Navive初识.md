

## 搭建开发环境

官方文档：<https://reactnative.cn/docs/getting-started.html>

### 安装Node、homebrew、Watchman

安装 homebrew：

```

```

安装 watchman：

```
brew install watchman
```


Watchman则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。



### 安装 React Native 的命令行工具（react-native-cli）

安装 react-native-cli：

```
npm install -g react-native-cli
```


React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

###  创建新项目

```
react-native init MyApp --version 0.44.3
```

### 编译并运行 React Native 应用

在 ios 模拟器上运行：

```
react-native run-ios
```

## 调试

官网文档：<https://reactnative.cn/docs/debugging.html>


### 访问 App 内的开发菜单

如果是在 iOS 模拟器中运行，还可以按下`Command + D`快捷键，Android 模拟器对应的则是Command⌘ + M（windows 上可能是 F1 或者 F2），或是直接在命令行中运行adb shell input keyevent 82来发送菜单键命令。



