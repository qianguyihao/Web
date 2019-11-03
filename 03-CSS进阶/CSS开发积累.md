

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


