import express from 'express'
import { MongoClient } from 'mongodb'

// Middleware for enabling json
app.use(express.json())
// Connections for making the server
const app = express()

const client = new MongoClient('mongodb://localhost:27017')
await client.connect()

//Connection to database
const db = client.db()

app.listen(4000, () => {
  console.log(`App successfully running on port: 4000`)
})
