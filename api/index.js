import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute.js'
import cors from 'cors'
const app = express()
const PORT = 4000

// Middlewares
app.use(express.json())
app.use(cors())
// CALLING URIs
app.get('/', userRoute)
app.post('/signup', userRoute)
app.post('/login', userRoute)

const MONGO_URI = 'mongodb://127.0.0.1:27017/react-auth-db'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Successfully connected in your local DB')
    app.listen(PORT, () => {
      console.log(`Application running on PORT: ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
