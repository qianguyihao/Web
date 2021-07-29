

## HTTP 状态码知道哪些？

301 和 302 的区别：

- 301 永久重定向，浏览器会记住（有缓存）

- 302 临时重定向（无缓存）


## HTTP 缓存怎么做？

强缓存：

- **`Expires`**或**`Cache-Control`**

协商缓存：

- 第一对：`Last-Modified`、`If-Modified-Since`

- 第二对：`ETag`、`If-None-Match`


## Cookie 是什么？Session 是什么？

### Cookie

- HTTP响应通过 Set-Cookie 设置 Cookie

- 浏览器访问指定域名是必须带上 Cookie 作为 Request Header

- Cookie 一般用来记录用户信息

### Session

- Session 是服务器端的内存（数据）

- session 一般通过在 Cookie 里记录 SessionID 实现

- SessionID 一般是随机数


## LocalStorage 和 Cookie 的区别是什么？

- Cookie 会随请求被发到服务器上，而 LocalStorage 不会

- Cookie 大小一般4k以下，LocalStorage 一般5Mb 左右

## GET 和 POST 的区别是什么？

GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。


需要注意的是，web 中的 get/post 只是 http 中的 get/post 的子集。http 中的 get 与 post 只是单纯的名字上的区别，get 请求的数据也可以放在 request body 中，只是浏览器没有实现它，但是 get 并不只是在 web 中使用


参考链接：

- <http://www.cnblogs.com/zichi/p/5229108.html>

- <https://zhuanlan.zhihu.com/p/22536382>



