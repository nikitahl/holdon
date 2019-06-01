const express = require('express')
const app = express()
const port = 3001

app.use(express.urlencoded())

app.post('/', (req, res) => {
  const fs = require('fs')
  const start = parseInt(req.param('start'))
  fs.writeFile('./db/counter.json', JSON.stringify({ start: start }), 'utf8', () => {})
  res.send('ok')
})

app.listen(port, () => console.log(`Holdon listening on port ${port}!`))
