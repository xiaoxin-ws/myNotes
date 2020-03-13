/*

fs.createReadStream(path,[,options],callback)
		--path:文件路径+文件名
		--options：配置选项（可选参数）
			--start：读取的起点
			--end：读取的终点
			----highWaterMark：每次读取数据的大小，默认是64*1024=65536

*/

let fs = require('fs');
let rs = fs.createReadStream('./w.txt',{
	// start:6000,
	// end:10000,
	// highWaterMark:1024*1024
});
rs.on('open',()=>{
	console.log("可读流打开了");
	
});
rs.on('close',()=>{
	console.log("可读流关闭了");
	//如果边读边写，需在此处关闭写的流
	//因为是异步的流方法
	//ws.close();
	
});

rs.on('data',(data)=>{
	console.log(data.toString());
});

