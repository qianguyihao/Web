## MySQL 安装

### MySQL（Mac版）

### 步骤1、下载安装包并安装：

MySQL 下载地址：https://dev.mysql.com/downloads/mysql/

![](https://github.com/qianguyihao/Web/blob/master/img/20200415_1707.png)

![](https://github.com/qianguyihao/Web/blob/master/img/20200415_1708.png)


#### 步骤2、配置环境变量

打开 `~/.bash_profile` 文件，在文件的末尾，添加如下内容，即可配置环境变量：

```bash
# mysql
export PATH=${PATH}:/usr/local/mysql/bin
#快速启动、结束MySQL服务, 可以使用alias命令
alias mysqlstart='sudo /usr/local/mysql/support-files/mysql.server start'
alias mysqlstop='sudo /usr/local/mysql/support-files/mysql.server stop'
```

配置好环境变量后，在终端输入 `source ~/.bash_profile` 命令，让配置生效。

在终端的任何位置，输入如下命令，即可进入 mysql 命令的执行窗口：

```sql
mysql -u root -p
```


参考链接：

- [MySQL安装（Mac版）](https://juejin.im/post/5cc2a52ce51d456e7079f27f)


### 步骤3、继续配置环境变量

在 `~/.bash_profile` 中配置好环境变量后，发现每次重启终端后，配置都会失效，需要重新执行 `source ~/.bash_profile` 命令。

原因是，zsh加载的是 `~/.zshrc`文件，而 `.zshrc` 文件中并没有定义任务环境变量。

解决办法：打开 `~/.zshrc` 文件，在文件的末尾，添加如下内容即可：

```bash
source ~/.bash_profile
```


参考链接：<https://blog.csdn.net/science_Lee/article/details/79214127>

## Navicat Premium 软件初体验

Navicat Premium 软件是一种数据库管理的GUI软件，采用可视化的方式来查看和操作数据库，非常方便。支持的数据库有： MySQL、MongoDB、SQL Server、SQLite、Oracle 及 PostgreSQL等。

安装好 Navicat Premium 软件之后，我们来看看这个软件是怎么用的。


1、新建连接：

打开 Navicat Premium 软件，选择菜单栏「文件-新建连接-mysql」，然后选择如下配置，即可在本地新建一个数据库连接：

![](https://github.com/qianguyihao/Web/blob/master/img/20200416_1157.png)

2、选中连接后，右键新建数据库：

![](https://github.com/qianguyihao/Web/blob/master/img/20200416_1159.png)


![](https://github.com/qianguyihao/Web/blob/master/img/20200416_1127.png)

3、选中数据库之后，新建表 `qiangu_student_table`：

![](https://github.com/qianguyihao/Web/blob/master/img/20200416_1138.png)

4、在表中添加字段：

![](https://github.com/qianguyihao/Web/blob/master/img/20200416_1202.png)

5、字段建好后，开始在表中插入数据：

![](https://github.com/qianguyihao/Web/blob/master/img/20200416_1259.png)


## MySQL 的一些简单命令

按照上面的操作，通过 Navicat Premium 软件建好数据库之后，我们也可以通过命令行来进行一些常见操作。

注意，在 Mac 终端执行 sql 命令时，命令的末尾必须加上`;`（英文格式的分号）。效果如下：

![](https://github.com/qianguyihao/Web/blob/master/img/20200417_1700.png)


我们也可以在 Navicat Premium 软件中，输入查询命令来查询数据。选择菜单栏「查询->新建查询->输入 sql 命令->运行」即可，效果如下：

![](https://github.com/qianguyihao/Web/blob/master/img/20200417_1750.png)


MySQL 命令行的一些简单命令如下。

**以 root 身份进入命令行**：

```
mysql -u root -p
```


**查看有哪些数据库**：

```sql
show databases
```

**选择进入指定的数据库**：

```sql
use xxx_database

# 举例
use qiangu_database
```

**在当前数据库中，查询指定的表**：（查询全部数据）

```sql
select * from xxx_table

# 举例
select * from qiangu_student_table
```

**删除指定的表**：

```sql
drop table xxx

# 举例
drop table qiangu_student_table
```


**删除指定的数据库**：

```sql
drop database qiangu_database;
```


**创建一个数据库**：

```sql
create database qiangu2_database;
```

