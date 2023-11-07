import express from 'express'
import User from '../models/User.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Home page is working - send more data :)')
})

router.post('/signup', (req, res) => {
  const { email, password } = req.body

  const verifyEmail = User.findOne({ email })
  if (!verifyEmail) return res.sendStatus(404)

  const saveUser = User.create({ email: email, password: password })

  res.send(saveUser)
})

export default router
