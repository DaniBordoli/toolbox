const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(cors({ origin: true }))

app.use('/', require('./routes'))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

module.exports = app
