
## SSI：服务器端嵌入

SSI：Server Side Include，服务器端嵌入。

通俗点讲，就是在本地的html页面中，插入服务器上的文件。即：静态页面中，插入动态的代码。

比如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

    </style>
    <!--#include virtual="/sinclude/common/head_inc.shtml"-->
    <!--#include virtual="/sinclude/common/head_shortcut.shtml"-->
    <!--#include virtual="head.shtml"-->
</head>
```

上面的代码中，注释里的代码，就是SSI部分，它加载的是服务器端的html页面。







