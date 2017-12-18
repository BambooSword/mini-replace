const fs = require('fs');

/**
 * 
 * @param {String} 匹配路径
 *
 * @param {String | RegExp} 匹配的正则表达式
 *
 * @param {String} 替换的内容
 *
 * @returns {void}
 */
function miniReplace(path, reg, replaceWord) {
  // 进行参数验证
  if(typeof path !=='string' && typeof replaceWord !== 'string') {
    throw new Error('the argument path and replaceWord expected a string. Place make sure you use the right type of the argument.');
  }
  if(typeof path !=='string'||Object.prototype.toString.call(reg)!=='[object RegExp]') {
    throw new Error('the argument reg expected a string or a RegExp. Place make sure you use the right type of the argument.');
  }
  // step1 找到要修改的文件集合
  let files = []

  function ScanDir(path) {
    let that = this;
    console.log(this);
    if (fs.statSync(path).isFile()) {
      return files.push(path)
    }
    try {
      fs.readdirSync(path).forEach(function (file) {
        ScanDir( path + '/' + file)
      })
    } catch (e) {
      console.error(e);
    }
  }
  ScanDir(path);
  // step2 遍历集合中的文件，匹配对应的正则，找到合适修改内容，把内容替换
  files.forEach((item) => {
    let data = fs.readFileSync(item, "utf-8");
    // let reg = /https:\/\/unpkg.com\/bizcharts@3.0.3\/umd\/BizCharts.min.js/g;
    console.log(data);
    let newdata = data.replace(reg, replaceWord);
    console.log(newdata);
    fs.writeFileSync(item, newdata);
  });
}
//miniReplace('./destination.txt', /hello/,'hello2');
module.exports = miniReplace;