const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController.js')
const auth = require('../middleware/authMiddleware.js')

router.post('/register', controller.registerUser)
router.post('/login', controller.authUser)

//for admin
router.get('/', auth.protect, auth.admin, controller.getUsers)
router.delete('/:id', auth.protect, auth.admin, controller.deleteUser)
router.get('/:id', auth.protect, auth.admin, controller.getUserById)
router.put('/:id', auth.protect, auth.admin, controller.updateUser)

//for user
router.get('/profile', auth.protect, controller.getUserProfile)
router.put('/profile', auth.protect, controller.updateUserProfile)

module.exports = router
