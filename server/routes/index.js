const router = require('koa-router')()

router.post('/user_router_auth', async (ctx, next) => {
  const { uid } = ctx.request.body;
  if (uid) {
    let authRouterInfo = []
    ctx.body = authRouterInfo
  } else {
    next()
  }

})


module.exports = router
