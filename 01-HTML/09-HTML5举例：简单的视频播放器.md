---
title: 09-HTML5举例：简单的视频播放器
publish: true
---

<ArticleTopAd></ArticleTopAd>


我们采用 Bootstrap 网站的图标字体，作为播放器的按钮图标。

index.html的代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <!-- 引入字体图标的文件-->
    <link rel="stylesheet" href="css/font-awesome.min.css"/>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        /*多媒体标题*/
        figcaption{
            text-align: center;
            line-height: 150px;
            font-family: "Microsoft Yahei";
            font-size:24px;
        }

        /* 播放器*/
        .palyer{
            width: 720px;
            height: 360px;
            margin:10px auto;
            border: 1px solid #000;
            background: url(images/loading.gif) center no-repeat #000;
            background-size:auto 100%;
            position: relative;
            border-radius: 20px;

        }

        .palyer video{
            height:100%;
            display: block;
            margin:0 auto;
            /*display: none;*/
        }

        /* 控制条*/

        .controls{
            width: 700px;
            height:40px;
            background-color: rgba(255, 255, 0, 0.3);
            position: absolute;
            bottom:10px;
            left:10px;
            border-radius: 10px;
        }
        /*开关*/
        .switch{
            position: absolute;
            width: 20px;
            height: 20px;
            left:10px;
            top:10px;

            text-align: center;
            line-height: 20px;
            color:yellow;

        }
        /*进度条*/
        .progress{
            width: 432px;
            height: 10px;
            position: absolute;
            background-color: rgba(255,255,255,0.4);
            left:40px;
            top:15px;
            border-radius: 4px;
            overflow: hidden;
        }
        /* 当前进度*/
        .curr-progress{
            width: 50%;
            height: 10px;
            background-color: #fff;
        }
        /* 时间模块*/
        .time{
            width: 120px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            color:#fff;
            position: absolute;
            left:510px;
            top:10px;
            font-size:12px;

        }
        /*全屏*/
        .extend{
            position: absolute;
            width: 20px;
            height: 20px;

            right:20px;
            top:10px;

            text-align: center;
            line-height: 20px;
            color:yellow;
        }

    </style>
</head>
<body>
    <!-- 多媒体-->
    <figure>
        <!--  多媒体标题-->
        <figcaption>视频案例</figcaption>
        <div class="palyer">
            <video src="video/fun.mp4"></video>
            <!-- 控制条-->
            <div class="controls">
                <!-- 播放暂停-->
                <a href="#" class="switch  icon-play"></a>
                <div class="progress">
                    <!-- 当前进度-->
                    <div class="curr-progress"></div>
                </div>
                <!-- 时间-->
                <div class="time">
                    <span class="curr-time">00:00:00</span>/<span class="total-time">00:00:00</span>
                </div>
                <!-- 全屏-->
                <a href="#" class="extend  icon-resize-full"></a>
            </div>

        </div>
    </figure>

    <script>
        // 思路：
        /*
        * 1、点击按钮 实现播放暂停并且切换图标
        * 2、算出视频的总时显示出出来
        * 3、当视频播放的时候，进度条同步，当前时间同步
        * 4、点击实现全屏
        */

//        获取需要的标签
            var  video=document.querySelector('video');
//          播放按钮
            var  playBtn=document.querySelector('.switch');
//          当前进度条
            var  currProgress=document.querySelector('.curr-progress');
//          当前时间
            var  currTime=document.querySelector('.curr-time');
//          总时间
            var  totalTime=document.querySelector('.total-time');
//          全屏
            var extend=document.querySelector('.extend');

            var tTime=0;

//         1、点击按钮 实现播放暂停并且切换图标

           playBtn.onclick=function(){
//               如果视频播放 就暂停，如果暂停 就播放
               if(video.paused){
//                   播放
                   video.play();
                   //切换图标
                   this.classList.remove('icon-play');
                   this.classList.add('icon-pause');
               }else{
//                   暂停
                    video.pause();
//                   切换图标
                   this.classList.remove('icon-pause');
                   this.classList.add('icon-play');}
           }

//        2、算出视频的总时显示出出来
//        当时加载完成后的事件，视频能播放的时候
        video.oncanplay=function(){
//             获取视频总时长
            tTime=video.duration;
            console.log(tTime);

//          将总秒数 转换成 时分秒的格式：00：00:00
//            小时
            var h=Math.floor(tTime/3600);
//            分钟
            var m=Math.floor(tTime%3600/60);
//            秒
            var s=Math.floor(tTime%60);

//            console.log(h);
//            console.log(m);
//            console.log(s);

//            把数据格式转成 00:00：00
            h=h>=10?h:"0"+h;
            m=m>=10?m:"0"+m;
            s=s>=10?s:"0"+s;


            console.log(h);
            console.log(m);
            console.log(s);
//            显示出来
            totalTime.innerHTML=h+":"+m+":"+s;
        }
//   * 3、当视频播放的时候，进度条同步，当前时间同步
//         当时当前时间更新的时候触发
        video.ontimeupdate=function(){
//            获取视频当前播放的时间
//           console.log(video.currentTime);
//            当前播放时间
            var cTime=video.currentTime;
//           把格式转成00:00:00

            var h=Math.floor(cTime/3600);
//            分钟
            var m=Math.floor(cTime%3600/60);
//            秒
            var s=Math.floor(cTime%60);

//            把数据格式转成 00:00：00
            h=h>=10?h:"0"+h;
            m=m>=10?m:"0"+m;
            s=s>=10?s:"0"+s;

//            显示出当前时间
            currTime.innerHTML=h+":"+m+":"+s;

//            改变进度条的宽度： 当前时间/总时间
            var value=cTime/tTime;

            currProgress.style.width=value*100+"%";

        }

//        全屏
        extend.onclick=function(){
//            全屏的h5代码
            video.webkitRequestFullScreen();
        }

    </script>
</body>
</html>
```





工程文件：[2018-02-23-H5多媒体播放器.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-23-H5%E5%A4%9A%E5%AA%92%E4%BD%93%E6%92%AD%E6%94%BE%E5%99%A8.rar)



