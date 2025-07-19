import express from 'express'
import dotenv from 'dotenv'

//Load env variables
dotenv.config()

console.log(process.env)

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello from Baby Mart Server!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Client URL: ${process.env.CLIENT_URL}`)
  console.log(`Client URL: ${process.env.ADMIN_URL}`)
  console.log(`API docs available at: http://localhost:${PORT}/api-docs`)
})
