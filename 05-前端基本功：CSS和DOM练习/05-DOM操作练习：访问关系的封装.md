


## 访问关系的函数封装

（1）函数封装

新建一个文件名叫`tools.js`，然后在里面封装访问关系。代码如下。



tools.js:

```javascript
/**
 * Created by smyhvae on 2018/01/28.
 */

function getEle(id){
    return document.getElementById(id);
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断：对同级的所有元素节点进行遍历，如果不是传递过来的元素自身，那就是兄弟元素，于是添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

```


上方代码中，我们单独来重视一下最后一个方法：获取指定元素的兄弟元素：


```javascript
/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断：对同级的所有元素节点进行遍历，如果不是传递过来的元素自身，那就是兄弟元素，于是添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

```

（2）函数的调用举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        li {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 5px;
            list-style: none;
        }
    </style>
</head>
<body>

<ul>
    <li></li>
    <li></li>
    <li id="box"></li>
    <li></li>
    <li></li>
</ul>
<script src="tools.js"></script>
<script>

    //获取box改为red
    var box = getEle("box");
    box.style.backgroundColor = "red"

    //获取第一个和最后一个子节点
    var parent = box.parentNode;
    getFirstNode(parent).style.backgroundColor = "yellow";
    getLastNode(parent).style.backgroundColor = "yellow";

    //获取上一个和下一个兄弟节点
    getNextNode(box).style.backgroundColor = "blue";
    getPrevNode(box).style.backgroundColor = "blue";


    //指定兄弟节点
    getEleOfIndex(box,0).style.backgroundColor = "green";
    getEleOfIndex(box,1).style.backgroundColor = "green";

    //获取所有的兄弟节点（返回值是数组，所以用for循环操作）
    var arr = getAllSiblings(box);
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor = "green";
    }

</script>
</body>
</html>

```

注意：上方代码中，我们引用到了`tools.js`这个工具类。





```


```








```


```




```


```


