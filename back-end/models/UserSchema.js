import mongoose from 'mongoose'

const SignUp = new mongoose.Schema({
  email: String,
  password: String,
  hairColor: String,
  favoriteFood: String,
  bio: String,
  token: String,
})

export const User = mongoose.model('users', SignUp)
