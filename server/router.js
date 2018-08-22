const Router = require('koa-router')

const router = new Router()

const api = new Router({
  prefix: '/api'
})

module.exports = function (options) {
  api.get('/home', async ctx => {
    ctx.set('Content-Type', 'application/json')
    ctx.body = JSON.stringify({ message: 'Success...' })
  })

  return {
    router,
    api
  }
}
