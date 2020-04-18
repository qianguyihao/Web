

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

使用 `where` 子句可以对表中的数据进行筛选，结果为true的行会出现在查询结果中。

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
select * from qianguyihao_table where `title` like "%前端";

```


`_`符号举例：

```sql
# 查询标题，查询条件是：标题中至少有五个字符，而且，这五个字符中，前两个字符一定是“千古”开头的。
SELECT * FROM qianguyihao_table WHERE `title` LIKE "千古___";
```



### NULL 的判断

- `is  null` 判断为空

- `is not null` 判断为非空

注意，`is null` 和**空字符串**`""` 是有区别的。学过js基础之后，你应该知道：空字符串并非null，只不过是里面的值为空而已；空字符串也是会占有内存空间的。

举例：

```sql
select * from qianguyihao_table where name is not NULL;

```

### 优先级

