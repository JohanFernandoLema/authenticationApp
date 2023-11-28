import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
// @desc  Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Authentication endpoint' })
})

// @desc Register a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.json({ message: 'User already exists' })
  }

  const saveUser = await User.create({
    name: name,
    email: email,
    password: password,
  })
  generateToken(res, saveUser._id)
  res
    .status(200)
    .json({ _id: saveUser._id, name: saveUser.name, email: saveUser.email })
})

// @desc Logout user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout endpoint' })
})

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile endpoint' })
})

// @desc Update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user profile endpoint' })
})
export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
