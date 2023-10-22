import { connectToDb } from '../db'
import bcrypt from 'bcrypt'
import { jwt } from 'jsonwebtoken'

export const signUpPage = {
  path: '/api/signup',
  method: 'post',
  handler: async (req, res) => {
    const { email, password } = req.body
    const db = connectToDb()

    const user = await db.collection('users').findOne({ email })

    if (user) {
      res.sendStatus(409)
    }

    // Encrypting user's' password
    const passwordHash = await bcrypt.hash(password, 10)

    const startingInfo = {
      hairColor: '',
      favoriteFood: '',
      bio: '',
    }

    const result = await db
      .collection('users')
      .insertOne({ email, passwordHash, info: startingInfo, isVerified: false })
    const { insertedId } = result

    // Generating a JSON web token

    jwt.sign(
      {
        id: insertedId,
        email,
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
  },
}