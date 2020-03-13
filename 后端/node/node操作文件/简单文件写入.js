
//不足：这个是一次性将要写入的文件加载到内存，文件大就容易爆内存
/**
 * 简单文件写入（异步）
    fs.writeFile(file,data[,options],callback){
      }
 * --file：文件路径+文件名
 * --data：要写入的数据
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
 * 
 * 注意：node中有一个设计原则，错误优先！
 */

//引入fs模块，node核心模块
let fs =require('fs');
//进行简单写入
fs.writeFile('./q.txt','明天放假了，我很开心！',{
    flag:'w',
    mode:0o666,
    encoding:'utf8'
},(err)=>{
    if(!err){
        console.log('写入成功！',err);
    }else if(err){
        console.log(err);
        
    }
})
