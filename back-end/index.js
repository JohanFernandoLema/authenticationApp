import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

// Schema imports
import { SignUpSchema } from './models/signUpSchema.js'

// Middlewares
const PORT = 5000
const app = express()
app.use(express.json())
app.get('/', (req, res) => res.send('Hello'))
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  const startingInfo = { hairColor: '', favoriteFood: '', bio: '' }

  const result = await SignUpSchema.insertMany({
    email,
    passwordHash,
    info: startingInfo,
    isVerified: false,
  })
  const insertedId = result

  jwt.sign(
    {
      id: insertedId,
      email: email,
      info: startingInfo,
      isVerified: false,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2d',
    },
    (err, token) => {
      if (err) {
        return res.status(500).send(err)
      }
      res.status(200).json({ token })
    }
  )
})

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
