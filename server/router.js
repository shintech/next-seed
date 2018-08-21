const express = require('express')

const home = require('./routes/home')

const router = express.Router()

module.exports = function (options) {
  router.get('/state', (req, res) =>
    res.status(200).json({
      status: 'ok'
    })
  )

  router.route('/home')
    .get(home(options).initialize)

  return router
}
