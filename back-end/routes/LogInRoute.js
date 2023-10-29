import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/UserSchema.js'

const router = express.Router()

router.post('api/login', async (req, res) => {
  const { email, password } = req.body

  if (!(email && password)) {
    res.status(400).send('Fields must be completed')
  }

  const user = await User.findOne({ email })

  // Check if user does not exist
  if (!user) {
    res.status(401).send('User/ Password are not recognized')
  }

  // If criteria given by user is correct return cookie
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    })
    user.token = token
    user.password = undefined
    return res.status(201).json({ token })
  }
})

export default router
