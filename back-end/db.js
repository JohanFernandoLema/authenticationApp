import { MongoClient } from 'mongodb'
let db
async function connectToDb(cb) {
  const client = new MongoClient('mongodb://127.0.0.1:27017/react-auth-db')
  await client.connect()
  db = client.db()
  cb()
}

export { db, connectToDb }
