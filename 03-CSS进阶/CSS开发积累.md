

### 让文字只显示一行，超出显示省略号

```
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

```


### 让文字最多只显示两行，超出后显示省略号

```
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
```


### 2019-11-12-CSS的逗号和空格

CSS的逗号一般写在()里。**不同属性值之间，用的是空格**，不是逗号。比如：

```css
	transform: translate(-50%, -50%);  /* 这种写逗号 */
	transform: translate(-50%, -50%) scale(0.5);   /* 不同属性值之间，用的是空格 */

	background-size: 100% 100%;  /* 这里是空格，不是逗号 */
```


