let fs=require('fs');
// 1.可写流
// fs.createWriteStream(path,[,options])
// --path:文件路径加文件名
// --options:配置对象（可选）
// --flags：打开文件后要进行的操作
//  *          'w':直接写入（默认）
//  *          'a'：追加
// --mode:文件权限，默认0o666(222+444=666可读可写)
//  *          --0o111：文件可被执行
//  *          --0o222: 文件可被写入
//  *          --0o444: 文件可被读取
//  --encoding:编码（默认utf8）
    // --fd:文件的唯一标识
    // --autoClose：（默认true）自动关闭，数据操作完毕后自动关闭文件不是流
    // --start：文件写入的起始位置
let ws = fs.createWriteStream('./w.txt',{
        //start:20,
        //encoding:'utf8'
    }
);//创建
ws.on('open',()=>{
    console.log("流打开了");
});
ws.on('close',()=>{
    console.log("流关闭了");
});
ws.write('下班了\n');//写入
ws.write('下班了');
ws.write('下班了');
ws.write('下班了');
//ws.close();//8版本一下不支持
ws.end();//解决8版本的bug


