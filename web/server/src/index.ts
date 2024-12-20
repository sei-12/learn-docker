import express from 'express'
const app: express.Express = express()
const port = 80

app.use(express.static('public'));

app.get('/api/hello_world', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})