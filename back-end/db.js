import { MongoClient } from 'mongodb'
async function connectToDb(cb) {
  const client = new MongoClient('mongodb://127.0.0.1:27017/react-auth-db')
  await client.connect()
  cb()
}

export { connectToDb }
