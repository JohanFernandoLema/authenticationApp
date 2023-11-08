import mongoose from 'mongoose'

const User = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  token: { type: String },
})

const UserSchema = mongoose.model('users', User)
export default UserSchema
