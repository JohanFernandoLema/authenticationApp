import mongoose from 'mongoose'

const SignUp = new mongoose.Schema({
  email: String,
  password: String,
  hairColor: String,
  favoriteFood: String,
  bio: String,
  token: String,
})

export const SignUpSchema = mongoose.model('users', SignUp)
