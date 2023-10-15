import express from 'express'
import { MongoClient } from 'mongodb'

// Connections for making the server
const app = express()
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
app.listen(4000, () => {
  console.log(`App successfully running on port: 4000`)
})
