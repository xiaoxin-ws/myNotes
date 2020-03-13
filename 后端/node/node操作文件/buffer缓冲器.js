/*
1.Buffer是什么？
    1.它是一个类似于数组的对象，用于存储数据（储存二进制数据）
    2.Buffer的效率很高，存储读很快，直接对计算机的内存进行操作
    3.Buffer的大小一旦确定，不可修改
    4.每个原素占用的内存的大小为1字节，
    5.Buffer是Node中的非常核心的模块，无需下载，无需引入即可使用
2.进制
    十六进制：00----ff
    十进制：  00------255
    二进制：  00000000----11111111

    十进制转二进制的16，8，4，2，1码
    17---16+1======10001


    8 bit(位) = 1 byte（字节）
    1024 byte = 1KB
    1024KB =1MB
*/
// 1.将'H'存入Buffer
let str = 'H'
let bufStr = Buffer.from(str);
console.log(bufStr);

// 2.创建一个Buffer实例（存的空间大小）
let buf1 = new Buffer(10);//效率低，以弃用，找空间，打扫干净，拿来用
let buf2 = Buffer.alloc(10);//效率一般,找没用过得内存空间（干净）
let buf3 = Buffer.allocUnsafe(10);//效率好，但是不安全，只要是没用了就拿来用（不干净）







