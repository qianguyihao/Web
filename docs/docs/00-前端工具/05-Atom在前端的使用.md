

## 常用插件


- `Emmet`：快速生成HTML片段，比如输入ul>li*3可以快速生成：

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

[详细地址](https://atom.io/packages/emmet)，[Emmet教程](https://docs.emmet.io/cheat-sheet/)

- `Snippets`：快速生成 js 代码片段（用来处理代码片段的模板输出），[详细地址](https://atom.io/packages/snippets)

- `Tree View`：文件浏览器，[详细地址](https://atom.io/packages/tree-view)

- `file icons`：文件识别图标，使用这个插件会让你的编辑器显示对应的图标，[详细地址](https://atom.io/packages/file-icons)

- `language-javascript-jsx`：jsx语法高亮 ，[详细地址](https://atom.io/packages/language-javascript-jsx)

- `language-vue`：vue语法高亮，[详细地址](https://atom.io/packages/language-vue)

- `linter-eslint`：eslint插件，[详细地址](https://atom.io/packages/linter-eslint)

- `vue-snippets`：vue代码片段，[详细地址](https://atom.io/packages/vue-snippets)

- `pigments`：颜色显示器，[详细地址](https://atom.io/packages/pigments)

- `linter-eslint`：语法检查

- `Atom-Beautify`：代码格式化

参考链接：<https://github.com/cucygh/JDFinance/blob/master/issue.md>

## 插件无法安装的问题

### 方法一：设置代理

`C:\Users\smyhvae\.atom\.apm`目录下的.apmrc配置文件（没有就新建一个）,然后添加代理信息：

```
strict-ssl=false
https-proxy=http://127.0.0.1:1080/
http-proxy =http://127.0.0.1:1080/
```

这里的 http://127.0.0.1:1080，是我自己的 Shadowsocks 代理，你需要设置成自己的可用代理。
然后再执行：

```
apm install --check
```

应该可以测试成功，祝好运~~

参考链接：

- <https://atom-china.org/t/atom/984>

- <https://zhenyong.github.io/2016/08/03/starting-atom/>


## Markdown相关

### 在编辑器中预览

2018-06-JD日记.md

Packages -> Markdown Preview -> Toggle Preview

快捷键：Shift + Ctrl + M



### 参考链接：

- [使用Atom打造无懈可击的Markdown编辑器](http://www.cnblogs.com/fanzhidongyzby/p/6637084.html)





## 相关设置

### 显示缩进线

settings -->Editor --> Show Indent Guide

