const fs = require('fs');
const path = require('path');
// ## fs文件操作
//### 异步删除文件

// fs.unlink('./files/read.txt', (err) => {
//     if (err) throw err;
//     console.log('成功删除');
// });

// ### 给文件重命名

// fs.rename('./files/a.txt','./files/read.txt', (err) => {
//     if(err) throw err;
//     console.log('done!')
// })


//### 查看文件属性

// fs.stat('./files/read.txt',(err,stats) => {
//     if(err) throw err;
//     console.log(`文件属性：${JSON.stringify(stats)}`)
// })

// ### 例子，处理 fs.watch 监听器
// filename 参数可能不会被提供，这依赖于操作系统支持。 如果提供了 filename，则若 fs.watch() 被调用时 encoding 选项被设置为 'buffer' 则它会是一个 Buffer，否则 filename 是一个字符串。
// fs.watch('./files/read.txt',  (eventType, filename) => {
//     if (filename) {
//         console.log(filename);
//         // 输出: <Buffer ...>
//     }
// });


// ## path路径操作
// ### path.basename() 方法返回一个 path 的最后一部分，类似于 Unix 中的 basename 命令。

// let filename = path.basename('./files/read.txt');//返回值带扩展名

// let filename = path.basename('./files/read.txt','.txt');//返回值不带扩展名
// console.log('文件名:',filename)


// ### path.dirname() 方法返回一个 path 的目录名，类似于 Unix 中的 dirname 命令。

// let dir = path.dirname('./files/read.txt');
// console.log(dir)

// ### path.extname(path)

// path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个.（句号）字符到字符串结束。 如果 path 的最后一部分没有.或 path 的文件名（见 path.basename() ）的第一个字符是.，则返回一个空字符串。
// let k = path.extname('./files/read.txt')
// console.log(k) // ==> .txt

// path.extname('index.html');
// // 返回: '.html'

// path.extname('index.coffee.md');
// // 返回: '.md'

// path.extname('index.');
// // 返回: '.'

// path.extname('index');
// // 返回: ''

// path.extname('.index');
// // 返回: ''

// ### path.join([...paths])
// path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
// let newPath = path.join(...['/test','/haha'])
// console.log(newPath)  // ===> /test/haha

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

