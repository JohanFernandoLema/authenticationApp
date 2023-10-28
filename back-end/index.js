import express from 'express'
import mongoose from 'mongoose'
import SignUpRoute from './routes/SignUpRoute.js'

// Middlewares
const PORT = 5000
const app = express()
app.use(express.json())
app.get('/', (req, res) => res.send('Hello'))
app.post('/api/signup', SignUpRoute)

// Connecting with local db
const MONGO_URI = 'mongodb://127.0.0.1:27017/react-auth-db'
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('You are connected to the database')
    app.listen(PORT, () => {
      console.log(`Connected successfully to back-end - port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
