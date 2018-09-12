


### 动态添加对象的属性

- Vue中，动态新增对象的属性时，不能直接添加。正确的做法是：Vue.set(obj,key,value)。参考链接：[#](https://blog.csdn.net/tian361zyc/article/details/72909187)




### 判断一个checkbox是否被选中

```html
<!-- v-model里的内容是变量，变量里的值可能是 true 后者 false -->
<input type="checkbox" v-model="isSelected">

<!-- 选中时，值为 true。未选中时，值为 false -->
<span>{{isSelected}}</span>


<!-- 选中时，显示文字。未选中时，隐藏文字 -->
<span v-if="isSelected">haha</span>

```



### 多个checkbox的全选和反选

现在有多个checkbox的item在一个数组中，另外还有一个“全选”的checkbox按钮。

**点击全选按钮，让子item全部选中**：

采用 watch 监听全选按钮，然后改变子item。

**当子item全部被选中时，触发全选按钮**：

采用 computed 计算子item 的状态，存放到变量 allChecked 中，然后用 watch 监听 allChecked 的值。

参考链接：

- [问Vue.js 如何在 data 里含数组的情况下，监听数组内指定属性的变化？](https://segmentfault.com/q/1010000014514160/a-1020000014514452)





