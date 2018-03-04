

const http = require('http');  //因为 这个 http 库引用之后就不会去改它，所以我们用常量来表示

http.createServer();   //创建一台服务器