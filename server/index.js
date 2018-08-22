const Koa = require('koa')
const next = require('next')
const serve = require('koa-static')
const compress = require('koa-compress')
const path = require('path')

const environment = process.env['NODE_ENV'] || 'development'
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'
const dev = environment !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const logger = require('./logger')({ environment })

const { router, api } = require('./router')()

app.prepare()
  .then(() => {
    const server = new Koa()

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(serve(path.join(__dirname, '../public')))

      .use(async (ctx, next) => {
        await next()
        const rt = ctx.response.get('X-Response-Time')
        logger.info(`${ctx.method} ${ctx.url} - ${rt}`)
      })

      .use(async (ctx, next) => {
        const start = Date.now()
        await next()
        const ms = Date.now() - start
        ctx.set('X-Response-Time', `${ms}ms`)
      })

      .use(compress({
        filter: function (contentType) {
          return /text/i.test(contentType)
        },
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
      }))

      .use(api.routes())
      .use(api.allowedMethods())

      .use(router.routes())
      .use(router.allowedMethods())

      .listen(port, host, () => {
        logger.info(`listening on port ${port}...`)
      })

      .on('error', (err) => {
        throw (err)
      })
  })
