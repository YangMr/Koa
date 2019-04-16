//引入koa
const Koa = require("koa");
//使用koa
const app = new Koa();
//通过app.use方法加载中间件
app.use(async (ctx,next)=>{
    ctx.body = "Hi Koa"
});
//监听端口号
app.listen(8888);
