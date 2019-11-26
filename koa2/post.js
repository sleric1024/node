const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {

  if (ctx.url === '/' && ctx.method === 'GET') {
    let html =`
      <h1>Koa2 request post demo</h1>
      <form method="POST"  action="/">
          <p>userName</p>
          <input name="userName" /> <br/>
          <p>age</p>
          <input name="age" /> <br/>
          <p>webSite</p>
          <input name='webSite' /><br/>
          <button type="submit">submit</button>
      </form>`;
      ctx.body = html;

  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = await parsePostData(ctx);
    ctx.body = postData;

  } else {
    ctx.body = '<h1>404 NOT FOUND!</h1>';
  }
});


function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      ctx.req.on('data', (data) => {
        postData += data;
      });

      ctx.req.addListener('end', () => {
        let parseData = parseQueryStr(postData);
        resolve(parseData);
      })

    } catch(error) {
      reject(error);
    }
  });
}

function parseQueryStr(queryStr) {
  let formattedData = {};
  let queryStrList = queryStr.split('&');

  for (let [index, item] of queryStrList.entries()) {
    let itemList = item.split('=');
    formattedData[itemList[0]] = itemList[1];
  }

  return formattedData;
}

app.listen(3000, () => {
  console.log('server is listening at port 3000!');
});