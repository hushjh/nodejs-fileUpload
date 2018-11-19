const Koa = require('koa');
const koaBody = require('koa-body')

// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser')
const controller = require('./router/index')
const app = new Koa();

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
  }
}))
app.use(bodyParser())
// add url-route:
app.use(controller())
// add router middleware:
app.listen(3000);
console.log('app started at port 3000...');