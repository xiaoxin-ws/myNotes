//引入
let express = require('express');

//创建app服务对象
let app = express();

//影藏服务器具体实现
app.disable('x-powered-by')
//console.log(app);

//设置路由
//git监听
app.get('/',(request,response)=>{
    //console.log(request.url);
    
    //设置请求头
    
    response.setHeader('content-type','text/html;charset=utf-8');
    response.setHeader('x-powered-by','q');
    //response.writeHead(200,{
        //字符串输出
        //'Content-Type':'text/plain;charset=utf-8',
        //转义为html
        //'content-type':'text/html;charset=utf-8'
    //});
    //根路由
    //访问的url后面带上监听关键字，发送的请求必须是GET请求
    response.write('<h1>我是主页面</h1>');
    response.send();
});
app.get('/meishi',(request,response)=>{
    //一级路由
    //response.send('我是美食页面');
    //访问的url后面带上监听关键字，发送的请求必须是GET请求
    let a = request.query;
    console.log(a);
    
    response.send('<h1>我是美食页面</h1>');
});
app.get('/meishi/huoguo',(request,response)=>{
    //二级路由
    //response.send('我是美食页面');
    //访问的url后面带上监听关键字，发送的请求必须是GET请求
    response.send('<h1>我是美食页面下面的火锅</h1>');
});
//post监听
app.post('/data',(request,response)=>{
    //该方法没用
    //let a =request.query
    //console.log(a);
    let a =request.body;//获取请求过来的请求体中的数据，需要中间件
    console.log(a);
    resquest.write('你请求的是post的/data路由！这是我给你响应的数据')
    response.send()
});

//绑定端口监听
app.listen(3000,(err)=>{
    if (!err) console.log("成功");
    
});

//脚手架安装
//npm i express-generator -g
//创建
//express jadeapp 默认是jade模板
//express myapp --view=ejs ejs模板



/*
http是应用层协议：超文本传输协议，规订，两个人交流的方式
特点：无状态（一次就是一次的，不记得之前的记录）
cookie（session）：解决了http无状态问题

作用：定义规矩（报文，请求报文，响应报文）
版本：
1.0：不支持长连接（实时聊天，不能断就是长连接，）
1.1：（常用）支持长连接，但是同时发送的资源数量过小（4-8）
2.0：同时发送的资源数量有提升8-12个


报文组成
1,报文首行
POST http://localhost:3000/data HTTP/1.1
    请求方式 协议名：//主机名：端口/路由关键字  协议版本
2报文头
Host: localhost:3000
    ---访问主机名（地址：仅仅包含主机名和端口）
    ---防盗链，广告计费
Connection: keep-alive
    ---告诉服务器支持长连接
Content-Length: 15
    ---告诉服务器请求体长度
Cache-Control: max-age=0
    ---控制强缓存
Upgrade-Insecure-Requests: 1
    ---告诉服务器,浏览器支持https协议
Origin: null
Content-Type: application/x-www-form-urlencoded
    ---标识请求来源于form表单
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36
    ---用户代理，告诉服务器，访问他浏览器的内核，品牌，早起判断浏览器的版本，现在不可用了，因为ie
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
DNT：1
    ---禁止跟踪，并不是写了就有用
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*//*//;q=0.8,application/signed-exchange;v=b3
    ---告知服务器，浏览器能接受的文件类型，q是资源优先级默认是1
//Sec-Fetch-Site: cross-site
//Referer：完整地址
    ---在当前url下发出去的请求，是一个完整的url，
    ---防盗链，广告计费
//Accept-Encoding: gzip, deflate, br
    ---告诉服务器，浏览器支持的压缩格式
//Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
    ---告诉服务器，浏览器支持的语言（权限q不能取极限值1，否则其他就不返回了）
//Cookie
    ---webstorm帮你种的一个cookie
3.空行



4.报文体
//name=12&age=123
    ---携带过去的数据


https协议：更安全了
*/
