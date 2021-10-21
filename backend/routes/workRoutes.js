const express = require('express')
const router = express.Router()
const controller = require('../controllers/workController.js')

router.get('/', controller.getWorks)
router.post('/create', controller.createWork)

module.exports = router
