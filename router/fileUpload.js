const path = require('path')
const fs = require('fs')

const tmpdir = path.join(__dirname, "../public/upload"); 
const filePaths = [];  
fn_fileUpSingle = (ctx, next) => {
  debugger
  const files = ctx.request.files.file || {};
  if(Object.prototype.toString.call(files) == '[object Array]'){
    for(var j = 0; j < files.length; j++ ){
        witeFile(files[j]);
    }
  }else{
      witeFile(files);
  }
  return ctx.body = filePaths
}
function witeFile(file){
  const filePath = path.join(tmpdir, file.name);
  const reader = fs.createReadStream(file.path);
  const writer = fs.createWriteStream(filePath);
  reader.pipe(writer);
  filePaths.push(filePath);
}

module.exports = [
  {
    method: 'post',
    path: '/api/fileUpSingle',
    fn: fn_fileUpSingle
  }
];