const miniReplace = require('../index.js');
console.log('hello world');
console.log(miniReplace);
miniReplace(process.cwd(), /hello/, 'ddd');

// reg = /('|")(\S+)(\1)/g 匹配括号里面的字符
// reg = /('|")((\S*(?=bizcharts-plugin-slider@2.0.0))(\S+))(\1)/ //实现模糊查询的正则