

## path 路径模块

Node.js 通过`path`这个内置模块，提供了一些路径操作的API，具体可以参考官方的api文档。这里列举一些常用的API。

### path.extname() 获取文件/路径的扩展名

语法格式：

```js
 path.extname(myPath);
```

代码解释：

- 获取 `myPath` 这个文件或者路径的扩展名。

- `myPath` 这个参数要求是字符串。如果 `myPath` 不是字符串，则抛出 TypeError。

代码举例：

```js
const path = require('path');

path.extname('hello.txt'); // 返回 '.txt'

path.extname('www.qianguyihao.com'); // 返回 '.com'

path.extname('index.coffee.md');  // 返回 '.md'

path.extname('index.');  // 返回 '.'

path.extname('index');  // 返回 ''

path.extname('.index');  // 返回 ''

path.extname('.index.md');  // 返回 '.md'

```

### path.resolve() 生成完成的绝对路径

语法格式：

```js
path.resolve([...myPaths])
```

解释：

- 将路径或路径片段的序列解析为绝对路径。

- 返回的路径是**从右往左**处理，后面的每个 myPath 被依次解析，直到构造出一个完整的绝对路径。

代码举例：

```js
const path = require('path');

let arr1 = ['/foo1/foo2', 'qianguyihao', 'foo3'];
let result1 = path.resolve(...arr1);
console.log(result1); // 打印结果：/foo1/foo2/qianguyihao/foo3

let arr2 = ['/foo1/foo2', '/qianguyihao', 'foo3'];
let result2 = path.resolve(...arr2);
console.log(result2); // 打印结果：/qianguyihao/foo3
```

### 几个常见路径

- `__dirname`：这是一个常量，表示：当前执行文件所在**完整目录**。

- `__filename`：这是一个常量。表示：当前执行文件的**完整目录 + 文件名**。

- `process.cwd`：获取当前执行 Node命令 时的目录名。


代码举例：

```js
console.log(__dirname);

console.log(__filename);

console.log(process.cwd());
```

运行结果：

```bash
$ node app.js

/Users/smyhvae/qianguyihao
/Users/smyhvae/qianguyihao/app.js
/Users/smyhvae/qianguyihao
```

### path.join() 将多个路径进行拼接

如果是我们手动拼接路径，容易出错。这个时候，可以利用 path.join() 方法将路径进行拼接。

语法格式：

```js
path.join([...paths]);

```

解释：使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

代码举例：

```js
const path = require('path');

const result1 = path.join(__dirname, './app.js');
console.log(result1); // 返回：/Users/smyhvae/qianguyihao/app.js

const result2 = path.join('/foo1', 'foo2', './foo3');
console.log(result2); // 返回：/foo1/foo2/foo3

const result3 = path.join('/foo1', 'foo2', '/foo3');
console.log(result3); // 返回：/foo1/foo2/foo3
```

## OS 系统模块


- os.networkInterfaces() 查看网络地址


## 我的公众号

想学习**代码之外的技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200101.png)



