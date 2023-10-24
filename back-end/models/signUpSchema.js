import mongoose from 'mongoose'

const SignUp = new mongoose.Schema({
  email: String,
  password: String,
})

export const SignUpSchema = mongoose.model('users', SignUp)
