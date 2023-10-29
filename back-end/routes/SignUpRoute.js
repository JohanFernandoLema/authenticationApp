import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/UserSchema.js'

const router = express.Router()
router.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.send('User already exists')
    }
    const hashPassword = await bcrypt.hash(password, 10)

    // Save user in DB
    const user = await User.create({ email, password: hashPassword })

    // Generate a token for user and send it
    const token = await jwt.sign({ id: user._id, email }, 'process.env.JWT', {
      expiresIn: '2h',
    })
    user.token = token
    user.email = email
    return res.status(201).json({ token })
  } catch (err) {
    res.send(err)
  }
})
export default router
