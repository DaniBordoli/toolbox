const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/', (req, res, next) => {
  res.status(200).send('API its working, ingresaste correctamente')
})

router.get('/files/list', apiController.getFilesList)

router.get('/files/data', apiController.getFormattedData)

module.exports = router
