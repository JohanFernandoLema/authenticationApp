import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// Connections for making the server
const app = express()

// Middleware for enabling json
app.use(express.json())
dotenv.config()

// Database Connection
const cloudDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to mongo db cloud successfully')
  } catch (err) {
    throw err
  }
}

app.get('/', (req, res) => {
  res.send('It is connected that is why it is working')
})

app.listen(4000, () => {
  cloudDb()
  console.log(`App successfully running on port: 4000`)
})
