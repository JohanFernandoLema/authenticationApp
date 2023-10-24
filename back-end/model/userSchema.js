import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  unique: true,
})

const userSignUp = mongoose.model('users', userSchema)

export default userSignUp
