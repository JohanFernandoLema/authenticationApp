import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/UserSchema'

const router = express.Router()

router.post('api/login', async (req, res) => {
  const { email, password } = req.body

  const user = User.findOne({ email })

  if (!checkEmail) return res.send(401)

  const { _id: id, passwordHash } = user

  const isCorrect = await bcrypt.compare(password, passwordHash)

  const token = jwt.sign({ id, email }, 'shhhhhhhhh', { expiresIn: '2h' })
  if (isCorrect) {
    return res.status(200).json({ token })
  } else {
    return res.status(401)
  }
})

export default router
