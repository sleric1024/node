const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url =ctx.url;
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    let add = {
      hello: 'world'
    };


    ctx.body= {
        url,
        req_query,
        req_querystring,
        add
    };

});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});