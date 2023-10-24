import express from 'express'
const app = express()

app.listen(process.env.PORT, () => {
  console.log('Connected successfully to back-end')
})
