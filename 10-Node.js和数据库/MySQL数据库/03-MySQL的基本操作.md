
## SQL 的一些简单语法规则

### 结束符

SQL 指令需要语句结束符，默认是英文分号`;`。

当然，还有另外两个结束符：

- `\g` 与英文分号`;`等效。

- `\G`：将查到的结构旋转90度变成纵向。


### 反引号``

SQL语句中如果用到了关键字或者保留字，需要使用反引号``（Tab键上面的符号）来包裹，让系统忽略。

## MySQL 数据库的操作分类

根据数据库的对象层级，可以将**SQL的基础操作分为四类**：

- 数据库（DB）操作。

- 数据表（Table）操作。

- 数据字段（Field）操作。

- 数据操作。

下面来详细讲一讲。

## 一、数据库（DB）的基本操作

在终端的任何位置，输入如下命令，即可进入 mysql 命令的执行窗口：

```sql
mysql -u root -p
```

### 1、创建数据库

**语法格式**：

```mysql
create database 数据库名称 [数据库选项];
```

**数据库名称的命名规范**：

- 由数字、字母和下划线组成。
- 不区分大小写。
- 不能以数字开头。
- 建议使用下划线法创建复杂的数据库名字。比如 `db_qianguyihao`。

**举例**：

创建一个名为 db_qianguyihao1 的数据库：

```mysql
create database db_qianguyihao1;
```


创建一个指定字符集的数据库：

```mysql
create database db_qianguyihao2 charset utf8MB4;
```

创建一个指定校对集的数据库：

```mysql
create database db_qianguyihao3 charset utf8MB4 collate utf8mb4_general_ci
```


### 2、查看数据库

查看有哪些数据库：(显示所有的数据库列表)

```mysql
show databases;
```

查看 `db_qianguyihao1` 这个数据库的具体创建指令是怎样的：

```mysql
show create database db_qianguyihao1;
```

备注：由于系统会加工，所以看到的结果不一定是真实的创建指令。


### 3、使用指定的数据库

使用指定的数据库：（也可以理解成：进入指定的数据库）

```mysql
# 语法格式
use database_xxx;

# 举例
use db_qianguyihao;
```

假设当前服务器连接中有很多个数据库（db_qianguyihao1、db_qianguyihao2），此时，我输入 `use db_qianguyihao2`则代表我想使用 `db_qianguyihao2` 这个数据库。


### 4、修改数据库的参数

我们一般很少修改数据库的名称，一般是去修改数据库的一些选项，比如：

- 修改字符集

- 修改校对集

**语法格式**：

```mysql
alter database 数据库名称 [库选项]
```

举例1、修改数据库的字符集为gbk：

```mysql
alter database db_qianguyihao1 charset gbk;
```

举例2、修改数据库的校对集：

```sql
alter database db_qianguyihao2 charset gbk collate gbk_chinese_ci;
```

备注：因为校对集是和字符集有关的，所以上方指令是在修改字符集的同时，修改校对集。



### 5、删除指定的数据库

**语法格式**：

```mysql
drop database 数据库名称;
```

备注：删除数据库时，会清空当前数据库里的所有数据表，所以删除数据库的操作一定要谨慎。


## 二、数据表（Table）的基本操作

注意，我们最好先通过 `use xxx_database` 命令进入指定的数据库（DB），然后在当前数据库下，进行数据表（Table）的操作。

### 1、创建数据表

**语法格式**：

```sql
create table [数据库名].[表名] (
	字段名1 字段类型,
	...
    ...
    字段名2 字段类型
) 表选项;
```

**举例**：

1、在当前数据库中创建数据表 `table_qiangu1`，并新增**主键** id 字段：

```sql
CREATE TABLE table_qiangu1 (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY
);
```

2、在当前数据库中创建数据表 `t_student1`，并新增 name、age这连个字段：

```sql
create table t_student1(
    name varchar(255),
    age int
);


```

3、在指定的数据库 `db_2` 中创建数据表 `t_student2`：


```sql
create table db_2.t_student2(
    name varchar(255),
    age int
);
```

4、在当前数据库中创建数据表 `t_student3`（含表选项）：

```sql
create table t_student3(
    name varchar(255),
    age int
)engine Innodb charset utf8MB4;
```

举例4中的代码涉及到存储引擎，这里解释一下：

**存储引擎**是指数据存储和管理的方式，MySQL中提供了多种存储引擎，一般使用默认存储引擎 InnoDB。

- InnoDB：默认存储引擎；支持事务处理和外键；数据统一管理。

- MyIsam：不支持事务和外键；数据、表结构、索引独立管理；MySQL5.6以后不再维护。

6、扩展：如果想创建一个与已有表一样的数据表，MySQL提供了一种便捷的复制模式

### 2、复制数据表

如果想创建一个与已有表一样的数据表，MySQL提供了一种便捷的**复制**模式。

**语法格式**：（复制现有的表 `table_xx1` 到 `table_xx2`）

```sql
create table table_xx1 like 数据库名.table_xx2;
```

注意，这种复制模式，`table_xx2` 只会复制表 `table_xx1` 中的字段，不会复制表`table_xx1`中的数据。

**举例**：


```sql
# 在当前数据库下，复制现有的表`t_qianguyihao1` 到表 `t_qianguyihao2`
create table t_qianguyihao1 like t_qianguyihao2;

# 复制现有的表`t_qianguyihao1` 到表 `t_qianguyihao2`，是复制到 `db2`这个数据库中
create table t_qianguyihao1 like db2.t_qianguyihao2;
```


### 3、显示数据表的名称

在当前数据库下，显示所有的数据表：

```sql
show tables;
```

在指定的数据库中，显示所有的数据表：

```sql
show tables from db_qianguyihao1;
```

显示数据表的创建指令：(查看 `t_qianguyihao1` 这个数据表的具体创建指令是怎样的)

```mysql
show create table t_qianguyihao1; # 备注：由于系统会加工，所以看到的结果不一定是真实的创建指令。
```



### 4、查询（查找）数据表的名称

> 根据 表名称 查询数据表，也可以理解成：按条件显示部分数据表。

根据数据表的**表名称**查找数据表时，需要用到关键词`like`，而且还要涉及到两个符号：

- `%` 表示匹配任意**多个字符**。

- `_` 表示匹配任意**一个字符**（固定位置）。

上面这两个模糊查询的符号，大家要牢记。我们来看看具体的例子。

语法举例：

```mysql
show tables like '%like_';	# _表示匹配一个字符（固定位置），%表示匹配N个字符
```

**`%` 符号举例**：

```sql
# 查询表名称中，包含 “qiangu” 这个关键字的表（“qiangu”这个关键字的前后可能都有内容）
show tables like '%qiangu%';

# 查询表名称以“qiangu”开头的表（这个命令应该很实用）
show tables like 'qiangu%';
```

**`_`符号举例**：

```sql
# 根据 表名称 来查询表，查询条件是：表名称以“qiangu”开头，而且要确保 qiangu 的后面有三个字符（因为我在 qiangu 的后面写了三个下划线）。
show tables like 'qiangu___';
```


### 5、desc：查看数据表的表结构

查看数据表的表结构，就是**查看这张表中定义了哪些字段**，以及这些字段是如何定义的。通过这种方式，我们可以清晰地了解数据的存储形式。

项目开发中，领导在检查我们的工作时，首先看的就是我们的表中定义了哪些字段。所以说，这种方式，还是很实用的。

**语法格式**：

```sql
# 方式1
desc 表名称;

# 方式2
describe 表名称;

# 方式3
show columns from 表名称;
```

上面的三种方式，效果都一样，三选一即可。


### 6、修改数据表的表名称和表选项

**修改数据表的表名称**：

在当前数据库下，修改数据表的表名称：

```sql
rename table 原表名 to 新表名;
```

指定某个数据库，然后修改数据表的表名称：


```sql
rename table 数据库名.原表名 to 数据库名.新表名;
```

**修改数据表的表名称**：

```sql
alter table table1 charset gbk;
```

### 7、删除数据表

语法格式：

```sql
drop table 数据表名称;

```


## 三、字段（Field）的基本操作

数据表 table 创建好了之后，我们就可以开始在这张表中新增字段了。

### 1、新增字段

**语法格式**：

```sql
alter table 表名 add [column] 字段名 字段类型 [字段属性] [字段位置];
```

注意事项：

- 新增字段时，必须制指定字段类型。

- [column]、 [字段属性]、[字段位置] 这几个都是选填，其他是必填。

- 追加字段时，这个字段的顺序默认排在最后。

**举例**：

新增字段 `name`:

```sql
alter table table_qiangu1 add name varchar(255);

```

新增字段 `age`：

```sql
alter table table_qiangu1 add age int;
```


### 2、新增字段时，设置字段的位置（顺序）

在新增字段时，它的顺序是默认放在最后面的，当然，我们也可以人工指定它的顺序。

在修改字段的位置时，我们可以用到下面这两个关键字：

- `first` 放到最前面

- `after` 放到某个字段的后面

**语法格式**：

```sql
alter table 表名 add 新字段名 字段类型 字段位置;
```


**举例1**：

在 `name`字段的后面，新增一个 `sex` 字段：

```sql
alter table t_qiangu1 add sex varchar(255) default null comment '性别' after name;
```

注意，上方举例中，如果是新建 varchar 类型的字段，一定要指定 varchar 的长度（比如255），否则报错。

**举例2**：


新增一个 `id` 字段，放到最前面：

```sql
alter table t_qiangu1 add id int first;
```




### 3、change：修改现有字段的字段名

> 修改现有字段的字段名，是通过 change 关键字，不是通过 modify 关键字（后者会报错，执行失败）。

**语法格式**：

```sql
# 格式1（精简版）
alter table 表名 change 原字段名 新字段名 字段类型;

# 格式2（完整版）
alter table 表名 change 原字段名 新字段名 字段类型 [字段属性] [位置];
```

注意：

- 修改字段名时，一定要设置新字段的字段类型。

- 虽然 change 关键字也可以修改现有字段的字段属性、字段位置，但我们一般是通过 modify 关键字来做（下面会讲）。


**举例**：

修改字段名 `sex` 为 `sexy`：

```sql
alter table t_qiangu2 change sex sexy varchar(255);
```

### 4、modify：修改现有字段的的字段类型、字段位置、字段属性

**语法格式**：

```sql
alter table 表名 modify 现有字段的字段名 现有字段的字段类型 [字段属性] [位置]；
```

**举例1**、针对现有的字段 `name` 和 `age`，更换这两个字段的顺序：

```sql
# 注意，这里的 age 后面一定要跟上它的字段类型，否则执行失败
alter table t_qiangu1 modify age int after name;
```

### 修改字段的默认值

```sql
# 若本身存在默认值，则先删除
alter table 表名 alter column 字段名 drop default;

# 若本身不存在则可以直接设定
alter table 表名 alter column 字段名 set default 默认值;
```
### 5、删除字段

>  删除字段的同时，会删除字段对应的数据。删除字段的操作不可逆，请谨慎操作。

语法格式：

```sql
alter table 表名 drop 字段名;
```

举例：（删除 t_qiangu1 表中的 age 这个字段）

```sql
alter table t_qiangu1 drop age;
```


## 四、数据的基本操作

### 1、新增数据

**方式1、全字段插入**：

语法格式：

```sql
insert into 表名 values(值1, 值2, ... 最后一个值);
```

解释：

- 值的顺序必须与所有字段的顺序一致。
- 值的数据类型也必须与字段定义的数据类型一致。

举例（给 t_qiangu1 这个表中插入一条完整的数据）：

```sql
insert into t_qiangu1 values(3, 'qianguyihao', 28);
```

**方式1、部分字段插入**：

语法格式：

```sql
insert into 表名 (字段1, 字段2, 字段3) values(值1, 值2, 值3);
```

解释：

-字段的顺序可以随意，但值的顺序必须要与前面的字段顺序**一一对应**，数据类型也要一致。

举例（给 t_qiangu1 这个表中的指定字段插入数据）：

```sql
insert into t_qiangu1 (id, name) values(4, 'xusong');
```

### 2、查询数据

> 查询数据的操作，占sql日常操作的95%以上。

**语法格式**：

```sql
select xxx from 表名;
```

**举例**：

查询表中的所有数据：

```sql
select * from t_qiangu1;
```

查询表中 name、age 这两个字段的数据：

```sql
select name, age from t_qiangu2;
```

查询表中 id=2 的数据：

```sql
select * from t_qiangu3 where id = 2;
```

### 3、修改数据


**语法格式**：

```sql
update 表名 set (字段1 = 新值1, 字段2 = 新值2) [where 条件筛选];
```

**解释**：

- 我们通常是结合 where 条件语句来修改数据。

- **修改数据之前，要先保证表里面有数据**。如果这张表是空表，那么，执行这个命令后，等于没执行。


**举例**：

将表中，name 这个字段的值全部修改为`千古壹号`：

```sql
update t_qiangu1 set name = '千古壹号';
```

id = 3 的这条记录中，修改 name 和 age 这两个字段的值：

```sql
update t_qiangu1 set name = '许嵩', age = '34' where id = 3;
```

### 4、删除数据

> 删除字段的操作不可逆，请谨慎操作。

**语法格式**：

```sql
delete from 表名 [where 条件];
```

**解释**：

- 执行删除操作之后，匹配到的**整条记录**，都会删除。

- **删除数据之前，要先保证表里面有数据**。如果这张表是空表，那么，执行这个命令后，等于没执行。

**举例**：

删除表中`id = 2`的记录：

```sql
delete from t_qiangu1 where id = 2;
```
