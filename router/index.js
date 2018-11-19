const router = require('koa-router')()
const hello = require('./hello')
const fileUpload = require('./fileUpload')
const defHtml = require('./default')


module.exports = () => {
  let routes = [].concat(hello, fileUpload, defHtml)
  routes.forEach((item) => {
    let {method, path, fn} = item
    switch (method) {
      case 'get':
        router.get(path, fn)
        console.log(`register Url mapping: get ${path}`)
        break
      case 'post':
        router.post(path, fn)
        console.log(`register Url mapping: post ${path}`)
        break
      default:
        break
    }
  })
  return router.routes()
}