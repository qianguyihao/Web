---
title: 01-数据库的基础知识
publish: false
---

<ArticleTopAd></ArticleTopAd>





### 001、对象的赋值

（1）在 store 中定义一个对象：

```javascript
    userInfo: {
        pin: '',
        nickName: '',
        avatarUrl: DEFAULT_AVATAR,
        definePin: '',
        isbind: true
    },
```

（2）从接口拿到数据后，给这个对象赋值：

```javascript
    this.userInfo = {
        ...this.userInfo,
        pin: res.base.curPin,
        nickName: res.base.nickname,
        avatarUrl: res.base.headImageUrl ? res.base.headImageUrl : DEFAULT_AVATAR,
        definePin: res.definePin
    }
```