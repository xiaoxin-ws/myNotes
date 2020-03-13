//1.引入http模块--是node中的核心模块无需下载直接使用，创建服务
let http =require('http');
let url = require('url');
let querystring = require('querystring');

//2.创建server对象
let server = http.createServer((request,response)=>{
    //request:请求对象-----客户端发给服务器的
    //response：响应对象-------服务器给客户端的
    
    //console.log(request.url);
    if (request.url!=='/favicon.ico') {
        //console.log(request.url);
        //console.log(url.parse(request.url));
        //console.log(url.parse(request.url,true).query.name);//url的第二个值为true时默认使用querystring转换了
        //console.log(querystring.parse(url.parse(request.url).query));
        
    }
    
    
    //请求头
    //response.setHeader('content-type','text/html;charset=utf-8');
    response.writeHead(200,{
        //字符串输出
        //'Content-Type':'text/plain;charset=utf-8',
        //转义为html
        'content-type':'text/html;charset=utf-8'
    });
    response.write("ok!你好");
    response.write("<h1>ok!你好</h1>");
    response.end();
});

//3.绑定端口监听
server.listen(3000,(err)=>{
if(!err){
    console.log("成功！");
}else{
    console.log("失败！");
    
}
});



//node终端中
//url.parse('http://www.baidu.com/html5?class=1904&address=sh#am')
//转化对象url.parse('http://www.baidu.com/html5?class=1904&address=sh#am',true)
//Url {
//     protocol: 'http:',        
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',    
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: '#am',
//     search: '?class=1904&address=sh',
//     query: 'class=1904&address=sh',
//     pathname: '/html5',
//     path: '/html5?class=1904&address=sh',
//     href: 'http://www.baidu.com/html5?class=1904&address=sh#am'
//   }

//let querystring = require('querystring')
//let {parse} = require('querystring') //结构赋值
//let str = request.url.split('?')[1];
//querystring.parse('name=wqe&pass=1234');
//let obj = querystring.parse(str);
//let obj = parse(str);
//console.log('----------------------------');