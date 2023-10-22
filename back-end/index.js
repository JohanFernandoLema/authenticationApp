import express from 'express'
import { connectToDb } from './db.js'
import dotenv from 'dotenv'
// Connections for making the server
const app = express()

// Middleware for enabling json
app.use(express.json())
dotenv.config()

// Database Connection
connectToDb(() => {
  console.log('Successfully running the local database')
  app.listen(4000, () => {
    console.log(`App successfully running on port: 4000`)
  })
})
