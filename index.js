const fs = require('fs');
const readline = require('readline');

function miniSwap (path, reg, replaceWord) {
    // step1 找到要修改的文件集合
    let files = []
    function ScanDir(path) {
    let that = this
    if (fs.statSync(path).isFile()) {
        return files.push(path)
    }
    try {
        fs.readdirSync(path).forEach(function (file) {
        ScanDir.call(that, path + '/' + file)
        })
    } catch (e) {
        console.error(e);
    }
    }

    ScanDir(path);
    console.log(process.cwd());
    console.log(files)

    // step2 遍历集合中的文件，匹配对应的正则，找到合适修改内容，把内容替换
    files.forEach((item)=>{
        let data=fs.readFileSync(item,"utf-8");  
        //console.log(data); 
        // let reg = /https:\/\/unpkg.com\/bizcharts@3.0.3\/umd\/BizCharts.min.js/g;
        console.log(data);
        let newdata = data.replace(reg, replaceWord);
        console.log(newdata);
        fs.writeFileSync(item,newdata);
    });
}
module.exports = miniSwap;
