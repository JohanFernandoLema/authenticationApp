import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.post('/api/users', userRoutes)

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`))
