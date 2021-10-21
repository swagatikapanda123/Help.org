const asyncHandler = require('express-async-handler')
const Work = require('../models/workModel.js')

exports.getWorks = asyncHandler(async (req, res) => {
  const works = await Work.find({})

  res.json(works)
})

exports.createWork = asyncHandler(async (req, res) => {
  const work = new Work({
    user: req.user._id,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  })

  const createdWork = await work.save()
  res.status(201).json(createdWork)
})
