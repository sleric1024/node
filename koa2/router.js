const koa = require('koa');
const fs = require('fs');
const app = new koa();


app.use(async(ctx) => {
  let url = ctx.request.url;
  let html = await matchRoute(url);
  ctx.body = html;
});

async function matchRoute(url) {
  let page = '404.html';
  switch(url) {
    case '/':
        page ='index.html';
        break;
    case '/index':
        page ='index.html';
        break;
    case '/todo':
        page = 'todo.html';
        break;
    case '/404':
        page = '404.html';
        break;
    default:
        break;
  }

  let html = await render(page);
  return html;
}

function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`;
    fs.readFile(pageUrl, 'binary', (error, data) => {
      console.log('Reading');
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

app.listen(3000, () => {
  console.log('Server starting at port 3000!')
});