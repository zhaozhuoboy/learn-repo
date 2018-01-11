const Router  = require('koa-router');
const fs = require('fs');
const os = require('os');
const path = require('path');
const koaBody = require('koa-body');//解析request body


module.exports = function () {
    /**
     * 为接口地址添加前缀
     * 例如：接口ip是  localhost:3000
     * 接口的根  地址应该是  http://localhost:3000/api
     */
    var router = new Router({
        prefix: '/api'
    })
    
    
    router.get('/test', async ctx => {
        ctx.body={
            data:'test'
        }
    })
    router.post('/posts', async ctx => {
        //-POST 请求提交过来的参数在  ctx.request.body里
        const bodys = ctx.request.body;
        ctx.body={
            data: bodys
        }
    })


    router.post('/upload', async (ctx, next) => {
        const file = ctx.request.body.files.file;
        const homeDir = path.resolve(__dirname);
        const reader = fs.createReadStream(file.path);
        const stream = fs.createWriteStream(path.join(homeDir, '/public/upload', `upload_${Math.random().toString()}${file.name}`));
        reader.pipe(stream);
        console.log('uploading %s -> %s', file.name, stream.path);

        ctx.body={
            file_path: stream.path
        };
    });
    router.post('/upload/formdata',async (ctx, next) => {
        let formdata = ctx.request.body.fields;
        let file = ctx.request.body.files.files;
        console.log(file)
        const homeDir = path.resolve(__dirname);
        const reader = fs.createReadStream(file.path);
        const stream = fs.createWriteStream(path.join(homeDir, '/public/upload', `upload_${Math.random().toString()}${file.name}`));
        reader.pipe(stream);
        console.log('uploading %s -> %s', file.name, stream.path);

        ctx.body = {
            file_path: stream.path
        };
    });

    return router
}