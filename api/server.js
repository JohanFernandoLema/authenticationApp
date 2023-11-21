import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/userMiddleware.js'
dotenv.config()
const port = process.env.PORT || 5000
const app = express()

// Middlewares
app.use(express.json())
// app.use(notFound)
app.use(errorHandler)

app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`)
})
