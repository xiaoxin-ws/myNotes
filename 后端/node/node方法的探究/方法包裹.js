//通过node ***.js   的方式运行这个文件得到下面信息

//打印包裹自身方法的信息，并转化为字符串
// console.log(arguments.callee.toString());

/*
    自执行函数
    (function (exports, require, module, __filename, __dirname) {
        打印包裹自身方法的信息，并转化为字符串
        console.log(arguments.callee.toString());
        打印参数信息
        console.log("exports：",exports);
        console.log("__dirname：",__dirname);
        console.log("__filename：",__filename); 
        console.log("require：",require);
        console.log("module：",module);
    })(exports,require,module,__filename,__dirname);
   参数的解释
   1.exports:     *可以用来创建模块，是一个对于module.exports更加简短的引用形式（权限没有module.exports高）
   2.require：    *主要是能够在当前模块引入其它模块，就是引入模块
   3.module:      *基本包含了当前模块的全部信息,创建模块的事，module.exports也能办到，而且这才是真正的老大，
                   exports不过是module的小弟，好东西都要上交给module的
   4.__filename： *当前模块的文件路径（解析后的绝对路径包含文件名和后缀名）
   5.__dirname：  *存放当前模块的文件夹路径（解析后的绝对路径不包含文件名和后缀名）
 */

//输出存放当前模块的文件夹名称
//console.log(__dirname);
//输出当前的绝对路径
//console.log(__filename);
//引用创建好的测试模块 测试require和exports
// var myCard=require("./测试1");
// console.log("得到模块，测试1：",myCard);


/*require()括号里可填绝对路径或者相对路径，只要拟引入路径是指向后缀
名为js的文件，node都会认同“它是模块”，至于文件内容合不合法，他不会管*/
//var myCard=require(__dirname+'/Untitled2.js');
/*如果是写相对路径的话，要注意一点，同级文件名称要改为./统计文件名称*/
//console.log(myCard);
