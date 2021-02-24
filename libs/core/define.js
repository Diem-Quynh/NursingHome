const awaitTo = require('await-to-js').default;
const rootDir = process.cwd();
const env = require('dotenv').config().parsed;

Object.defineProperty(global, '__ISDEV__', {
  get: function(){
    let mode = env['NODE_ENV'] || "development"
    if(mode == "production") return false
    return true
  }
})
Object.defineProperty(global, '__ROOTDIR__', {
  get: function(){
    return rootDir
  }
})

Object.defineProperty(global, 'use', {
  get: function () {
    throw Error("Sử dụng require thay cho use")
  }
});

Object.defineProperty(global, 'to', {
  get: function () {
    return (promise) => awaitTo(promise)
  }
});