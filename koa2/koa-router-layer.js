const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// const router = new Router({
//   prefix: '/eric'
// });

let home = new Router();
home.get('/eric', async(ctx) => {
  ctx.body = 'Hello Home Page: eric';
}).get('/todo', async(ctx) => {
  ctx.body = 'Hello Home Page: todo';
});

let list = new Router();
list.get('/eric', async(ctx) => {
  ctx.body = 'Hello List Page: eric';
}).get('/todo', async(ctx) => {
  ctx.body = 'Hello List Page: todo';
});

let routerSec = new Router();
routerSec.use('/home', home.routes(), home.allowedMethods());
routerSec.use('/list', list.routes(), list.allowedMethods());

let routerRoot = new Router();
routerRoot.use('/root', routerSec.routes(), routerSec.allowedMethods());

app
  .use(routerRoot.routes())
  .use(routerRoot.allowedMethods());

app.listen(3000, () => {
  console.log('server is starting at port 3000!');
});
