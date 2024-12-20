import express from 'express'
import cors from 'cors'

const app: express.Express = express()
const port = 3001

// app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})