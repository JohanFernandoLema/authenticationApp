import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

// Middlewares
const app = express()
app.use(express.json())

// Connecting with local db

const MONGO_URI = 'mongodb://127.0.0.1:27017/react-auth-db'

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  const startingInfo = { hairColor: '', favoriteFood: '', bio: '' }
})

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('You are connected to the database')
    app.listen(process.env.PORT, () => {
      console.log('Connected successfully to back-end')
    })
  })
  .catch((err) => {
    console.log(err)
  })
