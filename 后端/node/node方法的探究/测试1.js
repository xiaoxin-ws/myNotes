//量身为我而做的名片模块

// exports.name="测试1";
// exports.qq="12580";

//module.exports赋值成类型为字符串，不为对象，不受exports创建子集影响
//打印出  “我是不会变成对象的”
// module.exports="我是不会变成对象的";
// exports.name="测试2";
// exports.qq="12580";

//module.exports类型想为对象，并创建子集，鸟都不鸟exports的请求
exports="我要变对象";
module.exports.name="测试2";
module.exports.qq="12580";