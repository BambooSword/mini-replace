const miniReplace = require('../index.js');
console.log('hello world');
console.log(miniReplace);
miniReplace(process.cwd(), /hello/, 'ddd');