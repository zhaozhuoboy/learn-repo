const Koa = require('koa');
const http = require('http');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const path = require('path');
const fs = require('fs');
const os = require('os');
const logger = require('koa-logger');
const serve = require('koa-static');


const app = new Koa();
app.use(koaBody({ multipart: true }));
//关闭cors
app.use(cors());
//logger
app.use(logger())

app.use(serve(path.join(__dirname, '/public')));





const router = require('./router')();
app.use(router.routes());





http.createServer(app.callback()).listen(3000);