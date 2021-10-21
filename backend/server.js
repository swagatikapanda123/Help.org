const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')
const workRoutes = require('./routes/workRoutes.js')
const blogRoutes = require('./routes/blogRoutes.js')

const works = require('./data/works')

app.use(express.json())

dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('happy helping')
})

app.use('/api/users', userRoutes)
app.use('/api/works', workRoutes)
app.use('/api/blogs', blogRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)
