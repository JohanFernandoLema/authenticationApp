import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  console.log('Home page is working - send more data :)')
})

export default router
