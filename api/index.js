import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

// Middlewares
app.use(express.json())

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
