//create our server object
const koa = require('koa');
let server = new koa();

//create static folder - frontend
const static = require('koa-static');

//creating our router
const Router = require('koa-router');
let route = new Router;

//routes
route.get('/',(ctx, next) => ctx.body = 'Hello World');

//middleware - between request and response
server.use(route.routes())
server.use(static('./public'));

//our listener on port 1985
server.listen(1985, 'localhost',() => console.log('Listening on port 1985'));