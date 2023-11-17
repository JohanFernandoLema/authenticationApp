import express from 'express'
import jwt from 'jsonwebtoken'
import Users from '../models/User.js'
import { ObjectID } from 'mongodb'

const router = express.Router()

const updateUserInfoRoute = () => {
  router.put('/users/:userId', async (req, res) => {
    const { authorization } = req.headers
    const { userId } = req.params

    const updates = ({ favoriteFood, hairColor, bio }) =>
      ({
        favoriteFood,
        hairColor,
        bio,
      }(req.body))

    if (!authorization) {
      return res.status(401).json({ message: 'No authorization header sent' })
    }

    const token = authorization.split(' ')[1]

    jwt.verify(token, 'secret', async (err, decoded) => {
      if (err)
        return res.status(401).json({ message: 'Unable to verify token' })

      const { id } = decoded

      if (id !== userId) {
        return res
          .status(403)
          .json({ message: "Not allowed to edit that user's info" })
      }

      const result = await Users.findOneAndUpdate(
        { _id: ObjectID },
        { $set: { info: updates } },
        { returnOriginal: false }
      )
      const { email } = result.value

      jwt.sign({ id, email }, 'secret', { expiresIn: '2h' }, (err, token) => {
        if (err) {
          return res.status(200).json(err)
        }
        res.status(200).json({ token })
      })
    })
  })
}

export default updateUserInfoRoute
