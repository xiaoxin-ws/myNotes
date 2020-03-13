/**
 * 简单文件写入（异步）
    fs.readFile(file,data[,options],callback){
      }
 * --file：文件路径+文件名
 * --options：配置选项（可选参数）
 *      --flag：打开文件后要进行的操作
 *          'w':直接写入（默认）
 *          'a'：追加
 *      --mode:文件权限，默认0o666(222+444=666可读可写)
 *          --0o111：文件可被执行
 *          --0o222: 文件可被写入
 *          --0o444: 文件可被读取
 *      --encoding:编码（默认utf8）  
 * --callback：回调函数
 *      --err参数
 *      --data数据
 * 
 * 注意：node中有一个设计原则，错误优先！
 */
let fs =require('fs')
fs.readFile('./q.txt',(err,data)=>{
    if(!err){
        //toString是buffer自带的文本适用
        console.log(data.toString());
    }else{
        console.log(err);
        
    }
})