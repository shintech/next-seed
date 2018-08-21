const express = require('express')

const home = require('./routes/home')

const router = express.Router()

module.exports = function (options) {
  router.route('/home')
    .get(home(options).initialize)

  return router
}
