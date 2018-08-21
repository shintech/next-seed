const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const path = require('path')
const compression = require('compression')
const favicon = require('serve-favicon')
const morgan = require('morgan')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const nextRoutes = require('../routes')
const getRouter = require('./router')

const logger = require('./logger')({ environment })
const dev = environment !== 'production'

const app = next({ dev })

const handler = nextRoutes.getRequestHandler(app)

const fileAssets = express.static(
  path.join(__dirname, '../public')
)

app.prepare()
  .then(() => {
    const server = express()

    const api = getRouter({ logger })

    if (environment === 'development') server.use(morgan('dev'))

    server.use('/public', fileAssets)
      .use(favicon(path.join('public', 'images', 'favicon.png')))
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(compression())
      .use('/api', api)
      .use(handler)

      .listen(port, 'localhost')

      .on('listening', () => {
        logger.info(`listening on port ${port}...`)
      })

      .on('error', (err) => {
        throw (err)
      })
  })
