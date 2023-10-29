import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/UserSchema.js'

const router = express.Router()

router.post('/api/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  // Check if user does not exist
  if (!user) {
    return res.status(401).send('User / Password are not recognized')
  }
  // Check for fields to be completed
  if (!(email && password)) {
    return res.status(401).send('Both fields are mandatory')
  }

  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    return res.status(401).send('User / Password are not recognized')
  }
  const token = jwt.sign({ id: user._id, email }, 'process.env.JWT', {
    expiresIn: '2h',
  })
  user.token = token
  user.password = undefined

  return res.status(200).send({ token })
})

export default router
