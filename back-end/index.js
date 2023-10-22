import express from 'express'
import { connectToDb } from './db.js'
import { routes } from './routes/indexRoutes.js'
import dotenv from 'dotenv'
// Connections for making the server
const app = express()

routes.forEach((route) => {
  app[route.method](route.path, route.handler)
})
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
