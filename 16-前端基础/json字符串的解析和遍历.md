


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <div id="app">
        <div v-for="(value,key) in myData">
            <p>{{key}}</p>
            <p>{{value.name}}</p>
        </div>

    </div>

    <script>

        var dataList = [
            { id: 11492948852, price: "49.90" },
            { id: 11492948847, price: "39.90" }
        ];

        var datas = {};

        var dataList2 = {
            "11492948852": {
                "3": "1",
                "spec": "",
                "imagePath": "jfs/t3136/15/8874896477/153924/ee5100df/58cb7fa8N64311629.jpg",
                "color": "白色 ",
                "name": "【多色可选】丽装铺园纯色百搭简约打底T恤女 白色 XL",
                "size": "XL"
            },
            "11492948847": {
                "3": "1",
                "spec": "",
                "imagePath": "jfs/t3109/27/9469817576/176241/aa424d04/58d4c849Ne22114ed.jpg",
                "color": "灰色 ",
                "name": "【多色可选】丽装铺园纯色百搭简约打底T恤女 灰色 S",
                "size": "S "
            },
            "11325444606": {
                "3": "1",
                "spec": "",
                "imagePath": "jfs/t4447/354/3613344795/347891/4800da35/5901549fN468c7073.jpg",
                "color": "叶脉-五骨",
                "name": "迷你超轻小太阳伞雨伞小清新口袋伞 黑胶防晒五折两用遮阳伞 防紫外线折叠太阳伞 叶脉-五骨 五折伞",
                "size": "五折伞"
            },
            "11492948848": {
                "3": "1",
                "spec": "",
                "imagePath": "jfs/t3076/90/7623078170/152165/9fe8c39d/58b94105N8ed8d2c0.jpg",
                "color": "橘色 ",
                "name": "【多色可选】丽装铺园纯色百搭简约打底T恤女 橘色 M",
                "size": "M"
            }
        }


        dataList.forEach(function (item) {
            for (item2 in dataList2) {
                if (item.id == item2) {
                    console.log('匹配成功');
                    datas[item.id] = { imagePath: dataList2[item2].imagePath, name: dataList2[item2].name }
                }
            }
        })

        console.log(JSON.stringify(datas));




        new Vue({
            el: "#app",
            data: {
                myData: dataList2,

            },
            methods:{
                clickMethod:function(){
                    
                }
            }

        });

    </script>
</body>

</html>
```