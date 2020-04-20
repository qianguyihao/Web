## MySQL 的一些简单命令

我们可以在 Navicat Premium 软件中，创建数据库和表，然后输入查询命令来查询数据。选择菜单栏「查询->新建查询->输入 sql 命令->运行」即可，效果如下：

![](https://github.com/qianguyihao/Web/blob/master/img/20200417_1750.png)

我们还可以直接在终端输入命令行来操作。

注意，在 Mac 终端执行 sql 命令时，命令的末尾必须加上`;`（英文格式的分号）。效果如下：

![](https://github.com/qianguyihao/Web/blob/master/img/20200417_1700.png)

MySQL 命令行的一些简单命令如下。

**以 root 身份进入命令行**：

```
mysql -u root -p
```

**查看有哪些数据库**：

```sql
show databases;
```

**选择进入指定的数据库**：

```sql
use xxx_database;

# 举例
use qianguyihao_database;
```

**在当前数据库中，查看有哪些表**：

```sql
show tables;
```

**在当前数据库中，查询指定表的全部数据**：

```sql
SELECT * FROM xxx_table;

# 举例
SELECT * FROM qianguyihao_student_table
```

**删除指定的表**：

```sql
drop table xxx;

# 举例
drop table qianguyihao_student_table;
```

**删除指定的数据库**：

```sql
drop database qianguyihao_student_table;
```

**创建一个数据库**：

```sql
create database qianguyihao_database2;
```

## where 条件查询

使用 `where` 子句可以对表中的数据进行筛选，结果为 true 的行会出现在查询结果中。

语法格式如下：

```sql
SELECT * FROM 表名 where 条件;
```

上面的语法格式中，`条件` 具体要怎么写呢？这个可能有很多种情况。我们继续往下看。

### 比较运算符

- `=` 等于
- `>` 大于
- `>=` 大于等于
- `<` 小于
- `<=` 小于等于
- `!=`：不等于
- `age > 20`：查询 age 大于 30 的数据

**举例**：

```sql
# 查询 age 大于 20 的数据
SELECT * FROM qianguyihao_table WHERE age > 20;
```

### 逻辑运算符

- AND

- OR

- NOT

**举例**：

```sql
# 查询 age 在20至30之间的数据
SELECT * FROM qianguyihao_table WHERE age BETWEEN 20 AND 30;

```

### 范围查询

- `in` 表示在一个非连续的范围内。

- `between ... and ...` 表示在一个连续的范围内

举例：

```sql
# 查询 name 为 千古壹号 或者 许嵩的数据
SELECT * FROM qianguyihao_table WHERE name IN ['千古壹号', '许嵩'];

SELECT * FROM qianguyihao_table WHERE age BETWEEN 20 AND 30;
```

### 模糊查询

- `like`
  - `%` 表示任意多个任意字符
  - `_` 表示一个任意字符

`%` 符号举例：

```sql
# 查询标题中包含“前端”这两个字的数据（“前端”这两个字的前后可能都有内容）
select * from qianguyihao_table where `title` like "%前端%";

# 查询标题以“前端”开头的数据
select * from qianguyihao_table where `title` like "前端%";

```

`_`符号举例：

```sql
# 查询标题，查询条件是：标题中至少有五个字符，而且，这五个字符中，前两个字符一定是“千古”开头的。
SELECT * FROM qianguyihao_table WHERE `title` LIKE "千古___";
```

### NULL 的判断

- `is null` 判断为空

- `is not null` 判断为非空

注意，`is null` 和**空字符串**`""` 是有区别的。学过 js 基础之后，你应该知道：空字符串并非 null，只不过是里面的值为空而已；空字符串也是会占有内存空间的。

举例：

```sql
select * from qianguyihao_table where name is not NULL;

```

## join 联表查询

### 联表查询命令

- `tableA inner join tableB`：表 A 与表 B 匹配的行会出现在结果中。

- `tableA left join tableB`：表 A 与表 B 匹配的行会出现在结果中。表 A 中独有的数据，对应表 B 中用 null 填充。

- `tableA right join tableB`：表 A 与表 B 匹配的行会出现在结果中。表 B 中独有的数据，对应表 A 中用 null 填充。

光是这样看，不好理解，我们来举个例子。

### 举例

现在有下面这两张表：作者表 author、图书表 book。

**表 1**、作者表 author：

| id  | authorId | authorName |
| :-- | :------- | :--------- |
| 1   | 11       | 王小波     |
| 2   | 12       | 吴军       |
| 3   | 88       | 千古壹号   |

**表 2**、图书表 book：

| id  | bookId | bookName   | authorId |
| :-- | :----- | :--------- | -------- |
| 1   | 201    | 黄金时代   | 11       |
| 2   | 202    | 白银时代   | 11       |
| 3   | 203    | 青铜时代   | 11       |
| 4   | 204    | 浪潮之巅   | 12       |
| 5   | 205    | 硅谷之谜   | 12       |
| 6   | 206    | 数学之美   | 12       |
| 7   | 777    | 设计心理学 | 99       |

注意，表2中的每本图书都有对应的 authorId，这个 authorId 就是对应表1中的 authorId。**通过 authorId 把两张表关联起来**。

通过联表查询上面的两张表，我们来对比一下查询结果。

**情况 0**：（inner join）

```sql
SELECT * FROM author INNER JOIN book;
```

查询结果：


![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2300.png)


上面这种查询，没有意义，因为没有加任何查询条件。

**情况 1**：（inner join）

```sql
SELECT * FROM author INNER JOIN book ON author.authorId = book.authorId;
```

查询结果：

![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2305.png)


上面这行命令，跟下面这行命令等价：

```sql
SELECT * FROM author, book WHERE author.authorId = book.authorId;
```

**情况 2**：（left join）

```sql
SELECT * FROM author LEFT JOIN book ON author.authorId = book.authorId;
```

查询结果：

![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2310.png)

**情况 3**：（right join）

```sql
SELECT * FROM author RIGHT JOIN book ON author.authorId = book.authorId;
```

查询结果：

![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2315.png)

### 参考链接

- [Mysql 联表查询](https://blog.csdn.net/qmhball/article/details/8000003)


## 自关联查询

涉及到层级关系时可以用自关联查询。


## 子查询

当一个查询结果是另一个查询的条件时，这个查询称之为子查询。






