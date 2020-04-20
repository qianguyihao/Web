
## MySQL 数据库的操作分类

SQL 的一些简单语法规则：

- SQL 指令需要语句结束符，默认是英文分号`;`。

- SQL语句中如果用到了关键字或者保留字，需要使用反引号``（Tab键上面的符号）来包裹，让系统忽略。

根据数据库的对象层级，可以将SQL的基础操作分为三类：

- 数据库（DB）操作。

- 数据表（Table）操作。

- 数据字段（Field）操作。

下面来详细讲一讲。

## 数据库（DB）的基本操作


### 1、创建数据库

**语法格式**：

```sql
create database 数据库名称 [数据库选项];
```

**数据库名称的命名规范**：

- 由数字、字母和下划线组成。
- 不区分大小写。
- 不能以数字开头。
- 建议使用下划线法创建复杂的数据库名字。比如 `qianguyihao_db`

**举例**：

创建一个名为 qianguyihao_db1 的数据库：

```sql
create database qianguyihao_db1;
```


创建一个指定字符集的数据库：

```mysql
create database qianguyihao_db2 charset utf8MB4;
```

创建一个指定校对集的数据库：

```mysql
create database qianguyihao_db3 charset utf8MB4 collate utf8mb4_general_ci
```


### 2、查看数据库

查看有哪些数据库：(显示所有的数据库列表)

```sql
show databases;
```


### 3、使用指定的数据库

使用指定的数据库：（也可以理解成：进入指定的数据库）

```sql
use xxx_database;

# 举例
use qianguyihao_db;
```

假设当前服务器连接中有很多个数据库（qianguyihao_db1、qianguyihao_db2），此时，我输入 `use qianguyihao_db2`则代表我想使用 `qianguyihao_db2` 这个数据库。


### 4、修改数据库

我们一般很少修改数据库的名称，一般是去修改数据库的一些选项，比如：

- 修改字符集

- 修改校对集

**语法格式**：

```sql
alter database 数据库名称 [库选项]
```

**举例1**、修改数据库的字符集为gbk：

```sql
alter database qianguyihao_db1 charset gbk;
```

**举例2**、修改数据库的校对集（在修改字符集的同时，修改校对集）

```sql
alter database db_3 charset gbk collate gbk_chinese_ci;
```









