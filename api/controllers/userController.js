import asyncHandler from 'express-async-handler'

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Authentication endpoint' })
})

export { authUser }
