const mongoose = require('mongoose')

const workSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Work = mongoose.model('Work', workSchema)

module.exports = Work
