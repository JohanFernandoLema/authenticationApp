import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Home page is working - send more data :)')
})

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  // Verify if email exists to avoid multiple user creation
  const verifyEmail = await User.findOne({ email })
  if (verifyEmail) {
    return res.send('Verify the information is correct')
  }

  // Hash Password
  const hashPassword = await bcrypt.hash(password, 10)

  // Save user and display as json
  const user = await User.create({ email: email, password: hashPassword })

  // Use jwt to generate auth token
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    'secret',
    { expiresIn: '2h' }
  )
  user.token = token
  user.password = undefined

  return res.json(user)
})

export default router
