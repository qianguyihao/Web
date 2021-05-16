
## Vue 开发积累


### 001：scoped 关键字的作用

在 `xx.vue` 组件中，我们可能会遇到带 `scoped` 关键字的样式。比如：

```html
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```


上方的`scoped`表示的是**作用域化**，样式只对当前子组件生效。

