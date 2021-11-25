const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')
const workRoutes = require('./routes/workRoutes.js')
const blogRoutes = require('./routes/blogRoutes.js')

//const works = require('./data/works')

app.use(express.json())

// mongoose
//   .connect(
//     'mongodb+srv://user:Pc8CLqCoYnJ6rBCr@cluster0.ur4cq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('Database connected'))
//   .catch((e) => console.log(e))

dotenv.config()
//mongoose.connect(keys.mongoURI, { useNewUrlParser: true,  useUnifiedTopology: true });
connectDB()

app.get('/', (req, res) => {
  res.send('happy helping')
})

app.use('/api/users', userRoutes)
//app.use('/api/works', workRoutes)
app.use('/api/blogs', blogRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)
