const path = require('path')
const fs = require('fs')
fn_default = (ctx, next) => {
  let filePath = path.join(__dirname)
  filePath = `${filePath}/../src/index.html`
  console.log('filePath', filePath)
  var data = fs.readFileSync(filePath, 'utf-8')
  return ctx.body = data
}

module.exports = [
  {
    method: 'get',
    path: '/index',
    fn: fn_default
  }
];