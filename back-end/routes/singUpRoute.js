import express from 'express'
import userSignUp from '../model/userSchema.js'
import { db } from '../db.js'
const router = express.Router()

router.post('/api/signup', async (req, res) => {
  const { email, password } = req.body
  const user = await db.collection('users').findOne({ email })
})

export default router
