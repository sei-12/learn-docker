const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(proxy('/hello_world', { target: 'http://backend:3001' }))
}