const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModel.js')

exports.getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({})

  res.json(works)
})

exports.createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    image: req.body.image,
    article: req.body.blog,
  })

  const createdBlog = await blog.save()
  res.status(201).json(createdBlog)
})
