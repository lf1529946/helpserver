const router = require('koa-router')()
const bll = require('./../pub/bll/wxuser.js')

router.prefix('/api/wx/user')

router.post('/login', async (ctx, next) => {
    let result = await bll.login(ctx)
    ctx.body = result;
})
router.post('/update', async (ctx, next) => {
    let result = await bll.update(ctx)
    ctx.body = result;
})
router.post('/del', async (ctx, next) => {
    let result = await bll.del(ctx)
    ctx.body = result;
})

router.post('/get', async (ctx, next) => {
    let result = await bll.getList(ctx)
    ctx.body = result;
})
router.post('/get/info/wxid', async (ctx, next) => {
    let result = await bll.getInfoById(ctx)
    ctx.body = result;
})
router.post('/get/info', async (ctx, next) => {
    let result = await bll.getInfos(ctx)
    ctx.body = result;
})
router.post('/regis', async (ctx, next) => {
    let result = await bll.addInfo(ctx)
    ctx.body = result;
})
router.post('/update/info', async (ctx, next) => {
    let result = await bll.updateInfo(ctx)
    ctx.body = result;
})
router.post('/update/info/state', async (ctx, next) => {
    let result = await bll.updateInfoState(ctx)
    ctx.body = result;
})
module.exports = router