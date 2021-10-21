const express = require('express')
const router = express.Router()
const controller = require('../controllers/blogController.js')

router.get('/', controller.getBlogs)
router.post('/create', controller.createBlog)

module.exports = router
