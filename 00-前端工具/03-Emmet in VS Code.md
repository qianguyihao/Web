## 前言

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


## 如何在某个语言中打开 Emmet 支持

默认情况下，你可以直接在 html、haml、jade、slim、jsx、xml、xsl、css、scss、sass、less、stylus、handlebars、php 和 javascriptreact 中使用 Emmet 。

但对于其他语言，你也可以通过如下设置将其打开：

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html",
    "razor": "html",
    "plaintext": "jade"
}

```

上方代码的意思是，将某个 Emmet 默认不支持的语言，映射到某个 Emmet 支持的语言上。比如上面的设置里，我们把 vue-html 映射成了 html，那么当你在 vue-html 使用 Emmet 时，Emmet 就会把它当作 html 来处理了。


## Emmet 语法规则

语法规则：

```
ul>li*6
```


最终效果：

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


---

语法规则：

```
p5

```



最终效果：

```
padding: 5px;
```





