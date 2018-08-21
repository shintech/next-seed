module.exports = function ({ db, logger }) {
  return {
    initialize: async function (req, res) {
      res.status(200)
        .format({
          json: () => {
            res.write(JSON.stringify({ message: 'Done...' }))
            res.end()
          }
        })
    }
  }
}
