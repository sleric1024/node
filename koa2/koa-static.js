const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();
const staticPath = './static';

app.use(static(
  path.join(__dirname, staticPath)
));

app.use(async(ctx) => {
  ctx.body = '<h1>Hello World</h1>';
});

app.listen(3000, () => {
  console.log('Server is starting at port 3000 !');
});